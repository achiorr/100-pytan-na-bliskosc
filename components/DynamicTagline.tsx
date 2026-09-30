"use client";

import { useState, useEffect } from "react";

export default function DynamicTagline() {
  const phrases = [
    "otwierają wartościowe rozmowy.",
    "pozwalają bliżej się poznać.",
    "pozwalają na nowo odkrywać siebie nawzajem.",
    "można użyć w każdym miejscu.",
  ];

  const [phraseIndex, setPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullPhrase = phrases[phraseIndex];
    let timer: NodeJS.Timeout;

    if (!isDeleting) {
      // Pisanie litera po literze
      if (currentText.length < fullPhrase.length) {
        timer = setTimeout(() => {
          setCurrentText(fullPhrase.slice(0, currentText.length + 1));
        }, 50);
      } else {
        // Pauza po wpisaniu całego tekstu
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 2200);
      }
    } else {
      // Kasowanie litera po literze
      if (currentText.length > 0) {
        timer = setTimeout(() => {
          setCurrentText(fullPhrase.slice(0, currentText.length - 1));
        }, 28);
      } else {
        // Przejście do kolejnej frazy
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
      }
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, phraseIndex, phrases]);

  return (
    <section className="bg-burgund/[0.03] py-10 sm:py-14 border-b border-granat/10 overflow-hidden">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Cały blok nagłówka ze stałym ciemnym tekstem i dynamiczną drugą linią */}
        <div className="w-full max-w-3xl flex flex-col items-center text-center">
          
          {/* Stały, całkowicie nieruchomy ciemny tekst */}
          <h2 className="text-granat font-heading font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[40px] leading-snug tracking-tight">
            Stopklatki to wirtualne talie kart z&nbsp;pytaniami, które:
          </h2>

          {/* Dynamiczna linia o dopasowanej, naturalnej interlinii */}
          <div className="grid grid-cols-1 grid-rows-1 items-center justify-center text-center w-full mt-0.5 sm:mt-1 min-h-[40px] sm:min-h-[50px]">
            {/* Niewidoczna warstwa rezerwująca maksymalną szerokość/wysokość najdłuższej frazy */}
            <span
              className="col-start-1 row-start-1 text-burgund font-heading italic font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[40px] invisible pointer-events-none select-none tracking-tight leading-snug"
              aria-hidden="true"
            >
              pozwalają na nowo odkrywać siebie nawzajem.
            </span>

            {/* Widoczna, płynnie wpisywana i kasowana fraza */}
            <span className="col-start-1 row-start-1 text-burgund font-heading italic font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[40px] tracking-tight leading-snug">
              {currentText}
              <span
                className="inline-block w-[3px] sm:w-[4px] h-[0.85em] bg-burgund ml-1 align-baseline animate-pulse"
                aria-hidden="true"
              />
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
