"use client";

import {
  Video,
  Infinity,
  Smartphone,
  Zap,
  CheckCircle2,
} from "lucide-react";
import { CHECKOUT_URL } from "@/lib/constants";
import { trackInitiateCheckout } from "@/lib/pixel";

export default function OfferSection() {
  const whatYouGet = [
    {
      icon: Video,
      title: "7 filmów (700 pytań)",
      desc: "Komplet 7 tematycznych talii — od lekkiego startu po głęboką intymność.",
    },
    {
      icon: Infinity,
      title: "Dożywotni dostęp",
      desc: "Płacisz raz i wracasz do pytań kiedy tylko chcecie — bez żadnych limitów.",
    },
    {
      icon: Smartphone,
      title: "Odtwarzanie na telefonie i TV",
      desc: "Pionowy format 9:16 dopasowany do ekranu smartfona i dużego telewizora.",
    },
    {
      icon: Zap,
      title: "Gotowe do puszczenia w kilka sekund",
      desc: "Działa jak prosta losowarka — wystarczy nacisnąć pauzę w dowolnym momencie.",
    },
  ];

  return (
    <section id="oferta" className="bg-kremDim py-16 sm:py-24 border-b border-granat/10">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        
        {/* Nagłówek sekcji */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-burgund uppercase tracking-wider text-xs sm:text-sm font-semibold mb-2.5 block">
            PEŁEN ZESTAW
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-granat leading-tight">
            Wszystkie 7 talii w jednym pakiecie
          </h2>
          <p className="text-base sm:text-lg text-granat/80 mt-3.5 leading-relaxed">
            Pobierz wszystkie 7 talii - w sumie 700 pytań na bliskość i miej pod ręką gotowy sposób na dobrą rozmowę we dwoje.
          </p>
        </div>

        {/* 1. Kafelki "Co dostajesz" */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-12">
          {whatYouGet.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-granat/10 bg-krem p-5 sm:p-6 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-burgund/10 text-burgund flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading font-bold text-base text-granat mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-granat/75 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* 2. Pudełko oferty i CTA */}
        <div className="max-w-xl mx-auto rounded-3xl border-2 border-granat/20 bg-krem p-8 sm:p-10 shadow-xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-burgund bg-roz px-3 py-1 rounded-full inline-block mb-4">
            PEŁNY PAKIET
          </span>

          <div className="mb-6">
            <h4 className="font-heading text-2xl sm:text-3xl font-bold text-granat block">
              Zestaw 7 talii Stopklatek
            </h4>
            <span className="text-xs sm:text-sm text-granat/70 font-medium mt-1.5 block">
              jednorazowy, bezterminowy dostęp · bez subskrypcji
            </span>
          </div>

          <div className="space-y-2.5 text-xs sm:text-sm text-granat/85 text-left max-w-sm mx-auto mb-8">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Komplet 7 talii z pytaniami (700 pytań)</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Dożywotni dostęp i odtwarzanie na telefonie / TV</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Natychmiastowy dostęp po zakupie</span>
            </div>
          </div>

          <a
            href={CHECKOUT_URL}
            onClick={() => trackInitiateCheckout()}
            className="w-full inline-flex items-center justify-center rounded-2xl bg-burgund px-8 py-4 text-base sm:text-lg font-semibold text-krem shadow-lg hover:brightness-90 hover:shadow-xl transition-all duration-200 group"
          >
            Kupuję cały zestaw
            <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </a>

          <p className="text-[11px] text-granat/60 mt-3.5">
            🔒 Bezpieczna płatność online · Natychmiastowy dostęp po zakupie
          </p>
        </div>

      </div>
    </section>
  );
}
