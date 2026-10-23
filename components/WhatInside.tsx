"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import BuyButton from "@/components/BuyButton";

export interface Deck {
  num: string;
  title: string;
  desc: string;
  file: string;
  question: string;
  shortTag: string;
}

export const decks: Deck[] = [
  {
    num: "01",
    title: "Na rozgrzewkę",
    desc: "Lekki start: dobre wspomnienia, drobne radości i odrobina zabawy.",
    file: "01-na-rozgrzewke.jpg",
    question: "Masz pięć sekund: za co mnie dziś lubisz?",
    shortTag: "Rozgrzewka",
  },
  {
    num: "02",
    title: "My",
    desc: "O tym, kim jesteśmy jako para i skąd przychodzimy.",
    file: "02-my.jpg",
    question: "Jaka była twoja pierwsza myśl na mój widok?",
    shortTag: "My",
  },
  {
    num: "03",
    title: "Emocje i bliskość",
    desc: "O uczuciach, potrzebach i tym, co dzieje się między nami.",
    file: "03-emocje-i-bliskosc.jpg",
    question: "W jakich chwilach masz poczucie, że naprawdę cię widzę?",
    shortTag: "Emocje i bliskość",
  },
  {
    num: "04",
    title: "Codzienność",
    desc: "O wspólnym życiu na co dzień: obowiązkach, rytmach, wsparciu.",
    file: "04-codziennosc.jpg",
    question: "Co sprawia, że wspólny czas naprawdę nas łączy, a nie tylko mija?",
    shortTag: "Codzienność",
  },
  {
    num: "05",
    title: "Fundamenty",
    desc: "O wartościach, sensie i tym, co nas naprawdę łączy.",
    file: "05-fundamenty.jpg",
    question: "Dlaczego wybierasz mnie dziś?",
    shortTag: "Fundamenty",
  },
  {
    num: "06",
    title: "Marzenia i przyszłość",
    desc: "O tym, co chcemy razem zbudować.",
    file: "06-marzenia-i-przyszlosc.jpg",
    question: "Jak wygląda zwykły wtorek z naszego życia za pięć lat?",
    shortTag: "Marzenia i przyszłość",
  },
  {
    num: "07",
    title: "Pożądanie i namiętność",
    desc: "O bliskości, pragnieniach i intymności.",
    file: "07-pozadanie-i-namietnosc.jpg",
    question: "Co pomaga nam utrzymać iskrę w zabieganym tygodniu?",
    shortTag: "Pożądanie i namiętność",
  },
];

export default function WhatInside() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const sliderContainerRef = useRef<HTMLDivElement>(null);

  const prevIndex = (activeIndex - 1 + decks.length) % decks.length;
  const nextIndex = (activeIndex + 1) % decks.length;

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev === 0 ? decks.length - 1 : prev - 1));
  }, []);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev === decks.length - 1 ? 0 : prev + 1));
  }, []);

  // Obsługa klawiatury (strzałki lewo/prawo)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handlePrev, handleNext]);

  // Obsługa gestu przesunięcia palcem na telefonie
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 45;
    const isRightSwipe = distance < -45;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  const activeDeck = decks[activeIndex];

  return (
    <section className="bg-krem py-14 sm:py-20 border-b border-granat/10 overflow-hidden select-none">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* Nagłówek sekcji */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <span className="text-burgund uppercase tracking-wider text-xs sm:text-sm font-semibold mb-2.5 block">
            7 TEMATYCZNYCH TALII
          </span>
          <h2 className="font-heading text-[28px] sm:text-3xl lg:text-4xl font-bold tracking-tight text-granat leading-tight">
            Co jest w środku
          </h2>
          <p className="text-[17px] sm:text-lg text-granat/80 mt-3 leading-[1.6]">
            Każda talia to inny temat i inna głębia rozmowy. Przesuwaj karty, by zajrzeć do środka każdej z 7 talii.
          </p>
        </div>

        {/* Pasek szybkiego wyboru talii (Pills / Zakładki) */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-8 sm:mb-12 no-scrollbar px-2">
          {decks.map((deck, idx) => {
            const isActive = idx === activeIndex;

            return (
              <button
                key={deck.num}
                type="button"
                onClick={() => setActiveIndex(idx)}
                className={`shrink-0 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-burgund text-krem font-bold shadow-md scale-105"
                    : "bg-krem/90 text-granat/75 hover:bg-roz hover:text-burgund border border-granat/15"
                }`}
              >
                <span className="font-mono text-[11px] opacity-80 mr-1.5">{deck.num}</span>
                {deck.shortTag}
              </button>
            );
          })}
        </div>

        {/* GŁÓWNA SCENA ZE STAŁĄ RAMKĄ TELEFONU I PRZESUWAJĄCYMI SIĘ EKRANAMI */}
        <div 
          ref={sliderContainerRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className="relative flex items-center justify-center gap-4 sm:gap-6 lg:gap-10 my-4"
        >
          {/* Poprzednia karta po lewej (Desktop preview) */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label={`Przejdź do: ${decks[prevIndex].title}`}
            className="hidden md:flex flex-col items-center group cursor-pointer transition-all duration-300 transform hover:scale-[1.02] opacity-45 hover:opacity-85 focus:outline-none"
          >
            <div className="relative w-[180px] lg:w-[220px] aspect-[9/16] rounded-2xl sm:rounded-3xl overflow-hidden shadow-md border-2 border-granat/15 bg-krem transition-all">
              <img
                src={`/images/karty/${decks[prevIndex].file}`}
                alt={decks[prevIndex].title}
                className="w-full h-full object-contain pointer-events-none"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-granat/10 group-hover:bg-transparent transition-colors flex items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-granat/85 text-krem flex items-center justify-center shadow-lg group-hover:bg-burgund transition-colors">
                  <ChevronLeft className="w-5 h-5" />
                </div>
              </div>
            </div>
            <span className="mt-2.5 text-xs font-mono font-bold text-granat/70 group-hover:text-burgund transition-colors">
              ← Talia {decks[prevIndex].num}
            </span>
          </button>

          {/* Centralny smartfon (STAŁA RAMKA) */}
          <div className="relative w-full max-w-[290px] sm:max-w-[320px] md:max-w-[340px] shrink-0 z-20">
            {/* Obudowa telefonu (Phone Mockup) */}
            <div className="relative rounded-[40px] sm:rounded-[46px] p-2.5 sm:p-3 bg-granat shadow-2xl shadow-granat/30 ring-1 ring-white/10 transition-transform duration-300">
              
              {/* Górny głośnik telefonu w ramce (nie zasłania ekranu) */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-12 sm:w-16 h-1 bg-white/20 rounded-full pointer-events-none z-30" />

              {/* Ekran telefonu w proporcji 9:16 – wewnętrzny slider ekranów */}
              <div className="relative aspect-[9/16] w-full rounded-[28px] sm:rounded-[32px] overflow-hidden bg-[#FDFCF8] shadow-inner">
                <div
                  className="flex h-full w-full transition-transform duration-500 ease-out"
                  style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                >
                  {decks.map((deck, idx) => (
                    <div
                      key={deck.num}
                      className="w-full h-full shrink-0 flex items-center justify-center bg-[#FDFCF8]"
                    >
                      <img
                        src={`/images/karty/${deck.file}`}
                        alt={`Stopklatki – karta z talii ${deck.title}: ${deck.question}`}
                        width={1080}
                        height={1920}
                        className="w-full h-full object-contain block select-none pointer-events-none"
                        loading={idx <= 1 ? "eager" : "lazy"}
                      />
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Przyciski nawigacyjne po bokach telefonu na telefonie / małym ekranie */}
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Poprzednia karta"
              className="md:hidden absolute -left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-granat/90 text-krem flex items-center justify-center shadow-lg border border-krem/20 active:scale-95 z-30 cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              type="button"
              onClick={handleNext}
              aria-label="Następna karta"
              className="md:hidden absolute -right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-granat/90 text-krem flex items-center justify-center shadow-lg border border-krem/20 active:scale-95 z-30 cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Następna karta po prawej (Desktop preview) */}
          <button
            type="button"
            onClick={handleNext}
            aria-label={`Przejdź do: ${decks[nextIndex].title}`}
            className="hidden md:flex flex-col items-center group cursor-pointer transition-all duration-300 transform hover:scale-[1.02] opacity-45 hover:opacity-85 focus:outline-none"
          >
            <div className="relative w-[180px] lg:w-[220px] aspect-[9/16] rounded-2xl sm:rounded-3xl overflow-hidden shadow-md border-2 border-granat/15 bg-krem transition-all">
              <img
                src={`/images/karty/${decks[nextIndex].file}`}
                alt={decks[nextIndex].title}
                className="w-full h-full object-contain pointer-events-none"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-granat/10 group-hover:bg-transparent transition-colors flex items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-granat/85 text-krem flex items-center justify-center shadow-lg group-hover:bg-burgund transition-colors">
                  <ChevronRight className="w-5 h-5" />
                </div>
              </div>
            </div>
            <span className="mt-2.5 text-xs font-mono font-bold text-granat/70 group-hover:text-burgund transition-colors">
              Talia {decks[nextIndex].num} →
            </span>
          </button>
        </div>

        {/* Dynamiczny opis aktualnie wybranej talii */}
        <div className="text-center mt-8 sm:mt-10 max-w-xl mx-auto px-4 min-h-[140px] flex flex-col justify-between items-center">
          <div>
            <span className="text-xs sm:text-sm font-mono font-bold text-burgund bg-roz px-3 py-1 rounded-full uppercase tracking-wider mb-2 inline-block">
              Talia {activeDeck.num} z 07
            </span>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-granat tracking-tight">
              {activeDeck.title}
            </h3>
            <p className="font-sans text-[17px] sm:text-lg text-granat/85 mt-2.5 leading-relaxed font-medium">
              {activeDeck.desc}
            </p>
          </div>

          {/* Wskaźniki kropek (Dots) oraz przyciski strzałek */}
          <div className="flex items-center justify-center gap-3 mt-5">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Poprzednia talia"
              className="p-1.5 rounded-full text-granat/60 hover:text-burgund hover:bg-granat/5 transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-1.5">
              {decks.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  aria-label={`Przejdź do talii ${idx + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    idx === activeIndex
                      ? "w-8 bg-burgund"
                      : "w-2.5 bg-granat/25 hover:bg-granat/45"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={handleNext}
              aria-label="Następna talia"
              className="p-1.5 rounded-full text-granat/60 hover:text-burgund hover:bg-granat/5 transition-colors cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Wezwanie do zakupu na dole sekcji (ZMIANA 9: widoczne na desktopie i mobile) */}
        <div className="mt-14 sm:mt-16 flex justify-center">
          <BuyButton
            source="what_inside"
            mobileOnly={false}
            variant="light"
          />
        </div>

      </div>
    </section>
  );
}

