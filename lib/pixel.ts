export const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FB_PIXEL_ID || "932014270181668";
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || "G-2WRR61JWYS";

declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
    _fbq?: any;
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

export const trackPageView = () => {
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    window.fbq("track", "PageView");
  }
};

export const trackDemoPause = (deck: string = "Na rozgrzewkę") => {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "demo_pause", {
      deck: deck,
    });
  }
};

export interface LeadParams {
  content_name?: string;
  content_category?: string;
  value?: number;
  currency?: string;
}

export const trackLead = (params?: LeadParams) => {
  const contentName = params?.content_name ?? "100 pytań na bliskość";

  // 1. Meta Pixel
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    window.fbq("track", "Lead", {
      content_name: contentName,
      content_category: params?.content_category ?? "Lead Magnet",
      value: params?.value ?? 0,
      currency: params?.currency ?? "PLN",
    });
  }

  // 2. Google Analytics 4
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "generate_lead", {
      event_category: "Lead Magnet",
      event_label: contentName,
      value: params?.value ?? 0,
      currency: params?.currency ?? "PLN",
    });
  }
};

export const trackCtaClick = (location: string) => {
  const contentName = "Stopklatki – 7 talii z pytaniami na bliskość";
  const value = 29;
  const currency = "PLN";

  // 1. Google Analytics 4: cta_click + begin_checkout
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "cta_click", {
      location: location,
    });
    window.gtag("event", "begin_checkout", {
      items: [{ item_name: contentName, price: value }],
      value: value,
      currency: currency,
    });
  }

  // 2. Meta Pixel: InitiateCheckout
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    window.fbq("track", "InitiateCheckout", {
      content_name: contentName,
      value: value,
      currency: currency,
    });
  }
};

export const trackInitiateCheckout = (params?: { value?: number; currency?: string; content_name?: string }) => {
  trackCtaClick("oferta");
};

export const trackFaqOpen = (question: string) => {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "faq_open", {
      question: question,
    });
  }
};

export const setCookieConsent = (consent: "granted" | "denied") => {
  if (typeof window === "undefined") return;

  const maxAge = 365 * 24 * 60 * 60; // 12 miesięcy
  document.cookie = `cookie_consent=${consent}; max-age=${maxAge}; path=/; SameSite=Lax`;
  try {
    localStorage.setItem("cookie_consent", consent);
  } catch {}

  // Google Consent Mode v2 update
  if (typeof window.gtag === "function") {
    window.gtag("consent", "update", {
      analytics_storage: consent,
      ad_storage: consent,
      ad_user_data: consent,
      ad_personalization: consent,
    });
  }

  // Meta Pixel consent update
  if (typeof window.fbq === "function") {
    if (consent === "granted") {
      window.fbq("consent", "grant");
      window.fbq("track", "PageView");
    } else {
      window.fbq("consent", "revoke");
    }
  }
};

export const getCookieConsent = (): "granted" | "denied" | null => {
  if (typeof window === "undefined") return null;
  const match = document.cookie.match(/cookie_consent=(granted|denied)/);
  if (match) return match[1] as "granted" | "denied";
  try {
    const stored = localStorage.getItem("cookie_consent");
    if (stored === "granted" || stored === "denied") return stored as "granted" | "denied";
  } catch {}
  return null;
};
