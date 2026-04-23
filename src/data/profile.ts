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
import { SiGooglescholar, SiResearchgate } from 'react-icons/si'
import avatarUrl from '@/assets/avatar.jpg'

export type Social = {
  name: string
  href: string
  icon: ElementType
  label: string
}

export type Portfolio = {
  title: string
  subtitle: string
  cover: string
  tint: string
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
  portfolios: Portfolio[]
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
    name: 'Cefalo Bangladesh Ltd',
    href: 'https://www.cefalo.com/en/',
  },
  avatar: avatarUrl,
  bio: [
    'Backend-focused Software Engineer at Cefalo Bangladesh Ltd. with 2.5+ years of experience. I specialize in Python microservices (FastAPI, FastStream), event-driven architecture over NATS, and cloud infrastructure on GCP & AWS - with a growing focus on GenAI, RAG pipelines, and LLM-powered systems.',
    'BSc in CSE from AIUB with a strong academic record, published researcher on Google Scholar & ResearchGate, and a competitive programming instructor and contest judge.',
    'Former ICPC contestant, competitive programming mentor to 100+ students. I enjoy digging into system bottlenecks, reading about distributed systems, and translating research ideas into working code.',
  ],
  portfolios: [
    {
      title: 'Digital Identity',
      subtitle: 'Personal portfolio site',
      cover:
        'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&q=80&auto=format&fit=crop',
      tint: 'from-slate-700 to-slate-900',
    },
    {
      title: 'Terminal Portfolio',
      subtitle: 'Interactive terminal-style site',
      cover:
        'https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=1200&q=80&auto=format&fit=crop',
      tint: 'from-rose-900 to-orange-700',
    },
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
      href: '/Atanu_Saha.pdf',
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
