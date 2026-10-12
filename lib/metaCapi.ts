// Wysyłka zdarzeń Meta po stronie serwera (API konwersji).
//
// Każde zdarzenie dostaje wspólny identyfikator (event_id), który trafia
// zarówno do piksela w przeglądarce (eventID), jak i do API konwersji.
// Dzięki temu Meta łączy oba sygnały w jedno zdarzenie (deduplikacja),
// a nie liczy go podwójnie.
//
// Zdarzenia serwerowe wysyłamy tylko po zgodzie na cookies — tak samo
// jak piksel w przeglądarce.

export type ServerEventName =
  | "PageView"
  | "AddToCart"
  | "InitiateCheckout"
  | "Lead";

const ENDPOINT = "/api/meta-capi";
const ATTRIBUTION_KEY = "stopklatki_attribution";

export const newEventId = (): string => {
  try {
    if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
      return crypto.randomUUID();
    }
  } catch {}
  return `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
};

const readCookie = (name: string): string | undefined => {
  if (typeof document === "undefined") return undefined;
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : undefined;
};

const hasConsent = (): boolean => {
  if (typeof window === "undefined") return false;
  if (document.cookie.indexOf("cookie_consent=granted") !== -1) return true;
  try {
    return localStorage.getItem("cookie_consent") === "granted";
  } catch {
    return false;
  }
};

// Identyfikator kliknięcia z reklamy. Piksel zapisuje go w cookie _fbc,
// ale zanim to zrobi (albo gdy cookie jeszcze nie ma), budujemy go sami
// z parametru fbclid — z adresu albo z zapamiętanych parametrów wejścia.
const getFbc = (): string | undefined => {
  const fromCookie = readCookie("_fbc");
  if (fromCookie) return fromCookie;

  let fbclid: string | null = null;
  try {
    fbclid = new URLSearchParams(window.location.search).get("fbclid");
    if (!fbclid) {
      const stored = JSON.parse(sessionStorage.getItem(ATTRIBUTION_KEY) || "{}");
      fbclid = stored.fbclid || null;
    }
  } catch {}
  return fbclid ? `fb.1.${Date.now()}.${fbclid}` : undefined;
};

export const sendServerEvent = (
  eventName: ServerEventName,
  eventId: string,
  customData?: Record<string, unknown>
): void => {
  if (typeof window === "undefined" || !hasConsent()) return;

  const payload = JSON.stringify({
    event_name: eventName,
    event_id: eventId,
    event_source_url: window.location.href,
    fbp: readCookie("_fbp"),
    fbc: getFbc(),
    custom_data: customData,
  });

  try {
    // sendBeacon przeżywa przejście do sklepu po kliknięciu „Kup”.
    if (typeof navigator !== "undefined" && typeof navigator.sendBeacon === "function") {
      const ok = navigator.sendBeacon(
        ENDPOINT,
        new Blob([payload], { type: "application/json" })
      );
      if (ok) return;
    }
    fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: payload,
      keepalive: true,
    }).catch(() => {});
  } catch {}
};
