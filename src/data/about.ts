import type { ComponentType, SVGProps } from 'react'
import {
  IoBriefcaseOutline,
  IoCloudOutline,
  IoCodeSlashOutline,
  IoGlobeOutline,
  IoLibraryOutline,
  IoRocketOutline,
  IoTerminalOutline,
  IoTrophyOutline,
} from 'react-icons/io5'

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
  { icon: IoCloudOutline, label: 'Cloud Infra' },
  { icon: IoGlobeOutline, label: 'Distributed Systems' },
  { icon: IoTerminalOutline, label: 'GenAI' },
  { icon: IoTrophyOutline, label: 'Problem Solving' },
]

export const stats: Stat[] = [
  { value: '2.5+', label: 'Years of\nExperience', icon: IoBriefcaseOutline },
  { value: '5+', label: 'Projects\nShipped', icon: IoRocketOutline },
  { value: '10+', label: 'Awards &\nHonors', icon: IoTrophyOutline },
  { value: '1', label: 'ACM\nPublication', icon: IoLibraryOutline },
]
