import BuyButton from "@/components/BuyButton";

export default function FinalCta() {
  return (
    <section id="final-cta" className="bg-granat text-krem py-16 sm:py-24 border-b border-krem/10">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        
        <h2 className="font-heading text-[28px] sm:text-4xl lg:text-5xl font-bold tracking-tight text-krem leading-tight mb-4">
          Zróbcie pauzę na dobrą rozmowę
        </h2>

        <p className="font-sans text-[18px] sm:text-lg text-krem/85 leading-[1.6] max-w-xl mx-auto mb-8 sm:mb-10">
          7 talii, 700 pytań. Wystarczy jedna pauza, żeby zacząć.
        </p>

        {/* Unified BuyButton (ZMIANA 9: widoczny na desktopie i mobile) */}
        <div className="flex justify-center">
          <BuyButton
            source="final_cta"
            mobileOnly={false}
            variant="dark"
          />
        </div>

      </div>
    </section>
  );
}
