"use client";

import { Sparkles } from "lucide-react";
import { CHECKOUT_URL } from "@/lib/constants";
import { trackInitiateCheckout } from "@/lib/pixel";

export default function BottomCta() {
  return (
    <section className="bg-krem py-16 sm:py-24 border-b border-granat/10">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="inline-flex items-center gap-2 rounded-full bg-roz px-3.5 py-1 text-xs font-semibold text-burgund mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>ZACZNIJCIE DZIŚ</span>
        </div>

        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-granat leading-tight mb-4">
          „Stopklatki”
          <span className="block italic text-2xl sm:text-3xl text-burgund font-normal mt-1">
            Pytania, które zatrzymują.
          </span>
        </h2>

        <p className="font-sans text-base sm:text-lg text-granat/80 leading-relaxed max-w-xl mx-auto mb-8">
          Wygodne zestawy pytań, które będą prowadzić do głębokich rozmów.
        </p>

        <div className="w-full sm:w-auto inline-block">
          <a
            href={CHECKOUT_URL}
            onClick={() => trackInitiateCheckout()}
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-2xl bg-burgund px-8 sm:px-10 py-4 sm:py-5 text-base sm:text-lg font-semibold text-krem shadow-lg hover:brightness-90 hover:shadow-xl transition-all duration-200 group"
          >
            Kupuję cały zestaw
            <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </a>
          <p className="text-xs sm:text-sm text-granat/70 mt-3 font-medium">
            Jednorazowa opłata · dożywotni dostęp do 7 filmów · bez subskrypcji
          </p>
        </div>

      </div>
    </section>
  );
}
