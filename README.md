# Hello World: Matrix vs Inception

A cinematic "Hello World" page where two iconic film universes collide. Toggle between the **Matrix** code rain and **Inception** dream layers with a single pill switch.

## Live Demo

**https://sentinels-hub.github.io/web-hola-mundo-matrix-vs-inception/**

## Features

- **Matrix theme** — Cascading green code rain animation (40 falling spans, 20 on mobile)
- **Inception theme** — 5 geometric dream layers with 3D rotation
- **Pill toggle** — Smooth 0.6s CSS transition between universes
- **Accessible** — WCAG 2.1 AA: `role="switch"`, `aria-checked`, keyboard nav, focus indicators
- **Reduced motion** — Respects `prefers-reduced-motion` system preference
- **Responsive** — Mobile-first with breakpoints at 768px and 1024px
- **Lightweight** — 15.3KB total page weight, zero dependencies

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Markup | HTML5 (semantic) |
| Styling | CSS3 (custom properties, animations, media queries) |
| Logic | Vanilla JavaScript (ES6) |
| Build | None — zero dependencies, no build tools |
| Deploy | GitHub Pages |

## Run Locally

```bash
git clone https://github.com/sentinels-hub/web-hola-mundo-matrix-vs-inception.git
cd web-hola-mundo-matrix-vs-inception
open index.html
```

Or use any local server:

```bash
npx serve .
```

## Project Structure

```
.
├── index.html      # Page structure and semantic markup (88 lines)
├── style.css       # Themes, animations, responsive layout (~460 lines)
├── script.js       # Toggle logic and accessibility (33 lines)
├── CHANGELOG.md    # Release history
└── README.md       # This file
```

## Quality Gates

| Gate | Status | Details |
|------|--------|---------|
| G3 — Implementation | PASS | All tasks complete, commits traceable |
| G4 — Security | PASS | Zero findings (SAST, secrets, threat surface) |
| G5 — Code Review | APPROVE | Security 10/10, Bugs 10/10 |
| G6 — QA | PASS | 22/22 checks verified |
| G7 — Deploy | PASS | Live on GitHub Pages, health check 200 OK |

## License

[MIT](https://opensource.org/licenses/MIT)

---

Built with the [Sentinels Protocol](https://github.com/sentinels-hub) — Contract `CTR-web-hola-mundo-matrix-vs-inception-20260311`
