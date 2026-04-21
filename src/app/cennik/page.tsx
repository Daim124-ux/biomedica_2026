import Link from "next/link";

const pricingData = [
  {
    category: "Testy alergiczne",
    description: "Kompleksowa diagnostyka alergii wziewnych, pokarmowych i kontaktowych.",
    items: [
      { name: "Test wziewny / pyłkowy", price: "150,00 zł" },
      { name: "Test wziewny (podstawowy)", price: "150,00 zł" },
      { name: "Test pokarmowy", price: "150,00 zł" },
      { name: "Test barwniki i konserwanty", price: "150,00 zł" },
      { name: "Test metale", price: "150,00 zł" },
      { name: "Test kosmetyki", price: "150,00 zł" }
    ]
  },
  {
    category: "Terapie",
    description: "Skuteczne zabiegi wspomagające powrót do zdrowia i usuwanie nałogów.",
    items: [
      { name: "Terapia odczulająca (pojedynczy zabieg)", price: "100,00 zł" },
      { name: "Terapia antynikotynowa (całość)", price: "250,00 zł" },
      { name: "Indywidualny dobór testów / Konsultacja", price: "350,00 zł" }
    ],
    highlight: true
  }
];

export default function PricingPage() {
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
          <span className="badge">Transparentność</span>
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', marginBottom: '1rem', lineHeight: '1.1' }}>
            Cennik usług
          </h1>
          <p style={{ fontSize: '1.25rem', color: '#666', maxWidth: '700px' }}>
            Oferujemy pełen zakres profesjonalnych usług z zakresu biorezonansu w konkurencyjnych cenach.
          </p>
        </div>
        <div className="blob-shape" style={{ width: '40%', height: '100%', top: '-20%', right: '-10%', opacity: 0.1, background: 'var(--primary)' }} />
      </section>

      {/* Pricing Grid */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-3" style={{ gap: '2rem', alignItems: 'stretch' }}>
            {pricingData.map((group, i) => (
              <div key={i} className="card" style={{ 
                padding: '2.5rem 1.5rem', 
                border: group.highlight ? '2px solid var(--primary)' : '1px solid #f0f0f0', 
                borderRadius: '30px',
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: group.highlight ? '#faffff' : 'white',
                position: 'relative'
              }}>
                {group.highlight && (
                  <span style={{ 
                    position: 'absolute', 
                    top: '-15px', 
                    left: '50%', 
                    transform: 'translateX(-50%)', 
                    backgroundColor: 'var(--primary)', 
                    color: 'white', 
                    padding: '0.4rem 1.2rem', 
                    borderRadius: '50px', 
                    fontSize: '0.8rem', 
                    fontWeight: 'bold',
                    textTransform: 'uppercase'
                  }}>
                    Polecane
                  </span>
                )}
                <h2 style={{ fontSize: '1.6rem', marginBottom: '1rem', color: 'var(--secondary)' }}>{group.category}</h2>
                <p style={{ fontSize: '0.9rem', color: '#777', marginBottom: '2rem', lineHeight: '1.6' }}>{group.description}</p>
                
                <div style={{ flexGrow: 1 }}>
                  {group.items.map((item, j) => (
                    <div key={j} style={{ 
                      display: 'flex', 
                      justifyContent: 'space-between', 
                      alignItems: 'center', 
                      padding: '0.8rem 0', 
                      borderBottom: j === group.items.length - 1 ? 'none' : '1px solid #f7fafc'
                    }}>
                      <span style={{ fontSize: '0.9rem', color: '#444', paddingRight: '1rem' }}>{item.name}</span>
                      <span style={{ fontWeight: 'bold', color: 'var(--secondary)', whiteSpace: 'nowrap', fontSize: '0.9rem' }}>{item.price}</span>
                    </div>
                  ))}
                </div>
                
                <div style={{ marginTop: '2.5rem' }}>
                  <Link href="/kontakt" className={group.highlight ? "button" : "button button-outline"} style={{ width: '100%', textAlign: 'center', borderRadius: '50px' }}>
                    Umów się teraz
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '4rem', backgroundColor: '#f8fbfc', padding: '2.5rem 1.5rem', borderRadius: '30px', textAlign: 'center' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <div style={{ 
                backgroundColor: 'var(--primary)', 
                color: 'white', 
                width: '32px', 
                height: '32px', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                margin: '0 auto 1.5rem',
                fontWeight: 'bold',
                fontSize: '1.2rem'
              }}>!</div>
              <h3 style={{ marginBottom: '1rem' }}>Ważne informacje</h3>
              <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: '1.7' }}>
                Podane ceny mają charakter informacyjny i nie stanowią oferty handlowej w rozumieniu Art. 66 par. 1 Kodeksu Cywilnego. 
                Dokładna wycena testów diagnostycznych odbywa się w gabinecie przed rozpoczęciem badania, w zależności od wybranego zakresu.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
