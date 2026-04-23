# Atanu Saha - Portfolio

A modern, responsive personal portfolio site built with React, TypeScript, and Tailwind CSS. Showcases professional experience, projects, publications, achievements, and more.

**Live site:** [atanusaha143.github.io/portfolio](https://atanusaha143.github.io/portfolio)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 |
| Language | TypeScript 5 |
| Styling | Tailwind CSS v4 |
| UI Primitives | Radix UI |
| Build Tool | Vite 5 |
| Icons | React Icons |

---

## Features

- **About** - Bio, role, location, and social links (LinkedIn, GitHub, Google Scholar, ResearchGate, ICPC)
- **Resume** - Work experience, education, and skills
- **Projects** - Detailed cards for professional and personal projects with tech stack and contributions
- **Achievements** - Competitive programming awards and academic recognitions
- **Publications** - Research papers indexed on Google Scholar and ResearchGate
- Fully responsive layout with a fixed sidebar navigation
- Dark-themed, minimal UI

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Install & run locally

```bash
npm install
npm run dev
```

The dev server starts at `http://localhost:5173`.

### Build for production

```bash
npm run build
```

Output is written to `dist/`.

### Preview production build

```bash
npm run preview
```

### Type check

```bash
npm run typecheck
```

---

## Project Structure

```
src/
├── assets/          # Static assets (avatar, etc.)
├── components/      # UI components (About, Resume, Projects, …)
│   └── ui/          # Shared primitive components
├── data/            # Content data files (profile, resume, projects, …)
└── index.css        # Global styles
```

All content (bio, experience, projects, publications, achievements) lives in `src/data/` — edit those files to update what's displayed on the site.

---

## License

This project is open source and available under the [MIT License](LICENSE).
