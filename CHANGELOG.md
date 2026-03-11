# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2026-03-11

### Added
- Matrix theme: CSS code rain animation with 40 falling character spans (20 on mobile)
- Inception theme: 5 geometric dream layers with CSS rotate3d animation
- Pill toggle switch between Matrix and Inception themes with 0.6s CSS transition
- Hero "Hello World" element with theme-responsive styling
- CSS custom properties architecture for seamless theme switching
- WCAG 2.1 AA accessibility: role="switch", aria-checked, keyboard navigation, focus indicators
- prefers-reduced-motion support for users who prefer reduced animation
- Responsive design: mobile-first with breakpoints at 768px and 1024px
- Deployed to GitHub Pages at https://sentinels-hub.github.io/web-hola-mundo-matrix-vs-inception/

### Technical Details
- Pure HTML5/CSS3/vanilla JS — zero dependencies, no build tools
- Total page weight: 15.3KB (constraint: < 150KB)
- 3 files: index.html (88 lines), style.css (~460 lines), script.js (33 lines)
- Security audit: PASS (zero findings)
- Code review: APPROVE (Security 10/10, Bugs 10/10)
- QA: PASS (22/22 checks)

[1.0.0]: https://github.com/sentinels-hub/web-hola-mundo-matrix-vs-inception/releases/tag/v1.0.0
