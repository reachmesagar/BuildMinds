# FORGE — Robotics & AI Undergraduate Program

A landing site for an undergraduate Robotics & AI specialization: curriculum, course
catalogue, and exam/assessment structure, built as a React + Vite + Tailwind project.

## Run it locally

Requires Node.js 18+.

```bash
npm install
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`).

To build a production bundle:

```bash
npm run build
npm run preview
```

The build output goes to `dist/` — deploy that folder to any static host
(Vercel, Netlify, GitHub Pages, S3, etc.).

## What's inside

```
src/
  components/
    Navbar.jsx        sticky nav with active-section highlighting
    ScrollSpine.jsx    fixed circuit-trace progress rail (desktop only)
    Hero.jsx           headline + animated robotic-arm/circuit SVG, mouse parallax
    Highlights.jsx     "Why Forge" feature cards
    Curriculum.jsx     expandable 4-semester program timeline
    Courses.jsx        filterable course catalogue grid
    Exams.jsx          grade weightage donut chart, exam cycle, grading scale, policies
    Admissions.jsx     eligibility, application steps, lead-capture form
    Footer.jsx
    AnimatedCounter.jsx  reusable count-up stat
  data/
    curriculum.js      edit semester content here
    courses.js         edit the course catalogue here
    exams.js           edit weightage / exam cycle / grading scale here
  hooks/
    useActiveSection.js  IntersectionObserver-based scroll-spy
```

## Customizing content

Everything text-based lives in `src/data/*.js` — edit those arrays to change
semesters, courses, exam weightage, or policies without touching component code.

To rebrand, update:
- Program name: search for `FORGE` across `src/components/`
- Colors/fonts: `tailwind.config.js` (`colors`, `fontFamily`) and the Google Fonts
  link in `index.html`
- The hero's email/contact placeholders in `Admissions.jsx` and `Footer.jsx`

## Stack

- React 18 + Vite
- Tailwind CSS (custom design tokens — see `tailwind.config.js`)
- Framer Motion (scroll reveals, hover interactions, the hero diagram animation)
- Recharts (assessment weightage donut chart)
- lucide-react (icons)

## Notes

- The form on the Admissions section is UI-only (no backend call) — wire up
  `handleSubmit` in `Admissions.jsx` to your email service or API.
- Respects `prefers-reduced-motion` (see `src/index.css`).
- Fully responsive; the left-side scroll spine is desktop-only by design.
