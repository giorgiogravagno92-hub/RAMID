import React, { useState, useEffect } from 'react';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { WorkerDashboard } from './pages/WorkerDashboard';
import { CompanyDashboard } from './pages/CompanyDashboard';
import { AdminDashboard } from './pages/AdminDashboard';
import { WordPressPages } from './pages/WordPressPages';
import { MobileSimulator } from './components/MobileSimulator';
import { InstallAppBanner } from './components/InstallAppBanner';
import { api } from './utils/api';

function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [token, setToken] = useState<string | null>(null);
  const [layoutMode, setLayoutMode] = useState<'web' | 'app'>('web');
  const [loginRole, setLoginRole] = useState<string>('WORKER');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  // Mobile simulator states
  const [mobileTab, setMobileTab] = useState<string>('profile');
  const [mobileNotification, setMobileNotification] = useState<{ title: string; message: string } | null>(null);

  // Poll for background simulated notifications if logged in as Worker
  useEffect(() => {
    if (!currentUser || currentUser.role !== 'WORKER') return;

    const interval = setInterval(async () => {
      try {
        const notifs = await api.worker.getNotifications();
        const unread = notifs.filter((n: any) => !n.read);
        if (unread.length > 0) {
          // Trigger push banner
          setMobileNotification({
            title: unread[0].title,
            message: unread[0].message
          });
          // Mark read so it doesn't notify again
          await api.worker.markNotificationRead(unread[0].id);
        }
      } catch (err) {
        // Suppress logs
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [currentUser]);

  useEffect(() => {
    // Check if direct email verification is requested via URL link (?verifyEmail=...)
    const urlParams = new URLSearchParams(window.location.search);
    const verifyEmailParam = urlParams.get('verifyEmail');
    if (verifyEmailParam) {
      api.auth.verifyEmailDirect(verifyEmailParam)
        .then((data: any) => {
          if (data && data.token && data.user) {
            localStorage.setItem('ramid_token', data.token);
            setToken(data.token);
            setCurrentUser(data.user);
            if (data.user.role === 'ADMIN') {
              setCurrentPage('admin');
            } else {
              setCurrentPage('dashboard');
              setMobileTab(data.user.role === 'WORKER' ? 'profile' : 'search');
            }
            window.history.replaceState({}, document.title, window.location.pathname);
          }
        })
        .catch((err: any) => {
          console.error('Direct email verification failed:', err);
        });
      return;
    }

    // Check if token and user data are passed in URL (legacy auto-login)
    const urlToken = urlParams.get('token');
    const urlUserJson = urlParams.get('user');

    if (urlToken && urlUserJson) {
      try {
        const decodedUser = JSON.parse(decodeURIComponent(urlUserJson));
        localStorage.setItem('ramid_token', urlToken);
        setToken(urlToken);
        setCurrentUser(decodedUser);
        
        if (decodedUser.role === 'ADMIN') {
          setCurrentPage('admin');
        } else {
          setCurrentPage('dashboard');
          setMobileTab(decodedUser.role === 'WORKER' ? 'profile' : 'search');
        }
        
        // Clean query parameters from URL bar
        window.history.replaceState({}, document.title, window.location.pathname);
        return;
      } catch (err) {
        console.error('Error parsing auto-login user:', err);
      }
    }

    // Otherwise, check local token on mount
    const savedToken = localStorage.getItem('ramid_token');
    if (savedToken) {
      setToken(savedToken);
      fetchMe();
    }
  }, []);

  const fetchMe = async () => {
    try {
      const user = await api.auth.me();
      setCurrentUser(user);
      if (user.role === 'ADMIN') {
        setCurrentPage('admin');
      } else {
        setCurrentPage('dashboard');
        setMobileTab(user.role === 'WORKER' ? 'profile' : 'search');
      }
    } catch (err) {
      handleLogout();
    }
  };

  const handleLoginSuccess = (user: any, userToken: string) => {
    localStorage.setItem('ramid_token', userToken);
    setToken(userToken);
    setCurrentUser(user);
    setMobileMenuOpen(false);
    
    if (user.role === 'ADMIN') {
      setCurrentPage('admin');
    } else {
      setCurrentPage('dashboard');
      setMobileTab(user.role === 'WORKER' ? 'profile' : 'search');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('ramid_token');
    setToken(null);
    setCurrentUser(null);
    setCurrentPage('home');
    setMobileMenuOpen(false);
  };

  const triggerMobileNotification = (title: string, message: string) => {
    setMobileNotification({ title, message });
  };

  const handleNavigate = (page: string, role?: string) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    if (role) {
      setLoginRole(role);
    }
  };

  // Decide what dashboard content to show inside the layout
  const renderDashboardContent = () => {
    if (!currentUser) return null;
    if (currentUser.role === 'WORKER') {
      // In mobile mode, we override tabs by state. In web mode, we show everything together
      return <WorkerDashboard onNotifyMobile={triggerMobileNotification} />;
    }
    if (currentUser.role === 'COMPANY') {
      return <CompanyDashboard onNotifyMobile={triggerMobileNotification} />;
    }
    return null;
  };

  return (
    <div className="app-container">
      {/* Global Header Navbar */}
      <header className="header">
        <div className="container header-wrap">
          <div className="logo" style={{ cursor: 'pointer' }} onClick={() => handleNavigate('home')}>
            📍 Ramid
          </div>

          <div className={`header-actions ${mobileMenuOpen ? 'open' : ''}`} style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <ul className="nav-menu">
              {!currentUser && currentPage !== 'home' && (
                <>
                  <li className={`nav-link ${currentPage === 'home' ? 'active' : ''}`} onClick={() => handleNavigate('home')}>Home</li>
                </>
              )}
              {currentUser && currentUser.role === 'ADMIN' && (
                <>
                  <li className={`nav-link ${currentPage === 'home' ? 'active' : ''}`} onClick={() => handleNavigate('home')}>Home</li>
                  <li className={`nav-link ${currentPage === 'admin' ? 'active' : ''}`} onClick={() => handleNavigate('admin')}>Admin</li>
                </>
              )}
            </ul>

            {/* Pulsante rapido Scarica / Installa App */}
            <button
              className="btn"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 12px',
                fontSize: '0.82rem',
                fontWeight: 700,
                background: 'rgba(59, 130, 246, 0.1)',
                border: '1px solid rgba(59, 130, 246, 0.3)',
                color: '#0284c7',
                borderRadius: '10px',
                cursor: 'pointer'
              }}
              onClick={() => {
                setMobileMenuOpen(false);
                window.dispatchEvent(new CustomEvent('trigger-pwa-install'));
              }}
            >
              <span>📲</span>
              <span>Scarica App</span>
            </button>

            {currentUser ? (
              currentUser.role === 'WORKER' ? (
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', lineHeight: '1.2' }}>
                    <span style={{ fontSize: '0.9rem', fontWeight: 'bold', color: 'var(--text-primary)' }}>
                      {currentUser.profile?.firstName || ''} {currentUser.profile?.lastName || ''}
                    </span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                      {currentUser.email}
                    </span>
                  </div>
                  <button className="btn btn-secondary" style={{ padding: '6px 12px', fontSize: '0.8rem' }} onClick={handleLogout}>Esci</button>
                </div>
              ) : (
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{currentUser.email}</span>
                  <button className="btn btn-secondary" style={{ padding: '8px 16px', fontSize: '0.85rem' }} onClick={handleLogout}>Esci</button>
                </div>
              )
            ) : (
              currentPage !== 'home' && (
                <button className="btn btn-primary" style={{ padding: '8px 16px', fontSize: '0.85rem' }} onClick={() => handleNavigate('login', 'WORKER')}>Accedi</button>
              )
            )}
          </div>

          <button className={`hamburger-btn ${mobileMenuOpen ? 'open' : ''}`} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <div className="hamburger-line"></div>
            <div className="hamburger-line"></div>
            <div className="hamburger-line"></div>
          </button>
        </div>
      </header>

      {/* Main Page Render Area */}
      <main className="main-content">
        {/* Render Home */}
        {currentPage === 'home' && <Home onNavigate={handleNavigate} />}

        {/* Render Login */}
        {currentPage === 'login' && <Login initialRole={loginRole} onLoginSuccess={handleLoginSuccess} />}

        {/* Render WordPress simulated website */}
        {currentPage === 'wordpress' && <WordPressPages />}

        {/* Render Admin dashboard */}
        {currentPage === 'admin' && currentUser?.role === 'ADMIN' && <AdminDashboard />}

        {/* Render Candidate / Company dashboards */}
        {currentPage === 'dashboard' && currentUser && (
          layoutMode === 'app' ? (
            <MobileSimulator 
              activeTab={mobileTab} 
              onTabChange={setMobileTab} 
              userRole={currentUser.role}
              notification={mobileNotification}
              onCloseNotification={() => setMobileNotification(null)}
            >
              {renderDashboardContent()}
            </MobileSimulator>
          ) : (
            <div className="container" style={{ padding: currentUser.role === 'WORKER' ? '20px 24px' : '40px 24px' }}>
              {currentUser.role !== 'WORKER' && (
                <div className="flex-between mb-24">
                  <div>
                    <h2 style={{ background: 'var(--grad-primary)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                      Area Ricerca Personale
                    </h2>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Cerca i migliori candidati e gestisci le tue proposte di lavoro.</p>
                  </div>
                </div>
              )}
              <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                {renderDashboardContent()}
              </div>
            </div>
          )
        )}
      </main>

      {/* PWA Direct Installation Banner & iOS Guide */}
      <InstallAppBanner />
    </div>
  );
}

export default App;
