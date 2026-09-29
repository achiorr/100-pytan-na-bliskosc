"use client";

import { CHECKOUT_URL } from "@/lib/constants";
import { trackInitiateCheckout } from "@/lib/pixel";

export default function TopBar() {
  return (
    <aside aria-label="Ogłoszenie" className="bg-granat text-krem text-xs sm:text-sm py-2.5 px-4 text-center font-medium tracking-wide">
      <div className="mx-auto max-w-5xl flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3">
        <span>
          Zatrzymałeś rolkę? Odbierz <strong>„Stopklatki”</strong> — 7 filmów z pytaniami na bliskość (700 pytań)
        </span>
        <a
          href={CHECKOUT_URL}
          onClick={() => trackInitiateCheckout()}
          className="inline-flex items-center gap-1 font-semibold text-roz hover:text-white underline underline-offset-4 transition-colors"
        >
          Odbierz dostęp →
        </a>
      </div>
    </aside>
  );
}
