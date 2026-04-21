export default function ContactInfo() {
  const hours = [
    { day: "PONIEDZIAŁEK", time: "10:00 - 17:00" },
    { day: "WTOREK", time: "10:00 - 17:00" },
    { day: "ŚRODA", time: "10:00 - 17:00" },
    { day: "CZWARTEK", time: "10:00 - 17:00" },
    { day: "PIĄTEK", time: "10:00 - 17:00" },
    { day: "SOBOTA", time: "08:00 - 12:00" },
  ];

  return (
    <section className="section bg-white">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
          <div>
            <span className="badge">Gdzie nas znaleźć?</span>
            <h2 className="mb-2">Kontakt</h2>
            <div className="card" style={{ padding: '2rem' }}>
              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ fontWeight: 'bold', color: 'var(--secondary)' }}>Adres:</div>
                <div>ul. Zdrojowa 39, 33-300 Nowy Sącz</div>
              </div>
            </div>
          </div>

          <div>
            <span className="badge">Kiedy pracujemy?</span>
            <h2 className="mb-2">Godziny otwarcia</h2>
            <div className="card" style={{ padding: '2rem' }}>
              {hours.map((item, index) => (
                <div key={index} style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  padding: '0.8rem 0',
                  borderBottom: index === hours.length - 1 ? 'none' : '1px solid #eee'
                }}>
                  <span style={{ fontWeight: 'bold', fontSize: '0.9rem', color: 'var(--secondary)' }}>{item.day}</span>
                  <span style={{ fontSize: '0.9rem' }}>{item.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
