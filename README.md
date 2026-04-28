# 🎓 Graduation RSVP — Class of 2026

A beautiful, animated graduation RSVP website built with **Next.js 14**, **TypeScript**, and **CSS animations**.

Features a retro CRT TV boot-up loading screen that transitions into a pastel-themed landing page with an interactive RSVP form.

![Baby Blue • Baby Pink • Baby Yellow](https://img.shields.io/badge/palette-pastel-pink)

---

## ✨ Features

- **CRT TV boot-up intro** — dot → scanline → terminal boot sequence → "WELCOME" → zoom-out reveal
- **Pastel color palette** — baby blue, baby pink, baby yellow
- **Floating shapes & twinkling stars** in the background
- **Glassmorphism cards** with blur effects
- **Interactive RSVP form** with accept/decline, guest count, and optional message
- **Confetti explosion** on accepting the invitation
- **Fully responsive** — works on desktop, tablet, and mobile
- **TypeScript** throughout

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18.17 or later
- **npm**, **yarn**, or **pnpm**

### Install & Run

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Connect Formspree

This app sends RSVP submissions directly to Formspree so the responses arrive in your email inbox.

1. Create a new Formspree form.
2. Copy the form endpoint URL.
3. Add it to your local environment as `NEXT_PUBLIC_FORMSPREE_ENDPOINT`.

Example `.env.local` entry:

```bash
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/your-form-id
```

The form will show an error message if the endpoint is missing or the submission fails.

### Build for Production

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
graduation-rsvp-nextjs/
├── public/                  # Static assets
├── src/
│   ├── app/
│   │   ├── globals.css      # All styles & animations
│   │   ├── layout.tsx       # Root layout with metadata
│   │   └── page.tsx         # Main page (client component)
│   └── components/
│       ├── TVLoadingScreen.tsx    # CRT TV boot-up animation
│       ├── HeroSection.tsx       # Hero with grad cap & CTA
│       ├── DetailsSection.tsx    # Event details grid
│       ├── RSVPSection.tsx       # Interactive RSVP form
│       ├── Footer.tsx            # Footer with quote
│       ├── FloatingDecorations.tsx # Background shapes & stars
│       └── Icons.tsx             # SVG icon components
├── package.json
├── tsconfig.json
└── next.config.js
```

---

## 🎨 Customization

- **Event details** — Edit `src/components/DetailsSection.tsx` to change the date, time, venue, and dress code.
- **Colors** — Update the CSS variables in `src/app/globals.css` under `:root`.
- **Boot text** — Modify the terminal lines in `src/components/TVLoadingScreen.tsx`.
- **Loading timing** — Adjust the `setTimeout` delays in `TVLoadingScreen.tsx`.
- **RSVP delivery** — Point `NEXT_PUBLIC_FORMSPREE_ENDPOINT` at your Formspree form.

---

## 📄 License

Free for personal use. Built with ❤️ for your big day.
# grad-rsvp
