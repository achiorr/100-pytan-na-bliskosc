export default function DynamicTagline() {
  return (
    <section className="bg-burgund/[0.03] py-14 sm:py-20 border-b border-granat/10">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Główny nagłówek */}
        <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-granat leading-tight mb-6 sm:mb-8">
          Można żyć razem, ale obok siebie.
        </h2>

        {/* Treść sekcji */}
        <div className="space-y-4 sm:space-y-5 text-base sm:text-lg text-granat/85 leading-relaxed font-sans max-w-2xl mx-auto">
          <p>
            Zatrzymywać się na rozmowach o tym co trzeba zrobić, kupić i załatwić. Na problemach w pracy, planowaniu zakupów i pilnowaniu kiedy trzeba zapłacić rachunki.
          </p>

          <p>
            A tak naprawdę szczęście we dwoje buduje się z małych cegiełek — wspominania chwil, kiedy śmialiśmy się, aż nas bolały brzuchy, wypitą razem ciepłą kawą, współdzielonym twixem.
          </p>

          <div className="pt-2 sm:pt-4">
            <p className="font-heading italic text-lg sm:text-xl md:text-2xl text-burgund font-medium leading-snug">
              Stopklatki stworzyliśmy po to, by takie chwile były na wyciągnięcie ręki. Jak najczęściej.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
