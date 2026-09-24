import NewsletterForm from "./NewsletterForm";
import { FileDown, CheckCircle2 } from "lucide-react";

export default function NewsletterHero() {
  return (
    <section className="bg-krem py-10 sm:py-16 md:py-20 border-b border-granat/10">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Lewa kolumna: Treść i formularz */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Nagłówek H1 */}
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-granat leading-[1.18] mb-3">
              100 pytań na bliskość
            </h1>
            <p className="font-heading italic text-xl sm:text-2xl text-burgund mb-5">
              rozmowy, które zbliżają
            </p>

            {/* Podtytuł */}
            <p className="font-sans text-base sm:text-lg text-granat/85 leading-relaxed mb-6">
              Sto prostych pytań, które pomagają zatrzymać się na chwilę, spojrzeć na siebie z ciekawością i rozmawiać o tym, co naprawdę ważne.
            </p>

            {/* Korzyść */}
            <div className="flex items-center gap-1.5 text-xs sm:text-sm font-medium text-granat/80 mb-7">
              <CheckCircle2 className="w-4 h-4 text-burgund" />
              <span>Gotowy plik PDF na telefon</span>
            </div>

            {/* Formularz zapisu */}
            <NewsletterForm
              buttonText="Pobieram 100 pytań (PDF)"
              source="hero_rolka"
            />
          </div>

          {/* Prawa kolumna: Zestawienie okładki PDF + Zdjęcie Uli i Krzyśka */}
          <div className="lg:col-span-5 w-full mt-4 lg:mt-0">
            <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none flex items-center justify-center py-4">
              
              {/* Główna karta / Okładka PDF */}
              <div className="relative w-[58%] sm:w-[56%] rounded-2xl border-2 border-granat/15 bg-[#FEFCF7] p-5 sm:p-7 shadow-xl text-center flex flex-col justify-between min-h-[370px] sm:min-h-[410px] -rotate-2 hover:rotate-0 transition-transform duration-300 z-10">
                <div>
                  <span className="text-[10px] font-bold tracking-[0.22em] text-burgund uppercase block">
                    SZCZĘŚLIWI RAZEM
                  </span>
                  <div className="w-6 h-0.5 bg-burgund mx-auto mt-1.5" />
                </div>

                <div className="my-auto py-3">
                  <div className="w-2 h-2 rounded-full bg-burgund mx-auto mb-3 opacity-75" />
                  <h2 className="font-heading text-2xl sm:text-3xl font-bold text-granat leading-tight mb-1.5">
                    100 pytań<br />na bliskość
                  </h2>
                  <p className="font-heading italic text-sm sm:text-base text-burgund">
                    rozmowy, które zbliżają
                  </p>
                  <p className="text-[11px] text-granat/60 mt-3 leading-relaxed">
                    Dla Was dwojga · Format PDF
                  </p>
                </div>

                <div className="pt-3 border-t border-granat/10 flex items-center justify-between text-[10px] text-granat/60">
                  <span className="flex items-center gap-1 font-semibold text-burgund">
                    <FileDown className="w-3.5 h-3.5" /> Pobierz PDF
                  </span>
                  <span>100 pytań</span>
                </div>
              </div>

              {/* Ramka ze zdjęciem Uli i Krzyśka obok okładki */}
              <div className="relative w-[48%] sm:w-[46%] -ml-10 sm:-ml-12 mt-10 sm:mt-14 z-20">
                <div className="rounded-2xl border-2 border-granat/20 bg-krem p-1.5 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-300">
                  <img
                    src="/images/ula-krzysiek-lead-magnet.jpg"
                    alt="Ula i Krzysiek Głowaccy"
                    width={600}
                    height={800}
                    className="w-full aspect-[3/4] rounded-xl object-cover object-top shadow-sm"
                  />
                  <div className="px-2 py-2 text-center">
                    <p className="font-heading font-bold text-xs text-granat leading-snug">
                      Ula i Krzysiek
                    </p>
                    <p className="text-[10px] text-burgund font-medium">
                      @szczesliwi_razem
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
