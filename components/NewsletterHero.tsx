"use client";

import { CHECKOUT_URL, SAMPLE_VIDEO_URL, SAMPLE_VIDEO_POSTER } from "@/lib/constants";
import { trackInitiateCheckout } from "@/lib/pixel";

export default function NewsletterHero() {
  const cardsLeft = [
    {
      id: "04",
      title: "Codzienność",
      img: "/images/karty-tytulowe/04-Codziennosc-tytul.jpg",
      className:
        "left-1/2 top-1/2 -translate-x-[122%] sm:-translate-x-[118%] -translate-y-[47%] -rotate-[12deg] z-10 scale-[0.84] opacity-90",
    },
    {
      id: "03",
      title: "Emocje i bliskość",
      img: "/images/karty-tytulowe/03-Emocje-i-bliskosc-tytul.jpg",
      className:
        "left-1/2 top-1/2 -translate-x-[94%] sm:-translate-x-[90%] -translate-y-[48.5%] -rotate-[7deg] z-15 scale-[0.90] opacity-95",
    },
    {
      id: "02",
      title: "My",
      img: "/images/karty-tytulowe/02-My-tytul.jpg",
      className:
        "left-1/2 top-1/2 -translate-x-[66%] sm:-translate-x-[62%] -translate-y-[49.5%] -rotate-[3deg] z-20 scale-[0.96]",
    },
  ];

  const cardsRight = [
    {
      id: "05",
      title: "Fundamenty",
      img: "/images/karty-tytulowe/05-Fundamenty-tytul.jpg",
      className:
        "left-1/2 top-1/2 -translate-x-[34%] sm:-translate-x-[38%] -translate-y-[49.5%] rotate-[3deg] z-20 scale-[0.96]",
    },
    {
      id: "06",
      title: "Marzenia i przyszłość",
      img: "/images/karty-tytulowe/06-Marzenia-i-przyszlosc-tytul.jpg",
      className:
        "left-1/2 top-1/2 -translate-x-[6%] sm:-translate-x-[10%] -translate-y-[48.5%] rotate-[7deg] z-15 scale-[0.90] opacity-95",
    },
    {
      id: "07",
      title: "Pożądanie i namiętność",
      img: "/images/karty-tytulowe/07-Pozadanie-i-namietnosc-tytul.jpg",
      className:
        "left-1/2 top-1/2 translate-x-[22%] sm:translate-x-[18%] -translate-y-[47%] rotate-[12deg] z-10 scale-[0.84] opacity-90",
    },
  ];

  return (
    <section className="relative bg-krem py-10 sm:py-16 md:py-20 border-b border-granat/10 overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Lewa kolumna: Treść i CTA */}
          <div className="lg:col-span-6 flex flex-col items-start z-10">
            
            {/* Nagłówek H1 */}
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-granat leading-[1.1] mb-2">
              Stopklatki
              <span className="block font-heading italic text-2xl sm:text-3xl md:text-4xl text-burgund font-normal mt-1.5 sm:mt-2">
                Zrób pauzę na dobrą rozmowę
              </span>
            </h1>

            {/* Wyjaśnienie / Lead */}
            <div className="font-sans text-sm sm:text-base text-granat/85 leading-relaxed mt-4 mb-8 space-y-3">
              <p>
                Na co dzień rozmawiacie o zakupach, grafikach i tym, kto odbiera paczkę. Stopklatki pomagają wrócić do rozmów o was: o tym, co was cieszy, czego potrzebujecie i o czym marzycie.
              </p>
              <p>
                Włączcie film, zatrzymajcie go w dowolnym momencie i odpowiedzcie na pytanie, które się pojawi. Tyle wystarczy, żeby znów się sobą zaciekawić.
              </p>
            </div>

            {/* Główne CTA */}
            <div className="w-full sm:w-auto">
              <a
                href={CHECKOUT_URL}
                onClick={() => trackInitiateCheckout()}
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-2xl bg-burgund px-8 py-4 text-base sm:text-lg font-semibold text-krem shadow-lg hover:brightness-90 hover:shadow-xl transition-all duration-200 group"
              >
                Kupuję cały zestaw
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>

          </div>

          {/* Prawa kolumna: Wachlarz 7 talii ze środkowym wideo "Na rozgrzewkę" */}
          <div className="lg:col-span-6 w-full mt-8 lg:mt-0 flex flex-col items-center">
            
            {/* Kontener sceny wachlarza */}
            <div className="relative w-full max-w-[340px] sm:max-w-[420px] md:max-w-[460px] h-[460px] sm:h-[520px] flex items-center justify-center select-none pt-4 sm:pt-6">
              
              {/* Ręcznie rysowana strzałka "Kliknij i przetestuj" kierująca na wideo */}
              <div className="absolute -top-10 sm:-top-11 right-2 sm:right-6 md:right-8 z-40 flex flex-col items-center pointer-events-none select-none">
                <span className="font-handwriting text-xl sm:text-2xl font-bold text-burgund rotate-2 tracking-wide drop-shadow-xs whitespace-nowrap">
                  Kliknij i przetestuj
                </span>
                <svg
                  className="w-12 h-10 sm:w-14 sm:h-12 text-burgund stroke-current fill-none -mt-1 -mr-2"
                  viewBox="0 0 70 50"
                >
                  <path
                    d="M 52 6 Q 26 10 16 38"
                    strokeWidth="2.8"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 14 24 L 16 38 L 30 33"
                    strokeWidth="2.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* Karty po LEWEJ stronie w tle (Talia 04, 03, 02) */}
              {cardsLeft.map((card) => (
                <div
                  key={card.id}
                  className={`absolute w-[180px] sm:w-[220px] md:w-[230px] aspect-[9/16] rounded-2xl sm:rounded-3xl border-2 border-granat/15 bg-krem shadow-xl overflow-hidden pointer-events-none transition-all duration-300 ${card.className}`}
                >
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                </div>
              ))}

              {/* Karty po PRAWEJ stronie w tle (Talia 05, 06, 07) */}
              {cardsRight.map((card) => (
                <div
                  key={card.id}
                  className={`absolute w-[180px] sm:w-[220px] md:w-[230px] aspect-[9/16] rounded-2xl sm:rounded-3xl border-2 border-granat/15 bg-krem shadow-xl overflow-hidden pointer-events-none transition-all duration-300 ${card.className}`}
                >
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                </div>
              ))}

              {/* ŚRODKOWA TALIA (01 · Na rozgrzewkę) — Pełny aktywny odtwarzacz wideo na samej górze */}
              <div className="relative w-[210px] sm:w-[250px] md:w-[260px] aspect-[9/16] rounded-2xl sm:rounded-3xl border-2 sm:border-[3px] border-granat/25 bg-granat shadow-2xl overflow-hidden z-30 ring-4 sm:ring-8 ring-krem/80">
                <video
                  controls
                  playsInline
                  preload="metadata"
                  poster={SAMPLE_VIDEO_POSTER}
                  className="w-full h-full object-cover"
                >
                  <source src={SAMPLE_VIDEO_URL} type="video/mp4" />
                  Twoja przeglądarka nie obsługuje odtwarzacza wideo.
                </video>
              </div>

            </div>

            {/* Wskazówka pod wachlarzem */}
            <p className="text-[11px] sm:text-xs text-granat/70 text-center mt-3 font-medium leading-relaxed max-w-sm">
              👆 <strong>Wypróbuj teraz:</strong> Włącz środkowe wideo, zatrzymaj w losowej sekundzie i zobacz wylosowane pytanie!
            </p>

          </div>

        </div>
      </div>
    </section>
  );
}
