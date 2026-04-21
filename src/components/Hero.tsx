"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const slides = [
  {
    title: "Nowoczesne Centrum Biorezonansu",
    subtitle: "Zdrowie zaczyna się tutaj",
    description: "Odkryj potęgę biorezonansu w służbie Twojego zdrowia. Oferujemy kompleksową diagnostykę i skuteczne terapie wspomagające walkę z nałogami, alergiami oraz koinfekcjami. Postaw na sprawdzone i nowoczesne rozwiązania.",
    image: "/images/bicom_modern.png",
    cta: "Poznaj naszą ofertę"
  },
  {
    title: "Terapia antynikotynowa",
    subtitle: "Zadbaj o siebie Rzuć palenie!",
    description: "Dzięki terapii antynikotynowej, osoby uzależnione od nikotyny mogą odzyskać kontrolę nad swoim życiem i cieszyć się zdrowszym, bardziej aktywnym stylem życia. Rzuć palenie, aby zrobić krok w kierunku lepszego jutra.",
    image: "/images/palenie_cond.png",
    cta: "Zapisz się na terapię"
  },
  {
    title: "Bezbolesne testy alergiczne i odczulanie",
    description: "Badania alergiczne oraz odczulanie mogą być kluczowe dla osób cierpiących na alergie, zapewniając im komfort i poprawę jakości życia. W naszym gabinecie przeprowadzamy zarówno bezbolesne testy alergiczne, jak i terapie odczulania.",
    image: "/images/alergie_cond.png",
    cta: "Zapisz się na terapię"
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero-section">
      {/* Background Blobs */}
      <div className="blob-shape blob-1" />
      <div className="blob-shape blob-2" />
      <div className="blob-shape blob-3" />

      {slides.map((slide, index) => (
        <div 
          key={index} 
          style={{ 
            position: 'absolute', 
            inset: 0, 
            opacity: index === current ? 1 : 0, 
            transition: 'opacity 1s ease-in-out',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            visibility: index === current ? 'visible' : 'hidden',
            zIndex: index === current ? 1 : 0,
            height: '100%',
            width: '100%'
          }}
        >
          <div className="container">
            <div className="grid grid-2 hero-grid" style={{ alignItems: 'center' }}>
              {/* Text Content */}
              <div style={{ 
                transform: index === current ? 'translateX(0)' : 'translateX(-30px)', 
                transition: 'transform 0.8s ease-out, opacity 0.8s ease-out',
                opacity: index === current ? 1 : 0,
                zIndex: 2,
                position: 'relative'
              }} className="hero-text-content">
                {slide.subtitle && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1.5rem' }}>
                    <div style={{ width: '30px', height: '2px', backgroundColor: 'var(--primary)' }} />
                    <span className="badge" style={{ margin: 0 }}>{slide.subtitle}</span>
                  </div>
                )}
                <h1 style={{ lineHeight: '1.1', marginBottom: '2rem', color: 'var(--secondary)', fontWeight: 800 }}>
                  {slide.title}
                </h1>
                <p style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)', marginBottom: '3rem', color: '#666', lineHeight: '1.8', maxWidth: '600px' }}>
                  {slide.description}
                </p>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <Link href="/kontakt" className="button" style={{ borderRadius: '50px' }}>
                    {slide.cta}
                  </Link>
                  <Link href="/o-nas" className="button button-outline hide-mobile" style={{ borderRadius: '50px' }}>
                    O nas
                  </Link>
                </div>
              </div>

              {/* Masked Image Content */}
              <div style={{ 
                transform: index === current ? 'translateX(0)' : 'translateX(30px)', 
                transition: 'transform 0.8s ease-out, opacity 0.8s ease-out',
                opacity: index === current ? 1 : 0,
                zIndex: 1
              }} className="hero-image-content">
                <div className="image-mask" style={{ height: 'clamp(300px, 50vh, 500px)' }}>
                  <Image 
                    src={slide.image} 
                    alt={slide.title} 
                    fill 
                    style={{ objectFit: 'cover' }} 
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Slider Controls */}
      <div style={{ position: 'absolute', bottom: '3rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '1rem', zIndex: 10 }}>
        {slides.map((_, index) => (
          <button 
            key={index}
            onClick={() => setCurrent(index)}
            style={{ 
              width: index === current ? '40px' : '10px', 
              height: '10px', 
              borderRadius: '10px', 
              border: 'none', 
              backgroundColor: index === current ? 'var(--primary)' : 'rgba(0,0,0,0.1)',
              cursor: 'pointer',
              transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
            }}
          />
        ))}
      </div>
    </section>
  );
}
