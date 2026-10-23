import BuyButton from "@/components/BuyButton";

export default function AboutAuthors() {
  return (
    <section className="bg-krem text-granat py-14 sm:py-20 border-b border-granat/10">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-16">
          
          {/* Opis autorów (Mobile: order-1, Desktop: order-2) */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left order-1 md:order-2 flex-1">
            <span className="text-burgund uppercase tracking-wider text-xs sm:text-sm font-semibold mb-2.5 block">
              AUTORZY STOPKLATEK
            </span>
            
            <h2 className="font-heading text-[28px] sm:text-3xl md:text-4xl font-bold tracking-tight text-granat leading-tight mb-4">
              Kto przygotował te pytania?
            </h2>

            <div className="space-y-4 text-[18px] sm:text-lg text-granat/85 leading-[1.6] mb-8 font-sans">
              <p>
                Pytania przygotowali <strong>Ula i Krzysiek Głowaccy</strong> — psychoterapeuci z ponad 10-letnim doświadczeniem w pracy z parami, którzy na co dzień widzą, z czym mierzą się pary w zabieganej rzeczywistości.
              </p>
              <p>
                Wszystkie pytania są oparte na badaniach naukowych nad tym, co naprawdę zbliża ludzi i sprawia, że związki są szczęśliwe oraz trwałe.
              </p>
              <p>
                Sami jesteśmy małżeństwem od 14 lat i rodzicami trójki dzieci. Prowadzimy kursy i programy rozwojowe, w których uczestniczyło już kilkadziesiąt tysięcy osób. Wysyłamy newsletter do blisko 15 tys. osób, a w naszych social mediach obserwuje nas ponad 90 tys. ludzi.
              </p>
              <p className="font-medium text-granat">
                Stopklatki stworzyliśmy po to, by dać wam gotowe, bezpieczne narzędzie do zatrzymania się na dobrą rozmowę w codziennym biegu.
              </p>
            </div>

            {/* Przycisk zakupu na mobile (ZMIANA 9: po sekcji Kto przygotował, ukryty na desktopie) */}
            <div className="w-full flex justify-center md:justify-start">
              <BuyButton
                source="authors"
                mobileOnly={true}
                variant="light"
              />
            </div>
          </div>

          {/* Zdjęcie autorów (Mobile: order-2, Desktop: order-1) */}
          <div className="shrink-0 w-full sm:w-auto flex justify-center order-2 md:order-1">
            <picture>
              <source srcSet="/images/about-ula-krzysiek.webp" type="image/webp" />
              <img
                src="/images/about-ula-krzysiek.jpg"
                alt="Urszula i Krzysztof Głowaccy"
                width={320}
                height={320}
                loading="lazy"
                className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-3xl object-cover shadow-xl border-2 sm:border-[3px] border-granat/10"
              />
            </picture>
          </div>

        </div>
      </div>
    </section>
  );
}
