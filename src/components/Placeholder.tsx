type Props = {
  title: string
}

export default function Placeholder({ title }: Props) {
  return (
    <section>
      <header>
        <h2 className="text-4xl font-extrabold tracking-tight text-white lg:text-[42px]">
          {title}
        </h2>
        <span className="mt-3 inline-block h-1 w-[70px] rounded-full bg-[color:var(--color-accent)]" />
      </header>
      <p className="mt-8 text-zinc-300">This section is coming soon.</p>
    </section>
  )
}
