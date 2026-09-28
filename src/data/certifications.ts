export type Certification = {
  title: string
  issuer: string
  issued: string
  expires?: string
  description?: string
  url: string
  featured?: boolean
}

export const certifications: Certification[] = [
  {
    title: 'Claude Certified Architect – Foundations',
    issuer: 'Anthropic',
    issued: 'September 2026',
    description:
      'Certified in designing and building production-grade applications with Claude Code, the Claude Agent SDK, the Claude API, and the Model Context Protocol (MCP).',
    url: 'https://www.credly.com/badges/d0b93cdd-cf2e-4ca2-a179-ca485cb2469a',
    featured: true,
  },
  {
    title: 'Advanced Python: Python Packaging',
    issuer: 'Udemy',
    issued: 'May 2026',
    url: 'https://www.udemy.com/certificate/UC-c89451c1-beb3-4742-884c-5c59989bd09a/',
  },
  {
    title: 'Intermediate Secure Coding in Python',
    issuer: 'SecureFlag',
    issued: 'February 2026',
    url: 'https://www.secureflag.com/s?34b77203-ffbe-4cbd-98f4-790723e3af11',
  },
  {
    title: 'SQL and PostgreSQL: The Complete Developer’s Guide',
    issuer: 'Udemy',
    issued: 'February 2026',
    url: 'https://www.udemy.com/certificate/UC-5510f656-03ba-46fa-9bb0-fd272851c91b/',
  },
  {
    title: 'Clean Code',
    issuer: 'Udemy',
    issued: 'August 2025',
    url: 'https://www.udemy.com/certificate/UC-e08c6e5a-b7db-4d76-9e07-107bc4d60055/',
  },
  {
    title: 'FastAPI – The Complete Course (Beginner + Advanced)',
    issuer: 'Udemy',
    issued: 'December 2024',
    url: 'https://www.udemy.com/certificate/UC-7a0bbe7d-6f61-471e-867a-980b0afe2724/',
  },
  {
    title: 'OWASP Top 10:2021 in Python',
    issuer: 'SecureFlag',
    issued: 'October 2024',
    url: 'https://www.secureflag.com/s?bfeef481-bb6a-4a55-a2c4-a31c4073428d',
  },
  {
    title: 'Introductory Secure DevOps with Docker',
    issuer: 'SecureFlag',
    issued: 'October 2024',
    url: 'https://www.secureflag.com/s?bf0bdf38-cee0-4653-86eb-8d9ecc8f3c31',
  },
]
