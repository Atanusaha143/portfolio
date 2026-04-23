import {
  academicHonors,
  competitiveProgramming,
  type AchievementEntry,
  type AchievementSectionKey,
} from '@/data/achievements'
import { Card } from '@/components/ui/card'

function SectionHeader({
  title,
  meta,
}: {
  title: string
  meta?: string
}) {
  return (
    <div className="mb-5 flex flex-wrap items-baseline justify-between gap-2 border-b border-[color:var(--color-border)] pb-3">
      <h2 className="section-heading text-2xl lg:text-3xl">
        {title}
      </h2>
      {meta && (
        <span className="font-mono text-[10.5px] font-medium uppercase tracking-[0.18em] text-zinc-500">
          {meta}
        </span>
      )}
    </div>
  )
}

function EmptySectionNotice({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-dashed border-[color:var(--color-border)] p-8 text-center text-sm text-zinc-500">
      {children}
    </div>
  )
}

function BadgePill({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-[color:var(--color-accent)]/30 bg-[color:var(--color-accent)]/10 px-2.5 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-[color:var(--color-accent)]">
      {label}
    </span>
  )
}

function FeaturedHonorCard({ entry }: { entry: AchievementEntry }) {
  const Icon = entry.icon
  return (
    <Card className="relative col-span-full overflow-hidden border-[color:var(--color-accent)]/30 bg-gradient-to-br from-[color-mix(in_oklab,var(--color-accent)_8%,transparent)] via-transparent to-transparent p-5 shadow-[0_0_48px_-10px_color-mix(in_oklab,var(--color-accent)_28%,transparent)] transition-all duration-300 ease-out hover:border-[color:var(--color-accent)]/50 hover:shadow-[0_0_56px_-8px_color-mix(in_oklab,var(--color-accent)_36%,transparent)] lg:p-7">
      {/* Decorative glow orb */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full bg-[color-mix(in_oklab,var(--color-accent)_12%,transparent)] blur-3xl"
      />
      <div className="relative flex flex-col gap-3">
        {/* Mobile: icon + badge on top row, title below. lg+: all on one row */}
        <div className="flex items-start justify-between gap-3 lg:items-center">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[color:var(--color-accent)]/30 bg-[color:var(--color-accent)]/10">
            <Icon
              aria-hidden="true"
              className="h-5 w-5 text-[color:var(--color-accent)]"
            />
          </div>
          <h3 className="hidden flex-1 text-xl font-extrabold leading-tight tracking-tight text-white lg:block lg:text-2xl">
            {entry.title}
          </h3>
          {entry.badge && (
            <div className="shrink-0">
              <BadgePill label={entry.badge} />
            </div>
          )}
        </div>
        <h3 className="text-xl font-extrabold leading-tight tracking-tight text-white lg:hidden">
          {entry.title}
        </h3>
        <span className="font-mono text-[12px] text-[color:var(--color-accent)]">
          {entry.date}
        </span>
        <p className="max-w-2xl text-[13.5px] leading-[1.7] text-zinc-300">
          {entry.description}
        </p>
      </div>
    </Card>
  )
}

function AchievementCard({ entry }: { entry: AchievementEntry }) {
  const Icon = entry.icon
  return (
    <Card className="relative flex h-full flex-col gap-3 overflow-hidden p-4 transition-all duration-300 ease-out hover:border-[color:var(--color-accent)]/40 hover:shadow-[0_0_32px_-6px_color-mix(in_oklab,var(--color-accent)_22%,transparent)] lg:p-5">
      <div className="flex items-start justify-between gap-2">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[color:var(--color-border)] bg-zinc-800/60">
          <Icon
            aria-hidden="true"
            className="h-4 w-4 text-[color:var(--color-accent)]"
          />
        </div>
        {entry.badge && <BadgePill label={entry.badge} />}
      </div>
      <div className="flex flex-col gap-1">
        <h4 className="text-[15px] font-bold leading-tight text-white lg:text-[15.5px]">
          {entry.title}
        </h4>
        <span className="font-mono text-[11.5px] text-[color:var(--color-accent)]">
          {entry.date}
        </span>
      </div>
      <p className="text-[13px] leading-[1.65] text-zinc-400">
        {entry.description}
      </p>
    </Card>
  )
}

function AcademicHonorSection() {
  const count = academicHonors.length
  const featured = academicHonors.find((e) => e.featured)
  const rest = academicHonors.filter((e) => !e.featured)

  return (
    <section>
      <SectionHeader
        title="Academic Honors"
        meta={`${count} ${count === 1 ? 'honor' : 'honors'}`}
      />
      {count === 0 ? (
        <EmptySectionNotice>Academic honors coming soon.</EmptySectionNotice>
      ) : (
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {featured && <FeaturedHonorCard entry={featured} />}
          {rest.map((entry, i) => (
            <AchievementCard key={i} entry={entry} />
          ))}
        </div>
      )}
    </section>
  )
}

function CompetitiveProgrammingSection() {
  const count = competitiveProgramming.length

  return (
    <section>
      <SectionHeader
        title="Competitive Programming"
        meta={`${count} ${count === 1 ? 'entry' : 'entries'}`}
      />
      {count === 0 ? (
        <EmptySectionNotice>
          Competitive programming achievements coming soon.
        </EmptySectionNotice>
      ) : (
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {competitiveProgramming.map((entry, i) => (
            <AchievementCard key={i} entry={entry} />
          ))}
        </div>
      )}
    </section>
  )
}

type AchievementsProps = {
  activeSection?: AchievementSectionKey
}

export default function Achievements({
  activeSection = 'academic-honor',
}: AchievementsProps) {
  return (
    <div>
      {activeSection === 'academic-honor' && <AcademicHonorSection />}
      {activeSection === 'competitive-programming' && (
        <CompetitiveProgrammingSection />
      )}
    </div>
  )
}
