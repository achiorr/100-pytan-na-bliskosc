import Script from "next/script";
import { FB_PIXEL_ID } from "@/lib/pixel";

export default function FacebookPixel() {
  return (
    <>
      <Script
        id="fb-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');

            // Default: revoke consent until granted by user
            try {
              var isGranted = document.cookie.indexOf('cookie_consent=granted') !== -1 || localStorage.getItem('cookie_consent') === 'granted';
              if (isGranted) {
                fbq('consent', 'grant');
              } else {
                fbq('consent', 'revoke');
              }
            } catch(e) {
              fbq('consent', 'revoke');
            }

            // Anonimowy identyfikator odwiedzającego (tylko po zgodzie na cookies),
            // ten sam, który trafia do API konwersji jako external_id.
            var skVid = null;
            try {
              var vidMatch = document.cookie.match(/(?:^|; )sk_vid=([0-9a-f]{64})/);
              if (vidMatch && document.cookie.indexOf('cookie_consent=granted') !== -1) skVid = vidMatch[1];
            } catch(e) {}
            if (skVid) {
              fbq('init', '${FB_PIXEL_ID}', { external_id: skVid });
            } else {
              fbq('init', '${FB_PIXEL_ID}');
            }
            // Wspólny identyfikator PageView dla piksela i API konwersji
            // (deduplikacja) — odczytuje go komponent MetaServerPageView.
            try {
              window.__fbPageViewId = (window.crypto && window.crypto.randomUUID)
                ? window.crypto.randomUUID()
                : Date.now() + '-' + Math.random().toString(36).slice(2, 10);
            } catch(e) {
              window.__fbPageViewId = Date.now() + '-' + Math.random().toString(36).slice(2, 10);
            }
            fbq('track', 'PageView', {}, { eventID: window.__fbPageViewId });
          `,
        }}
      />
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>
    </>
  );
}
