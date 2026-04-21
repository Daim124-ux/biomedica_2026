import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer style={{ backgroundColor: 'var(--secondary)', color: 'rgba(255,255,255,0.7)', padding: '5rem 0 2rem', marginTop: 'auto' }}>
      <div className="container">
        <div className="grid grid-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '3rem', marginBottom: '2rem' }}>
          <div>
            <Link href="/" style={{ display: 'inline-block', marginBottom: '1.5rem' }}>
              <Image 
                src="/images/Biomedica_logo.webp" 
                alt="Biomedica Logo" 
                width={140} 
                height={70} 
                style={{ objectFit: 'contain', filter: 'brightness(0) invert(1)' }} 
              />
            </Link>
            <p style={{ fontSize: '0.9rem', lineHeight: '1.8' }}>
              Profesjonalny Gabinet Biorezonansu i Terapii Alergii. Naszą misją jest pomoc pacjentom w powrocie do zdrowia dzięki nowoczesnej technologii Bicom Optima.
            </p>
          </div>
          <div>
            <h4 style={{ color: 'white', marginBottom: '1.5rem' }}>Oferta</h4>
            <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9rem' }}>
              <li style={{ marginBottom: '0.8rem' }}><Link href="/oferta/usuwanie-alergii" style={{ color: 'inherit' }}>Usuwanie alergii</Link></li>
              <li style={{ marginBottom: '0.8rem' }}><Link href="/oferta/terapia-antynikotynowa" style={{ color: 'inherit' }}>Rzucanie palenia</Link></li>
            </ul>
          </div>
          <div>
            <h4 style={{ color: 'white', marginBottom: '1.5rem' }}>Linki</h4>
            <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9rem' }}>
              <li style={{ marginBottom: '0.8rem' }}><Link href="/o-nas" style={{ color: 'inherit' }}>O nas</Link></li>
              <li style={{ marginBottom: '0.8rem' }}><Link href="/cennik" style={{ color: 'inherit' }}>Cennik</Link></li>
              <li style={{ marginBottom: '0.8rem' }}><Link href="/blog" style={{ color: 'inherit' }}>Blog</Link></li>
              <li style={{ marginBottom: '0.8rem' }}><Link href="/kontakt" style={{ color: 'inherit' }}>Kontakt</Link></li>
            </ul>
          </div>
          <div>
            <h4 style={{ color: 'white', marginBottom: '1.5rem' }}>Kontakt</h4>
            <p style={{ marginBottom: '0.8rem', fontSize: '0.9rem' }}>ul. Zdrojowa 39, 33-300 Nowy Sącz</p>
            <p style={{ marginBottom: '0.8rem', fontSize: '1.1rem', fontWeight: 'bold', color: 'white' }}>
              <a href="tel:533138340" style={{ color: 'inherit' }}>+48 533 138 340</a>
            </p>

            <div style={{ marginTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1rem' }}>
              <h5 style={{ color: 'white', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.5rem' }}>Obszar działania</h5>
              <p style={{ fontSize: '0.75rem', opacity: 0.5 }}>Nowy Sącz</p>
            </div>
          </div>
        </div>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          fontSize: '0.8rem', 
          opacity: 0.6,
          flexWrap: 'wrap',
          gap: '1.5rem'
        }} className="mobile-center">
          <div>&copy; {currentYear} Biomedica. Wszystkie prawa zastrzeżone.</div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <Link href="/polityka-prywatnosci" style={{ color: 'inherit' }}>Polityka Prywatności</Link>
            <Link href="/regulamin" style={{ color: 'inherit' }}>Regulamin</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
