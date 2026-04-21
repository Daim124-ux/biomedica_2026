'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (res.ok) {
        router.push('/');
        router.refresh();
      } else {
        const data = await res.json();
        setError(data.error || 'Wystąpił błąd podczas logowania');
      }
    } catch (err) {
      setError('Wystąpił błąd podczas komunikacji z serwerem');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      height: '100vh',
      width: '100vw',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'var(--background)',
      fontFamily: 'var(--font-karla), sans-serif',
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex: 9999,
      overflow: 'hidden'
    }}>
      {/* Background Blobs for some flair matching the site */}
      <div className="blob-shape blob-1" style={{ opacity: 0.1 }}></div>
      <div className="blob-shape blob-2" style={{ opacity: 0.1 }}></div>

      <div style={{
        backgroundColor: 'var(--white)',
        padding: '3rem 2.5rem',
        borderRadius: '24px',
        boxShadow: '0 20px 50px rgba(0,0,0,0.08)',
        width: '100%',
        maxWidth: '450px',
        border: '1px solid #f0f0f0',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div style={{ position: 'relative', height: '60px', width: '200px', margin: '0 auto 1.5rem' }}>
            <Image 
              src="/images/Biomedica_logo.webp" 
              alt="Biomedica" 
              fill
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>
          <h1 style={{ 
            color: 'var(--secondary)', 
            fontSize: '1.75rem', 
            fontWeight: '700', 
            marginBottom: '0.75rem',
            fontFamily: 'var(--font-montserrat), sans-serif'
          }}>
            Panel Dostępu
          </h1>
          <p style={{ color: 'var(--foreground)', fontSize: '0.95rem' }}>
            Strona jest w trakcie przygotowania. Zaloguj się, aby uzyskać dostęp do wersji rozwojowej.
          </p>
        </div>

        {error && (
          <div style={{
            backgroundColor: '#fff1f2',
            color: '#e11d48',
            padding: '1rem',
            borderRadius: '12px',
            marginBottom: '1.5rem',
            fontSize: '0.875rem',
            textAlign: 'center',
            border: '1px solid #ffe4e6'
          }}>
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <div>
            <label htmlFor="email" style={{ display: 'block', color: 'var(--secondary)', fontSize: '0.875rem', fontWeight: '600', marginBottom: '0.5rem' }}>
              Adres Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '0.875rem 1.25rem',
                borderRadius: '12px',
                backgroundColor: '#f8fafc',
                border: '1px solid #e2e8f0',
                color: 'var(--secondary)',
                outline: 'none',
                transition: 'all 0.2s',
                boxSizing: 'border-box',
                fontSize: '1rem'
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = 'var(--primary)';
                e.currentTarget.style.backgroundColor = 'white';
                e.currentTarget.style.boxShadow = '0 0 0 4px rgba(0, 176, 159, 0.1)';
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = '#e2e8f0';
                e.currentTarget.style.backgroundColor = '#f8fafc';
                e.currentTarget.style.boxShadow = 'none';
              }}
              placeholder="Twój adres email"
            />
          </div>

          <div>
            <label htmlFor="password" style={{ display: 'block', color: 'var(--secondary)', fontSize: '0.875rem', fontWeight: '600', marginBottom: '0.5rem' }}>
              Hasło
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '0.875rem 1.25rem',
                borderRadius: '12px',
                backgroundColor: '#f8fafc',
                border: '1px solid #e2e8f0',
                color: 'var(--secondary)',
                outline: 'none',
                transition: 'all 0.2s',
                boxSizing: 'border-box',
                fontSize: '1rem'
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = 'var(--primary)';
                e.currentTarget.style.backgroundColor = 'white';
                e.currentTarget.style.boxShadow = '0 0 0 4px rgba(0, 176, 159, 0.1)';
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = '#e2e8f0';
                e.currentTarget.style.backgroundColor = '#f8fafc';
                e.currentTarget.style.boxShadow = 'none';
              }}
              placeholder="Wprowadź hasło"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="button"
            style={{
              width: '100%',
              marginTop: '1rem',
              padding: '1rem',
              fontSize: '1rem'
            }}
          >
            {loading ? 'Logowanie...' : 'Zaloguj się'}
          </button>
        </form>
        
        <div style={{ textAlign: 'center', marginTop: '2rem', fontSize: '0.8rem', color: 'var(--foreground)' }}>
          © {new Date().getFullYear()} Biomedica Nowy Sącz. Wszelkie prawa zastrzeżone.
        </div>
      </div>
    </div>
  );
}
