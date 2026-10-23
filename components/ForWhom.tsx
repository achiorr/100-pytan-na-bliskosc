import BuyButton from "@/components/BuyButton";

export default function ForWhom() {
  const items = [
    {
      title: "…mijacie się w codziennym biegu.",
      desc: "Praca, dom, rodzina, kalendarz. Niby razem, a jednak każde osobno.",
      decks: "Codzienność oraz Emocje i bliskość",
      accentColor: "#F38080",
    },
    {
      title: "…chcecie spędzać ze sobą więcej dobrego czasu.",
      desc: "Nie obok siebie przed ekranem, tylko naprawdę razem. Ze śmiechem, wspomnieniami i odkrywaniem siebie na nowo.",
      decks: "Na rozgrzewkę oraz My",
      accentColor: "#F38080",
    },
    {
      title: "…dawno nie rozmawialiście o tym, co naprawdę ważne.",
      desc: "Dlaczego jesteście razem? Dokąd zmierzacie? Na takie rozmowy rzadko jest okazja.",
      decks: "Fundamenty oraz Marzenia i przyszłość",
      accentColor: "#F38080",
    },
    {
      title: "…brakuje wam trochę iskry albo słów.",
      desc: "O czułości i pożądaniu najtrudniej zacząć rozmowę. Pytanie z karty bywa łatwiejsze niż własne.",
      decks: "Pożądanie i namiętność oraz Emocje i bliskość",
      accentColor: "#F38080",
    },
  ];

  return (
    <section className="bg-granat text-krem py-14 sm:py-20 border-b border-krem/10">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Nagłówek sekcji */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-koral uppercase tracking-wider text-xs sm:text-sm font-semibold mb-2.5 block">
            DLA KOGO
          </span>
          <h2 className="font-heading text-[28px] sm:text-3xl lg:text-4xl font-bold tracking-tight text-krem leading-tight">
            Dla kogo są Stopklatki?
          </h2>
          <p className="text-[18px] sm:text-lg text-krem/80 mt-3 leading-[1.6]">
            Sięgnijcie po nie, gdy:
          </p>
        </div>

        {/* 4 szerokie wiersze na całą szerokość, bez ramek kafelków */}
        <div className="space-y-8 sm:space-y-10">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="pl-5 sm:pl-7 py-3 sm:py-4 transition-all duration-200"
              style={{
                borderLeftWidth: "6px",
                borderLeftStyle: "solid",
                borderLeftColor: item.accentColor,
              }}
            >
              {/* Sytuacja dużą czcionką (ok. 24px na mobile, Playfair Display) */}
              <h3 className="font-heading text-[22px] sm:text-2xl md:text-[26px] font-bold text-krem leading-snug">
                {item.title}
              </h3>

              {/* Krótkie dopowiedzenie */}
              <p className="text-[16px] sm:text-[17px] text-krem/80 mt-1.5 leading-relaxed font-sans">
                {item.desc}
              </p>

              {/* Rekomendowane talie (Montserrat, min. 18px) */}
              <p className="font-sans text-[18px] sm:text-xl text-krem mt-2.5 leading-relaxed">
                <span className="font-bold text-koral">Sięgnijcie po:</span>{" "}
                <span className="font-medium text-krem/95">{item.decks}</span>
              </p>
            </div>
          ))}
        </div>

        {/* Przycisk zakupu na mobile (ZMIANA 9: po sekcji Dla kogo, ukryty na desktopie) */}
        <div className="mt-12 sm:mt-16 flex justify-center">
          <BuyButton
            source="for_whom"
            mobileOnly={true}
            variant="dark"
          />
        </div>

      </div>
    </section>
  );
}
