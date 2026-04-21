"use client";

import Link from "next/link";
import { useRef } from "react";

const categories = [
  {
    title: "Testy alergiczne",
    description: "Oferujemy kompleksowe testy alergiczne, które pomagają identyfikować alergeny i ustalać odpowiednie strategie terapeutyczne.",
    link: "/cennik",
    icon: (
      <svg width="65" height="65" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 75H80" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
        <path d="M30 30V75M30 30H45V75M45 45H30" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        <path d="M55 30V75M55 30H70V75M70 45H55" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        <rect x="25" y="20" width="10" height="55" rx="2" stroke="currentColor" strokeWidth="3"/>
        <rect x="45" y="20" width="10" height="55" rx="2" stroke="currentColor" strokeWidth="3"/>
        <rect x="65" y="20" width="10" height="55" rx="2" stroke="currentColor" strokeWidth="3"/>
        <circle cx="30" cy="55" r="1.5" fill="currentColor"/>
        <circle cx="50" cy="62" r="1.5" fill="currentColor"/>
        <circle cx="70" cy="58" r="1.5" fill="currentColor"/>
      </svg>
    ),
    btnText: "Przejdź do cennika"
  },
  {
    title: "Testy obciążeń",
    description: "Oferujemy precyzyjne testy obciążeń organizmu, które pomagają identyfikować źródła problemów zdrowotnych.",
    link: "/cennik",
    icon: (
      <svg width="65" height="65" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 85L45 80C30 65 20 55 20 42C20 32 28 25 38 25C44 25 48 28 50 32C52 28 56 25 62 25C72 25 80 32 80 42C80 55 70 65 55 80L50 85Z" stroke="currentColor" strokeWidth="4" strokeLinejoin="round"/>
        <path d="M30 45H38L42 35L48 55L52 45H60" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    btnText: "Przejdź do cennika"
  },
  {
    title: "Terapie",
    description: "Oferujemy szeroki zakres terapii, w tym odczulające i antynikotynowe, które pomagają w redukcji alergii oraz wspierają proces rzucania palenia.",
    link: "/oferta",
    icon: (
      <svg width="65" height="65" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="25" y="20" width="50" height="65" rx="3" stroke="currentColor" strokeWidth="4"/>
        <rect x="40" y="15" width="20" height="10" rx="2" stroke="currentColor" strokeWidth="4" fill="white"/>
        <circle cx="38" cy="40" r="4" stroke="currentColor" strokeWidth="3"/>
        <path d="M48 40H65" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        <circle cx="38" cy="55" r="4" stroke="currentColor" strokeWidth="3"/>
        <path d="M48 55H65" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        <circle cx="38" cy="70" r="4" stroke="currentColor" strokeWidth="3"/>
        <path d="M48 70H65" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
      </svg>
    ),
    btnText: "Dowiedz się więcej"
  }
];

export default function PricingCategories() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.offsetWidth * 0.8;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="section bg-white" style={{ paddingBottom: '0' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <h2 style={{ fontSize: '2rem', margin: 0 }}>Sprawdź cennik</h2>
          <div style={{ display: 'flex', gap: '1rem' }}>
             <button 
               onClick={() => scroll('left')}
               style={{ width: '40px', height: '40px', borderRadius: '50%', border: '1px solid #eee', background: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}
               aria-label="Scroll left"
             >
               <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                 <path d="M19 12H5M12 19l-7-7 7-7"/>
               </svg>
             </button>
             <button 
               onClick={() => scroll('right')}
               style={{ width: '40px', height: '40px', borderRadius: '50%', border: '1px solid #eee', background: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}
               aria-label="Scroll right"
             >
               <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                 <path d="M5 12h14m-7 7 7-7-7-7"/>
               </svg>
             </button>
          </div>
        </div>
        
        <div ref={scrollRef} className="force-scroll-container">
          {categories.map((cat, index) => (
            <div key={index} className="scroll-item pricing-card-hover" style={{ 
              padding: '3rem 2rem',
              borderRadius: '15px',
              textAlign: 'center',
              backgroundColor: '#fcfcfc',
              color: 'var(--secondary)',
              border: '1px solid #f0f0f0',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              height: '100%'
            }}>
              <div className="icon-container" style={{ color: 'var(--primary)', marginBottom: '2rem', height: '70px' }}>
                {cat.icon}
              </div>
              <h3 style={{ color: 'var(--secondary)', marginBottom: '1.5rem', fontSize: '1.4rem' }}>
                {cat.title}
              </h3>
              <p style={{ 
                marginBottom: '2.5rem', 
                fontSize: '0.95rem', 
                lineHeight: '1.6',
                opacity: 0.7,
                maxWidth: '280px'
              }}>
                {cat.description}
              </p>
              <Link href={cat.link} className="button" style={{ 
                backgroundColor: 'var(--primary)', 
                color: 'white', 
                border: 'none',
                padding: '1rem 2.5rem',
                borderRadius: '50px',
                fontSize: '0.9rem',
                fontWeight: 'bold',
                marginTop: 'auto'
              }}>
                {cat.btnText}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
