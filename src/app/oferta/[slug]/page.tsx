"use client";

import { useParams, notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const serviceData: Record<string, any> = {
  "usuwanie-alergii": {
    title: "Usuwanie Alergii",
    headingCauses: "Z czego bierze się alergia?",
    headingTreatment: "Jak skutecznie leczyć alergię?",
    subtitle: "Jak skutecznie leczyć alergie w Nowym Sączu i Małopolsce?",
    description: "Biorezonans to jedna z najskuteczniejszych metod walki z alergiami, pozwalająca na trwałe wyeliminowanie reakcji uczuleniowych bez użycia leków i igieł.",
    image: "/images/palenie_cond.png",
    whatIsIt: "Alergia to nadreaktywność układu odpornościowego na substancje, które dla zdrowego organizmu są neutralne.",
    causes: "Z czego bierze się alergia? Przyczyny mogą być genetyczne, ale często wynikają z przeciążenia organizmu toksynami, osłabienia jelit lub ciągłego kontaktu z zanieczyszczonym powietrzem. W regionie Małopolski i Nowego Sącza najczęstszymi winowajcami są pyłki traw, roztocza oraz alergeny pokarmowe.",
    howToTreat: "Jak leczyć alergię skutecznie? W naszym gabinecie stosujemy bezbolesną metodę Bicom Optima. Diagnozujemy konkretne obciążenia i stosujemy programy odczulające, które wygaszają błędną reakcję organizmu. To idealne rozwiązanie dla mieszkańców okolic Krakowa szukających metod naturalnych.",
    howItHelps: "Metoda Bicom Optima pozwala na odczytanie 'częstotliwości' alergenu i przesłanie do organizmu pacjenta fali odwróconej, co prowadzi do wyciszenia błędnej reakcji immunologicznej. Jest to proces bezpieczny i bezbolesny.",
    benefits: ["Brak skutków ubocznych", "Skuteczność przy alergiach wziewnych i pokarmowych", "Bezbolesne testy i zabiegi"],
    seoText: "Biomedica to lider w terapii biorezonansem w regionie Nowy Sącz. Nasze usługi dla alergików przyciągają pacjentów z całej Małopolski."
  },
  "leczenie-azs": {
    title: "Atopowe Zapalenie Skóry (AZS)",
    headingCauses: "Z czego bierze się AZS?",
    headingTreatment: "Jak skutecznie leczyć AZS?",
    subtitle: "Z czego bierze się AZS i jak leczyć je naturalnie w Małopolsce?",
    description: "AZS to przewlekła choroba skóry, która wymaga kompleksowego podejścia. Biorezonans pomaga wyciszyć stany zapalne i zidentyfikować ukryte przyczyny świądu.",
    image: "/images/azs_cond.png",
    whatIsIt: "Atopowe zapalenie skóry (AZS) to uciążliwy problem dermatologiczny, objawiający się suchością i stanami zapalnymi.",
    causes: "Z czego bierze się AZS? Najczęściej to wypadkowa genetyki i obciążeń środowiskowych. U pacjentów z Nowego Sącza często diagnozujemy ukryte nietolerancje pokarmowe oraz obciążenia toksynami, które nasilają objawy skórne.",
    howToTreat: "Jak leczyć AZS skutecznie? Skupiamy się na odblokowaniu procesów wydalniczych organizmu i wygaszaniu alergii. Biorezonans w naszym gabinecie to bezpieczna droga do gładkiej skóry dla mieszkańców Małopolski.",
    howItHelps: "Terapia biorezonansowa wspomaga detoksykację oraz regulację układu immunologicznego, co potwierdzają pacjenci z Nowego Sącza i okolic Krakowa.",
    benefits: ["Regeneracja bariery naskórkowej", "Wyciszenie stanów zapalnych", "Identyfikacja alergenów kontaktowych"],
    seoText: "Szukasz pomocy przy AZS? Nasz gabinet w Nowym Sączu oferuje nowoczesne terapie dla pacjentów z Małopolski."
  },
  "leczenie-bolow-stawowych": {
    title: "Bóle Mięśniowe i Stawowe",
    headingCauses: "Skąd biorą się bóle stawów i mięśni?",
    headingTreatment: "Jak skutecznie leczyć bóle stawów?",
    subtitle: "Jak leczyć bóle kręgosłupa i stawów w Nowym Sączu?",
    description: "Terapia przeciwbólowa biorezonansem to bezpieczna alternatywa dla farmakologii i szybki powrót do sprawności.",
    image: "/images/bole_cond.png",
    whatIsIt: "Bóle stawów i mięśni dotykają coraz większą grupę osób w Małopolsce, niezależnie od wieku.",
    causes: "Z czego bierze się ból? Przyczyną mogą być przeciążenia, ale często to stany zapalne wywołane przez patogeny (np. krętki boreliozy) lub zakwaszenie organizmu.",
    howToTreat: "Jak leczyć ból stawów bez leków? Biorezonans poprawia mikrokrążenie i stymuluje regenerację tkanek miękkich. To sprawdzona metoda w naszym gabinecie w Nowym Sączu.",
    howItHelps: "Biorezonans stymuluje procesy naprawcze w komórkach i działa silnie przeciwzapalnie, co jest cenione przez aktywnych mieszkańców regionu.",
    benefits: ["Szybka ulga w bólu", "Poprawa ruchomości stawów", "Brak obciążenia żołądka lekami"],
    seoText: "Skutecznie zwalczamy bóle kręgosłupa i stawów w Nowym Sączu. Zapraszamy pacjentów z okolic Krakowa."
  },
  "leczenie-boleriozy": {
    title: "Borelioza i Koinfekcje",
    headingCauses: "Skąd bierze się borelioza?",
    headingTreatment: "Jak skutecznie leczyć boreliozę?",
    subtitle: "Jak leczyć skutki ukąszenia kleszcza w Małopolsce?",
    description: "Borelioza to trudny przeciwnik. Biorezonans pomaga osłabić bakterie i wzmocnić naturalne mechanizmy obronne organizmu.",
    image: "/images/borelioza_cond.png",
    whatIsIt: "Borelioza (choroba z Lyme) przenoszona przez kleszcze, często towarzyszą jej uciążliwe koinfekcje.",
    causes: "Z czego bierze się borelioza? To choroba bakteryjna, której krętki potrafią ukrywać się głęboko w tkankach. W Małopolsce, rejonie zalesionym, liczba zachorowań jest szczególnie wysoka.",
    howToTreat: "Jak leczyć boreliozę wspomagająco? Stosujemy programy częstotliwościowe osłabiające patogeny i wspierające detoks. Pomagamy mieszkańcom Nowego Sącza odzyskać siły.",
    howItHelps: "W Biomedica Nowy Sącz stosujemy programy celowane, które osłabiają aktywność krętków Borrelia i wspierają regenerację układu nerwowego.",
    benefits: ["Osłabianie patogenów", "Wzrost energii życiowej", "Wsparcie układu nerwowego"],
    seoText: "Borelioza to poważny problem w Małopolsce. Nasz gabinet w Nowym Sączu oferuje holistyczne wsparcie."
  },
  "leczenie-astmy": {
    title: "Leczenie Astmy",
    headingCauses: "Skąd bierze się astma?",
    headingTreatment: "Jak skutecznie leczyć astmę?",
    subtitle: "Jak leczyć duszności i astmę w Nowym Sączu?",
    description: "Naturalne wsparcie dla układu oddechowego, pomagające zredukować duszności i poprawić komfort życia.",
    image: "/images/astma_cond.png",
    whatIsIt: "Astma oskrzelowa to choroba zapalna dróg oddechowych, często wywołana przez czynniki środowiskowe.",
    causes: "Z czego bierze się astma? Przyczyną jest chroniczny stan zapalny oskrzeli, często wyzwalany przez smog w Małopolsce lub ukryte alergeny wziewne.",
    howToTreat: "Jak leczyć astmę naturalnie? Biorezonans wycisza reakcję zapalną i oczyszcza organizm z toksyn. Pacjenci z Nowego Sącza odczuwają ulgę już po kilku zabiegach.",
    howItHelps: "Biorezonans pomaga w oczyszczaniu oskrzeli z zanieczyszczeń oraz wyciszaniu reakcji alergicznych wywołujących bolesne skurcze.",
    benefits: ["Zmniejszenie częstotliwości napadów", "Oczyszczenie dróg oddechowych", "Poprawa kondycji fizycznej"],
    seoText: "Biomedica Nowy Sącz oferuje wsparcie w terapii astmy dla pacjentów z całej Małopolski."
  },
  "pasozyty": {
    title: "Pasożyty i Detoksykacja",
    headingCauses: "Skąd biorą się pasożyty?",
    headingTreatment: "Jak skutecznie leczyć pasożyty?",
    subtitle: "Jak leczyć obciążenia pasożytnicze w Małopolsce?",
    description: "Obecność pasożytów może być przyczyną wielu niewyjaśnionych dolegliwości. Biorezonans pozwala na ich bezinwazyjną lokalizację.",
    image: "/images/pasozyty_cond.png",
    whatIsIt: "Pasożyty to problem powszechny, który może powodować chroniczne zmęczenie, bóle brzucha czy alergie.",
    causes: "Z czego biorą się pasożyty? Najczęściej z nieumytych owoców lub kontaktu ze zwierzętami. Wiele osób z Krakowa i Nowego Sącza nieświadomie żyje z takimi obciążeniami.",
    howToTreat: "Jak leczyć pasożyty bez obciążającej chemii? Biorezonans niszczy patogeny specyficznymi drganiami. To najbezpieczniejsza metoda dostępna w naszym regionie.",
    howItHelps: "Urządzenie Bicom Optima emituje sygnały niszczące dla pasożytów, co wspiera naturalną detoksykację i szybki wzrost sil witalnych.",
    benefits: ["Usunięcie przyczyn zmęczenia", "Poprawa odporności", "Przywrócenie równowagi trawiennej"],
    seoText: "Oczyszczanie z pasożytów w Nowym Sączu. Profesjonalna diagnostyka dla Małopolski."
  },
  "bakterie-i-wirusy": {
    title: "Bakterie i Wirusy",
    headingCauses: "Skąd biorą się infekcje i patogeny?",
    headingTreatment: "Jak skutecznie leczyć infekcje?",
    subtitle: "Jak leczyć nawracające infekcje w Nowym Sączu?",
    description: "Wzmocnij swój układ odpornościowy poprzez skuteczną eliminację wirusów i bakterii metodą biorezonansową.",
    image: "/images/mikroorganizmy_cond.png",
    whatIsIt: "Nawracające infekcje czy przewlekłe stany zapalne to sygnały, że organizm nie radzi sobie z patogenami.",
    causes: "Z czego biorą się infekcje? Często to skutek 'uśpionych' wirusów lub bakterii odpornych na antybiotyki. Małopolscy pacjenci często szukają pomocy przy nawracających anginach.",
    howToTreat: "Jak leczyć infekcje wirusowe skutecznie? Biorezonans precyzyjnie uderza w konkretne szczepy patogenów, stymulując odporność do walki. Zapraszamy do Nowego Sącza.",
    howItHelps: "Terapia biorezonansowa wysyła specyficzne drgania, które osłabiają strukturę patogenów, ułatwiając ich naturalną eliminację.",
    benefits: ["Koniec z nawracającymi infekcjami", "Wzmocniona odporność", "Naturalna detoksykacja"],
    seoText: "Biorezonans na wirusy i bakterie w Nowym Sączu. Zapraszamy pacjentów z Małopolski."
  },
  "candida-i-grzyby": {
    title: "Candida i Grzyby",
    headingCauses: "Z czego bierze się grzybica?",
    headingTreatment: "Jak skutecznie leczyć grzybicę?",
    subtitle: "Z czego bierze się grzybica i jak ją leczyć w Nowym Sączu?",
    description: "Grzybica ogólnoustrojowa to plaga naszych czasów. Pomożemy Ci przywrócić równowagę biologiczną organizmu.",
    image: "/images/grzybica_cond.png",
    whatIsIt: "Przerost Candida albicans oraz obecność pleśni w organizmie prowadzi do osłabienia i problemów pokarmowych.",
    causes: "Z czego bierze się candida? Nadmiar cukru, stres i antybiotyki to główne przyczyny. Mieszkańcy Małopolski często zmagają się z tym problemem przez wiele lat.",
    howToTreat: "Jak leczyć grzybicę skutecznie? Kluczowa jest dieta i wygaszanie aktywności grzybów biorezonansem. Nowoczesna metoda dostępna w Nowym Sączu to przełom w terapii.",
    howItHelps: "Za pomocą Bicom Optima wyciszamy stany grzybicze i wspomagamy eliminację toksyn produkowanych przez pleśnie.",
    benefits: ["Redukcja apetytu na cukier", "Poprawa funkcji jelit", "Zniknięcie mgły mózgowej"],
    seoText: "Skuteczna terapia Candida w Nowym Sączu. Profesjonalna pomoc dla pacjentów z Małopolski."
  },
  "kurzajki": {
    title: "Kurzajki i Brodawki",
    headingCauses: "Skąd biorą się kurzajki?",
    headingTreatment: "Jak skutecznie leczyć kurzajki?",
    subtitle: "Jak leczyć kurzajki bezboleśnie w Nowym Sączu?",
    description: "Zamiast wymrażania, postaw na stymulację układu odpornościowego do walki z wirusem wywołującym zmiany.",
    image: "/images/kurzajki_cond.png",
    whatIsIt: "Kurzajki to zmiany wywołane przez wirus brodawczaka ludzkiego (HPV), często bolesne i nieestetyczne.",
    causes: "Z czego biorą się kurzajki? To infekcja wirusowa nabyta przez kontakt bezpośredni. W Nowym Sączu to częsty problem zwłaszcza u dzieci i młodzieży.",
    howToTreat: "Jak leczyć kurzajki skutecznie? Biorezonans uderza w przyczynę wirusową, aktywując organizm do usunięcia zmiany. To najłagodniejsza metoda w Małopolsce.",
    howItHelps: "Biorezonans w Biomedica Nowy Sącz koncentruje się na osłabieniu wirusa HPV i wzmocniu odporności lokalnej skóry.",
    benefits: ["Metoda całkowicie bezbolesna", "Brak blizn i ran", "Trwałe rozwiązanie przyczyny"],
    seoText: "Bezbolesne usuwanie kurzajek w Nowym Sączu. Zapraszamy pacjentów z całej Małopolski."
  },
  "problemy-kobiece": {
    title: "Problemy Kobiece",
    headingCauses: "Skąd biorą się problemy hormonalne?",
    headingTreatment: "Jak skutecznie leczyć problemy kobiece?",
    subtitle: "Jak leczyć zaburzenia hormonalne w Nowym Sączu?",
    description: "Wsparcie in regulacji cyklu i łagodzeniu objawów menopauzy nowoczesną metodą Bicom Optima.",
    image: "/images/kobiece_cond.png",
    whatIsIt: "Zaburzenia hormonalne powodują bolesne miesiączki, PMS czy uciążliwe objawy menopauzy.",
    causes: "Z czego biorą się problemy hormonalne? Stres, toksyny środowiskowe i brak równowagi w narządach to główne powody zgłoszeń pacjentek z Małopolski.",
    howToTreat: "Jak leczyć problemy kobiece naturalnie? Biorezonans harmonizuje pracę układu hormonalnego. Panie z Nowego Sącza cenią tę metodę za brak skutków ubocznych.",
    howItHelps: "Biorezonans pomaga w harmonizacji pracy układu dokrewnego i wyciszaniu stanów zapalnych miednicy mniejszej.",
    benefits: ["Łagodzenie objawów PMS", "Wsparcie przy menopauzie", "Regulacja cyklu miesięcznego"],
    seoText: "Problemy kobiece? Odwiedź nasz gabinet w Nowym Sączu. Profesjonalny biorezonans dla kobiet."
  },
  "uporczywy-kaszel": {
    title: "Uporczywy Kaszel",
    headingCauses: "Skąd bierze się uporczywy kaszel?",
    headingTreatment: "Jak skutecznie leczyć kaszel?",
    subtitle: "Jak leczyć przewlekły kaszel w Małopolsce?",
    description: "Jeżeli tradycyjne syropy nie działają, przyczyna może leżeć głębiej. Znajdziemy ją i pomożemy Ci wrócić do zdrowia.",
    image: "/images/kaszel_cond.png",
    whatIsIt: "Kaszel trwający tygodniami może być wynikiem ukrytych alergii, pasożytów lub obciążeń płuc.",
    causes: "Z czego bierze się kaszel? Często to efekt smogu w regionie Małopolskim lub obecności pleśni i grzybów w otoczeniu pacjenta.",
    howToTreat: "Jak leczyć kaszel trwale? Diagnozujemy źródło drażnienia dróg oddechowych i stosujemy programy celowane. Zapraszamy do gabinetu w Nowym Sączu.",
    howItHelps: "W Biomedica Nowy Sącz sprawdzamy, co drażni drogi oddechowe i stosujemy programy oczyszczające układ oddechowy.",
    benefits: ["Szybka ulga w dusznościach", "Oczyszczenie oskrzeli", "Naturalne wsparcie odporności"],
    seoText: "Nawracający kaszel? Sprawdź przyczynę w Biomedica Nowy Sącz. Pomoc dla Małopolski."
  },
  "terapia-antynikotynowa": {
    title: "Terapia Antynikotynowa",
    headingCauses: "Z czego bierze się nałóg nikotynowy?",
    headingTreatment: "Jak skutecznie rzucić palenie?",
    subtitle: "Jak rzucić palenie w Nowym Sączu – skuteczna metoda",
    description: "Najskuteczniejsza metoda rzucania palenia bez głodu nikotynowego i stresu, dostępna w Nowym Sączu.",
    image: "/images/palenie_cond.png",
    whatIsIt: "Nałóg nikotynowy to silna zależność fizyczna, która utrudnia normalne funkcjonowanie.",
    causes: "Z czego bierze się trudność w rzucaniu? To chemia mózgu uzależniona od nikotyny. Mieszkańcy Małopolski często szukają u nas ostatniej deski ratunku.",
    howToTreat: "Jak rzucić palenie skutecznie? Biorezonans wygasza głód nikotynowy na poziomie fizycznym w 60 minut. To najchętniej wybierana metoda w regionie.",
    howItHelps: "Biorezonans wygasza potrzebę sięgnięcia po papierosa, co pozwala na trwałe rzucenie nałogu już po jednej sesji.",
    benefits: ["Skuteczność ponad 80%", "Tylko jedna sesja (60 min)", "Brak stresu i przyrostu wagi"],
    seoText: "Skuteczne rzucanie palenia Nowy Sącz. Dołącz do tysięcy osób z Małopolski, które wygrały z nałogiem."
  }
};

export default function ServiceDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const data = serviceData[slug];

  if (!data) {
    notFound();
  }

  return (
    <main>
      {/* Hero Section */}
      <section className="section" style={{ 
        background: 'linear-gradient(135deg, #f7fcfb 0%, #e8f5f3 100%)', 
        padding: '10rem 0 6rem 0',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <span className="badge">Terapia Biorezonansowa</span>
          <nav style={{ margin: '1rem 0', fontSize: '0.85rem', opacity: 0.7 }}>
            <Link href="/" style={{ color: 'inherit' }}>Home</Link>
            <span style={{ margin: '0 0.5rem' }}>/</span>
            <Link href="/oferta" style={{ color: 'inherit' }}>Oferta</Link>
            <span style={{ margin: '0 0.5rem' }}>/</span>
            <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>{data.title}</span>
          </nav>
          <h1 style={{ marginBottom: '1.5rem', lineHeight: '1.1' }}>
            {data.title}
          </h1>
          <p style={{ fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', color: 'var(--primary)', fontWeight: 'bold', marginBottom: '2rem' }}>
            {data.subtitle}
          </p>
          <p style={{ fontSize: '1.2rem', color: '#555', maxWidth: '800px', lineHeight: '1.8' }}>
            {data.description}
          </p>
          <div style={{ marginTop: '3rem', display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            <Link href="/kontakt" className="button">Zarezerwuj termin</Link>
            <Link href="/oferta" className="button button-outline">Wróć do listy usług</Link>
          </div>
        </div>
        <div className="blob-shape" style={{ width: '40%', height: '100%', top: '-20%', right: '-10%', opacity: 0.1, background: 'var(--primary)' }} />
      </section>

      {/* Content Section */}
      <section className="section bg-white" style={{ paddingBottom: '2rem' }}>
        <div className="container">
          <div className="grid grid-2 mobile-stack" style={{ gap: '6rem', alignItems: 'start', marginBottom: '4rem' }}>
            <div>
              <h2 style={{ marginBottom: '1.5rem', color: 'var(--secondary)' }}>{data.headingCauses}</h2>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.9', color: '#444', marginBottom: '3rem' }}>
                {data.causes} {data.whatIsIt}
              </p>
              
              <h2 style={{ marginBottom: '1.5rem', color: 'var(--secondary)' }}>{data.headingTreatment}</h2>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.9', color: '#444' }}>
                {data.howToTreat} {data.howItHelps}
              </p>
            </div>

            <div style={{ position: 'relative' }}>
              <div className="image-mask" style={{ height: '600px', borderRadius: '40px', overflow: 'hidden' }}>
                <Image 
                  src={data.image} 
                  alt={data.title} 
                  fill 
                  style={{ objectFit: 'cover' }} 
                />
              </div>
              <div className="blob-shape" style={{ width: '120%', height: '120%', top: '-10%', left: '-10%', opacity: 0.1, zIndex: -1, background: 'var(--primary)' }} />
            </div>
          </div>

          {/* Benefits Card - Moved outside of the 2-column grid to take full width */}
          <div className="card" style={{ padding: '3rem', backgroundColor: '#f0fcfb', border: 'none', borderRadius: '30px', marginTop: '3rem' }}>
            <h3 style={{ marginBottom: '2rem', color: 'var(--primary)', fontSize: '1.5rem', textAlign: 'center' }}>Dlaczego warto wybrać naszą terapię?</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
              {data.benefits.map((benefit: string, i: number) => (
                <div key={i} style={{ display: 'flex', gap: '1.2rem', alignItems: 'center' }}>
                  <div style={{ 
                    width: '32px', 
                    height: '32px', 
                    backgroundColor: 'var(--primary)', 
                    borderRadius: '50%', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <span style={{ fontWeight: '500', color: 'var(--secondary)', fontSize: '1.1rem' }}>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SEO & Local Trust Section */}
      <section className="section" style={{ backgroundColor: '#f8fbfc' }}>
        <div className="container text-center">
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h2 style={{ marginBottom: '2rem' }}>Biomedica – Twój gabinet w Nowym Sączu</h2>
            <p style={{ fontSize: '1.1rem', color: '#555', lineHeight: '1.8', marginBottom: '3rem' }}>
              {data.seoText} Nasza klinika jest wyposażona w najnowocześniejsze urządzenie Bicom Optima, a nasi specjaliści stale podnoszą swoje kwalifikacje, aby oferować najwyższy standard opieki w Małopolsce.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginTop: '4rem' }}>
               <div className="card" style={{ padding: '2rem', textAlign: 'center' }}>
                 <h4 style={{ color: 'var(--primary)' }}>Nowy Sącz</h4>
                 <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>Lokalizacja w sercu miasta</p>
               </div>
               <div className="card" style={{ padding: '2rem', textAlign: 'center' }}>
                 <h4 style={{ color: 'var(--primary)' }}>Okolice Kraków</h4>
                 <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>Szybki dojazd drogą krajową</p>
               </div>
               <div className="card" style={{ padding: '2rem', textAlign: 'center' }}>
                 <h4 style={{ color: 'var(--primary)' }}>Małopolska</h4>
                 <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>Obsługujemy cały region</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section bg-white" style={{ padding: '6rem 0' }}>
         <div className="container">
            <div className="card" style={{ 
              background: 'linear-gradient(135deg, var(--secondary) 0%, #1a2a3a 100%)',
              padding: '5rem',
              borderRadius: '50px',
              color: 'white',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{ position: 'relative', zIndex: 2 }}>
                <h2 style={{ color: 'white', marginBottom: '1.5rem' }}>Rozpocznij drogę do zdrowia już dziś</h2>
                <p style={{ fontSize: '1.25rem', opacity: 0.9, marginBottom: '3rem', maxWidth: '700px', margin: '0 auto 3rem' }}>
                  Nie zwlekaj z decyzją. Skontaktuj się z nami i umów na pierwszą wizytę diagnostyczną w Nowym Sączu.
                </p>
                <Link href="/kontakt" className="button" style={{ padding: '1.2rem 4rem', fontSize: '1.2rem' }}>Skontaktuj się z nami</Link>
              </div>
              <div className="blob-shape" style={{ position: 'absolute', top: '-50%', right: '-20%', width: '80%', height: '200%', background: 'var(--primary)', opacity: 0.1 }} />
            </div>
         </div>
      </section>
    </main>
  );
}
