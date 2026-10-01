export default function ForWhom() {
  const items = [
    {
      num: "1",
      title: "…mijacie się w codziennym biegu.",
      desc: "Praca, dom, rodzina, kalendarz. Niby razem, a jednak każde osobno.",
      decks: "Codzienność oraz Emocje i bliskość",
    },
    {
      num: "2",
      title: "…chcecie spędzać ze sobą więcej dobrego czasu",
      desc: "Nie obok siebie przed ekranem, tylko naprawdę razem. Ze śmiechem, wspomnieniami i odkrywaniem siebie na nowo.",
      decks: "Na rozgrzewkę oraz My",
    },
    {
      num: "3",
      title: "…dawno nie rozmawialiście o tym, co naprawdę ważne.",
      desc: "Dlaczego jesteście razem? Dokąd zmierzacie? Na takie rozmowy rzadko jest okazja.",
      decks: "Fundamenty oraz Marzenia i przyszłość",
    },
    {
      num: "4",
      title: "…brakuje wam trochę iskry albo słów.",
      desc: "O czułości i pożądaniu najtrudniej zacząć rozmowę. Pytanie z karty bywa łatwiejsze niż własne.",
      decks: "Pożądanie i namiętność oraz Emocje i bliskość",
    },
  ];

  return (
    <section className="bg-krem py-14 sm:py-20 border-b border-granat/10">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        
        {/* Nagłówek sekcji */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <span className="text-burgund uppercase tracking-wider text-xs sm:text-sm font-semibold mb-2.5 block">
            DLA KOGO
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-granat leading-tight">
            Dla kogo są Stopklatki?
          </h2>
          <p className="text-sm sm:text-base text-granat/80 mt-3 leading-relaxed">
            Sięgnijcie po nie, gdy:
          </p>
        </div>

        {/* 4 karty z sytuacjami i rekomendacjami talii */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-granat/10 bg-kremDim p-5 sm:p-6 shadow-xs flex flex-col justify-between hover:border-burgund/30 transition-colors"
            >
              <div>
                <div className="w-8 h-8 rounded-full bg-roz text-burgund font-heading font-bold flex items-center justify-center mb-3 text-sm shrink-0">
                  {item.num}
                </div>
                <h3 className="font-heading font-bold text-base sm:text-lg text-granat mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-granat/80 leading-relaxed mb-4">
                  {item.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-granat/10 text-xs text-granat/85">
                <span className="text-granat/60 block mb-0.5 text-[11px]">Sięgnijcie po talie:</span>
                <span className="font-semibold text-burgund">{item.decks}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
