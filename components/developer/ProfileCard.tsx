type Props = {
  bio: string | null
}

export default function ProfileCard({
  bio,
}: Props) {
  return (
    // <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:translate-y-[-2px]">
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 ease-out hover:scale-[1.01]">
      <h2 className="mb-4 text-xl font-semibold text-slate-900">
        About
      </h2>

      <p className="leading-7 text-slate-600">
        {bio || "This developer hasn't added a bio yet."}
      </p>
    </section>
  )
}