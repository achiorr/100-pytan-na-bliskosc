export default function HowToUse() {
  const rules = [
    {
      num: "1",
      title: "Nie ma „dobrych” odpowiedzi",
      text: "Celem nie jest odpowiedzieć mądrze, tylko szczerze. Chodzi o ciekawość, nie o ocenę — bez poprawiania i bez „ale”.",
    },
    {
      num: "2",
      title: "Znajdźcie swój rytm",
      text: "Jedno pytanie przy kawie, na spacerze lub przed snem. Regularność działa mocniej niż długość — 5 minut dziennie robi ogromną różnicę.",
    },
    {
      num: "3",
      title: "Słuchajcie, żeby zrozumieć",
      text: "Kiedy jedno mówi, drugie po prostu jest obecne. Zamiast szykować w głowie ripostę, spróbujcie najpierw naprawdę usłyszeć.",
    },
    {
      num: "4",
      title: "Pytajcie dalej",
      text: "„Opowiedz mi o tym więcej”, „dlaczego akurat to?” — te proste dopowiedzenia otwierają najciekawsze rozmowy.",
    },
    {
      num: "5",
      title: "Bez presji",
      text: "Na trudniejsze pytanie można odpowiedzieć innym razem albo wcale. Bliskość rośnie w poczuciu bezpieczeństwa, nie przymusu.",
    },
  ];

  return (
    <section className="bg-krem py-14 sm:py-20 border-b border-granat/10">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-burgund uppercase tracking-wider text-xs sm:text-sm font-semibold mb-2.5 block">
            PROSTE ZASADY
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-granat leading-tight">
            Jak korzystać z tych pytań?
          </h2>
          <p className="text-sm sm:text-base text-granat/80 mt-3 leading-relaxed">
            Potraktujcie tę książeczkę jak zaproszenie, nie zadanie. Wystarczy jedno pytanie i chwila uwagi dla siebie nawzajem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {rules.slice(0, 3).map((rule, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-granat/10 bg-kremDim p-6 shadow-sm"
            >
              <div className="w-8 h-8 rounded-full bg-roz text-burgund font-heading font-bold flex items-center justify-center mb-4 text-sm">
                {rule.num}
              </div>
              <h3 className="font-heading font-bold text-base sm:text-lg text-granat mb-2">
                {rule.title}
              </h3>
              <p className="text-xs sm:text-sm text-granat/80 leading-relaxed">
                {rule.text}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5 max-w-3xl mx-auto">
          {rules.slice(3, 5).map((rule, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-granat/10 bg-kremDim p-6 shadow-sm"
            >
              <div className="w-8 h-8 rounded-full bg-roz text-burgund font-heading font-bold flex items-center justify-center mb-4 text-sm">
                {rule.num}
              </div>
              <h3 className="font-heading font-bold text-base sm:text-lg text-granat mb-2">
                {rule.title}
              </h3>
              <p className="text-xs sm:text-sm text-granat/80 leading-relaxed">
                {rule.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
