'use client'

import { X } from 'lucide-react'

type SkillChipProps = {
  id: string
  name: string
  onRemove?: (id: string) => void
  removable?: boolean
}

export default function SkillChip({
  id,
  name,
  onRemove,
  removable = true,
}: SkillChipProps) {
  return (
    <div
      className="
      inline-flex
      items-center
      gap-2
      rounded-full
      border
      border-amber-200
      bg-amber-50
      px-4
      py-2
      text-sm
      font-medium
      text-slate-700
      transition
      hover:border-amber-300
      "
    >
      <span>{name}</span>

      {removable && onRemove && (
        <button
          type="button"
          onClick={() => onRemove(id)}
          className="
          rounded-full
          p-1
          transition
          hover:bg-red-100
          hover:text-red-600
          "
          aria-label={`Remove ${name}`}
        >
          <X size={14} />
        </button>
      )}
    </div>
  )
}