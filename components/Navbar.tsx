import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full border-b border-granat/10 bg-krem/90 backdrop-blur-md sticky top-0 z-40">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center group">
          <img
            src="/images/logo.jpg"
            alt="Szczęśliwi Razem"
            width={180}
            height={48}
            className="h-8 sm:h-9 w-auto object-contain mix-blend-multiply"
          />
        </Link>

        <a
          href="#zapis"
          className="inline-flex items-center justify-center rounded-xl bg-burgund px-5 py-2 text-xs sm:text-sm font-semibold text-krem shadow-sm hover:brightness-90 transition-all"
        >
          Odbierz bezpłatnie
        </a>
      </div>
    </header>
  );
}
