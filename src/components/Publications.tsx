import { publications, type Publication } from '@/data/publications'
import { Card } from '@/components/ui/card'
import { IoBookOutline, IoOpenOutline } from 'react-icons/io5'

function SectionHeader({
  title,
  meta,
}: {
  title: string
  meta?: string
}) {
  return (
    <div className="mb-5 flex flex-wrap items-baseline justify-between gap-2 border-b border-[color:var(--color-border)] pb-3">
      <h2 className="text-2xl font-extrabold tracking-tight text-white lg:text-3xl">
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

const TAG_CLASSES =
  'inline-flex cursor-default items-center rounded-full border border-[color:var(--color-border)] bg-[color:var(--color-panel-2)] px-2.5 py-0.5 text-[11.5px] font-medium tracking-wide text-zinc-300 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-[color:var(--color-accent)]/40 hover:text-white hover:[background-image:linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0)_55%)] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.16),0_6px_16px_-6px_color-mix(in_oklab,var(--color-accent)_30%,transparent)] focus-visible:-translate-y-0.5 focus-visible:border-[color:var(--color-accent)]/40 focus-visible:text-white focus-visible:shadow-[inset_0_1px_0_rgba(255,255,255,0.16),0_6px_16px_-6px_color-mix(in_oklab,var(--color-accent)_30%,transparent)] focus-visible:outline-none'

function TagPill({ label }: { label: string }) {
  return (
    <span tabIndex={0} className={TAG_CLASSES}>
      {label}
    </span>
  )
}

function PublicationCard({ pub }: { pub: Publication }) {
  return (
    <Card className="relative overflow-hidden p-4 transition-all duration-300 ease-out hover:border-[color:var(--color-accent)]/45 hover:bg-gradient-to-br hover:from-[color-mix(in_oklab,var(--color-accent)_6%,transparent)] hover:via-transparent hover:to-transparent hover:shadow-[0_0_52px_-8px_color-mix(in_oklab,var(--color-accent)_30%,transparent)] sm:p-5 lg:p-7">

      <div className="relative flex flex-col gap-3 sm:gap-4">
        {/* Header row */}
        <div className="flex items-start gap-3 sm:gap-4">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[color:var(--color-accent)]/30 bg-[color:var(--color-accent)]/10 sm:h-11 sm:w-11">
            <IoBookOutline
              aria-hidden="true"
              className="h-4 w-4 text-[color:var(--color-accent)] sm:h-5 sm:w-5"
            />
          </div>
          <div className="flex min-w-0 flex-col gap-1">
            <h3 className="text-[15px] font-extrabold leading-tight tracking-tight text-white sm:text-[17px] lg:text-[19px]">
              {pub.title}
            </h3>
            <span className="text-[12.5px] font-semibold text-[color:var(--color-accent)] sm:text-[13px]">
              {pub.conference}
            </span>
            <div className="flex flex-wrap items-center gap-x-1.5 gap-y-0.5 font-mono text-[10.5px] text-zinc-500 sm:text-[11.5px]">
              <span>{pub.venue}</span>
              <span aria-hidden="true">&middot;</span>
              <span>{pub.date}</span>
            </div>
          </div>
        </div>

        {/* Highlights */}
        <ul className="flex flex-col gap-2 pl-0.5 sm:gap-2.5 sm:pl-1">
          {pub.highlights.map((point, i) => (
            <li key={i} className="flex items-start gap-2.5 sm:gap-3">
              <span
                aria-hidden="true"
                className="mt-[5px] h-0 w-0 shrink-0 border-y-[4px] border-l-[7px] border-y-transparent border-l-[color:var(--color-accent)]/70"
              />
              <span className="text-[13px] leading-[1.65] text-zinc-300 sm:text-[13.5px] sm:leading-[1.7]">
                {point}
              </span>
            </li>
          ))}
        </ul>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {pub.tags.map((tag) => (
            <TagPill key={tag} label={tag} />
          ))}
        </div>

        {/* Link */}
        <a
          href={pub.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-fit items-center gap-1.5 text-[13px] font-semibold text-[color:var(--color-accent)] transition-opacity duration-200 hover:opacity-70 sm:text-[13.5px]"
        >
          <IoOpenOutline className="h-4 w-4 shrink-0" aria-hidden="true" />
          <span className="sm:hidden">View Paper</span>
          <span className="hidden sm:inline">View on ACM Digital Library</span>
        </a>
      </div>
    </Card>
  )
}

export default function Publications() {
  const count = publications.length

  return (
    <div>
      <SectionHeader
        title="Publications"
        meta={`${count} ${count === 1 ? 'publication' : 'publications'}`}
      />
      <div className="flex flex-col gap-4">
        {publications.map((pub, i) => (
          <PublicationCard key={i} pub={pub} />
        ))}
      </div>
    </div>
  )
}
