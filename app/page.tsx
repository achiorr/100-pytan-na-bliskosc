import fs from "fs";
import path from "path";
import Navbar from "@/components/Navbar";
import NewsletterHero from "@/components/NewsletterHero";
import DynamicTagline from "@/components/DynamicTagline";
import WhatInside from "@/components/WhatInside";
import HowToUse from "@/components/HowToUse";
import ForWhom from "@/components/ForWhom";
import AboutAuthors from "@/components/AboutAuthors";
import OfferSection from "@/components/OfferSection";
import FAQ from "@/components/FAQ";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";

export default function Home() {
  const publicImagesDir = path.join(process.cwd(), "public", "images");
  const availableImages = fs.existsSync(publicImagesDir)
    ? fs.readdirSync(publicImagesDir)
    : [];

  return (
    <main className="w-full min-h-screen flex flex-col overflow-x-clip">
      {/* 1. Nawigacja z logo */}
      <Navbar />

      {/* 2. Hero */}
      <NewsletterHero />

      {/* 3. „Tęsknicie za sobą w zabieganej codzienności?” (granat) */}
      <DynamicTagline />

      {/* 4. „Co jest w środku” (krem) */}
      <WhatInside />

      {/* 5. „Jak korzystać ze Stopklatek” (jasny sage) */}
      <HowToUse />

      {/* 6. „Dla kogo są Stopklatki” (granat) */}
      <ForWhom />

      {/* 7. Kto przygotował te pytania / Autorzy (krem) */}
      <AboutAuthors />

      {/* 8. Pełen zestaw i cennik (jasny róż) */}
      <OfferSection />

      {/* 9. Najczęstsze pytania (krem) */}
      <FAQ />

      {/* 10. Końcowe wezwanie do zakupu (granat) */}
      <FinalCta />

      {/* 11. Stopka */}
      <Footer />
    </main>
  );
}
