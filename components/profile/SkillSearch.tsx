'use client'

import { useMemo, useState } from 'react'
import { Search } from 'lucide-react'

type Skill = {
  id: string
  name: string
}

type SkillSearchProps = {
  skills: Skill[]
  onSelect: (skill: Skill) => void
}

export default function SkillSearch({
  skills,
  onSelect,
}: SkillSearchProps) {
  const [query, setQuery] = useState('')

  const filteredSkills = useMemo(() => {
    if (!query.trim()) return []

    return skills.filter((skill) =>
      skill.name.toLowerCase().includes(query.toLowerCase())
    )
  }, [query, skills])

  return (
    <div className="relative">
      <div className="relative">
        <Search
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
        />

        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search skills..."
          className="
            w-full
            rounded-xl
            border
            border-slate-200
            bg-white
            py-3
            pl-10
            pr-4
            text-sm
            outline-none
            transition
            focus:border-amber-500
          "
        />
      </div>

      {filteredSkills.length > 0 && (
        <div
          className="
            absolute
            z-20
            mt-2
            w-full
            overflow-hidden
            rounded-xl
            border
            border-slate-200
            bg-white
            shadow-lg
          "
        >
          {filteredSkills.map((skill) => (
            <button
              key={skill.id}
              type="button"
              onClick={() => {
                onSelect(skill)
                setQuery('')
              }}
              className="
                block
                w-full
                px-4
                py-3
                text-left
                text-sm
                transition
                hover:bg-amber-50
              "
            >
              {skill.name}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}