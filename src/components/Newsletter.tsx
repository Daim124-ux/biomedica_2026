"use client";

export default function Newsletter() {
  return (
    <section className="section" style={{ backgroundColor: 'var(--secondary)', color: 'white', padding: '5rem 0' }}>
      <div className="container text-center">
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h2 style={{ color: 'white', marginBottom: '1rem' }}>Bądź na bieżąco</h2>
          <p style={{ opacity: 0.8, marginBottom: '2.5rem' }}>Zapisz się do bazy wiedzy, aby otrzymywać najnowsze informacje o terapiach i zdrowym trybie życia.</p>
          <form style={{ display: 'flex', gap: '1rem', maxWidth: '500px', margin: '0 auto' }} onSubmit={(e) => {
            e.preventDefault();
            alert("Dziękujemy za zapisanie się!");
          }}>
            <input 
              type="email" 
              placeholder="Twój adres e-mail" 
              required
              style={{ flex: 1, padding: '1rem 1.5rem', borderRadius: '50px', border: 'none', outline: 'none' }} 
            />
            <button type="submit" className="button" style={{ borderRadius: '50px', backgroundColor: 'var(--primary)', border: 'none' }}>Zapisz się</button>
          </form>
        </div>
      </div>
    </section>
  );
}
