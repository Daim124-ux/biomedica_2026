import Link from "next/link";
import Image from "next/image";

const detailServices = [
  { title: "Alergii", desc: "Skutecznie redukujemy alergie terapią biorezonansową.", icon: "/images/icons/alergii.png" },
  { title: "Astmy", desc: "Oferujemy skuteczne usuwanie astmy.", icon: "/images/icons/astmy.png" },
  { title: "AZS", desc: "Oferujemy skuteczną pomoc w usuwaniu AZS.", icon: "/images/icons/AZS.png" },
  { title: "Boreliozy i koinfekcji", desc: "Oferujemy pomoc w usuwaniu boreliozy.", icon: "/images/icons/boleriozy.png" },
  { title: "Bakterii i wirusów", desc: "Specjalizujemy się w usuwaniu bakterii i wirusów.", icon: "/images/icons/bakterii.png" },
  { title: "Candidy", desc: "Usuwamy Candidę dzięki specjalistycznym terapiom.", icon: "/images/icons/candidy.png" },
  { title: "Grzybów", desc: "Oferujemy skuteczną pomoc w usuwaniu grzybów.", icon: "/images/icons/grzybow.png" },
  { title: "Pasożytów", desc: "Zmniejszamy obecność pasożytów.", icon: "/images/icons/pasozytow.png" },
  { title: "Kurzajek", desc: "Specjalizujemy się w usuwaniu kurzajek.", icon: "/images/icons/kurzajek.png" },
  { title: "Bólów mięśniowych i stawowych", desc: "Oferujemy pomoc w zwalczaniu bólów.", icon: "/images/icons/bolow.png" },
  { title: "Problemów kobiecych", desc: "Zwalczamy problemy kobiece.", icon: "/images/icons/kobiecych.png" },
  { title: "Uporczywego kaszlu", desc: "Pomagamy w redukcji kaszlu.", icon: "/images/icons/kaszlu.png" },
];

export default function InfoSection() {
  return (
    <section className="section bg-white" style={{ paddingTop: '5rem', paddingBottom: '3rem' }}>
      <div className="container">
        <div className="grid grid-2 mobile-stack" style={{ gap: '4rem', alignItems: 'stretch' }}>
          <div>
            <span className="badge">WIEDZA | DOŚWIADCZENIE | DETERMINACJA</span>
            <h2 style={{ marginBottom: '2rem', lineHeight: '1.2' }}>
              Jeżeli masz problemy zdrowotne, wykonałeś setki badań i mimo to wciąż nie ma diagnozy... zapraszamy do naszego gabinetu.
            </h2>
            <p className="mb-2" style={{ fontSize: 'clamp(0.9rem, 1.5vw, 1rem)', opacity: 0.8 }}>
              Jeśli wahasz się, bo nigdy nie słyszałeś o tej metodzie lub masz o niej nie najlepsze zdanie... zapraszamy by udowodnić Ci skuteczność tej metody.
            </p>
            
{/* Hid "Pomagamy w usunięciu" section as requested */}
            {/* <h3 style={{ marginTop: '3rem', marginBottom: '2rem', color: 'var(--secondary)' }}>Pomagamy w usunięciu</h3>
            
            <div className="grid grid-2 mobile-stack" style={{ gap: '2rem' }}>
              {detailServices.map((s, i) => (
                <div key={i} style={{ display: 'flex', gap: '1.2rem', alignItems: 'start' }}>
                  <div style={{ 
                    width: '60px', 
                    height: '60px', 
                    borderRadius: '50%', 
                    backgroundColor: 'var(--primary)', 
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    position: 'relative',
                    padding: '12px',
                    boxShadow: '0 8px 15px rgba(0, 176, 159, 0.2)'
                  }}>
                    <Image 
                      src={s.icon} 
                      alt={s.title} 
                      width={35} 
                      height={35} 
                      style={{ objectFit: 'contain', filter: 'brightness(0) invert(1)' }}
                    />
                  </div>
                  <div>
                    <h4 style={{ margin: 0, fontSize: '1.1rem', color: 'var(--secondary)' }}>{s.title}</h4>
                    <p style={{ margin: '0.3rem 0 0', fontSize: '0.85rem', opacity: 0.7, lineHeight: '1.4' }}>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div> */}

            <div style={{ marginTop: '3rem' }}>
               <Link href="/kontakt" className="button" style={{ padding: '1.2rem 3rem', fontSize: '1.1rem' }}>Zapisz się na terapię</Link>
            </div>
          </div>
          
          <div style={{ textAlign: 'center', position: 'relative', height: '100%' }} className="hide-mobile">
            <div style={{ 
              position: 'sticky', 
              top: '100px', 
              height: '600px', 
              width: '100%',
              zIndex: 10
            }}>
              <Image 
                src="/images/biorezonans_napis.png" 
                alt="Biorezonans" 
                fill 
                style={{ objectFit: 'contain' }} 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
