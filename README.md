# Landing Page Newsletter / Lead Magnet – Szczęśliwi Razem

Nowoczesny, w 100% responsywny landing page z zapisem do newslettera / pobraniem bezpłatnego materiału (lead magnet), w pełni spójny wizualnie ze stroną główną Szczęśliwi Razem.

## ✨ Kluczowe funkcje

- **Design System**: Identyczna paleta barw (`krem`, `granat`, `burgund`, `kremDim`), fonty (`Playfair Display`, `Montserrat`, `Caveat`), zaokrąglenia i styl kart.
- **Bezpośrednia integracja z MailerLite API**: Bezpieczny endpoint (`/api/subscribe`) dodający subskrybentów bezpośrednio do bazy/grupy w MailerLite.
- **Płynny UX**: Walidacja e-mail, stan ładowania (spinner), czytelny komunikat sukcesu bez przeładowania strony.
- **Meta Pixel (Facebook Ads)**: Automatyczne wysyłanie zdarzenia `Lead` (`fbq('track', 'Lead')`) natychmiast po udanym zapisie.
- **Gotowe sekcje**: TopBar, Header, Hero z formularzem i mockupem materiału, Co w środku, Dla kogo, O autorach, FAQ, Dolne CTA, Stopka.

---

## 🚀 Jak uruchomić projekt lokalnie

1. Wejdź do folderu projektu:
   ```bash
   cd newsletter-landing
   ```

2. Zainstaluj zależności:
   ```bash
   npm install
   ```

3. Skonfiguruj plik `.env.local`:
   Skopiuj `.env.example` do `.env.local` i uzupełnij klucze MailerLite:
   ```env
   MAILERLITE_API_KEY=twoj_klucz_api_z_mailerlite
   MAILERLITE_GROUP_ID=twoj_id_grupy_w_mailerlite
   NEXT_PUBLIC_FB_PIXEL_ID=932014270181668
   ```
   > **Uwaga**: W trybie deweloperskim, jeśli nie podasz klucza, formularz działa w trybie symulacji (pozwala przetestować wygląd i zachowanie UI bez błędów).

4. Uruchom serwer deweloperski:
   ```bash
   npm run dev
   ```
   Otwórz [http://localhost:3000](http://localhost:3000) w przeglądarce.

---

## 🔑 Jak zdobyć klucze MailerLite

1. **Klucz API (`MAILERLITE_API_KEY`)**:
   - Zaloguj się do [MailerLite](https://www.mailerlite.com/).
   - Przejdź do **Integrations** (Integracje) -> **API**.
   - Kliknij **Generate new token**, nazwij go (np. `Landing Page Lead Magnet`) i skopiuj wygenerowany klucz.

2. **ID Grupy (`MAILERLITE_GROUP_ID`)**:
   - Przejdź do **Subscribers** (Subskrybenci) -> **Groups** (Grupy).
   - Wejdź w wybraną grupę (np. `Lead Magnet Słuchanie`).
   - ID grupy znajdziesz w pasku adresu URL lub w ustawieniach grupy.

---

## 🌐 Wdrożenie online (Vercel / Netlify)

1. Stwórz nowe repozytorium na GitHubie i wypchnij do niego zawartość folderu `newsletter-landing`.
2. Zaloguj się na [Vercel](https://vercel.com/) i zaimportuj repozytorium.
3. W sekcji **Environment Variables** (Zmienne środowiskowe) dodaj:
   - `MAILERLITE_API_KEY`
   - `MAILERLITE_GROUP_ID`
   - `NEXT_PUBLIC_FB_PIXEL_ID`
4. Kliknij **Deploy**. Strona będzie natychmiast dostępna online z darmowym certyfikatem SSL.
