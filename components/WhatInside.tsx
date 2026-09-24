import { MessageCircle, Heart, Sparkles, Coffee, Smile, Compass, Users, History, ThumbsUp, Moon } from "lucide-react";

export default function WhatInside() {
  const categories = [
    {
      num: "01",
      title: "Codzienność i dobre chwile",
      desc: "O tym, co dzieje się tu i teraz.",
      sample: "„Gdyby ten tydzień miał swój kolor — jaki by był?”",
      icon: Coffee,
    },
    {
      num: "02",
      title: "Troska o siebie i małe rytuały",
      desc: "O tym, co Was regeneruje i cieszy.",
      sample: "„Który zwykły moment dnia jest dla Ciebie małym oddechem?”",
      icon: Sparkles,
    },
    {
      num: "03",
      title: "Śmiech i lekkość",
      desc: "O tym, co rozluźnia i rozśmiesza.",
      sample: "„Gdybyśmy mieli wymyślić najgłupsze wspólne hobby — co by to było?”",
      icon: Smile,
    },
    {
      num: "04",
      title: "Ciekawość i rozwój",
      desc: "O tym, co Was porusza i inspiruje.",
      sample: "„Co potrafi Cię zaciekawić tak, że tracisz poczucie czasu?”",
      icon: Compass,
    },
    {
      num: "05",
      title: "My jako para",
      desc: "O tym, co tworzycie razem.",
      sample: "„Co robimy razem, co zawsze nas do siebie zbliża?”",
      icon: Users,
    },
    {
      num: "06",
      title: "Wspomnienia",
      desc: "O chwilach, do których dobrze wracać.",
      sample: "„Który nasz zupełnie zwykły wieczór wspominasz nieoczekiwanie ciepło?”",
      icon: History,
    },
    {
      num: "07",
      title: "Upodobania i ulubione",
      desc: "O tym, co po prostu lubicie.",
      sample: "„Jaka piosenka zawsze poprawia Ci nastrój?”",
      icon: MessageCircle,
    },
    {
      num: "08",
      title: "Wdzięczność i docenianie",
      desc: "O tym, co łatwo przeoczyć, a warto zauważyć.",
      sample: "„Co doceniasz w naszej codzienności, a rzadko o tym mówimy?”",
      icon: ThumbsUp,
    },
    {
      num: "09",
      title: "Marzenia i przygody",
      desc: "O tym, co dopiero przed Wami.",
      sample: "„O jakim małym marzeniu myślisz ostatnio najczęściej?”",
      icon: Moon,
    },
    {
      num: "10",
      title: "Czułość i bliskość",
      desc: "O tym, jak okazujecie sobie miłość.",
      sample: "„Jaki gest z mojej strony sprawia, że czujesz się zaopiekowany/a?”",
      icon: Heart,
    },
  ];

  return (
    <section className="bg-kremDim py-14 sm:py-20 border-b border-granat/10">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-burgund uppercase tracking-wider text-xs sm:text-sm font-semibold mb-2.5 block">
            ZAWARTOŚĆ PRZEWODNIKA
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-granat leading-tight">
            10 obszarów rozmów — 100 konkretnych pytań
          </h2>
          <p className="text-sm sm:text-base text-granat/80 mt-3.5 leading-relaxed">
            Pytania podzieliliśmy na 10 tematów, abyście mogli dopasować rozmowę do Waszego nastroju, pory dnia i energii.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-5">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-granat/10 bg-krem p-5 sm:p-6 shadow-sm flex flex-col justify-between hover:border-burgund/30 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-2.5">
                    <div className="flex items-center gap-2.5">
                      <span className="text-xs font-mono font-bold text-burgund bg-roz px-2 py-0.5 rounded-md">
                        {cat.num}
                      </span>
                      <h3 className="font-heading font-bold text-base sm:text-lg text-granat">
                        {cat.title}
                      </h3>
                    </div>
                    <Icon className="w-4 h-4 text-burgund/60 shrink-0" />
                  </div>
                  <p className="text-xs sm:text-sm text-granat/70 mb-3">
                    {cat.desc}
                  </p>
                </div>
                <div className="pt-3 border-t border-granat/5 text-xs italic text-granat/80">
                  Przykładowe pytanie: <span className="font-normal text-burgund">{cat.sample}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
