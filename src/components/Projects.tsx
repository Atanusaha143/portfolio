import { useState } from 'react'
import {
  IoInformationCircleOutline,
  IoBriefcaseOutline,
  IoArrowBackOutline,
  IoLogoGithub,
  IoGlobeOutline,
  IoFolderOpenOutline,
} from 'react-icons/io5'
import { projects, type Project } from '@/data/projects'

function SectionHeader({ count }: { count: number }) {
  return (
    <div className="mb-6 flex flex-wrap items-baseline justify-between gap-2 border-b border-[color:var(--color-border)] pb-3">
      <h2 className="text-2xl font-extrabold tracking-tight text-white lg:text-3xl">
        Projects
      </h2>
      <span className="font-mono text-[10.5px] font-medium uppercase tracking-[0.18em] text-zinc-500">
        {count} {count === 1 ? 'project' : 'projects'}
      </span>
    </div>
  )
}

function TechBadge({ label }: { label: string }) {
  return (
    <span className="inline-flex cursor-default items-center rounded-full border border-[color:var(--color-border)] bg-[color:var(--color-panel-2)] px-2.5 py-0.5 text-[11.5px] font-medium tracking-wide text-zinc-300 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-[color:var(--color-accent)]/40 hover:text-white hover:[background-image:linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0)_55%)] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.16),0_6px_16px_-6px_color-mix(in_oklab,var(--color-accent)_30%,transparent)]">
      {label}
    </span>
  )
}

const cardPanelBase =
  'rounded-[1.25rem] border p-5 shadow-[0_4px_32px_rgba(0,0,0,0.55),inset_0_1px_0_rgba(255,255,255,0.04)]'

function ContributionList({ contributions }: { contributions: Project['contributions'] }) {
  return (
    <>
      {contributions.map((c, i) => {
        const Icon = c.icon
        return (
          <div key={i} className="flex gap-3">
            <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[color:var(--color-accent)]/15">
              <Icon className="h-3.5 w-3.5 text-[color:var(--color-accent)]" aria-hidden="true" />
            </div>
            <div>
              <p className="text-[13px] font-bold leading-snug text-white">{c.title}</p>
              <p className="mt-0.5 text-[12px] leading-[1.65] text-zinc-400">{c.description}</p>
            </div>
          </div>
        )
      })}
    </>
  )
}

function ProjectCard({ project }: { project: Project }) {
  const [flipped, setFlipped] = useState(false)

  return (
    <div className="h-full" style={{ perspective: '1200px' }}>
      {/*
        position:relative lets the back face use absolute inset-0.
        transform-style:preserve-3d on this element is safe alongside position:relative.
      */}
      <div
        className="h-full"
        style={{
          position: 'relative',
          transformStyle: 'preserve-3d',
          transition: 'transform 0.55s cubic-bezier(0.4, 0.2, 0.2, 1)',
          transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        {/* ── Front face — fills grid cell height ── */}
        <div
          className={`flex h-full min-h-[280px] flex-col ${cardPanelBase} border-[color:var(--color-border)] transition-[border-color,box-shadow] duration-300 hover:border-[color:var(--color-accent)]/40 hover:shadow-[0_0_32px_-6px_color-mix(in_oklab,var(--color-accent)_22%,transparent)]`}
          style={{
            backfaceVisibility: 'hidden',
            backgroundImage: 'linear-gradient(180deg, rgba(255,255,255,0.028), transparent 45%)',
            backgroundColor: 'var(--color-panel)',
          }}
        >
          <h3 className="mb-3 text-xl font-extrabold tracking-tight text-[color:var(--color-accent)]">
            {project.title}
          </h3>
          <p className="flex-1 text-[13px] leading-[1.75] text-zinc-300">{project.description}</p>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <TechBadge key={t} label={t} />
            ))}
          </div>
          <div className="mt-4 flex items-center justify-between">
            {project.link ? (
              <a
                href={project.link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[color:var(--color-accent)] transition-opacity duration-150 hover:opacity-80 hover:underline"
              >
                {project.link.type === 'github' ? (
                  <IoLogoGithub className="h-4 w-4" aria-hidden="true" />
                ) : project.link.type === 'drive_folder' ? (
                  <IoFolderOpenOutline className="h-4 w-4" aria-hidden="true" />
                ) : (
                  <IoGlobeOutline className="h-4 w-4" aria-hidden="true" />
                )}
                {project.link.label}
              </a>
            ) : (
              <span />
            )}
            <button
              onClick={() => setFlipped(true)}
              aria-label={`Show my work on ${project.title}`}
              className="flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full border border-[color:var(--color-accent)]/30 bg-[color:var(--color-accent)]/10 text-[color:var(--color-accent)] shadow-[0_0_14px_color-mix(in_oklab,var(--color-accent)_18%,transparent)] transition-all duration-200 hover:scale-110 hover:border-[color:var(--color-accent)]/60 hover:bg-[color:var(--color-accent)]/20 hover:shadow-[0_0_20px_color-mix(in_oklab,var(--color-accent)_30%,transparent)] active:scale-95"
            >
              <IoInformationCircleOutline className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* ── Back face — fills the front face height; scrolls if content overflows ── */}
        <div
          className={`absolute inset-0 flex flex-col overflow-hidden ${cardPanelBase} border-[color:var(--color-accent)]/30`}
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            backgroundImage:
              'linear-gradient(135deg, color-mix(in oklab, var(--color-accent) 7%, transparent), transparent 60%)',
            backgroundColor: 'var(--color-panel)',
          }}
        >
          <div className="mb-4 flex shrink-0 items-center gap-2.5">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-[color:var(--color-accent)]/30 bg-[color:var(--color-accent)]/10">
              <IoBriefcaseOutline className="h-4 w-4 text-[color:var(--color-accent)]" aria-hidden="true" />
            </div>
            <h4 className="text-[15px] font-extrabold tracking-tight text-[color:var(--color-accent)]">
              My Work
            </h4>
          </div>
          <div className="flex min-h-0 flex-1 flex-col gap-4 overflow-y-auto pr-1">
            <ContributionList contributions={project.contributions} />
          </div>
          <div className="mt-4 flex shrink-0 justify-end">
            <button
              onClick={() => setFlipped(false)}
              aria-label="Back to project overview"
              className="flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full border border-[color:var(--color-accent)]/30 bg-[color:var(--color-accent)]/10 text-[color:var(--color-accent)] shadow-[0_0_14px_color-mix(in_oklab,var(--color-accent)_18%,transparent)] transition-all duration-200 hover:scale-110 hover:border-[color:var(--color-accent)]/60 hover:bg-[color:var(--color-accent)]/20 hover:shadow-[0_0_20px_color-mix(in_oklab,var(--color-accent)_30%,transparent)] active:scale-95"
            >
              <IoArrowBackOutline className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <div>
      <SectionHeader count={projects.length} />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}
