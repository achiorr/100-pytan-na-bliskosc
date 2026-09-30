export default function HowToUse() {
  const rules = [
    {
      num: "1",
      title: "Nie ma „dobrych” odpowiedzi",
      text: "Celem nie jest odpowiedzieć mądrze, tylko szczerze. Chodzi o ciekawość i wzajemne poznanie się.",
    },
    {
      num: "2",
      title: "Słuchajcie, żeby zrozumieć",
      text: "Kiedy jedno mówi, drugie po prostu jest obecne. Zamiast szykować w głowie ripostę, spróbujcie najpierw naprawdę usłyszeć.",
    },
    {
      num: "3",
      title: "Pytajcie dalej",
      text: "„Opowiedz mi o tym więcej”, „dlaczego akurat to?” — te proste dopowiedzenia otwierają najciekawsze rozmowy.",
    },
    {
      num: "4",
      title: "Bez presji",
      text: "Nie musicie odpowiadać na każde pytanie. Bliskość rośnie w poczuciu bezpieczeństwa, nie przymusu.",
    },
    {
      num: "5",
      title: "Znajdźcie swój rytm",
      text: "Puśćcie film przy kawie, na spacerze albo przed snem i zatrzymajcie go, gdy poczujecie. Jedno pytanie dziennie robi różnicę.",
    },
  ];

  return (
    <section className="bg-kremDim py-14 sm:py-20 border-b border-granat/10">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-burgund uppercase tracking-wider text-xs sm:text-sm font-semibold mb-2.5 block">
            PROSTE ZASADY
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-granat leading-tight">
            Jak korzystać ze stopklatek?
          </h2>
          <p className="text-sm sm:text-base text-granat/80 mt-3 leading-relaxed">
            Wybierzcie talię, włączcie i zatrzymajcie w dowolnym momencie, a następnie odpowiedzcie sobie na pytanie, które się wyświetli.
          </p>
        </div>

        {/* 3 pierwsze zasady */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {rules.slice(0, 3).map((rule, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-granat/10 bg-krem p-6 shadow-sm flex flex-col"
            >
              <div className="w-8 h-8 rounded-full bg-roz text-burgund font-heading font-bold flex items-center justify-center mb-4 text-sm shrink-0">
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

        {/* 2 kolejne zasady */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5 max-w-3xl mx-auto">
          {rules.slice(3, 5).map((rule, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-granat/10 bg-krem p-6 shadow-sm flex flex-col"
            >
              <div className="w-8 h-8 rounded-full bg-roz text-burgund font-heading font-bold flex items-center justify-center mb-4 text-sm shrink-0">
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

        {/* Zdjęcie autorów pod zasadami */}
        <div className="mt-10 sm:mt-14 max-w-3xl mx-auto">
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-granat/15 shadow-xl aspect-[4/3] sm:aspect-[16/10] bg-krem">
            <img
              src="/images/ula-krzysiek-kanapa.jpg"
              alt="Ula i Krzysiek Głowaccy rozmawiający ze sobą"
              className="w-full h-full object-cover object-center"
              loading="lazy"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
