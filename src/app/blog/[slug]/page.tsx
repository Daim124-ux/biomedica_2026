import { getPostBySlug, getPosts } from "@/lib/wordpress";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="section" style={{ padding: '6rem 0' }}>
      <div className="container">
        <header style={{ marginBottom: '3rem' }}>
          <Link href="/blog" style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '0.5rem', 
            color: 'white', 
            backgroundColor: 'var(--primary)',
            padding: '0.6rem 1.8rem',
            borderRadius: '50px',
            fontSize: '0.9rem',
            fontWeight: 600,
            textDecoration: 'none',
            marginBottom: '2rem',
            boxShadow: '0 4px 15px rgba(0, 168, 150, 0.2)',
            transition: 'transform 0.2s ease'
          }}>
            &larr; Powrót do bloga
          </Link>
          
          {post._embedded?.['wp:featuredmedia']?.[0]?.source_url && (
            <div className="post-header-hero" style={{ height: 'clamp(300px, 45vh, 600px)', position: 'relative', borderRadius: '40px', overflow: 'hidden' }}>
              <Image
                src={post._embedded['wp:featuredmedia'][0].source_url}
                alt={post.title.rendered}
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
              {/* Green Tinted Overlay */}
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(rgba(0, 168, 150, 0.4), rgba(28, 45, 61, 0.7))', zIndex: 1 }} />
              
              <div className="post-header-content" style={{ zIndex: 2 }}>
                <div style={{ padding: '0 1.5rem', width: '100%', textAlign: 'center' }}>
                  <h1 style={{ 
                    maxWidth: '1000px', 
                    margin: '0 auto', 
                    lineHeight: '1.2', 
                    color: 'white',
                    textShadow: `
                      -1px -1px 0 var(--primary),  
                       1px -1px 0 var(--primary),
                      -1px  1px 0 var(--primary),
                       1px  1px 0 var(--primary),
                       0px 0px 20px rgba(0, 168, 150, 0.4)
                    `
                  }}>
                    {post.title.rendered}
                  </h1>
                  <div className="post-meta" style={{ marginTop: '2rem', fontSize: '1rem', color: 'white', opacity: 0.9 }}>
                    <span>{new Date(post.date).toLocaleDateString('pl-PL')}</span>
                    <span style={{ margin: '0 0.8rem' }}>•</span>
                    <span>5 min czytania</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {!post._embedded?.['wp:featuredmedia']?.[0]?.source_url && (
             <h1 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>{post.title.rendered}</h1>
          )}
        </header>

        <article className="post-content" style={{ maxWidth: '850px', margin: '0 auto' }}>
          <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
        </article>
      </div>
    </main>
  );
}

// Optional: Static params for performance
export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post: any) => ({
    slug: post.slug,
  }));
}
