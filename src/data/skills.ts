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

export type Proficiency = 'core' | 'moderate' | 'semi-moderate'

export type SkillCategory = {
  key: string
  label: string
  icon: ComponentType<SVGProps<SVGSVGElement>>
  items: string[]
  proficiency: Proficiency
}

export const skills: SkillCategory[] = [
  {
    key: 'languages',
    label: 'Languages',
    icon: IoCodeSlashOutline,
    proficiency: 'core',
    items: ['Python', 'C++', 'JavaScript', 'TypeScript', 'SQL'],
  },
  {
    key: 'backend',
    label: 'Backend & Tools',
    icon: IoServerOutline,
    proficiency: 'core',
    items: ['FastAPI', 'Node.js', 'Express.js', 'Socket.IO'],
  },
  {
    key: 'frontend',
    label: 'Frontend & Tools',
    icon: IoBrowsersOutline,
    proficiency: 'moderate',
    items: ['React', 'Tailwind CSS', 'Ant Design'],
  },
  {
    key: 'databases',
    label: 'Databases & Tools',
    icon: IoHardwareChipOutline,
    proficiency: 'core',
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
    proficiency: 'moderate',
    items: ['PyTest', 'Cucumber', 'Jest'],
  },
  {
    key: 'messaging',
    label: 'Message Brokers',
    icon: IoSwapHorizontalOutline,
    proficiency: 'core',
    items: ['NATS', 'RabbitMQ', 'Redis', 'Valkey'],
  },
  {
    key: 'devops',
    label: 'DevOps & Cloud',
    icon: IoCloudOutline,
    proficiency: 'semi-moderate',
    items: ['GCP', 'AWS', 'GitHub Actions', 'Docker', 'Observability'],
  },
  {
    key: 'llms',
    label: 'GenAI',
    icon: IoSparklesOutline,
    proficiency: 'semi-moderate',
    items: ['OpenAI API', 'LangChain', 'Vector Databases', 'RAG', 'Hugging Face', 'Ollama', 'Anthropic'],
  },
]
