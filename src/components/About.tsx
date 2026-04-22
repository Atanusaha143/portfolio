import { education } from '@/data/education'
import { profile } from '@/data/profile'

export default function About() {
  const edu = education[0]

  return (
    <section className="flex flex-col gap-6">
      <header>
        <h2 className="text-2xl font-extrabold tracking-tight text-white lg:text-3xl">
          Digital Identity
        </h2>
        <span className="mt-3 inline-block h-1 w-[70px] rounded-full bg-[color:var(--color-accent)]" />
      </header>

      <div className="space-y-4 text-[15px] leading-[1.75] text-zinc-200">
        {profile.bio.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
    </section>
  )
}
