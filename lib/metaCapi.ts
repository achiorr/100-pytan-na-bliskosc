// Wysyłka zdarzeń Meta po stronie serwera (API konwersji).
//
// Każde zdarzenie dostaje wspólny identyfikator (event_id), który trafia
// zarówno do piksela w przeglądarce (eventID), jak i do API konwersji.
// Dzięki temu Meta łączy oba sygnały w jedno zdarzenie (deduplikacja),
// a nie liczy go podwójnie.
//
// Zdarzenia serwerowe wysyłamy tylko po zgodzie na cookies — tak samo
// jak piksel w przeglądarce.
//
// Każde zdarzenie z serwera musi mieć identyfikator, po którym Meta może
// rozpoznać osobę (fbp, fbc albo external_id). Gdy piksel w przeglądarce jest
// zablokowany (np. przez blokera reklam), nie zapisuje cookie _fbp, więc po
// zgodzie na cookies tworzymy je sami w formacie Meta, a dodatkowo nadajemy
// anonimowy identyfikator odwiedzającego (external_id). Nie zawiera on żadnych
// danych osobowych: to losowy ciąg znaków zapamiętany w cookie na tej stronie.

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

export const VISITOR_COOKIE = "sk_vid";
const ONE_YEAR = 365 * 24 * 60 * 60;
const NINETY_DAYS = 90 * 24 * 60 * 60;

// Cookie zapisujemy na całą domenę stopklatki.pl (z „www” i bez),
// tak jak robi to piksel Meta.
const cookieDomain = (): string => {
  if (typeof window === "undefined") return "";
  const host = window.location.hostname;
  return host === "stopklatki.pl" || host.endsWith(".stopklatki.pl")
    ? "; domain=.stopklatki.pl"
    : "";
};

const writeCookie = (name: string, value: string, maxAge: number): void => {
  try {
    document.cookie = `${name}=${encodeURIComponent(value)}; max-age=${maxAge}; path=/${cookieDomain()}; SameSite=Lax`;
  } catch {}
};

const randomHex = (bytes: number): string => {
  try {
    const arr = new Uint8Array(bytes);
    crypto.getRandomValues(arr);
    return Array.from(arr, (b) => b.toString(16).padStart(2, "0")).join("");
  } catch {
    let out = "";
    for (let i = 0; i < bytes * 2; i++) out += Math.floor(Math.random() * 16).toString(16);
    return out;
  }
};

const randomDigits = (length: number): string => {
  let out = "";
  for (let i = 0; i < length; i++) out += Math.floor(Math.random() * 10).toString();
  return out.replace(/^0/, "1");
};

// Anonimowy identyfikator odwiedzającego (64 znaki hex). Wygląda jak skrót
// SHA-256, więc Meta przyjmuje go bez ponownego haszowania.
const getOrCreateVisitorId = (): string => {
  const existing = readCookie(VISITOR_COOKIE);
  if (existing && /^[0-9a-f]{64}$/.test(existing)) return existing;
  const fresh = randomHex(32);
  writeCookie(VISITOR_COOKIE, fresh, ONE_YEAR);
  return fresh;
};

// Cookie _fbp w formacie Meta: fb.1.<czas w ms>.<losowa liczba>.
// Jeśli piksel działa, zwykle już je zapisał; wtedy nic nie zmieniamy.
const getOrCreateFbp = (): string => {
  const existing = readCookie("_fbp");
  if (existing) return existing;
  const fresh = `fb.1.${Date.now()}.${randomDigits(10)}`;
  writeCookie("_fbp", fresh, NINETY_DAYS);
  return fresh;
};

// Przygotowuje identyfikatory zaraz po zgodzie albo przy wejściu na stronę,
// żeby były gotowe, zanim ktoś kliknie „Kup” i przejdzie do sklepu.
export const ensureMetaIdentifiers = (): void => {
  if (typeof window === "undefined" || !hasConsent()) return;
  getOrCreateVisitorId();
  getOrCreateFbp();
};

// Po odrzuceniu zgody usuwamy identyfikatory reklamowe zapisane przez stronę.
export const clearMetaIdentifiers = (): void => {
  if (typeof document === "undefined") return;
  [VISITOR_COOKIE, "_fbp", "_fbc"].forEach((name) => writeCookie(name, "", 0));
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
  if (!fbclid) return undefined;
  // Zapamiętujemy _fbc w cookie, żeby kolejne zdarzenia (także po powrocie
  // na stronę) miały ten sam identyfikator kliknięcia z reklamy.
  const fbc = `fb.1.${Date.now()}.${fbclid}`;
  writeCookie("_fbc", fbc, NINETY_DAYS);
  return fbc;
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
    fbp: getOrCreateFbp(),
    fbc: getFbc(),
    external_id: getOrCreateVisitorId(),
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
