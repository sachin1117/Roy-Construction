<div align="center">

# 🏗️ Roy Construction

### Surendra Roy & Sachin Kumar — Best Civil Contractor in Bally, Howrah

*A modern, animated, bilingual lead-generation website for a civil construction & skilled-labour supply business.*

[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-6.1.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.17-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer%20Motion-12.4.7-EF0075?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![License](https://img.shields.io/badge/License-Private-red?style=for-the-badge)](#-license)

### 🔗 [**View Live Site →**](https://roy-construction-rose.vercel.app/)

</div>

---

## 📖 Overview

**Roy Construction** serves Bally, Howrah and the wider Hooghly/Howrah region — offering turnkey civil construction and skilled labour (rajmistri) gangs. This repo powers their public-facing marketing site: fast, animated, mobile-first, and built to convert visitors into inquiries via an **interactive cost calculator** and a dedicated **Bengali-language worker registration portal**.

---

## 🌐 Live Demo

| | |
|---|---|
| 🔗 **Live Site** | [roy-construction-rose.vercel.app](https://roy-construction-rose.vercel.app/) |
| 🏠 **Canonical Domain** | [royconstruction.in](https://royconstruction.in) |
| ⚡ **Hosting** | Vercel |

---

## ✨ Features

| | Section | What it does |
|---|---|---|
| 🏠 | **Hero** | Live stats, Google rating showcase, animated entrance |
| 👷 | **About / Leadership** | Profiles of Surendra Roy & Sachin Kumar |
| 📏 | **Ruler Timeline** | Interactive visual company history (1986 → 2026) |
| 🧱 | **Services** | Turnkey construction, RCC framing, labour gangs, shuttering & bar bending, renovation |
| 🧮 | **Cost Calculator** | Interactive slab-area & crew estimator — locks a quote straight into the contact form |
| ✅ | **Why Us** | Six trust pillars + verification guarantee |
| 🗺️ | **Service Area** | Coverage map across Bally, Belur, Uttarpara, Liluah, Salkia, Kona Expressway, Dankuni |
| 🤝 | **For Workers** | Bengali-language registration form, Saturday weekly-payout messaging |
| ❓ | **FAQ** | SEO-optimized frequently asked questions |
| 📞 | **Contact** | Multi-mode form + Google Map, auto-filled from calculator |
| 🎉 | **Modals & Toasts** | Confetti + toast feedback on every successful submission |
| ♿ | **Reduced Motion** | One-tap accessibility toggle for all GSAP/Lenis animation |

---

## 🛠️ Tech Stack

<div align="center">

| Layer | Technology |
|---|---|
| **Framework** | React 18 + Vite 6 |
| **Styling** | Tailwind CSS 3 (PostCSS + Autoprefixer) |
| **Animation** | Framer Motion, GSAP, Lenis (smooth scroll) |
| **Icons** | Lucide React |
| **Delight** | canvas-confetti |

</div>

---

## 📂 Project Structure

```text
Roy-Construction/
├── src/
│   ├── components/
│   │   ├── layout/        # TopBar · Navbar · Footer
│   │   ├── sections/      # Hero · About · RulerTimeline · Services · Calculator
│   │   │                  # WhyUs · ServiceArea · ForWorkers · FAQSection · Contact
│   │   └── ui/             # Modal · Toast · AnimatedCounter · BlueprintGrid · MotionToggle
│   ├── data/                # siteData.js · seoData.js
│   ├── hooks/                # useLenis · useReducedMotion
│   ├── App.jsx
│   └── main.jsx
├── public/                    # Static assets · robots.txt · sitemap.xml
├── dist/                      # Production build output
├── index.html
├── tailwind.config.js
├── vite.config.js
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (LTS recommended)
- npm

### Installation
```bash
git clone https://github.com/sachin1117/Roy-Construction.git
cd Roy-Construction
npm install
```

### Run Locally
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

---

## ☁️ Deployment

The `dist/` folder ships with `_headers` and `_redirects` — ready to drop straight onto **Netlify** or **Cloudflare Pages**.

---

## 📄 License

Private project — all rights reserved by **Sachin Construction / Roy Construction**.

<div align="center">

**Made with 🧱 in Bally, Howrah**

</div>
