import { Check, X } from "lucide-react";

export default function ForWhom() {
  const forWhomItems = [
    "Czujesz, że w Waszych rozmowach często pojawia się dystans lub niezrozumienie.",
    "Chcesz umieć rozmawiać o trudnych sprawach spokojnie, bez podnoszenia głosu.",
    "Zależy Ci na budowaniu głębszej bliskości i prawdziwego partnerstwa.",
    "Szukasz sprawdzonych, życiowych narzędzi, a nie skomplikowanych teorii.",
  ];

  const notForWhomItems = [
    "Szukasz magicznych trików lub manipulacji drugą osobą.",
    "Oczekujesz, że relacja naprawi się sama bez Twojego zaangażowania.",
  ];

  return (
    <section className="bg-krem py-16 sm:py-24 border-b border-granat/10">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-burgund uppercase tracking-wider text-xs sm:text-sm font-semibold mb-3 block">
            DOPASOWANIE
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-granat leading-tight">
            Czy ten materiał jest dla Ciebie?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Dla kogo TAK */}
          <div className="rounded-2xl border-2 border-emerald-500/20 bg-emerald-50/40 p-6 sm:p-8">
            <h3 className="font-heading text-xl font-bold text-granat mb-6 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold">
                ✓
              </span>
              Ten przewodnik pomoże Ci, jeśli:
            </h3>
            <ul className="space-y-4">
              {forWhomItems.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-granat/90">
                  <Check className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Dla kogo NIE */}
          <div className="rounded-2xl border-2 border-granat/10 bg-kremDim p-6 sm:p-8">
            <h3 className="font-heading text-xl font-bold text-granat mb-6 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center text-xs font-bold">
                ✕
              </span>
              To nie jest materiał dla Ciebie, jeśli:
            </h3>
            <ul className="space-y-4">
              {notForWhomItems.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-granat/80">
                  <X className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
