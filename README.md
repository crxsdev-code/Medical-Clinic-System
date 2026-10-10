# NRM Mendoza Medical Clinic, Pharmacy and Laboratory — Website (Version 1)

Premium public-facing website for **NRM Mendoza Medical Clinic, Pharmacy and Laboratory**,
Unit 7 and 8, Town Center, Poblacion, Kapatagan, 9214 Lanao del Norte, Philippines.

Built with **React + Vite + TypeScript + Tailwind CSS v4** and React Router.

---

## Quick start

```bash
npm install
npm run dev        # start the dev server (http://localhost:5173)
npm run build      # type-check + production build to /dist
npm run preview    # serve the production build locally
npm run check      # renders every route (fast smoke test, no browser needed)
```

---

## Routes

| Route         | Page                                          |
| ------------- | --------------------------------------------- |
| `/`           | Home — hero, trust strip, about, services, why NRM Mendoza, doctors, facilities, hours, location, FAQs |
| `/about`      | About the clinic                              |
| `/services`   | Medical, pharmacy and laboratory services     |
| `/doctors`    | Doctors + accessible profile modal            |
| `/facilities` | Facilities gallery + lightbox                 |
| `/faq`        | Accordion FAQ                                 |
| `/contact`    | Contact details, form and map                 |

---

## Where to put assets

### Logo (required)

Replace the placeholder with the official artwork:

```
src/assets/images/nrm-mendoza-logo.png
```

Overwrite that file with the real logo — no code changes are needed. The component that
renders it is `src/components/Logo.tsx`. Do not recolour or distort the logo.

> Until the real logo is supplied, a generated placeholder mark in the brand palette
> (magenta / cyan / green) is used.

### Photography

| What             | Where to put it                                                                 |
| ---------------- | ------------------------------------------------------------------------------- |
| Doctor portraits | `src/assets/images/doctors/<doctor-id>.jpg` — e.g. `dr-nilda-s-mendoza.jpg`      |
| Facility photos  | `src/assets/images/facilities/<entry-id>.jpg` — e.g. `consultation-room.jpg`     |
| Hero photo       | `src/assets/images/clinic-slide-1.jpg` (imported by `src/components/Hero.tsx`)   |
| About photo      | `src/assets/images/clinic-slide-4.jpg` (imported by `src/pages/Home.tsx`)        |

Photos are resolved automatically by filename (`import.meta.glob` in
`src/data/doctors.ts` and `src/data/facilities.ts`) — drop the file in, rebuild, and the
placeholder is replaced. No code changes required. Until a matching file exists, a
designed placeholder is shown; no unrelated stock imagery is used anywhere on the site.

---

## Editing clinic information (single source of truth)

All editable content lives in `src/data/`:

| File                     | Contains                                                        |
| ------------------------ | --------------------------------------------------------------- |
| `src/data/clinic.ts`     | Name, address, phone numbers, Facebook, Google Maps, **opening hours** |
| `src/data/doctors.ts`    | Doctor names, specialties, descriptions, photos (auto-loaded from `assets/images/doctors/`) |
| `src/data/services.ts`   | Service categories and descriptions                             |
| `src/data/faqs.ts`       | FAQ questions and answers                                       |
| `src/data/facilities.ts` | Facility gallery entries (photos auto-loaded from `assets/images/facilities/`) |
| `src/data/navigation.ts` | Header / footer navigation                                      |

### ⚠️ Sunday hours

Sunday is intentionally set to **“To be confirmed”** because two sources disagree
(9:00 AM – 12:00 PM vs 8:00 AM – 12:00 PM). Update the Sunday entry in
`src/data/clinic.ts` once the clinic confirms — the navbar, footer, home page, doctors
page, contact page and FAQs all read from that one file.

---

## Design system

Defined once in `src/index.css` (Tailwind v4 `@theme`):

| Token        | Value     | Use                                       |
| ------------ | --------- | ----------------------------------------- |
| `navy`       | `#123B4A` | Primary                                   |
| `deep`       | `#0B2733` | Headers, footer, hero                     |
| `brand`      | `#168CC5` | Medical blue (links, icons, eyebrows)     |
| `aqua`       | `#20B8D8` | Cyan accents on dark backgrounds          |
| `magenta`    | `#D81B80` | Accent — used sparingly                   |
| `leaf`       | `#63A94D` | Accent — used sparingly                   |
| `mist`       | `#F7FAFB` | Page background                           |
| `ink`        | `#172A32` | Primary text                              |
| `muted`      | `#66767D` | Secondary text                            |
| `line`       | `#E4ECEF` | Borders                                   |

Balance: ~75% neutral/white/navy, ~20% blue/cyan, ~5% magenta/green.
Font: **Inter** (single family, loaded with `display=swap`).

---

## Content rules (why some things look “empty”)

Nothing about the clinic has been invented. Where information was not supplied, a
clearly-labelled, easily replaceable placeholder is used instead of filler content:

- Clinic history block (`src/pages/About.tsx`)
- Doctor professional details (`src/data/doctors.ts`)
- Facility and doctor photography
- Sunday opening hours (`src/data/clinic.ts`)

The contact form is **frontend-only** in Version 1: it validates, shows loading, success
and error states, and logs the payload locally — it does not pretend to send email.

---

## Version 2 — appointment booking (prepared, not built)

- Booking CTAs already route to `/contact` (no fake booking is simulated).
- Add routes under `src/App.tsx` (e.g. `/appointments`) without touching the layout.
- Replace the body of `submitInquiry()` in `src/lib/contact.ts` with a real API call —
  that file is the single integration point for a backend, email service or CRM.
- No sensitive medical data is collected anywhere in Version 1.

---

## Quality checklist

- `npm run build` → TypeScript (strict) + Vite production build pass
- `npm run check` → every route renders without errors
- Semantic HTML, one `<h1>` per page, labelled form fields, `aria-*` on accordion, modal
  and menu, visible focus rings, skip-to-content link
- Keyboard support: Escape closes modal/lightbox/menu, focus trap + focus restore,
  arrow keys browse the lightbox
- `prefers-reduced-motion` respected globally
- Responsive at 375 / 768 / 1024 / 1440 / 1920 px; no horizontal scrolling
- Unique title + meta description per route, Open Graph tags, `MedicalClinic` JSON-LD
- No API keys, no analytics, no patient data collection
