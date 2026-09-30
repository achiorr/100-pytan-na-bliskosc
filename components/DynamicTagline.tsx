"use client";

import { useState, useEffect } from "react";
import { Sparkles } from "lucide-react";

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
    <section className="bg-burgund/[0.03] py-12 sm:py-16 md:py-20 border-b border-granat/10 overflow-hidden">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Subtelna etykieta u góry */}
        <div className="inline-flex items-center gap-2 rounded-full bg-roz/70 border border-burgund/15 px-3.5 py-1 text-xs font-semibold text-burgund mb-5 sm:mb-6 shadow-xs">
          <Sparkles className="w-3.5 h-3.5" />
          <span>W SKRÓCIE</span>
        </div>

        {/* Cały blok nagłówka ze stałym ciemnym tekstem i dynamiczną drugą linią */}
        <div className="w-full max-w-3xl flex flex-col items-center text-center">
          
          {/* Stały, całkowicie nieruchomy ciemny tekst */}
          <h2 className="text-granat font-heading font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[40px] leading-tight tracking-tight">
            Stopklatki to wirtualne talie kart z&nbsp;pytaniami, które:
          </h2>

          {/* Dynamiczna linia o stałej wysokości i wyśrodkowaniu */}
          <div className="grid grid-cols-1 grid-rows-1 items-center justify-center text-center w-full mt-2 sm:mt-3 min-h-[50px] sm:min-h-[60px]">
            {/* Niewidoczna warstwa rezerwująca maksymalną szerokość/wysokość najdłuższej frazy */}
            <span
              className="col-start-1 row-start-1 text-burgund font-heading italic font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[40px] invisible pointer-events-none select-none tracking-tight leading-tight"
              aria-hidden="true"
            >
              pozwalają na nowo odkrywać siebie nawzajem.
            </span>

            {/* Widoczna, płynnie wpisywana i kasowana fraza */}
            <span className="col-start-1 row-start-1 text-burgund font-heading italic font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[40px] tracking-tight leading-tight">
              {currentText}
              <span
                className="inline-block w-[3px] sm:w-[4px] h-[0.9em] bg-burgund ml-1 align-baseline animate-pulse"
                aria-hidden="true"
              />
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
