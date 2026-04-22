import type { ComponentType, SVGProps } from 'react'
import {
  IoCheckmarkDoneOutline,
  IoFlagOutline,
  IoGlobeOutline,
  IoLibraryOutline,
  IoMedalOutline,
  IoPeopleOutline,
  IoRibbonOutline,
  IoStarOutline,
  IoTerminalOutline,
  IoTrophyOutline,
} from 'react-icons/io5'

export type AchievementSectionKey =
  | 'academic-honor'
  | 'competitive-programming'

export type AchievementSection = {
  key: AchievementSectionKey
  label: string
  icon: ComponentType<SVGProps<SVGSVGElement>>
}

export const ACHIEVEMENT_SECTIONS: AchievementSection[] = [
  { key: 'academic-honor', label: 'Academic Honors', icon: IoRibbonOutline },
  {
    key: 'competitive-programming',
    label: 'Competitive Programming',
    icon: IoTerminalOutline,
  },
]

export type AchievementEntry = {
  icon: ComponentType<SVGProps<SVGSVGElement>>
  title: string
  date: string
  description: string
  badge?: string
  featured?: boolean
}

export const academicHonors: AchievementEntry[] = [
  {
    icon: IoMedalOutline,
    title: 'Summa Cum Laude - Gold Medal',
    date: '22nd Convocation · 2025',
    description:
      'Graduated with a CGPA of 3.98, earning the highest academic honor at the 22nd Convocation of AIUB — awarded only to top performing graduates at AIUB while maintaining a spotless academic record with zero retakes, withdrawals, or disciplinary actions across the entire degree.',
    badge: 'Highest Honor',
    featured: true,
  },
  {
    icon: IoTrophyOutline,
    title: 'Dr. Anwarul Abedin Leadership Award',
    date: '22nd Convocation · 2025',
    description:
      'Recognized at the 22nd Convocation of AIUB for exceptional contributions to the competitive programming culture and community on campus.',
    badge: 'Leadership Award',
  },
  {
    icon: IoLibraryOutline,
    title: 'Merit-Based Academic Scholarship',
    date: '2019 — 2021',
    description:
      '≈70% tuition scholarship awarded from the 4th semester through the final semester at AIUB for sustained outstanding academic performance.',
    badge: 'Scholarship',
  },
  {
    icon: IoStarOutline,
    title: "Dean's List",
    date: 'Multiple Semesters',
    description:
      "Placed on the Dean's List across multiple semesters at AIUB for achieving an excellent semester GPA.",
    badge: 'Recognition',
  },
]

export const competitiveProgramming: AchievementEntry[] = [
  {
    icon: IoFlagOutline,
    title: 'Finalist — ICPC Asia West Continent Final',
    date: '2023',
    description:
      'Advanced to the Asia West Continent Final — one of the most prestigious stages of the International Collegiate Programming Contest - representing AIUB with Team AIUB Singularity. Competed among the top teams across South and Southeast Asia.',
  },
  {
    icon: IoTrophyOutline,
    title: '11th Place — ICPC Asia Dhaka Regional',
    date: '2022',
    description:
      'Secured 11th place in the ICPC Asia Dhaka Regional onsite contest with Team AIUB Singularity, qualifying for the Asia West Continent Final. Competed against hundreds of teams from universities across Bangladesh.',
  },
  {
    icon: IoRibbonOutline,
    title: '18th Place — ICPC Asia Dhaka Regional Preliminary',
    date: '2021',
    description:
      'Ranked 18th in the ICPC Asia Dhaka Regional Online Preliminary with Team AIUB Convergents, securing a berth to the onsite regional round from a highly competitive national field.',
  },
  {
    icon: IoPeopleOutline,
    title: 'Inter-University Programming Contests',
    date: '2022 - 2023',
    description:
      'Participated in numerous onsite inter-university programming contests across Bangladesh, representing AIUB in national collegiate level competitions in BUET, RUET, SUST etc.',
  },
  {
    icon: IoGlobeOutline,
    title: 'Google & Meta Algorithmic Contests',
    date: '2020 — 2023',
    description:
      'Competed in globally prestigious algorithmic contests - Google Code Jam, Google Kickstart and Meta (Facebook) Hacker Cup - advancing past qualification rounds.',
  },
  {
    icon: IoCheckmarkDoneOutline,
    title: '3000+ Problems Solved Across Online Judges',
    date: '2018 — 2023',
    description:
      'Solved 3000+ problems on platforms including Codeforces, CodeChef, UVa Online Judge, LightOJ and SPOJ.',
  },
]
