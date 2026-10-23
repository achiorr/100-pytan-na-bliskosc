"use client";

import { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { SAMPLE_VIDEO_URL, SAMPLE_VIDEO_POSTER } from "@/lib/constants";
import { trackDemoPause } from "@/lib/pixel";
import BuyButton from "@/components/BuyButton";

export default function HowToUse() {
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
        trackDemoPause("Jak korzystać");
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

  const steps = [
    {
      num: "1",
      lead: "Zainstalujcie prostą aplikację",
      tail: "dostęp i instrukcje dostaniecie mailem zaraz po zakupie.",
    },
    {
      num: "2",
      lead: "Wybierzcie temat rozmowy i wylosujcie pytanie.",
      tail: "",
    },
    {
      num: "3",
      lead: "Zatrzymajcie się i odpowiedzcie na pytanie",
      tail: "słuchajcie, żeby zrozumieć, dopytujcie.",
    },
  ];

  return (
    <section className="bg-sageLight py-14 sm:py-20 border-b border-granat/10">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        
        {/* Nagłówek sekcji */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-burgund uppercase tracking-wider text-xs sm:text-sm font-semibold mb-2.5 block">
            ZASADY GRY W 3 KROKACH
          </span>
          <h2 className="font-heading text-[28px] sm:text-3xl lg:text-4xl font-bold tracking-tight text-granat leading-tight">
            Jak korzystać ze Stopklatek
          </h2>
        </div>

        {/* Układ: 3 duże kroki + screen z telefonu z wideo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center max-w-4xl mx-auto">
          
          {/* Lewa kolumna: 3 kroki */}
          <div className="lg:col-span-7 space-y-8 sm:space-y-10">
            {steps.map((step) => (
              <div key={step.num} className="flex items-start gap-4 sm:gap-6">
                {/* Numer w kółku */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-burgund text-krem font-heading font-bold text-xl sm:text-2xl flex items-center justify-center shrink-0 shadow-md">
                  {step.num}
                </div>

                {/* Duża czcionka tekstu kroku */}
                <div className="pt-1.5 sm:pt-2">
                  <p className="text-[19px] sm:text-2xl text-granat leading-snug sm:leading-relaxed font-sans">
                    <strong className="font-bold">{step.lead}</strong>
                    {step.tail ? ` – ${step.tail}` : ""}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Prawa kolumna: wideo z aplikacji w mockupie telefonu */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="w-full max-w-[280px] sm:max-w-[310px]">
              
              {/* Phone Mockup Frame */}
              <div className="relative rounded-[38px] sm:rounded-[44px] border-[8px] sm:border-[10px] border-granat bg-granat shadow-2xl shadow-granat/25 ring-1 ring-white/10 transition-transform duration-300 hover:scale-[1.01]">
                
                {/* Górny głośnik telefonu w ramce */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-12 sm:w-16 h-1 bg-white/20 rounded-full pointer-events-none z-20" />

                {/* Ekran telefonu w proporcji 9:16 z wideo */}
                <div 
                  onClick={handleTogglePlay}
                  className="relative aspect-[9/16] w-full rounded-[28px] sm:rounded-[32px] overflow-hidden bg-granat select-none group cursor-pointer"
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

                  {/* Górna plakietka stanu + przycisk audio */}
                  <div className="absolute top-3 inset-x-3 flex items-center justify-between pointer-events-none z-10">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-granat/85 backdrop-blur-sm text-krem text-[10px] font-bold shadow-md tracking-wider uppercase border border-krem/20">
                      <span className={`w-2 h-2 rounded-full ${isPlaying ? "bg-emerald-400 animate-pulse" : "bg-burgund"}`} />
                      {isPlaying ? "Wideo leci..." : "Zatrzymano"}
                    </span>

                    <button
                      type="button"
                      onClick={handleToggleMute}
                      aria-label={isMuted ? "Włącz dźwięk" : "Wycisz dźwięk"}
                      className="pointer-events-auto w-7 h-7 rounded-full bg-granat/85 backdrop-blur-sm border border-krem/20 text-krem flex items-center justify-center hover:bg-burgund transition-colors shadow-md cursor-pointer"
                    >
                      {isMuted ? (
                        <VolumeX className="w-3.5 h-3.5 text-krem/80" />
                      ) : (
                        <Volume2 className="w-3.5 h-3.5 text-krem" />
                      )}
                    </button>
                  </div>

                  {/* Dolna plakietka instrukcji */}
                  <div className="absolute bottom-3 inset-x-3 flex justify-center pointer-events-none z-10">
                    {isPlaying ? (
                      <span className="px-3 py-1 rounded-full bg-granat/85 backdrop-blur-sm text-krem text-[11px] font-medium shadow-md border border-krem/15 flex items-center gap-1.5 group-hover:bg-burgund transition-colors">
                        <Pause className="w-3 h-3 fill-krem" />
                        Dotknij, by wylosować
                      </span>
                    ) : (
                      <span className="px-3 py-1 rounded-full bg-granat/90 backdrop-blur-sm text-krem text-[11px] font-medium shadow-lg border border-krem/20 flex items-center gap-1.5 group-hover:bg-burgund transition-colors">
                        <Play className="w-3 h-3 fill-krem" />
                        Dotknij, by wznowić
                      </span>
                    )}
                  </div>

                </div>

              </div>
            </div>

            {/* Wskazówka pod telefonem */}
            <p className="text-[13px] sm:text-xs text-granat/75 text-center mt-3 font-medium leading-normal max-w-xs">
              👆 <strong>Kliknij wideo</strong>, aby zatrzymać na pytaniu i sprawdzić, jak to działa w praktyce.
            </p>
          </div>

        </div>

        {/* Przycisk zakupu na mobile (ZMIANA 9: po sekcji Jak korzystać, ukryty na desktopie) */}
        <div className="mt-12 sm:mt-16 flex justify-center">
          <BuyButton
            source="how_to_use"
            mobileOnly={true}
            variant="light"
          />
        </div>

      </div>
    </section>
  );
}
