"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerStyle: React.CSSProperties = {
    backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'var(--white)',
    padding: isScrolled ? '0.5rem 0' : '1rem 0',
    position: 'fixed',
    top: isScrolled ? '15px' : '0',
    left: isScrolled ? '50%' : '0',
    transform: isScrolled ? 'translateX(-50%)' : 'none',
    right: 'auto',
    zIndex: 1000,
    width: isScrolled ? 'calc(100% - 40px)' : '100%',
    maxWidth: isScrolled ? '1440px' : '100%',
    borderRadius: isScrolled ? '50px' : '0',
    boxShadow: isScrolled ? '0 15px 35px rgba(0,0,0,0.08)' : '0 2px 10px rgba(0,0,0,0.02)',
    backdropFilter: isScrolled ? 'blur(15px)' : 'none',
    transition: 'all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)',
    border: isScrolled ? '1px solid rgba(255,255,255,0.5)' : 'none'
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "O nas", href: "/o-nas" },
    { name: "Oferta", href: "/oferta" },
    { name: "Blog", href: "/blog" },
    { name: "Cennik", href: "/cennik" },
    { name: "Kontakt", href: "/kontakt" },
  ];

  return (
    <>
      <header style={headerStyle}>
        <div className={isScrolled ? "" : "container"} style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          padding: isScrolled ? '0 1rem' : '0'
        }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', zIndex: 1001 }}>
            <div style={{ position: 'relative', height: '45px', width: isScrolled ? '130px' : '150px', transition: 'width 0.4s ease' }}>
              <Image 
                src={isScrolled ? "/images/Biomedica_fav.png" : "/images/Biomedica_logo.webp"} 
                alt="Biomedica" 
                width={isScrolled ? 50 : 180} 
                height={isScrolled ? 50 : 60} 
                style={{ objectFit: 'contain', transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)' }}
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hide-mobile" style={{ transition: 'all 0.3s ease' }}>
            <ul style={{ 
              display: 'flex', 
              listStyle: 'none', 
              gap: isScrolled ? '1.5rem' : '2.5rem', 
              fontWeight: '600', 
              fontSize: '0.85rem', 
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} style={{ color: 'var(--secondary)', textDecoration: 'none', transition: 'color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--secondary)'}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
             <a href="tel:533138340" className="button hide-mobile" style={{ 
               borderRadius: '50px', 
               padding: isScrolled ? '8px 20px' : '10px 25px',
               fontSize: isScrolled ? '0.8rem' : '0.9rem',
               transition: 'all 0.3s ease'
             }}>
               {isScrolled ? "Zadzwoń" : "+48 533 138 340"}
             </a>

             {/* Mobile Menu Toggle */}
             <button 
               className="show-mobile" 
               onClick={() => setIsMenuOpen(!isMenuOpen)}
               style={{ 
                 background: 'none', 
                 border: 'none', 
                 cursor: 'pointer',
                 padding: '10px',
                 zIndex: 1001,
                 color: 'var(--secondary)'
               }}
               aria-label="Menu"
             >
               <div style={{ width: '25px', height: '2px', backgroundColor: 'currentColor', marginBottom: '6px', transition: '0.3s', transform: isMenuOpen ? 'rotate(45deg) translate(5px, 6px)' : 'none' }}></div>
               <div style={{ width: '25px', height: '2px', backgroundColor: 'currentColor', marginBottom: '6px', transition: '0.3s', opacity: isMenuOpen ? 0 : 1 }}></div>
               <div style={{ width: '25px', height: '2px', backgroundColor: 'currentColor', transition: '0.3s', transform: isMenuOpen ? 'rotate(-45deg) translate(5px, -6px)' : 'none' }}></div>
             </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(255,255,255,0.98)',
        zIndex: 999,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '2rem',
        transition: 'all 0.4s ease',
        opacity: isMenuOpen ? 1 : 0,
        visibility: isMenuOpen ? 'visible' : 'hidden',
        pointerEvents: isMenuOpen ? 'all' : 'none'
      }}>
        {navLinks.map((link) => (
          <Link 
            key={link.href} 
            href={link.href} 
            onClick={() => setIsMenuOpen(false)}
            style={{ 
              color: 'var(--secondary)', 
              fontSize: '1.5rem', 
              fontWeight: 'bold', 
              textTransform: 'uppercase',
              textDecoration: 'none'
            }}
          >
            {link.name}
          </Link>
        ))}
        <a href="tel:533138340" className="button" style={{ marginTop: '2rem' }}>
          Zadzwoń: 533 138 340
        </a>
      </div>
    </>
  );
}
