// 'use client'

// import Image from 'next/image'
// import { Briefcase, MapPin } from 'lucide-react'
// import AvailabilityBadge from './AvailabilityBadge'

// type Props = {
//   fullName: string
//   username: string
//   headline: string | null
//   company: string | null
//   location: string | null
//   avatarUrl: string | null
//   availableForWork: boolean
// }

// export default function DeveloperHero({
//   fullName,
//   username,
//   headline,
//   company,
//   location,
//   avatarUrl,
//   availableForWork,
// }: Props) {
//   return (
//     <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
//       <div className="flex flex-col gap-8 md:flex-row md:items-center">

//         <div className="relative h-36 w-36 overflow-hidden rounded-full border-4 border-amber-100 bg-slate-100">
//           {avatarUrl ? (
//             <Image
//               src={avatarUrl}
//               alt={fullName}
//               fill
//               className="object-cover"
//             />
//           ) : (
//             <div className="flex h-full items-center justify-center text-4xl font-bold text-slate-400">
//               {fullName.charAt(0).toUpperCase()}
//             </div>
//           )}
//         </div>

//         <div className="flex-1 space-y-3">

//           <div>
//             <h1 className="text-4xl font-bold text-slate-900">
//               {fullName}
//             </h1>

//             <p className="mt-1 text-slate-500">
//               @{username}
//             </p>
//           </div>

//           {headline && (
//             <p className="text-lg font-medium text-amber-600">
//               {headline}
//             </p>
//           )}

//           <div className="flex flex-wrap gap-5 text-sm text-slate-600">

//             {company && (
//               <div className="flex items-center gap-2">
//                 <Briefcase size={16} />
//                 {company}
//               </div>
//             )}

//             {location && (
//               <div className="flex items-center gap-2">
//                 <MapPin size={16} />
//                 {location}
//               </div>
//             )}

//           </div>

//           <AvailabilityBadge available={availableForWork} />

//         </div>

//       </div>
//     </section>
//   )
// }


'use client'
import { ReactNode } from "react"
import Image from 'next/image'
import { Briefcase, MapPin } from 'lucide-react'
import AvailabilityBadge from './AvailabilityBadge'
import SocialLinks from "./SocialLinks"

type Props = {
  fullName: string
  username: string
  headline: string | null
  company: string | null
  location: string | null
  avatarUrl: string | null
  availableForWork: boolean
  githubUrl: string | null
portfolioUrl: string | null
isOwnProfile: boolean
  action?: ReactNode
}

export default function DeveloperHero({
  fullName,
  username,
  headline,
  company,
  location,
  avatarUrl,
  availableForWork,
  githubUrl,
  portfolioUrl,
  isOwnProfile,
  action,
}: Props) {
  console.log("Developer Avatar URL:", avatarUrl)
  return (
    // Replaced 'min-h-screen' and 'w-full' to target the entire viewport and ensure
    // the dark brown covers the full site background.
    // <div className="py-16 inset-0 bg-[#3B2314] flex items-center justify-center p-6 antialiased overflow-y-auto">
      <div className="w-full">
      {/* Centered Light Brown Profile Card */}
      <section className="w-full bg-[#B08257] rounded-[2rem] border border-[#966B43] shadow-[0_12px_40px_rgba(0,0,0,0.3)] p-8 md:p-10 transition-all duration-300 ease-out hover:translate-y-[-2px]">
        {/* <section className="w-full max-w-[420px] bg-[#B08257] rounded-[2rem] border border-[#966B43] shadow-[0_12px_40px_rgba(0,0,0,0.3)] p-8 md:p-10 transition-all duration-300 ease-out hover:translate-y-[-2px]"> */}
        <div className="flex flex-col items-center text-center">
          
          {/* Circular Avatar */}
          <div className="relative h-24 w-24 overflow-hidden rounded-full border-4 border-[#C99D71] bg-[#966B43] mb-6 shadow-inner">
            {avatarUrl ? (
              // <Image
              //   src={avatarUrl}
              //   alt={fullName}
              //   fill
              //   className="object-cover"
              // />
              <img
  src={avatarUrl}
  alt={fullName}
  className="h-full w-full object-cover"
/>
            ) : (
              <div className="flex h-full items-center justify-center text-3xl font-bold text-[#F5EFE6]">
                {fullName.charAt(0).toUpperCase()}
              </div>
            )}
          </div>

          {/* Identity Info */}
          <div className="mb-4">
            <h1 className="text-2xl font-bold text-[#F5EFE6] tracking-tight">
              {fullName}
            </h1>
            <p className="text-sm text-[#E6D5C3] mt-0.5">
              @{username}
            </p>
          </div>

          {/* Headline */}
          {headline && (
            <p className="text-base text-[#F5EFE6] font-medium max-w-[300px] mb-6 leading-relaxed">
              {headline}
            </p>
          )}

          {/* Metadata Section */}
          <div className="w-full space-y-3 text-sm text-[#E6D5C3] border-t border-[#966B43] pt-6 mb-6 flex flex-col items-center">
            {company && (
              <div className="flex items-center gap-2">
                <Briefcase size={16} className="text-[#F5EFE6]" />
                <span className="font-medium text-[#F5EFE6]">{company}</span>
              </div>
            )}

            {location && (
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-[#F5EFE6]" />
                <span className="font-medium text-[#F5EFE6]">{location}</span>
              </div>
            )}
          </div>

          {/* Availability Badge */}
          <div className="w-full flex justify-center">
            <AvailabilityBadge available={availableForWork} />
          </div>
    <div className="mt-8 flex justify-center md:justify-start">
  {action}
</div>

        </div>
      </section>
    </div>
  )
}