"use client";

import { useState } from "react";
import { Loader2, CheckCircle2, AlertCircle, ArrowRight } from "lucide-react";
import { trackLead } from "@/lib/pixel";

interface NewsletterFormProps {
  buttonText?: string;
  className?: string;
  source?: string;
}

export default function NewsletterForm({
  buttonText = "Odbieram bezpłatny materiał",
  className = "",
  source = "hero",
}: NewsletterFormProps) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setStatus("error");
      setErrorMessage("Wpisz poprawny adres e-mail.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, name }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Wystąpił błąd podczas zapisu.");
      }

      setStatus("success");
      // Wywołanie zdarzenia Lead w Meta Pixel
      trackLead({ content_name: `Lead Magnet - ${source}` });
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(err.message || "Coś poszło nie tak. Spróbuj ponownie.");
    }
  };

  if (status === "success") {
    return (
      <div className={`rounded-2xl border-2 border-emerald-500/30 bg-emerald-50/80 p-6 sm:p-8 text-center animate-fade-in ${className}`}>
        <div className="mx-auto w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mb-3">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <h3 className="font-heading text-xl sm:text-2xl font-bold text-granat mb-2">
          Jesteś na liście! 🎉
        </h3>
        <p className="text-sm sm:text-base text-granat/80 max-w-md mx-auto leading-relaxed">
          Wysłaliśmy wiadomość z dostępem do materiału na adres <strong>{email}</strong>. Sprawdź swoją skrzynkę (oraz folder Oferty / Spam).
        </p>
      </div>
    );
  }

  return (
    <div className={`w-full ${className}`} id="zapis">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Twoje imię (opcjonalnie)"
            className="w-full sm:w-1/3 bg-white border-2 border-granat/15 rounded-2xl px-4 py-3.5 text-sm sm:text-base text-granat placeholder:text-granat/40 focus:outline-none focus:border-burgund transition-colors shadow-sm"
          />
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Twój adres e-mail *"
            className="w-full sm:w-2/3 bg-white border-2 border-granat/15 rounded-2xl px-4 py-3.5 text-sm sm:text-base text-granat placeholder:text-granat/40 focus:outline-none focus:border-burgund transition-colors shadow-sm"
          />
        </div>

        {status === "error" && (
          <div className="flex items-center gap-2 text-xs sm:text-sm text-burgund font-medium bg-roz/60 p-3 rounded-xl border border-burgund/20">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{errorMessage}</span>
          </div>
        )}

        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-burgund px-8 py-4 text-base sm:text-lg font-semibold text-krem shadow-sm hover:brightness-90 active:scale-[0.99] transition-all duration-200 disabled:opacity-70 cursor-pointer"
        >
          {status === "loading" ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Zapisywanie...</span>
            </>
          ) : (
            <>
              <span>{buttonText}</span>
              <ArrowRight className="w-5 h-5" />
            </>
          )}
        </button>
      </form>
    </div>
  );
}
