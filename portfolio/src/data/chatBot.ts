import { CONFIG } from './config'

/**
 * Simple rule-based demo assistant — no external API calls.
 * To connect this to a real Claude-powered backend, replace the body of
 * getBotReply() with a fetch() call to your own server endpoint that
 * calls the Anthropic API using CONFIG as context.
 */
export function getBotReply(raw: string): string {
  const q = raw.toLowerCase()

  if (/project/.test(q)) {
    const names = CONFIG.projects.map((p) => p.title).join(', ')
    const favorite = CONFIG.projects[CONFIG.projects.length - 1].title
    return `I've got ${CONFIG.projects.length} projects on here right now: ${names}. My favorite to talk about is "${favorite}" — scroll down to the Projects section and click "View Details" for the full story on each one!`
  }
  if (/tech|stack|skill|language|framework|know/.test(q)) {
    const all = CONFIG.skillGroups.flatMap((g) => g.items).slice(0, 10).join(', ')
    return `I mainly work with ${all}. I'm still a student though, so I'm always adding to this list — check the About section for the full breakdown, including what I'm learning right now.`
  }
  if (/contact|reach|email|hire|internship|linkedin|github/.test(q)) {
    return `Best way is email: ${CONFIG.email} — or connect on LinkedIn/GitHub, links are in the Contact section. I reply pretty quickly, promise!`
  }
  if (/study|studying|major|school|university|degree|education/.test(q)) {
    return `I'm studying Computer Science, expected to graduate in 2027. You can see my coursework and learning timeline in the About section.`
  }
  if (/hobb|interest|free time|fun/.test(q)) {
    return `Outside of coding: ${CONFIG.interests.join(', ')}. Basically still tech-adjacent even when I'm "relaxing" 😅`
  }
  if (/hi|hello|hey/.test(q)) {
    return `Hey! I'm AlexBot 🤖 — ask me about ${CONFIG.name.split(' ')[0]}'s projects, skills, or how to get in touch.`
  }
  if (/who are you|what are you/.test(q)) {
    return `I'm a simple rule-based chatbot built into this portfolio to help you find info faster. I'm not a full AI model — just a friendly shortcut. For real questions, email works best!`
  }
  return `Good question! I don't have a scripted answer for that one — try asking about my projects, skills, education, or how to contact me. Or reach out directly at ${CONFIG.email}.`
}

export const EXAMPLE_PROMPTS: string[] = [
  'Tell me about your projects',
  'What technologies do you know?',
  'How can I contact you?',
  'What are you studying?',
]
