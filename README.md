https://rokmedia.netlify.app/
<div align="center">

# 🎬 RK MEDIA — Portfolio

**Edits That Hit Different.**

A high-end, immersive portfolio website for professional video editing services.
Built with React, GSAP, Framer Motion, and TailwindCSS v4.

[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-4-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![GSAP](https://img.shields.io/badge/GSAP-3.15-88CE02?style=for-the-badge&logo=greensock&logoColor=white)](https://gsap.com)
[![License](https://img.shields.io/badge/License-Apache_2.0-D22128?style=for-the-badge)](LICENSE)

</div>

---

## 📸 Overview

RK MEDIA is a cinematic, dark-themed portfolio designed for a professional video editor specializing in **automotive**, **gaming**, and **commercial** visual storytelling. The site features buttery-smooth scroll animations, glassmorphism effects, horizontal scroll galleries, and a fully interactive pricing workflow — all wrapped in a futuristic, neon-accented UI.

### ✨ Key Highlights

- 🖤 **Dark Cinematic Aesthetic** — Neon blue & purple accent palette with glassmorphism
- 🎞️ **Horizontal Scroll Portfolio** — GSAP-powered scrub gallery with parallax
- 🌀 **Smooth Scrolling** — Lenis for buttery 120fps scroll physics
- ⚡ **Micro-Animations** — Framer Motion entrance & hover animations on every section
- 💎 **Cursor Glow** — Custom GSAP-driven cursor radial light that follows the mouse
- 📱 **Fully Responsive** — Mobile-first with animated slide-out navigation
- 💰 **Interactive Pricing** — Select a plan → inline form expands with smooth transitions
- 🔢 **Animated Counters** — Stats auto-count when scrolled into view
- 🎠 **Client Marquee** — Infinite-scroll client name ticker

---

## 🏗️ Tech Stack

| Layer | Technology | Purpose |
|-------|-----------|---------|
| **Framework** | React 19 | Component-based UI |
| **Build Tool** | Vite 6 | Lightning-fast HMR & bundling |
| **Styling** | TailwindCSS v4 | Utility-first CSS with `@theme` tokens |
| **Scroll Animations** | GSAP 3.15 + ScrollTrigger | Horizontal scroll pinning & scrub |
| **Motion** | Framer Motion 12 | Entrance animations, hover states, layout transitions |
| **Smooth Scroll** | Lenis 1.3 | Physics-based smooth scrolling |
| **Icons** | Lucide React | Lightweight SVG icon library |
| **Typography** | Space Grotesk + Inter | Google Fonts via CSS import |
| **Language** | TypeScript | Type-safe development |

---

## 📁 Project Structure

```
RK-MEDIA-PORTFOLIO/
├── index.html                  # HTML entry point
├── package.json                # Dependencies & scripts
├── vite.config.ts              # Vite + React + Tailwind plugin config
├── tsconfig.json               # TypeScript configuration
├── metadata.json               # Project metadata (AI Studio)
├── .env.example                # Environment variable template
├── .gitignore
│
└── src/
    ├── main.tsx                # React DOM root mount
    ├── App.tsx                 # Root component — layout, scroll progress, cursor glow
    ├── index.css               # Global styles, @theme tokens, glassmorphism utilities
    │
    ├── components/
    │   ├── Navbar.tsx          # Fixed navbar with scroll-aware blur + mobile overlay
    │   ├── Hero.tsx            # Full-screen hero with animated text & CTA buttons
    │   ├── About.tsx           # Draggable image card + experience stats
    │   ├── Portfolio.tsx       # Featured showreel + GSAP horizontal scroll gallery
    │   ├── ClientMarquee.tsx   # Infinite-scroll client name ticker
    │   ├── Testimonials.tsx    # Client review cards with staggered reveal
    │   ├── Stats.tsx           # Animated number counters (views, projects, clients)
    │   ├── Services.tsx        # Service cards — Reels, Motion Graphics, YouTube, Color
    │   ├── Pricing.tsx         # 3-tier pricing with expandable order form
    │   ├── Contact.tsx         # Contact form + social links (Email, IG, WhatsApp)
    │   └── Footer.tsx          # Footer with social links & credit
    │
    └── lib/
        └── utils.ts            # Utility functions (cn — class merging)
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **npm** ≥ 9

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/rk-media-portfolio.git
cd rk-media-portfolio

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env.local
# Edit .env.local and add your GEMINI_API_KEY (if using AI features)

# 4. Start the dev server
npm run dev
```

The app will be available at **`http://localhost:3000`**.

### Available Scripts

| Script | Command | Description |
|--------|---------|-------------|
| **Dev** | `npm run dev` | Start Vite dev server on port 3000 |
| **Build** | `npm run build` | Production build to `dist/` |
| **Preview** | `npm run preview` | Preview the production build locally |
| **Clean** | `npm run clean` | Remove the `dist/` directory |
| **Lint** | `npm run lint` | Type-check with TypeScript (no emit) |

---

## 🎨 Design System

### Color Palette

| Token | Value | Usage |
|-------|-------|-------|
| `--color-accent` | `#3b82f6` | Primary neon blue — buttons, links, glow effects |
| `--color-accent-purple` | `#a855f7` | Secondary purple — gradients, atmospheric effects |

### Typography

| Font | Weight Range | Usage |
|------|-------------|-------|
| **Space Grotesk** | 300–700 | Headings, display text, navigation |
| **Inter** | 300–600 | Body text, form labels |

### Custom Utilities

| Class | Effect |
|-------|--------|
| `.glass` | Glassmorphism — semi-transparent bg, backdrop blur, subtle border |
| `.glow-text` | Blue neon text shadow |
| `.atmosphere` | Radial gradient background ambiance |

---

## 🧩 Component Breakdown

### `App.tsx` — Root Layout
- Initializes **Lenis** smooth scrolling and syncs with GSAP ScrollTrigger
- Renders the scroll progress bar (Framer Motion `scaleX` spring)
- Floating social buttons (Instagram, WhatsApp, Twitter)
- Custom **cursor glow** effect that follows the mouse via GSAP

### `Hero.tsx` — Landing Section
- Full-viewport hero with cinematic grid overlay
- Staggered text reveal animation ("Edits That Hit Different.")
- Two CTAs: "View Portfolio" and "Watch Showreel"
- Scroll indicator with vertical text

### `Portfolio.tsx` — Work Showcase
- **Showreel section** — Featured video card with hover-to-play overlay
- **Horizontal scroll gallery** — GSAP ScrollTrigger pinned scrub
- Project cards with grayscale-to-color hover effect and color-matched glow

### `Pricing.tsx` — Tiered Plans
- Three plans: Starter Vibe (₹5,999), Pro Narrative (₹14,999), Cinematic Story (₹29,999)
- Selecting a plan expands an inline project details form (AnimatePresence)
- Form submits via WhatsApp deep link
- "Custom" CTA section for enterprise enquiries

### `Contact.tsx` — Get In Touch
- Contact form with underline-style inputs
- Direct links: Email, Instagram (@sniper.844), WhatsApp
- Form submit routes to WhatsApp

---

## 🌐 Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `GEMINI_API_KEY` | Optional | Gemini AI API key (for AI-powered features) |
| `APP_URL` | Optional | Deployed app URL (auto-injected in AI Studio) |

---

## 📦 Deployment

### Build for Production

```bash
npm run build
```

This generates an optimized static bundle in `dist/`. Deploy to any static host:

- **Vercel** — `vercel --prod`
- **Netlify** — drag-and-drop `dist/` or connect via Git
- **GitHub Pages** — push `dist/` to `gh-pages` branch
- **Google AI Studio** — auto-deployed via the platform

### Preview Production Build

```bash
npm run preview
```

---

## 🤝 Contact

| Platform | Link |
|----------|------|
| 📧 Email | [roshan@rkmedia.studio](mailto:roshan@rkmedia.studio) |
| 📸 Instagram | [@sniper.844](https://www.instagram.com/sniper.844) |
| 💬 WhatsApp | [+91 63060 87590](https://wa.me/916306087590) |
| 🐦 Twitter | [@roshan_editor53](https://x.com/roshan_editor53) |

---

<div align="center">

**Developed by [WE CREATE](https://github.com/your-username)**

© 2024 RK MEDIA — All Rights Reserved

</div>
