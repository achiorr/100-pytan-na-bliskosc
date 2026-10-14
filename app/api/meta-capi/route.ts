import { NextResponse } from "next/server";
import { FB_PIXEL_ID } from "@/lib/pixel";

// API konwersji Meta: przyjmuje zdarzenie z przeglądarki i wysyła je
// do Meta z serwera, z adresem IP i przeglądarką użytkownika.
//
// Zmienne środowiskowe (Vercel → Settings → Environment Variables):
//   META_CAPI_TOKEN      – token dostępu z Menedżera zdarzeń (wymagany)
//   META_CAPI_TEST_CODE  – kod zdarzeń testowych (opcjonalny, tylko do testów)
//
// Bez tokenu endpoint nic nie wysyła, więc wdrożenie jest bezpieczne
// jeszcze przed jego dodaniem.

const GRAPH_VERSION = "v23.0";
const ALLOWED_EVENTS = new Set(["PageView", "AddToCart", "InitiateCheckout", "Lead"]);
const ALLOWED_HOSTS = new Set(["stopklatki.pl", "www.stopklatki.pl"]);

const pickString = (value: unknown, max = 500): string | undefined =>
  typeof value === "string" && value.length > 0 ? value.slice(0, max) : undefined;

const clientIp = (request: Request): string | undefined => {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return request.headers.get("x-real-ip") || undefined;
};

export async function POST(request: Request) {
  const token = process.env.META_CAPI_TOKEN;
  if (!token) {
    return new NextResponse(null, { status: 204 });
  }

  let body: any;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid json" }, { status: 400 });
  }

  const eventName = pickString(body?.event_name, 50);
  const eventId = pickString(body?.event_id, 100);
  const sourceUrl = pickString(body?.event_source_url, 2000);

  if (!eventName || !ALLOWED_EVENTS.has(eventName) || !eventId || !sourceUrl) {
    return NextResponse.json({ error: "invalid event" }, { status: 400 });
  }

  // Przyjmujemy tylko zdarzenia ze strony Stopklatek.
  try {
    if (!ALLOWED_HOSTS.has(new URL(sourceUrl).host)) {
      return NextResponse.json({ error: "invalid source" }, { status: 400 });
    }
  } catch {
    return NextResponse.json({ error: "invalid source" }, { status: 400 });
  }

  const userData: Record<string, string> = {};
  const ip = clientIp(request);
  const ua = request.headers.get("user-agent");
  const fbp = pickString(body?.fbp, 200);
  const fbc = pickString(body?.fbc, 500);
  const externalId = pickString(body?.external_id, 100);
  if (ip) userData.client_ip_address = ip;
  if (ua) userData.client_user_agent = ua;
  if (fbp) userData.fbp = fbp;
  if (fbc) userData.fbc = fbc;
  // Anonimowy identyfikator odwiedzającego (losowe 64 znaki hex, bez danych osobowych).
  if (externalId && /^[0-9a-f]{64}$/.test(externalId)) userData.external_id = externalId;

  const event: Record<string, unknown> = {
    event_name: eventName,
    event_time: Math.floor(Date.now() / 1000),
    event_id: eventId,
    event_source_url: sourceUrl,
    action_source: "website",
    user_data: userData,
  };

  const customData = body?.custom_data;
  if (customData && typeof customData === "object" && !Array.isArray(customData)) {
    event.custom_data = customData;
  }

  const payload: Record<string, unknown> = { data: [event] };
  const testCode = process.env.META_CAPI_TEST_CODE;
  if (testCode) payload.test_event_code = testCode;

  try {
    const response = await fetch(
      `https://graph.facebook.com/${GRAPH_VERSION}/${FB_PIXEL_ID}/events?access_token=${encodeURIComponent(token)}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }
    );
    const result = await response.json().catch(() => ({}));
    if (!response.ok) {
      console.error("[Meta CAPI] error", response.status, JSON.stringify(result));
      return NextResponse.json({ ok: false }, { status: 502 });
    }
    return NextResponse.json({ ok: true, events_received: result?.events_received ?? null });
  } catch (error) {
    console.error("[Meta CAPI] request failed", error);
    return NextResponse.json({ ok: false }, { status: 502 });
  }
}
