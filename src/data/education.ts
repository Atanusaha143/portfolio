import type { ComponentType, SVGProps } from 'react'
import { IoMedal, IoStar } from 'react-icons/io5'

export type EducationStat = {
  icon: ComponentType<SVGProps<SVGSVGElement>>
  label: string
  tone?: 'accent' | 'gold'
}

export type EducationEntry = {
  institution: string
  location: string
  degree: string
  major?: string
  startDate: string
  endDate: string
  stats: EducationStat[]
  bullets: string[]
  coursework: string[]
}

export const education: EducationEntry[] = [
  {
    institution: 'American International University-Bangladesh',
    location: 'Dhaka, Bangladesh',
    degree: 'B.Sc. in Computer Science & Engineering',
    major: 'Software Engineering',
    startDate: 'May 2018',
    endDate: 'December 2021',
    stats: [
      { icon: IoStar, label: 'CGPA 3.98 / 4.00', tone: 'gold' },
      { icon: IoMedal, label: 'Summa Cum Laude — Gold Medal', tone: 'gold' },
    ],
    bullets: [
      'Maintained 3.89–4.00 GPA across all semesters, including six perfect 4.00 semesters.',
      'Ranked among the top students; awarded Summa Cum Laude (Gold Medal).',
    ],
    coursework: [
      'Artificial Intelligence & Expert Systems',
      'Software Engineering',
      'Computational Statistics & Probability',
      'Data Warehousing & Data Mining',
      'Operating Systems',
      'Computer Networks',
      'Database Systems',
      'Data Structures',
      'Algorithms',
    ],
  },
]
