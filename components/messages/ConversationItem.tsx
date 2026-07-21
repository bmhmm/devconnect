'use client'

import Link from 'next/link'
import { getAvatarUrl } from '@/lib/avatar'


type Props = {
  profile: {
    id: string
    full_name: string
    username: string
    avatar_url: string | null
    headline: string | null
  }
}


export default function ConversationItem({
  profile,
}: Props) {

  const avatar =
    getAvatarUrl(profile.avatar_url)


  return (
    <Link
      href={`/account/messages/${profile.id}`}
      className="
        flex
        items-center
        gap-4
        rounded-2xl
        p-4
        transition
        hover:bg-[#F5E6D3]
      "
    >

      {/* Avatar */}

      {avatar ? (

        <img
          src={avatar}
          alt={profile.full_name}
          className="
            h-14
            w-14
            rounded-full
            object-cover
          "
        />

      ) : (

        <div
          className="
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-full
            bg-[#D8BFA3]
            text-lg
            font-bold
            text-[#3B2A1F]
          "
        >
          {profile.full_name.charAt(0)}
        </div>

      )}



      {/* Information */}

      <div className="min-w-0">

        <h3
          className="
            truncate
            font-semibold
            text-[#3B2A1F]
          "
        >
          {profile.full_name}
        </h3>


        <p
          className="
            truncate
            text-sm
            text-[#6B5848]
          "
        >
          @{profile.username}
        </p>


        {profile.headline && (

          <p
            className="
              mt-1
              truncate
              text-sm
              text-[#8B5E3C]
            "
          >
            {profile.headline}
          </p>

        )}

      </div>


    </Link>
  )
}