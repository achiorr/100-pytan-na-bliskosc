"use client";

import { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { CHECKOUT_URL, SAMPLE_VIDEO_URL, SAMPLE_VIDEO_POSTER } from "@/lib/constants";
import { trackInitiateCheckout } from "@/lib/pixel";

export default function NewsletterHero() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch(() => {
            setIsPlaying(false);
          });
      }
    }
  }, []);

  const handleTogglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const handleToggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Kolumna z grafiką i wideo (Lewa na desktopie) */}
          <div className="lg:col-span-6 w-full flex flex-col items-center order-2 lg:order-1">
            
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
                  {/* Znacznik Play na kartach w tle */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-granat/55 backdrop-blur-[2px] border border-krem/30 flex items-center justify-center text-krem shadow-lg">
                      <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-krem ml-0.5 opacity-90" />
                    </div>
                  </div>
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
                  {/* Znacznik Play na kartach w tle */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-granat/55 backdrop-blur-[2px] border border-krem/30 flex items-center justify-center text-krem shadow-lg">
                      <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-krem ml-0.5 opacity-90" />
                    </div>
                  </div>
                </div>
              ))}

              {/* ŚRODKOWA TALIA (01 · Na rozgrzewkę) — Aktywny odtwarzacz z autostartem */}
              <div 
                onClick={handleTogglePlay}
                className="relative w-[210px] sm:w-[250px] md:w-[260px] aspect-[9/16] rounded-2xl sm:rounded-3xl border-2 sm:border-[3px] border-granat/25 bg-granat shadow-2xl overflow-hidden z-30 ring-4 sm:ring-8 ring-krem/80 group cursor-pointer"
                title="Kliknij, aby zatrzymać lub wznowić wideo"
              >
                <video
                  ref={videoRef}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  poster={SAMPLE_VIDEO_POSTER}
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  className="w-full h-full object-cover"
                >
                  <source src={SAMPLE_VIDEO_URL} type="video/mp4" />
                  Twoja przeglądarka nie obsługuje odtwarzacza wideo.
                </video>

                {/* Górna plakietka */}
                <div className="absolute top-2.5 sm:top-3 inset-x-2.5 sm:inset-x-3 flex items-center justify-between pointer-events-none z-10">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-granat/85 backdrop-blur-sm text-krem text-[10px] sm:text-[11px] font-bold shadow-md tracking-wider uppercase border border-krem/20">
                    <span className={`w-2 h-2 rounded-full ${isPlaying ? "bg-emerald-400 animate-pulse" : "bg-burgund"}`} />
                    {isPlaying ? "Wideo leci..." : "Zatrzymano"}
                  </span>

                  {/* Przycisk wyciszenia */}
                  <button
                    type="button"
                    onClick={handleToggleMute}
                    aria-label={isMuted ? "Włącz dźwięk" : "Wycisz dźwięk"}
                    className="pointer-events-auto w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-granat/85 backdrop-blur-sm border border-krem/20 text-krem flex items-center justify-center hover:bg-burgund transition-colors shadow-md"
                  >
                    {isMuted ? (
                      <VolumeX className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-krem/80" />
                    ) : (
                      <Volume2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-krem" />
                    )}
                  </button>
                </div>

                {/* Dyskretna dolna plakietka stanu */}
                <div className="absolute bottom-2.5 sm:bottom-3 inset-x-2.5 sm:inset-x-3 flex justify-center pointer-events-none z-10">
                  {isPlaying ? (
                    <span className="px-3 py-1 rounded-full bg-granat/85 backdrop-blur-sm text-krem text-[10px] sm:text-[11px] font-medium shadow-md border border-krem/15 flex items-center gap-1.5 group-hover:bg-burgund transition-colors">
                      <Pause className="w-3 h-3 fill-krem" />
                      Kliknij, by zatrzymać na pytaniu
                    </span>
                  ) : (
                    <span className="px-3 py-1 rounded-full bg-granat/90 backdrop-blur-sm text-krem text-[10px] sm:text-[11px] font-medium shadow-lg border border-krem/20 flex items-center gap-1.5 group-hover:bg-burgund transition-colors">
                      <Play className="w-3 h-3 fill-krem" />
                      Kliknij, by losować dalej
                    </span>
                  )}
                </div>
              </div>

            </div>

            {/* Wskazówka pod wachlarzem */}
            <p className="text-[11px] sm:text-xs text-granat/70 text-center mt-3 font-medium leading-relaxed max-w-sm">
              👆 <strong>Wypróbuj teraz:</strong> Kliknij wideo w dowolnym momencie, aby zatrzymać na wylosowanym pytaniu!
            </p>

          </div>

          {/* Kolumna z tekstem i CTA (Prawa na desktopie) */}
          <div className="lg:col-span-6 flex flex-col items-start z-10 order-1 lg:order-2">
            
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
                Włączcie apkę, wybierzcie temat rozmowy, i wylosujcie pytanie, a potem porozmawiajcie. Tyle wystarczy, żeby znów się sobą zaciekawić.
              </p>
            </div>

            {/* Główne CTA z ceną promocyjną */}
            <div className="w-full sm:w-auto flex flex-col items-start gap-3">
              <div className="flex items-center gap-3">
                <span className="font-heading text-3xl sm:text-4xl font-bold text-burgund">
                  29 zł
                </span>
                <span className="text-base sm:text-lg text-granat/50 line-through font-medium">
                  67 zł
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-burgund bg-roz px-2.5 py-1 rounded-full">
                  Promocja
                </span>
              </div>

              <a
                href={CHECKOUT_URL}
                onClick={() => trackInitiateCheckout()}
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-2xl bg-burgund px-8 py-4 text-base sm:text-lg font-semibold text-krem shadow-lg hover:brightness-90 hover:shadow-xl transition-all duration-200 group"
              >
                Kupuję cały zestaw za 29 zł
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </a>

              <p className="text-[11px] sm:text-xs text-granat/65 font-medium">
                ⚡ Natychmiastowy dostęp po zakupie · Płacisz raz, korzystasz bez limitu
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
