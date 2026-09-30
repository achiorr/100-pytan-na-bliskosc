import { Smartphone, Pause, Sparkles } from "lucide-react";

export default function DynamicTagline() {
  return (
    <section className="bg-burgund/[0.03] py-12 sm:py-16 border-b border-granat/10">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Etykieta sekcji */}
        <span className="text-burgund uppercase tracking-wider text-xs sm:text-sm font-semibold mb-2.5 block">
          CZYM SĄ STOPKLATKI?
        </span>

        {/* Główny tytuł wyjaśniający */}
        <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-granat leading-tight mb-4 max-w-2xl mx-auto">
          Wirtualne karty do rozmów dla par
        </h2>

        {/* Zwięzłe wyjaśnienie */}
        <p className="font-sans text-sm sm:text-base md:text-lg text-granat/85 leading-relaxed max-w-2xl mx-auto mb-8 sm:mb-10">
          Stopklatki to 7 wirtualnych talii kart w apce. Działają jak prosta maszyna losująca: włączasz, naciskasz pauzę w dowolnym momencie i macie jedno pytanie do rozmowy.
        </p>

        {/* 3 zwięzłe kafelki podsumowujące produkt */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left max-w-3xl mx-auto">
          <div className="bg-krem rounded-2xl p-5 border border-granat/10 shadow-xs flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-xl bg-roz text-burgund flex items-center justify-center shrink-0 mt-0.5">
              <Smartphone className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-sm sm:text-base text-granat mb-1">
                Zawsze w telefonie
              </h3>
              <p className="text-xs sm:text-sm text-granat/75 leading-relaxed">
                Bez fizycznych plansz i pudełek. Dostępne na każdym telefonie i komputerze.
              </p>
            </div>
          </div>

          <div className="bg-krem rounded-2xl p-5 border border-granat/10 shadow-xs flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-xl bg-roz text-burgund flex items-center justify-center shrink-0 mt-0.5">
              <Pause className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-sm sm:text-base text-granat mb-1">
                Jedna pauza = pytanie
              </h3>
              <p className="text-xs sm:text-sm text-granat/75 leading-relaxed">
                Format dynamicznego wideo. Zatrzymujecie film w dowolnej chwili i losujecie.
              </p>
            </div>
          </div>

          <div className="bg-krem rounded-2xl p-5 border border-granat/10 shadow-xs flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-xl bg-roz text-burgund flex items-center justify-center shrink-0 mt-0.5">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-sm sm:text-base text-granat mb-1">
                7 talii · 700 pytań
              </h3>
              <p className="text-xs sm:text-sm text-granat/75 leading-relaxed">
                Od lekkich tematów na drogę po głębokie rozmowy o wartościach i namiętności.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
