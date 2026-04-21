import Image from "next/image";

export default function BicomSection() {
  return (
    <section className="section bg-white" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="container" style={{ padding: '0 20px' }}>
        <div className="grid grid-2 mobile-stack" style={{ gap: '4rem', alignItems: 'center' }}>
          <div>
            <span className="badge">Nasza Technologia</span>
            <h2 style={{ marginBottom: '1.5rem', lineHeight: '1.2' }}>
              Bicom Optima – szczytowe osiągnięcie w biorezonansie.
            </h2>
            <p className="mb-2">
              Aparat obsługiwany jest przez certyfikowanego terapeutę, a wykonywane testy stwierdzają obecność specyficznych drgań biorezonansowych danego patogenu lub alergenu.
            </p>
            <p className="mb-2">
              W wielu przypadkach poprawa i zauważalne efekty są widoczne już po pierwszych terapiach. Całkowita ilość spotkań jest dobierana indywidualnie, zależnie od kondycji i obciążeń pacjenta.
            </p>
            <div style={{ marginTop: '2rem', display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
               <div style={{ borderLeft: '4px solid var(--primary)', paddingLeft: '1rem', flex: '1 1 150px' }}>
                 <div style={{ fontWeight: 'bold', color: 'var(--secondary)' }}>Bezbolesne</div>
                 <div style={{ fontSize: '0.85rem' }}>Idealne dla dzieci i dorosłych</div>
               </div>
               <div style={{ borderLeft: '4px solid var(--primary)', paddingLeft: '1rem', flex: '1 1 150px' }}>
                 <div style={{ fontWeight: 'bold', color: 'var(--secondary)' }}>Skuteczne</div>
                 <div style={{ fontSize: '0.85rem' }}>Wysoka precyzja diagnostyczna</div>
               </div>
            </div>
          </div>
          
          <div style={{ position: 'relative', minHeight: '300px' }} className="hide-mobile">
             <div className="image-mask" style={{ height: 'clamp(300px, 50vh, 450px)', position: 'relative', zIndex: 2 }}>
                <Image 
                  src="/images/bicom_modern.png" 
                  alt="Nowoczesna terapia biorezonansowa" 
                  fill 
                  style={{ objectFit: 'cover' }} 
                />
             </div>
             {/* Decorative blob behind image */}
             <div className="blob-shape" style={{ width: '120%', height: '120%', top: '-10%', left: '-10%', opacity: 0.1, zIndex: 1 }} />
          </div>
        </div>
      </div>
    </section>
  );
}
