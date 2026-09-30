import Navbar from "@/components/Navbar";
import NewsletterHero from "@/components/NewsletterHero";
import DynamicTagline from "@/components/DynamicTagline";
import HowToUse from "@/components/HowToUse";
import WhatInside from "@/components/WhatInside";
import AboutAuthors from "@/components/AboutAuthors";
import OfferSection from "@/components/OfferSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-full min-h-screen flex flex-col">
      {/* 1. Nawigacja z logo */}
      <Navbar />

      {/* 2. Główna sekcja Hero ze środkowym interaktywnym odtwarzaczem i CTA */}
      <NewsletterHero />

      {/* 3. Dynamiczny napis z rotującymi końcówkami (typewriter) */}
      <DynamicTagline />

      {/* 4. 5 prostych zasad jak korzystać ze stopklatek */}
      <HowToUse />

      {/* 5. 7 talii — 700 pytań na bliskość (co w środku) */}
      <WhatInside />

      {/* 6. O autorach (@szczesliwi_razem) */}
      <AboutAuthors />

      {/* 7. Pełna sekcja oferty */}
      <OfferSection />

      {/* 8. Stopka */}
      <Footer />
    </main>
  );
}
