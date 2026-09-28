import type { ComponentType, SVGProps } from 'react'
import {
  IoBriefcaseOutline,
  IoCloudOutline,
  IoCodeSlashOutline,
  IoGlobeOutline,
  IoLibraryOutline,
  IoRibbonOutline,
  IoSparklesOutline,
  IoTrophyOutline,
} from 'react-icons/io5'
import { certifications } from '@/data/certifications'

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>

export type FocusArea = {
  icon: IconComponent
  label: string
}

export type Stat = {
  value: string
  label: string
  icon: IconComponent
}

export const focusAreas: FocusArea[] = [
  { icon: IoCodeSlashOutline, label: 'Backend Engineering' },
  { icon: IoGlobeOutline, label: 'Distributed Systems' },
  { icon: IoCloudOutline, label: 'Cloud Infra' },
  { icon: IoSparklesOutline, label: 'Agentic AI' },
  { icon: IoTrophyOutline, label: 'Problem Solving' },
]

export const stats: Stat[] = [
  { value: '3+', label: 'Years of\nExperience', icon: IoBriefcaseOutline },
  {
    value: String(certifications.length),
    label: 'Certifications',
    icon: IoRibbonOutline,
  },
  { value: '10+', label: 'Awards &\nHonors', icon: IoTrophyOutline },
  { value: '1', label: 'ACM\nPublication', icon: IoLibraryOutline },
]
