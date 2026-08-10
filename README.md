# Polid – Next.js

Strona firmy Polid (producent mopów) zbudowana w Next.js (App Router) + TypeScript + Tailwind CSS, z wielojęzycznym routingiem przez [next-intl](https://next-intl.dev) (`pl`, `en`, `ru`, `uk`), motywem jasny/ciemny przez [next-themes](https://github.com/pacocoursey/next-themes) i statystykami odwiedzin przez [@vercel/analytics](https://vercel.com/docs/analytics).

## Rozwój

```bash
npm install
npm run dev
```

Aplikacja dostępna pod `http://localhost:3000` (przekierowuje do `/pl`, `/en`, `/ru` lub `/uk` w zależności od preferencji przeglądarki).

## Build produkcyjny

```bash
npm run build
npm run start
```

## Struktura

- `src/app/[locale]/` – trasy (App Router), jedna warstwa na każdy język
- `src/components/` – komponenty UI (Tailwind + kilka zachowanych modułów CSS dla złożonych animacji, np. hero na stronie głównej)
- `src/messages/` – tłumaczenia UI (next-intl)
- `src/content/privacy.ts` – treść polityki prywatności (bogaty schemat bloków, poza next-intl)
- `src/data/products.ts` – katalog produktów
