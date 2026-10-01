import { HeartHandshake, Layers, Smile, Compass, BookOpen } from "lucide-react";

export default function HowQuestionsCreated() {
  const approaches = [
    {
      title: "Terapia skoncentrowana na emocjach (EFT)",
      desc: "Bliskość rośnie, gdy jesteśmy dla siebie dostępni i wrażliwi na swoje potrzeby.",
      icon: HeartHandshake,
      badge: "Dostępność i emocje",
    },
    {
      title: "Badania Arthura Arona",
      desc: "Stopniowe odsłanianie się w rozmowie i wspólne nowe doświadczenia zbliżają ludzi i podtrzymują zakochanie.",
      icon: Layers,
      badge: "Głębia i zakochanie",
    },
    {
      title: "Badania Shelly Gable",
      desc: "Równie ważne jak wsparcie w trudnych chwilach jest wspólne cieszenie się z dobrych rzeczy.",
      icon: Smile,
      badge: "Dzielenie radości",
    },
    {
      title: "Terapia akceptacji i zaangażowania (ACT)",
      desc: "Rozmowa o wartościach pomaga parze wiedzieć, na czym stoi i dokąd idzie.",
      icon: Compass,
      badge: "Wartości i sens",
    },
  ];

  return (
    <section className="bg-kremDim py-14 sm:py-20 border-b border-granat/10">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        
        {/* Nagłówek sekcji */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="text-burgund uppercase tracking-wider text-xs sm:text-sm font-semibold mb-2.5 block">
            NAUKA I PSYCHOLOGIA
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-granat leading-tight mb-4">
            Jak powstały pytania?
          </h2>
          <p className="text-sm sm:text-base text-granat/85 leading-relaxed">
            Tematy w Stopklatkach nie są przypadkowe. Wybraliśmy je na podstawie kilkudziesięciu lat badań nad tym, co sprawia, że związki są szczęśliwe i trwałe.
          </p>
        </div>

        {/* Główny filar: Model Gottmanów */}
        <div className="rounded-2xl sm:rounded-3xl border border-granat/15 bg-krem p-6 sm:p-8 md:p-10 shadow-sm mb-6 sm:mb-8">
          <div className="flex flex-col md:flex-row items-start gap-5 sm:gap-6">
            <div className="w-12 h-12 rounded-2xl bg-roz text-burgund flex items-center justify-center shrink-0 shadow-xs">
              <BookOpen className="w-6 h-6" />
            </div>
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-burgund">
                GŁÓWNY PUNKT WYJŚCIA
              </span>
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-granat">
                Model Johna i Julie Gottmanów
              </h3>
              <p className="text-sm sm:text-base text-granat/85 leading-relaxed">
                Punktem wyjścia był model Johna i Julie Gottmanów, którzy przez dekady badali tysiące par. Wynika z niego, że silny związek opiera się na kilku filarach: <strong>dobrej znajomości świata drugiej osoby</strong>, <strong>okazywaniu sobie czułości i podziwu</strong>, <strong>zwracaniu się ku sobie w codzienności</strong>, <strong>wspólnych marzeniach i poczuciu sensu</strong>, <strong>zaufaniu i zaangażowaniu</strong>.
              </p>
              <p className="text-xs sm:text-sm text-burgund font-semibold pt-1">
                Każdy z tych filarów ma swoje miejsce w taliach.
              </p>
            </div>
          </div>
        </div>

        {/* 4 podejścia w czytelnych kafelkach */}
        <div className="mb-4">
          <p className="text-xs sm:text-sm font-semibold text-granat/70 uppercase tracking-wider mb-4 text-center md:text-left">
            Wnioski z innych podejść i badań psychologicznych:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {approaches.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-granat/10 bg-krem p-5 sm:p-6 shadow-xs hover:border-burgund/30 transition-colors flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-3">
                      <div className="w-9 h-9 rounded-xl bg-roz text-burgund flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-semibold text-granat/60 bg-granat/5 px-2.5 py-0.5 rounded-full">
                        {item.badge}
                      </span>
                    </div>
                    <h4 className="font-heading font-bold text-base text-granat mb-1.5 leading-snug">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-granat/80 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Dolne podsumowanie: Praktyka i doświadczenie */}
        <div className="mt-8 rounded-2xl border border-granat/10 bg-krem p-6 sm:p-8 text-center max-w-3xl mx-auto shadow-xs">
          <p className="text-sm sm:text-base text-granat/85 leading-relaxed mb-3">
            Pytania mają różne poziomy głębokości, od lekkich i zabawnych po bardziej osobiste. Tak właśnie, stopniowo, buduje się bliskość.
          </p>
          <p className="font-heading italic text-base sm:text-lg text-burgund font-medium leading-relaxed">
            Za wszystkim stoi też nasze doświadczenie — zarówno z gabinetu, jak i z naszego życia i związku. Dzięki temu w kartach jest i nauka, i to, co naprawdę dzieje się w rozmowach par.
          </p>
        </div>

      </div>
    </section>
  );
}
