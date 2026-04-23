import { useEffect, useRef, useState } from 'react'
import type { ComponentType, SVGProps } from 'react'
import { IoChevronDownOutline } from 'react-icons/io5'
import { TabsList, TabsTrigger } from '@/components/ui/tabs'
import { NAV_ITEMS, type NavSection } from '@/data/profile'
import {
  RESUME_SECTIONS,
  type ResumeSectionKey,
} from '@/data/resume'
import {
  ACHIEVEMENT_SECTIONS,
  type AchievementSectionKey,
} from '@/data/achievements'
import { cn } from '@/lib/utils'

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>

type NavProps = {
  currentSection: NavSection
  onResumeSubChange: (sub: ResumeSectionKey) => void
  onAchievementSubChange: (sub: AchievementSectionKey) => void
}

const TRIGGER_CLASSES =
  'group relative flex flex-1 cursor-pointer flex-col items-center justify-center gap-1 rounded-none px-1 py-1.5 text-[10px] font-medium text-zinc-400 transition-all duration-200 ease-out hover:bg-white/5 hover:text-zinc-100 focus-visible:ring-2 focus-visible:ring-[color:var(--color-accent)]/50 focus-visible:ring-offset-0 data-[state=active]:text-[color:var(--color-accent)] data-[state=active]:[filter:drop-shadow(0_0_8px_color-mix(in_oklab,var(--color-accent)_70%,transparent))] lg:flex-initial lg:flex-row lg:gap-1.5 lg:rounded-full lg:px-2.5 lg:py-1.5 lg:text-[12px] xl:px-3 xl:text-[13px]'

type DropdownItem<K extends string> = {
  key: K
  label: string
  icon: IconComponent
}

function NavDropdownTrigger<K extends string>({
  icon: Icon,
  label,
  ariaLabel,
  isActive,
  items,
  onSelect,
}: {
  icon: IconComponent
  label: string
  ariaLabel: string
  isActive: boolean
  items: ReadonlyArray<DropdownItem<K>>
  onSelect: (sub: K) => void
}) {
  const [open, setOpen] = useState(false)
  const wrapperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const handler = (e: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target as Node)
      ) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [open])

  useEffect(() => {
    if (!open) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [open])

  useEffect(() => {
    if (!isActive) setOpen(false)
  }, [isActive])

  return (
    <div ref={wrapperRef} className="relative flex flex-1 lg:flex-initial lg:rounded-full">
      <button
        type="button"
        data-state={isActive ? 'active' : 'inactive'}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label={ariaLabel}
        onClick={() => setOpen((v) => !v)}
        className={cn(TRIGGER_CLASSES, 'w-full')}
      >
        <Icon className="h-[18px] w-[18px] shrink-0 lg:h-[14px] lg:w-[14px]" />
        <span className="inline-flex items-center gap-1 leading-none">
          {label}
          <IoChevronDownOutline
            className={cn(
              'hidden h-3 w-3 transition-transform duration-200 lg:inline-block',
              open && 'rotate-180',
            )}
            aria-hidden="true"
          />
        </span>
      </button>

      {open && (
        <div
          role="menu"
          aria-label={`${ariaLabel} sections`}
          className={cn(
            'absolute z-50 left-1/2 -translate-x-1/2 bottom-full mb-2 flex min-w-[180px] flex-col gap-0.5 rounded-2xl border border-white/10 p-1.5 shadow-[0_20px_40px_-12px_rgba(0,0,0,0.7)] backdrop-blur-md',
            'lg:bottom-auto lg:top-full lg:mb-0 lg:mt-2',
          )}
          style={{
            backgroundImage:
              'linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0) 60%)',
            backgroundColor:
              'color-mix(in oklab, var(--color-panel) 92%, transparent)',
          }}
        >
          {items.map(({ key, label: itemLabel, icon: SubIcon }) => (
            <button
              key={key}
              type="button"
              role="menuitem"
              onClick={() => {
                onSelect(key)
                setOpen(false)
              }}
              className="flex cursor-pointer items-center gap-2.5 whitespace-nowrap rounded-lg px-3 py-2 text-[13px] font-medium text-zinc-200 transition-colors hover:bg-[color:var(--color-accent)]/10 hover:text-[color:var(--color-accent)] focus-visible:bg-[color:var(--color-accent)]/10 focus-visible:text-[color:var(--color-accent)] focus-visible:outline-none"
            >
              <SubIcon className="h-4 w-4 shrink-0 text-[color:var(--color-accent)]" />
              <span>{itemLabel}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default function Nav({
  currentSection,
  onResumeSubChange,
  onAchievementSubChange,
}: NavProps) {
  return (
    <TabsList
      aria-label="Primary"
      className="
        flex w-full items-stretch justify-around gap-0
        rounded-tl-2xl rounded-tr-2xl rounded-bl-none rounded-br-none
        border-t border-white/10
        px-0 pt-1.5 pb-[max(0.5rem,env(safe-area-inset-bottom))]
        shadow-[0_-10px_28px_-14px_rgba(0,0,0,0.55),inset_0_1px_0_rgba(255,255,255,0.04)]
        backdrop-blur-xl

        lg:inline-flex lg:w-auto lg:items-center lg:justify-start lg:gap-1
        lg:rounded-tl-none lg:rounded-tr-[1.25rem] lg:rounded-bl-[1.25rem] lg:rounded-br-none
        lg:border-t-0 lg:border-r-0 lg:border-b lg:border-l lg:border-white/10
        lg:px-2.5 lg:py-2 lg:pb-2
        lg:shadow-[0_12px_28px_-14px_rgba(0,0,0,0.55),inset_0_1px_0_rgba(255,255,255,0.04)]
      "
      style={{
        backgroundImage:
          'linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0) 60%)',
        backgroundColor:
          'color-mix(in oklab, var(--color-panel) 82%, transparent)',
      }}
    >
      {NAV_ITEMS.map(({ name, icon: Icon }) => {
        if (name === 'Resume') {
          return (
            <NavDropdownTrigger
              key={name}
              icon={Icon}
              label="Resume"
              ariaLabel="Resume"
              isActive={currentSection === 'Resume'}
              items={RESUME_SECTIONS}
              onSelect={onResumeSubChange}
            />
          )
        }

        if (name === 'Achievements') {
          return (
            <NavDropdownTrigger
              key={name}
              icon={Icon}
              label="Achievements"
              ariaLabel="Achievements"
              isActive={currentSection === 'Achievements'}
              items={ACHIEVEMENT_SECTIONS}
              onSelect={onAchievementSubChange}
            />
          )
        }

        return (
          <TabsTrigger
            key={name}
            value={name}
            aria-label={name}
            className={TRIGGER_CLASSES}
          >
            <Icon
              className="h-[18px] w-[18px] shrink-0 lg:h-[14px] lg:w-[14px]"
              aria-hidden="true"
            />
            <span className="leading-none">{name}</span>
          </TabsTrigger>
        )
      })}
    </TabsList>
  )
}
