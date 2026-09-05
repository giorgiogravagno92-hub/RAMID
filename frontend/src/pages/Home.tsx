import React from 'react';

interface HomeProps {
  onNavigate: (page: string, role?: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="container" style={{ padding: '15px 24px 60px 24px', textAlign: 'center' }}>
      {/* Hero Header */}
      <div style={{ maxWidth: '850px', margin: '0 auto 60px auto' }}>
        <div style={{ fontSize: 'clamp(2.4rem, 9vw, 3.5rem)', fontWeight: 800, lineHeight: 1.2, marginBottom: '24px', textAlign: 'center' }}>
          Il lavoro che cerca te, all’istante
        </div>
        <div style={{ fontSize: '1.35rem', marginBottom: '38px', lineHeight: '1.6', textAlign: 'center' }}>
          <div style={{ marginBottom: '18px' }}>
            <strong style={{ color: 'var(--text-primary)', fontWeight: 800 }}>Il lavoro non si cerca.</strong>
            <strong style={{ color: 'var(--accent-red)', fontWeight: 800 }}> Si trova.</strong>
          </div>
          <div style={{ marginBottom: '18px', color: 'var(--text-primary)', fontStyle: 'italic' }}>
            Su Ramid crei il tuo profilo, imposti le tue disponibilità e lasci che siano le aziende a trovarti.
          </div>
          <div>
            <span style={{ textDecoration: 'underline', color: 'var(--text-primary)', fontWeight: 600 }}>
              Scopri il match perfetto per te.
            </span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
            <button 
              className="btn btn-primary" 
              style={{ padding: '18px 44px', fontSize: '1.25rem' }}
              onClick={() => onNavigate('login', 'WORKER')}
            >
              👨‍💼 Cerco Lavoro (Candidati)
            </button>
            <span style={{ fontSize: '0.92rem', color: 'var(--text-secondary)' }}>Accedi o Registrati</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
            <button 
              className="btn btn-success" 
              style={{ padding: '18px 44px', fontSize: '1.25rem' }}
              onClick={() => onNavigate('login', 'COMPANY')}
            >
              🏢 Cerco Personale
            </button>
            <span style={{ fontSize: '0.92rem', color: 'var(--text-secondary)' }}>Accedi o Registrati</span>
          </div>
        </div>

        {/* PWA App Download Banner in Hero */}
        <div style={{ marginTop: '48px', display: 'flex', justifyContent: 'center' }}>
          <div 
            onClick={() => window.dispatchEvent(new CustomEvent('trigger-pwa-install'))}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              padding: '12px 20px',
              background: 'linear-gradient(135deg, rgba(2, 132, 199, 0.08) 0%, rgba(139, 92, 246, 0.08) 100%)',
              border: '1px solid rgba(59, 130, 246, 0.25)',
              borderRadius: '50px',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              boxShadow: '0 4px 15px rgba(0,0,0,0.03)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.borderColor = '#3b82f6';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.25)';
            }}
          >
            <span style={{ fontSize: '1.4rem' }}>📲</span>
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                Vuoi scaricare l'App sul tuo cellulare?
              </div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
                Tocca qui per installare Ramid direttamente sulla schermata Home
              </div>
            </div>
            <span style={{ 
              backgroundColor: '#0284c7', 
              color: '#ffffff', 
              fontSize: '0.75rem', 
              fontWeight: 700, 
              padding: '4px 10px', 
              borderRadius: '20px',
              marginLeft: '6px'
            }}>
              Installa
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
