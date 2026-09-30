import Navbar from "@/components/Navbar";
import NewsletterHero from "@/components/NewsletterHero";
import DynamicTagline from "@/components/DynamicTagline";
import HowToUse from "@/components/HowToUse";
import WhatInside from "@/components/WhatInside";
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

      {/* Blok dynamicznego napisu zaraz pod hero */}
      <DynamicTagline />

      {/* 3. Jak korzystać ze Stopklatek */}
      <HowToUse />

      {/* 4. Co jest w poszczególnych taliach */}
      <WhatInside />

      {/* 5. Dla kogo są Stopklatki */}
      <ForWhom />

      {/* 6. Kto za tym stoi? */}
      <AboutAuthors />

      {/* 7. Pełen zestaw i oferta z ceną */}
      <OfferSection />

      {/* 8. Najczęstsze pytania */}
      <FAQ />

      {/* 9. Końcowe wezwanie do zakupu */}
      <FinalCta />

      {/* 10. Stopka */}
      <Footer />

      {/* Przyklejony pasek na dole na urządzeniach mobilnych */}
      <StickyMobileBar />
    </main>
  );
}
