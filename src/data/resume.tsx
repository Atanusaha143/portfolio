import type { ComponentType, SVGProps } from 'react'
import type { ReactNode } from 'react'
import {
  IoBriefcaseOutline,
  IoCodeSlashOutline,
  IoEaselOutline,
  IoPeopleOutline,
  IoRibbonOutline,
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
      'Played a key role in agentic development: made 2 large async FastAPI codebases AI-navigable through task-specific skills, specialized subagents, and codified, enforced conventions.',
      'Implemented backend payment APIs integrating Stripe and Adyen: payment and refund workflows, HMAC-validated webhook processing, and split payments via Adyen for Platforms.',
      'Rebuilt a background service from a separate cron-scheduler process into one FastAPI app running FastStream (NATS) consumers and APScheduler jobs on a single event loop. After a month in production: no stuck messages, ~38% lower peak memory, ~20% lower peak CPU.',
      'Turned a production performance incident (missing indexes) into version-controlled schema: SQLAlchemy models plus idempotent Alembic migrations, rolled out zero-downtime across 2 services. Followed up with N+1 query reduction, load-test baselines, and a performance review process.',
      'Established pytest suites from scratch across services: 2000+ tests with branch coverage, gated in CI on every pull request.',
      'Migrated 2 production services from requirements.txt to Poetry, with committed lock files, lock-consistency checks in CI, and grouped monthly Dependabot updates.',
    ],
    skills: [
      'FastAPI',
      'FastStream',
      'NATS',
      'Stripe',
      'Adyen',
      'Alembic',
      'Claude Code',
    ],
    date: 'January 2026 - Present',
  },
  {
    title: 'Associate Software Engineer (L2)',
    company: 'Cefalo Bangladesh Ltd.',
    context: <>Backend Consultant for <TicketCo /></>,
    bullets: [
      'Architected event-driven microservices (FastAPI / FastStream / NATS) across 3 services using async/await patterns.',
      'Reduced NATS publish-time spikes from 0.13–254s to 30–40ms through connection pooling and client configuration tuning, eliminating multi-second latency spikes in the booking flow.',
      'Refactored the refund API to asynchronous processing with error handling and retries, cutting p95 response time by ~72% (~2.5s → ~700ms).',
      'Co-built the post-payment operations service entirely on NATS, including precise-timestamp payment-link expiry with automated post-expiration workflows (no cron jobs or polling).',
      'Owned production operability: incident triage, runbooks, and postmortems; structured logging, correlation IDs, and health indicators; timeouts, retries, and circuit breakers.',
    ],
    skills: ['FastStream', 'NATS', 'Microservices', 'Python', 'Observability'],
    date: 'May 2025 - December 2025',
  },
  {
    title: 'Associate Software Engineer (L1)',
    company: 'Cefalo Bangladesh Ltd.',
    context: <>Backend Consultant for <TicketCo /></>,
    bullets: [
      'Joined the Checkout project at inception (Jun 2024) to build a ticketing-as-a-service checkout from the ground up against a strict customer deadline. Developed RESTful APIs with FastAPI, Python 3.12, SQLAlchemy, and PostgreSQL, now sustaining ~87K requests/day at ~62ms average response time.',
      'Achieved ~85%+ test coverage with PyTest and Cucumber BDD (unit and integration), enforced via GitHub Actions CI coverage gates.',
      'Deployed containerized applications on GCP (Cloud Run, Cloud SQL) and AWS (ECS, ECR) with Docker multi-stage builds.',
      'Collaborated with cross-functional teams to resolve production issues; contributed to Agile/Scrum ceremonies (backlog refinement, sprint planning, code reviews).',
    ],
    skills: ['FastAPI', 'PostgreSQL', 'PyTest', 'Docker', 'GCP', 'AWS'],
    date: 'October 2023 - April 2025',
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
    title: 'Co-facilitator & Content Author',
    company: 'Cefalo Bangladesh Ltd.',
    context: 'AI Enablement: Claude Certified Architect (CCAR-F) Workshop Series',
    bullets: [
      'Authored the presentation, slide decks, and resources for Tool Design & MCP Integration: hub-and-spoke orchestration, role-scoped tool partitioning, scoped cross-role tools, hub-scope privilege risks, and tool_choice API semantics.',
      "Contributed to reusable exam-prep tooling: a quiz skill built on Claude Code's skill system, a self-graded HTML drill app, and a Claude Project that generates original mock papers at official domain weights.",
      'Facilitated a knowledge-sharing session on Daily Agentic Development with Claude Code, covering best practices for skills, rules, subagents, hooks, MCPs, and CLAUDE.md; the series has reached 30+ engineers.',
    ],
    skills: ['Claude Code', 'Claude Agent SDK', 'Claude API', 'MCP'],
    date: 'August 2026 - Present',
  },
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
    date: 'September 2022 - March 2024',
  },
  {
    title: 'Teaching Assistant',
    company: 'American International University-Bangladesh',
    bullets: [
      'Mentored undergraduates in Object Oriented Programming II (C#) by conducting lab sessions and tutorials, guiding them through core object-oriented concepts and software design principles, and assisting with debugging, programming assignments, and project development.',
      'Assisted the course instructor by preparing lab materials and programming exercises, supporting assignment design, evaluating programming assignments and exams, and providing feedback on code correctness, structure, and software design practices.',
    ],
    skills: ['C#', 'Object Oriented Programming', 'Lab Instruction', 'Mentorship'],
    date: 'May 2021 - August 2021',
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

export type ResumeSectionKey =
  | 'experience'
  | 'education'
  | 'certifications'
  | 'skills'

export type ResumeSection = {
  key: ResumeSectionKey
  label: string
  icon: ComponentType<SVGProps<SVGSVGElement>>
}

export const RESUME_SECTIONS: ResumeSection[] = [
  { key: 'experience', label: 'Experience', icon: IoBriefcaseOutline },
  { key: 'education', label: 'Education', icon: IoSchoolOutline },
  { key: 'certifications', label: 'Certifications', icon: IoRibbonOutline },
  { key: 'skills', label: 'Skills', icon: IoCodeSlashOutline },
]
