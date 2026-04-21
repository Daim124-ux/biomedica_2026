import Link from "next/link";

export default function TermsPage() {
  return (
    <main className="section" style={{ padding: '10rem 0 6rem' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <h1 style={{ marginBottom: '3rem' }}>Regulamin Świadczenia Usług</h1>
        
        <div style={{ backgroundColor: '#fff5f5', borderLeft: '4px solid #ff4d4d', padding: '2rem', marginBottom: '3rem', borderRadius: '12px' }}>
          <h3 style={{ color: '#d32f2f', marginBottom: '1rem' }}>Zastrzeżenie (Disclaimer)</h3>
          <p style={{ color: '#b71c1c', fontWeight: 'bold', lineHeight: '1.6' }}>
            Korzystając z usług gabinetu Biomedica Nowy Sącz, akceptujesz, że terapie biorezonansowe nie są procedurami medycznymi i nie zastępują konsultacji lekarskiej. Gabinet nie stawia diagnoz medycznych w rozumieniu medycyny akademickiej. Wszelkie informacje przekazywane podczas sesji mają charakter informacyjny i edukacyjny. W przypadku problemów zdrowotnych należy niezwłocznie skontaktować się z lekarzem.
          </p>
        </div>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>1. Postanowienia wstępne</h2>
          <p style={{ lineHeight: '1.8', color: '#555' }}>
            Regulamin określa zasady korzystania z usług gabinetu Biomedica w Nowym Sączu. Rezerwacja wizyty jest równoznaczna z akceptacją niniejszego regulaminu.
          </p>
        </section>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>2. Charakter usług</h2>
          <p style={{ lineHeight: '1.8', color: '#555' }}>
            Terapie oferowane w gabinecie opierają się na metodzie biorezonansu (aparat Bicom Optima). Są to metody medycyny komplementarnej, niekonwencjonalnej, mające na celu wsparcie procesów samonaprawczych organizmu.
          </p>
        </section>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>3. Rezerwacje i odwoływanie wizyt</h2>
          <p style={{ lineHeight: '1.8', color: '#555' }}>
            Wizyty można rezerwować telefonicznie lub osobiście. Prosimy o informowanie o rezygnacji z wizyty co najmniej 24 godziny wcześniej.
          </p>
        </section>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>4. Przeciwwskazania</h2>
          <p style={{ lineHeight: '1.8', color: '#555' }}>
            Podstawowym przeciwwskazaniem do korzystania z terapii biorezonansowej jest posiadanie rozrusznika serca oraz pierwszy trymestr ciąży. Klient ma obowiązek poinformować o swoim stanie zdrowia przed rozpoczęciem sesji.
          </p>
        </section>

        <div style={{ marginTop: '4rem', borderTop: '1px solid #eee', paddingTop: '2rem' }}>
          <Link href="/" className="button button-outline">Wróć do strony głównej</Link>
        </div>
      </div>
    </main>
  );
}
