import { CONFIG } from '../data/config'

export default function Hero() {
  return (
    <section id="home" className="relative pt-40 pb-24 px-4 sm:px-6 overflow-hidden">
      <div className="absolute inset-0 grid-bg pointer-events-none" aria-hidden="true" />

      <div className="absolute inset-0 pointer-events-none hidden lg:block" aria-hidden="true">
        <span className="absolute left-[8%] top-[22%] animate-float tag px-3 py-1 rounded-lg glass">&lt;/&gt;</span>
        <span className="absolute right-[10%] top-[18%] animate-floatSlow tag px-3 py-1 rounded-lg glass">git commit</span>
        <span className="absolute left-[14%] bottom-[16%] animate-floatSlow tag px-3 py-1 rounded-lg glass">python3</span>
        <span className="absolute right-[6%] bottom-[24%] animate-float tag px-3 py-1 rounded-lg glass">npm run dev</span>
      </div>

      <div className="relative max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
        <div className="animate-fadeUp">
          <p className="tag inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border text-primary mb-5">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" /> status: currently_learning
          </p>
          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.08] tracking-tight">
            Hi, I'm{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              {CONFIG.name}
            </span>
            <br className="hidden sm:block" /> — CS student building things that (mostly) work.
          </h1>
          <p className="mt-6 text-muted text-lg leading-relaxed max-w-xl">
            I'm a third-year Computer Science student who genuinely loves the moment code finally runs.
            Still learning, still debugging, still googling things I "should" already know — but I ship
            real projects and I'm serious about growing into a solid software engineer.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="btn-primary text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-xl font-semibold border border-border hover:border-primary hover:text-primary transition-colors"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-10 flex items-center gap-5 text-muted" aria-label="Social links">
            <a href={CONFIG.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-primary transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 .5C5.73.5.98 5.24.98 11.52c0 4.86 3.15 8.98 7.52 10.43.55.1.75-.24.75-.53v-1.87c-3.06.67-3.71-1.47-3.71-1.47-.5-1.28-1.22-1.62-1.22-1.62-1-.68.08-.67.08-.67 1.1.08 1.68 1.13 1.68 1.13.98 1.68 2.58 1.2 3.21.92.1-.71.38-1.2.7-1.48-2.44-.28-5.01-1.22-5.01-5.45 0-1.2.43-2.19 1.13-2.96-.11-.28-.49-1.4.11-2.92 0 0 .92-.3 3.02 1.13a10.5 10.5 0 0 1 5.5 0c2.1-1.43 3.02-1.13 3.02-1.13.6 1.52.22 2.64.11 2.92.7.77 1.13 1.76 1.13 2.96 0 4.24-2.58 5.16-5.03 5.44.39.34.74 1.01.74 2.03v3.01c0 .29.2.64.76.53 4.36-1.46 7.51-5.58 7.51-10.43C23.02 5.24 18.27.5 12 .5Z" />
              </svg>
            </a>
            <a href={CONFIG.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-primary transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
              </svg>
            </a>
            <a href={`mailto:${CONFIG.email}`} aria-label="Email" className="hover:text-primary transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 6 12 13 2 6" />
                <path d="M2 6h20v12H2z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="animate-fadeUp opacity-0" style={{ animationDelay: '.15s', animationFillMode: 'forwards' }}>
          <div className="rounded-2xl overflow-hidden border border-border terminal-shadow bg-surface">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-surface2">
              <span className="w-3 h-3 rounded-full bg-red-400" />
              <span className="w-3 h-3 rounded-full bg-yellow-400" />
              <span className="w-3 h-3 rounded-full bg-green-400" />
              <span className="ml-3 tag text-muted">alex@dev-machine — intro.sh</span>
            </div>
            <div className="p-6 font-mono text-sm leading-7">
              <p>
                <span className="text-secondary">$</span> whoami
              </p>
              <p className="text-muted">Computer Science student, learning in public.</p>
              <p className="mt-3">
                <span className="text-secondary">$</span> cat currently_learning.txt
              </p>
              <p className="text-muted">React · Node.js · Data Structures & Algorithms · Cloud basics</p>
              <p className="mt-3">
                <span className="text-secondary">$</span> ./run_intro
                <span className="code-caret" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
