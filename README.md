# Roy Construction

**Roy Construction | Surendra Roy & Sachin Kumar | Best Civil Contractor in Bally, Howrah**

A modern, animated marketing website for Roy Construction — a civil construction and skilled labour supply business serving Bally, Howrah and the wider Hooghly/Howrah region. Built as a fast, bilingual (English + Bengali) lead-generation site with an interactive cost calculator and dedicated worker-registration portal.

## Features

- **Hero Section** – Live stats and Google rating showcase
- **About / Leadership** – Profiles of Surendra Roy & Sachin Kumar
- **Interactive Ruler Timeline** – Visual company history (1986–2026)
- **Services** – Turnkey civil construction, RCC framing, labour gang supply, shuttering & bar bending, structural renovation
- **Civil & Labour Cost Calculator** – Interactive estimator that lets visitors lock in a quote estimate
- **Why Us** – Six trust pillars and a verification guarantee
- **Service Area Matrix** – Coverage across Howrah & Hooghly (Bally, Belur, Uttarpara, Liluah, Salkia, Kona Expressway, Dankuni, etc.)
- **For Workers** – Dedicated worker-dignity portal with weekly (Saturday) payout messaging and a Bengali-language registration form
- **FAQ Section** – SEO-focused frequently asked questions
- **Contact** – Multi-mode contact form with Google Map integration, pre-filled from calculator estimates
- **Quote & Worker Modals** – Toast notifications and confetti on successful submission
- **Reduced-motion toggle** – Accessibility-friendly animation control (GSAP / Lenis smooth scroll)

## Tech Stack

- **React 18** + **Vite 6**
- **Tailwind CSS 3** (with `postcss` / `autoprefixer`)
- **Framer Motion** & **GSAP** for animation
- **Lenis** for smooth scrolling
- **Lucide React** for icons
- **canvas-confetti** for celebratory UI feedback

## Project Structure

```
├── src/
│   ├── components/
│   │   ├── layout/        # TopBar, Navbar, Footer
│   │   ├── sections/      # Hero, About, RulerTimeline, Services, Calculator,
│   │   │                  # WhyUs, ServiceArea, ForWorkers, FAQSection, Contact
│   │   └── ui/             # Modal, Toast, AnimatedCounter, BlueprintGrid, MotionToggle
│   ├── data/               # siteData.js, seoData.js
│   ├── hooks/               # useLenis, useReducedMotion
│   ├── App.jsx
│   └── main.jsx
├── public/                  # Static assets, robots.txt, sitemap.xml
├── dist/                    # Production build output
├── index.html
├── tailwind.config.js
├── vite.config.js
└── package.json
```

## Getting Started

### Prerequisites
- Node.js (LTS recommended)
- npm

### Installation
```bash
git clone https://github.com/sachin1117/Roy-Construction.git
cd Roy-Construction
npm install
```

### Development
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## Deployment

The `dist/` folder includes `_headers` and `_redirects`, indicating this project is set up for deployment on platforms like Netlify or Cloudflare Pages.

## License

Private project — all rights reserved by Sachin Construction / Roy Construction.
