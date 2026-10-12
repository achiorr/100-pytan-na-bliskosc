"use client";

import { useEffect } from "react";
import { sendServerEvent } from "@/lib/metaCapi";

declare global {
  interface Window {
    __fbPageViewId?: string;
  }
}

// Wysyła PageView przez API konwersji z tym samym identyfikatorem,
// którego użył piksel w przeglądarce (ustawia go FacebookPixel.tsx).
// Dla osób bez zgody na cookies nic nie wysyła — sprawdza to sendServerEvent.
// Po udzieleniu zgody PageView wysyła setCookieConsent w lib/pixel.ts.
export default function MetaServerPageView() {
  useEffect(() => {
    let attempts = 0;
    const timer = window.setInterval(() => {
      attempts += 1;
      const id = window.__fbPageViewId;
      if (id) {
        window.clearInterval(timer);
        sendServerEvent("PageView", id);
      } else if (attempts >= 20) {
        window.clearInterval(timer);
      }
    }, 250);
    return () => window.clearInterval(timer);
  }, []);

  return null;
}
