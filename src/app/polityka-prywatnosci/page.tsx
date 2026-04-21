import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <main className="section" style={{ padding: '10rem 0 6rem' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <h1 style={{ marginBottom: '3rem' }}>Polityka Prywatności</h1>
        
        <div style={{ backgroundColor: '#fff5f5', borderLeft: '4px solid #ff4d4d', padding: '2rem', marginBottom: '3rem', borderRadius: '12px' }}>
          <h3 style={{ color: '#d32f2f', marginBottom: '1rem' }}>Ważne zastrzeżenie prawne</h3>
          <p style={{ color: '#b71c1c', fontWeight: 'bold', lineHeight: '1.6' }}>
            Biomedica Nowy Sącz nie jest placówką medyczną w rozumieniu prawa. Świadczone przez nas usługi, w tym terapie biorezonansowe aparatem Bicom Optima, nie stanowią świadczeń zdrowotnych ani badań lekarskich. Nasze działania mają charakter wspomagający i nie zastępują profesjonalnej opieki medycznej ani zaleconego leczenia farmakologicznego. Przed podjęciem jakiejkolwiek terapii zalecana jest konsultacja z lekarzem prowadzącym.
          </p>
        </div>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>1. Informacje ogólne</h2>
          <p style={{ lineHeight: '1.8', color: '#555' }}>
            Niniejsza Polityka Prywatności określa zasady przetwarzania i ochrony danych osobowych przekazywanych przez Użytkowników w związku z korzystaniem z serwisu internetowego Gabinetu Biomedica. Administratorem danych osobowych jest Biomedica z siedzibą w Nowym Sączu.
          </p>
        </section>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>2. Gromadzenie danych</h2>
          <p style={{ lineHeight: '1.8', color: '#555' }}>
            Dane osobowe (takie jak imię, nazwisko, numer telefonu, adres e-mail) gromadzone są wyłącznie w celu umożliwienia kontaktu, rezerwacji wizyt oraz marketingu bezpośredniego usług własnych (o ile wyrażono na to zgodę).
          </p>
        </section>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>3. Pliki Cookies</h2>
          <p style={{ lineHeight: '1.8', color: '#555' }}>
            Serwis korzysta z plików cookies w celu poprawy funkcjonalności i analizy ruchu. Użytkownik może w każdej chwili zmienić ustawienia dotyczące cookies w swojej przeglądarce.
          </p>
        </section>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>4. Prawa Użytkownika</h2>
          <p style={{ lineHeight: '1.8', color: '#555' }}>
            Każdy Użytkownik ma prawo do wglądu w swoje dane, ich poprawiania, żądania ograniczenia przetwarzania lub całkowitego ich usunięcia ("prawo do bycia zapomnianym").
          </p>
        </section>

        <div style={{ marginTop: '4rem', borderTop: '1px solid #eee', paddingTop: '2rem' }}>
          <Link href="/" className="button button-outline">Wróć do strony głównej</Link>
        </div>
      </div>
    </main>
  );
}
