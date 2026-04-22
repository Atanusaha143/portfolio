import type { ComponentType, SVGProps } from 'react'
import {
  IoBrowsersOutline,
  IoCloudOutline,
  IoCodeSlashOutline,
  IoFlaskOutline,
  IoHardwareChipOutline,
  IoServerOutline,
  IoSparklesOutline,
  IoSwapHorizontalOutline,
} from 'react-icons/io5'

export type SkillCategory = {
  key: string
  label: string
  icon: ComponentType<SVGProps<SVGSVGElement>>
  items: string[]
}

export const skills: SkillCategory[] = [
  {
    key: 'languages',
    label: 'Languages',
    icon: IoCodeSlashOutline,
    items: ['Python', 'C++', 'JavaScript', 'TypeScript', 'SQL'],
  },
  {
    key: 'backend',
    label: 'Backend & Tools',
    icon: IoServerOutline,
    items: ['FastAPI', 'Node.js', 'Express.js', 'Socket.IO'],
  },
  {
    key: 'frontend',
    label: 'Frontend & Tools',
    icon: IoBrowsersOutline,
    items: ['React', 'Tailwind CSS', 'Ant Design'],
  },
  {
    key: 'databases',
    label: 'Databases & Tools',
    icon: IoHardwareChipOutline,
    items: [
      'PostgreSQL',
      'MySQL',
      'SQLite',
      'SQLAlchemy',
      'TypeORM',
      'ChromaDB',
    ],
  },
  {
    key: 'testing',
    label: 'Testing',
    icon: IoFlaskOutline,
    items: ['PyTest', 'Cucumber', 'Jest'],
  },
  {
    key: 'messaging',
    label: 'Message Brokers',
    icon: IoSwapHorizontalOutline,
    items: ['NATS', 'RabbitMQ', 'Redis'],
  },
  {
    key: 'devops',
    label: 'DevOps & Cloud',
    icon: IoCloudOutline,
    items: ['GCP', 'AWS', 'GitHub Actions', 'Docker'],
  },
  {
    key: 'llms',
    label: 'LLMs & genAI',
    icon: IoSparklesOutline,
    items: ['OpenAI API', 'LangChain', 'Vector Databases', 'RAG'],
  },
]
