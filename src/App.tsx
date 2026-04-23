import { useState } from 'react'
import Sidebar from '@/components/Sidebar'
import Nav from '@/components/Nav'
import About from '@/components/About'
import Resume from '@/components/Resume'
import Achievements from '@/components/Achievements'
import Publications from '@/components/Publications'
import Projects from '@/components/Projects'
import Placeholder from '@/components/Placeholder'
import { Card } from '@/components/ui/card'
import { Tabs, TabsContent } from '@/components/ui/tabs'
import { NAV_ITEMS, type NavSection } from '@/data/profile'
import type { ResumeSectionKey } from '@/data/resume'
import type { AchievementSectionKey } from '@/data/achievements'

export default function App() {
  const [section, setSection] = useState<NavSection>('About')
  const [resumeSub, setResumeSub] =
    useState<ResumeSectionKey>('experience')
  const [achievementSub, setAchievementSub] =
    useState<AchievementSectionKey>('academic-honor')

  const handleResumeSubChange = (sub: ResumeSectionKey) => {
    setSection('Resume')
    setResumeSub(sub)
  }

  const handleAchievementSubChange = (sub: AchievementSectionKey) => {
    setSection('Achievements')
    setAchievementSub(sub)
  }

  return (
    <div className="mx-auto min-h-screen max-w-[1300px] px-4 py-4 pb-[calc(72px+env(safe-area-inset-bottom))] sm:py-6 sm:pb-[calc(80px+env(safe-area-inset-bottom))] lg:px-6 lg:py-6 lg:pb-6 xl:px-8">
      <Tabs
        value={section}
        onValueChange={(v) => setSection(v as NavSection)}
        className="grid grid-cols-1 gap-5 lg:grid-cols-[340px_minmax(0,1fr)] lg:gap-6 xl:grid-cols-[360px_minmax(0,1fr)]"
      >
        <div className="lg:sticky lg:top-6 lg:self-start">
          <Sidebar />
        </div>

        <Card className="relative overflow-hidden p-6 lg:flex lg:h-[calc(100vh-3rem)] lg:flex-col lg:p-0">
          <div className="fixed inset-x-0 bottom-0 z-50 lg:static lg:flex lg:shrink-0 lg:justify-end">
            <Nav
              currentSection={section}
              onResumeSubChange={handleResumeSubChange}
              onAchievementSubChange={handleAchievementSubChange}
            />
          </div>

          <div className="lg:flex-1 lg:overflow-y-auto">
            <div className="lg:p-10">
              {NAV_ITEMS.map(({ name }) => (
                <TabsContent key={name} value={name}>
                  {name === 'About' ? (
                    <About />
                  ) : name === 'Resume' ? (
                    <Resume activeSection={resumeSub} />
                  ) : name === 'Achievements' ? (
                    <Achievements activeSection={achievementSub} />
                  ) : name === 'Publications' ? (
                    <Publications />
                  ) : name === 'Projects' ? (
                    <Projects />
                  ) : (
                    <Placeholder title={name} />
                  )}
                </TabsContent>
              ))}
            </div>
          </div>
        </Card>
      </Tabs>
    </div>
  )
}
