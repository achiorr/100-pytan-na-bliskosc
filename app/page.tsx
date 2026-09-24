import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import NewsletterHero from "@/components/NewsletterHero";
import WhatInside from "@/components/WhatInside";
import HowToUse from "@/components/HowToUse";
import AboutAuthors from "@/components/AboutAuthors";
import BottomCta from "@/components/BottomCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-full min-h-screen flex flex-col">
      {/* 1. Górny pasek */}
      <TopBar />

      {/* 2. Nawigacja z logo */}
      <Navbar />

      {/* 3. Główna sekcja z pobraniem 100 pytań i okładką PDF */}
      <NewsletterHero />

      {/* 4. 10 kategorii pytań (co w środku) */}
      <WhatInside />

      {/* 5. 5 prostych zasad jak korzystać */}
      <HowToUse />

      {/* 6. Krótko o autorach (@szczesliwi_razem) */}
      <AboutAuthors />

      {/* 7. Dolne CTA */}
      <BottomCta />

      {/* 8. Stopka */}
      <Footer />
    </main>
  );
}
