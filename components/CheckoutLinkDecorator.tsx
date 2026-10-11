"use client";

import { useEffect } from "react";

// Przekazuje UTM-y i identyfikator kliknięcia z reklamy (fbclid) do sklepu
// na edu.5kamieni.pl, żeby źródło wizyty nie ginęło przy zmianie domeny.
// Działa dla wszystkich linków do sklepu, bez zmian w poszczególnych przyciskach.

const CHECKOUT_HOST = "edu.5kamieni.pl";
const STORAGE_KEY = "stopklatki_attribution";
const PARAMS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "fbclid",
  "gclid",
];

function readStored(): Record<string, string> {
  try {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY) || "{}");
  } catch {
    return {};
  }
}

export default function CheckoutLinkDecorator() {
  useEffect(() => {
    // 1. Zapamiętaj parametry z adresu wejścia (na wypadek nawigacji po stronie).
    try {
      const current = new URLSearchParams(window.location.search);
      const found: Record<string, string> = {};
      PARAMS.forEach((key) => {
        const value = current.get(key);
        if (value) found[key] = value;
      });
      if (Object.keys(found).length > 0) {
        sessionStorage.setItem(STORAGE_KEY, JSON.stringify(found));
      }
    } catch {}

    // 2. Przy kliknięciu w link do sklepu dopisz zapamiętane parametry.
    const onClick = (event: MouseEvent) => {
      const target = event.target as Element | null;
      const link = target?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!link) return;

      let url: URL;
      try {
        url = new URL(link.href);
      } catch {
        return;
      }
      if (url.host !== CHECKOUT_HOST) return;

      const stored = readStored();
      const current = new URLSearchParams(window.location.search);
      PARAMS.forEach((key) => {
        const value = current.get(key) || stored[key];
        if (value && !url.searchParams.has(key)) {
          url.searchParams.set(key, value);
        }
      });
      link.href = url.toString();
    };

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return null;
}
