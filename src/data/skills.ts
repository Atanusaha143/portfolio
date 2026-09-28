import type { ComponentType, SVGProps } from 'react'
import {
  IoAppsOutline,
  IoBrowsersOutline,
  IoCardOutline,
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
    items: ['Python', 'TypeScript', 'JavaScript', 'SQL', 'C++'],
  },
  {
    key: 'llms',
    label: 'AI & Agentic Engineering',
    icon: IoSparklesOutline,
    proficiency: 'core',
    items: [
      'Claude Code',
      'Claude Agent SDK',
      'Claude API',
      'MCP',
      'Multi-Agent Orchestration',
      'Context & Prompt Engineering',
      'Spec-Driven Development',
      'RAG',
      'LangChain',
      'ChromaDB',
      'Gemini',
      'Ollama',
    ],
  },
  {
    key: 'backend',
    label: 'Backend & Tools',
    icon: IoServerOutline,
    proficiency: 'core',
    items: [
      'FastAPI',
      'FastStream',
      'Pydantic',
      'APScheduler',
      'asyncio',
      'Node.js',
      'Express.js',
      'Socket.IO',
    ],
  },
  {
    key: 'databases',
    label: 'Databases & Tools',
    icon: IoHardwareChipOutline,
    proficiency: 'core',
    items: ['PostgreSQL', 'MySQL', 'SQLite', 'SQLAlchemy', 'Alembic', 'TypeORM'],
  },
  {
    key: 'messaging',
    label: 'Message Brokers',
    icon: IoSwapHorizontalOutline,
    proficiency: 'core',
    items: ['NATS / JetStream', 'RabbitMQ', 'Redis', 'Valkey'],
  },
  {
    key: 'payments',
    label: 'Payments',
    icon: IoCardOutline,
    proficiency: 'core',
    items: ['Stripe', 'Adyen', 'Adyen for Platforms'],
  },
  {
    key: 'testing',
    label: 'Testing & Quality',
    icon: IoFlaskOutline,
    proficiency: 'core',
    items: [
      'PyTest',
      'Cucumber BDD',
      'Jest',
      'CI Coverage Gates',
      'Structured Logging',
      'Correlation IDs',
    ],
  },
  {
    key: 'devops',
    label: 'DevOps & Cloud',
    icon: IoCloudOutline,
    proficiency: 'moderate',
    items: [
      'Docker',
      'GitHub Actions',
      'GCP',
      'AWS',
      'Cloud Run',
      'Cloud SQL',
      'ECS',
      'Poetry',
      'Dependabot',
      'New Relic',
    ],
  },
  {
    key: 'frontend',
    label: 'Frontend & Tools',
    icon: IoBrowsersOutline,
    proficiency: 'moderate',
    items: ['React', 'Tailwind CSS', 'Ant Design', 'Bootstrap'],
  },
  {
    key: 'familiar',
    label: 'Also Familiar',
    icon: IoAppsOutline,
    proficiency: 'semi-moderate',
    items: ['C#', 'ASP.NET', 'Entity Framework', 'Laravel', 'MSSQL'],
  },
]
