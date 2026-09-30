"use client";

import {
  Sparkles,
  Users,
  Heart,
  Coffee,
  ShieldCheck,
  Moon,
  Flame,
  Play,
} from "lucide-react";
import { CHECKOUT_URL } from "@/lib/constants";
import { trackInitiateCheckout } from "@/lib/pixel";

export default function WhatInside() {
  const decks = [
    {
      num: "01",
      title: "Na rozgrzewkę",
      desc: "Lekki start: dobre wspomnienia, drobne radości i odrobina zabawy.",
      sample: "„Jaka niespodzianka ode mnie ucieszyła cię najbardziej?”",
      icon: Sparkles,
      img: "/images/karty-tytulowe/01-Na-rozgrzewke-tytul.jpg",
    },
    {
      num: "02",
      title: "My",
      desc: "O tym, kim jesteśmy jako para i skąd przychodzimy.",
      sample: "„Jak wyglądały niedziele albo wolne dni w twoim domu rodzinnym?”",
      icon: Users,
      img: "/images/karty-tytulowe/02-My-tytul.jpg",
    },
    {
      num: "03",
      title: "Emocje i bliskość",
      desc: "O uczuciach, potrzebach i tym, co dzieje się między nami.",
      sample: "„Co we mnie doceniasz, a rzadko mówisz to na głos?”",
      icon: Heart,
      img: "/images/karty-tytulowe/03-Emocje-i-bliskosc-tytul.jpg",
    },
    {
      num: "04",
      title: "Codzienność",
      desc: "O wspólnym życiu na co dzień: obowiązkach, rytmach, wsparciu.",
      sample: "„Kiedy czujesz, że twoja praca dla nas jest naprawdę widziana?”",
      icon: Coffee,
      img: "/images/karty-tytulowe/04-Codziennosc-tytul.jpg",
    },
    {
      num: "05",
      title: "Fundamenty",
      desc: "O wartościach, sensie i tym, co nas naprawdę łączy.",
      sample: "„Kiedy czujesz, że jesteś w życiu dokładnie tam, gdzie trzeba?”",
      icon: ShieldCheck,
      img: "/images/karty-tytulowe/05-Fundamenty-tytul.jpg",
    },
    {
      num: "06",
      title: "Marzenia i przyszłość",
      desc: "O tym, co chcemy razem zbudować.",
      sample: "„Jak wygląda zwykły wtorek z naszego życia za pięć lat?”",
      icon: Moon,
      img: "/images/karty-tytulowe/06-Marzenia-i-przyszlosc-tytul.jpg",
    },
    {
      num: "07",
      title: "Pożądanie i namiętność",
      desc: "O bliskości, pragnieniach i intymności.",
      sample: "„O czym marzysz, kiedy myślisz o wspólnej nocy bez pośpiechu?”",
      icon: Flame,
      img: "/images/karty-tytulowe/07-Pozadanie-i-namietnosc-tytul.jpg",
    },
  ];

  return (
    <section className="bg-krem py-14 sm:py-20 border-b border-granat/10 overflow-hidden">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        
        {/* 1. Nagłówek sekcji */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <span className="text-burgund uppercase tracking-wider text-xs sm:text-sm font-semibold mb-2.5 block">
            ZAWARTOŚĆ ZESTAWU
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-granat leading-tight">
            Co jest w poszczególnych taliach
          </h2>
          <p className="text-sm sm:text-base text-granat/80 mt-3.5 leading-relaxed">
            Każda talia to inny temat i inna głębia: od lekkich pytań na drogę samochodem po rozmowy o wartościach i namiętności na spokojny wieczór. Pytania są skonstruowane w taki sposób, by łączyły i budowały, a nie wynajdywały problemy.
          </p>
        </div>

        {/* 2. Wspólna wizualizacja wszystkich 7 talii */}
        <div className="mb-10 sm:mb-14">
          <div className="flex gap-3 sm:gap-3.5 md:gap-4 overflow-x-auto pb-4 pt-1 px-1 sm:px-0 snap-x snap-mandatory no-scrollbar justify-start md:justify-center items-center">
            {decks.map((deck) => (
              <div
                key={deck.num}
                className="w-[120px] sm:w-[130px] md:w-[125px] lg:w-[132px] shrink-0 snap-center rounded-xl sm:rounded-2xl border border-granat/15 bg-krem shadow-sm hover:shadow-md hover:-translate-y-1.5 transition-all duration-300 overflow-hidden group cursor-default"
              >
                <div className="relative aspect-[9/16] w-full overflow-hidden bg-kremDim">
                  <img
                    src={deck.img}
                    alt={`Talia ${deck.num} — ${deck.title}`}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  {/* Znacznik wideo */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-granat/60 backdrop-blur-[2px] border border-krem/30 flex items-center justify-center text-krem shadow-md group-hover:scale-110 group-hover:bg-burgund transition-all duration-200">
                      <Play className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-krem ml-0.5 opacity-95" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-[11px] text-granat/50 text-center mt-1 md:hidden font-medium">
            👉 Przesuń w bok, aby zobaczyć okładki wszystkich 7 talii
          </p>
        </div>

        {/* 3. Kompaktowe kafelki z opisami talii (wygodne na mobile i desktopie) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {decks.map((deck) => {
            const Icon = deck.icon;
            return (
              <div
                key={deck.num}
                className="rounded-2xl border border-granat/10 bg-kremDim p-5 sm:p-6 shadow-sm flex flex-col justify-between hover:border-burgund/30 transition-colors group"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-2.5">
                    <div className="flex items-center gap-2.5">
                      <span className="text-xs font-mono font-bold text-burgund bg-roz px-2 py-0.5 rounded-md">
                        {deck.num}
                      </span>
                      <h3 className="font-heading font-bold text-base sm:text-lg text-granat">
                        {deck.title}
                      </h3>
                    </div>
                    <Icon className="w-4 h-4 text-burgund/60 shrink-0 group-hover:text-burgund transition-colors" />
                  </div>

                  <p className="text-xs sm:text-sm text-granat/70 mb-3 leading-relaxed">
                    {deck.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-granat/5 text-xs italic text-granat/80">
                  Przykładowe pytanie:{" "}
                  <span className="font-normal text-burgund">
                    {deck.sample}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* 4. CTA na końcu sekcji */}
        <div className="mt-12 sm:mt-16 text-center">
          <a
            href={CHECKOUT_URL}
            onClick={() => trackInitiateCheckout()}
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-2xl bg-burgund px-8 py-4 text-base sm:text-lg font-semibold text-krem shadow-lg hover:brightness-90 hover:shadow-xl transition-all duration-200 group"
          >
            Kupuję cały zestaw za 29 zł
            <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>

      </div>
    </section>
  );
}
