import type { Metadata } from "next";
import FacebookPixel from "@/components/FacebookPixel";
import "./globals.css";

export const metadata: Metadata = {
  title: "100 pytań na bliskość – rozmowy, które zbliżają | Szczęśliwi Razem",
  description:
    "Pobierz bezpłatny zestaw 100 pytań dla par. Proste pytania, które pomagają zatrzymać się na chwilę, spojrzeć na siebie z ciekawością i rozmawiać o tym, co naprawdę ważne.",
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
        {children}
      </body>
    </html>
  );
}
