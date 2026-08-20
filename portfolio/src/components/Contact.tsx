import { useState, type FormEvent } from 'react'
import { CONFIG } from '../data/config'
import Reveal from './Reveal'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [showStatus, setShowStatus] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!e.currentTarget.checkValidity()) {
      e.currentTarget.reportValidity()
      return
    }
    // PERSONALIZE: hook this up to Formspree / EmailJS / your own backend.
    // Right now it just simulates a submission client-side.
    setShowStatus(true)
    setName('')
    setEmail('')
    setMessage('')
    setTimeout(() => setShowStatus(false), 6000)
  }

  return (
    <section id="contact" className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal as="p" className="tag text-secondary mb-2">
          // 03 — contact
        </Reveal>
        <Reveal as="h2" className="font-display font-bold text-3xl sm:text-4xl mb-4">
          Let's connect
        </Reveal>
        <Reveal as="p" className="text-muted max-w-xl mb-12">
          Whether you've got feedback on a project, a question about something I built, or an internship /
          junior-dev opportunity — my inbox is open. I reply to basically everything, usually within a day.
        </Reveal>

        <div className="grid lg:grid-cols-5 gap-10">
          <Reveal as="div" className="lg:col-span-3 p-6 sm:p-8 rounded-2xl border border-border bg-surface">
            <FormFields
              name={name}
              email={email}
              message={message}
              onNameChange={setName}
              onEmailChange={setEmail}
              onMessageChange={setMessage}
              onSubmit={handleSubmit}
              showStatus={showStatus}
            />
          </Reveal>

          <Reveal as="div" className="lg:col-span-2 space-y-4">
            <a
              href={`mailto:${CONFIG.email}`}
              className="flex items-center gap-4 p-5 rounded-2xl border border-border bg-surface hover:border-primary transition-colors"
            >
              <span className="w-11 h-11 rounded-xl grid place-items-center btn-primary text-white shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 6 12 13 2 6" />
                  <path d="M2 6h20v12H2z" />
                </svg>
              </span>
              <span>
                <span className="block font-semibold">Email</span>
                <span className="block text-muted text-sm">{CONFIG.email}</span>
              </span>
            </a>
            <a
              href={CONFIG.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-2xl border border-border bg-surface hover:border-primary transition-colors"
            >
              <span className="w-11 h-11 rounded-xl grid place-items-center btn-primary text-white shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 .5C5.73.5.98 5.24.98 11.52c0 4.86 3.15 8.98 7.52 10.43.55.1.75-.24.75-.53v-1.87c-3.06.67-3.71-1.47-3.71-1.47-.5-1.28-1.22-1.62-1.22-1.62-1-.68.08-.67.08-.67 1.1.08 1.68 1.13 1.68 1.13.98 1.68 2.58 1.2 3.21.92.1-.71.38-1.2.7-1.48-2.44-.28-5.01-1.22-5.01-5.45 0-1.2.43-2.19 1.13-2.96-.11-.28-.49-1.4.11-2.92 0 0 .92-.3 3.02 1.13a10.5 10.5 0 0 1 5.5 0c2.1-1.43 3.02-1.13 3.02-1.13.6 1.52.22 2.64.11 2.92.7.77 1.13 1.76 1.13 2.96 0 4.24-2.58 5.16-5.03 5.44.39.34.74 1.01.74 2.03v3.01c0 .29.2.64.76.53 4.36-1.46 7.51-5.58 7.51-10.43C23.02 5.24 18.27.5 12 .5Z" />
                </svg>
              </span>
              <span>
                <span className="block font-semibold">GitHub</span>
                <span className="block text-muted text-sm">@yourusername</span>
              </span>
            </a>
            <a
              href={CONFIG.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-2xl border border-border bg-surface hover:border-primary transition-colors"
            >
              <span className="w-11 h-11 rounded-xl grid place-items-center btn-primary text-white shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
                </svg>
              </span>
              <span>
                <span className="block font-semibold">LinkedIn</span>
                <span className="block text-muted text-sm">/in/yourusername</span>
              </span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

interface FormFieldsProps {
  name: string
  email: string
  message: string
  onNameChange: (v: string) => void
  onEmailChange: (v: string) => void
  onMessageChange: (v: string) => void
  onSubmit: (e: FormEvent<HTMLFormElement>) => void
  showStatus: boolean
}

function FormFields({
  name,
  email,
  message,
  onNameChange,
  onEmailChange,
  onMessageChange,
  onSubmit,
  showStatus,
}: FormFieldsProps) {
  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1.5">
          Name
        </label>
        <input
          required
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          value={name}
          onChange={(e) => onNameChange(e.target.value)}
          className="w-full px-4 py-3 rounded-xl bg-surface2 border border-border focus:border-primary outline-none transition-colors"
          placeholder="Jordan Lee"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1.5">
          Email
        </label>
        <input
          required
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          value={email}
          onChange={(e) => onEmailChange(e.target.value)}
          className="w-full px-4 py-3 rounded-xl bg-surface2 border border-border focus:border-primary outline-none transition-colors"
          placeholder="you@example.com"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1.5">
          Message
        </label>
        <textarea
          required
          id="message"
          name="message"
          rows={5}
          value={message}
          onChange={(e) => onMessageChange(e.target.value)}
          className="w-full px-4 py-3 rounded-xl bg-surface2 border border-border focus:border-primary outline-none transition-colors resize-none"
          placeholder="Hey Alex, I saw your project and..."
        />
      </div>
      <button
        type="submit"
        className="btn-primary text-white font-semibold px-6 py-3 rounded-xl w-full sm:w-auto hover:shadow-lg hover:-translate-y-0.5 transition-all"
      >
        Send message
      </button>
      {showStatus && (
        <p className="text-sm text-secondary" role="status">
          Thanks! That's just a demo submission for now — email me directly and I'll actually see it. 🙂
        </p>
      )}
    </form>
  )
}
