const API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;

export async function getPosts() {
  if (!API_URL) return getFallbackPosts();
  try {
    const res = await fetch(`${API_URL}/posts?_embed`, { 
      next: { revalidate: 60 },
      signal: AbortSignal.timeout(3000) // Shorter timeout for better dev experience
    });
    if (!res.ok) return getFallbackPosts();
    const data = await res.json();
    return Array.isArray(data) ? data : getFallbackPosts();
  } catch (error) {
    // Silently return fallbacks in case of network issues (fetch failed)
    return getFallbackPosts();
  }
}

function getFallbackPosts() {
  return [
    {
      id: 1,
      title: { rendered: "Biorezonans Bicom Optima – nowoczesna diagnostyka w służbie zdrowia" },
      content: { rendered: "Metoda ta opiera się na wykorzystaniu drgań elektromagnetycznych..." },
      excerpt: { rendered: "Odkryj, jak technologia Bicom Optima rewolucjonizuje podejście do zdrowia, oferując bezbolesne testy na alergie, pasożyty i obciążenia organizmu z natychmiastowym wynikiem." },
      slug: "czym-jest-biorezonans",
      date: new Date().toISOString(),
      _embedded: {
        "wp:featuredmedia": [{ source_url: "/images/bicom_modern.png" }]
      }
    },
    {
      id: 2,
      title: { rendered: "Rzuć palenie w 60 minut – jak działa terapia antynikotynowa Bicom?" },
      content: { rendered: "Czy wiedziałeś, że walka z nałogiem nikotynowym może trwać zaledwie godzinę?..." },
      excerpt: { rendered: "Skuteczność rzędu 80% już po pierwszym zabiegu. Dowiedz się, dlaczego tysiące osób wybrało biorezonans jako ostateczną broń w walce z głodem nikotynowym." },
      slug: "rzuc-palenie-biorezonans",
      date: new Date().toISOString(),
      _embedded: {
        "wp:featuredmedia": [{ source_url: "/images/palenie_cond.png" }]
      }
    },
    {
      id: 3,
      title: { rendered: "Biorezonans w Małopolsce – Nowy Sącz, Kraków, Tarnów" },
      content: { rendered: "Szukasz profesjonalnego gabinetu biorezonansu w Małopolsce? Dowiedz się, dlaczego pacjenci z Krakowa, Tarnowa i Limanowej wybierają Biomedica w Nowym Sączu." },
      excerpt: { rendered: "Profesjonalna diagnostyka i terapia patogenów dla mieszkańców Małopolski. Sprawdź naszą ofertę dla Nowego Sącza, Krakowa, Tarnowa i okolic." },
      slug: "biorezonans-malopolska-nowy-sacz-krakow-tarnow",
      date: new Date().toISOString(),
      _embedded: {
        "wp:featuredmedia": [{ source_url: "/images/blog-malopolska.png" }]
      }
    }
  ];
}

export async function getPage(slug: string) {
  if (!API_URL) return null;
  try {
    const res = await fetch(`${API_URL}/pages?slug=${slug}&_embed`, { 
      next: { revalidate: 60 },
      signal: AbortSignal.timeout(5000)
    });
    if (!res.ok) return null;
    const pages = await res.json();
    return pages[0] || null;
  } catch (error) {
    console.error(`Error fetching page ${slug}:`, error);
    return null;
  }
}

export async function getPostBySlug(slug: string) {
  const fallbacks: Record<string, any> = {
    "czym-jest-biorezonans": {
      title: { rendered: "Biorezonans Bicom Optima – nowoczesna diagnostyka w służbie zdrowia" },
      content: { rendered: `
        <p class="lead">Biorezonans to jedna z najprężniej rozwijających się metod medycyny komplementarnej, która od lat wspiera pacjentów w powrocie do pełni sił.</p>
        
        <h3>Jak to działa w praktyce?</h3>
        <p>Każda komórka naszego ciała, a także każdy patogen (wirusy, bakterie, pasożyty), emituje specyficzne drgania o określonej częstotliwości. Urządzenie <strong>Bicom Optima</strong> potrafi te drgania zarejestrować, przeanalizować i – w zależności od potrzeb – przetworzyć.</p>
        
        <h4>Zalety diagnostyki Bicom:</h4>
        <ul>
          <li><strong>Bezinwazyjność:</strong> Testy są całkowicie bezbolesne, nie wymagają nakłuć ani pobierania krwi.</li>
          <li><strong>Szybkość:</strong> Wyniki większości testów (np. alergicznych czy obciążeń) są znane natychmiast po ich zakończeniu.</li>
          <li><strong>Precyzja:</strong> Pozwala na wykrycie przyczyn dolegliwości, które często pozostają niewidoczne w standardowych badaniach.</li>
        </ul>

        <h3>Dla kogo jest ta metoda?</h3>
        <p>Terapie biorezonansowe są bezpieczne dla osób w każdym wieku – od małych dzieci po seniorów. Nie dają skutków ubocznych i mogą być stosowane równolegle z konwencjonalnym leczeniem medycznym.</p>
        
        <blockquote>"Biorezonans nie zastępuje medycyny akademickiej, ale stanowi jej doskonałe uzupełnienie, przyspieszając proces regeneracji organizmu."</blockquote>
      ` },
      date: new Date().toISOString(),
      slug: "czym-jest-biorezonans",
      _embedded: {
        "wp:featuredmedia": [{ source_url: "/images/bicom_modern.png" }]
      }
    },
    "rzuc-palenie-biorezonans": {
      title: { rendered: "Rzuć palenie w 60 minut – jak działa terapia antynikotynowa Bicom?" },
      content: { rendered: `
        <p class="lead">Czy wiedziałeś, że walka z nałogiem nikotynowym może trwać zaledwie godzinę? Dzięki metodzie biorezonansu, wychodzenie z uzależnienia staje się znacznie prostsze.</p>
        
        <h3>Na czym polega zabieg?</h3>
        <p>Podczas sesji trwającej ok. 45-60 minut, organizm pacjenta zostaje poddany działaniu częstotliwości, które neutralizują tzw. "ślad pamięciowy" nikotyny w układzie nerwowym. W efekcie, po wyjściu z gabinetu, większość pacjentów nie odczuwa fizycznego głodu nikotynowego.</p>
        
        <h4>Dlaczego nasza terapia jest tak skuteczna?</h4>
        <p>W przeciwieństwie do plastrów czy gum nikotynowych, biorezonans eliminuje potrzebę dostarczania nikotyny do organizmu. Zamiast tego, "przeprogramowuje" komórki tak, aby przestały jej żądać.</p>
        
        <ul>
          <li>Wystarczy zazwyczaj <strong>tylko jedna sesja</strong>.</li>
          <li>Brak drażliwości i stresu związanego z odstawieniem.</li>
          <li>Detoksykacja organizmu z nagromadzonych substancji smolistych.</li>
        </ul>

        <h3>Przygotowanie do zabiegu</h3>
        <p>Aby terapia była w pełni skuteczna, pacjent powinien przynieść ze sobą ostatniego wypalonego papierosa oraz pić dużą ilość wody niegazowanej (ok. 2 litry) w ciągu doby po zabiegu, aby wspomóc usuwanie toksyn.</p>
      ` },
      date: new Date().toISOString(),
      slug: "rzuc-palenie-biorezonans",
      _embedded: {
        "wp:featuredmedia": [{ source_url: "/images/palenie_cond.png" }]
      }
    },
    "biorezonans-malopolska-nowy-sacz-krakow-tarnow": {
      title: { rendered: "Biorezonans w Małopolsce – Nowy Sącz, Kraków, Tarnów i Limanowa" },
      content: { rendered: `
        <p class="lead">Biomedica Nowy Sącz to wiodące centrum biorezonansu w południowej Polsce. Nasz gabinet przyciąga pacjentów z całego regionu Małopolski, szukających skutecznej diagnostyki i nowoczesnych terapii.</p>
        
        <h3>Profesjonalizm dostępny dla wszystkich mieszkańców Małopolski</h3>
        <p>Dlaczego pacjenci z takich miast jak <strong>Kraków</strong>, <strong>Tarnów</strong> czy <strong>Limanowa</strong> decydują się na wizytę u nas w <strong>Nowym Sączu</strong>? Odpowiedź jest prosta: nowoczesna technologia Bicom Optima oraz indywidualne podejście do każdego przypadku.</p>
        
        <h4>Gdzie nas znaleźć?</h4>
        <p>Nasz gabinet znajduje się w sercu <strong>Nowego Sącza</strong>, co czyni go łatwo dostępnym dla mieszkańców całego powiatu nowosądeckiego oraz sąsiednich regionów.</p>
        <ul>
          <li><strong>Nowy Sącz i okolice:</strong> Bezpośrednia obsługa na miejscu.</li>
          <li><strong>Dojazd z Krakowa:</strong> Szybka trasa przez Brzesko lub Łososinę Dolną.</li>
          <li><strong>Pacjenci z Tarnowa:</strong> Dogodne połączenie drogami regionalnymi.</li>
          <li><strong>Bliskość Limanowej:</strong> Zaledwie kilkanaście kilometrów do profesjonalnej pomocy.</li>
        </ul>

        <h3>Co nas wyróżnia?</h3>
        <p>W Biomedica stosujemy holistyczne podejście do zdrowia. Nasze terapie na alergię, pasożyty czy boreliozę opierają się na najnowszych odkryciach biofizyki. Korzystamy z certyfikowanego sprzętu medycznego, co gwarantuje bezpieczeństwo pacjentom z całej <strong>Małopolski</strong>.</p>
        
        <blockquote>"Naszym celem jest przywrócenie równowagi organizmu poprzez skuteczną eliminację obciążeń, bez względu na to, skąd do nas przyjeżdżasz."</blockquote>
      ` },
      date: new Date().toISOString(),
      slug: "biorezonans-malopolska-nowy-sacz-krakow-tarnow",
      _embedded: {
        "wp:featuredmedia": [{ source_url: "/images/blog-malopolska.png" }]
      }
    }
  };

  if (fallbacks[slug]) return fallbacks[slug];

  if (!API_URL) return null;

  try {
    const res = await fetch(`${API_URL}/posts?slug=${slug}&_embed`, {
      next: { revalidate: 60 },
      signal: AbortSignal.timeout(5000)
    });
    const posts = await res.json();
    return posts.length > 0 ? posts[0] : null;
  } catch (error) {
    console.error(`Error fetching post by slug ${slug}:`, error);
    return null;
  }
}

export async function getMainMenu() {
  if (!API_URL) return [];
  try {
    const res = await fetch(`${API_URL}/pages?per_page=10&parent=0&_embed`, { 
      next: { revalidate: 60 },
      signal: AbortSignal.timeout(5000)
    });
    if (!res.ok) return [];
    return res.json();
  } catch (error) {
    console.error("Error fetching menu:", error);
    return [];
  }
}
