import type { ComponentType, ReactNode, SVGProps } from 'react'
import { IoLocationOutline } from 'react-icons/io5'
import {
  experienceCategories,
  type ExperienceEntry,
  type ResumeSectionKey,
} from '@/data/resume'
import { education, type EducationEntry } from '@/data/education'
import { skills, type Proficiency, type SkillCategory } from '@/data/skills'
import { Card } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>

const SKILL_TAG_CLASSES =
  'inline-flex cursor-default items-center rounded-full border border-[color:var(--color-border)] bg-[color:var(--color-panel-2)] px-2.5 py-0.5 text-[11.5px] font-medium tracking-wide text-zinc-300 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-[color:var(--color-accent)]/40 hover:text-white hover:[background-image:linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0)_55%)] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.16),0_6px_16px_-6px_color-mix(in_oklab,var(--color-accent)_30%,transparent)] focus-visible:-translate-y-0.5 focus-visible:border-[color:var(--color-accent)]/40 focus-visible:text-white focus-visible:shadow-[inset_0_1px_0_rgba(255,255,255,0.16),0_6px_16px_-6px_color-mix(in_oklab,var(--color-accent)_30%,transparent)] focus-visible:outline-none'

// ---------- shared primitives ----------

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

function CategoryLabel({
  icon: Icon,
  label,
  count,
}: {
  icon: IconComponent
  label: string
  count: number
}) {
  return (
    <div className="mb-3 flex items-center gap-2.5">
      <Icon className="h-3.5 w-3.5 shrink-0 text-[color:var(--color-accent)]" />
      <h3 className="font-mono text-[10.5px] font-semibold uppercase tracking-[0.22em] text-[color:var(--color-accent)]">
        {label}
      </h3>
      <span className="text-[10.5px] font-medium text-zinc-500">
        ({count})
      </span>
    </div>
  )
}

function BulletList({ items }: { items: ReactNode[] }) {
  return (
    <ul className="space-y-1.5">
      {items.map((b, i) => (
        <li
          key={i}
          className="flex items-start gap-2 text-[13.5px] leading-[1.65] text-zinc-200"
        >
          <svg
            aria-hidden="true"
            width="5"
            height="5"
            viewBox="0 0 5 5"
            className="mt-[7px] shrink-0 text-[color:var(--color-accent)]"
            fill="currentColor"
          >
            <circle cx="2.5" cy="2.5" r="2.5" />
          </svg>
          <span>{b}</span>
        </li>
      ))}
    </ul>
  )
}

function TagList({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {items.map((t) => (
        <span key={t} tabIndex={0} className={SKILL_TAG_CLASSES}>
          {t}
        </span>
      ))}
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

// ---------- Experience ----------

function ExperienceEntryCard({ entry }: { entry: ExperienceEntry }) {
  return (
    <Card className="p-4 transition-all duration-300 ease-out hover:border-[color:var(--color-accent)]/40 hover:shadow-[0_0_32px_-6px_color-mix(in_oklab,var(--color-accent)_22%,transparent)] lg:p-5">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
        <div className="min-w-0">
          <h4 className="text-[15px] font-bold leading-tight text-white lg:text-[16px]">
            {entry.title}
          </h4>
          <p className="mt-1 text-[13.5px] leading-snug text-zinc-300">
            {entry.company}
            {entry.context && (
              <>
                <span className="hidden text-zinc-500 sm:inline"> · </span>
                <span className="block italic text-zinc-400 sm:inline">{entry.context}</span>
              </>
            )}
          </p>
        </div>
        <span className="shrink-0 font-mono text-[12px] text-[color:var(--color-accent)] sm:text-right">
          {entry.date}
        </span>
      </div>

      {entry.bullets.length > 0 && (
        <div className="mt-3.5">
          <BulletList items={entry.bullets} />
        </div>
      )}

      {entry.skills.length > 0 && (
        <div className="mt-3.5">
          <TagList items={entry.skills} />
        </div>
      )}
    </Card>
  )
}

function ExperienceSection() {
  const total = experienceCategories.reduce(
    (sum, c) => sum + c.entries.length,
    0,
  )
  const visible = experienceCategories.filter((c) => c.entries.length > 0)

  return (
    <section>
      <SectionHeader
        title="Experience"
        meta={`${total} ${total === 1 ? 'role' : 'roles'}`}
      />

      {visible.length === 0 ? (
        <EmptySectionNotice>
          No experience added yet.
        </EmptySectionNotice>
      ) : (
        <div className="flex flex-col gap-8">
          {visible.map((cat) => (
            <div key={cat.key}>
              <CategoryLabel
                icon={cat.icon}
                label={cat.label}
                count={cat.entries.length}
              />
              <div className="flex flex-col gap-3">
                {cat.entries.map((entry, i) => (
                  <ExperienceEntryCard key={i} entry={entry} />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}

// ---------- Education ----------

function EducationEntryCard({ entry }: { entry: EducationEntry }) {
  return (
    <Card className="p-4 transition-all duration-300 ease-out hover:border-[color:var(--color-accent)]/40 hover:shadow-[0_0_32px_-6px_color-mix(in_oklab,var(--color-accent)_22%,transparent)] lg:p-5">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
        <div className="min-w-0">
          <h4 className="text-[15px] font-bold leading-tight text-white lg:text-[16px]">
            {entry.institution}
          </h4>
          <p className="mt-1 text-[13.5px] leading-snug">
            <span className="font-semibold text-[color:var(--color-accent)]">
              {entry.degree}
            </span>
            {entry.major && (
              <>
                <span className="hidden text-zinc-500 sm:inline"> · </span>
                <span className="block text-zinc-400 sm:inline">Major: {entry.major}</span>
              </>
            )}
          </p>
          <p className="mt-1 inline-flex items-center gap-1 text-[12px] text-zinc-500">
            <IoLocationOutline className="h-3 w-3" />
            {entry.location}
          </p>
        </div>
        <span className="shrink-0 font-mono text-[12px] text-[color:var(--color-accent)] sm:text-right">
          {entry.startDate} — {entry.endDate}
        </span>
      </div>

      {entry.stats.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {entry.stats.map((stat) => {
            const StatIcon = stat.icon
            const isGold = stat.tone === 'gold'
            return (
              <div
                key={stat.label}
                className={cn(
                  'group inline-flex cursor-default items-center gap-1.5 rounded-full border bg-[color:var(--color-panel-2)]/50 px-2.5 py-1 text-[12px] font-medium',
                  'transition-all duration-300 ease-out will-change-transform',
                  isGold
                    ? 'border-amber-400/40 hover:-translate-y-0.5 hover:border-amber-300/55 hover:[background-image:linear-gradient(135deg,rgba(255,255,255,0.18)_0%,rgba(255,255,255,0.05)_45%,transparent_70%)] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.22),0_0_28px_-2px_rgba(251,191,36,0.42),0_10px_24px_-10px_rgba(0,0,0,0.5)]'
                    : 'border-[color:var(--color-accent)]/40 hover:-translate-y-0.5 hover:border-[color:var(--color-accent)]/50 hover:[background-image:linear-gradient(135deg,rgba(255,255,255,0.16)_0%,rgba(255,255,255,0.04)_45%,transparent_70%)] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_0_26px_-2px_color-mix(in_oklab,var(--color-accent)_38%,transparent),0_10px_24px_-10px_rgba(0,0,0,0.5)]',
                )}
              >
                <StatIcon
                  className={cn(
                    'h-3.5 w-3.5 shrink-0 transition-transform duration-300 ease-out group-hover:scale-110',
                    isGold
                      ? 'text-amber-400 group-hover:text-amber-300'
                      : 'text-[color:var(--color-accent)] group-hover:brightness-110',
                  )}
                />
                <span
                  className={cn(
                    'text-zinc-100 transition-[text-shadow] duration-300',
                    isGold
                      ? 'group-hover:[text-shadow:0_0_20px_rgba(251,191,36,0.35)]'
                      : 'group-hover:[text-shadow:0_0_16px_color-mix(in_oklab,var(--color-accent)_45%,transparent)]',
                  )}
                >
                  {stat.label}
                </span>
              </div>
            )
          })}
        </div>
      )}

      {entry.bullets.length > 0 && (
        <div className="mt-4">
          <BulletList items={entry.bullets} />
        </div>
      )}

      {entry.coursework.length > 0 && (
        <>
          <Separator className="my-5" />
          <div>
            <p className="mb-2.5 font-mono text-[10.5px] font-semibold uppercase tracking-[0.22em] text-[color:var(--color-accent)]">
              Relevant Coursework
            </p>
            <TagList items={entry.coursework} />
          </div>
        </>
      )}
    </Card>
  )
}

function EducationSection() {
  const count = education.length

  return (
    <section>
      <SectionHeader
        title="Education"
        meta={`${count} ${count === 1 ? 'institution' : 'institutions'}`}
      />
      {count === 0 ? (
        <EmptySectionNotice>
          Education entries coming soon.
        </EmptySectionNotice>
      ) : (
        <div className="flex flex-col gap-3">
          {education.map((entry, i) => (
            <EducationEntryCard key={i} entry={entry} />
          ))}
        </div>
      )}
    </section>
  )
}

// ---------- Skills ----------

const FEATURED_SKILL_KEYS = new Set(['languages', 'llms'])

const PROFICIENCY_META: Record<
  Proficiency,
  { label: string; labelColor: string }
> = {
  core: {
    label: 'Core expertise',
    labelColor: 'text-[color:var(--color-accent)]',
  },
  moderate: {
    label: 'Moderate expertise',
    labelColor: 'text-zinc-400',
  },
  'semi-moderate': {
    label: 'Semi-moderate expertise',
    labelColor: 'text-zinc-500',
  },
}

function SkillCategoryCard({ category }: { category: SkillCategory }) {
  const Icon = category.icon
  const featured = FEATURED_SKILL_KEYS.has(category.key)
  const { label: profLabel, labelColor } = PROFICIENCY_META[category.proficiency]

  return (
    <Card
      className={cn(
        'group flex flex-col gap-4 p-4 transition-all duration-300 ease-out lg:p-5',
        'hover:border-[color:var(--color-accent)]/40 hover:shadow-[0_0_32px_-6px_color-mix(in_oklab,var(--color-accent)_22%,transparent)]',
        featured && 'sm:col-span-2',
      )}
      style={
        featured
          ? {
              backgroundImage:
                'linear-gradient(135deg, color-mix(in_oklab, var(--color-accent) 6%, transparent) 0%, transparent 55%)',
            }
          : undefined
      }
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div
            className={cn(
              'flex shrink-0 items-center justify-center rounded-[0.8rem] border text-[color:var(--color-accent)]',
              'transition-all duration-300 ease-out',
              'group-hover:border-[color:var(--color-accent)]/45 group-hover:shadow-[0_0_18px_-4px_color-mix(in_oklab,var(--color-accent)_45%,transparent)]',
              featured ? 'h-11 w-11 border-[color:var(--color-accent)]/25' : 'h-9 w-9 border-white/[0.07]',
            )}
            style={{
              backgroundImage: featured
                ? 'linear-gradient(135deg, color-mix(in_oklab, var(--color-accent) 18%, transparent) 0%, transparent 65%)'
                : 'linear-gradient(180deg, rgba(255,255,255,0.05), transparent 60%)',
              backgroundColor: 'var(--color-panel-2)',
            }}
          >
            <Icon
              className={featured ? 'h-5 w-5' : 'h-4 w-4'}
              strokeWidth={1.6}
            />
          </div>
          <div>
            <h4
              className={cn(
                'font-bold leading-tight text-white',
                featured ? 'text-[15px]' : 'text-[13.5px]',
              )}
            >
              {category.label}
            </h4>
            <p className={cn('mt-0.5 text-[11px] font-medium', labelColor)}>
              {profLabel}
            </p>
          </div>
        </div>

        <span className="rounded-full border border-[color:var(--color-border)] bg-[color:var(--color-panel-2)] px-2 py-0.5 font-mono text-[10px] font-medium text-zinc-500 transition-colors duration-200 group-hover:border-[color:var(--color-accent)]/30 group-hover:text-zinc-400">
          {category.items.length}
        </span>
      </div>

      <TagList items={category.items} />
    </Card>
  )
}

function SkillsSection() {
  const totalSkills = skills.reduce((sum, cat) => sum + cat.items.length, 0)

  return (
    <section>
      <SectionHeader
        title="Technical Skills"
        meta={`${skills.length} categories · ${totalSkills} tools`}
      />

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {skills.map((category) => (
          <SkillCategoryCard key={category.key} category={category} />
        ))}
      </div>
    </section>
  )
}

// ---------- page ----------

type ResumeProps = {
  activeSection?: ResumeSectionKey
}

export default function Resume({ activeSection = 'experience' }: ResumeProps) {
  return (
    <div>
      {activeSection === 'experience' && <ExperienceSection />}
      {activeSection === 'education' && <EducationSection />}
      {activeSection === 'skills' && <SkillsSection />}
    </div>
  )
}
