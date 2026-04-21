"use client";

import Image from "next/image";
import Link from "next/link";

const detailedServices = [
  { 
    title: "Usuwanie alergii", 
    slug: "usuwanie-alergii", 
    image: "/images/alergie_cond.png",
    description: "Skuteczna metoda eliminacji alergii pokarmowych, wziewnych oraz kontaktowych bez igieł i bólu.",
    details: [
      "Testy bez kłucia i stresu",
      "Szybkie efekty odczulania",
      "Wsparcie przy katarze siennym i nietolerancjach"
    ]
  },
  { 
    title: "Terapie antynikotynowe", 
    slug: "terapia-antynikotynowa", 
    image: "/images/palenie_cond.png",
    description: "Skuteczne rzucanie palenia w 60 minut. Eliminacja fizycznego głodu nikotynowego już po jednym zabiegu.",
    details: [
      "Skuteczność rzędu 80-90% po pierwszej sesji",
      "Naturalny proces bez nikotyny",
      "Dodatkowy program detoksykacji"
    ]
  }
];

export default function OfertaPage() {
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
          <span className="badge">Specjalizacje</span>
          <h1 style={{ marginBottom: '1rem', lineHeight: '1.1' }}>
            Nasza Oferta
          </h1>
          <p style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', color: '#666', maxWidth: '700px' }}>
            Poznaj zakres naszych usług i dowiedz się, jak nowoczesna technologia Bicom Optima może pomóc Ci wrócić do pełni zdrowia.
          </p>
        </div>
        <div className="blob-shape" style={{ width: '40%', height: '100%', top: '-20%', right: '-10%', opacity: 0.1, background: 'var(--primary)' }} />
      </section>

      {/* Services List */}
      <section className="section bg-white">
        <div className="container" style={{ padding: '0 20px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6rem' }}>
            {detailedServices.map((service, i) => (
              <div key={i} className="mobile-stack" style={{ 
                display: 'flex', 
                flexDirection: i % 2 === 0 ? 'row' : 'row-reverse',
                gap: '4rem',
                alignItems: 'center',
              }}>
                <div style={{ flex: '1 1 450px', position: 'relative', width: '100%', minHeight: '300px' }}>
                  <div className="image-mask" style={{ height: 'clamp(300px, 45vh, 450px)', position: 'relative', zIndex: 2 }}>
                    <Image 
                      src={service.image} 
                      alt={service.title} 
                      fill 
                      style={{ objectFit: 'cover' }} 
                    />
                  </div>
                  <div className="blob-shape" style={{ width: '120%', height: '120%', top: '-10%', left: '-10%', opacity: 0.1, zIndex: 1 }} />
                </div>
                <div style={{ flex: '1 1 400px' }}>
                  <span style={{ color: 'var(--primary)', fontWeight: 'bold', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '2px' }}>Kategoria Zdrowie</span>
                  <h2 style={{ margin: '1rem 0 1.5rem', color: 'var(--secondary)' }}>{service.title}</h2>
                  <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555', marginBottom: '2rem' }}>
                    {service.description}
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2.5rem' }}>
                    {service.details.map((detail, j) => (
                      <li key={j} style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', alignItems: 'start' }}>
                        <div style={{ width: '20px', height: '20px', backgroundColor: '#f0fcfb', borderRadius: '50%', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '3px' }}>
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        </div>
                        <span style={{ fontSize: '1rem', color: '#444' }}>{detail}</span>
                      </li>
                    ))}
                  </ul>
                  <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                    <Link href="/kontakt" className="button" style={{ borderRadius: '50px' }}>Umów wizytę</Link>
                    <Link href={`/oferta/${service.slug}`} className="button button-outline" style={{ borderRadius: '50px' }}>Więcej o terapii</Link>
                    <Link href="/cennik" className="button button-outline" style={{ borderRadius: '50px', border: 'none', backgroundColor: 'transparent', color: 'var(--primary)', textDecoration: 'underline' }}>Cennik</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="section" style={{ backgroundColor: '#f8fbfc', padding: '6rem 0' }}>
        <div className="container text-center">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ marginBottom: '1.5rem' }}>Nie znalazłeś tego, czego szukasz?</h2>
            <p style={{ fontSize: '1.1rem', color: '#666', marginBottom: '2.5rem', lineHeight: '1.7' }}>
              Biorezonans to metoda niezwykle elastyczna. Jeżeli cierpisz na rzadkie schorzenie lub chroniczne dolegliwości, a medycyna pozostaje bezradna, skontaktuj się z nami. Na podstawie wywiadu przygotujemy indywidualny plan terapii obciążeń organizmu, które w większości przypadków są przyczyną problemów zdrowotnych.
            </p>
            <Link href="/kontakt" className="button" style={{ padding: '1rem 3rem', fontSize: '1.1rem' }}>Zapytaj o indywidualną terapię</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
