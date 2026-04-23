import { useState } from 'react'
import type { ComponentType, SVGProps } from 'react'
import {
  IoBriefcaseOutline,
  IoChevronDownOutline,
  IoLocationOutline,
  IoMailOutline,
  IoSchoolOutline,
} from 'react-icons/io5'
import { profile } from '@/data/profile'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>

type InfoRowProps = {
  icon: IconComponent
  label: string
  value: string
  href?: string
}

function InfoRow({ icon: Icon, label, value, href }: InfoRowProps) {
  const valueClass = 'block text-[13px] leading-snug text-zinc-200'
  const valueStyle = {
    overflowWrap: 'anywhere' as const,
    wordBreak: 'break-word' as const,
  }

  const content = href ? (
    <a
      href={href}
      target={href.startsWith('mailto:') ? undefined : '_blank'}
      rel="noreferrer"
      style={valueStyle}
      className={`${valueClass} transition-colors hover:text-[color:var(--color-accent)]`}
    >
      {value}
    </a>
  ) : (
    <div style={valueStyle} className={valueClass}>
      {value}
    </div>
  )

  return (
    <div className="flex items-center gap-3.5">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[0.9rem] border border-[color:var(--color-border)] bg-[color:var(--color-panel-2)] text-[color:var(--color-accent)]">
        <Icon width={16} height={16} />
      </div>
      <div className="min-w-0 flex-1">
        <div className="text-[10px] font-semibold tracking-[0.2em] text-zinc-400">
          {label}
        </div>
        {content}
      </div>
    </div>
  )
}

function InfoList() {
  return (
    <div className="flex flex-col gap-3.5">
      <InfoRow
        icon={IoLocationOutline}
        label="LOCATION"
        value={profile.location}
      />
      <InfoRow
        icon={IoBriefcaseOutline}
        label="COMPANY"
        value={profile.company.name}
        href={profile.company.href}
      />
      <InfoRow
        icon={IoSchoolOutline}
        label="UNIVERSITY"
        value={profile.university.name}
        href={profile.university.href}
      />
      <InfoRow
        icon={IoMailOutline}
        label="EMAIL"
        value={profile.email}
        href={`mailto:${profile.email}`}
      />
    </div>
  )
}

function SocialList({ size = 20, gap = 'gap-5' }: { size?: number; gap?: string }) {
  return (
    <div
      className={`flex flex-wrap items-center justify-center ${gap} text-zinc-300`}
    >
      {profile.socials.map(({ name, label, href, icon: Icon }) => (
        <a
          key={name}
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={label}
          className="transition-colors hover:text-[color:var(--color-accent)]"
        >
          <Icon width={size} height={size} />
        </a>
      ))}
    </div>
  )
}

export default function Sidebar() {
  const [expanded, setExpanded] = useState(false)

  return (
    <Card className="relative flex flex-col p-6 lg:h-[calc(100vh-3rem)] lg:p-6">
      {/* ==================== DESKTOP LAYOUT ==================== */}
      <div className="mx-auto hidden w-full max-w-[300px] flex-1 flex-col lg:flex">
        <div className="group mx-auto overflow-hidden rounded-2xl border border-[color:var(--color-border)]">
          <img
            src={profile.avatar}
            alt={profile.name}
            loading="lazy"
            className="block h-[clamp(200px,34vh,290px)] w-[clamp(200px,34vh,290px)] object-cover object-[center_30%] transition-transform duration-500 ease-out group-hover:scale-105"
          />
        </div>

        <h1 className="font-script mt-4 text-center text-[clamp(28px,3.8vh,38px)] font-semibold italic leading-[1.15] tracking-tight text-white">
          {profile.name}
        </h1>

        <div className="mt-3 flex justify-center">
          <Badge variant="default" className="px-5 py-1.5 text-[14px]">
            {profile.role}
          </Badge>
        </div>

        <Separator className="my-4" />

        <InfoList />

        <div className="mt-auto pt-6">
          <SocialList size={20} gap="gap-5" />
        </div>
      </div>

      {/* ==================== MOBILE LAYOUT ==================== */}
      {/* Chevron toggle — attached to top-right corner of the card, mobile only */}
      <button
        type="button"
        onClick={() => setExpanded((v) => !v)}
        aria-expanded={expanded}
        aria-controls="sidebar-details"
        aria-label={expanded ? 'Hide profile details' : 'Show profile details'}
        className="absolute right-0 top-0 z-10 flex h-9 w-10 cursor-pointer items-center justify-center text-[color:var(--color-accent)] backdrop-blur-md transition-[color,filter] duration-200 hover:text-white hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-accent)]/50 lg:hidden"
        style={{
          borderTopLeftRadius: '0',
          borderTopRightRadius: '1.25rem',
          borderBottomLeftRadius: '0.75rem',
          borderBottomRightRadius: '0',
          backgroundImage:
            'linear-gradient(155deg, rgba(255,255,255,0.10), rgba(255,255,255,0.02) 40%, transparent 70%)',
          backgroundColor:
            'color-mix(in oklab, var(--color-panel) 82%, transparent)',
          boxShadow: [
            'inset 0 1px 0 rgba(255,255,255,0.10)',
            'inset 1px 0 0 rgba(255,255,255,0.04)',
            'inset 1px -1px 0 color-mix(in oklab, var(--color-accent) 55%, transparent)',
            'inset 2px -2px 5px -1px color-mix(in oklab, var(--color-accent) 35%, transparent)',
            '-3px 3px 10px -4px color-mix(in oklab, var(--color-accent) 45%, transparent)',
            '0 0 14px -4px color-mix(in oklab, var(--color-accent) 22%, transparent)',
          ].join(', '),
        }}
      >
        <IoChevronDownOutline
          className={`h-4 w-4 transition-transform duration-200 ${
            expanded ? 'rotate-180' : ''
          }`}
        />
      </button>

      <div className="lg:hidden">
        <div className="flex items-center gap-4 pr-8">
          {/* Avatar (left) */}
          <div className="group shrink-0 overflow-hidden rounded-xl border border-[color:var(--color-border)]">
            <img
              src={profile.avatar}
              alt={profile.name}
              loading="lazy"
              className="block h-24 w-24 object-cover object-[center_30%] transition-transform duration-500 ease-out group-hover:scale-110"
            />
          </div>

          {/* Middle column (name, role) — centered both axes */}
          <div className="flex min-w-0 flex-1 flex-col items-center justify-center gap-2 text-center">
            <h1 className="font-script max-w-full truncate text-[22px] font-semibold italic leading-tight tracking-tight text-white">
              {profile.name}
            </h1>
            <Badge variant="default" className="px-3.5 py-1 text-[12px]">
              {profile.role}
            </Badge>
          </div>
        </div>

        {/* Expandable info rows + socials */}
        <div
          id="sidebar-details"
          className={`grid overflow-hidden transition-[grid-template-rows,margin] duration-300 ease-out ${
            expanded
              ? 'mt-4 grid-rows-[1fr]'
              : 'mt-0 grid-rows-[0fr]'
          }`}
        >
          <div className="min-h-0">
            <Separator className="mb-4" />
            <InfoList />
            <div className="mt-5 border-t border-[color:var(--color-border)] pt-5">
              <SocialList size={18} gap="gap-7" />
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}
