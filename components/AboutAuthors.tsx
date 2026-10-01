"use client";

import { CHECKOUT_URL } from "@/lib/constants";
import { trackCtaClick } from "@/lib/pixel";

export default function AboutAuthors() {
  return (
    <section className="bg-granat text-krem py-14 sm:py-20 border-b border-krem/10">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-16">
          {/* Zdjęcie autorów */}
          <div className="shrink-0 w-full sm:w-auto flex justify-center">
            <picture>
              <source srcSet="/images/about-ula-krzysiek.webp" type="image/webp" />
              <img
                src="/images/about-ula-krzysiek.jpg"
                alt="Urszula i Krzysztof Głowaccy"
                width={320}
                height={320}
                loading="lazy"
                className="w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-3xl object-cover shadow-2xl border-2 sm:border-[3px] border-krem/20"
              />
            </picture>
          </div>

          {/* Krótki opis */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <span className="text-roz uppercase tracking-wider text-xs font-semibold mb-2">
              KTO ZA TYM STOI?
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-krem mb-3">
              Ula i Krzysiek Głowaccy
            </h2>
            <div className="space-y-3 text-sm sm:text-base text-krem/85 leading-relaxed mb-6">
              <p>
                Jesteśmy psychologami, psychoterapeutami i małżeństwem od 14 lat, oraz rodzicami trójki dzieci. Od ponad 10 lat wspieramy innych w budowaniu dobrych relacji.
              </p>
              <p>
                Prowadzimy kursy, webinary i programy rozwojowe, w których uczestniczyło już kilkadziesiąt tysięcy osób. Wysyłamy newsletter do blisko 15 tys. osób, a w naszych social mediach obserwuje nas ponad 90 tys. ludzi. Dzielimy się tam wiedzą na temat tego, jak budować i utrzymywać szczęśliwe relacje.
              </p>
              <p className="font-medium text-krem">
                Stopklatki są naszym pomysłem, jak robić to w zabieganej rzeczywistości.
              </p>
            </div>

            <a
              href={CHECKOUT_URL}
              onClick={() => trackCtaClick("ceny")}
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-2xl bg-burgund px-8 py-4 text-base sm:text-lg font-semibold text-krem shadow-lg hover:brightness-110 hover:shadow-xl transition-all duration-200 group"
            >
              Kupuję cały zestaw za 29 zł
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
