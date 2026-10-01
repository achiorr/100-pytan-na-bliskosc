import Navbar from "@/components/Navbar";
import NewsletterHero from "@/components/NewsletterHero";
import DynamicTagline from "@/components/DynamicTagline";
import HowToUse from "@/components/HowToUse";
import WhatInside from "@/components/WhatInside";
import HowQuestionsCreated from "@/components/HowQuestionsCreated";
import ForWhom from "@/components/ForWhom";
import AboutAuthors from "@/components/AboutAuthors";
import OfferSection from "@/components/OfferSection";
import FAQ from "@/components/FAQ";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import StickyMobileBar from "@/components/StickyMobileBar";

export default function Home() {
  return (
    <main className="w-full min-h-screen flex flex-col">
      {/* 1. Nawigacja z logo */}
      <Navbar />

      {/* 2. Hero z demo */}
      <NewsletterHero />

      {/* Blok wprowadzający zaraz pod hero */}
      <DynamicTagline />

      {/* 3. Jak korzystać ze Stopklatek */}
      <HowToUse />

      {/* 4. Co jest w poszczególnych taliach */}
      <WhatInside />

      {/* 5. Jak powstały pytania? (Podstawy naukowe i metodologia) */}
      <HowQuestionsCreated />

      {/* 6. Dla kogo są Stopklatki */}
      <ForWhom />

      {/* 7. Kto za tym stoi? */}
      <AboutAuthors />

      {/* 8. Pełen zestaw i oferta z ceną */}
      <OfferSection />

      {/* 9. Najczęstsze pytania */}
      <FAQ />

      {/* 10. Końcowe wezwanie do zakupu */}
      <FinalCta />

      {/* 11. Stopka */}
      <Footer />

      {/* Przyklejony pasek na dole na urządzeniach mobilnych */}
      <StickyMobileBar />
    </main>
  );
}
