import Link from "next/link";
import Image from "next/image";

const services = [
  { title: "Usuwanie alergii", slug: "usuwanie-alergii", image: "/images/alergie_cond.png" },
  { title: "Terapia antynikotynowa", slug: "terapia-antynikotynowa", image: "/images/palenie_cond.png" }
];

const hours = [
  { day: "PONIEDZIAŁEK", time: "10:00 - 17:00" },
  { day: "WTOREK", time: "10:00 - 17:00" },
  { day: "ŚRODA", time: "10:00 - 17:00" },
  { day: "CZWARTEK", time: "10:00 - 17:00" },
  { day: "PIĄTEK", time: "10:00 - 17:00" },
  { day: "SOBOTA", time: "8:00 - 12:00" },
];

export default function ServicesGrid() {
  return (
    <section className="section bg-white" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Background Decor */}
      <div className="blob-shape blob-1" style={{ width: '400px', height: '400px', opacity: 0.03, top: '5%', left: '-5%' }} />
      <div className="blob-shape blob-2" style={{ width: '500px', height: '500px', opacity: 0.03, bottom: '5%', right: '-10%' }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="services-parent-grid mobile-stack" style={{ alignItems: 'stretch' }}>
          {/* Left Column: Opening Hours */}
          <div style={{ 
            gridRow: 'span 2', 
            backgroundColor: 'var(--primary)', 
            borderRadius: '15px', 
            padding: '2rem', 
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: '0 15px 40px rgba(0, 176, 159, 0.2)'
          }} className="opening-hours-card">
            <div>
              <h2 style={{ color: 'white', fontSize: '1.8rem', marginBottom: '1.5rem' }}>Godziny otwarcia</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                {hours.map((item, i) => (
                  <div key={i} style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    fontSize: '0.85rem',
                    borderBottom: '1px solid rgba(255,255,255,0.2)',
                    paddingBottom: '0.6rem'
                  }}>
                    <span style={{ fontWeight: 'bold', opacity: 0.9 }}>{item.day}</span>
                    <span>{item.time}</span>
                  </div>
                ))}
              </div>
            </div>
            <a href="tel:533138340" className="button" style={{ 
              backgroundColor: 'white', 
              color: 'var(--primary)', 
              textAlign: 'center', 
              fontWeight: 'bold',
              marginTop: '1.5rem',
              borderRadius: '50px',
              fontSize: '0.9rem'
            }}>
              Zadzwoń: 533 138 340
            </a>
          </div>

          {/* Service Cards Responsive Grid/Slider */}
          <div className="services-inner-grid">
            {services.map((service, index) => (
              <Link 
                key={index} 
                href={`/oferta/${service.slug}`} 
                className="service-card scroll-item"
                style={{ position: 'relative', height: '300px' }}
              >
                <div style={{ 
                  position: 'relative', 
                  height: '100%', 
                  borderRadius: '15px', 
                  overflow: 'hidden',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.06)'
                }}>
                  <Image 
                    src={service.image} 
                    alt={service.title} 
                    fill 
                    style={{ objectFit: 'cover' }} 
                  />
                  <div style={{ 
                    position: 'absolute', 
                    inset: 0,
                    padding: '1.2rem',
                    background: 'linear-gradient(to top, var(--primary) 0%, rgba(0, 176, 159, 0.4) 40%, transparent 100%)',
                    color: 'white',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end'
                  }}>
                    <h3 style={{ color: 'white', marginBottom: '0.5rem', fontSize: '1.15rem', fontWeight: 'bold' }}>{service.title}</h3>
                    <span style={{ 
                      fontSize: '0.75rem', 
                      fontWeight: 'bold', 
                      textDecoration: 'underline',
                      textUnderlineOffset: '4px',
                      opacity: 0.9 
                    }}>
                      Dowiedz się więcej
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
