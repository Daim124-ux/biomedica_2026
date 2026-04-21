import { getPosts } from "@/lib/wordpress";
import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import InfoSection from "@/components/InfoSection";
import BicomSection from "@/components/BicomSection";
import PricingCategories from "@/components/PricingCategories";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const posts = await getPosts();

  return (
    <main>
      <Hero />
      <ServicesGrid />
      <PricingCategories />
      <InfoSection />
      <BicomSection />

      <section className="section">
        <div className="container">
          <div className="text-center mb-4">
            <span className="badge">Blog</span>
            <h2>Najnowsze wpisy</h2>
          </div>
          
          {posts.length > 0 ? (
            <div className="grid grid-3" style={{ gap: '2.5rem' }}>
              {posts.map((post: any) => {
                const imageUrl = post._embedded?.['wp:featuredmedia']?.[0]?.source_url || "/images/blog-malopolska.png";
                return (
                  <article key={post.id} className="blog-card card" style={{ padding: '0', overflow: 'hidden' }}>
                    <div style={{ position: 'relative', height: '250px', width: '100%', overflow: 'hidden' }}>
                      <Image
                        src={imageUrl}
                        alt={post.title.rendered}
                        fill
                        style={{ objectFit: 'cover' }}
                        className="blog-card-image"
                      />
                      <div style={{ position: 'absolute', top: '1.5rem', left: '1.5rem' }}>
                        <span className="badge" style={{ backgroundColor: 'rgba(255,255,255,0.9)', color: 'var(--primary)', backdropFilter: 'blur(10px)', borderRadius: '50px', padding: '0.4rem 1.4rem' }}>Zdrowie</span>
                      </div>
                    </div>
                    <div style={{ padding: '2rem' }}>
                      <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', lineHeight: '1.4' }}>
                        <Link href={`/blog/${post.slug}`} className="hover-link">{post.title.rendered}</Link>
                      </h3>
                      <div 
                        style={{ fontSize: '1rem', color: '#666', marginBottom: '1.5rem', lineHeight: '1.6' }}
                        dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} 
                      />
                      <Link href={`/blog/${post.slug}`} className="button button-outline" style={{ padding: '0.6rem 1.2rem', fontSize: '0.9rem' }}>
                        Czytaj więcej
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            <div className="grid grid-3" style={{ gap: '2.5rem' }}>
              {/* Fallback Static Card */}
              <article className="blog-card card" style={{ padding: '0', overflow: 'hidden' }}>
                <div style={{ position: 'relative', height: '250px', width: '100%', overflow: 'hidden' }}>
                  <Image
                    src="/images/blog-malopolska.png"
                    alt="Biorezonans w Małopolsce"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                  <div style={{ position: 'absolute', top: '1.5rem', left: '1.5rem' }}>
                    <span className="badge" style={{ backgroundColor: 'rgba(255,255,255,0.9)', color: 'var(--primary)' }}>Nowość</span>
                  </div>
                </div>
                <div style={{ padding: '2rem' }}>
                  <h3>Biorezonans w Nowym Sączu</h3>
                  <p style={{ color: '#666', margin: '1rem 0' }}>Już wkrótce nowe artykuły o skutecznym leczeniu alergii i boreliozy w naszym gabinecie.</p>
                  <span className="badge badge-outline">Zapraszamy wkrótce</span>
                </div>
              </article>
            </div>
          )}
        </div>
      </section>
      <ContactSection />
    </main>
  );
}
