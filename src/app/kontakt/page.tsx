"use client";

import ContactSection from "@/components/ContactSection";

export default function ContactPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="section" style={{ 
        background: 'linear-gradient(135deg, #f7fcfb 0%, #e8f5f3 100%)', 
        padding: '8rem 0 4rem 0',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <span className="badge">Komunikacja</span>
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', marginBottom: '1rem', lineHeight: '1.1' }}>
            Kontakt
          </h1>
          <p style={{ fontSize: '1.25rem', color: '#666', maxWidth: '600px' }}>
            Jesteśmy tutaj, aby odpowiedzieć na Twoje pytania i pomóc Ci umówić wizytę w naszym gabinecie.
          </p>
        </div>
        <div className="blob-shape" style={{ width: '40%', height: '100%', top: '-20%', right: '-10%', opacity: 0.1, background: 'var(--primary)' }} />
      </section>

      <ContactSection />
    </main>
  );
}
