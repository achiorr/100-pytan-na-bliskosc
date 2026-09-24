"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Czy ten plik PDF ze 100 pytaniami jest bezpłatny?",
      a: "Tak, przewodnik jest w 100% bezpłatny. Nie musisz podawać żadnych danych karty.",
    },
    {
      q: "Kiedy otrzymam plik?",
      a: "Natychmiast po wpisaniu adresu e-mail otrzymasz wiadomość z bezpośrednim linkiem do pobrania pliku PDF na telefon lub komputer.",
    },
    {
      q: "Czy musimy odpowiadać na wszystkie pytania po kolei?",
      a: "Zdecydowanie nie! Wybierzcie jedno pytanie, które akurat Was zaciekawi — przy porannej kawie, na spacerze lub wieczorem. Wystarczy kilka minut.",
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="bg-kremDim py-12 sm:py-16 border-b border-granat/10">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-granat">
            Najczęściej zadawane pytania
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-granat/10 bg-krem overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 font-heading font-semibold text-sm sm:text-base text-granat hover:text-burgund transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-burgund shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-4 pt-1 text-xs sm:text-sm text-granat/80 leading-relaxed border-t border-granat/5">
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
