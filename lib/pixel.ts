export const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FB_PIXEL_ID || "932014270181668";

declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
    _fbq?: any;
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
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    window.fbq("track", "Lead", {
      content_name: params?.content_name ?? "Lead Magnet - Zapis na newsletter",
      content_category: params?.content_category ?? "Newsletter",
      value: params?.value ?? 0,
      currency: params?.currency ?? "PLN",
    });
  }
};
