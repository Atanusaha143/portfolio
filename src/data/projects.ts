import type { ComponentType, SVGProps } from 'react'
import {
  IoLayersOutline,
  IoSpeedometerOutline,
  IoFlaskOutline,
  IoServerOutline,
  IoSearchOutline,
  IoCloudOutline,
} from 'react-icons/io5'

export type ProjectContribution = {
  icon: ComponentType<SVGProps<SVGSVGElement>>
  title: string
  description: string
}

export type Project = {
  id: string
  title: string
  description: string
  tech: string[]
  link?: {
    href: string
    label: string
    type: 'live' | 'github' | 'drive_folder'
  }
  contributions: ProjectContribution[]
}

export const projects: Project[] = [
  {
    id: 'ticketco',
    title: 'TicketCo',
    description:
      'A digital ticketing platform that simplifies event management for organizers by offering intelligent upselling while keeping operational costs in check. With a seamless checkout process, it enhances the purchasing experience for attendees. TicketCo serves teams in ticketing, marketing, and commercial sectors, helping them boost ticket sales, elevate fan experiences, and create new revenue streams, providing comprehensive ticketing support.',
    tech: ['Python', 'FastAPI', 'FastStream', 'NATS', 'PostgreSQL', 'GCP', 'AWS'],
    link: {
      href: 'https://ticketco.io',
      label: 'View Project',
      type: 'live',
    },
    contributions: [
      {
        icon: IoLayersOutline,
        title: 'Microservices Architecture',
        description:
          'Architected event-driven system using FastAPI, FastStream and NATS for asynchronous communication across checkout, booking, payment and notification services, enabling scalable ticket processing for high-traffic events',
      },
      {
        icon: IoSpeedometerOutline,
        title: 'Performance Optimization',
        description:
          'Reduced system latency by 99.94% through strategic NATS connection pooling and configuration tuning. Optimized refund API from ~2.5s to ~700ms, improving customer experience during peak booking periods',
      },
      {
        icon: IoFlaskOutline,
        title: 'Testing & CI/CD',
        description:
          'Achieved 85%+ test coverage using PyTest and Cucumber BDD, integrated into GitHub Actions pipeline for continuous validation',
      },
    ],
  },
  {
    id: 'growthmateai',
    title: 'GrowthMateAI',
    description:
      'AI-powered productivity assistant leveraging Contextual RAG (Retrieval-Augmented Generation) for intelligent, personalized knowledge retrieval. Features flexible LLM provider selection between Gemini Flash and Ollama models with GPU-accelerated inference on RunPod, integrated with Open-WebUI for an interactive, containerized user experience.',
    tech: ['Python', 'FastAPI', 'LangChain', 'ChromaDB', 'Gemini', 'Ollama', 'Docker'],
    link: {
      href: 'https://drive.google.com/drive/folders/17DN1PkvHOYvlQIHAlmh35h00dHwuQZtb?usp=sharing',
      label: 'View Demo',
      type: 'drive_folder',
    },
    contributions: [
      {
        icon: IoServerOutline,
        title: 'Backend Architecture',
        description:
          'Designed and built robust FastAPI backend with modular architecture supporting multiple LLM providers and vector database integration',
      },
      {
        icon: IoSearchOutline,
        title: 'RAG Pipeline Implementation',
        description:
          'Developed contextual retrieval system using LangChain and ChromaDB for personalized, context-aware responses',
      },
      {
        icon: IoCloudOutline,
        title: 'Cloud Deployment',
        description:
          'Deployed GPU-optimized inference on RunPod with Docker containerization and integrated Open-WebUI for seamless user interaction',
      },
    ],
  },
]
