import { profile } from '@/data/profile'
import { Card } from '@/components/ui/card'
import {
  IoBriefcaseOutline,
  IoRocketOutline,
  IoTrophyOutline,
  IoLibraryOutline,
  IoCloudOutline,
  IoCodeSlashOutline,
  IoGlobeOutline,
  IoTerminalOutline,
} from 'react-icons/io5'


// ── Bio keyword highlights ────────────────────────────────────────────────────

const HIGHLIGHT_TERMS = [
  'event-driven architecture',
  'cloud infrastructure',
  'RAG pipelines',
  'LLM-powered systems',
  'FastAPI',
  'FastStream',
  'NATS',
  'GCP',
  'AWS',
  'GenAI',
  'RAG',
  'LLM',
  'ICPC',
  'Python',
  'Google Scholar',
  'ResearchGate',
  'microservices',
]

const HIGHLIGHT_PATTERN = new RegExp(
  `(${HIGHLIGHT_TERMS.sort((a, b) => b.length - a.length)
    .map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
    .join('|')})`,
  'g',
)

function HighlightBio({ text }: { text: string }) {
  const parts = text.split(HIGHLIGHT_PATTERN)
  return (
    <p>
      {parts.map((part, i) =>
        HIGHLIGHT_TERMS.includes(part) ? (
          <span
            key={i}
            className="font-semibold text-[color:var(--color-accent)]"
          >
            {part}
          </span>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </p>
  )
}

// ── Focus chips ───────────────────────────────────────────────────────────────

const focusAreas = [
  { icon: IoCodeSlashOutline, label: 'Backend Engineering' },
  { icon: IoCloudOutline, label: 'Cloud Infra' },
  { icon: IoGlobeOutline, label: 'Distributed Systems' },
  { icon: IoTerminalOutline, label: 'GenAI' },
  { icon: IoTrophyOutline, label: 'Problem Solving' },
]

// ── Stat cards ────────────────────────────────────────────────────────────────

const stats = [
  { value: '2.5+', label: 'Years of\nExperience', icon: IoBriefcaseOutline },
  { value: '5+', label: 'Projects\nShipped', icon: IoRocketOutline },
  { value: '10+', label: 'Awards &\nHonors', icon: IoTrophyOutline },
  { value: '1', label: 'ACM\nPublication', icon: IoLibraryOutline },
]

// ── Component ─────────────────────────────────────────────────────────────────

export default function About() {
  return (
    <section className="flex flex-col gap-6">
      <header>
        <h2 className="section-heading text-2xl lg:text-3xl">
          Digital Identity
        </h2>
        <span className="mt-3 inline-block h-1 w-[70px] rounded-full bg-[color:var(--color-accent)]" />
      </header>

      {/* Bio */}
      <div className="space-y-4 text-center text-[15px] leading-[1.75] text-zinc-200">
        {profile.bio.map((paragraph, i) => (
          <HighlightBio key={i} text={paragraph} />
        ))}
      </div>

      {/* Focus chips */}
      <div className="hidden flex-wrap justify-center gap-2 sm:flex">
        {focusAreas.map(({ icon: Icon, label }) => (
          <span
            key={label}
            className="inline-flex items-center gap-1.5 rounded-full border border-[color:var(--color-border)] bg-[color:var(--color-panel-2)] px-3 py-1.5 text-[12px] font-medium text-zinc-300 transition-all duration-300 ease-out hover:border-[color:var(--color-accent)]/40 hover:bg-[color-mix(in_oklab,var(--color-accent)_8%,transparent)] hover:text-white hover:shadow-[0_0_16px_-4px_color-mix(in_oklab,var(--color-accent)_40%,transparent)]"
          >
            <Icon className="h-3.5 w-3.5 text-[color:var(--color-accent)]" />
            {label}
          </span>
        ))}
      </div>

      {/* Divider */}
      <div className="border-t border-[color:var(--color-border)]" />

      {/* Stats */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {stats.map(({ value, label, icon: Icon }) => (
          <Card
            key={label}
            className="flex flex-col items-center justify-center gap-2 overflow-hidden px-3 py-5 text-center transition-all duration-300 ease-out hover:border-[color:var(--color-accent)]/40 hover:shadow-[0_0_32px_-6px_color-mix(in_oklab,var(--color-accent)_22%,transparent)]"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-[color:var(--color-border)] bg-zinc-800/60">
              <Icon className="h-4 w-4 text-[color:var(--color-accent)]" />
            </div>
            <span className="bg-gradient-to-br from-[color:var(--color-accent)] to-[#2193b0] bg-clip-text text-3xl font-extrabold tracking-tight text-transparent">
              {value}
            </span>
            <span className="whitespace-pre-line text-[11px] font-semibold uppercase leading-snug tracking-widest text-zinc-400">
              {label}
            </span>
          </Card>
        ))}
      </div>
    </section>
  )
}
