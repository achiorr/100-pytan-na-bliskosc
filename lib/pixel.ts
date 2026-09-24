export const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FB_PIXEL_ID || "932014270181668";
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID;

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

export interface LeadParams {
  content_name?: string;
  content_category?: string;
  value?: number;
  currency?: string;
}

export const trackLead = (params?: LeadParams) => {
  const contentName = params?.content_name ?? "100 pytań na bliskość";

  // 1. Meta Pixel (Facebook Ads)
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
