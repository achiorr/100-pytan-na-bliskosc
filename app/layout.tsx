import type { Metadata } from "next";
import FacebookPixel from "@/components/FacebookPixel";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.stopklatki.pl"),
  title: "Stopklatki — Pauza na dobrą rozmowę | Szczęśliwi Razem",
  description:
    "Wirtualne karty do rozmów dla par. 7 talii i 700 pytań w apce — zatrzymajcie film w dowolnym momencie i losujcie pytania, które budują bliskość.",
  openGraph: {
    title: "Stopklatki — Pauza na dobrą rozmowę",
    description:
      "Wirtualne karty do rozmów dla par. 7 talii i 700 pytań w apce — wystarczy jedna pauza, by zacząć dobrą rozmowę.",
    url: "https://www.stopklatki.pl",
    siteName: "Stopklatki — Szczęśliwi Razem",
    locale: "pl_PL",
    type: "website",
    images: [
      {
        url: "/images/og-image.png",
        width: 800,
        height: 450,
        alt: "Stopklatki — Pauza na dobrą rozmowę · 7 talii · 700 pytań dla par",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stopklatki — Pauza na dobrą rozmowę",
    description:
      "Wirtualne karty do rozmów dla par. 7 talii i 700 pytań w apce — wystarczy jedna pauza, by zacząć dobrą rozmowę.",
    images: ["/images/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@500;600;700&family=Montserrat:ital,wght@0,300..900;1,300..900&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-krem font-sans text-granat antialiased selection:bg-burgund selection:text-krem">
        <FacebookPixel />
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
