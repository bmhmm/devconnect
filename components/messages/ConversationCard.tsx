import Link from 'next/link'

type Props = {
  profile: any
}

export default function ConversationCard({
  profile,
}: Props) {
  return (
    <Link
      href={`/account/messages/${profile.id}`}
      className="
        flex
        items-center
        gap-5
        rounded-2xl
        border
        border-slate-200
        bg-white
        p-5
        shadow-sm
        transition
        hover:-translate-y-1
        hover:shadow-lg
      "
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-amber-100 font-bold text-slate-700">
        {profile.full_name?.charAt(0)}
      </div>

      <div>

        <h3 className="font-semibold">
          {profile.full_name}
        </h3>

        <p className="text-sm text-slate-500">
          @{profile.username}
        </p>

        <p className="mt-1 text-sm text-slate-600">
          {profile.headline}
        </p>

      </div>

    </Link>
  )
}