import React, { useState, useEffect } from 'react';
import { api, BACKEND_URL } from '../utils/api';
import { PROFESSIONS, CITIES, PROVINCE_SIGLE, ORGANIZATIONAL_SKILLS_LIST, COMMUNICATIVE_SKILLS_LIST, COMPANY_SECTORS } from '../utils/constants';

interface CompanyDashboardProps {
  onNotifyMobile?: (title: string, message: string) => void;
}

const capitalizeCity = (str: string) => {
  if (!str) return '';
  return str
    .toLowerCase()
    .split(' ')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
};

const formatCapitalizedWords = (str: string) => {
  if (!str) return '';
  return str
    .split(' ')
    .map(w => w ? w.charAt(0).toUpperCase() + w.slice(1).toLowerCase() : '')
    .join(' ');
};

const formatNumberThousands = (val: string) => {
  if (!val) return '';
  const cleanDigits = val.replace(/\D/g, '');
  if (!cleanDigits) return '';
  return Number(cleanDigits).toLocaleString('it-IT');
};

const isLaurea = (level: string) => level === 'LAUREA' || level === 'LAUREA_TRIENNALE' || level === 'LAUREA_SPECIALISTICA' || level === 'LAUREA_MAGISTRALE';

const handleOpenCvPdf = (pdfUrl: string) => {
  if (!pdfUrl) return;
  try {
    if (pdfUrl.startsWith('data:')) {
      const arr = pdfUrl.split(',');
      const mimeMatch = arr[0].match(/:(.*?);/);
      const mime = mimeMatch ? mimeMatch[1] : 'application/pdf';
      const bstr = atob(arr[1]);
      let n = bstr.length;
      const u8arr = new Uint8Array(n);
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }
      const blob = new Blob([u8arr], { type: mime });
      const blobUrl = URL.createObjectURL(blob);
      window.open(blobUrl, '_blank');
    } else {
      const backendUrl = api.isOffline() ? '' : BACKEND_URL;
      window.open(backendUrl + pdfUrl, '_blank');
    }
  } catch (err) {
    console.error('Error opening CV PDF:', err);
    window.open(pdfUrl, '_blank');
  }
};

export const CompanyDashboard: React.FC<CompanyDashboardProps> = ({ onNotifyMobile }) => {
  const [activeTab, setActiveTab] = useState<'profile' | 'create_proposal' | 'list_proposals' | 'accepted_candidates'>('create_proposal');

  // Company Profile states
  const [companyProfile, setCompanyProfile] = useState<any>({
    companyName: 'Innovate Tech S.p.A.',
    companyType: 'AZIENDA',
    vatNumber: 'IT12345678901',
    address: 'Via Roma 100',
    city: 'Milano',
    residenzaCapCitta: '20100 Milano (MI)',
    fiscalCode: '12345678901',
    industry: 'Tecnologia & Software',
    contactPerson: 'Ing. Alessandro Bianchi',
    contactPhone: '+39 02 1234567',
    logoUrl: ''
  });
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [profileFormData, setProfileFormData] = useState<any>({});

  // Onboarding complete profile form states
  const [onboardAddress, setOnboardAddress] = useState('');
  const [onboardCity, setOnboardCity] = useState('');
  const [onboardProvince, setOnboardProvince] = useState('');
  const [onboardSigla, setOnboardSigla] = useState('');
  const [onboardSector, setOnboardSector] = useState('');
  const [onboardError, setOnboardError] = useState('');
  const [onboardLoading, setOnboardLoading] = useState(false);

  // Proposal Creation / Edit states
  const [editingProposalId, setEditingProposalId] = useState<string | null>(null);
  const [selectedProfessions, setSelectedProfessions] = useState<string[]>([]);
  
  // Location 1
  const [loc1Address, setLoc1Address] = useState('');
  const [loc1City, setLoc1City] = useState('');
  const [loc1Province, setLoc1Province] = useState('');
  const [loc1Sigla, setLoc1Sigla] = useState('');

  // Location 2 (optional)
  const [hasLoc2, setHasLoc2] = useState(false);
  const [loc2Address, setLoc2Address] = useState('');
  const [loc2City, setLoc2City] = useState('');
  const [loc2Province, setLoc2Province] = useState('');
  const [loc2Sigla, setLoc2Sigla] = useState('');

  // Education titles (multiple select)
  const [selectedEdus, setSelectedEdus] = useState<string[]>(['Nessuna preferenza']);

  // License & Car
  const [hasLicense, setHasLicense] = useState(false);
  const [hasCar, setHasCar] = useState(false);

  // Salary Range (formatted with thousands)
  const [minSalary, setMinSalary] = useState('');
  const [maxSalary, setMaxSalary] = useState('');

  // Notes
  const [notes, setNotes] = useState('');
  const [selectedContracts, setSelectedContracts] = useState<string[]>([]);

  // Saved Proposals
  const [proposals, setProposals] = useState<any[]>([]);
  const [submissionSuccessMsg, setSubmissionSuccessMsg] = useState<string | null>(null);

  // Selected Proposal Accepted Candidates Drawer / Modal
  const [selectedProposal, setSelectedProposal] = useState<any | null>(null);
  const [notifications, setNotifications] = useState<any[]>([]);
  const [viewingWorkerCv, setViewingWorkerCv] = useState<any | null>(null);

  const fetchNotifications = async () => {
    try {
      const data = await api.company.getNotifications();
      setNotifications(data || []);
    } catch (err) {
      console.error(err);
    }
  };

  const handleViewWorkerCv = async (workerId: string, notificationId?: string) => {
    try {
      const worker = await api.company.getWorkerDetails(workerId);
      setViewingWorkerCv(worker);
      if (notificationId) {
        await api.company.markNotificationRead(notificationId);
        fetchNotifications();
      }
    } catch (err) {
      console.error('Error fetching worker details:', err);
      alert('Impossibile caricare i dettagli del candidato CV.');
    }
  };

  useEffect(() => {
    fetchCompanyProfile();
    fetchProposals();
    fetchNotifications();
    const interval = setInterval(fetchNotifications, 5000);
    return () => clearInterval(interval);
  }, []);

  const fetchCompanyProfile = async () => {
    try {
      const prof = await api.company.getProfile();
      if (prof) {
        setCompanyProfile(prof);
        setProfileFormData(prof);
        setOnboardAddress(prof.address || '');
        setOnboardCity(prof.city || '');
        setOnboardProvince(prof.province || '');
        setOnboardSigla(prof.sigla || (prof.province ? (PROVINCE_SIGLE[prof.province] || '') : ''));
        setOnboardSector(prof.industry && prof.industry !== 'Altro' ? prof.industry : '');
        if (!editingProposalId) {
          setLoc1Address(prof.address || '');
          setLoc1City(prof.city || '');
          setLoc1Province(prof.province || '');
          setLoc1Sigla(prof.sigla || (prof.province ? (PROVINCE_SIGLE[prof.province] || '') : ''));
        }
      }
    } catch (err) {
      console.log('Error fetching company profile, using default mock');
      setProfileFormData(companyProfile);
      setOnboardAddress(companyProfile.address || '');
      setOnboardCity(companyProfile.city || '');
      setOnboardProvince(companyProfile.province || '');
      setOnboardSigla(companyProfile.sigla || '');
      setOnboardSector(companyProfile.industry && companyProfile.industry !== 'Altro' ? companyProfile.industry : '');
      setLoc1Address(companyProfile.address || '');
      setLoc1City(companyProfile.city || '');
      setLoc1Province(companyProfile.province || '');
      setLoc1Sigla(companyProfile.sigla || '');
    }
  };

  const handleOnboardSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setOnboardError('');
    const isPF = companyProfile.companyType === 'PERSONA_FISICA';
    if (!onboardCity.trim() || !onboardProvince || (!isPF && (!onboardAddress.trim() || !onboardSector))) {
      setOnboardError('Tutti i campi obbligatori sono richiesti.');
      return;
    }
    setOnboardLoading(true);
    try {
      const updated = await api.company.updateProfile({
        ...companyProfile,
        address: isPF ? 'N/D' : onboardAddress,
        city: onboardCity,
        province: onboardProvince,
        sigla: onboardSigla,
        industry: isPF ? 'Persona Fisica' : onboardSector,
        contactPerson: companyProfile.contactPerson || companyProfile.companyName || 'Referente'
      });
      if (updated) {
        setCompanyProfile(updated);
        setProfileFormData(updated);
        // Sync creation locations
        setLoc1Address(onboardAddress);
        setLoc1City(onboardCity);
        setLoc1Province(onboardProvince);
        setLoc1Sigla(onboardSigla);
      }
    } catch (err: any) {
      setOnboardError(err.message || 'Errore nel salvataggio del profilo.');
    } finally {
      setOnboardLoading(false);
    }
  };

  const fetchProposals = async () => {
    try {
      const list = await api.company.getProposals();
      if (Array.isArray(list)) {
        setProposals(list);
      }
    } catch (err) {
      console.log('Error fetching proposals');
    }
  };

  const handleSaveProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const updated = await api.company.updateProfile(profileFormData);
      setCompanyProfile(updated || profileFormData);
      setIsEditingProfile(false);
      alert('Profilo aziendale aggiornato con successo!');
    } catch (err) {
      console.error(err);
      setCompanyProfile(profileFormData);
      setIsEditingProfile(false);
    }
  };

  const handleIdUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = async () => {
      const base64Data = reader.result as string;
      try {
        const res = await api.company.uploadId({ base64Data });
        setCompanyProfile(res.company || { ...companyProfile, idDocumentUrl: res.idDocumentUrl });
        alert("Documento d'identità caricato con successo!");
      } catch (err: any) {
        alert(err.message || 'Errore durante il caricamento del documento.');
      }
    };
    reader.readAsDataURL(file);
  };

  const handleAddProfession = (prof: string) => {
    if (prof && !selectedProfessions.includes(prof)) {
      setSelectedProfessions([...selectedProfessions, prof]);
    }
  };

  const handleRemoveProfession = (prof: string) => {
    setSelectedProfessions(selectedProfessions.filter(p => p !== prof));
  };

  const resetProposalForm = (prof = companyProfile) => {
    setEditingProposalId(null);
    setSelectedProfessions([]);
    setLoc1Address(prof?.address || '');
    setLoc1City(prof?.city || '');
    setLoc1Province(prof?.province || '');
    setLoc1Sigla(prof?.sigla || (prof?.province ? (PROVINCE_SIGLE[prof.province] || '') : ''));
    setHasLoc2(false);
    setLoc2Address('');
    setLoc2City('');
    setLoc2Province('');
    setLoc2Sigla('');
    setSelectedEdus(['Nessuna preferenza']);
    setHasLicense(false);
    setHasCar(false);
    setMinSalary('');
    setMaxSalary('');
    setNotes('');
    setSelectedContracts([]);
  };

  const handleEditProposal = (prop: any) => {
    setEditingProposalId(prop.id);

    let parsedProfs: string[] = [];
    try { parsedProfs = JSON.parse(prop.professions || '[]'); } catch (e) {}
    setSelectedProfessions(parsedProfs);

    let parsedLocs: any[] = [];
    try { parsedLocs = JSON.parse(prop.locations || '[]'); } catch (e) {}
    if (parsedLocs.length > 0) {
      setLoc1Address(parsedLocs[0].address || '');
      setLoc1City(parsedLocs[0].city || '');
      setLoc1Province(parsedLocs[0].province || '');
      setLoc1Sigla(parsedLocs[0].sigla || '');
    }
    if (parsedLocs.length > 1) {
      setHasLoc2(true);
      setLoc2Address(parsedLocs[1].address || '');
      setLoc2City(parsedLocs[1].city || '');
      setLoc2Province(parsedLocs[1].province || '');
      setLoc2Sigla(parsedLocs[1].sigla || '');
    } else {
      setHasLoc2(false);
      setLoc2Address('');
      setLoc2City('');
      setLoc2Province('');
      setLoc2Sigla('');
    }

    let edus: string[] = ['Nessuna preferenza'];
    if (prop.educationTitle) {
      try {
        const parsed = JSON.parse(prop.educationTitle);
        if (Array.isArray(parsed)) {
          edus = parsed;
        } else {
          edus = [prop.educationTitle];
        }
      } catch (e) {
        edus = [prop.educationTitle];
      }
    }
    setSelectedEdus(edus);
    setHasLicense(Boolean(prop.hasLicense));
    setHasCar(Boolean(prop.hasCar));
    setMinSalary(prop.minSalary ? formatNumberThousands(prop.minSalary) : '');
    setMaxSalary(prop.maxSalary ? formatNumberThousands(prop.maxSalary) : '');
    setNotes(prop.notes || '');
    
    let parsedContracts: string[] = [];
    try {
      parsedContracts = JSON.parse(prop.contractType || '[]');
    } catch (e) {
      if (prop.contractType && prop.contractType !== 'Nessuna preferenza') {
        parsedContracts = [prop.contractType];
      }
    }
    setSelectedContracts(parsedContracts);

    setActiveTab('create_proposal');
  };

  const handleDeleteProposal = async (id: string) => {
    if (window.confirm('Sei sicuro di voler eliminare questa proposta di lavoro?')) {
      try {
        await api.company.deleteProposal(id);
        setProposals(proposals.filter(p => p.id !== id));
        if (selectedProposal && selectedProposal.id === id) {
          setSelectedProposal(null);
        }
      } catch (err) {
        console.error(err);
      }
    }
  };

  const handleSubmitProposal = async (e: React.FormEvent, targetStatus: 'DRAFT' | 'ACTIVE') => {
    e.preventDefault();

    if (selectedProfessions.length === 0) {
      alert('Seleziona almeno una professione ricercata.');
      return;
    }

    if (!loc1Province) {
      alert('Seleziona la provincia della sede principale.');
      return;
    }

    if (targetStatus === 'ACTIVE') {
      if (companyProfile.companyType === 'PERSONA_FISICA' && !companyProfile.idDocumentUrl) {
        alert("Errore: La persona fisica recruiter deve caricare obbligatoriamente il documento d'identità nella sezione 'Profilo' prima di poter pubblicare un annuncio.");
        return;
      }
      if (selectedContracts.length === 0) {
        alert('La tipologia di contratto offerto è obbligatoria per pubblicare la proposta.');
        return;
      }
    }
    if (selectedContracts.length > 2) {
      alert('Puoi selezionare al massimo 2 tipologie di contratto.');
      return;
    }

    const locationsArr = [
      { address: loc1Address, city: loc1City, province: loc1Province, sigla: loc1Sigla }
    ];

    if (hasLoc2 && loc2Province) {
      locationsArr.push({ address: loc2Address, city: loc2City, province: loc2Province, sigla: loc2Sigla });
    }

    const payload = {
      professions: JSON.stringify(selectedProfessions),
      locations: JSON.stringify(locationsArr),
      educationTitle: JSON.stringify(selectedEdus),
      hasLicense: false,
      hasCar: false,
      minSalary,
      maxSalary,
      notes,
      status: targetStatus,
      contractType: JSON.stringify(selectedContracts)
    };

    try {
      let savedProp: any = null;
      if (editingProposalId) {
        savedProp = await api.company.updateProposal(editingProposalId, payload);
        setProposals(proposals.map(p => p.id === editingProposalId ? savedProp : p));
      } else {
        savedProp = await api.company.createProposal(payload);
        if (savedProp) {
          setProposals([savedProp, ...proposals]);
        }
      }

      if (targetStatus === 'ACTIVE') {
        setSubmissionSuccessMsg('La sua richiesta è stata elaborata con successo. Riceverà le informazioni dei candidati che accetteranno la richiesta di ulteriori informazioni.');
        if (onNotifyMobile) {
          onNotifyMobile('Proposta Inviata 📩', 'Richiesta elaborata con successo. Inviata ai candidati attivi.');
        }
      } else {
        setSubmissionSuccessMsg('Proposta salvata in bozza con successo.');
      }

      resetProposalForm();
      setActiveTab('list_proposals');
      setTimeout(() => setSubmissionSuccessMsg(null), 10000);
    } catch (err) {
      console.error(err);
      alert('Si è verificato un errore nel salvataggio della proposta.');
    }
  };

  const handlePublishDraft = async (prop: any) => {
    try {
      const updated = await api.company.updateProposal(prop.id, { status: 'ACTIVE' });
      setProposals(proposals.map(p => p.id === prop.id ? updated : p));
      setSubmissionSuccessMsg('La sua richiesta è stata elaborata con successo. Riceverà le informazioni dei candidati che accetteranno la richiesta di ulteriori informazioni.');
      setTimeout(() => setSubmissionSuccessMsg(null), 10000);
    } catch (err) {
      console.error(err);
    }
  };

  const isProfileIncomplete = companyProfile.companyType === 'PERSONA_FISICA'
    ? (!companyProfile.city || !companyProfile.province || !companyProfile.contactPhone)
    : (!companyProfile.address || !companyProfile.city || !companyProfile.province || !companyProfile.sigla || !companyProfile.industry);

  if (isProfileIncomplete) {
    return (
      <div className="container" style={{ display: 'flex', justifyContent: 'center', padding: '40px 12px' }}>
        <div className="glass-card" style={{ width: '100%', maxWidth: '540px', padding: '24px 20px', textAlign: 'left', borderRadius: '16px' }}>
          <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            <div style={{ fontSize: '2.8rem', marginBottom: '8px' }}>🏢</div>
            <h2 style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: '8px', color: 'var(--text-primary)' }}>Completa il tuo Profilo Aziendale</h2>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
              Per poter inserire proposte di lavoro e visualizzare i candidati, inserisci i dettagli della sede operativa e il settore della tua attività.
            </p>
          </div>

          {onboardError && (
            <div style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid var(--accent-red)', color: 'var(--accent-red)', padding: '12px', borderRadius: '8px', marginBottom: '20px', fontSize: '0.85rem' }}>
              ⚠️ {onboardError}
            </div>
          )}

          <form onSubmit={handleOnboardSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {companyProfile.companyType !== 'PERSONA_FISICA' && (
              <div className="form-group">
                <label className="form-label" style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', fontWeight: 700 }}>Indirizzo sede operativa *</label>
                <input 
                  type="text" 
                  className="form-control" 
                  value={onboardAddress} 
                  onChange={(e) => setOnboardAddress(formatCapitalizedWords(e.target.value))} 
                  placeholder="es. Via Roma 12"
                  required 
                />
              </div>
            )}

            <div className="form-group">
              <label className="form-label" style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', fontWeight: 700 }}>Città *</label>
              <input 
                type="text" 
                className="form-control" 
                value={onboardCity} 
                onChange={(e) => setOnboardCity(formatCapitalizedWords(e.target.value))} 
                placeholder="es. Milano"
                required 
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '3fr 1fr', gap: '10px' }}>
              <div className="form-group">
                <label className="form-label" style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', fontWeight: 700 }}>Provincia *</label>
                <select 
                  className="form-control" 
                  value={onboardProvince} 
                  onChange={(e) => {
                    const selected = e.target.value;
                    setOnboardProvince(selected);
                    setOnboardSigla(PROVINCE_SIGLE[selected] || '');
                  }}
                  required
                >
                  <option value="">Seleziona Provincia</option>
                  {CITIES.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label className="form-label" style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', fontWeight: 700 }}>Sigla</label>
                <input 
                  type="text" 
                  className="form-control" 
                  value={onboardSigla} 
                  readOnly 
                  style={{ background: 'rgba(0,0,0,0.03)', textAlign: 'center', fontWeight: 700 }}
                />
              </div>
            </div>

            {companyProfile.companyType !== 'PERSONA_FISICA' && (
              <div className="form-group">
                <label className="form-label" style={{ color: '#94a3b8' }}>Settore Operativo *</label>
                <select 
                  className="form-control" 
                  value={onboardSector} 
                  onChange={(e) => setOnboardSector(e.target.value)} 
                  required
                >
                  <option value="">-- Seleziona Settore --</option>
                  {COMPANY_SECTORS.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
            )}

            <button 
              type="submit" 
              className="btn btn-primary" 
              style={{ width: '100%', padding: '14px', marginTop: '10px' }}
              disabled={onboardLoading}
            >
              {onboardLoading ? 'Salvataggio in corso...' : 'Salva e Continua'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  const totalAcceptedCandidates = proposals.reduce((acc, p) => acc + (p.responses || []).filter((r: any) => r.status === 'ACCEPTED').length, 0);

  return (
    <div className="dashboard-grid-layout" style={{ gap: '24px', minHeight: '80vh' }}>
      
      {/* SIDEBAR NAVIGATION */}
      <aside className="glass-card" style={{ padding: '20px', height: 'fit-content' }}>
        <div style={{ marginBottom: '24px', textAlign: 'center' }}>
          <div style={{
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            background: 'var(--grad-primary)',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.8rem',
            margin: '0 auto 12px auto',
            boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)'
          }}>
            🏢
          </div>
          <h4 style={{ fontSize: '1rem', fontWeight: 800, margin: 0 }}>
            {companyProfile.companyName || 'Area Azienda'}
          </h4>
          <span style={{ fontSize: '0.75rem', color: 'var(--accent-blue)', fontWeight: 600 }}>
            {companyProfile.industry || 'Profilo Verificato'}
          </span>
        </div>

        <nav style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          
          {/* 1. Profilo Azienda */}
          <button
            onClick={() => setActiveTab('profile')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '12px 14px',
              borderRadius: '10px',
              border: 'none',
              background: activeTab === 'profile' ? 'var(--accent-blue)' : 'rgba(255,255,255,0.03)',
              color: activeTab === 'profile' ? '#fff' : 'var(--text-secondary)',
              fontWeight: activeTab === 'profile' ? 700 : 500,
              fontSize: '0.85rem',
              cursor: 'pointer',
              textAlign: 'left',
              transition: 'all 0.2s ease'
            }}
          >
            <span>👤</span> Profilo Azienda
          </button>

          {/* 2. Section Header: Proposta di lavoro */}
          <div style={{ marginTop: '16px', marginBottom: '4px', paddingLeft: '8px', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)', fontWeight: 700 }}>
            💼 Proposta di Lavoro
          </div>

          {/* Sub-item: Inserisci */}
          <button
            onClick={() => {
              resetProposalForm();
              setActiveTab('create_proposal');
            }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '10px 14px 10px 24px',
              borderRadius: '10px',
              border: 'none',
              background: activeTab === 'create_proposal' ? 'var(--accent-blue)' : 'rgba(255,255,255,0.03)',
              color: activeTab === 'create_proposal' ? '#fff' : 'var(--text-secondary)',
              fontWeight: activeTab === 'create_proposal' ? 700 : 500,
              fontSize: '0.85rem',
              cursor: 'pointer',
              textAlign: 'left',
              transition: 'all 0.2s ease'
            }}
          >
            <span>➕</span> Inserisci
          </button>

          {/* Sub-item: Elenco proposte */}
          <button
            onClick={() => {
              fetchProposals();
              setActiveTab('list_proposals');
            }}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '10px 14px 10px 24px',
              borderRadius: '10px',
              border: 'none',
              background: activeTab === 'list_proposals' ? 'var(--accent-blue)' : 'rgba(255,255,255,0.03)',
              color: activeTab === 'list_proposals' ? '#fff' : 'var(--text-secondary)',
              fontWeight: activeTab === 'list_proposals' ? 700 : 500,
              fontSize: '0.85rem',
              cursor: 'pointer',
              textAlign: 'left',
              transition: 'all 0.2s ease'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span>📋</span> Elenco Proposte
            </div>
            {proposals.length > 0 && (
              <span style={{ background: 'rgba(255,255,255,0.2)', padding: '2px 8px', borderRadius: '12px', fontSize: '0.7rem', fontWeight: 700 }}>
                {proposals.length}
              </span>
            )}
          </button>

          {/* Sub-item: Candidati Accettati (Contatti) */}
          <button
            onClick={() => {
              fetchProposals();
              setActiveTab('accepted_candidates');
            }}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '10px 14px 10px 24px',
              borderRadius: '10px',
              border: 'none',
              background: activeTab === 'accepted_candidates' ? 'var(--accent-green)' : (totalAcceptedCandidates > 0 ? 'rgba(16, 185, 129, 0.12)' : 'rgba(255,255,255,0.03)'),
              color: activeTab === 'accepted_candidates' ? '#fff' : (totalAcceptedCandidates > 0 ? 'var(--accent-green)' : 'var(--text-secondary)'),
              fontWeight: activeTab === 'accepted_candidates' ? 700 : (totalAcceptedCandidates > 0 ? 700 : 500),
              fontSize: '0.85rem',
              cursor: 'pointer',
              textAlign: 'left',
              transition: 'all 0.2s ease'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span>🟢</span> Candidati Accettati
            </div>
            {totalAcceptedCandidates > 0 && (
              <span style={{ background: activeTab === 'accepted_candidates' ? '#fff' : 'var(--accent-green)', color: activeTab === 'accepted_candidates' ? 'var(--accent-green)' : '#fff', padding: '2px 8px', borderRadius: '12px', fontSize: '0.72rem', fontWeight: 800 }}>
                {totalAcceptedCandidates}
              </span>
            )}
          </button>

        </nav>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main>
        {/* Recruiter Banner Notifications */}
        {notifications.filter(n => !n.read && n.type.startsWith('ACCEPTED_CONTACT:')).map(n => {
          const workerId = n.type.split(':')[1];
          return (
            <div 
              key={n.id} 
              className="glass-card" 
              style={{ 
                background: 'rgba(16,185,129,0.1)', 
                border: '1px solid var(--accent-green)', 
                color: '#fff', 
                padding: '16px 20px', 
                borderRadius: '12px', 
                marginBottom: '20px', 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                boxShadow: '0 4px 20px rgba(16, 185, 129, 0.15)',
                cursor: 'pointer'
              }}
              onClick={() => handleViewWorkerCv(workerId, n.id)}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontSize: '1.5rem' }}>🟢</span>
                <div>
                  <strong style={{ display: 'block', fontSize: '0.9rem', color: 'var(--accent-green)' }}>{n.title}</strong>
                  <span style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>{n.message} Clicca qui per visualizzare il CV completo.</span>
                </div>
              </div>
              <button 
                onClick={async (e) => {
                  e.stopPropagation();
                  await api.company.markNotificationRead(n.id);
                  fetchNotifications();
                }}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--text-muted)',
                  fontSize: '1.2rem',
                  cursor: 'pointer',
                  padding: '4px'
                }}
              >
                &times;
              </button>
            </div>
          );
        })}

        {submissionSuccessMsg && (
          <div style={{
            background: 'rgba(16, 185, 129, 0.15)',
            border: '1px solid var(--accent-green)',
            color: 'var(--accent-green)',
            padding: '16px 20px',
            borderRadius: '12px',
            marginBottom: '20px',
            fontSize: '0.9rem',
            fontWeight: 600,
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            boxShadow: '0 4px 12px rgba(16, 185, 129, 0.1)'
          }}>
            <span style={{ fontSize: '1.3rem' }}>📩</span>
            <div>{submissionSuccessMsg}</div>
          </div>
        )}

        {/* TAB 1: PROFILO AZIENDA */}
        {activeTab === 'profile' && (
          <div className="glass-card" style={{ padding: '24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h3 style={{ margin: 0, fontSize: '1.2rem', color: 'var(--text-primary)' }}>
                🏢 Dati Attività Aziendale
              </h3>
              {!isEditingProfile && (
                <button
                  type="button"
                  onClick={() => setIsEditingProfile(true)}
                  className="btn btn-secondary"
                  style={{ fontSize: '0.8rem', padding: '6px 14px' }}
                >
                  ✏️ Modifica Dati
                </button>
              )}
            </div>

            {isEditingProfile ? (
              <form onSubmit={handleSaveProfile} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div className="responsive-grid-2">
                  <div className="form-group">
                    <label className="form-label">Tipologia Soggetto</label>
                    <select
                      className="form-control"
                      value={profileFormData.companyType || 'AZIENDA'}
                      onChange={(e) => setProfileFormData({ ...profileFormData, companyType: e.target.value })}
                    >
                      <option value="AZIENDA">Azienda / Società</option>
                      <option value="PERSONA_FISICA">Persona Fisica / Ditta Individuale</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Nome Azienda / Ragione Sociale</label>
                    <input
                      type="text"
                      className="form-control"
                      value={profileFormData.companyName || ''}
                      onChange={(e) => setProfileFormData({ ...profileFormData, companyName: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  <div className="form-group">
                    <label className="form-label">Partita IVA</label>
                    <input
                      type="text"
                      className="form-control"
                      value={profileFormData.vatNumber || ''}
                      onChange={(e) => setProfileFormData({ ...profileFormData, vatNumber: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Codice Fiscale</label>
                    <input
                      type="text"
                      className="form-control"
                      value={profileFormData.fiscalCode || ''}
                      onChange={(e) => setProfileFormData({ ...profileFormData, fiscalCode: e.target.value })}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '12px' }}>
                  <div className="form-group">
                    <label className="form-label">Indirizzo Sede Legale</label>
                    <input
                      type="text"
                      className="form-control"
                      value={profileFormData.address || ''}
                      onChange={(e) => setProfileFormData({ ...profileFormData, address: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Città Sede</label>
                    <input
                      type="text"
                      className="form-control"
                      value={profileFormData.city || ''}
                      onChange={(e) => setProfileFormData({ ...profileFormData, city: capitalizeCity(e.target.value) })}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">CAP / Provincia</label>
                    <input
                      type="text"
                      className="form-control"
                      value={profileFormData.residenzaCapCitta || ''}
                      onChange={(e) => setProfileFormData({ ...profileFormData, residenzaCapCitta: e.target.value })}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px' }}>
                  <div className="form-group">
                    <label className="form-label">Settore Operativo</label>
                    <input
                      type="text"
                      className="form-control"
                      value={profileFormData.industry || ''}
                      onChange={(e) => setProfileFormData({ ...profileFormData, industry: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Referente Aziendale</label>
                    <input
                      type="text"
                      className="form-control"
                      value={profileFormData.contactPerson || ''}
                      onChange={(e) => setProfileFormData({ ...profileFormData, contactPerson: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Telefono di Contatto</label>
                    <input
                      type="text"
                      className="form-control"
                      value={profileFormData.contactPhone || ''}
                      onChange={(e) => setProfileFormData({ ...profileFormData, contactPhone: e.target.value })}
                    />
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                  <button type="submit" className="btn btn-success" style={{ flex: 1, padding: '10px' }}>
                    💾 Salva Modifiche Profilo
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setProfileFormData(companyProfile);
                      setIsEditingProfile(false);
                    }}
                    className="btn btn-secondary"
                    style={{ padding: '10px 20px' }}
                  >
                    Annulla
                  </button>
                </div>
              </form>
            ) : (
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div style={{ background: '#f8fafc', padding: '14px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '4px' }}>Ragione Sociale / Ditta</div>
                  <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-primary)' }}>{companyProfile.companyName || 'Non specificata'}</div>
                </div>
                <div style={{ background: '#f8fafc', padding: '14px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '4px' }}>Partita IVA / Codice Fiscale</div>
                  <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-primary)' }}>
                    {companyProfile.vatNumber || companyProfile.fiscalCode || 'Non inserito'}
                  </div>
                </div>
                <div style={{ background: '#f8fafc', padding: '14px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '4px' }}>Sede Legale</div>
                  <div style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-primary)' }}>
                    🏢 {companyProfile.address ? `${companyProfile.address}, ` : ''}{companyProfile.city || ''} {companyProfile.residenzaCapCitta ? `(${companyProfile.residenzaCapCitta})` : ''}
                  </div>
                </div>
                <div style={{ background: '#f8fafc', padding: '14px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '4px' }}>Settore Operativo</div>
                  <div style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-primary)' }}>{companyProfile.industry || 'Settore Generico'}</div>
                </div>
                <div style={{ background: '#f8fafc', padding: '14px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '4px' }}>Persona Referente</div>
                  <div style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-primary)' }}>👤 {companyProfile.contactPerson || 'Referente non indicato'}</div>
                </div>
                <div style={{ background: '#f8fafc', padding: '14px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '4px' }}>Telefono di Contatto</div>
                  <div style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-primary)' }}>📞 {companyProfile.contactPhone || 'Telefono non indicato'}</div>
                </div>
                {companyProfile.companyType === 'PERSONA_FISICA' && (
                  <div style={{ background: '#f8fafc', padding: '14px', borderRadius: '8px', border: '1px solid #e2e8f0', gridColumn: 'span 2' }}>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '4px', fontWeight: 600 }}>🪪 Documento d'identità Recruiter (Obbligatorio)</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '8px', flexWrap: 'wrap' }}>
                      {companyProfile.idDocumentUrl ? (
                        <span style={{ color: 'var(--accent-green)', fontWeight: 700, fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
                          ✓ Documento caricato correttamente
                        </span>
                      ) : (
                        <span style={{ color: 'var(--accent-red)', fontWeight: 700, fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
                          ⚠️ Documento mancante (Obbligatorio per pubblicare annunci)
                        </span>
                      )}
                      
                      <label 
                        className="btn btn-secondary" 
                        style={{ margin: 0, padding: '6px 12px', fontSize: '0.75rem', cursor: 'pointer' }}
                      >
                        📁 {companyProfile.idDocumentUrl ? 'Aggiorna File' : 'Seleziona Documento (Immagine)'}
                        <input 
                          type="file" 
                          accept="image/*" 
                          style={{ display: 'none' }} 
                          onChange={handleIdUpload} 
                        />
                      </label>

                      {companyProfile.idDocumentUrl && (
                        <a 
                          href={companyProfile.idDocumentUrl} 
                          target="_blank" 
                          rel="noreferrer" 
                          className="btn btn-primary" 
                          style={{ padding: '6px 12px', fontSize: '0.75rem', textDecoration: 'none', display: 'inline-block' }}
                        >
                          👁️ Visualizza
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* TAB 2: INSERISCI PROPOSTA DI LAVORO */}
        {activeTab === 'create_proposal' && (
          <div className="glass-card" style={{ padding: '24px' }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '8px', color: 'var(--accent-blue)' }}>
              {editingProposalId ? '✏️ Modifica Proposta di Lavoro' : '➕ Inserisci Nuova Proposta di Lavoro'}
            </h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '20px' }}>
              Compila i requisiti del personale ricercato. Puoi salvarla in bozza o inviarla direttamente ai candidati attivi.
            </p>

            <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              
              {/* 1. Professione Ricercata (Multi-select) */}
              <div>
                <label className="form-label" style={{ fontWeight: 700, marginBottom: '6px', display: 'block', fontSize: '0.9rem' }}>
                  Professione Ricercata *
                </label>
                <div style={{ marginBottom: '8px' }}>
                  <select
                    className="form-control"
                    value=""
                    onChange={(e) => handleAddProfession(e.target.value)}
                  >
                    <option value="">-- Seleziona una professione da aggiungere --</option>
                    {PROFESSIONS.map((prof) => (
                      <option key={prof} value={prof}>{prof}</option>
                    ))}
                  </select>
                </div>

                {selectedProfessions.length > 0 ? (
                  <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', padding: '10px', background: '#f1f5f9', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                    {selectedProfessions.map((prof) => (
                      <span
                        key={prof}
                        style={{
                          background: 'rgba(59, 130, 246, 0.1)',
                          color: 'var(--accent-blue)',
                          padding: '4px 10px',
                          borderRadius: '6px',
                          fontSize: '0.8rem',
                          fontWeight: 600,
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px'
                        }}
                      >
                        {prof}
                        <button
                          type="button"
                          onClick={() => handleRemoveProfession(prof)}
                          style={{ background: 'none', border: 'none', color: 'var(--accent-red)', cursor: 'pointer', fontWeight: 'bold' }}
                        >
                          &times;
                        </button>
                      </span>
                    ))}
                  </div>
                ) : (
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', margin: 0 }}>Seleziona almeno una professione dal menu a tendina.</p>
                )}
              </div>

              {/* 2. Sede di Lavoro (Indirizzo, Città, Provincia, Sigla + Opzione Seconda Sede) */}
              <div>
                <label className="form-label" style={{ fontWeight: 700, marginBottom: '6px', display: 'block', fontSize: '0.9rem' }}>
                  Sede di Lavoro Principale *
                </label>

                <div className="form-group" style={{ marginBottom: '10px' }}>
                  <label className="form-label" style={{ fontSize: '0.75rem' }}>Indirizzo sede operativa (compilabile manualmente)</label>
                  <input
                    type="text"
                    className="form-control"
                    value={loc1Address}
                    onChange={(e) => setLoc1Address(formatCapitalizedWords(e.target.value))}
                    placeholder="es. Via Roma 12"
                    autoComplete="off"
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '2fr 2fr 1fr', gap: '10px', marginBottom: '10px' }}>
                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <label className="form-label" style={{ fontSize: '0.75rem' }}>Città</label>
                    <input
                      type="text"
                      className="form-control"
                      value={loc1City}
                      onChange={(e) => setLoc1City(formatCapitalizedWords(e.target.value))}
                      autoComplete="off"
                      required
                    />
                  </div>
                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <label className="form-label" style={{ fontSize: '0.75rem' }}>Provincia</label>
                    <select
                      className="form-control"
                      value={loc1Province}
                      onChange={(e) => {
                        const selected = e.target.value;
                        setLoc1Province(selected);
                        if (selected === 'Tutto il territorio nazionale') {
                          setLoc1Sigla('IT');
                        } else {
                          setLoc1Sigla(PROVINCE_SIGLE[selected] || '');
                        }
                      }}
                      required
                    >
                      <option value="">-- Seleziona Provincia --</option>
                      <option value="Tutto il territorio nazionale">🇮🇹 Tutto il territorio nazionale</option>
                      {CITIES.map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <label className="form-label" style={{ fontSize: '0.75rem' }}>Sigla</label>
                    <input
                      type="text"
                      className="form-control"
                      value={loc1Sigla}
                      onChange={(e) => setLoc1Sigla(e.target.value.toUpperCase())}
                      maxLength={2}
                      autoComplete="off"
                    />
                  </div>
                </div>

                {/* Seconda Sede Toggle */}
                {!hasLoc2 ? (
                  <button
                    type="button"
                    onClick={() => setHasLoc2(true)}
                    className="btn btn-secondary"
                    style={{ fontSize: '0.75rem', padding: '4px 10px', marginTop: '4px' }}
                  >
                    + Aggiungi Seconda Sede
                  </button>
                ) : (
                  <div style={{ background: '#f8fafc', padding: '12px', borderRadius: '8px', border: '1px dashed #cbd5e1', marginTop: '10px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                      <label className="form-label" style={{ fontWeight: 700, fontSize: '0.8rem', color: 'var(--accent-blue)', margin: 0 }}>
                        Seconda Sede di Lavoro
                      </label>
                      <button
                        type="button"
                        onClick={() => {
                          setHasLoc2(false);
                          setLoc2Address('');
                          setLoc2City('');
                          setLoc2Province('');
                          setLoc2Sigla('');
                        }}
                        style={{ background: 'none', border: 'none', color: 'var(--accent-red)', cursor: 'pointer', fontSize: '0.75rem' }}
                      >
                        Rimuovi seconda sede
                      </button>
                    </div>

                    <div className="form-group" style={{ marginBottom: '10px' }}>
                      <label className="form-label" style={{ fontSize: '0.7rem' }}>Indirizzo sede operativa</label>
                      <input
                        type="text"
                        className="form-control"
                        value={loc2Address}
                        onChange={(e) => setLoc2Address(formatCapitalizedWords(e.target.value))}
                        placeholder="es. Via Roma 12"
                        autoComplete="off"
                      />
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '2fr 2fr 1fr', gap: '10px' }}>
                      <div className="form-group" style={{ marginBottom: 0 }}>
                        <label className="form-label" style={{ fontSize: '0.7rem' }}>Città</label>
                        <input
                          type="text"
                          className="form-control"
                          value={loc2City}
                          onChange={(e) => setLoc2City(formatCapitalizedWords(e.target.value))}
                          autoComplete="off"
                        />
                      </div>
                      <div className="form-group" style={{ marginBottom: 0 }}>
                        <label className="form-label" style={{ fontSize: '0.7rem' }}>Provincia</label>
                        <select
                          className="form-control"
                          value={loc2Province}
                          onChange={(e) => {
                            const selected = e.target.value;
                            setLoc2Province(selected);
                            if (selected === 'Tutto il territorio nazionale') {
                              setLoc2Sigla('IT');
                            } else {
                              setLoc2Sigla(PROVINCE_SIGLE[selected] || '');
                            }
                          }}
                        >
                          <option value="">-- Seleziona Provincia --</option>
                          <option value="Tutto il territorio nazionale">🇮🇹 Tutto il territorio nazionale</option>
                          {CITIES.map((c) => (
                            <option key={c} value={c}>{c}</option>
                          ))}
                        </select>
                      </div>
                      <div className="form-group" style={{ marginBottom: 0 }}>
                        <label className="form-label" style={{ fontSize: '0.7rem' }}>Sigla</label>
                        <input
                          type="text"
                          className="form-control"
                          value={loc2Sigla}
                          onChange={(e) => setLoc2Sigla(e.target.value.toUpperCase())}
                          maxLength={2}
                          autoComplete="off"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div>
                <label className="form-label" style={{ fontWeight: 700, marginBottom: '6px', display: 'block', fontSize: '0.9rem' }}>
                  Titolo di Studio Richiesto (Seleziona uno)
                </label>
                <select
                  className="form-control"
                  value={selectedEdus[0] || 'Nessuna preferenza'}
                  onChange={(e) => setSelectedEdus([e.target.value])}
                >
                  <option value="Nessuna preferenza">Nessuna preferenza (Tutti i titoli)</option>
                  <option value="Licenza Media">Licenza Media</option>
                  <option value="Diploma">Diploma</option>
                  <option value="Laurea triennale">Laurea triennale</option>
                  <option value="Laurea specialistica / magistrale">Laurea specialistica / magistrale</option>
                  <option value="Master">Master</option>
                </select>
              </div>

              {/* 4. Tipologia Contratto Offerto (Massimo 2) */}
              <div>
                <label className="form-label" style={{ fontWeight: 700, marginBottom: '6px', display: 'block', fontSize: '0.9rem' }}>
                  Tipologia di Contratto Offerto (Seleziona massimo 2)
                </label>
                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: '1fr 1fr', 
                  gap: '10px',
                  background: '#f1f5f9', 
                  padding: '12px', 
                  borderRadius: '8px',
                  border: '1px solid #e2e8f0'
                }}>
                  {['Determinato', 'Indeterminato', 'Part-time', 'Apprendistato', 'Partita iva', 'A chiamata'].map((c) => {
                    const isChecked = selectedContracts.includes(c);
                    return (
                      <label key={c} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8rem', cursor: 'pointer', color: '#0f172a', fontWeight: 600 }}>
                        <input 
                          type="checkbox" 
                          checked={isChecked} 
                          onChange={(e) => {
                            if (isChecked) {
                              setSelectedContracts(selectedContracts.filter(item => item !== c));
                            } else {
                              if (selectedContracts.length >= 2) {
                                alert('Puoi selezionare al massimo 2 tipologie di contratto.');
                                return;
                              }
                              setSelectedContracts([...selectedContracts, c]);
                            }
                          }}
                          style={{ cursor: 'pointer' }}
                        />
                        {c}
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* 5. Reddito (Min e Max espresso con separatore di migliaia) */}
              <div>
                <label className="form-label" style={{ fontWeight: 700, marginBottom: '6px', display: 'block', fontSize: '0.9rem' }}>
                  Reddito Mensile Netto Offerto (€)
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <label className="form-label" style={{ fontSize: '0.75rem' }}>Minimo (€)</label>
                    <input
                      type="text"
                      className="form-control"
                      value={minSalary}
                      onChange={(e) => setMinSalary(formatNumberThousands(e.target.value))}
                    />
                  </div>
                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <label className="form-label" style={{ fontSize: '0.75rem' }}>Massimo (€)</label>
                    <input
                      type="text"
                      className="form-control"
                      value={maxSalary}
                      onChange={(e) => setMaxSalary(formatNumberThousands(e.target.value))}
                    />
                  </div>
                </div>
              </div>

              {/* 6. Campo Note */}
              <div>
                <label className="form-label" style={{ fontWeight: 700, marginBottom: '6px', display: 'block', fontSize: '0.9rem' }}>
                  Campo Note / Dettagli Posizione
                </label>
                <textarea
                  className="form-control"
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                />
              </div>

              {/* Action Buttons: Salva in bozza & Salva e invia */}
              <div style={{ display: 'flex', gap: '12px', marginTop: '10px' }}>
                <button
                  type="button"
                  onClick={(e) => handleSubmitProposal(e, 'DRAFT')}
                  className="btn btn-secondary"
                  style={{ flex: 1, padding: '14px', fontSize: '0.9rem', fontWeight: 700 }}
                >
                  💾 Salva in Bozza
                </button>

                <button
                  type="button"
                  onClick={(e) => handleSubmitProposal(e, 'ACTIVE')}
                  className="btn btn-success"
                  style={{ flex: 1.5, padding: '14px', fontSize: '0.9rem', fontWeight: 700 }}
                >
                  🚀 Salva e Invia Proposta
                </button>
              </div>

            </form>
          </div>
        )}

        {/* TAB 3: ELENCO PROPOSTE DI LAVORO */}
        {activeTab === 'list_proposals' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            
            <div className="glass-card" style={{ padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <h3 style={{ margin: 0, fontSize: '1.2rem', color: 'var(--text-primary)' }}>
                  📋 Elenco Proposte di Lavoro
                </h3>
                <p style={{ margin: '4px 0 0 0', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                  Visualizza le proposte salvate in bozza o inviate, e consulta i candidati che accettano il contatto diretto.
                </p>
              </div>
              <button
                onClick={() => {
                  resetProposalForm();
                  setActiveTab('create_proposal');
                }}
                className="btn btn-primary"
                style={{ padding: '8px 16px', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '6px' }}
              >
                <span>➕</span> Inserisci Nuova Proposta
              </button>
            </div>

            {proposals.length === 0 ? (
              <div className="glass-card" style={{ padding: '40px', textAlign: 'center', color: 'var(--text-muted)' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>📄</div>
                <h4 style={{ fontSize: '1rem', color: 'var(--text-primary)', marginBottom: '6px' }}>Nessuna proposta inserita</h4>
                <p style={{ fontSize: '0.85rem' }}>Clicca su "Inserisci Nuova Proposta" per creare o inviare la tua prima proposta di lavoro.</p>
              </div>
            ) : (
              proposals.map((prop) => {
                let profsList: string[] = [];
                try { profsList = JSON.parse(prop.professions || '[]'); } catch (e) {}

                let locsList: any[] = [];
                try { locsList = JSON.parse(prop.locations || '[]'); } catch (e) {}

                const acceptedResponses = (prop.responses || []).filter((r: any) => r.status === 'ACCEPTED');

                return (
                  <div key={prop.id} className="glass-card" style={{ padding: '20px', borderLeft: prop.status === 'ACTIVE' ? '4px solid var(--accent-green)' : '4px solid #eab308', position: 'relative' }}>
                    
                    {/* Header bar of proposal card */}
                    <div className="responsive-card-header" style={{ marginBottom: '12px' }}>
                      <div>
                        <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '6px' }}>
                          {profsList.map((p) => (
                            <span key={p} style={{ background: 'rgba(59, 130, 246, 0.1)', color: 'var(--accent-blue)', padding: '3px 8px', borderRadius: '6px', fontSize: '0.75rem', fontWeight: 700 }}>
                              {p}
                            </span>
                          ))}
                        </div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                          📅 Inserita il: {new Date(prop.createdAt).toLocaleDateString('it-IT')} alle {new Date(prop.createdAt).toLocaleTimeString('it-IT', { hour: '2-digit', minute: '2-digit' })}
                        </div>
                      </div>

                      {/* Status badge */}
                      <div>
                        {prop.status === 'DRAFT' ? (
                          <div style={{ background: 'rgba(234, 179, 8, 0.15)', border: '1px solid #eab308', color: '#b45309', padding: '4px 10px', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 700 }}>
                            🟡 Bozza (Non inviata)
                          </div>
                        ) : (
                          <div style={{ background: 'rgba(16, 185, 129, 0.15)', border: '1px solid var(--accent-green)', color: 'var(--accent-green)', padding: '4px 10px', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 700 }}>
                            🟢 Attiva - Inviata ai Candidati
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Proposal Specs Grid */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '10px', marginBottom: '16px', background: '#f8fafc', padding: '12px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                      <div>
                        <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', display: 'block' }}>Sede di Lavoro</span>
                        <strong style={{ fontSize: '0.8rem', color: 'var(--text-primary)' }}>
                          {locsList.map(l => `${l.address ? `${l.address}, ` : ''}${l.city || ''} (${l.sigla || l.province})`).join(' | ')}
                        </strong>
                      </div>
                      <div>
                        <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', display: 'block' }}>Titolo di Studio</span>
                        <strong style={{ fontSize: '0.8rem', color: 'var(--text-primary)' }}>
                          {(() => {
                            if (!prop.educationTitle) return 'Nessuna preferenza';
                            try {
                              const parsed = JSON.parse(prop.educationTitle);
                              if (Array.isArray(parsed)) {
                                return parsed.join(', ');
                              }
                            } catch(e) {}
                            return prop.educationTitle;
                          })()}
                        </strong>
                      </div>
                      <div>
                        <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', display: 'block' }}>Requisiti</span>
                        <strong style={{ fontSize: '0.8rem', color: 'var(--text-primary)' }}>
                          {[prop.hasLicense && '🚗 Patente', prop.hasCar && '🚘 Automunito'].filter(Boolean).join(' • ') || 'Nessun vincolo'}
                        </strong>
                      </div>
                      <div>
                        <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', display: 'block' }}>Reddito Offerto</span>
                        <strong style={{ fontSize: '0.8rem', color: 'var(--text-primary)' }}>
                          {prop.minSalary || prop.maxSalary ? `€ ${prop.minSalary || '0'} - € ${prop.maxSalary || 'Max'}` : 'Non specificato'}
                        </strong>
                      </div>
                    </div>

                    {prop.notes && (
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: '16px', fontStyle: 'italic', background: 'rgba(0,0,0,0.02)', padding: '8px', borderRadius: '6px' }}>
                        📝 Note: {prop.notes}
                      </div>
                    )}

                    {/* Action buttons */}
                    <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end', borderTop: '1px solid #e2e8f0', paddingTop: '12px', flexWrap: 'wrap' }}>
                      {prop.status === 'DRAFT' && (
                        <button
                          type="button"
                          onClick={() => handlePublishDraft(prop)}
                          className="btn btn-success"
                          style={{ fontSize: '0.75rem', padding: '6px 12px', fontWeight: 700 }}
                        >
                          🚀 Invia ai Candidati
                        </button>
                      )}

                      {(prop.status === 'ACTIVE' || acceptedResponses.length > 0) && (
                        <button
                          type="button"
                          onClick={() => setSelectedProposal(prop)}
                          className="btn btn-primary"
                          style={{ fontSize: '0.75rem', padding: '6px 12px', display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 700 }}
                        >
                          👥 Candidati che hanno accettato ({acceptedResponses.length})
                        </button>
                      )}

                      <button
                        type="button"
                        onClick={() => handleEditProposal(prop)}
                        className="btn btn-secondary"
                        style={{ fontSize: '0.75rem', padding: '6px 12px' }}
                      >
                        ✏️ Modifica
                      </button>

                      <button
                        type="button"
                        onClick={() => handleDeleteProposal(prop.id)}
                        style={{
                          background: 'rgba(239, 68, 68, 0.1)',
                          color: 'var(--accent-red)',
                          border: '1px solid rgba(239, 68, 68, 0.2)',
                          borderRadius: '6px',
                          padding: '6px 12px',
                          fontSize: '0.75rem',
                          cursor: 'pointer',
                          fontWeight: 600
                        }}
                      >
                        🗑️ Elimina
                      </button>
                    </div>

                  </div>
                );
              })
            )}

          </div>
        )}

        {/* TAB 4: TUTTI I CANDIDATI CHE HANNO ACCETTATO */}
        {activeTab === 'accepted_candidates' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div className="glass-card" style={{ padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <h3 style={{ margin: 0, fontSize: '1.2rem', color: 'var(--accent-green)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span>🟢</span> Candidati che Hanno Accettato il Contatto Diretto ({totalAcceptedCandidates})
                </h3>
                <p style={{ margin: '4px 0 0 0', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                  In questa sezione trovi l'elenco completo dei candidati che hanno risposto positivamente alle tue proposte di lavoro.
                </p>
              </div>
            </div>

            {totalAcceptedCandidates === 0 ? (
              <div className="glass-card" style={{ padding: '40px', textAlign: 'center', color: 'var(--text-muted)' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>⏳</div>
                <h4 style={{ fontSize: '1rem', color: 'var(--text-primary)', marginBottom: '6px' }}>Nessun candidato ha ancora accettato</h4>
                <p style={{ fontSize: '0.85rem' }}>Quando un candidato idoneo accetterà una tua proposta di lavoro, la sua scheda comparirà automaticamente qui.</p>
              </div>
            ) : (
              proposals.flatMap(prop => {
                let profsList: string[] = [];
                try { profsList = JSON.parse(prop.professions || '[]'); } catch (e) {}
                const accepted = (prop.responses || []).filter((r: any) => r.status === 'ACCEPTED');
                return accepted.map((res: any) => ({ ...res, proposalProfessions: profsList, proposalId: prop.id }));
              }).map((item: any) => {
                const worker = item.worker;
                if (!worker) return null;

                return (
                  <div key={item.id} className="glass-card" style={{ padding: '20px', borderLeft: '4px solid var(--accent-green)', background: '#ffffff', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
                    <div className="responsive-card-header" style={{ marginBottom: '12px' }}>
                      <div>
                        <div style={{ display: 'flex', gap: '6px', alignItems: 'center', marginBottom: '6px' }}>
                          <span style={{ background: 'rgba(16,185,129,0.1)', color: 'var(--accent-green)', padding: '3px 8px', borderRadius: '6px', fontSize: '0.75rem', fontWeight: 700 }}>
                            ✅ Contatto Diretto Accettato
                          </span>
                          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                            per la proposta: <strong>{item.proposalProfessions.join(', ')}</strong>
                          </span>
                        </div>
                        <h4 style={{ margin: '6px 0 2px 0', fontSize: '1.2rem', color: 'var(--text-primary)' }}>
                          {worker.firstName} {worker.lastName}
                        </h4>
                        <div style={{ fontSize: '0.9rem', color: 'var(--accent-blue)', fontWeight: 700 }}>
                          💼 {worker.profession}
                        </div>
                        <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '2px' }}>
                          📍 Residenza: {worker.city} ({worker.sigla || worker.province})
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="responsive-card-actions">
                        <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--accent-blue)', background: 'rgba(59,130,246,0.08)', padding: '6px 12px', borderRadius: '8px', textAlign: 'center' }}>
                          📧 Email: {worker.user?.email || 'N/D'}
                        </div>
                        <button
                          type="button"
                          onClick={() => handleViewWorkerCv(worker.id)}
                          className="btn btn-primary"
                          style={{ fontSize: '0.8rem', padding: '8px 14px', background: 'var(--grad-primary)', border: 'none', width: '100%', minWidth: '160px', textAlign: 'center', fontWeight: 700 }}
                        >
                          👁️ Vedi Profilo e CV Completo
                        </button>
                        {worker.cvPdfUrl && (
                          <button
                            type="button"
                            onClick={() => handleOpenCvPdf(worker.cvPdfUrl)}
                            className="btn btn-secondary"
                            style={{ fontSize: '0.8rem', padding: '8px 14px', width: '100%', minWidth: '160px', textAlign: 'center' }}
                          >
                            📎 Scarica/Visualizza PDF
                          </button>
                        )}
                      </div>
                    </div>

                    {worker.notes && (
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontStyle: 'italic', background: '#f1f5f9', padding: '10px', borderRadius: '6px', marginBottom: '12px' }}>
                        💬 Note Candidato: "{worker.notes}"
                      </div>
                    )}

                    {(worker.workExperiences || []).length > 0 && (
                      <div style={{ marginTop: '12px', paddingTop: '10px', borderTop: '1px solid #e2e8f0' }}>
                        <strong style={{ fontSize: '0.8rem', color: 'var(--text-primary)', display: 'block', marginBottom: '6px' }}>
                          🏢 Esperienze Lavorative Precedenti:
                        </strong>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                          {(worker.workExperiences || []).map((exp: any, i: number) => (
                            <div key={i} style={{ fontSize: '0.75rem', background: '#f8fafc', padding: '8px', borderRadius: '6px', border: '1px solid #f1f5f9' }}>
                              <strong>{exp.jobTitle}</strong> presso <em>{exp.companyName}</em> ({exp.period || exp.city || ''})
                              {exp.description && <div style={{ color: 'var(--text-secondary)', marginTop: '2px' }}>{exp.description}</div>}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>
        )}
      </main>

      {/* ACCEPTED CANDIDATES MODAL */}
      {selectedProposal && (
        <div className="modal-overlay" style={{ zIndex: 1100, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div className="modal-content" style={{ maxWidth: '850px', width: '90%', maxHeight: '90vh', overflowY: 'auto', padding: '24px' }}>
            <div className="modal-close" onClick={() => setSelectedProposal(null)}>&times;</div>

            <h3 style={{ fontSize: '1.2rem', marginBottom: '6px', color: 'var(--accent-blue)' }}>
              👥 Candidati che Hanno Accettato il Contatto Diretto
            </h3>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '16px' }}>
              Di seguito sono riportate le schede ed i curriculum completi dei candidati che hanno accettato la proposta di lavoro.
            </p>

            {(() => {
              const acceptedResponses = (selectedProposal.responses || []).filter((r: any) => r.status === 'ACCEPTED');

              if (acceptedResponses.length === 0) {
                return (
                  <div style={{ padding: '30px', textAlign: 'center', background: '#f8fafc', borderRadius: '10px', color: 'var(--text-muted)' }}>
                    <div style={{ fontSize: '2rem', marginBottom: '8px' }}>⏳</div>
                    <div style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-primary)', marginBottom: '4px' }}>In attesa di riscontro dai candidati</div>
                    <p style={{ fontSize: '0.8rem', margin: 0 }}>
                      Non appena un candidato idoneo accetta la richiesta di ulteriori informazioni, la sua scheda ed il CV completo compariranno automaticamente in questa sezione.
                    </p>
                  </div>
                );
              }

              return (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {acceptedResponses.map((res: any) => {
                    const worker = res.worker;
                    if (!worker) return null;

                    return (
                      <div key={res.id} style={{ background: '#ffffff', border: '1px solid #cbd5e1', padding: '20px', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
                        
                        <div className="responsive-card-header" style={{ marginBottom: '12px' }}>
                          <div>
                            <span style={{ background: 'rgba(16,185,129,0.1)', color: 'var(--accent-green)', padding: '2px 8px', borderRadius: '10px', fontSize: '0.7rem', fontWeight: 700 }}>
                              ✅ Contatto Diretto Accettato
                            </span>
                            <h4 style={{ margin: '6px 0 2px 0', fontSize: '1.1rem', color: 'var(--text-primary)' }}>
                              {worker.firstName} {worker.lastName}
                            </h4>
                            <div style={{ fontSize: '0.85rem', color: 'var(--accent-blue)', fontWeight: 700 }}>
                              💼 {worker.profession}
                            </div>
                            <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '2px' }}>
                              📍 Residence: {worker.city} ({worker.sigla || worker.province})
                            </div>
                          </div>

                          {/* Contact Info & CV PDF Link */}
                          <div className="responsive-card-actions">
                            <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                              📧 Email: {worker.user?.email || 'N/D'}
                            </div>
                            <button
                              type="button"
                              onClick={() => handleViewWorkerCv(worker.id)}
                              className="btn btn-primary"
                              style={{ fontSize: '0.75rem', padding: '6px 12px', background: 'var(--grad-primary)', border: 'none', width: '100%', minWidth: '150px', textAlign: 'center' }}
                            >
                              👁️ Vedi CV Completo
                            </button>
                            {worker.cvPdfUrl && (
                              <button
                                type="button"
                                onClick={() => handleOpenCvPdf(worker.cvPdfUrl)}
                                className="btn btn-secondary"
                                style={{ fontSize: '0.75rem', padding: '6px 12px', width: '100%', minWidth: '150px', textAlign: 'center' }}
                              >
                                📎 Scarica/Visualizza PDF
                              </button>
                            )}
                          </div>
                        </div>

                        {worker.notes && (
                          <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontStyle: 'italic', background: '#f1f5f9', padding: '10px', borderRadius: '6px', marginBottom: '12px' }}>
                            💬 Note Candidato: "{worker.notes}"
                          </div>
                        )}

                        {/* Full Experiences List */}
                        {(worker.workExperiences || []).length > 0 && (
                          <div style={{ marginTop: '12px', paddingTop: '10px', borderTop: '1px solid #e2e8f0' }}>
                            <strong style={{ fontSize: '0.8rem', color: 'var(--text-primary)', display: 'block', marginBottom: '6px' }}>
                              🏢 Esperienze Lavorative Precedenti:
                            </strong>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                              {(worker.workExperiences || []).map((exp: any, i: number) => (
                                <div key={i} style={{ fontSize: '0.75rem', background: '#f8fafc', padding: '8px', borderRadius: '6px', border: '1px solid #f1f5f9' }}>
                                  <strong>{exp.role}</strong> presso <em>{exp.companyName || 'Azienda non specificata'}</em> ({exp.city ? `${exp.city}, ` : ''}{exp.sigla || exp.province})
                                  <span style={{ color: 'var(--text-muted)', display: 'block', marginTop: '2px' }}>
                                    📅 {exp.startDate} - {exp.endDate || 'Presente'}
                                  </span>
                                  {exp.description && (
                                    <div style={{ color: 'var(--text-secondary)', marginTop: '2px', fontStyle: 'italic' }}>
                                      {exp.description}
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                      </div>
                    );
                  })}
                </div>
              );
            })()}

          </div>
        </div>
      )}
      {/* SINGLE CANDIDATE CV MODAL */}
      {viewingWorkerCv && (
        <div className="modal-overlay" style={{ zIndex: 1200, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div className="modal-content" style={{ maxWidth: '800px', width: '90%', maxHeight: '90vh', overflowY: 'auto', padding: '30px', position: 'relative', background: 'var(--bg-secondary)', border: '1px solid var(--border-glass)', borderRadius: '16px' }}>
            <div className="modal-close" onClick={() => setViewingWorkerCv(null)} style={{ fontSize: '1.8rem', cursor: 'pointer', position: 'absolute', top: '15px', right: '20px', color: 'var(--text-muted)' }}>&times;</div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '24px', borderBottom: '1px solid var(--border-glass)', paddingBottom: '20px' }}>
              <div style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                background: 'var(--grad-primary)',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2.5rem',
                boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)',
                overflow: 'hidden'
              }}>
                {viewingWorkerCv.photoUrl ? (
                  <img src={viewingWorkerCv.photoUrl} alt="Photo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                ) : '👤'}
              </div>
              <div>
                <span style={{ background: 'rgba(16,185,129,0.15)', color: 'var(--accent-green)', padding: '4px 10px', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 700, display: 'inline-block', marginBottom: '6px' }}>
                  ✅ Contatto Diretto Accettato
                </span>
                <h3 style={{ margin: 0, fontSize: '1.4rem', color: '#fff' }}>{viewingWorkerCv.firstName} {viewingWorkerCv.lastName}</h3>
                <p style={{ margin: '4px 0 0 0', color: 'var(--accent-blue)', fontWeight: 700, fontSize: '0.95rem' }}>💼 {viewingWorkerCv.profession}</p>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '24px' }}>
              <div>
                <h5 style={{ margin: '0 0 8px 0', fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Dati di Contatto</h5>
                <p style={{ margin: '4px 0', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>📧 <strong>Email:</strong> {viewingWorkerCv.user?.email || viewingWorkerCv.email || 'N/D'}</p>
                <p style={{ margin: '4px 0', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>📞 <strong>Telefono:</strong> {viewingWorkerCv.phone || 'Non specificato'}</p>
                <p style={{ margin: '4px 0', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>📍 <strong>Residenza:</strong> {viewingWorkerCv.city} ({viewingWorkerCv.sigla || viewingWorkerCv.province})</p>
                <p style={{ margin: '4px 0', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>🚗 <strong>Patente / Auto:</strong> {[viewingWorkerCv.hasLicense && 'Patente', viewingWorkerCv.hasCar && 'Automunito'].filter(Boolean).join(' • ') || 'Nessuno'}</p>
              </div>
              <div>
                <h5 style={{ margin: '0 0 8px 0', fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Preferenze Lavorative</h5>
                <p style={{ margin: '4px 0', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>💰 <strong>Netto Desiderato:</strong> {viewingWorkerCv.desiredSalary || 'Non specificato'}</p>
                <p style={{ margin: '4px 0', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>📜 <strong>Contratto Desiderato:</strong> {viewingWorkerCv.desiredContract?.replace('_', ' ') || 'Qualsiasi'}</p>
                <p style={{ margin: '4px 0', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>⚡ <strong>Stato Disponibilità:</strong> {viewingWorkerCv.availabilityStatus?.replace('_', ' ')}</p>
              </div>
            </div>

            <div style={{ borderTop: '1px solid var(--border-glass)', paddingTop: '20px', marginBottom: '24px' }}>
              <h5 style={{ margin: '0 0 10px 0', fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Titolo/i di Studio</h5>
              {(() => {
                let edus = [];
                try {
                  edus = JSON.parse(viewingWorkerCv.educationTitles || '[]');
                } catch (e) {}
                if (edus.length === 0) {
                  if (!viewingWorkerCv.educationLevel || viewingWorkerCv.educationLevel === 'NESSUNO') {
                    return <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Nessun Titolo</span>;
                  }
                  const label = viewingWorkerCv.educationLevel === 'LICENZA_MEDIA' ? 'Licenza Media' : 
                                viewingWorkerCv.educationLevel === 'DIPLOMA' ? 'Diploma' : 
                                viewingWorkerCv.educationLevel === 'LAUREA_TRIENNALE' ? 'Laurea triennale' : 
                                viewingWorkerCv.educationLevel === 'LAUREA_SPECIALISTICA' ? 'Laurea specialistica / magistrale' : 
                                viewingWorkerCv.educationLevel === 'LAUREA_MAGISTRALE' ? 'Laurea specialistica / magistrale' : 'Laurea';
                  return <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{label} {viewingWorkerCv.educationField ? `- ${viewingWorkerCv.educationField}` : ''}</span>;
                }
                return (
                  <ul style={{ paddingLeft: '16px', margin: '4px 0 0 0', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                    {edus.map((edu: any, i: number) => {
                      const label = edu.level === 'LICENZA_MEDIA' ? 'Licenza Media' : 
                                    edu.level === 'DIPLOMA' ? 'Diploma' : 
                                    edu.level === 'LAUREA' ? 'Laurea triennale' : 
                                    edu.level === 'LAUREA_TRIENNALE' ? 'Laurea triennale' : 
                                    edu.level === 'LAUREA_SPECIALISTICA' ? 'Laurea specialistica / magistrale' : 
                                    edu.level === 'LAUREA_MAGISTRALE' ? 'Laurea specialistica / magistrale' : 
                                    edu.level === 'MASTER' ? 'Master' : edu.level;
                      
                      let details = '';
                      if (edu.level === 'DIPLOMA') {
                        const dateStr = edu.inData ? ` (Conseguito in data: ${edu.inData})` : '';
                        const gradeStr = edu.votazione ? `, Votazione: ${edu.votazione}` : '';
                        details = `${edu.field || ''}${dateStr}${gradeStr}`;
                      } else if (isLaurea(edu.level)) {
                        const uniStr = edu.conseguitoPresso ? ` presso ${edu.conseguitoPresso}` : '';
                        const dateStr = edu.inData ? ` in data: ${edu.inData}` : '';
                        const gradeStr = edu.votazione ? `, Votazione: ${edu.votazione}` : '';
                        details = `${edu.field || ''}${uniStr}${dateStr}${gradeStr}`;
                      } else if (edu.level === 'MASTER') {
                        const uniStr = edu.conseguitoPresso ? ` presso ${edu.conseguitoPresso}` : '';
                        const dateStr = edu.inData ? ` in data: ${edu.inData}` : '';
                        details = `${edu.field || 'Master'}${uniStr}${dateStr}`;
                      } else {
                        details = edu.field || '';
                      }
                      
                      return (
                        <li key={i} style={{ marginBottom: '6px' }}>
                          <strong>{label}</strong>{details ? `: ${details}` : ''}
                        </li>
                      );
                    })}
                  </ul>
                );
              })()}
            </div>

            <div style={{ borderTop: '1px solid var(--border-glass)', paddingTop: '20px', marginBottom: '24px' }}>
              <h5 style={{ margin: '0 0 12px 0', fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Competenze Professionali</h5>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {(() => {
                  let parsed: any = { computerSkills: {}, organizationalSkills: {} };
                  try {
                    parsed = JSON.parse(viewingWorkerCv.skills || '{}');
                  } catch (e) {
                    const skillsArr = (viewingWorkerCv.skills || '').split(',').map((s: string) => s.trim()).filter(Boolean);
                    if (skillsArr.length > 0) {
                      return (
                        <div>
                          <strong>Competenze:</strong>
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '6px' }}>
                            {skillsArr.map((skill: string, i: number) => (
                              <span key={i} className="tag" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid var(--border-glass)', padding: '4px 10px', borderRadius: '12px', fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{skill}</span>
                            ))}
                          </div>
                        </div>
                      );
                    }
                    return null;
                  }

                  const sortSkillsByLevel = (keys: string[], skillsMap: Record<string, string>) => {
                    const levelOrder: Record<string, number> = {
                      'Avanzato': 1,
                      'Intermedio': 2,
                      'Base': 3
                    };
                    return [...keys].sort((a, b) => {
                      const lvlA = skillsMap[a] || '';
                      const lvlB = skillsMap[b] || '';
                      const oA = levelOrder[lvlA] || 99;
                      const oB = levelOrder[lvlB] || 99;
                      if (oA !== oB) return oA - oB;
                      return a.localeCompare(b);
                    });
                  };

                  const compSkills = (parsed.computerSkills || {}) as any;
                  const orgSkills = (parsed.organizationalSkills || {}) as any;
                  const langSkills = (parsed.languageSkills || {}) as any;
                  const commSkills = (parsed.communicativeSkills || {}) as any;

                  const compKeys = sortSkillsByLevel(Object.keys(compSkills), compSkills);
                  const orgKeys = sortSkillsByLevel(Object.keys(orgSkills), orgSkills);
                  const langKeys = sortSkillsByLevel(Object.keys(langSkills).filter(k => langSkills[k] && langSkills[k] !== 'Nessuna'), langSkills);
                  const commKeys = sortSkillsByLevel(Object.keys(commSkills).filter(k => commSkills[k] && commSkills[k] !== 'Nessuna'), commSkills);

                  // Organizational skills descriptions definition locally
                  const orgDescriptions: Record<string, string> = {
                    'Gestione del tempo': 'Capacità di pianificare, organizzare e ripartire il proprio tempo tra diverse attività per massimizzare l\'efficienza.',
                    'Precisione operativa': 'Attenzione meticolosa ai dettagli nell\'esecuzione dei compiti per garantire la massima accuratezza ed evitare errori.',
                    'Gestione delle scadenze': 'Abilità nel programmare il lavoro in modo da rispettare puntualmente i termini stabiliti.',
                    'Risoluzione dei problemi': 'Approccio analitico e propositivo per individuare, analizzare e superare le criticità lavorative.',
                    'Gestione dei progetti': 'Capacità di pianificare, monitorare e portare a termine progetti nel rispetto di tempi, costi e risultati attesi.',
                    'Ottimizzazione dei processi': 'Capacità di individuare opportunità di miglioramento nell\'organizzazione del lavoro e nei processi.'
                  };

                  // Communicative skills descriptions definition locally
                  const commDescriptions: Record<string, string> = {
                    'Ascolto attivo': 'Capacità di ascoltare con attenzione e coinvolgimento per comprendere a fondo le esigenze dell\'interlocutore.',
                    'Lavoro di squadra': 'Attitudine a collaborare positivamente con colleghi e collaboratori per il raggiungimento di obiettivi comuni.',
                    'Relazioni con il pubblico': 'Abilità nel relazionarsi con clienti o utenti esterni in modo cortese, chiaro ed efficace.',
                    'Comunicazione scritta': 'Capacità di redigere testi, email o documenti di lavoro in modo chiaro, preciso e strutturato.',
                    'Negoziazione': 'Abilità nel gestire trattative e convergere verso soluzioni condivise e vantaggiose per le parti.',
                    'Risoluzione dei conflitti': 'Capacità di mediare e risolvere tensioni all\'interno del team o con soggetti esterni in modo costruttivo.'
                  };

                  return (
                    <>
                      {compKeys.length > 0 && (
                        <div>
                          <strong>Competenze Informatiche:</strong>
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '6px' }}>
                            {compKeys.map(skill => (
                              <span key={skill} className="tag" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid var(--border-glass)', padding: '6px 12px', borderRadius: '6px', fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: 'bold' }}>
                                {skill} <span style={{ color: 'var(--accent-blue)', marginLeft: '4px' }}>({compSkills[skill]})</span>
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {langKeys.length > 0 && (
                        <div>
                          <strong>Competenze Linguistiche:</strong>
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '6px', marginBottom: '8px' }}>
                            {langKeys.map(skill => (
                              <span key={skill} className="tag" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid var(--border-glass)', padding: '6px 12px', borderRadius: '6px', fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: 'bold' }}>
                                {skill} <span style={{ color: 'var(--accent-blue)', marginLeft: '4px' }}>({langSkills[skill]})</span>
                              </span>
                            ))}
                          </div>
                          
                          <div style={{ background: 'rgba(255,255,255,0.02)', padding: '8px 10px', borderRadius: '6px', border: '1px solid var(--border-glass)', fontSize: '0.7rem', color: 'var(--text-secondary)', lineHeight: '1.4' }}>
                            <strong style={{ color: '#fff', fontSize: '0.75rem', display: 'block', marginBottom: '2px' }}>Legenda Livelli Lingue:</strong>
                            <ul style={{ paddingLeft: '12px', margin: 0, listStyleType: 'disc' }}>
                              <li><strong>Nessuna:</strong> Non si possiedono conoscenze della lingua.</li>
                              <li><strong>Base:</strong> Si comprendono e si usano parole ed espressioni semplici; si riesce a comunicare in situazioni quotidiane essenziali.</li>
                              <li><strong>Intermedio:</strong> Si comprende il significato generale di conversazioni e testi; si comunica con una buona autonomia su argomenti comuni.</li>
                              <li><strong>Avanzato:</strong> Si utilizza la lingua con scioltezza e precisione, sia nel parlato che nello scritto, anche in contesti complessi o professionali.</li>
                            </ul>
                          </div>
                        </div>
                      )}

                      {orgKeys.length > 0 && (
                        <div>
                          <strong>Competenze Organizzative:</strong>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginTop: '6px' }}>
                            {orgKeys.map(skill => {
                              const desc = orgDescriptions[skill] || '';
                              return (
                                <div key={skill} style={{ fontSize: '0.8rem', padding: '8px 10px', background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border-glass)', borderRadius: '6px', color: 'var(--text-secondary)', lineHeight: '1.4' }}>
                                  <strong>{skill}</strong> {desc ? `– ${desc}` : ''} <span style={{ color: 'var(--accent-blue)', marginLeft: '4px', fontWeight: 'bold' }}>({orgSkills[skill]})</span>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )}

                      {commKeys.length > 0 && (
                        <div>
                          <strong>Competenze Comunicative e Relazionali:</strong>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginTop: '6px' }}>
                            {commKeys.map(skill => {
                              const desc = commDescriptions[skill] || '';
                              return (
                                <div key={skill} style={{ fontSize: '0.8rem', padding: '8px 10px', background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border-glass)', borderRadius: '6px', color: 'var(--text-secondary)', lineHeight: '1.4' }}>
                                  <strong>{skill}</strong> {desc ? `– ${desc}` : ''} <span style={{ color: 'var(--accent-blue)', marginLeft: '4px', fontWeight: 'bold' }}>({commSkills[skill]})</span>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </>
                  );
                })()}
              </div>

              {viewingWorkerCv.certifications && (
                <div style={{ marginTop: '12px', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '10px' }}>
                  <strong>Certificazioni:</strong>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '6px' }}>
                    {viewingWorkerCv.certifications.split(',').map((cert: string, i: number) => (
                      <span key={i} className="tag" style={{ borderColor: 'rgba(139,92,246,0.3)', color: '#d8b4fe', fontSize: '0.75rem', padding: '3px 8px' }}>{cert.trim()}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div style={{ borderTop: '1px solid var(--border-glass)', paddingTop: '20px', marginBottom: '24px' }}>
              <h5 style={{ margin: '0 0 12px 0', fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Esperienze Lavorative Precedenti</h5>
              {(viewingWorkerCv.workExperiences || []).length === 0 ? (
                <p style={{ fontStyle: 'italic', fontSize: '0.85rem', color: 'var(--text-muted)' }}>Nessuna esperienza lavorativa registrata</p>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {(viewingWorkerCv.workExperiences || []).map((exp: any) => (
                    <div key={exp.id} style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border-glass)', padding: '12px', borderRadius: '8px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                        <strong style={{ fontSize: '0.9rem', color: '#fff' }}>{exp.role}</strong>
                        <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{exp.startDate} - {exp.endDate || 'Presente'}</span>
                      </div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--accent-blue)', fontWeight: 600 }}>{exp.companyName} {exp.city && `(${exp.city})`}</div>
                      {exp.description && <p style={{ margin: '6px 0 0 0', fontSize: '0.8rem', color: 'var(--text-secondary)', fontStyle: 'italic' }}>{exp.description}</p>}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div style={{ display: 'flex', gap: '12px', borderTop: '1px solid var(--border-glass)', paddingTop: '20px', justifyContent: 'flex-end' }}>
              {viewingWorkerCv.cvPdfUrl && (
                <button 
                  type="button"
                  onClick={() => handleOpenCvPdf(viewingWorkerCv.cvPdfUrl)}
                  className="btn btn-primary"
                  style={{ fontSize: '0.85rem' }}
                >
                  📎 Visualizza CV PDF
                </button>
              )}
              <button className="btn btn-secondary" onClick={() => setViewingWorkerCv(null)} style={{ fontSize: '0.85rem' }}>Chiudi</button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
