import { CONFIG } from '../data/config'
import Reveal from './Reveal'

export default function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal as="p" className="tag text-secondary mb-2">
          // 01 — about-me
        </Reveal>
        <Reveal as="h2" className="font-display font-bold text-3xl sm:text-4xl mb-12">
          A bit about who's writing this code
        </Reveal>

        <div className="grid lg:grid-cols-5 gap-10">
          <Reveal className="lg:col-span-2">
            <p className="text-muted leading-relaxed">
              I got into programming almost by accident — a "boring" intro course turned into late nights
              fixing bugs I created myself, and somehow I liked it. I'm not going to pretend I know
              everything (I very much don't), but I show up, I read the docs, and I finish what I start.
              That's the engineer I'm trying to become.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              Outside of class you'll probably find me contributing to a small open-source repo, tinkering
              with a side project that doesn't need to exist, or explaining CSS flexbox to a groupmate for
              the third time this week.
            </p>

            <div className="mt-8 p-5 rounded-2xl border border-border bg-surface">
              <h3 className="font-display font-semibold text-lg mb-1">🎓 Education</h3>
              <p className="font-semibold">B.S. in Computer Science</p>
              <p className="text-muted text-sm">Northfield State University · Expected Graduation: 2027</p>
              <p className="text-muted text-sm mt-1">
                Relevant coursework: Data Structures, Algorithms, Databases, Operating Systems, Web
                Development
              </p>
            </div>

            <div className="mt-6">
              <h3 className="font-display font-semibold text-lg mb-3">Outside of code</h3>
              <div className="flex flex-wrap gap-2">
                {CONFIG.interests.map((interest) => (
                  <span key={interest} className="tag skill-chip px-3 py-1.5 rounded-full border border-border bg-surface">
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-3">
            <h3 className="font-display font-semibold text-lg mb-4">Skills</h3>
            <div className="space-y-6">
              {CONFIG.skillGroups.map((group) => (
                <div key={group.label}>
                  <p className="text-sm font-semibold text-muted mb-2">{group.label}</p>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span key={item} className="tag skill-chip px-3 py-1.5 rounded-full border border-border bg-surface">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <h3 className="font-display font-semibold text-lg mt-8 mb-4">Learning journey</h3>
            <div className="font-mono text-sm border-l-2 border-border pl-5 space-y-5">
              {CONFIG.timeline.map((entry) => (
                <div key={entry.hash} className="relative">
                  <span className="absolute -left-[26px] top-1.5 w-2.5 h-2.5 rounded-full bg-secondary" />
                  <p className="text-muted">
                    commit <span className="text-secondary">{entry.hash}</span> · {entry.date}
                  </p>
                  <p>"{entry.msg}"</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
