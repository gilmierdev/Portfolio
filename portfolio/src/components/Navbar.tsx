import { useEffect, useState } from 'react'
import type { ThemeMode } from '../types'

interface NavbarProps {
  theme: ThemeMode
  onToggleTheme: () => void
}

const NAV_ITEMS = [
  { id: 'home', label: 'home.tsx' },
  { id: 'about', label: 'about.tsx' },
  { id: 'projects', label: 'projects.tsx' },
  { id: 'contact', label: 'contact.tsx' },
]

export default function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeId, setActiveId] = useState('home')

  useEffect(() => {
    const sections = NAV_ITEMS.map((n) => document.getElementById(n.id)).filter(
      (el): el is HTMLElement => Boolean(el),
    )

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <nav
        className="glass mx-auto mt-3 max-w-6xl md:rounded-2xl rounded-none px-4 sm:px-6 py-3 flex items-center justify-between"
        aria-label="Primary"
      >
        <a href="#home" className="flex items-center gap-2 font-display font-bold text-lg" aria-label="Go to top">
          <span className="w-9 h-9 rounded-xl grid place-items-center text-white btn-primary shadow-md">AR</span>
          <span className="hidden sm:inline">
            alex<span className="text-primary">.</span>dev
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-7 font-mono text-sm">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`nav-tab hover:text-primary transition-colors ${
                  activeId === item.id ? 'active' : ''
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Toggle dark mode"
            aria-pressed={theme === 'dark'}
            onClick={onToggleTheme}
            className="w-10 h-10 rounded-xl grid place-items-center border border-border hover:border-primary transition-colors"
          >
            {theme === 'dark' ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
              </svg>
            )}
          </button>

          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            aria-controls="mobileMenu"
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden w-10 h-10 rounded-xl grid place-items-center border border-border"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div id="mobileMenu" className="md:hidden mx-3 mt-2 glass rounded-2xl overflow-hidden">
          <ul className="flex flex-col font-mono text-sm p-2">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 rounded-xl hover:bg-surface2"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
