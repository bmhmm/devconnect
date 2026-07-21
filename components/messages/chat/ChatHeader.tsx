import { getAvatarUrl } from "@/lib/avatar"


type Props = {
  profile: {
    full_name: string
    username: string
    headline: string | null
    avatar_url: string | null
  }
}


export default function ChatHeader({
  profile,
}: Props) {


  const avatar =
    getAvatarUrl(profile.avatar_url)



  return (
    <div
      className="
        flex
        items-center
        gap-4
        border-b
        bg-white
        p-5
      "
    >

      {avatar ? (

        <img
          src={avatar}
          alt={profile.full_name}
          className="
            h-12
            w-12
            rounded-full
            object-cover
          "
        />

      ) : (

        <div
          className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-full
            bg-[#D8BFA3]
            font-bold
          "
        >
          {profile.full_name.charAt(0)}
        </div>

      )}



      <div>

        <h2
          className="
            font-bold
            text-[#3B2A1F]
          "
        >
          {profile.full_name}
        </h2>


        <p
          className="
            text-sm
            text-[#6B5848]
          "
        >
          @{profile.username}
        </p>


        {profile.headline && (

          <p
            className="
              text-xs
              text-[#8B5E3C]
            "
          >
            {profile.headline}
          </p>

        )}

      </div>


    </div>
  )
}