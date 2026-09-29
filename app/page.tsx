import Navbar from "@/components/Navbar";
import NewsletterHero from "@/components/NewsletterHero";
import HowToUse from "@/components/HowToUse";
import WhatInside from "@/components/WhatInside";
import AboutAuthors from "@/components/AboutAuthors";
import OfferSection from "@/components/OfferSection";
import BottomCta from "@/components/BottomCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-full min-h-screen flex flex-col">
      {/* 1. Nawigacja z logo i CTA */}
      <Navbar />

      {/* 3. Główna sekcja Hero z darmowym odtwarzaczem "Na rozgrzewkę" i CTA 19 zł */}
      <NewsletterHero />

      {/* 4. 5 prostych zasad jak korzystać z filmów */}
      <HowToUse />

      {/* 5. 7 talii — 700 pytań na bliskość (co w środku) */}
      <WhatInside />

      {/* 6. O autorach (@szczesliwi_razem) */}
      <AboutAuthors />

      {/* 7. Pełna sekcja oferty (cena 19 zł + co w środku + bonusy) */}
      <OfferSection />

      {/* 8. Końcowe CTA */}
      <BottomCta />

      {/* 9. Stopka */}
      <Footer />
    </main>
  );
}
