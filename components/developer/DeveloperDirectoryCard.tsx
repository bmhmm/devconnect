// 'use client'

// import Image from 'next/image'
// import Link from 'next/link'
// import {
//   MapPin,
//   Building2,
//   ArrowRight,
//   CheckCircle2,
// } from 'lucide-react'

// import type { Developer } from './DeveloperDirectory'

// type Props = {
//   developer: Developer
// }

// export default function DeveloperDirectoryCard({
//   developer,
// }: Props) {

//   const avatar =
//     developer.avatar_url
//       ? `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/avatars/${developer.avatar_url}`
//       : null

//   return (
//     <div
//       className="
//       group
//       overflow-hidden
//       rounded-3xl
//       border
//       border-amber-900/10
//       bg-[#FFFDF8]
//       shadow-sm
//       transition-all
//       duration-300
//       hover:-translate-y-2
//       hover:shadow-xl
//       "
//     >

//       {/* Top Accent */}

//       <div className="h-2 bg-gradient-to-r from-amber-500 via-orange-400 to-amber-300" />

//       <div className="p-7">

//         {/* Header */}

//         <div className="flex items-start justify-between">

//           <div className="flex items-center gap-4">

//             <div className="relative h-20 w-20 overflow-hidden rounded-full border-4 border-white shadow-md">

//               {avatar ? (
//                 <Image
//                   src={avatar}
//                   alt={developer.full_name ?? developer.username}
//                   fill
//                   sizes="80px"
//                   className="object-cover"
//                 />
//               ) : (
//                 <div className="flex h-full w-full items-center justify-center bg-amber-100 text-2xl font-bold text-amber-700">
//                   {(developer.full_name ?? developer.username)
//                     .charAt(0)
//                     .toUpperCase()}
//                 </div>
//               )}

//             </div>

//             <div>

//               <h2 className="text-xl font-bold text-slate-900">
//                 {developer.full_name ?? developer.username}
//               </h2>

//               <p className="text-sm text-slate-500">
//                 @{developer.username}
//               </p>

//             </div>

//           </div>

//           {developer.available_for_work && (

//             <div
//               className="
//               flex
//               items-center
//               gap-1
//               rounded-full
//               bg-green-100
//               px-3
//               py-1
//               text-xs
//               font-semibold
//               text-green-700
//               "
//             >
//               <CheckCircle2 size={14} />

//               Available

//             </div>

//           )}

//         </div>

//         {/* Headline */}

//         <p className="mt-6 text-sm leading-6 text-slate-600">

//           {developer.headline || 'Developer'}

//         </p>

//         {/* Info */}

//         <div className="mt-6 space-y-3">

//           {developer.company && (

//             <div className="flex items-center gap-3 text-sm text-slate-600">

//               <Building2 size={17} />

//               {developer.company}

//             </div>

//           )}

//           {developer.location && (

//             <div className="flex items-center gap-3 text-sm text-slate-600">

//               <MapPin size={17} />

//               {developer.location}

//             </div>

//           )}

//         </div>

//         {/* Divider */}

//         <div className="my-6 h-px bg-slate-200" />

//         {/* Button */}

//         <Link
//           href={`/developers/${developer.username}`}
//           className="
//             flex
//             items-center
//             justify-center
//             gap-2
//             rounded-2xl
//             bg-amber-500
//             px-5
//             py-3
//             font-semibold
//             text-white
//             transition
//             group-hover:bg-amber-600
//           "
//         >

//           View Profile

//           <ArrowRight
//             size={18}
//             className="transition group-hover:translate-x-1"
//           />

//         </Link>

//       </div>

//     </div>
//   )
// }









'use client'

import Image from 'next/image'
import Link from 'next/link'
import {
  MapPin,
  Building2,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react'

import type { Developer } from './DeveloperDirectory'

type Props = {
  developer: Developer
}

export default function DeveloperDirectoryCard({
  developer,
}: Props) {

  const avatar =
    developer.avatar_url
      ? `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/avatars/${developer.avatar_url}`
      : null

  // Safe fallback name for display
  const displayName = developer.full_name || developer.username || 'Developer'

  return (
    <div
      className="
      group
      overflow-hidden
      rounded-3xl
      border
      border-amber-900/10
      bg-[#FFFDF8]
      shadow-sm
      transition-all
      duration-300
      hover:-translate-y-2
      hover:shadow-xl
      "
    >

      {/* Top Accent */}

      <div className="h-2 bg-gradient-to-r from-amber-500 via-orange-400 to-amber-300" />

      <div className="p-7">

        {/* Header */}

        <div className="flex items-start justify-between">

          <div className="flex items-center gap-4">

            <div className="relative h-20 w-20 overflow-hidden rounded-full border-4 border-white shadow-md">

              {avatar ? (
                <Image
                  src={avatar}
                  alt={displayName}
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-amber-100 text-2xl font-bold text-amber-700">
                  {displayName.charAt(0).toUpperCase()}
                </div>
              )}

            </div>

            <div>

              <h2 className="text-xl font-bold text-slate-900">
                {displayName}
              </h2>

              <p className="text-sm text-slate-500">
                @{developer.username || 'user'}
              </p>

            </div>

          </div>

          {developer.available_for_work && (

            <div
              className="
              flex
              items-center
              gap-1
              rounded-full
              bg-green-100
              px-3
              py-1
              text-xs
              font-semibold
              text-green-700
              "
            >
              <CheckCircle2 size={14} />

              Available

            </div>

          )}

        </div>

        {/* Headline */}

        <p className="mt-6 text-sm leading-6 text-slate-600">

          {developer.headline || 'Developer'}

        </p>

        {/* Info */}

        <div className="mt-6 space-y-3">

          {developer.company && (

            <div className="flex items-center gap-3 text-sm text-slate-600">

              <Building2 size={17} />

              {developer.company}

            </div>

          )}

          {developer.location && (

            <div className="flex items-center gap-3 text-sm text-slate-600">

              <MapPin size={17} />

              {developer.location}

            </div>

          )}

        </div>

        {/* Divider */}

        <div className="my-6 h-px bg-slate-200" />

        {/* Button */}

        <Link
          href={`/developers/${developer.username || ''}`}
          className="
            flex
            items-center
            justify-center
            gap-2
            rounded-2xl
            bg-amber-500
            px-5
            py-3
            font-semibold
            text-white
            transition
            group-hover:bg-amber-600
          "
        >

          View Profile

          <ArrowRight
            size={18}
            className="transition group-hover:translate-x-1"
          />

        </Link>

      </div>

    </div>
  )
}