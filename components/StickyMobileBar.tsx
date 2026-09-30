"use client";

import { useEffect, useState } from "react";
import { CHECKOUT_URL } from "@/lib/constants";
import { trackInitiateCheckout } from "@/lib/pixel";

export default function StickyMobileBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const checkVisibility = () => {
      const heroCta = document.getElementById("hero-cta");
      const oferta = document.getElementById("oferta");
      const finalCta = document.getElementById("final-cta");

      if (!heroCta) return;

      const heroRect = heroCta.getBoundingClientRect();
      // Pasek pojawia się dopiero po przewinięciu poza przycisk w hero
      const isPastHero = heroRect.bottom < 0;

      let isOverOfferOrFinal = false;

      if (oferta) {
        const ofertaRect = oferta.getBoundingClientRect();
        // Sprawdzamy czy sekcja oferty jest widoczna na ekranie
        if (ofertaRect.top < window.innerHeight && ofertaRect.bottom > 0) {
          isOverOfferOrFinal = true;
        }
      }

      if (finalCta) {
        const finalRect = finalCta.getBoundingClientRect();
        // Sprawdzamy czy końcowe CTA jest widoczne na ekranie
        if (finalRect.top < window.innerHeight && finalRect.bottom > 0) {
          isOverOfferOrFinal = true;
        }
      }

      setIsVisible(isPastHero && !isOverOfferOrFinal);
    };

    window.addEventListener("scroll", checkVisibility, { passive: true });
    window.addEventListener("resize", checkVisibility, { passive: true });
    checkVisibility();

    return () => {
      window.removeEventListener("scroll", checkVisibility);
      window.removeEventListener("resize", checkVisibility);
    };
  }, []);

  return (
    <aside
      aria-label="Pasek szybkiego zakupu"
      className={`md:hidden fixed bottom-0 left-0 right-0 z-50 bg-krem/95 backdrop-blur-md border-t border-granat/15 px-4 py-3 shadow-[0_-4px_20px_rgba(0,0,0,0.12)] transition-all duration-300 ${
        isVisible
          ? "translate-y-0 opacity-100 pointer-events-auto"
          : "translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <div className="max-w-md mx-auto flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="font-heading text-sm sm:text-base font-bold text-granat">Stopklatki</span>
          <span className="text-xs text-granat/60 font-semibold line-through decoration-rose-500 decoration-[1.5px]">67 zł</span>
          <span className="text-base sm:text-lg font-extrabold text-emerald-600">29 zł</span>
        </div>

        <a
          href={CHECKOUT_URL}
          onClick={() => trackInitiateCheckout()}
          className="inline-flex items-center justify-center rounded-xl bg-burgund px-5 py-2.5 text-sm font-semibold text-krem shadow-md hover:brightness-90 active:scale-95 transition-all duration-150 group shrink-0"
        >
          Kupuję
          <span className="ml-1.5 group-hover:translate-x-0.5 transition-transform">→</span>
        </a>
      </div>
    </aside>
  );
}
