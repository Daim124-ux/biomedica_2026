import { getPosts } from "@/lib/wordpress";
import Link from "next/link";
import Image from "next/image";
import Newsletter from "@/components/Newsletter";

export const revalidate = 60; // Revalidate every minute

export default async function BlogPage() {
  const posts = await getPosts();

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
          <span className="badge">Baza Wiedzy</span>
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', marginBottom: '1rem', lineHeight: '1.1' }}>
            Aktualności i Poradnik
          </h1>
          <p style={{ fontSize: '1.25rem', color: '#666', maxWidth: '700px' }}>
            Odkryj fascynujący świat biorezonansu i dowiedz się więcej o naturalnych metodach dbania o zdrowie.
          </p>
        </div>
        <div className="blob-shape" style={{ width: '40%', height: '100%', top: '-20%', right: '-10%', opacity: 0.1, background: 'var(--primary)' }} />
      </section>

      {/* Blog Grid */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-3" style={{ gap: '3rem' }}>
            {Array.isArray(posts) && posts.length > 0 ? posts.map((post: any) => (
              <article key={post.id} className="blog-card" style={{ 
                borderRadius: '25px', 
                overflow: 'hidden', 
                backgroundColor: 'white', 
                border: '1px solid #f0f0f0',
                transition: 'all 0.3s ease',
                display: 'flex',
                flexDirection: 'column'
              }}>
                <div style={{ position: 'relative', height: '240px', width: '100%' }}>
                  {post._embedded?.['wp:featuredmedia']?.[0]?.source_url ? (
                    <Image
                      src={post._embedded['wp:featuredmedia'][0].source_url}
                      alt={post.title.rendered}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  ) : (
                    <div style={{ backgroundColor: '#f0fcfb', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#00a896" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
                    </div>
                  )}
                  <div style={{ position: 'absolute', top: '1.5rem', left: '1.5rem' }}>
                    <span className="badge" style={{ backgroundColor: 'rgba(255,255,255,0.9)', color: 'var(--primary)', backdropFilter: 'blur(10px)', borderRadius: '50px', padding: '0.4rem 1.4rem' }}>Zdrowie</span>
                  </div>
                </div>
                
                <div style={{ padding: '2rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ fontSize: '0.8rem', color: '#999', marginBottom: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    {new Date(post.date).toLocaleDateString('pl-PL', { day: 'numeric', month: 'long', year: 'numeric' })}
                  </div>
                  <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', lineHeight: '1.4', color: 'var(--secondary)' }}>
                    <Link href={`/blog/${post.slug}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                      {post.title.rendered}
                    </Link>
                  </h3>
                  <div 
                    style={{ fontSize: '0.95rem', color: '#666', marginBottom: '2rem', lineHeight: '1.6' }}
                    dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} 
                  />
                  <div style={{ marginTop: 'auto' }}>
                    <Link href={`/blog/${post.slug}`} className="button button-outline" style={{ borderRadius: '50px', padding: '0.7rem 1.5rem' }}>
                      Czytaj więcej
                    </Link>
                  </div>
                </div>
              </article>
            )) : (
              <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '4rem', backgroundColor: '#f9f9f9', borderRadius: '20px' }}>
                <p style={{ color: '#666' }}>Przykładowe wpisy są teraz ładowane lokalnie. Połącz się z bazą WordPress, aby zobaczyć aktualności.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Newsletter / CTA */}
      <Newsletter />
    </main>
  );
}
