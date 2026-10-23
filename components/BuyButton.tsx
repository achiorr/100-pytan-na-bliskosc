"use client";

import { CHECKOUT_URL } from "@/lib/constants";
import { trackCtaClick } from "@/lib/pixel";

interface BuyButtonProps {
  source: string;
  mobileOnly?: boolean;
  variant?: "light" | "dark";
  className?: string;
}

export default function BuyButton({
  source,
  mobileOnly = false,
  variant = "light",
  className = "",
}: BuyButtonProps) {
  const isDark = variant === "dark";

  return (
    <div
      className={`text-center ${mobileOnly ? "block md:hidden" : "block"} ${className}`}
    >
      {/* Informacja o cenie z przekreślonym 67 zł */}
      <div className="flex items-center justify-center gap-2 mb-2.5">
        <span
          className={`text-sm sm:text-base font-semibold line-through decoration-rose-500 decoration-[2px] ${
            isDark ? "text-krem/60" : "text-granat/60"
          }`}
        >
          67 zł
        </span>
        <span
          className={`text-lg sm:text-xl font-bold font-heading ${
            isDark ? "text-emerald-300" : "text-emerald-700"
          }`}
        >
          29 zł
        </span>
        <span
          className={`text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
            isDark
              ? "bg-emerald-950/70 text-emerald-300 border border-emerald-500/30"
              : "bg-emerald-50 text-emerald-800 border border-emerald-200"
          }`}
        >
          Cena premierowa
        </span>
      </div>

      {/* Główny przycisk malinowy (#AC1644) */}
      <a
        href={CHECKOUT_URL}
        onClick={() => trackCtaClick(source)}
        className="w-full sm:w-auto inline-flex items-center justify-center rounded-2xl bg-burgund px-7 sm:px-9 py-4 text-base sm:text-lg font-semibold text-krem shadow-lg hover:brightness-110 hover:shadow-xl transition-all duration-200 group cursor-pointer border border-krem/10"
      >
        <span>Kupuję cały zestaw za 29 zł</span>
        <span className="ml-2 group-hover:translate-x-1 transition-transform">
          →
        </span>
      </a>

      {/* Drobna gwarancja / informacja pod przyciskiem */}
      <p
        className={`text-xs sm:text-[13px] mt-2 font-medium ${
          isDark ? "text-krem/70" : "text-granat/65"
        }`}
      >
        Jednorazowy zakup · Natychmiastowy dostęp mailem
      </p>
    </div>
  );
}
