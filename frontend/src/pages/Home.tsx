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
      </div>
    </div>
  );
};
