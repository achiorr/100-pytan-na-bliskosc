"use client";

import { CHECKOUT_URL } from "@/lib/constants";
import { trackCtaClick } from "@/lib/pixel";

export default function FinalCta() {
  return (
    <section id="final-cta" className="bg-kremDim py-16 sm:py-24 border-b border-granat/10">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-granat leading-tight mb-4">
          Zróbcie pauzę na dobrą rozmowę
        </h2>

        <p className="font-sans text-base sm:text-lg text-granat/85 leading-relaxed max-w-xl mx-auto mb-6 sm:mb-8">
          7 talii, 700 pytań. Wystarczy jedna pauza, żeby zacząć.
        </p>

        {/* Blok cenowy */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="text-xl sm:text-2xl text-granat/70 font-bold line-through decoration-rose-500 decoration-[2.5px]">
            67 zł
          </span>
          <span className="font-heading text-4xl sm:text-5xl font-extrabold text-emerald-600 tracking-tight">
            29 zł
          </span>
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100/90 px-2.5 py-1 rounded-full border border-emerald-300/80 shadow-xs">
            Cena premierowa
          </span>
        </div>

        <div className="w-full sm:w-auto inline-flex flex-col items-center">
          <a
            href={CHECKOUT_URL}
            onClick={() => trackCtaClick("stopka")}
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-2xl bg-burgund px-8 sm:px-10 py-4 sm:py-5 text-base sm:text-lg font-semibold text-krem shadow-lg hover:brightness-90 hover:shadow-xl transition-all duration-200 group"
          >
            Kupuję cały zestaw za 29 zł
            <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </a>

          <p className="text-xs sm:text-sm text-granat/80 mt-3.5 font-medium text-center">
            Płacicie raz, bez subskrypcji
          </p>
          <p className="text-[11px] sm:text-xs text-granat/65 mt-1 font-medium text-center">
            Zaraz po płatności dostaniecie maila z dostępem i instrukcją.
          </p>
        </div>

      </div>
    </section>
  );
}
