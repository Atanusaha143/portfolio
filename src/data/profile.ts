import type { ElementType } from 'react'
import {
  BsGithub,
  BsLinkedin,
  BsPersonVcardFill,
  BsTrophyFill,
} from 'react-icons/bs'
import {
  IoBookOutline,
  IoCodeSlashOutline,
  IoDocumentTextOutline,
  IoPersonOutline,
  IoTrophyOutline,
} from 'react-icons/io5'
import { SiGooglescholar, SiMedium, SiResearchgate } from 'react-icons/si'
import avatarUrl from '@/assets/avatar.jpg'

export type Social = {
  name: string
  href: string
  icon: ElementType
  label: string
}

export type Profile = {
  name: string
  role: string
  email: string
  location: string
  university: { name: string; href: string }
  company: { name: string; href: string }
  avatar: string
  bio: string[]
  socials: Social[]
}

export const profile: Profile = {
  name: 'Atanu Saha',
  role: 'Software Engineer',
  email: 'atanu.saha415@gmail.com',
  location: 'Dhaka, Bangladesh',
  university: {
    name: 'American International University-Bangladesh',
    href: 'https://www.aiub.edu/',
  },
  company: {
    name: 'Cefalo Bangladesh Ltd.',
    href: 'https://www.cefalo.com/en/',
  },
  avatar: avatarUrl,
  bio: [
    'Backend-focused Software Engineer at Cefalo Bangladesh Ltd. with 3+ years of experience. I specialize in event-driven Python microservices (FastAPI, FastStream) over NATS and PostgreSQL, Stripe and Adyen integrations, and cloud infrastructure on GCP & AWS.',
    "Claude Certified Architect – Foundations and a daily Claude Code user, making large async FastAPI codebases AI-navigable through task-specific skills, specialized subagents, and enforced conventions. Co-author and co-facilitator of Cefalo's internal Claude Certified Architect workshop series.",
    'BSc in CSE from AIUB (Summa Cum Laude, Gold Medal), published researcher on Google Scholar & ResearchGate, and ICPC Asia West Continent Finalist. Competitive programming mentor to 100+ students. I enjoy digging into system bottlenecks and reading about distributed systems.',
  ],
  socials: [
    {
      name: 'LinkedIn',
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/atanusaha143/',
      icon: BsLinkedin,
    },
    {
      name: 'GitHub',
      label: 'GitHub',
      href: 'https://github.com/Atanusaha143',
      icon: BsGithub,
    },
    {
      name: 'Medium',
      label: 'Medium',
      href: 'https://medium.com/@atanu.saha415',
      icon: SiMedium,
    },
    {
      name: 'GoogleScholar',
      label: 'Google Scholar',
      href: 'https://scholar.google.com/citations?user=EsvV1TkAAAAJ&hl=en',
      icon: SiGooglescholar,
    },
    {
      name: 'ResearchGate',
      label: 'ResearchGate',
      href: 'https://www.researchgate.net/profile/Atanu-Saha-11',
      icon: SiResearchgate,
    },
    {
      name: 'ICPC',
      label: 'ICPC',
      href: 'https://icpc.global/ICPCID/20XVZHX66AR3',
      icon: BsTrophyFill,
    },
    {
      name: 'Resume',
      label: 'Resume',
      href: `${import.meta.env.BASE_URL}Atanu_Saha.pdf`,
      icon: BsPersonVcardFill,
    },
  ],
}

export const NAV_ITEMS = [
  { name: 'About', icon: IoPersonOutline },
  { name: 'Resume', icon: IoDocumentTextOutline },
  { name: 'Achievements', icon: IoTrophyOutline },
  { name: 'Projects', icon: IoCodeSlashOutline },
  { name: 'Publications', icon: IoBookOutline },
] as const

export type NavSection = (typeof NAV_ITEMS)[number]['name']
