import type { ComponentType, SVGProps } from 'react'
import type { ReactNode } from 'react'
import {
  IoBriefcaseOutline,
  IoCodeSlashOutline,
  IoEaselOutline,
  IoPeopleOutline,
  IoSchoolOutline,
} from 'react-icons/io5'

export type ExperienceEntry = {
  title: string
  company: string
  context?: ReactNode
  bullets: ReactNode[]
  skills: string[]
  date: string
}

export type ExperienceCategoryKey =
  | 'professional'
  | 'teaching'
  | 'mentoring'

export type ExperienceCategory = {
  key: ExperienceCategoryKey
  label: string
  icon: ComponentType<SVGProps<SVGSVGElement>>
  entries: ExperienceEntry[]
}

const TicketCo = () => (
  <a
    href="https://ticketco.io"
    target="_blank"
    rel="noopener noreferrer"
    className="font-medium text-[color:var(--color-accent)] underline underline-offset-2 decoration-[color:var(--color-accent)]/40 hover:decoration-[color:var(--color-accent)] transition-colors duration-150"
  >
    TicketCo AS
  </a>
)

const professional: ExperienceEntry[] = [
  {
    title: 'Software Engineer (L1)',
    company: 'Cefalo Bangladesh Ltd.',
    context: <>Backend Consultant for <TicketCo /></>,
    bullets: [
      'Diagnosed stack and architectural limitations causing performance and reliability issues. Led R&D and system redesign using FastAPI, FastStream, and NATS, resolving bottlenecks and improving performance, compatibility, observability, and maintainability.',
      'Implemented backend payment APIs integrating Adyen for Platforms, handling platform payment features including split payments.',
    ],
    skills: ['FastAPI', 'FastStream', 'NATS', 'Payment Gateway'],
    date: 'January 2026 — Present',
  },
  {
    title: 'Associate Software Engineer (L2)',
    company: 'Cefalo Bangladesh Ltd.',
    context: <>Backend Consultant for <TicketCo /></>,
    bullets: [
      'Architected event-driven microservices using FastStream and NATS, enabling asynchronous communication across 3+ services.',
      'Optimized booking flow reducing system latency by ~99.94% through strategic connection pooling and configuration tuning.',
      'Refactored refund API cutting response time by ~72% (from ~2.5s to ~700ms) via asynchronous processing.',
      'Collaborated with cross-functional teams to resolve production issues and enhance system reliability.',
    ],
    skills: ['FastStream', 'NATS', 'Microservices', 'Python'],
    date: 'May 2025 — December 2025',
  },
  {
    title: 'Associate Software Engineer (L1)',
    company: 'Cefalo Bangladesh Ltd.',
    context: <>Backend Consultant for <TicketCo /></>,
    bullets: [
      'Developed scalable RESTful APIs using FastAPI, Python 3.12, SQLAlchemy, and PostgreSQL serving 1.5k+ requests/day with ~99% uptime.',
      'Achieved ~85%+ test coverage using PyTest and Cucumber BDD integrated into GitHub Actions CI/CD pipeline.',
      'Deployed containerized applications on GCP (Cloud Run, Cloud SQL) and AWS (ECS, ECR) using Docker multi-stage builds.',
      'Participated in Agile ceremonies and conducted code reviews improving team velocity through knowledge sharing.',
    ],
    skills: ['FastAPI', 'PostgreSQL', 'Docker', 'GCP', 'AWS'],
    date: 'October 2023 — April 2025',
  },
]

const A = ({
  href,
  children,
}: {
  href: string
  children: ReactNode
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="font-medium text-[color:var(--color-accent)] underline underline-offset-2 decoration-[color:var(--color-accent)]/40 hover:decoration-[color:var(--color-accent)] transition-colors duration-150"
  >
    {children}
  </a>
)

const teaching: ExperienceEntry[] = [
  {
    title: 'Programming Instructor & Contest Judge',
    company: 'American International University-Bangladesh',
    bullets: [
      'Led specialized technical training programs in C, C++, Data Structures, and Algorithms, mentoring 100+ students.',
      'Coordinated training sessions, designed practice contests, and analyzed performance to foster competitive programming skills and critical thinking.',
      <>
        Volunteered as problem setter and judge for university programming
        contests including{' '}
        <A href="https://toph.co/c/intra-aiub-2024-senior">Intra AIUB 2024</A>{' '}
        and{' '}
        <A href="https://toph.co/c/cs-fest-aiub-senior-division">
          AIUB CS Fest
        </A>
        .
      </>,
      'Organized both online and offline programming contests for student development.',
    ],
    skills: [
      'Critical Thinking',
      'Problem Solving',
      'Competitive Programming',
    ],
    date: 'September 2022 — March 2024',
  },
  {
    title: 'Teaching Assistant',
    company: 'American International University-Bangladesh',
    bullets: [
      'Mentored undergraduates in Object Oriented Programming II (C#) by conducting lab sessions and tutorials, guiding them through core object-oriented concepts and software design principles, and assisting with debugging, programming assignments, and project development.',
      'Assisted the course instructor by preparing lab materials and programming exercises, supporting assignment design, evaluating programming assignments and exams, and providing feedback on code correctness, structure, and software design practices.',
    ],
    skills: ['C#', 'Object Oriented Programming', 'Lab Instruction', 'Mentorship'],
    date: 'May 2021 — August 2021',
  },
]

const mentoring: ExperienceEntry[] = [
  {
    title: 'Software Engineering Mentor',
    company: 'Cefalo Bangladesh Ltd.',
    bullets: [
      'Conducted training sessions, code reviews, and technical workshops on the software development lifecycle, mentoring junior engineers on software engineering practices, coding standards, and collaborative development workflows, culminating in trainee presentations.',
    ],
    skills: ['Mentorship', 'Code Review', 'SDLC', 'Technical Training'],
    date: '2024',
  },
]

export const experienceCategories: ExperienceCategory[] = [
  {
    key: 'professional',
    label: 'Professional',
    icon: IoBriefcaseOutline,
    entries: professional,
  },
  {
    key: 'teaching',
    label: 'Teaching',
    icon: IoEaselOutline,
    entries: teaching,
  },
  {
    key: 'mentoring',
    label: 'Mentoring & Volunteering',
    icon: IoPeopleOutline,
    entries: mentoring,
  },
]

/** Legacy export kept for any file still importing `experience` directly. */
export const experience = professional

// ---------- Resume sub-sections (dropdown) ----------

export type ResumeSectionKey = 'experience' | 'education' | 'skills'

export type ResumeSection = {
  key: ResumeSectionKey
  label: string
  icon: ComponentType<SVGProps<SVGSVGElement>>
}

export const RESUME_SECTIONS: ResumeSection[] = [
  { key: 'experience', label: 'Experience', icon: IoBriefcaseOutline },
  { key: 'education', label: 'Education', icon: IoSchoolOutline },
  { key: 'skills', label: 'Skills', icon: IoCodeSlashOutline },
]
