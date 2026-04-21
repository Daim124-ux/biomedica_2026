"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ContactSection() {
  const [mapActive, setMapActive] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Wystąpił błąd podczas wysyłania wiadomości.');
      }

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success status after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    } catch (err: any) {
      console.error(err);
      setStatus('error');
      setErrorMsg(err.message);
    }
  };

  return (
    <section className="section bg-white" style={{ paddingBottom: '0' }}>
      <div className="container">
        <div className="grid grid-2 mobile-stack" style={{ gap: '4rem', alignItems: 'stretch', marginBottom: '5rem' }}>
          {/* Contact Details */}
          <div style={{ marginBottom: '2rem', width: '100%' }}>
            <span className="badge">Komunikacja</span>
            <h2 style={{ marginBottom: '2rem', marginTop: '1rem' }}>Bądźmy w kontakcie</h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'start' }}>
                <div style={{ width: '45px', height: '45px', backgroundColor: '#f0fcfb', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', flexShrink: 0 }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </div>
                <div>
                  <h4 style={{ margin: '0 0 0.3rem', fontSize: '1rem', color: 'var(--secondary)' }}>Zadzwoń do nas</h4>
                  <p style={{ margin: 0, fontSize: '1.1rem', fontWeight: 'bold', color: 'var(--primary)' }}>
                    <a href="tel:533138340" style={{ color: 'inherit', textDecoration: 'none' }}>+48 533 138 340</a>
                  </p>
                </div>
              </div>



              <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'start' }}>
                <div style={{ width: '45px', height: '45px', backgroundColor: '#f0fcfb', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', flexShrink: 0 }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </div>
                <div>
                  <h4 style={{ margin: '0 0 0.3rem', fontSize: '1rem', color: 'var(--secondary)' }}>Odwiedź nas</h4>
                  <p style={{ margin: 0, fontSize: '1rem', color: '#666', lineHeight: '1.6' }}>
                    ul. Zdrojowa 39<br />
                    33-300 Nowy Sącz
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card" style={{ padding: '2.5rem 1.5rem', borderRadius: '30px', boxShadow: '0 20px 50px rgba(0,0,0,0.05)', border: 'none', width: '100%' }}>
            <h3 style={{ marginBottom: '1.5rem' }}>Wyślij wiadomość</h3>
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '1.2rem' }}>
                <label htmlFor="name" style={{ display: 'block', marginBottom: '0.4rem', fontSize: '0.85rem', fontWeight: 500, color: '#444' }}>Imię i nazwisko</label>
                <input 
                  id="name"
                  type="text" 
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Jan Kowalski" 
                  style={{ width: '100%', padding: '0.8rem 1rem', borderRadius: '12px', border: '1px solid #eee', outline: 'none', fontSize: '0.9rem' }} 
                />
              </div>
              <div style={{ marginBottom: '1.2rem' }}>
                <label htmlFor="email" style={{ display: 'block', marginBottom: '0.4rem', fontSize: '0.85rem', fontWeight: 500, color: '#444' }}>Adres e-mail</label>
                <input 
                  id="email"
                  type="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="email@example.com" 
                  style={{ width: '100%', padding: '0.8rem 1rem', borderRadius: '12px', border: '1px solid #eee', outline: 'none', fontSize: '0.9rem' }} 
                />
              </div>
              <div style={{ marginBottom: '1.5rem' }}>
                <label htmlFor="message" style={{ display: 'block', marginBottom: '0.4rem', fontSize: '0.85rem', fontWeight: 500, color: '#444' }}>Wiadomość</label>
                <textarea 
                  id="message"
                  rows={4} 
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="W czym możemy pomóc?" 
                  style={{ width: '100%', padding: '0.8rem 1rem', borderRadius: '12px', border: '1px solid #eee', outline: 'none', resize: 'none', fontSize: '0.9rem' }}
                ></textarea>
              </div>
              
              {status === 'success' && (
                <div style={{ marginBottom: '1rem', padding: '1rem', backgroundColor: '#e6f7f5', color: '#00a896', borderRadius: '12px', fontSize: '0.9rem', textAlign: 'center' }}>
                  Wiadomość została wysłana pomyślnie! Skontaktujemy się z Tobą wkrótce.
                </div>
              )}
              
              {status === 'error' && (
                <div style={{ marginBottom: '1rem', padding: '1rem', backgroundColor: '#fff5f5', color: '#e53e3e', borderRadius: '12px', fontSize: '0.9rem', textAlign: 'center' }}>
                  {errorMsg}
                </div>
              )}

              <button 
                type="submit" 
                className="button" 
                disabled={status === 'loading'}
                style={{ 
                  width: '100%', 
                  padding: '1rem', 
                  fontSize: '1rem', 
                  borderRadius: '50px',
                  opacity: status === 'loading' ? 0.7 : 1,
                  cursor: status === 'loading' ? 'not-allowed' : 'pointer'
                }}
              >
                {status === 'loading' ? 'Wysyłanie...' : 'Wyślij wiadomość'}
              </button>
            </form>
          </div>
        </div>

        {/* Styled Map Container */}
        <div 
          onClick={() => setMapActive(true)}
          className="map-container"
          style={{ cursor: mapActive ? 'default' : 'pointer' }}
        >
          {!mapActive && (
            <div style={{ 
              position: 'absolute', 
              inset: 0, 
              backgroundColor: 'rgba(255,255,255,0.1)', 
              backdropFilter: 'blur(2px)',
              zIndex: 10,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              padding: '2rem'
            }}>
              <div style={{ 
                backgroundColor: 'white', 
                padding: '1rem 2rem', 
                borderRadius: '50px', 
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                fontWeight: 'bold',
                color: 'var(--primary)'
              }}>
                Kliknij, aby aktywować mapę
              </div>
            </div>
          )}

          {/* Navigation Button */}
          <a 
            href="https://www.google.com/maps/dir/?api=1&destination=Zdrojowa+39+33-300+Nowy+Sącz" 
            target="_blank" 
            rel="noopener noreferrer"
            className="button"
            style={{ 
              position: 'absolute', 
              bottom: '20px', 
              right: '20px', 
              zIndex: 20,
              padding: '0.8rem 1.5rem',
              fontSize: '0.9rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              boxShadow: '0 10px 20px rgba(0, 176, 159, 0.4)'
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="3 11 22 2 13 21 11 13 3 11"></polygon></svg>
            Nawiguj
          </a>

          <div style={{ 
            height: 'calc(100% + 150px)', 
            width: 'calc(100% + 150px)', 
            position: 'absolute',
            top: '-50px',
            left: '-50px',
            pointerEvents: mapActive ? 'auto' : 'none'
          }}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2581.442!2d20.697!3d49.619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473dfac!2sZdrojowa%2039%2C%2033-300%20Nowy%20S%C4%85cz!5e0!3m2!1spl!2spl!4v1710839210000!5m2!1spl!2spl" 
              width="100%" 
              height="100%" 
              style={{ 
                border: 0, 
                filter: 'grayscale(1) sepia(100%) hue-rotate(120deg) saturate(1.8) contrast(1.1) brightness(1.1)' 
              }} 
              allowFullScreen={true} 
              loading="lazy" 
            ></iframe>
          </div>
        </div>
      </div>
      <div style={{ height: '150px', backgroundColor: '#f8fbfc' }} className="hide-mobile" />
    </section>
  );
}
