"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { trackFaqOpen } from "@/lib/pixel";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "Na czym działają Stopklatki?",
      a: "Możesz je pobrać na telefon i będą działały jak aplikacja, ale możesz mieć też do nich dostęp na dowolnym urządzeniu z przeglądarką.",
    },
    {
      q: "Jak dostanę dostęp?",
      a: "Zaraz po płatności dostaniecie maila z dostępem. Będzie też w nim dokładna instrukcja jak zainstalować aplikację.",
    },
    {
      q: "Czy to subskrypcja?",
      a: "Nie. Płacicie raz i macie dostęp bez limitu czasu.",
    },
    {
      q: "Czy trzeba odpowiadać na każde pytanie?",
      a: "Nie. Jeśli pytanie wam nie pasuje, po prostu zatrzymajcie film jeszcze raz. Bliskość rośnie w poczuciu bezpieczeństwa, nie przymusu.",
    },
  ];

  const toggle = (idx: number) => {
    if (openIndex !== idx) {
      trackFaqOpen(faqs[idx].q);
    }
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="bg-krem py-14 sm:py-20 border-b border-granat/10">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <span className="text-burgund uppercase tracking-wider text-xs sm:text-sm font-semibold mb-2.5 block">
            PYTANIA
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-granat leading-tight">
            Najczęstsze pytania
          </h2>
        </div>

        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-granat/10 bg-kremDim overflow-hidden transition-all duration-200 hover:border-burgund/30"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full px-6 py-4 sm:py-5 text-left flex items-center justify-between gap-4 font-heading font-bold text-base sm:text-lg text-granat hover:text-burgund transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-burgund shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-sm sm:text-base text-granat/85 leading-relaxed border-t border-granat/5">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
