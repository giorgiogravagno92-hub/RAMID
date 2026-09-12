export const BACKEND_URL = (import.meta as any).env.VITE_BACKEND_URL || 'http://localhost:5000';
export const API_BASE_URL = `${BACKEND_URL}/api`;

// Helper for local mock storage fallback
const getMockData = (key: string, defaultValue: any) => {
  try {
    const data = localStorage.getItem(`ramid_mock_${key}`);
    return data ? JSON.parse(data) : defaultValue;
  } catch (e) {
    return defaultValue;
  }
};

const setMockData = (key: string, value: any) => {
  try {
    localStorage.setItem(`ramid_mock_${key}`, JSON.stringify(value));
  } catch (e) {}
};

// Automatic one-time cleanup of all legacy mock accounts and stale tokens
if (!localStorage.getItem('ramid_db_cleaned_v6')) {
  try {
    const keysToRemove = [
      'ramid_mock_workers',
      'ramid_mock_company_profile',
      'ramid_mock_proposals',
      'ramid_mock_favorites',
      'ramid_mock_interviews',
      'ramid_mock_notifications',
      'ramid_mock_initialized',
      'ramid_mock_initialized_v2',
      'ramid_mock_initialized_v3',
      'ramid_token',
      'ramid_last_otp'
    ];
    keysToRemove.forEach(k => localStorage.removeItem(k));
    setMockData('workers', []);
    setMockData('company_profile', null);
    setMockData('proposals', []);
    setMockData('favorites', []);
    setMockData('interviews', []);
    setMockData('notifications', []);
    localStorage.setItem('ramid_db_cleaned_v6', 'true');
  } catch (e) {}
}

// Check server status
let isBackendOffline = false;

const request = async (method: string, path: string, body?: any) => {
  const token = localStorage.getItem('ramid_token');
  const headers: any = {
    'Content-Type': 'application/json'
  };
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  // Create an abort controller with a 3.5s timeout so Android webview never hangs indefinitely
  const controller = new AbortController();
  const timeoutId = setTimeout(() => {
    try { controller.abort(); } catch (e) {}
  }, 3500);

  try {
    const res = await fetch(`${API_BASE_URL}${path}`, {
      method,
      headers,
      body: body ? JSON.stringify(body) : undefined,
      signal: controller.signal
    });
    clearTimeout(timeoutId);

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err.error || `Request failed with status ${res.status}`);
    }
    isBackendOffline = false;
    return await res.json();
  } catch (error: any) {
    clearTimeout(timeoutId);
    console.warn(`API call ${method} ${path} failed or offline (${error?.message || error}). Using mock fallback.`);
    isBackendOffline = true;
    return handleMockFallback(method, path, body);
  }
};

// Simulated mock fallback engine in case backend server is not running
const handleMockFallback = (method: string, path: string, body?: any) => {
  if (path.startsWith('/auth/login')) {
    const { email, vatNumber } = body || {};
    const emailStr = String(email || vatNumber || '');
    const role = emailStr.includes('admin') ? 'ADMIN' : (emailStr.includes('IT') || emailStr.includes('pec') ? 'COMPANY' : 'WORKER');
    const mockUser = {
      id: `u-${Date.now()}`,
      email: emailStr || 'utente@ramid.it',
      role
    };
    localStorage.setItem('ramid_token', 'mock-jwt-token-1234');
    return { token: 'mock-jwt-token-1234', user: mockUser };
  }

  if (path.startsWith('/auth/social-login')) {
    const { role } = body || {};
    const userRole = role === 'COMPANY' ? 'COMPANY' : 'WORKER';
    const mockUser = {
      id: `u-${Date.now()}`,
      email: body?.email || 'social-user@example.com',
      role: userRole
    };
    localStorage.setItem('ramid_token', 'mock-jwt-token-1234');
    return { token: 'mock-jwt-token-1234', user: mockUser };
  }

  if (path.startsWith('/auth/forgot-password') || path.startsWith('/auth/reset-password')) {
    return { success: true, message: 'Operazione completata con successo' };
  }

  if (path.startsWith('/auth/verify-email')) {
    const mockUser = { id: 'u-verified', email: 'worker@demo.it', role: 'WORKER' };
    return { success: true, token: 'mock-jwt-token-1234', user: mockUser };
  }

  if (path.startsWith('/auth/verification-status')) {
    return { verified: true };
  }

  if (path.startsWith('/auth/register')) {
    const { email, password, role, profileData } = body || {};
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;
    if (password && !passwordRegex.test(password)) {
      throw new Error('La password deve contenere almeno 8 caratteri, una lettera maiuscola, un numero e un simbolo.');
    }
    const mockUser = { id: `u-${Date.now()}`, email: email || 'nuovo@ramid.it', role: role || 'WORKER' };
    localStorage.setItem('ramid_token', 'mock-jwt-token-1234');
    if (role === 'COMPANY') {
      const companyObj = {
        companyType: 'AZIENDA',
        companyName: profileData?.companyName || 'Azienda Registrata',
        vatNumber: profileData?.vatNumber || 'IT12345678901',
        address: profileData?.address || '',
        city: profileData?.city || '',
        province: profileData?.province || '',
        sigla: profileData?.sigla || '',
        industry: profileData?.industry || '',
        contactPerson: profileData?.companyName || 'Referente',
        contactPhone: profileData?.contactPhone || ''
      };
      setMockData('company_profile', companyObj);
    } else if (role === 'WORKER') {
      const workerObj = {
        id: `w-${Date.now()}`,
        firstName: profileData?.firstName || 'Candidato',
        lastName: profileData?.lastName || 'Registrato',
        phone: '',
        profession: '',
        city: '',
        province: '',
        sigla: '',
        region: '',
        educationLevel: 'NESSUNO',
        educationField: '',
        educationTitles: '[]',
        skills: '{"computerSkills":{},"organizationalSkills":{}}',
        availabilityStatus: 'NON_DISPONIBILE',
        availabilityRegionsProvinces: '[]',
        availabilityContracts: '[]',
        availabilityRoles: '[]',
        desiredSalary: '',
        cvPdfUrl: '',
        photoUrl: '',
        notes: '',
        workExperiences: []
      };
      const currentWorkers = getMockData('workers', []);
      setMockData('workers', [...currentWorkers, workerObj]);
    }
    return { token: 'mock-jwt-token-1234', user: mockUser };
  }

  if (path.startsWith('/auth/me')) {
    const token = localStorage.getItem('ramid_token');
    if (!token) throw new Error('Unauthorized');
    return { 
      id: 'u-current', 
      email: 'utente@ramid.it', 
      role: 'COMPANY'
    };
  }

  // WORKER ENDPOINTS
  if (path.startsWith('/workers/profile')) {
    const workers = getMockData('workers', []);
    const currentWorker = (workers && workers.length > 0) ? workers[0] : {
      id: 'w-new',
      firstName: '',
      lastName: '',
      phone: '',
      profession: '',
      city: '',
      province: '',
      sigla: '',
      region: '',
      educationLevel: 'NESSUNO',
      educationField: '',
      educationTitles: '[]',
      skills: '{"computerSkills":{},"organizationalSkills":{}}',
      availabilityStatus: 'NON_DISPONIBILE',
      availabilityRegionsProvinces: '[]',
      availabilityContracts: '[]',
      availabilityRoles: '[]',
      desiredSalary: '',
      cvPdfUrl: '',
      photoUrl: '',
      notes: '',
      workExperiences: []
    };
    
    if (method === 'GET') {
      return currentWorker;
    }
    if (method === 'PUT') {
      const updatedWorker = { ...currentWorker, ...(body || {}) };
      setMockData('workers', [updatedWorker]);
      return updatedWorker;
    }
  }

  if (path.startsWith('/workers/availability')) {
    const workers = getMockData('workers', []);
    const currentWorker = (workers && workers.length > 0) ? workers[0] : { availabilityStatus: 'NON_DISPONIBILE' };
    currentWorker.availabilityStatus = body?.status || 'DISPONIBILE_PROPOSTE';
    if (body?.status !== 'NON_DISPONIBILE') {
      currentWorker.profession = body?.profession || currentWorker.profession;
      currentWorker.city = body?.city || currentWorker.city;
      currentWorker.maxDistanceKm = Number(body?.maxDistanceKm) || currentWorker.maxDistanceKm;
      currentWorker.availabilityDetails = body?.availabilityDetails || '';
      currentWorker.availabilityRegionsProvinces = body?.availabilityRegionsProvinces || currentWorker.availabilityRegionsProvinces || '[]';
      currentWorker.availabilityContracts = body?.availabilityContracts || currentWorker.availabilityContracts || '[]';
      currentWorker.availabilityRoles = body?.availabilityRoles || currentWorker.availabilityRoles || '[]';
      currentWorker.availabilityNotes = body?.notes || '';
    }
    setMockData('workers', [currentWorker]);
    return { success: true, availabilityStatus: currentWorker.availabilityStatus, profile: currentWorker };
  }

  if (path.startsWith('/workers/notifications')) {
    return [];
  }

  if (path.startsWith('/workers/interviews')) {
    return [];
  }

  if (path.startsWith('/workers/proposals')) {
    return [];
  }

  if (path.startsWith('/workers/upload-cv')) {
    const workers = getMockData('workers', []);
    const fileUrl = `/uploads/cv-${Date.now()}.pdf`;
    if (workers.length > 0) {
      workers[0].cvPdfUrl = fileUrl;
      setMockData('workers', workers);
    }
    return { success: true, cvPdfUrl: fileUrl };
  }

  if (path.startsWith('/workers/upload-photo')) {
    const workers = getMockData('workers', []);
    const fileUrl = body?.base64Data || '';
    if (workers.length > 0) {
      workers[0].photoUrl = fileUrl;
      setMockData('workers', workers);
    }
    return { success: true, photoUrl: fileUrl };
  }

  // COMPANY ENDPOINTS
  if (path.startsWith('/companies/profile')) {
    const current = getMockData('company_profile', {
      companyType: 'AZIENDA',
      companyName: '',
      vatNumber: '',
      address: '',
      city: '',
      province: '',
      sigla: '',
      industry: '',
      contactPerson: '',
      contactPhone: '',
      logoUrl: ''
    });
    if (method === 'GET') {
      return current;
    }
    if (method === 'PUT') {
      const updated = { ...current, ...(body || {}) };
      setMockData('company_profile', updated);
      return updated;
    }
  }

  if (path.startsWith('/companies/search')) {
    const workers = getMockData('workers', []);
    return workers || [];
  }

  if (path.startsWith('/companies/workers/')) {
    const workers = getMockData('workers', []);
    return (workers && workers.length > 0) ? workers[0] : null;
  }

  if (path.startsWith('/companies/favorites')) {
    if (method === 'GET') return [];
    return { success: true, isFavorite: true };
  }

  if (path.startsWith('/companies/interviews')) {
    return { success: true };
  }

  if (path.startsWith('/companies/proposals')) {
    if (method === 'GET') return [];
    return { success: true };
  }

  if (path.startsWith('/companies/notifications')) {
    if (method === 'GET') return [];
    return { success: true };
  }

  // ADMIN ENDPOINTS
  if (path.startsWith('/admin/stats')) {
    return {
      totals: { workers: 0, companies: 0, interviews: 0, favorites: 0 },
      availabilityDistribution: { DISPONIBILE_SUBITO: 0, VALUTO_OFFERTE: 0, NON_DISPONIBILE: 0 },
      interviewStatusDistribution: { PENDING: 0, ACCEPTED: 0, DECLINED: 0 }
    };
  }

  if (path.startsWith('/admin/users')) {
    return [];
  }

  if (path.startsWith('/admin/companies')) {
    return [];
  }

  // WORDPRESS CMS ENDPOINTS
  if (path.startsWith('/wp/pages/')) {
    const key = path.split('/').pop() || 'home';
    const pages = getMockData('wp_pages', {});
    return pages[key] || { title: 'Not Found', content: '' };
  }

  if (path.startsWith('/wp/posts')) {
    return getMockData('wp_posts', []);
  }

  if (path.startsWith('/wp/faqs')) {
    return getMockData('wp_faqs', []);
  }

  if (path.startsWith('/wp/settings')) {
    return getMockData('wp_settings', { siteName: 'Ramid', maintenance: false });
  }

  return { success: true };
};

export const api = {
  isOffline: () => isBackendOffline,
  auth: {
    login: (body: any) => request('POST', '/auth/login', body),
    register: (body: any) => request('POST', '/auth/register', body),
    me: () => request('GET', '/auth/me'),
    socialLogin: (body: any) => request('POST', '/auth/social-login', body),
    sendOtp: (body: any) => request('POST', '/auth/send-otp', body),
    verifyOtp: (body: any) => request('POST', '/auth/verify-otp', body),
    forgotPassword: (body: any) => request('POST', '/auth/forgot-password', body),
    resetPassword: (body: any) => request('POST', '/auth/reset-password', body),
    verifyEmailDirect: (email: string) => request('GET', `/auth/verify-email?email=${encodeURIComponent(email)}`),
    checkVerificationStatus: (email: string, token: string) => request('GET', `/auth/verification-status?email=${encodeURIComponent(email)}&token=${encodeURIComponent(token)}`)
  },
  worker: {
    getProfile: () => request('GET', '/workers/profile'),
    updateProfile: (body: any) => request('PUT', '/workers/profile', body),
    toggleAvailability: (body: any) => request('PUT', '/workers/availability', body),
    getNotifications: () => request('GET', '/workers/notifications'),
    markNotificationRead: (id: string) => request('PUT', `/workers/notifications/${id}/read`),
    getInterviews: () => request('GET', '/workers/interviews'),
    respondToInterview: (id: string, status: string) => request('PUT', `/workers/interviews/${id}/respond`, { status }),
    uploadCv: (body: any) => request('POST', '/workers/upload-cv', body),
    uploadPhoto: (body: any) => request('POST', '/workers/upload-photo', body),
    getProposals: () => request('GET', '/workers/proposals'),
    respondToProposal: (id: string, status: string) => request('POST', `/workers/proposals/${id}/respond`, { status })
  },
  company: {
    getProfile: () => request('GET', '/companies/profile'),
    updateProfile: (body: any) => request('PUT', '/companies/profile', body),
    uploadId: (body: any) => request('POST', '/companies/upload-id', body),
    search: (params: any) => {
      const q = new URLSearchParams(params).toString();
      return request('GET', `/companies/search?${q}`);
    },
    getWorkerDetails: (id: string) => request('GET', `/companies/workers/${id}`),
    toggleFavorite: (workerId: string) => request('POST', '/companies/favorites', { workerId }),
    getFavorites: () => request('GET', '/companies/favorites'),
    requestInterview: (body: any) => request('POST', '/companies/interviews', body),
    createProposal: (body: any) => request('POST', '/companies/proposals', body),
    getProposals: () => request('GET', '/companies/proposals'),
    updateProposal: (id: string, body: any) => request('PUT', `/companies/proposals/${id}`, body),
    deleteProposal: (id: string) => request('DELETE', `/companies/proposals/${id}`),
    getNotifications: () => request('GET', '/companies/notifications'),
    markNotificationRead: (id: string) => request('PUT', `/companies/notifications/${id}/read`)
  },
  admin: {
    getStats: () => request('GET', '/admin/stats'),
    getUsers: () => request('GET', '/admin/users'),
    getCompanies: () => request('GET', '/admin/companies'),
    deleteUser: (id: string) => request('DELETE', `/admin/users/${id}`),
    sendNotification: (body: any) => request('POST', '/admin/notifications', body)
  },
  wp: {
    getPage: (key: string) => request('GET', `/wp/pages/${key}`),
    getPosts: () => request('GET', '/wp/posts'),
    getPost: (slug: string) => request('GET', `/wp/posts/${slug}`),
    getFAQs: () => request('GET', '/wp/faqs'),
    getSettings: () => request('GET', '/wp/settings'),
    updateSettings: (body: any) => request('PUT', '/wp/settings', body),
    updatePage: (key: string, body: any) => request('PUT', `/wp/pages/${key}`, body),
    createPost: (body: any) => request('POST', '/wp/posts', body),
    deletePost: (id: number) => request('DELETE', `/wp/posts/${id}`),
    createFAQ: (body: any) => request('POST', '/wp/faqs', body),
    deleteFAQ: (id: number) => request('DELETE', `/wp/faqs/${id}`)
  }
};
