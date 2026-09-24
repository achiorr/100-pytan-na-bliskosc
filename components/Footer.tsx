import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-granat text-krem py-12 sm:py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pb-8 border-b border-krem/15">
          <div className="flex items-center gap-4">
            <picture>
              <source srcSet="/images/stopka-avatar.webp" type="image/webp" />
              <img
                src="/images/stopka-avatar.jpg"
                alt="Ula i Krzysiek Głowaccy"
                width={56}
                height={56}
                loading="lazy"
                className="w-14 h-14 rounded-xl object-cover object-center"
              />
            </picture>
            <div>
              <p className="font-heading text-base sm:text-lg font-bold text-krem">
                Urszula i Krzysztof Głowaccy – Szczęśliwi Razem
              </p>
              <p className="text-xs text-krem/70 mt-0.5">
                Czesława Miłosza, Poznań
              </p>
            </div>
          </div>

          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm text-krem/80">
            <Link
              href="#polityka"
              className="hover:text-krem transition-colors underline-offset-4 hover:underline"
            >
              Polityka prywatności
            </Link>
            <span className="text-krem/40">·</span>
            <Link
              href="#regulamin"
              className="hover:text-krem transition-colors underline-offset-4 hover:underline"
            >
              Regulamin
            </Link>
            <span className="text-krem/40">·</span>
            <span>© {new Date().getFullYear()} Szczęśliwi Razem</span>
          </nav>
        </div>

        <div className="pt-6 text-xs text-krem/50 text-center md:text-left">
          Ta strona nie jest częścią serwisu Facebook ani Meta Platforms Inc. Ponadto ta strona NIE jest w żaden sposób wspierana przez firmę Facebook. Facebook jest znakiem towarowym firmy Meta Platforms, Inc.
        </div>
      </div>
    </footer>
  );
}
