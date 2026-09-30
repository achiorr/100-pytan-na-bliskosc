"use client";

import { CHECKOUT_URL } from "@/lib/constants";
import { trackInitiateCheckout } from "@/lib/pixel";

export default function FinalCta() {
  return (
    <section id="final-cta" className="bg-kremDim py-16 sm:py-24 border-b border-granat/10">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-granat leading-tight mb-4">
          Zróbcie pauzę na dobrą rozmowę
        </h2>

        <p className="font-sans text-base sm:text-lg text-granat/85 leading-relaxed max-w-xl mx-auto mb-8">
          7 talii, 700 pytań. Wystarczy jedna pauza, żeby zacząć.
        </p>

        <div className="w-full sm:w-auto inline-flex flex-col items-center">
          <a
            href={CHECKOUT_URL}
            onClick={() => trackInitiateCheckout()}
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-2xl bg-burgund px-8 sm:px-10 py-4 sm:py-5 text-base sm:text-lg font-semibold text-krem shadow-lg hover:brightness-90 hover:shadow-xl transition-all duration-200 group"
          >
            Kupuję cały zestaw za 29 zł
            <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </a>

          <p className="text-xs sm:text-sm text-granat/80 mt-3.5 font-medium text-center">
            29 zł · cena premierowa · płacicie raz, bez subskrypcji
          </p>
          <p className="text-[11px] sm:text-xs text-granat/65 mt-1 font-medium text-center">
            Zaraz po płatności dostaniecie maila z dostępem i instrukcją.
          </p>
        </div>

      </div>
    </section>
  );
}
