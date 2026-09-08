# New Horizon Counselling Service — Website

A professional website for New Horizon Counselling Service, a family counselling and mental health practice in Lagos, Nigeria.

## Tech Stack

- **Framework**: Next.js 16 (App Router) + React
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS with custom design tokens
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ (recommended: 20+)
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build

```bash
npm run build
```

### Production

```bash
npm start
```

## How to Update Articles

Articles are stored as static files in the codebase. To update or add an article:

1. Edit the file `src/app/articles/page.tsx` to update the article list
2. Edit the file `src/app/articles/[slug]/page.tsx` to update article content
3. Deploy the changes to Vercel

**Note:** This requires developer access. Gabriel should contact a developer for article updates.

## How to Swap in the Headshot

1. Prepare a professional headshot image (recommended: 400x400px, square format)
2. Place the image in the `/public` folder as `headshot.jpg`
3. Update the `HeadshotPlaceholder` component to use the real image:

```tsx
// In src/components/HeadshotPlaceholder.tsx
import Image from "next/image";

// Replace the placeholder div with:
<Image
  src="/headshot.jpg"
  alt="Gabriel Ajibade - Counsellor"
  width={256}
  height={256}
  className="rounded-full"
/>
```

## How to Add Testimonials

Testimonials can be added to the Home page:

1. Open `src/app/page.tsx`
2. Add testimonials to the content
3. The design already includes a section ready for testimonials

## How to Connect the Domain

### 1. Purchase the Domain

Purchase `newhorizonng.com` from a domain registrar (e.g. Namecheap).

### 2. Connect to Vercel

1. Log in to your Vercel dashboard
2. Go to your project settings
3. Click "Domains"
4. Add `newhorizonng.com`
5. Follow the DNS configuration instructions:
   - Add an A record pointing to `76.76.21.21`
   - Add a CNAME record for `www` pointing to `cname.vercel-dns.com`

### 3. SSL Certificate

Vercel automatically provisions SSL certificates for custom domains.

## How to Set Up Email

### Option 1: Google Workspace

1. Sign up for Google Workspace
2. Verify domain ownership
3. Create `info@newhorizonng.com`
4. Configure MX records as provided by Google

### Option 2: Microsoft 365

1. Sign up for Microsoft 365
2. Verify domain ownership
3. Create `info@newhorizonng.com`
4. Configure MX records as provided by Microsoft

## Project Structure

```
src/
├── app/
│   ├── page.tsx              # Home page
│   ├── about/page.tsx        # About page
│   ├── services/page.tsx     # Services page
│   ├── book/page.tsx         # Book a Session page
│   ├── faq/page.tsx          # FAQ page
│   ├── articles/page.tsx     # Articles listing
│   ├── articles/[slug]/page.tsx  # Individual article
│   ├── contact/page.tsx      # Contact page
│   ├── privacy/page.tsx      # Privacy Policy
│   ├── terms/page.tsx        # Terms of Use
│   ├── sitemap.ts            # Dynamic sitemap
│   └── robots.ts             # Robots.txt
├── components/
│   ├── Button.tsx            # Reusable button
│   ├── Card.tsx              # Card component
│   ├── Container.tsx         # Layout container
│   ├── FloatingWhatsApp.tsx  # Floating WhatsApp button
│   ├── Footer.tsx            # Footer with crisis disclaimer
│   ├── Header.tsx            # Header with navigation
│   ├── HeadshotPlaceholder.tsx  # Headshot placeholder
│   ├── SectionHeading.tsx    # Section heading
│   └── WhatsAppButton.tsx    # WhatsApp CTA button
```

## Key Features

- Mobile-first responsive design
- WhatsApp-only booking (no payment on site)
- Floating WhatsApp button on every page
- Crisis disclaimer in footer
- SEO optimized with meta tags, sitemap, and robots.txt
- Accessible with skip navigation and focus states
- Static articles for educational content

## Launch Checklist

- [ ] Purchase domain `newhorizonng.com`
- [ ] Connect domain to Vercel
- [ ] Set up email `info@newhorizonng.com`
- [ ] Replace headshot placeholder with real photo
- [ ] Add testimonials when available
- [ ] Review and finalize starter articles
- [ ] Test all WhatsApp links
- [ ] Run Lighthouse audit (target: 90+ on all metrics)
- [ ] Verify all copy uses "counselling" (not "counseling")

## License

Private project for New Horizon Counselling Service.

## Design system

Tokens live in `src/app/globals.css` under `@theme` (Tailwind v4). Key pieces:

| Token group | Purpose |
|---|---|
| `--color-ink` / `--color-body` / `--color-muted` | Text hierarchy on light grounds |
| `--color-primary` / `--color-accent` / `--color-highlight` | Brand accents |
| `--color-background` / `--color-sand` / `--color-surface` | Ground layers |
| `--text-display` … `--text-lede` | Fluid `clamp()` type scale |

Surface treatments: `.field-deep` (navy section), `.field-sand` (warm section),
`.grain` (paper texture overlay), `.rule-horizon` (hairline rule).

Base element styles sit inside `@layer base` so Tailwind utilities always win.
Note: an unlayered `h1–h6 { color }` rule will silently override `text-white`
on dark sections — this is what previously made hero headings invisible.

### Components

- `Reveal` — scroll-into-view animation wrapper (`direction`, `delay`)
- `Accordion` — animated disclosure list, used on Home, FAQ, and Book
- `PageHero` / `CtaBand` / `SectionHeading` — consistent page furniture
- `Logo` — vector identity, `tone="dark" | "light"`
- `ContactForm` — the only client-side form; composes a WhatsApp message

Article content is centralised in `src/lib/articles.ts`, shared by the listing,
article, and home-page teaser. Swap that module for the CMS client when Sanity
is wired up; the page components need no changes.

### Photography

`src/lib/images.ts` is the single manifest for every photograph: path,
dimensions, and alt text in one place. To replace an image, drop the new file
into `public/images/` and change one line in that manifest — no page edits.

Alt text lives with the image rather than at the call site, so a photo used in
three places cannot end up with three different descriptions. Where an image is
purely atmospheric and the surrounding copy already carries the meaning, call
sites pass `alt=""` to keep it out of the accessibility tree.

Source and licence for each file: `public/images/CREDITS.md`.
