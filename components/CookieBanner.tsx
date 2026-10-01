"use client";

import { useState, useEffect } from "react";
import { setCookieConsent, getCookieConsent } from "@/lib/pixel";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Sprawdzamy czy użytkownik dokonał już wyboru
    const consent = getCookieConsent();
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    setCookieConsent("granted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    setCookieConsent("denied");
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <aside
      role="dialog"
      aria-label="Zgoda na pliki cookies"
      className="fixed bottom-3 left-3 right-3 sm:bottom-5 sm:left-5 sm:right-auto sm:max-w-md z-[100] rounded-2xl sm:rounded-3xl border border-[#2A3152]/15 bg-[#FDFCF8] p-5 sm:p-6 shadow-[0_10px_35px_rgba(42,49,82,0.18)] backdrop-blur-xs transition-all duration-300"
    >
      <div className="flex flex-col gap-3">
        <h3 className="font-heading text-lg sm:text-xl font-bold text-[#2A3152]">
          Szanujemy Twoją prywatność
        </h3>

        <p className="font-sans text-xs sm:text-sm text-[#2A3152]/80 leading-relaxed">
          Używamy plików cookies i podobnych technologii do analizy ruchu (Google Analytics) oraz dopasowania treści marketingowych (Meta Pixel). Możesz zaakceptować wszystkie zgody lub je odrzucić. Więcej informacji znajdziesz w naszej{" "}
          <a
            href="https://szczesliwi-razem.pl/polityka-prywatnosci"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#AC1644] underline font-medium hover:opacity-85 transition-opacity"
          >
            polityce prywatności
          </a>
          .
        </p>

        <div className="flex items-center gap-2.5 pt-1.5 mt-1">
          <button
            type="button"
            onClick={handleAccept}
            className="flex-1 rounded-xl bg-[#AC1644] px-4 py-2.5 text-xs sm:text-sm font-semibold text-[#FDFCF8] shadow-sm hover:brightness-90 active:scale-98 transition-all cursor-pointer text-center"
          >
            Akceptuję
          </button>
          <button
            type="button"
            onClick={handleDecline}
            className="flex-1 rounded-xl border border-[#2A3152]/20 bg-transparent px-4 py-2.5 text-xs sm:text-sm font-semibold text-[#2A3152] hover:bg-[#2A3152]/5 active:scale-98 transition-all cursor-pointer text-center"
          >
            Odrzucam
          </button>
        </div>
      </div>
    </aside>
  );
}
