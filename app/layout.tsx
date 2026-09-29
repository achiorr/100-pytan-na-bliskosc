import type { Metadata } from "next";
import FacebookPixel from "@/components/FacebookPixel";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import "./globals.css";

export const metadata: Metadata = {
  title: "Stopklatki — Pytania, które zatrzymują | Szczęśliwi Razem",
  description:
    "Wygodne zestawy pytań, które będą prowadzić do głębokich rozmów. 7 filmów z pytaniami dla par.",
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
