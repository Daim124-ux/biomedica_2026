import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
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
          <span className="badge">Poznaj nas</span>
          <h1 style={{ marginBottom: '1rem', lineHeight: '1.1' }}>
            O nas
          </h1>
          <p style={{ fontSize: 'clamp(1.1rem, 2vw, 1.25rem)', color: '#666', maxWidth: '600px' }}>
            Twoje zdrowie i dobre samopoczucie są dla nas najważniejsze. Dowiedz się więcej o naszej misji i technologii.
          </p>
        </div>
        <div className="blob-shape" style={{ width: '40%', height: '100%', top: '-20%', right: '-10%', opacity: 0.1, background: 'var(--primary)' }} />
      </section>

      {/* Kim jesteśmy? */}
      <section className="section bg-white">
        <div className="container" style={{ padding: '0 20px' }}>
          <div className="grid grid-2 mobile-stack" style={{ alignItems: 'center', gap: '4rem' }}>
            <div>
              <h2 style={{ marginBottom: '1.5rem' }}>Kim jesteśmy?</h2>
              <div style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#444' }}>
                <p style={{ marginBottom: '1.5rem' }}>
                  <strong>BIOMEDICA</strong> to autoryzowany gabinet biorezonansu, który od <strong>2016 roku</strong> z pasją i zaangażowaniem pomaga pacjentom w powrocie do zdrowia. Naszą specjalnością jest nieinwazyjna diagnostyka oraz skuteczne terapie wspomagające organizm.
                </p>
                <p style={{ marginBottom: '1.5rem' }}>
                  Pracujemy na najnowocześniejszym sprzęcie – aparacie <strong>BICOM OPTIMA B25 v 5.0</strong> renomowanej firmy Regumed Gmbh. To szczytowe osiągnięcie technologii w dziedzinie biorezonansu, pozwalające na niespotykaną wcześniej precyzję.
                </p>
                <p>
                  Każdy zabieg w naszym gabinecie prowadzony jest przez <strong>certyfikowanego terapeutę</strong>, co gwarantuje najwyższe standardy bezpieczeństwa i profesjonalizmu.
                </p>
              </div>
            </div>
            <div style={{ position: 'relative', minHeight: '350px', width: '100%' }}>
              <div className="image-mask" style={{ height: '350px', position: 'relative', zIndex: 2 }}>
                <Image 
                  src="/images/bicom_modern.png" 
                  alt="Aparatura Bicom Optima" 
                  fill 
                  style={{ objectFit: 'cover' }} 
                />
              </div>
              <div className="blob-shape" style={{ width: '120%', height: '120%', top: '-10%', left: '-10%', opacity: 0.05, zIndex: 1 }} />
            </div>
          </div>
        </div>
      </section>

      {/* Dlaczego warto wybrać właśnie nas? */}
      <section className="section" style={{ backgroundColor: '#fcfcfc' }}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 style={{ fontSize: '2.5rem' }}>Dlaczego warto wybrać właśnie nas?</h2>
          </div>
          <div className="scroll-container" style={{ paddingLeft: '20px', paddingRight: '20px' }}>
            {[
              { 
                title: "Indywidualne podejście", 
                text: "Dla nas każdy pacjent to osobna historia. Czas diagnozy dobieramy elastycznie do Twoich potrzeb." 
              },
              { 
                title: "Brak pośpiechu", 
                text: "Nie wykonujemy terapii taśmowo. Skupiamy się na dokładności i rzetelności każdego badania." 
              },
              { 
                title: "Pełna precyzja", 
                text: "Szukamy pierwotnych przyczyn dolegliwości, a nie tylko maskujemy ich objawy." 
              }
            ].map((item, i) => (
              <div key={i} className="card scroll-item" style={{ padding: '2.5rem', textAlign: 'center', border: 'none', boxShadow: '0 10px 30px rgba(0,0,0,0.03)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ width: '60px', height: '60px', backgroundColor: 'var(--primary)', borderRadius: '50%', margin: '0 auto 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold', fontSize: '1.5rem' }}>
                  {i + 1}
                </div>
                <h3 style={{ marginBottom: '1rem', color: 'var(--secondary)' }}>{item.title}</h3>
                <p style={{ fontSize: '0.95rem', color: '#666' }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Section */}
      <section className="section bg-white">
        <div className="container">
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
             <div className="grid grid-2 mobile-stack" style={{ gap: '2rem' }}>
                {/* Contraindications */}
                <div className="card" style={{ padding: '2.5rem', border: '1px solid #f0f0f0', borderRadius: '30px', backgroundColor: '#fff' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
                    <div style={{ 
                      backgroundColor: '#e53e3e', 
                      color: 'white', 
                      width: '32px', 
                      height: '32px', 
                      borderRadius: '50%', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      fontWeight: 'bold',
                      fontSize: '1.2rem'
                    }}>!</div>
                    <h2 style={{ fontSize: 'clamp(1.3rem, 2.5vw, 1.5rem)', margin: 0, color: '#2d3748' }}>Przeciwwskazania</h2>
                  </div>
                  <div className="grid grid-1" style={{ gap: '0.8rem' }}>
                    {[
                      "Rozrusznik serca",
                      "Ciąża",
                      "Padaczka",
                      "Przeszczepy narządów",
                      "Implanty elektroniczne",
                      "Choroba nowotworowa"
                    ].map((item, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#4a5568', paddingBottom: '0.8rem', borderBottom: '1px solid #f7fafc' }}>
                        <div style={{ width: '6px', height: '6px', backgroundColor: '#e53e3e', borderRadius: '50%' }} />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recommendations */}
                <div className="card" style={{ padding: '2.5rem', backgroundColor: 'var(--primary)', color: 'white', borderRadius: '30px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <h3 style={{ color: 'white', fontSize: 'clamp(1.5rem, 3vw, 1.8rem)', marginBottom: '1.5rem' }}>Zalecenia przed wizytą</h3>
                  <p style={{ fontSize: '1.1rem', lineHeight: '1.7', opacity: 0.95, marginBottom: '0' }}>
                    Aby terapia była w pełni skuteczna, w dniu zabiegu należy wypić <strong>1,5 – 2 litry wody</strong> niskozmineralizowanej. 
                  </p>
                  <hr style={{ border: 'none', height: '1px', backgroundColor: 'rgba(255,255,255,0.2)', margin: '1.5rem 0' }} />
                  <p style={{ fontSize: '1rem', opacity: 0.9 }}>
                    Prosimy o ograniczenie spożycia kawy i mocnej herbaty oraz całkowitą rezygnację z alkoholu w dniu terapii.
                  </p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-white text-center" style={{ paddingTop: '2rem' }}>
        <div className="container">
          <Link href="/kontakt" className="button" style={{ padding: '1.2rem 3.5rem', fontSize: '1.1rem' }}>
            Zarezerwuj termin teraz
          </Link>
        </div>
      </section>
    </main>
  );
}
