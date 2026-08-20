export interface SkillGroup {
  label: string
  items: string[]
}

export interface TimelineEntry {
  hash: string
  date: string
  msg: string
}

export interface Project {
  title: string
  tagline: string
  description: string
  features: string[]
  challenges: string
  tech: string[]
  demo: string
  github: string
  accent: string
  emoji: string
}

export interface SiteConfig {
  name: string
  email: string
  github: string
  linkedin: string
  interests: string[]
  skillGroups: SkillGroup[]
  timeline: TimelineEntry[]
  projects: Project[]
}

export type ChatSender = 'bot' | 'user'

export interface ChatMessage {
  id: number
  from: ChatSender
  text: string
}

export type ThemeMode = 'light' | 'dark'
