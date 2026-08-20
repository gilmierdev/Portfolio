import { CONFIG } from '../data/config'

export default function Footer() {
  return (
    <footer className="border-t border-border py-8 px-4 sm:px-6 text-center text-muted text-sm font-mono">
      <p>// built with React, TypeScript, Tailwind CSS & a lot of trial and error</p>
      <p className="mt-1">© {new Date().getFullYear()} {CONFIG.name}. All rights reserved.</p>
    </footer>
  )
}
