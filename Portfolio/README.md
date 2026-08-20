# Alex Rivera — Portfolio (React + TypeScript + Tailwind)

A React/TSX conversion of the original single-file HTML portfolio, split into
one component per file.

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

## Project structure

```
src/
  data/
    config.ts     ← PERSONALIZE HERE: your name, links, skills, projects, timeline
    chatBot.ts     ← rule-based chat assistant replies
  hooks/
    useTheme.ts    ← dark/light mode, persisted to localStorage
    useReveal.ts   ← scroll-reveal animation hook
  components/
    Navbar.tsx
    Hero.tsx
    About.tsx
    Projects.tsx
    ProjectModal.tsx
    Contact.tsx
    Footer.tsx
    ChatWidget.tsx
    Reveal.tsx     ← shared scroll-reveal wrapper
  types/index.ts   ← shared TypeScript types
  App.tsx          ← composes all sections
  main.tsx         ← React entry point
  index.css        ← design tokens (light/dark) + custom utility classes
```

## Personalizing

Almost everything on the page is data-driven from `src/data/config.ts` —
edit that file to change your name, email, socials, skills, timeline, and
projects without touching any component markup.

The contact form is a client-side demo (no backend). Hook it up to
Formspree, EmailJS, or your own API inside `handleSubmit` in
`src/components/Contact.tsx`.

The chat widget is a simple keyword-matching bot (`src/data/chatBot.ts`).
Swap `getBotReply` for a `fetch()` call to a backend that proxies the
Anthropic API if you want a real AI-powered assistant.

## Build

```bash
npm run build
```

Outputs a production build to `dist/`.
