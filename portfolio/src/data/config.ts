import type { SiteConfig } from '../types'

/**
 * PERSONALIZE ME
 * Everything on the site — About, Projects, Timeline, and the chat bot's
 * answers — is rendered from this object. Edit the values below and the
 * whole site updates. No need to touch component files unless you want
 * to change layout/structure.
 */
export const CONFIG: SiteConfig = {
  name: 'Gilmier Cabil',
  email: 'gilmiercabil@example.com',
  github: 'https://github.com/gilmierdev',
  linkedin: 'https://linkedin.com/in/gilmiercabil',

  interests: [
    'Open source',
    'Game jams',
    'Competitive programming',
    'Coffee ☕',
    'UI tinkering',
    'Rubber duck debugging',
  ],

  skillGroups: [
    { label: 'Languages', items: ['JavaScript', 'Python', 'Java', 'PortgreSQL', 'HTML/CSS'] },
    { label: 'Frameworks & Tools', items: ['React', 'Node.js', 'Tailwind CSS', 'Git & GitHub', 'Express', 'MongoDB'] },
    { label: 'Currently learning', items: ['TypeScript', 'Java', 'System Design basics', 'Functional Programming'] },
    { label: 'Soft skills', items: ['Problem solving', 'Team collaboration', 'Time management'] },
  ],

  timeline: [
    { hash: 'a1c93f', date: 'Aug 2023', msg: 'Started B.S. in Computer Science' },
    { hash: '7e02b1', date: 'Jan 2024', msg: 'Built first full-stack app (and broke my local DB twice)' },
    { hash: '44d8aa', date: 'Jun 2024', msg: 'Landed a summer research assistant role in the CS dept' },
    { hash: '9f31c0', date: 'Nov 2024', msg: 'Merged first pull request into an open-source project' },
    { hash: 'c02e17', date: 'Present', msg: 'Building this portfolio + prepping for internship season' },
  ],

  projects: [
    {
      title: 'StudySync',
      tagline: 'A collaborative study-planner for busy college students.',
      description:
        'StudySync helps students coordinate group study sessions, split up reading assignments, and track shared deadlines. I built it after one too many chaotic group-project group chats — the goal was something simple enough that people would actually use it.',
      features: [
        'Shared calendars synced across group members in real time',
        'Auto-splits reading assignments evenly by page count',
        'Deadline reminders via email',
        'Simple kanban board for group project tasks',
      ],
      challenges:
        'The hardest part was getting real-time sync working without the UI feeling laggy. I underestimated how tricky state management gets once multiple people are editing the same board — I ended up learning WebSockets from scratch to fix it, and that alone taught me more than a whole semester of lectures.',
      tech: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Tailwind CSS'],
      demo: '#',
      github: 'https://github.com/gilmierdev/studysync',
      accent: 'from-primary to-secondary',
      emoji: '📚',
    },
    {
      title: 'PixelPantry',
      tagline: 'A pixel-art recipe app that turns your fridge into meal ideas.',
      description:
        'A fun side project combining two things I like: cooking badly and pixel art. You type in a few ingredients you have, and it suggests simple recipes — no sign-up, no ads, just a lightweight tool built for a weekend hackathon.',
      features: [
        'Ingredient-based recipe search',
        'Hand-drawn pixel-art icons for common ingredients',
        'Saves favorite recipes locally (no account needed)',
        'Fully responsive, installable as a PWA',
      ],
      challenges:
        'I originally tried to build my own recipe-matching algorithm and it was... not great. Switching to a simpler scoring system (matching ingredient overlap %) was way more reliable, and taught me that the simplest solution is often the right one, even if it feels less impressive.',
      tech: ['JavaScript', 'HTML/CSS', 'LocalStorage API', 'PWA'],
      demo: '#',
      github: 'https://github.com/yourusername/pixelpantry',
      accent: 'from-secondary to-primary',
      emoji: '🍳',
    },
    {
      title: 'CampusConnect',
      tagline: 'A course-review platform built for my university (used by 500+ students).',
      description:
        "My biggest project so far. CampusConnect lets students leave honest reviews of courses and professors, so people can make better registration decisions than guessing from a name. It's currently used by a few hundred students at my school.",
      features: [
        'Anonymous, moderated course & professor reviews',
        'Search and filter by department, difficulty, workload',
        'Admin dashboard for flagged content review',
        'JWT-based authentication with university email verification',
      ],
      challenges:
        "Moderation was the real challenge — not the code, but designing a system that stays fair and doesn't get abused. I read a lot about trust & safety design patterns for this one, and ended up building a simple flag-and-review queue instead of full automation, since I didn't fully trust an algorithm to make that call yet (and honestly, neither should I).",
      tech: ['React', 'Express', 'PostgreSQL', 'JWT', 'Tailwind CSS'],
      demo: '#',
      github: 'https://github.com/yourusername/campusconnect',
      accent: 'from-primary to-secondary',
      emoji: '🎓',
    },
  ],
}
