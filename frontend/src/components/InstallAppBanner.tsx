import React, { useState, useEffect } from 'react';

export const InstallAppBanner: React.FC = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isIOS, setIsIOS] = useState<boolean>(false);
  const [isAndroid, setIsAndroid] = useState<boolean>(false);
  const [isInAppBrowser, setIsInAppBrowser] = useState<boolean>(false);
  const [isStandalone, setIsStandalone] = useState<boolean>(false);
  const [showBanner, setShowBanner] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [installedSuccess, setInstalledSuccess] = useState<boolean>(false);

  const APK_DOWNLOAD_URL = '/ramid.apk';

  useEffect(() => {
    // 1. Check if running in standalone mode (already installed app)
    const checkStandalone = () => {
      const standalone = 
        window.matchMedia('(display-mode: standalone)').matches ||
        (window.navigator as any).standalone === true ||
        document.referrer.includes('android-app://');
      setIsStandalone(standalone);
      return standalone;
    };

    if (checkStandalone()) {
      return;
    }

    // 2. Detect Device & Browser Context
    const ua = (window.navigator.userAgent || '').toLowerCase();
    const isIosDevice = /iphone|ipad|ipod/.test(ua) && !(window as any).MSStream;
    const isAndroidDevice = /android/.test(ua);
    const inApp = /(fban|fbav|instagram|telegram|whatsapp|line|micromessenger|wv|version\/.*chrome)/.test(ua);

    setIsIOS(isIosDevice);
    setIsAndroid(isAndroidDevice);
    setIsInAppBrowser(inApp);

    // 3. Check dismiss state (don't auto-popup banner if dismissed within 24h, but allow manual trigger)
    const dismissedTime = localStorage.getItem('ramid_pwa_dismissed');
    const isDismissedRecently = dismissedTime && (Date.now() - parseInt(dismissedTime, 10)) < 24 * 60 * 60 * 1000;

    // 4. Capture native beforeinstallprompt (Android / Chrome / Edge)
    const handleBeforeInstallPrompt = (e: any) => {
      e.preventDefault();
      setDeferredPrompt(e);
      (window as any).__RAMID_DEFERRED_PROMPT__ = e;
      if (!isDismissedRecently) {
        setShowBanner(true);
      }
    };

    window.addEventListener('beforeinstallprompt' as any, handleBeforeInstallPrompt);

    // Show banner after 1.5s on mobile if not dismissed
    if (!isDismissedRecently) {
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 1500);
      return () => {
        clearTimeout(timer);
        window.removeEventListener('beforeinstallprompt' as any, handleBeforeInstallPrompt);
      };
    }

    // 5. Native appinstalled listener
    const handleAppInstalled = () => {
      setShowBanner(false);
      setShowModal(false);
      setDeferredPrompt(null);
      (window as any).__RAMID_DEFERRED_PROMPT__ = null;
      setInstalledSuccess(true);
      setTimeout(() => setInstalledSuccess(false), 5000);
    };

    window.addEventListener('appinstalled', handleAppInstalled);

    // 6. External trigger listener (from navbar / home buttons)
    const handleTriggerPrompt = () => {
      triggerInstall();
    };
    window.addEventListener('trigger-pwa-install', handleTriggerPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt' as any, handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
      window.removeEventListener('trigger-pwa-install', handleTriggerPrompt);
    };
  }, []);

  const triggerInstall = async () => {
    const promptEvent = deferredPrompt || (window as any).__RAMID_DEFERRED_PROMPT__;
    
    if (promptEvent) {
      try {
        await promptEvent.prompt();
        const choice = await promptEvent.userChoice;
        if (choice && choice.outcome === 'accepted') {
          setShowBanner(false);
          setShowModal(false);
          setDeferredPrompt(null);
          (window as any).__RAMID_DEFERRED_PROMPT__ = null;
          return;
        }
      } catch (err) {
        console.warn('Install prompt error, falling back to guide modal', err);
      }
    }

    // Show guide modal with APK and PWA options
    setShowModal(true);
  };

  const handleDismissBanner = () => {
    setShowBanner(false);
    localStorage.setItem('ramid_pwa_dismissed', Date.now().toString());
  };

  if (isStandalone) {
    return null;
  }

  return (
    <>
      {/* Toast Notifica Installazione Riuscita */}
      {installedSuccess && (
        <div style={{
          position: 'fixed',
          top: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          backgroundColor: '#10b981',
          color: '#ffffff',
          padding: '14px 24px',
          borderRadius: '12px',
          boxShadow: '0 10px 25px rgba(0,0,0,0.25)',
          zIndex: 10000,
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          fontWeight: 700,
          fontSize: '0.95rem',
          animation: 'pwaSlideDown 0.3s ease-out'
        }}>
          <span>🎉</span> App Ramid installata con successo sulla tua Home!
        </div>
      )}

      {/* Floating Bottom Banner */}
      {showBanner && (
        <div style={{
          position: 'fixed',
          bottom: '16px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 'calc(100% - 24px)',
          maxWidth: '520px',
          backgroundColor: 'rgba(15, 23, 42, 0.98)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(59, 130, 246, 0.4)',
          borderRadius: '18px',
          padding: '14px 18px',
          boxShadow: '0 16px 36px rgba(0, 0, 0, 0.4), 0 0 24px rgba(59, 130, 246, 0.25)',
          zIndex: 9998,
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          animation: 'pwaSlideUp 0.35s cubic-bezier(0.16, 1, 0.3, 1)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <img 
              src="/icon-192.png" 
              alt="Ramid App" 
              style={{
                width: '46px',
                height: '46px',
                borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.25)',
                flexShrink: 0
              }} 
            />
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <h4 style={{ margin: 0, fontSize: '1rem', color: '#ffffff', fontWeight: 700, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  Vuoi scaricare l'App Ramid?
                </h4>
                <span style={{ 
                  backgroundColor: '#0284c7', 
                  color: '#ffffff', 
                  fontSize: '0.65rem', 
                  fontWeight: 800, 
                  padding: '2px 6px', 
                  borderRadius: '6px'
                }}>
                  Gratis
                </span>
              </div>
              <p style={{ margin: '2px 0 0', fontSize: '0.8rem', color: '#cbd5e1', lineHeight: '1.25' }}>
                {isAndroid ? "Scarica l'APK Android o installala subito sulla Home!" : "Installala sul tuo telefono per offerte in tempo reale!"}
              </p>
            </div>
            <button
              onClick={handleDismissBanner}
              aria-label="Chiudi"
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                border: 'none',
                color: '#94a3b8',
                cursor: 'pointer',
                width: '28px',
                height: '28px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.95rem',
                flexShrink: 0
              }}
            >
              ✕
            </button>
          </div>

          <div style={{ display: 'flex', gap: '8px' }}>
            <button
              onClick={triggerInstall}
              style={{
                flex: 1,
                padding: '11px 16px',
                background: 'linear-gradient(135deg, #0284c7 0%, #3b82f6 50%, #8b5cf6 100%)',
                color: '#ffffff',
                border: 'none',
                borderRadius: '12px',
                fontWeight: 700,
                fontSize: '0.92rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px',
                boxShadow: '0 4px 14px rgba(59, 130, 246, 0.4)'
              }}
            >
              <span>📲</span> {isAndroid ? "Scarica / Installa App" : "Installa App Subito"}
            </button>
            <button
              onClick={handleDismissBanner}
              style={{
                padding: '11px 14px',
                background: 'rgba(255, 255, 255, 0.08)',
                color: '#cbd5e1',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                borderRadius: '12px',
                fontWeight: 600,
                fontSize: '0.84rem',
                cursor: 'pointer'
              }}
            >
              Non ora
            </button>
          </div>
        </div>
      )}

      {/* Modal Guida Installazione Dinamica (Android vs iPhone vs Browser) */}
      {showModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(15, 23, 42, 0.8)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'center',
          animation: 'pwaFadeIn 0.25s ease-out'
        }}>
          <div style={{
            width: '100%',
            maxWidth: '520px',
            backgroundColor: '#ffffff',
            borderTopLeftRadius: '24px',
            borderTopRightRadius: '24px',
            padding: '28px 24px 32px 24px',
            boxShadow: '0 -10px 35px rgba(0,0,0,0.3)',
            animation: 'pwaSlideUp 0.3s ease-out',
            position: 'relative',
            maxHeight: '90vh',
            overflowY: 'auto'
          }}>
            <button
              onClick={() => setShowModal(false)}
              style={{
                position: 'absolute',
                top: '18px',
                right: '18px',
                background: '#f1f5f9',
                border: 'none',
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                fontSize: '1rem',
                color: '#64748b',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              ✕
            </button>

            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
              <img 
                src="/icon-192.png" 
                alt="Ramid" 
                style={{ width: '60px', height: '60px', borderRadius: '14px', marginBottom: '10px', boxShadow: '0 4px 12px rgba(0,0,0,0.12)' }}
              />
              <h3 style={{ margin: 0, fontSize: '1.25rem', color: '#0f172a', fontWeight: 800 }}>
                {isIOS 
                  ? "Come installare l'App su iPhone" 
                  : isAndroid 
                    ? "Scarica o Installa l'App Android" 
                    : "Installa l'App Ramid"}
              </h3>
              <p style={{ margin: '6px 0 0', fontSize: '0.88rem', color: '#64748b' }}>
                {isAndroid 
                  ? "Scegli il metodo che preferisci per il tuo smartphone Android:"
                  : isIOS 
                    ? "Bastano 2 passaggi da Safari:" 
                    : "Installa l'applicazione sul tuo dispositivo per accedervi rapidamente:"}
              </p>
            </div>

            {/* SEZIONE GUIDA ANDROID */}
            {isAndroid && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '24px' }}>
                {isInAppBrowser && (
                  <div style={{
                    background: '#fef3c7',
                    border: '1px solid #fde68a',
                    padding: '12px 14px',
                    borderRadius: '14px',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '10px'
                  }}>
                    <span style={{ fontSize: '1.2rem' }}>⚠️</span>
                    <div style={{ fontSize: '0.86rem', color: '#92400e', lineHeight: '1.35' }}>
                      <strong>Sei dentro un'app (WhatsApp/Facebook/Instagram):</strong><br />
                      Tocca i <strong>3 puntini ⋮</strong> in alto a destra e seleziona <strong>"Apri nel browser"</strong> o <strong>"Apri in Chrome"</strong>.
                    </div>
                  </div>
                )}

                {/* Box Download File APK */}
                <div style={{
                  background: '#f0f9ff',
                  border: '2px solid #0284c7',
                  padding: '14px 16px',
                  borderRadius: '16px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ fontSize: '1.3rem' }}>🤖</span>
                      <strong style={{ color: '#0369a1', fontSize: '0.98rem' }}>Scarica File APK (.apk)</strong>
                    </div>
                    <span style={{ backgroundColor: '#0284c7', color: '#fff', fontSize: '0.65rem', fontWeight: 800, padding: '2px 6px', borderRadius: '6px' }}>
                      Stile Sisal
                    </span>
                  </div>
                  <p style={{ margin: 0, fontSize: '0.82rem', color: '#334155' }}>
                    Scarica il file APK e tocca <strong>"Installa"</strong> quando completato:
                  </p>
                  <a
                    href="https://github.com/giorgiogravagno92-hub/RAMID/releases/download/latest/ramid.apk"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      padding: '12px',
                      background: 'linear-gradient(135deg, #0284c7 0%, #3b82f6 100%)',
                      color: '#ffffff',
                      borderRadius: '12px',
                      fontWeight: 700,
                      fontSize: '0.92rem',
                      textDecoration: 'none',
                      boxShadow: '0 4px 12px rgba(2, 132, 199, 0.3)'
                    }}
                  >
                    <span>📥</span> Scarica ramid.apk sul telefono
                  </a>
                </div>

                {/* Alternativa: Installazione Istantanea da Chrome */}
                <div style={{
                  background: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  padding: '14px 16px',
                  borderRadius: '16px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px'
                }}>
                  <strong style={{ color: '#1e293b', fontSize: '0.92rem' }}>📲 Oppure installa senza scaricare file:</strong>
                  <div style={{ fontSize: '0.84rem', color: '#475569', lineHeight: '1.4' }}>
                    Tocca i <strong>3 puntini ⋮</strong> in alto a destra su Chrome e seleziona <strong>"Installa app"</strong> (o <em>"Aggiungi a schermata Home"</em>).
                  </div>
                </div>
              </div>
            )}

            {/* SEZIONE GUIDA IPHONE / IOS */}
            {isIOS && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '24px' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  background: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  padding: '14px 16px',
                  borderRadius: '16px'
                }}>
                  <div style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '10px',
                    background: '#e0f2fe',
                    color: '#0284c7',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.2rem',
                    fontWeight: 800,
                    flexShrink: 0
                  }}>
                    1
                  </div>
                  <div style={{ fontSize: '0.92rem', color: '#1e293b', lineHeight: '1.4' }}>
                    Tocca il pulsante <strong style={{ color: '#0284c7' }}>Condividi 📤</strong> in basso nella barra del browser Safari.
                  </div>
                </div>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  background: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  padding: '14px 16px',
                  borderRadius: '16px'
                }}>
                  <div style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '10px',
                    background: '#ede9fe',
                    color: '#8b5cf6',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.2rem',
                    fontWeight: 800,
                    flexShrink: 0
                  }}>
                    2
                  </div>
                  <div style={{ fontSize: '0.92rem', color: '#1e293b', lineHeight: '1.4' }}>
                    Scorri e seleziona <strong style={{ color: '#8b5cf6' }}>"Aggiungi alla schermata Home" ➕</strong>.
                  </div>
                </div>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  background: '#f0fdf4',
                  border: '1px solid #bbf7d0',
                  padding: '14px 16px',
                  borderRadius: '16px'
                }}>
                  <div style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '10px',
                    background: '#dcfce7',
                    color: '#16a34a',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.2rem',
                    fontWeight: 800,
                    flexShrink: 0
                  }}>
                    3
                  </div>
                  <div style={{ fontSize: '0.92rem', color: '#15803d', lineHeight: '1.4' }}>
                    Premi <strong>"Aggiungi"</strong> in alto a destra: troverai l'icona Ramid subito sulla Home del tuo iPhone!
                  </div>
                </div>
              </div>
            )}

            {/* SEZIONE DESKTOP / ALTRO */}
            {!isIOS && !isAndroid && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '24px' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  background: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  padding: '14px 16px',
                  borderRadius: '16px'
                }}>
                  <div style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '10px',
                    background: '#e0f2fe',
                    color: '#0284c7',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.2rem',
                    fontWeight: 800,
                    flexShrink: 0
                  }}>
                    1
                  </div>
                  <div style={{ fontSize: '0.92rem', color: '#1e293b', lineHeight: '1.4' }}>
                    Guarda in alto nella barra degli indirizzi di Chrome o Edge e clicca sull'icona <strong>Installa app ⊕</strong>.
                  </div>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  background: '#f0fdf4',
                  border: '1px solid #bbf7d0',
                  padding: '14px 16px',
                  borderRadius: '16px'
                }}>
                  <div style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '10px',
                    background: '#dcfce7',
                    color: '#16a34a',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.2rem',
                    fontWeight: 800,
                    flexShrink: 0
                  }}>
                    2
                  </div>
                  <div style={{ fontSize: '0.92rem', color: '#15803d', lineHeight: '1.4' }}>
                    Conferma cliccando su <strong>"Installa"</strong> per usare Ramid come applicazione desktop.
                  </div>
                </div>
              </div>
            )}

            <button
              onClick={() => setShowModal(false)}
              style={{
                width: '100%',
                padding: '14px',
                background: '#f1f5f9',
                color: '#475569',
                border: 'none',
                borderRadius: '14px',
                fontWeight: 700,
                fontSize: '0.95rem',
                cursor: 'pointer'
              }}
            >
              Chiudi
            </button>
          </div>
        </div>
      )}

      {/* Global CSS animations */}
      <style>{`
        @keyframes pwaSlideUp {
          from {
            opacity: 0;
            transform: translate(-50%, 30px);
          }
          to {
            opacity: 1;
            transform: translate(-50%, 0);
          }
        }
        @keyframes pwaSlideDown {
          from {
            opacity: 0;
            transform: translate(-50%, -20px);
          }
          to {
            opacity: 1;
            transform: translate(-50%, 0);
          }
        }
        @keyframes pwaFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </>
  );
};
