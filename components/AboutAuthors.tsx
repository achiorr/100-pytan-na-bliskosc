export default function AboutAuthors() {
  return (
    <section className="bg-granat text-krem py-14 sm:py-20 border-b border-krem/10">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center gap-8 sm:gap-12">
          {/* Zdjęcie autorów */}
          <div className="shrink-0">
            <picture>
              <source srcSet="/images/about-ula-krzysiek.webp" type="image/webp" />
              <img
                src="/images/about-ula-krzysiek.jpg"
                alt="Urszula i Krzysztof Głowaccy"
                width={160}
                height={160}
                loading="lazy"
                className="w-36 h-36 sm:w-44 sm:h-44 rounded-2xl object-cover shadow-md border-2 border-krem/15"
              />
            </picture>
          </div>

          {/* Krótki opis */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <span className="text-burgund uppercase tracking-wider text-xs font-semibold mb-2">
              AUTORZY PYTAŃ
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-krem mb-3">
              Ula i Krzysiek Głowaccy
            </h2>
            <p className="text-sm sm:text-base text-krem/85 leading-relaxed mb-4">
              Jesteśmy psychologami, psychoterapeutami i małżeństwem od 14 lat. Na profilu <strong>@szczesliwi_razem</strong> dzielimy się wiedzą o tym, jak budować bliskość i rozmawiać bez niepotrzebnych spięć.
            </p>
            <p className="text-xs text-krem/70 italic">
              „Najpiękniejsze rozmowy to te, które trwają dalej.”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
