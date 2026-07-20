type Skill = {
  id: string
  name: string
}

type Props = {
  skills: Skill[]
}

export default function SkillsList({
  skills,
}: Props) {
  return (
    // <section className="rounded-3xl border border-slate-200 bg-white p-6 hover:translate-y-[-2px] shadow-sm">
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 ease-out hover:translate-y-[-2px]">
      <h2 className="mb-5 text-xl font-semibold text-slate-900">
        Skills
      </h2>

      {skills.length === 0 ? (
        <p className="text-slate-500">
          No skills added yet.
        </p>
      ) : (
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill.id}
              className="
                rounded-full
                bg-amber-100
                px-4
                py-2
                text-sm
                font-medium
                text-amber-700
              "
            >
              {skill.name}
            </span>
          ))}
        </div>
      )}
    </section>
  )
}