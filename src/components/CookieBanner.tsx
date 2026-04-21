"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    essential: true,
    analytical: true,
    marketing: false
  });

  useEffect(() => {
    const consent = localStorage.getItem("cookie-preferences");
    if (consent === null) {
      setIsVisible(true);
    } else {
      try {
        setPreferences(JSON.parse(consent));
      } catch (e) {
        setIsVisible(true);
      }
    }
  }, []);

  const handleSave = (prefs: typeof preferences) => {
    localStorage.setItem("cookie-preferences", JSON.stringify(prefs));
    setPreferences(prefs);
    setIsVisible(false);
    setShowSettings(false);
  };

  const handleAcceptAll = () => {
    const allOn = { essential: true, analytical: true, marketing: true };
    handleSave(allOn);
  };

  if (!isVisible) return null;

  const toggleStyle = (active: boolean) => ({
    width: '44px',
    height: '24px',
    backgroundColor: active ? 'var(--primary)' : '#e0e0e0',
    borderRadius: '100px',
    position: 'relative' as const,
    cursor: 'pointer',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    flexShrink: 0
  });

  const knobStyle = (active: boolean) => ({
    width: '18px',
    height: '18px',
    backgroundColor: 'white',
    borderRadius: '100px',
    position: 'absolute' as const,
    top: '3px',
    left: active ? '23px' : '3px',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  });

  const sectionStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1.2rem',
    backgroundColor: 'rgba(0, 168, 150, 0.03)',
    borderRadius: '20px',
    border: '1px solid rgba(0, 168, 150, 0.05)',
    transition: 'all 0.2s ease',
    cursor: 'pointer'
  };

  return (
    <div style={{
      position: 'fixed',
      bottom: '30px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: 'calc(100% - 40px)',
      maxWidth: '750px',
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      backdropFilter: 'blur(20px)',
      padding: '2rem 2.5rem',
      borderRadius: '35px',
      boxShadow: '0 25px 70px rgba(0, 56, 101, 0.15)',
      zIndex: 9999,
      border: '1px solid rgba(255, 255, 255, 0.3)',
      fontFamily: 'var(--font-karla), sans-serif',
      transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      maxHeight: '90vh',
      overflowY: 'auto'
    }}>
      {!showSettings ? (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '3rem', flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: '300px' }}>
            <h4 style={{ marginBottom: '0.8rem', color: 'var(--secondary)', fontSize: '1.2rem', fontWeight: 'bold' }}>
              Dbamy o Twoją prywatność 🍪
            </h4>
            <p style={{ fontSize: '0.9rem', color: '#555', lineHeight: '1.7', margin: 0 }}>
              Nasza strona korzysta z ciasteczek, aby ułatwić Ci korzystanie z serwisu. Możesz zaakceptować wszystkie lub dostosować ich działanie w ustawieniach. Więcej informacji znajdziesz w <Link href="/polityka-prywatnosci" style={{ color: 'var(--primary)', fontWeight: 'bold', textDecoration: 'none', borderBottom: '1px solid currentColor' }}>Polityce Prywatności</Link>.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
            <button 
              onClick={() => setShowSettings(true)}
              style={{ 
                background: 'none',
                border: 'none',
                color: '#888',
                fontSize: '0.9rem',
                cursor: 'pointer',
                fontWeight: '600',
                padding: '0.5rem 1rem'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary)'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#888'}
            >
              Ustawienia
            </button>
            <button 
              onClick={() => handleSave({ ...preferences, analytical: false, marketing: false })}
              className="button-outline"
              style={{ 
                padding: '0.8rem 1.8rem', 
                fontSize: '0.9rem', 
                borderRadius: '100px', 
                borderColor: '#e0e0e0', 
                color: '#666',
                transition: 'all 0.3s ease'
              }}
            >
              Tylko niezbędne
            </button>
            <button 
              onClick={handleAcceptAll}
              className="button"
              style={{ 
                padding: '1rem 2.2rem', 
                fontSize: '0.9rem', 
                borderRadius: '100px',
                fontWeight: '700',
                boxShadow: '0 8px 15px rgba(0, 168, 150, 0.2)'
              }}
            >
              Akceptuję wszystko
            </button>
          </div>
        </div>
      ) : (
        <div style={{ animation: 'fadeIn 0.4s ease' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
            <h4 style={{ margin: 0, color: 'var(--secondary)', fontSize: '1.3rem' }}>Preferencje plików Cookie</h4>
            <button 
              onClick={() => setShowSettings(false)}
              style={{ background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer', color: '#999' }}
            >
              &times;
            </button>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem' }}>
            {/* Essential */}
            <div style={{ ...sectionStyle, cursor: 'not-allowed', backgroundColor: '#fcfcfc' }}>
              <div style={{ flex: 1, paddingRight: '2rem' }}>
                <div style={{ fontWeight: 'bold', fontSize: '1rem', marginBottom: '0.2rem', color: 'var(--secondary)' }}>Niezbędne</div>
                <div style={{ fontSize: '0.8rem', color: '#888', lineHeight: '1.5' }}>Gwarantują poprawne działanie podstawowych funkcji serwisu (np. nawigacja, sesja). Nie mogą być wyłączone.</div>
              </div>
              <div style={toggleStyle(true)}>
                <div style={knobStyle(true)}></div>
              </div>
            </div>
            
            {/* Analytical */}
            <div 
              style={sectionStyle}
              onClick={() => setPreferences({ ...preferences, analytical: !preferences.analytical })}
            >
              <div style={{ flex: 1, paddingRight: '2rem' }}>
                <div style={{ fontWeight: 'bold', fontSize: '1rem', marginBottom: '0.2rem', color: 'var(--secondary)' }}>Analityczne</div>
                <div style={{ fontSize: '0.8rem', color: '#888', lineHeight: '1.5' }}>Anonimowe dane o ruchu na stronie, które pomagają nam optymalizować ofertę Biomedica.</div>
              </div>
              <div style={toggleStyle(preferences.analytical)}>
                <div style={knobStyle(preferences.analytical)}></div>
              </div>
            </div>

            {/* Marketing */}
            <div 
              style={sectionStyle}
              onClick={() => setPreferences({ ...preferences, marketing: !preferences.marketing })}
            >
              <div style={{ flex: 1, paddingRight: '2rem' }}>
                <div style={{ fontWeight: 'bold', fontSize: '1rem', marginBottom: '0.2rem', color: 'var(--secondary)' }}>Marketingowe</div>
                <div style={{ fontSize: '0.8rem', color: '#888', lineHeight: '1.5' }}>Umożliwiają wyświetlanie treści i ofert dopasowanych do Twoich zainteresowań.</div>
              </div>
              <div style={toggleStyle(preferences.marketing)}>
                <div style={knobStyle(preferences.marketing)}></div>
              </div>
            </div>
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1.2rem', alignItems: 'center' }}>
            <button 
              onClick={() => setShowSettings(false)}
              className="button-outline"
              style={{ border: 'none', color: '#888', fontWeight: 'bold', padding: '0.5rem 1rem' }}
            >
              Wróć
            </button>
            <button 
              onClick={() => handleSave(preferences)}
              className="button"
              style={{ padding: '0.9rem 2.5rem', borderRadius: '100px', fontWeight: '700' }}
            >
              Zapisz ustawienia
            </button>
          </div>
        </div>
      )}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 768px) {
          .mobile-stack {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </div>
  );
}
