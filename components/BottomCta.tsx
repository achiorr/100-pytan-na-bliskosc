import NewsletterForm from "./NewsletterForm";
import { Sparkles } from "lucide-react";

export default function BottomCta() {
  return (
    <section className="bg-krem py-14 sm:py-20 border-b border-granat/10">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-roz px-3.5 py-1 text-xs font-semibold text-burgund mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>POBIERZ CAŁY ZESTAW</span>
        </div>

        <h2 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-granat leading-tight mb-3">
          100 pytań, które zbliżają
        </h2>

        <p className="font-sans text-sm sm:text-base text-granat/80 leading-relaxed mb-7">
          Wpisz swój e-mail, aby natychmiast otrzymać plik PDF na swoją skrzynkę.
        </p>

        <NewsletterForm
          buttonText="Pobieram 100 pytań (PDF)"
          source="bottom_cta"
        />
      </div>
    </section>
  );
}
