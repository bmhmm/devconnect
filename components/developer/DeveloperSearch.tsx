'use client'

type Props = {
  onSearch: (value: string) => void
}

export default function DeveloperSearch({
  onSearch,
}: Props) {
  return (
    <input
      type="text"
      placeholder="Search developers..."
      onChange={(e) => onSearch(e.target.value)}
      className="
        w-full
        rounded-2xl
        border
        border-slate-200
        bg-white
        px-5
        py-4
        outline-none
        transition
        focus:border-amber-500
      "
    />
  )
}