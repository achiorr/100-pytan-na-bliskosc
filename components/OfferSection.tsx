import {
  Video,
  Infinity,
  Smartphone,
  Zap,
  CheckCircle2,
} from "lucide-react";
import BuyButton from "@/components/BuyButton";

export default function OfferSection() {
  const whatYouGet = [
    {
      icon: Video,
      title: "7 wirtualnych talii kart",
      desc: "W każdej z nich znajdziecie 100 różnorodnych pytań.",
    },
    {
      icon: Infinity,
      title: "Dożywotni dostęp",
      desc: "Płacicie raz i wracacie do pytań, kiedy tylko chcecie, bez żadnych limitów.",
    },
    {
      icon: Smartphone,
      title: "Odtwarzanie na telefonie i komputerze",
      desc: "Z kart możecie korzystać na dowolnym urządzeniu.",
    },
    {
      icon: Zap,
      title: "Zawsze przy tobie",
      desc: "Nie potrzebujecie plansz ani pudełek. Karty zawsze macie pod ręką w telefonie.",
    },
  ];

  return (
    <section id="oferta" className="bg-rozLight py-16 sm:py-24 border-b border-granat/10">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        
        {/* Nagłówek sekcji */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <span className="text-burgund uppercase tracking-wider text-xs sm:text-sm font-semibold mb-2.5 block">
            PEŁEN ZESTAW
          </span>
          <h2 className="font-heading text-[28px] sm:text-4xl lg:text-5xl font-bold tracking-tight text-granat leading-tight">
            Wszystkie 7 wirtualnych talii w jednym pakiecie
          </h2>
          <p className="text-[18px] sm:text-lg text-granat/80 mt-3.5 leading-[1.6]">
            Pobierzcie wszystkie 7 talii — w sumie 700 pytań na bliskość i miejcie pod ręką gotowy sposób na dobrą rozmowę we dwoje.
          </p>
        </div>

        {/* 1. Kafelki "Co dostajesz" */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-10 sm:mb-12">
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
                  <h3 className="font-heading font-bold text-[18px] sm:text-lg text-granat mb-1.5 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-[17px] sm:text-sm text-granat/75 leading-[1.6]">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* 2. Pudełko oferty i cennika */}
        <div className="max-w-xl mx-auto rounded-3xl border-2 border-granat/20 bg-krem p-6 sm:p-10 shadow-xl text-center">
          <span className="text-xs sm:text-xs font-bold uppercase tracking-widest text-burgund bg-roz px-3.5 py-1 rounded-full inline-block mb-4">
            CENA PREMIEROWA
          </span>

          <div className="mb-6">
            <h4 className="font-heading text-[26px] sm:text-3xl font-bold text-granat block leading-tight">
              Zestaw 7 talii Stopklatek
            </h4>
            <span className="text-[15px] sm:text-sm text-granat/70 font-medium mt-1.5 block">
              jednorazowy, bezterminowy dostęp · bez subskrypcji
            </span>
          </div>

          <div className="space-y-3.5 text-[16px] sm:text-sm text-granat/85 text-left max-w-md mx-auto mb-8 bg-kremDim/60 p-4 sm:p-5 rounded-2xl border border-granat/10">
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div className="w-full">
                <span className="font-semibold text-granat block">
                  7 tematycznych talii z pytaniami na temat:
                </span>
                <ul className="mt-2 space-y-1.5 text-[15px] sm:text-xs text-granat/85">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-burgund shrink-0" />
                    <span><strong>Na rozgrzewkę</strong> — lekki start i odrobina zabawy</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-burgund shrink-0" />
                    <span><strong>My</strong> — o tym, kim jesteście jako para</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-burgund shrink-0" />
                    <span><strong>Emocje i bliskość</strong> — o uczuciach i potrzebach</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-burgund shrink-0" />
                    <span><strong>Codzienność</strong> — o wspólnym życiu i wsparciu</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-burgund shrink-0" />
                    <span><strong>Fundamenty</strong> — o wartościach i tym, co was łączy</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-burgund shrink-0" />
                    <span><strong>Marzenia i przyszłość</strong> — o tym, co chcecie zbudować</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-burgund shrink-0" />
                    <span><strong>Pożądanie i namiętność</strong> — o intymności i namiętności</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex items-center gap-2.5 pt-1.5 border-t border-granat/10">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              <span>Dożywotni dostęp i odtwarzanie na telefonie / komputerze</span>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              <span>Natychmiastowy dostęp po zakupie</span>
            </div>
          </div>

          {/* Przycisk zakupu (ZMIANA 9: widoczny na desktopie i na mobile) */}
          <div className="flex justify-center">
            <BuyButton
              source="oferta"
              mobileOnly={false}
              variant="light"
            />
          </div>

          <p className="text-[14px] sm:text-[11px] text-granat/60 mt-3.5">
            🔒 Bezpieczna płatność online · Natychmiastowy dostęp po zakupie
          </p>
        </div>

      </div>
    </section>
  );
}
