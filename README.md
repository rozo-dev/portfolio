# Amara A. Kamara - Portfolio Website

A modern, minimalist portfolio website showcasing engineering projects and creative design work.

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (animations)

## Features

- 🧭 Sticky navbar with smooth scrolling
- 📱 Mobile hamburger menu
- ✨ Smooth, subtle animations
- 📱 Fully responsive design
- ⚡ Optimized performance
- 🎨 Clean black & white aesthetic
- 🚀 Production-ready

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd amara-portfolio
```

2. Install dependencies
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
amara-portfolio/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page composition
│   └── globals.css         # Global styles
├── components/
│   ├── sections/           # Page sections
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── TechStack.tsx
│   │   ├── Projects.tsx
│   │   ├── CreativeDesign.tsx
│   │   ├── Experience.tsx
│   │   └── Contact.tsx
│   └── ui/                 # Reusable components
│       ├── Section.tsx
│       ├── Button.tsx
│       └── ProjectCard.tsx
├── public/
│   ├── projects/           # Project images (add your screenshots here)
│   │   ├── waterwatch.png
│   │   ├── recap.png
│   │   ├── hmonitor.png
│   │   └── qubic.png
│   └── Amara_Kamara_CV.pdf # Your CV/Resume
└── ...config files
```

## Adding Content

### Project Images

Add project screenshots to `/public/projects/` with these filenames:
- `waterwatch.png`
- `recap.png`
- `hmonitor.png`
- `qubic.png`

Recommended size: 1200x800px or similar aspect ratio

### CV/Resume

Place your PDF resume at `/public/Amara_Kamara_CV.pdf`

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Deploy automatically

### Other Platforms

```bash
npm run build
npm run start
```

The `build` command generates an optimized production build.

## Customization

- **Colors**: Edit `tailwind.config.ts`
- **Fonts**: Change in `app/layout.tsx`
- **Content**: Update section components in `components/sections/`
- **Animations**: Modify Framer Motion variants in components

## License

© 2026 Amara A. Kamara. All rights reserved.
