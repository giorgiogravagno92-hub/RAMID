import React, { useState, useEffect } from 'react';
import { api, API_BASE_URL } from '../utils/api';
import { CITIES, PROVINCE_SIGLE, COMPANY_SECTORS, PROFESSIONS, REGIONS_AND_PROVINCES } from '../utils/constants';

interface LoginProps {
  initialRole: string; // 'WORKER' or 'COMPANY'
  onLoginSuccess: (user: any, token: string) => void;
}

const formatCapitalizedWords = (str: string) => {
  if (!str) return '';
  return str
    .split(' ')
    .map(word => word ? word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() : '')
    .join(' ');
};

const validatePassword = (pass: string): string | null => {
  if (pass.length < 8) return 'La password deve contenere almeno 8 caratteri.';
  if (!/[A-Z]/.test(pass)) return 'La password deve contenere almeno una lettera maiuscola.';
  if (!/\d/.test(pass)) return 'La password deve contenere almeno un numero.';
  if (!/[^A-Za-z0-9]/.test(pass)) return 'La password deve contenere almeno un simbolo.';
  return null;
};

const findRegionByProvince = (provinceName: string): string => {
  for (const [region, provinces] of Object.entries(REGIONS_AND_PROVINCES)) {
    if (Array.isArray(provinces) && provinces.includes(provinceName)) {
      return region;
    }
  }
  return 'Lazio';
};

export const Login: React.FC<LoginProps> = ({ initialRole, onLoginSuccess }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [verificationEmailSentTo, setVerificationEmailSentTo] = useState<string | null>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState(initialRole);
  const [fiscalCode, setFiscalCode] = useState('');
  const [otpSentEmail, setOtpSentEmail] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [vatNumber, setVatNumber] = useState('IT');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [province, setProvince] = useState('');
  const [sigla, setSigla] = useState('');
  const [sector, setSector] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [acceptPrivacy, setAcceptPrivacy] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);

  // Forgot Password / Access Recovery States
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [forgotStep, setForgotStep] = useState<1 | 2>(1);
  const [forgotEmail, setForgotEmail] = useState('');
  const [forgotVatNumber, setForgotVatNumber] = useState('');
  const [forgotOtpCode, setForgotOtpCode] = useState('');
  const [newResetPassword, setNewResetPassword] = useState('');
  const [confirmResetPassword, setConfirmResetPassword] = useState('');
  const [forgotLoading, setForgotLoading] = useState(false);
  const [forgotError, setForgotError] = useState('');
  const [forgotMessage, setForgotMessage] = useState('');

  // Recruiter Persona Fisica / OTP States
  const [companyType, setCompanyType] = useState<'AZIENDA' | 'PERSONA_FISICA'>('AZIENDA');
  const [phone, setPhone] = useState('');
  const [showOtpScreen, setShowOtpScreen] = useState(false);
  const [otpCode, setOtpCode] = useState('');
  const [otpSentCode, setOtpSentCode] = useState('');

  // Candidate Curriculum states
  const [profession, setProfession] = useState('');
  const [noEducation, setNoEducation] = useState(false);
  const [educationTitles, setEducationTitles] = useState<any[]>([]);
  const [noExperience, setNoExperience] = useState(false);
  const [workExperiences, setWorkExperiences] = useState<any[]>([]);

  // Temp states to add education/experience items
  const [newEduLevel, setNewEduLevel] = useState('DIPLOMA');
  const [newEduField, setNewEduField] = useState('');
  const [newEduConseguitoPresso, setNewEduConseguitoPresso] = useState('');
  const [newEduInData, setNewEduInData] = useState('');

  const [newExpCompany, setNewExpCompany] = useState('');
  const [newExpRole, setNewExpRole] = useState('');
  const [newExpStartDate, setNewExpStartDate] = useState('');
  const [newExpEndDate, setNewExpEndDate] = useState('');
  const [newExpDesc, setNewExpDesc] = useState('');
  const [newExpCity, setNewExpCity] = useState('');

  const [registrationToken, setRegistrationToken] = useState<string | null>(null);

  useEffect(() => {
    if (!verificationEmailSentTo || !registrationToken) return;

    const interval = setInterval(async () => {
      try {
        const res = await api.auth.checkVerificationStatus(verificationEmailSentTo, registrationToken);
        if (res && res.verified) {
          clearInterval(interval);
          onLoginSuccess(res.user, res.token);
        }
      } catch (err) {
        // Silent catch
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [verificationEmailSentTo, registrationToken, onLoginSuccess]);

  useEffect(() => {
    setShowOtpScreen(false);
    setError('');
    setOtpCode('');
    setOtpSentCode('');
    setOtpSentEmail('');
    setRegistrationToken(null);
  }, [isLogin, role, companyType]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (isLogin) {
        if (role === 'WORKER') {
          // Worker Login
          const res = await api.auth.login({ 
            email: email.trim(), 
            password, 
            expectedRole: 'WORKER' 
          });
          onLoginSuccess(res.user, res.token);
        } else if (role === 'COMPANY' && companyType === 'AZIENDA') {
          // Company Login
          const cleanVat = vatNumber.replace(/^IT/i, '').trim();
          if (!email.trim() && !cleanVat) {
            setError('Inserisci l\'Indirizzo PEC o la Partita IVA per accedere.');
            setLoading(false);
            return;
          }
          const res = await api.auth.login({ 
            email: email.trim() || undefined, 
            password, 
            vatNumber: cleanVat ? 'IT' + cleanVat : undefined,
            expectedRole: 'COMPANY'
          });
          onLoginSuccess(res.user, res.token);
        } else if (role === 'COMPANY' && companyType === 'PERSONA_FISICA') {
          // Persona Fisica Login
          if (!showOtpScreen) {
            if (!firstName.trim() || !lastName.trim() || !fiscalCode.trim() || !phone.trim()) {
              setError('Nome, Cognome, Codice Fiscale e Cellulare sono obbligatori.');
              setLoading(false);
              return;
            }
            const res = await api.auth.sendOtp({
              firstName,
              lastName,
              fiscalCode,
              phone,
              isRegistration: false
            });
            setOtpSentCode(res.code);
            setOtpSentEmail(res.email);
            setShowOtpScreen(true);
            alert(`[SIMULAZIONE] Codice OTP inviato. Codice: ${res.code}`);
          } else {
            if (!otpCode.trim()) {
              setError('Codice OTP richiesto.');
              setLoading(false);
              return;
            }
            const res = await api.auth.verifyOtp({ email: otpSentEmail, code: otpCode });
            onLoginSuccess(res.user, res.token);
          }
        }
      } else {
        if (!acceptPrivacy) {
          setError("Devi accettare l'Informativa sulla Privacy (GDPR) per registrarti.");
          setLoading(false);
          return;
        }

        // PEC validation for Company (Azienda or Persona Fisica)
        if (role === 'COMPANY') {
          const emailLower = email.toLowerCase().trim();
          const domain = emailLower.split('@')[1];
          const validPecDomains = new Set([
            'pec.it',
            'arubapec.it',
            'mypec.eu',
            'gigapec.it',
            'pec.cloud',
            'legalmail.it',
            'pec.infocert.it',
            'cert.legalmail.it',
            'postecert.it',
            'sicurezzapostale.it',
            'namirialpec.it',
            'sicurezzainformatica.net',
            'pec.namirial.it',
            'pec.net',
            'interfreepec.it',
            'timpec.it',
            'pec.telecomitalia.it',
            'actalispec.it',
            'pec.actalis.it',
            'pec.intesigroup.com',
            'pec.buffetti.it',
            'pecmail.net',
            'pec.kpnqwest.it',
            'kpnpec.it',
            'pec.cedacri.it',
            'postacertificata.notariato.it',
            'pec.bancaditalia.it'
          ]);

          const isPec = domain && (validPecDomains.has(domain) || domain.split('.').includes('pec'));
          if (!isPec) {
            setError('Indirizzo PEC non valido.');
            setLoading(false);
            return;
          }
        }

        // Recruiter Persona Fisica OTP Registration flow
        if (role === 'COMPANY' && companyType === 'PERSONA_FISICA') {
          if (!firstName.trim() || !lastName.trim() || !phone.trim() || !email.trim() || !fiscalCode.trim()) {
            setError('Nome, Cognome, Codice Fiscale, Email e Numero di Telefono sono obbligatori.');
            setLoading(false);
            return;
          }

          if (!showOtpScreen) {
            // Send OTP first
            const res = await api.auth.sendOtp({ email, phone, isRegistration: true });
            setOtpSentCode(res.code);
            setShowOtpScreen(true);
            alert(`[SIMULAZIONE] Codice OTP inviato: ${res.code}`);
          } else {
            // Register with OTP
            const profileData = {
              companyType: 'PERSONA_FISICA',
              firstName,
              lastName,
              contactPhone: phone,
              fiscalCode,
              otpCode
            };
            const res = await api.auth.register({ email, role, profileData });
            onLoginSuccess(res.user, res.token);
          }
        } else {
          // Registration password complexity check
          const passErr = validatePassword(password);
          if (passErr) {
            setError(passErr);
            setLoading(false);
            return;
          }

          let profileData: any = {};
          if (role === 'COMPANY') {
            const cleanVat = vatNumber.replace(/^IT/i, '');
            if (!/^\d{11}$/.test(cleanVat)) {
              setError('La Partita IVA deve essere composta dalla sigla IT seguita da esattamente 11 cifre.');
              setLoading(false);
              return;
            }
            profileData.companyName = companyName;
            profileData.vatNumber = 'IT' + cleanVat;
          } else {
            // Worker registration checks: ONLY Nome and Cognome
            if (!firstName.trim() || !lastName.trim()) {
              setError('Nome e Cognome sono obbligatori.');
              setLoading(false);
              return;
            }
            profileData.firstName = firstName;
            profileData.lastName = lastName;
          }
          
          const res = await api.auth.register({ email, password, role, profileData });
          if (res && res.emailVerificationRequired) {
            setRegistrationToken(res.registrationToken || null);
            setVerificationEmailSentTo(res.email);
          } else {
            onLoginSuccess(res.user, res.token);
          }
        }
      }
    } catch (err: any) {
      setError(err.message || 'Errore durante l\'autenticazione');
    } finally {
      setLoading(false);
    }
  };

  const handleSendResetCode = async (e: React.FormEvent) => {
    e.preventDefault();
    setForgotError('');
    setForgotMessage('');
    setForgotLoading(true);
    try {
      const cleanVat = forgotVatNumber.replace(/^IT/i, '').trim();
      const res = await api.auth.forgotPassword({
        email: forgotEmail.trim() || undefined,
        vatNumber: cleanVat ? 'IT' + cleanVat : undefined
      });
      setForgotMessage(res.message || 'Codice inviato con successo');
      setForgotStep(2);
    } catch (err: any) {
      setForgotError(err.message || 'Errore durante l\'invio del codice di recupero');
    } finally {
      setForgotLoading(false);
    }
  };

  const handlePerformReset = async (e: React.FormEvent) => {
    e.preventDefault();
    setForgotError('');
    setForgotMessage('');

    if (newResetPassword !== confirmResetPassword) {
      setForgotError('Le due password inserite non coincidono.');
      return;
    }

    const passErr = validatePassword(newResetPassword);
    if (passErr) {
      setForgotError(passErr);
      return;
    }

    setForgotLoading(true);
    try {
      const res = await api.auth.resetPassword({
        email: forgotEmail.trim(),
        otpCode: forgotOtpCode.trim(),
        newPassword: newResetPassword
      });
      alert('Password aggiornata con successo! Accesso in corso...');
      setShowForgotPassword(false);
      onLoginSuccess(res.user, res.token);
    } catch (err: any) {
      setForgotError(err.message || 'Errore durante la reimpostazione della password');
    } finally {
      setForgotLoading(false);
    }
  };

  return (
    <div className="container" style={{ display: 'flex', justifyContent: 'center', padding: '60px 24px' }}>
      <div className="glass-card" style={{ width: '100%', maxWidth: '480px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '8px' }}>
          {isLogin ? 'Accedi a Ramid' : 'Registrati come ' + (role === 'COMPANY' ? 'Recruiter' : 'Lavoratore')}
        </h2>
        <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '24px', fontSize: '0.9rem' }}>
          Inserisci le tue credenziali per accedere.
        </p>



        {error && (
          <div style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid var(--accent-red)', color: 'var(--accent-red)', padding: '12px', borderRadius: '8px', marginBottom: '20px', fontSize: '0.9rem' }}>
            ⚠️ {error}
          </div>
        )}
        {/* Form */}
        {verificationEmailSentTo ? (
          <div style={{ textAlign: 'center', padding: '10px 0' }}>
            <div style={{ fontSize: '3rem', marginBottom: '16px' }}>📧</div>
            <h3 style={{ marginBottom: '12px', color: '#fff' }}>Verifica il tuo Account</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '20px', lineHeight: '1.5' }}>
              Abbiamo inviato un link di autorizzazione all'indirizzo {role === 'COMPANY' ? 'PEC' : 'email'} <strong style={{ color: 'var(--accent-blue)' }}>{verificationEmailSentTo}</strong>.
              Clicca sul link per confermare la registrazione e attivare il tuo profilo.
            </p>

            <button 
              type="button" 
              className="btn btn-secondary" 
              style={{ width: '100%' }}
              onClick={() => {
                setVerificationEmailSentTo(null);
                setIsLogin(true);
                setError('');
              }}
            >
              Torna al Login
            </button>
          </div>
        ) : (
          <>
            <form onSubmit={handleSubmit}>
              {/* REGISTER FOR COMPANY TYPE TOGGLE */}
              {role === 'COMPANY' && (
                <div style={{ display: 'flex', gap: '8px', marginBottom: '20px', background: 'rgba(255,255,255,0.03)', padding: '4px', borderRadius: '8px', border: '1px solid var(--border-glass)' }}>
                  <button 
                    type="button" 
                    onClick={() => { setCompanyType('AZIENDA'); setShowOtpScreen(false); setError(''); }}
                    className="btn"
                    disabled={showOtpScreen}
                    style={{ flex: 1, padding: '8px', fontSize: '0.78rem', background: companyType === 'AZIENDA' ? 'var(--accent-blue)' : 'transparent', color: companyType === 'AZIENDA' ? '#fff' : 'var(--text-secondary)', border: 'none', borderRadius: '6px', fontWeight: 600, opacity: showOtpScreen ? 0.5 : 1 }}
                  >
                    🏢 Società / Azienda
                  </button>
                  <button 
                    type="button" 
                    onClick={() => { setCompanyType('PERSONA_FISICA'); setShowOtpScreen(false); setError(''); }}
                    className="btn"
                    disabled={showOtpScreen}
                    style={{ flex: 1, padding: '8px', fontSize: '0.78rem', background: companyType === 'PERSONA_FISICA' ? 'var(--accent-purple)' : 'transparent', color: companyType === 'PERSONA_FISICA' ? '#fff' : 'var(--text-secondary)', border: 'none', borderRadius: '6px', fontWeight: 600, opacity: showOtpScreen ? 0.5 : 1 }}
                  >
                    👤 Persona Fisica
                  </button>
                </div>
              )}

              {/* LOGIN PERSONA FISICA OTP (FORM DETAILS / SEND OTP) */}
              {isLogin && role === 'COMPANY' && companyType === 'PERSONA_FISICA' && !showOtpScreen && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '20px' }}>
                  <div className="form-control-row" style={{ marginBottom: 0 }}>
                    <div>
                      <label className="form-label">Nome *</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        value={firstName} 
                        onChange={(e) => setFirstName(formatCapitalizedWords(e.target.value))} 
                        required 
                      />
                    </div>
                    <div>
                      <label className="form-label">Cognome *</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        value={lastName} 
                        onChange={(e) => setLastName(formatCapitalizedWords(e.target.value))} 
                        required 
                      />
                    </div>
                  </div>
                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <label className="form-label">Codice Fiscale *</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={fiscalCode} 
                      onChange={(e) => setFiscalCode(e.target.value.toUpperCase())} 
                      placeholder="es. RSSMRA80A01H501W"
                      required 
                    />
                  </div>
                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <label className="form-label">Numero di Telefono (Cellulare) *</label>
                    <input 
                      type="tel" 
                      className="form-control" 
                      value={phone} 
                      onChange={(e) => setPhone(e.target.value.replace(/[^0-9+]/g, ''))} 
                      placeholder="es. +39 333 1234567"
                      required 
                    />
                  </div>
                </div>
              )}

              {/* LOGIN PERSONA FISICA OTP (VERIFY CODE) */}
              {isLogin && role === 'COMPANY' && companyType === 'PERSONA_FISICA' && showOtpScreen && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '20px' }}>
                  <div style={{ background: 'rgba(139,92,246,0.1)', color: 'var(--accent-purple)', padding: '10px', borderRadius: '8px', fontSize: '0.78rem', border: '1px solid rgba(139,92,246,0.2)' }}>
                    🔑 Codice OTP di test: <strong>{otpSentCode}</strong>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Codice OTP *</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={otpCode} 
                      onChange={(e) => setOtpCode(e.target.value.replace(/\D/g, '').slice(0, 6))} 
                      placeholder="es. 123456"
                      required 
                    />
                  </div>
                </div>
              )}

              {/* REGISTRATION RECRUITER PERSONA FISICA */}
              {!isLogin && role === 'COMPANY' && companyType === 'PERSONA_FISICA' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '20px' }}>
                  {showOtpScreen ? (
                    <>
                      <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginBottom: '8px', lineHeight: '1.4' }}>
                        Inserisci il codice OTP inviato all'indirizzo <strong>{email}</strong> ed al numero <strong>{phone}</strong> per completare la registrazione della Persona Fisica.
                      </div>
                      <div style={{ background: 'rgba(139,92,246,0.1)', color: 'var(--accent-purple)', padding: '10px', borderRadius: '8px', fontSize: '0.78rem', border: '1px solid rgba(139,92,246,0.2)' }}>
                        🔑 Codice OTP di test: <strong>{otpSentCode}</strong>
                      </div>
                      <div className="form-group">
                        <label className="form-label">Codice OTP *</label>
                        <input 
                          type="text" 
                          className="form-control" 
                          value={otpCode} 
                          onChange={(e) => setOtpCode(e.target.value.replace(/\D/g, '').slice(0, 6))} 
                          placeholder="es. 123456"
                          required 
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="form-control-row" style={{ marginBottom: 0 }}>
                        <div>
                          <label className="form-label">Nome *</label>
                          <input 
                            type="text" 
                            className="form-control" 
                            value={firstName} 
                            onChange={(e) => setFirstName(formatCapitalizedWords(e.target.value))} 
                            required 
                          />
                        </div>
                        <div>
                          <label className="form-label">Cognome *</label>
                          <input 
                            type="text" 
                            className="form-control" 
                            value={lastName} 
                            onChange={(e) => setLastName(formatCapitalizedWords(e.target.value))} 
                            required 
                          />
                        </div>
                      </div>
                      <div className="form-group" style={{ marginBottom: 0 }}>
                        <label className="form-label">Indirizzo Email *</label>
                        <input 
                          type="email" 
                          className="form-control" 
                          value={email} 
                          onChange={(e) => setEmail(e.target.value)} 
                          placeholder="es. nome@email.it"
                          required 
                        />
                      </div>
                      <div className="form-group" style={{ marginBottom: 0 }}>
                        <label className="form-label">Codice Fiscale *</label>
                        <input 
                          type="text" 
                          className="form-control" 
                          value={fiscalCode} 
                          onChange={(e) => setFiscalCode(e.target.value.toUpperCase())} 
                          placeholder="es. RSSMRA80A01H501W"
                          required 
                        />
                      </div>
                      <div className="form-group" style={{ marginBottom: 0 }}>
                        <label className="form-label">Numero di Telefono (Cellulare) *</label>
                        <input 
                          type="tel" 
                          className="form-control" 
                          value={phone} 
                          onChange={(e) => setPhone(e.target.value.replace(/[^0-9+]/g, ''))} 
                          placeholder="es. +39 333 1234567"
                          required 
                        />
                      </div>
                    </>
                  )}
                </div>
              )}

              {/* TRADITIONAL REGISTRATION WORKER */}
              {!isLogin && role === 'WORKER' && (
                <div className="form-control-row" style={{ marginBottom: '20px' }}>
                  <div>
                    <label className="form-label">Nome *</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={firstName} 
                      onChange={(e) => setFirstName(formatCapitalizedWords(e.target.value))} 
                      required 
                    />
                  </div>
                  <div>
                    <label className="form-label">Cognome *</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={lastName} 
                      onChange={(e) => setLastName(formatCapitalizedWords(e.target.value))} 
                      required 
                    />
                  </div>
                </div>
              )}

              {/* TRADITIONAL REGISTRATION AZIENDA */}
              {!isLogin && role === 'COMPANY' && companyType === 'AZIENDA' && (
                <div style={{ marginBottom: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <label className="form-label">Nome azienda *</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={companyName} 
                      onChange={(e) => setCompanyName(formatCapitalizedWords(e.target.value))} 
                      required 
                    />
                  </div>

                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <label className="form-label">Partita IVA *</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={vatNumber} 
                      onChange={(e) => {
                        const val = e.target.value;
                        const digits = val.replace(/^IT/i, '').replace(/[^0-9]/g, '').slice(0, 11);
                        setVatNumber('IT' + digits);
                      }} 
                      required 
                    />
                  </div>
                </div>
              )}

              {/* LOGIN AZIENDA PARTITA IVA FIELD */}
              {isLogin && role === 'COMPANY' && companyType === 'AZIENDA' && (
                <>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '16px', lineHeight: '1.4', background: 'rgba(59,130,246,0.05)', padding: '10px', borderRadius: '8px', border: '1px solid rgba(59,130,246,0.1)' }}>
                    💡 Inserisci <strong>a tua scelta</strong> o la Partita IVA o l'Indirizzo PEC Aziendale, insieme alla password.
                  </div>
                  <div className="form-group" style={{ marginBottom: '12px' }}>
                    <label className="form-label">Partita IVA (o PEC Aziendale)</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={vatNumber} 
                      onChange={(e) => {
                        const val = e.target.value;
                        const digits = val.replace(/^IT/i, '').replace(/[^0-9]/g, '').slice(0, 11);
                        setVatNumber(digits ? 'IT' + digits : '');
                      }} 
                      placeholder="es. IT12345678901"
                    />
                  </div>
                </>
              )}

              {/* STANDARD INPUTS FOR PASSWORD & EMAIL IN OTHER CASES */}
              {!(role === 'COMPANY' && companyType === 'PERSONA_FISICA') && (
                <>
                  <div className="form-group">
                    <label className="form-label">
                      {role === 'COMPANY' ? 'Indirizzo PEC Aziendale (o Partita IVA)' : 'Indirizzo Email *'}
                    </label>
                    <input 
                      type="email" 
                      className="form-control" 
                      value={email} 
                      onChange={(e) => setEmail(e.target.value)} 
                      placeholder={role === 'COMPANY' ? "es. pec@azienda.it" : "es. nome@email.it"}
                      required={isLogin ? (role === 'WORKER') : true} 
                    />
                  </div>

                  <div className="form-group" style={{ marginBottom: isLogin ? '20px' : '10px' }}>
                    <label className="form-label">Password</label>
                    <div style={{ position: 'relative' }}>
                      <input 
                        type={showPassword ? "text" : "password"} 
                        className="form-control" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        placeholder="••••••••"
                        style={{ paddingRight: '40px' }}
                        required 
                      />
                      <button
                        type="button"
                        onMouseDown={() => setShowPassword(true)}
                        onMouseUp={() => setShowPassword(false)}
                        onMouseLeave={() => setShowPassword(false)}
                        onTouchStart={(e) => { e.preventDefault(); setShowPassword(true); }}
                        onTouchEnd={(e) => { e.preventDefault(); setShowPassword(false); }}
                        style={{
                          position: 'absolute',
                          right: '12px',
                          top: '50%',
                          transform: 'translateY(-50%)',
                          background: 'none',
                          border: 'none',
                          cursor: 'pointer',
                          fontSize: '1rem',
                          padding: '4px',
                          color: showPassword ? 'var(--accent-blue)' : 'var(--text-muted)',
                          userSelect: 'none',
                          outline: 'none',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                        title="Tieni premuto per mostrare la password"
                      >
                        👁️
                      </button>
                    </div>
                    {isLogin && (
                      <div style={{ textAlign: 'right', marginTop: '6px' }}>
                        <span 
                          style={{ color: 'var(--accent-blue)', fontSize: '0.8rem', cursor: 'pointer', fontWeight: 600 }}
                          onClick={() => {
                            setShowForgotPassword(true);
                            setForgotStep(1);
                            setForgotEmail(email);
                            setForgotVatNumber(vatNumber !== 'IT' ? vatNumber : '');
                            setForgotError('');
                            setForgotMessage('');
                          }}
                        >
                          Hai dimenticato la password?
                        </span>
                      </div>
                    )}
                    {!isLogin && (
                      <span style={{ display: 'block', fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: '6px', lineHeight: '1.3' }}>
                        🔒 La password deve contenere almeno 8 caratteri, una lettera maiuscola, un numero e un simbolo.
                      </span>
                    )}
                  </div>
                </>
              )}

              {!isLogin && (
                <div style={{ margin: '15px 0', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                  <input 
                    type="checkbox" 
                    id="privacyCheckbox"
                    checked={acceptPrivacy} 
                    onChange={(e) => setAcceptPrivacy(e.target.checked)} 
                    style={{ marginTop: '3px', cursor: 'pointer' }}
                  />
                  <label htmlFor="privacyCheckbox" style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', cursor: 'pointer', lineHeight: '1.4' }}>
                    Accetto l'
                    <span 
                      style={{ color: 'var(--accent-blue)', textDecoration: 'underline', cursor: 'pointer', fontWeight: 600 }}
                      onClick={(e) => {
                        e.preventDefault();
                        setShowPrivacyModal(true);
                      }}
                    >
                      Informativa sulla Privacy GDPR
                    </span>{' '}
                    e acconsento al trattamento dei miei dati personali da parte di Ramid.
                  </label>
                </div>
              )}

              <button 
                type="submit" 
                className="btn btn-primary" 
                style={{ width: '100%', padding: '14px', marginTop: '10px' }}
                disabled={loading}
              >
                {loading ? 'Elaborazione in corso...' : (
                  isLogin ? (
                    (role === 'COMPANY' && companyType === 'PERSONA_FISICA') ? (
                      showOtpScreen ? 'Verifica OTP ed Accedi' : 'Invia Codice OTP'
                    ) : 'Accedi'
                  ) : (
                    (role === 'COMPANY' && companyType === 'PERSONA_FISICA' && !showOtpScreen) ? 'Invia OTP per Registrarsi' : 'Completa Registrazione'
                  )
                )}
              </button>
            </form>
          </>
        )}

        {/* Toggle Account Type / Auth Mode */}
        <div style={{ marginTop: '24px', textAlign: 'center', fontSize: '0.9rem' }}>
          <div style={{ marginBottom: '8px' }}>
            {isLogin ? 'Non hai un account?' : 'Hai già un account?'} {' '}
            <span 
              style={{ color: 'var(--accent-blue)', cursor: 'pointer', fontWeight: '600' }}
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? 'Registrati ora' : 'Accedi'}
            </span>
          </div>
        </div>

      {showPrivacyModal && (
        <div className="modal-overlay" style={{ zIndex: 1300, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div className="modal-content" style={{ maxWidth: '600px', width: '90%', padding: '24px', position: 'relative', background: '#ffffff', border: '1px solid #cbd5e1', borderRadius: '16px', color: '#0f172a', maxHeight: '80vh', overflowY: 'auto' }}>
            <div className="modal-close" onClick={() => setShowPrivacyModal(false)} style={{ fontSize: '1.8rem', cursor: 'pointer', position: 'absolute', top: '15px', right: '20px', color: '#64748b' }}>&times;</div>
            
            <h3 style={{ fontSize: '1.25rem', color: '#0284c7', marginBottom: '16px', fontWeight: 700 }}>📄 Informativa sulla Privacy GDPR</h3>
            
            <div style={{ fontSize: '0.85rem', color: '#334155', lineHeight: '1.6', display: 'flex', flexDirection: 'column', gap: '12px', textAlign: 'left' }}>
              <p>
                In conformità con il Regolamento Generale sulla Protezione dei Dati (GDPR - Regolamento UE 2016/679), ti forniamo le seguenti informazioni sul trattamento dei tuoi dati personali effettuato tramite la piattaforma <strong>Ramid</strong>.
              </p>
              
              <div>
                <strong style={{ color: '#0f172a' }}>1. Titolare del Trattamento</strong>
                <p style={{ margin: '4px 0 0 0' }}>
                  Il Titolare del trattamento dei dati è <strong>Ramid</strong>, con sede legale e recapiti di contatto specificati per l'erogazione del servizio di recruiting e intermediazione lavorativa.
                </p>
              </div>

              <div>
                <strong style={{ color: '#0f172a' }}>2. Tipologia di Dati Raccolti</strong>
                <p style={{ margin: '4px 0 0 0' }}>
                  Raccogliamo i seguenti dati personali necessari per l'incontro tra domanda e offerta di lavoro:
                </p>
                <ul style={{ margin: '4px 0 0 16px', padding: 0 }}>
                  <li>Dati anagrafici (Nome, Cognome) e dettagli di contatto (Email, Numero di Telefono).</li>
                  <li>Esperienze lavorative e titoli di studio inseriti nel CV digitale.</li>
                  <li>Requisiti geografici di disponibilità (Regione e Province di interesse).</li>
                  <li>Aspettative salariali netta desiderata e note aggiuntive.</li>
                </ul>
              </div>

              <div>
                <strong style={{ color: '#0f172a' }}>3. Finalità e Base Giuridica del Trattamento</strong>
                <p style={{ margin: '4px 0 0 0' }}>
                  I dati sono trattati esclusivamente per le seguenti finalità:
                </p>
                <ul style={{ margin: '4px 0 0 16px', padding: 0 }}>
                  <li>Creazione e gestione del profilo utente (Lavoratore o Recruiter).</li>
                  <li>Simulazione ed erogazione del servizio di abbinamento (match) con le proposte delle aziende.</li>
                  <li>Condivisione autorizzata dei recapiti telefonici/email tra candidati e aziende a seguito dell'accettazione esplicita della proposta ("Rispondi Subito").</li>
                </ul>
                <p style={{ margin: '6px 0 0 0' }}>
                  La base giuridica del trattamento è il <strong>consenso esplicito</strong> dell'utente (Art. 6.1.a GDPR), espresso tramite la spunta del checkbox di registrazione.
                </p>
              </div>

              <div>
                <strong style={{ color: '#0f172a' }}>4. Destinatari dei Dati e Sicurezza</strong>
                <p style={{ margin: '4px 0 0 0' }}>
                  I tuoi recapiti telefonici e l'email non verranno mai divulgati pubblicamente o a terzi estranei. Verranno mostrati esclusivamente al recruiter dell'azienda proponente a seguito dell'accettazione della proposta di lavoro da parte tua. Adottiamo idonee misure di sicurezza per proteggere i dati da accessi non autorizzati o perdite.
                </p>
              </div>

              <div>
                <strong style={{ color: '#0f172a' }}>5. Conservazione dei Dati</strong>
                <p style={{ margin: '4px 0 0 0' }}>
                  I dati personali saranno conservati finché il tuo account rimarrà attivo. Puoi richiedere la cancellazione totale del tuo account o la revoca del consenso in qualsiasi momento.
                </p>
              </div>

              <div>
                <strong style={{ color: '#0f172a' }}>6. Diritti dell'Interessato</strong>
                <p style={{ margin: '4px 0 0 0' }}>
                  Hai il diritto di accedere ai tuoi dati, chiederne la rettifica, la cancellazione (diritto all'oblio), la limitazione del trattamento o la portabilità, scrivendo all'indirizzo email del Titolare.
                </p>
              </div>
            </div>
            
            <button 
              type="button" 
              className="btn btn-primary" 
              style={{ width: '100%', marginTop: '20px', padding: '10px' }}
              onClick={() => setShowPrivacyModal(false)}
            >
              Chiudi e Torna al Form
            </button>
          </div>
        </div>
      )}

      {showForgotPassword && (
        <div className="modal-overlay" style={{ zIndex: 1300, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div className="modal-content" style={{ maxWidth: '480px', width: '92%', padding: '28px 24px', position: 'relative', background: '#ffffff', border: '1px solid #cbd5e1', borderRadius: '16px', color: '#0f172a', maxHeight: '90vh', overflowY: 'auto' }}>
            <div className="modal-close" onClick={() => setShowForgotPassword(false)} style={{ fontSize: '1.8rem', cursor: 'pointer', position: 'absolute', top: '15px', right: '20px', color: '#64748b' }}>&times;</div>
            
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '8px' }}>🔑</div>
              <h3 style={{ fontSize: '1.3rem', color: '#0284c7', margin: 0, fontWeight: 800 }}>Recupero Password</h3>
              <p style={{ fontSize: '0.85rem', color: '#64748b', marginTop: '6px' }}>
                {forgotStep === 1 
                  ? 'Inserisci la tua email di registrazione per ricevere il codice di sicurezza.' 
                  : 'Inserisci il codice ricevuto via email e la tua nuova password.'}
              </p>
            </div>

            {forgotError && (
              <div style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid var(--accent-red)', color: 'var(--accent-red)', padding: '12px', borderRadius: '8px', marginBottom: '16px', fontSize: '0.85rem' }}>
                ⚠️ {forgotError}
              </div>
            )}

            {forgotMessage && (
              <div style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid var(--accent-green)', color: 'var(--accent-green)', padding: '12px', borderRadius: '8px', marginBottom: '16px', fontSize: '0.85rem' }}>
                ✅ {forgotMessage}
              </div>
            )}

            {forgotStep === 1 ? (
              <form onSubmit={handleSendResetCode} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div className="form-group">
                  <label className="form-label" style={{ color: '#475569', fontSize: '0.8rem', fontWeight: 700 }}>
                    Indirizzo Email o PEC Registrata *
                  </label>
                  <input 
                    type="email" 
                    className="form-control" 
                    value={forgotEmail} 
                    onChange={(e) => setForgotEmail(e.target.value)} 
                    placeholder="es. nome@email.it"
                    required 
                  />
                </div>

                {role === 'COMPANY' && (
                  <div className="form-group">
                    <label className="form-label" style={{ color: '#475569', fontSize: '0.8rem', fontWeight: 700 }}>
                      Oppure Partita IVA (per Aziende)
                    </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={forgotVatNumber} 
                      onChange={(e) => setForgotVatNumber(e.target.value.toUpperCase())} 
                      placeholder="es. IT12345678901"
                    />
                  </div>
                )}

                <button 
                  type="submit" 
                  className="btn btn-primary" 
                  style={{ width: '100%', padding: '12px', marginTop: '6px', fontWeight: 700 }}
                  disabled={forgotLoading}
                >
                  {forgotLoading ? 'Invio in corso...' : '📩 Invia Codice di Recupero'}
                </button>
              </form>
            ) : (
              <form onSubmit={handlePerformReset} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div className="form-group">
                  <label className="form-label" style={{ color: '#475569', fontSize: '0.8rem', fontWeight: 700 }}>
                    Codice di Sicurezza a 6 Cifre (OTP) *
                  </label>
                  <input 
                    type="text" 
                    className="form-control" 
                    value={forgotOtpCode} 
                    onChange={(e) => setForgotOtpCode(e.target.value.replace(/\D/g, '').slice(0, 6))} 
                    placeholder="es. 123456"
                    style={{ textAlign: 'center', fontSize: '1.2rem', letterSpacing: '4px', fontWeight: 800 }}
                    required 
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" style={{ color: '#475569', fontSize: '0.8rem', fontWeight: 700 }}>
                    Nuova Password *
                  </label>
                  <input 
                    type="password" 
                    className="form-control" 
                    value={newResetPassword} 
                    onChange={(e) => setNewResetPassword(e.target.value)} 
                    placeholder="••••••••"
                    required 
                  />
                  <span style={{ fontSize: '0.72rem', color: '#64748b', display: 'block', marginTop: '4px' }}>
                    Almeno 8 caratteri, 1 maiuscola, 1 numero e 1 simbolo.
                  </span>
                </div>

                <div className="form-group">
                  <label className="form-label" style={{ color: '#475569', fontSize: '0.8rem', fontWeight: 700 }}>
                    Conferma Nuova Password *
                  </label>
                  <input 
                    type="password" 
                    className="form-control" 
                    value={confirmResetPassword} 
                    onChange={(e) => setConfirmResetPassword(e.target.value)} 
                    placeholder="••••••••"
                    required 
                  />
                </div>

                <button 
                  type="submit" 
                  className="btn btn-success" 
                  style={{ width: '100%', padding: '12px', marginTop: '6px', fontWeight: 700 }}
                  disabled={forgotLoading}
                >
                  {forgotLoading ? 'Salvataggio in corso...' : '🔐 Reimposta Password ed Entra'}
                </button>

                <div style={{ textAlign: 'center', marginTop: '6px' }}>
                  <button 
                    type="button" 
                    onClick={() => setForgotStep(1)}
                    style={{ background: 'none', border: 'none', color: 'var(--accent-blue)', cursor: 'pointer', fontSize: '0.8rem' }}
                  >
                    ← Torna al passo precedente
                  </button>
                </div>
              </form>
            )}

            <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px solid #e2e8f0', background: '#f8fafc', padding: '12px', borderRadius: '8px', fontSize: '0.78rem', color: '#64748b', lineHeight: 1.4 }}>
              <strong>💬 Hai perso l'accesso o non ricordi la tua email?</strong><br />
              Contatta la nostra assistenza all'indirizzo <a href="mailto:info@ramid.it" style={{ color: 'var(--accent-blue)', fontWeight: 600 }}>info@ramid.it</a> indicando il tuo nominativo o Partita IVA per il recupero manuale dell'account.
            </div>
          </div>
        </div>
      )}
      </div>
    </div>
  );
};
