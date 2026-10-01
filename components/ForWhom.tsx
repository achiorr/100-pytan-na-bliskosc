export default function ForWhom() {
  const items = [
    {
      num: "1",
      title: "Dla par na początku drogi",
      desc: "które chcą się lepiej poznać.",
    },
    {
      num: "2",
      title: "Dla par z dłuższym stażem",
      desc: "które chcą znów się sobą zaciekawić.",
    },
    {
      num: "3",
      title: "Dla zabieganych",
      desc: "którym brakuje czasu i pomysłu na dobrą rozmowę.",
    },
    {
      num: "4",
      title: "Na randkę w domu",
      desc: "długą podróż albo spokojny wieczór we dwoje.",
    },
  ];

  return (
    <section className="bg-krem py-14 sm:py-20 border-b border-granat/10">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        
        {/* Nagłówek sekcji */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-burgund uppercase tracking-wider text-xs sm:text-sm font-semibold mb-2.5 block">
            DLA KOGO
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-granat leading-tight">
            Dla kogo są Stopklatki?
          </h2>
        </div>

        {/* 4 karty w stylu sekcji Jak korzystać */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-granat/10 bg-kremDim p-6 shadow-xs flex flex-col justify-between hover:border-burgund/30 transition-colors"
            >
              <div>
                <div className="w-8 h-8 rounded-full bg-roz text-burgund font-heading font-bold flex items-center justify-center mb-4 text-sm shrink-0">
                  {item.num}
                </div>
                <h3 className="font-heading font-bold text-base sm:text-lg text-granat mb-1.5 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-granat/80 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
