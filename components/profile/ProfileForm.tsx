// 'use client'
// import { useCallback, useEffect, useState } from 'react'
// import { createClient } from '@/lib/supabase/client'
// import Avatar from './AvatarUploader'

// type Claims = { sub: string; email?: string; [key: string]: unknown }

// export default function AccountForm({ claims }: { claims: Claims | null }) {
//   const supabase = createClient()
//   const [loading, setLoading] = useState(true)
//   const [fullname, setFullname] = useState<string | null>(null)
//   const [username, setUsername] = useState<string | null>(null)
//   const [website, setWebsite] = useState<string | null>(null)
//   const [avatar_url, setAvatarUrl] = useState<string | null>(null)

//   const getProfile = useCallback(async () => {
//     try {
//       if (!claims?.sub) {
//         setLoading(false)
//         return
//       }

//       setLoading(true)

//       const { data, error, status } = await supabase
//         .from('profiles')
//         .select(`full_name, username, website, avatar_url`)
//         .eq('id', claims.sub)
//         .single()

//       if (error && status !== 406) {
//         console.log(error)
//         throw error
//       }

//       if (data) {
//         setFullname(data.full_name)
//         setUsername(data.username)
//         setWebsite(data.website)
//         setAvatarUrl(data.avatar_url)
//       }
//     } catch (error) {
//       alert('Error loading user data!')
//     } finally {
//       setLoading(false)
//     }
//   }, [claims, supabase])

//   useEffect(() => {
//     getProfile()
//   }, [claims, getProfile])

//   async function updateProfile({
//     username,
//     website,
//     avatar_url,
//   }: {
//     username: string | null
//     fullname: string | null
//     website: string | null
//     avatar_url: string | null
//   }) {
//     try {
//       if (!claims?.sub) {
//         alert('You must be logged in to update your profile')
//         return
//       }

//       setLoading(true)

//       const { error } = await supabase.from('profiles').upsert({
//         id: claims.sub,
//         full_name: fullname,
//         username,
//         website,
//         avatar_url,
//         updated_at: new Date().toISOString(),
//       })
//       if (error) throw error
//       alert('Profile updated!')
//     } catch (error) {
//       alert('Error updating the data!')
//     } finally {
//       setLoading(false)
//     }
//   }

//   return (
//     <div className="form-widget">
//       <Avatar
//         uid={claims?.sub ?? null}
//         url={avatar_url}
//         size={150}
//         onUpload={(url) => {
//           setAvatarUrl(url)
//           updateProfile({ fullname, username, website, avatar_url: url })
//         }}
//       />
//       <div>
//         <label htmlFor="email">Email</label>
//         <input id="email" type="text" value={claims?.email ?? ''} disabled />
//       </div>
//       <div>
//         <label htmlFor="fullName">Full Name</label>
//         <input
//           id="fullName"
//           type="text"
//           value={fullname || ''}
//           onChange={(e) => setFullname(e.target.value)}
//         />
//       </div>
//       <div>
//         <label htmlFor="username">Username</label>
//         <input
//           id="username"
//           type="text"
//           value={username || ''}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//       </div>
//       <div>
//         <label htmlFor="website">Website</label>
//         <input
//           id="website"
//           type="url"
//           value={website || ''}
//           onChange={(e) => setWebsite(e.target.value)}
//         />
//       </div>

//       <div>
//         <button
//           className="button primary block"
//           onClick={() => updateProfile({ fullname, username, website, avatar_url })}
//           disabled={loading || !claims?.sub}
//         >
//           {loading ? 'Loading ...' : 'Update'}
//         </button>
//       </div>

//       <div>
//         <form action="/auth/signout" method="post">
//           <button className="button block" type="submit">
//             Sign out
//           </button>
//         </form>
//       </div>
//     </div>
//   )
// }










// 'use client'
// import { useCallback, useEffect, useState } from 'react'
// import { createClient } from '@/lib/supabase/client'
// import Avatar from './AvatarUploader'

// type Claims = { sub: string; email?: string; [key: string]: unknown }

// export default function ProfileForm({ claims }: { claims: Claims | null }) {
//   const [message, setMessage] = useState<string | null>(null)
//   const [messageType, setMessageType] = useState<'success' | 'error' | null>(null)
//   const [saving, setSaving] = useState(false)  
//   const supabase = createClient()
//   const [loading, setLoading] = useState(true)
//   const [fullname, setFullname] = useState<string | null>(null)
// const [username, setUsername] = useState<string | null>(null)

// const [headline, setHeadline] = useState<string | null>(null)
// const [bio, setBio] = useState<string | null>(null)
// const [location, setLocation] = useState<string | null>(null)
// const [company, setCompany] = useState<string | null>(null)

// const [githubUrl, setGithubUrl] = useState<string | null>(null)
// const [linkedinUrl, setLinkedinUrl] = useState<string | null>(null)
// const [portfolioUrl, setPortfolioUrl] = useState<string | null>(null)

// const [availableForWork, setAvailableForWork] = useState(false)

// const [website, setWebsite] = useState<string | null>(null)
// const [avatar_url, setAvatarUrl] = useState<string | null>(null)
//   const getProfile = useCallback(async () => {
//     try {
//       if (!claims?.sub) {
//         setLoading(false)
//         return
//       }
//       setLoading(true)

//       const { data, error, status } = await supabase
//         .from('profiles')
//         .select(`
//   full_name,
//   username,
//   website,
//   avatar_url,
//   headline,
//   bio,
//   location,
//   company,
//   github_url,
//   linkedin_url,
//   portfolio_url,
//   available_for_work
// `)
//         .eq('id', claims.sub)
//         .single()

//       if (error && status !== 406) throw error

//       if (data) {
//         setFullname(data.full_name)
//         setUsername(data.username)
//         setWebsite(data.website)
//         setAvatarUrl(data.avatar_url)

//         setHeadline(data.headline)
// setBio(data.bio)
// setLocation(data.location)
// setCompany(data.company)

// setGithubUrl(data.github_url)
// setLinkedinUrl(data.linkedin_url)
// setPortfolioUrl(data.portfolio_url)

// setAvailableForWork(data.available_for_work)
//       }
//     } catch (error) {
//       console.error('Error loading user data:', error)
//     } finally {
//       setLoading(false)
//     }
//   }, [claims, supabase])

//   useEffect(() => {
//     getProfile()
//   }, [claims, getProfile])

//  async function updateProfile({
//   username: nextUsername,
//   website: nextWebsite,
//   avatar_url: nextAvatar,
// }: {
//   username: string | null
//   fullname: string | null
//   website: string | null
//   avatar_url: string | null
// }) {
//   try {
//     if (!claims?.sub) return

//     setSaving(true)
//     setMessage(null)

//   const { error } = await supabase.from('profiles').upsert({
//   id: claims.sub,
//   full_name: fullname,
//   username: nextUsername,
//   website: nextWebsite,
//   avatar_url: nextAvatar,

//   headline,
//   bio,
//   location,
//   company,

//   github_url: githubUrl,
//   linkedin_url: linkedinUrl,
//   portfolio_url: portfolioUrl,

//   available_for_work: availableForWork,

//   updated_at: new Date().toISOString(),
// })

//     if (error) throw error

//     setMessageType('success')
// setMessage('Profile updated successfully 🎉')

// setTimeout(() => {
//   setMessage(null)
//   setMessageType(null)
// }, 2000)

//   } catch (error) {
//     console.error('Profile update error:', error)

//     setMessageType('error')
//     setMessage('Something went wrong. Please try again.')

//   } finally {
//     setSaving(false)
//   }
// }

//   return (

        
//     <div className="mx-auto max-w-4xl px-4 py-12">
//       {/* Header Info */}
//       <div className="mb-10">
//         <h1 className="text-3xl font-bold tracking-tight text-slate-900">Account Settings</h1>
//         <p className="mt-2 text-sm text-slate-600">
//           Manage your DevConnect developer identity, digital links, and portfolio details.
//         </p>
//       </div>

//       <div className="grid gap-8 md:grid-cols-12">
//         {/* Left Card: Avatar Section */}
//         <div className="md:col-span-4 rounded-3xl border border-amber-900/5 bg-white/60 p-6 text-center backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.03)] flex flex-col items-center justify-center">
//           <div className="relative group rounded-full p-2 border border-slate-100 bg-amber-50/30">
//             <Avatar
//               uid={claims?.sub ?? null}
//               url={avatar_url}
//               size={140}
//               onUpload={(url) => {
//                 setAvatarUrl(url)
//                 updateProfile({ fullname, username, website, avatar_url: url })
//               }}
//             />
//           </div>
//           <h2 className="mt-4 font-semibold text-slate-800">{fullname || 'Developer Portfolio'}</h2>
//           <p className="text-xs text-slate-500 mt-1">@{username || 'username'}</p>
//         </div>

//         {/* Right Card: Main Settings Form */}
//         <div className="md:col-span-8 rounded-3xl border border-amber-900/5 bg-white/60 p-8 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.03)]">
//           <div className="space-y-6">
            
//             {/* Account Email (Read-Only Container) */}
//             <div>
//               <label htmlFor="email" className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">
//                 Account Email
//               </label>
//               <input
//                 id="email"
//                 type="text"
//                 value={claims?.email ?? ''}
//                 disabled
//                 className="w-full rounded-xl border border-slate-200/60 bg-slate-50/50 px-4 py-3 text-sm text-slate-500 outline-none cursor-not-allowed"
//               />
//             </div>

//             {/* Full Name Input */}
//             <div>
//               <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">
//                 Full Name
//               </label>
//               <input
//                 id="fullName"
//                 type="text"
//                 placeholder="e.g. Michael Bacha"
//                 value={fullname || ''}
//                 onChange={(e) => setFullname(e.target.value)}
//                 className="w-full rounded-xl border border-slate-200 bg-white/80 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-blue-500 focus:bg-white"
//               />
//             </div>

//             {/* Headline */}
// <div>
//   <label
//     htmlFor="headline"
//     className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2"
//   >
//     Professional Headline
//   </label>

//   <input
//     id="headline"
//     type="text"
//     placeholder="Full Stack Developer | React & Next.js"
//     value={headline || ''}
//     onChange={(e) => setHeadline(e.target.value)}
//     className="w-full rounded-xl border border-slate-200 bg-white/80 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-amber-500 focus:bg-white"
//   />
// </div>


// {/* Bio */}
// <div>
//   <label
//     htmlFor="bio"
//     className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2"
//   >
//     Bio
//   </label>

//   <textarea
//     id="bio"
//     rows={5}
//     placeholder="Tell other developers about yourself..."
//     value={bio || ''}
//     onChange={(e) => setBio(e.target.value)}
//     className="w-full rounded-xl border border-slate-200 bg-white/80 px-4 py-3 text-sm text-slate-800 outline-none transition resize-none focus:border-amber-500 focus:bg-white"
//   />
// </div>


// {/* Location */}
// <div>
//   <label
//     htmlFor="location"
//     className="block text-xs bold uppercase tracking-widest text-slate-400 mb-2"
//   >
//     Location
//   </label>

//   <input
//     id="location"
//     type="text"
//     placeholder="Addis Ababa, Ethiopia"
//     value={location || ''}
//     onChange={(e) => setLocation(e.target.value)}
//     className="w-full rounded-xl border border-slate-200 bg-white/80 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-amber-500 focus:bg-white"
//   />
// </div>


// {/* Company */}
// <div>
//   <label
//     htmlFor="company"
//     className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2"
//   >
//     Company
//   </label>

//   <input
//     id="company"
//     type="text"
//     placeholder="Company or organization"
//     value={company || ''}
//     onChange={(e) => setCompany(e.target.value)}
//     className="w-full rounded-xl border border-slate-200 bg-white/80 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-amber-500 focus:bg-white"
//   />
// </div>

//             {/* Username Input */}
//             <div>
//               <label htmlFor="username" className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">
//                 Username
//               </label>
//               <input
//                 id="username"
//                 type="text"
//                 placeholder="username"
//                 value={username || ''}
//                 onChange={(e) => setUsername(e.target.value)}
//                 className="w-full rounded-xl border border-slate-200 bg-white/80 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-blue-500 focus:bg-white"
//               />
//             </div>

//             {/* Portfolio Website Input */}
//             <div>
//               <label htmlFor="website" className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">
//                 Portfolio URL / Website
//               </label>
//               <input
//                 id="website"
//                 type="url"
//                 placeholder="https://yourportfolio.dev"
//                 value={website || ''}
//                 onChange={(e) => setWebsite(e.target.value)}
//                 className="w-full rounded-xl border border-slate-200 bg-white/80 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-blue-500 focus:bg-white"
//               />
//             </div>

//                {/* GitHub */}
// <div>
//   <label
//     htmlFor="github"
//     className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2"
//   >
//     GitHub
//   </label>

//   <input
//     id="github"
//     type="url"
//     placeholder="https://github.com/username"
//     value={githubUrl || ''}
//     onChange={(e) => setGithubUrl(e.target.value)}
//     className="w-full rounded-xl border border-slate-200 bg-white/80 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-amber-500 focus:bg-white"
//   />
// </div>


// {/* LinkedIn */}
// <div>
//   <label
//     htmlFor="linkedin"
//     className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2"
//   >
//     LinkedIn
//   </label>

//   <input
//     id="linkedin"
//     type="url"
//     placeholder="https://linkedin.com/in/username"
//     value={linkedinUrl || ''}
//     onChange={(e) => setLinkedinUrl(e.target.value)}
//     className="w-full rounded-xl border border-slate-200 bg-white/80 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-amber-500 focus:bg-white"
//   />
// </div>


// {/* Portfolio */}
// <div>
//   <label
//     htmlFor="portfolio"
//     className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2"
//   >
//     Portfolio
//   </label>

//   <input
//     id="portfolio"
//     type="url"
//     placeholder="https://yourportfolio.dev"
//     value={portfolioUrl || ''}
//     onChange={(e) => setPortfolioUrl(e.target.value)}
//     className="w-full rounded-xl border border-slate-200 bg-white/80 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-amber-500 focus:bg-white"
//   />
// </div>
//  <div className="flex items-center gap-3">
//   <input
//     id="available"
//     type="checkbox"
//     checked={availableForWork}
//     onChange={(e) => setAvailableForWork(e.target.checked)}
//     className="h-4 w-4 rounded border-slate-300"
//   />

//   <label
//     htmlFor="available"
//     className="text-sm font-medium text-slate-700"
//   >
//     Available for work
//   </label>
// </div>

//                {message && (
//   <div
//     className={`
//       rounded-xl px-4 py-3 text-sm font-medium
//       ${
//         messageType === 'success'
//           ? 'bg-green-50 text-green-700'
//           : 'bg-red-50 text-red-700'
//       }
//     `}
//   >
//     {message}
//   </div>
// )}
//             {/* Form Actions Panel */}
//             <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between gap-4">
//               <form action="/auth/signout" method="post">
//                 <button 
//                   type="submit"
//                   className="rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-xs font-semibold text-slate-600 transition hover:bg-slate-50 hover:text-red-600"
//                 >
//                   Sign out
//                 </button>
//               </form>

//              <button
//   onClick={() => updateProfile({ fullname, username, website, avatar_url })}
//   disabled={saving || !claims?.sub}
//   className="rounded-xl bg-blue-600 px-6 py-2.5 text-xs font-semibold text-white transition hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed min-w-[120px]"
// >
//   {saving ? 'Saving...' : 'Save Changes'}
// </button>
//             </div>

//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }


'use client'
import { useCallback, useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import Avatar from './AvatarUploader'
import SkillsManager from "./SkillsManager"
import ProjectManager from '../project/ProjectManager'

type Claims = { sub: string; email?: string; [key: string]: unknown }

export default function ProfileForm({ claims }: { claims: Claims | null }) {
  const [message, setMessage] = useState<string | null>(null)
  const [messageType, setMessageType] = useState<'success' | 'error' | null>(null)
  const [saving, setSaving] = useState(false)  
  const supabase = createClient()
  const [loading, setLoading] = useState(true)
  const [fullname, setFullname] = useState<string | null>(null)
  const [username, setUsername] = useState<string | null>(null)

  const [headline, setHeadline] = useState<string | null>(null)
  const [bio, setBio] = useState<string | null>(null)
  const [location, setLocation] = useState<string | null>(null)
  const [company, setCompany] = useState<string | null>(null)

  const [githubUrl, setGithubUrl] = useState<string | null>(null)
  const [linkedinUrl, setLinkedinUrl] = useState<string | null>(null)
  const [portfolioUrl, setPortfolioUrl] = useState<string | null>(null)

  const [availableForWork, setAvailableForWork] = useState(false)

  const [website, setWebsite] = useState<string | null>(null)
  const [avatar_url, setAvatarUrl] = useState<string | null>(null)

  const getProfile = useCallback(async () => {
    try {
      if (!claims?.sub) {
        setLoading(false)
        return
      }
      setLoading(true)

      const { data, error, status } = await supabase
        .from('profiles')
        .select(`
          full_name,
          username,
          website,
          avatar_url,
          headline,
          bio,
          location,
          company,
          github_url,
          linkedin_url,
          portfolio_url,
          available_for_work
        `)
        .eq('id', claims.sub)
        .single()

      if (error && status !== 406) throw error

      if (data) {
        setFullname(data.full_name)
        setUsername(data.username)
        setWebsite(data.website)
        setAvatarUrl(data.avatar_url)

        setHeadline(data.headline)
        setBio(data.bio)
        setLocation(data.location)
        setCompany(data.company)

        setGithubUrl(data.github_url)
        setLinkedinUrl(data.linkedin_url)
        setPortfolioUrl(data.portfolio_url)

        setAvailableForWork(data.available_for_work)
      }
    } catch (error) {
      console.error('Error loading user data:', error)
    } finally {
      setLoading(false)
    }
  }, [claims, supabase])

  useEffect(() => {
    getProfile()
  }, [claims, getProfile])

  async function updateProfile({
    username: nextUsername,
    website: nextWebsite,
    avatar_url: nextAvatar,
  }: {
    username: string | null
    fullname: string | null
    website: string | null
    avatar_url: string | null
  }) {
    try {
      if (!claims?.sub) return

      setSaving(true)
      setMessage(null)

      const { error } = await supabase.from('profiles').upsert({
        id: claims.sub,
        full_name: fullname,
        username: nextUsername,
        website: nextWebsite,
        avatar_url: nextAvatar,
        headline,
        bio,
        location,
        company,
        github_url: githubUrl,
        linkedin_url: linkedinUrl,
        portfolio_url: portfolioUrl,
        available_for_work: availableForWork,
        updated_at: new Date().toISOString(),
      })

      if (error) throw error

      setMessageType('success')
      setMessage('Profile updated successfully 🎉')

      setTimeout(() => {
        setMessage(null)
        setMessageType(null)
      }, 2000)

    } catch (error) {
      console.error('Profile update error:', error)
      setMessageType('error')
      setMessage('Something went wrong. Please try again.')
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      {/* Header Layout Info */}
      <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-slate-100 pb-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">Account Settings</h1>
          <p className="mt-1 text-xs text-slate-500">
            Manage your DevConnect developer identity, digital links, and portfolio details.
          </p>
        </div>
      
        {/* Availability Quick Tag */}
        <label className={`flex items-center gap-2.5 px-4 py-2 rounded-xl border cursor-pointer select-none transition-all duration-200 ${availableForWork ? 'bg-green-50/60 border-green-200/80 text-green-700 shadow-sm' : 'bg-slate-50/50 border-slate-200 text-slate-500'}`}>
          <input
            id="available"
            type="checkbox"
            checked={availableForWork}
            onChange={(e) => setAvailableForWork(e.target.checked)}
            className="h-4 w-4 rounded text-green-600 border-slate-300 focus:ring-green-500"
          />
          <span className="text-xs font-semibold uppercase tracking-wider">Available for work</span>
        </label>

      
      </div>

      <div className="grid gap-6 md:grid-cols-12">
        {/* Left Side: Avatar Panel */}
        <div className="md:col-span-3 rounded-2xl border border-amber-900/5 bg-white/60 p-6 text-center backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.02)] flex flex-col items-center justify-center h-fit">
          <div className="relative group rounded-full p-1.5 border border-slate-100 bg-amber-50/20">
            <Avatar
              uid={claims?.sub ?? null}
              url={avatar_url}
              size={110}
              onUpload={(url) => {
                setAvatarUrl(url)
                updateProfile({ fullname, username, website, avatar_url: url })
              }}
            />
          </div>
          <h2 className="mt-3 text-sm font-semibold text-slate-800 line-clamp-1">{fullname || 'Developer Portfolio'}</h2>
          <p className="text-xs text-slate-400 mt-0.5">@{username || 'username'}</p>
        </div>

        {/* Right Side: Bento Settings Blocks */}
        <div className="md:col-span-9 space-y-6">
          
          {/* Section 1: Core Information Grid */}
          <div className="rounded-2xl border border-amber-900/5 bg-white/60 p-6 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.02)]">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4 border-b border-slate-50 pb-2">Personal Identity</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="email" className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">Account Email</label>
                <input id="email" type="text" value={claims?.email ?? ''} disabled className="w-full rounded-xl border border-slate-200/60 bg-slate-50/70 px-3 py-2 text-xs text-slate-400 cursor-not-allowed outline-none" />
              </div>

              <div>
                <label htmlFor="username" className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">Username</label>
                <input id="username" type="text" placeholder="username" value={username || ''} onChange={(e) => setUsername(e.target.value)} className="w-full rounded-xl border border-slate-200 bg-white/80 px-3 py-2 text-xs text-slate-800 outline-none transition focus:border-blue-500 focus:bg-white" />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="fullName" className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">Full Name</label>
                <input id="fullName" type="text" placeholder="e.g. Michael Bacha" value={fullname || ''} onChange={(e) => setFullname(e.target.value)} className="w-full rounded-xl border border-slate-200 bg-white/80 px-3 py-2 text-xs text-slate-800 outline-none transition focus:border-blue-500 focus:bg-white" />
              </div>
            </div>
          </div>

          {/* Section 2: Developer Bio & Career Details */}
          <div className="rounded-2xl border border-amber-900/5 bg-white/60 p-6 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.02)]">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4 border-b border-slate-50 pb-2">Developer Information</h3>
            
            <div className="space-y-4">
              <div>
                <label htmlFor="headline" className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">Professional Headline</label>
                <input id="headline" type="text" placeholder="Full Stack Developer | React & Next.js" value={headline || ''} onChange={(e) => setHeadline(e.target.value)} className="w-full rounded-xl border border-slate-200 bg-white/80 px-3 py-2 text-xs text-slate-800 outline-none transition focus:border-amber-500 focus:bg-white" />
              </div>

              <div>
                <label htmlFor="bio" className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">Bio</label>
                <textarea id="bio" rows={3} placeholder="Tell other developers about yourself..." value={bio || ''} onChange={(e) => setBio(e.target.value)} className="w-full rounded-xl border border-slate-200 bg-white/80 px-3 py-2 text-xs text-slate-800 outline-none transition resize-none focus:border-amber-500 focus:bg-white" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="location" className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">Location</label>
                  <input id="location" type="text" placeholder="Addis Ababa, Ethiopia" value={location || ''} onChange={(e) => setLocation(e.target.value)} className="w-full rounded-xl border border-slate-200 bg-white/80 px-3 py-2 text-xs text-slate-800 outline-none transition focus:border-amber-500 focus:bg-white" />
                </div>

                <div>
                  <label htmlFor="company" className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">Company</label>
                  <input id="company" type="text" placeholder="Company or organization" value={company || ''} onChange={(e) => setCompany(e.target.value)} className="w-full rounded-xl border border-slate-200 bg-white/80 px-3 py-2 text-xs text-slate-800 outline-none transition focus:border-amber-500 focus:bg-white" />
                </div>
              </div>
            </div>
          </div>
             {/* section 2.1 adding skills manager */}

           <div className="rounded-3xl border border-amber-900/5 bg-white/70 p-6 backdrop-blur-xl shadow-sm">
  <h2 className="mb-5 text-lg font-semibold text-slate-800">
    Skills
  </h2>

  <SkillsManager userId={claims!.sub} />
</div>
       {/* section 2.2 adding project manager */}

        {claims?.sub && (
  <div className="rounded-3xl border border-amber-900/5 bg-white/70 p-6 backdrop-blur-xl shadow-sm">
    <ProjectManager userId={claims.sub} />
  </div>
)}

          {/* Section 3: Web Presence / External Links */}
          <div className="rounded-2xl border border-amber-900/5 bg-white/60 p-6 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.02)]">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4 border-b border-slate-50 pb-2">Profiles & Web Links</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="github" className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">GitHub URL</label>
                <input id="github" type="url" placeholder="https://github.com/username" value={githubUrl || ''} onChange={(e) => setGithubUrl(e.target.value)} className="w-full rounded-xl border border-slate-200 bg-white/80 px-3 py-2 text-xs text-slate-800 outline-none transition focus:border-amber-500 focus:bg-white" />
              </div>

              <div>
                <label htmlFor="linkedin" className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">LinkedIn URL</label>
                <input id="linkedin" type="url" placeholder="https://linkedin.com/in/username" value={linkedinUrl || ''} onChange={(e) => setLinkedinUrl(e.target.value)} className="w-full rounded-xl border border-slate-200 bg-white/80 px-3 py-2 text-xs text-slate-800 outline-none transition focus:border-amber-500 focus:bg-white" />
              </div>

              <div>
                <label htmlFor="portfolio" className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">Portfolio URL</label>
                <input id="portfolio" type="url" placeholder="https://yourportfolio.dev" value={portfolioUrl || ''} onChange={(e) => setPortfolioUrl(e.target.value)} className="w-full rounded-xl border border-slate-200 bg-white/80 px-3 py-2 text-xs text-slate-800 outline-none transition focus:border-amber-500 focus:bg-white" />
              </div>

              <div>
                <label htmlFor="website" className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">Alternative Website</label>
                <input id="website" type="url" placeholder="https://yourportfolio.dev" value={website || ''} onChange={(e) => setWebsite(e.target.value)} className="w-full rounded-xl border border-slate-200 bg-white/80 px-3 py-2 text-xs text-slate-800 outline-none transition focus:border-blue-500 focus:bg-white" />
              </div>
            </div>
          </div>

          {/* Notifications Toast */}
          {message && (
            <div className={`rounded-xl px-4 py-2.5 text-xs font-semibold shadow-sm transition-all duration-300 ${messageType === 'success' ? 'bg-green-50 border border-green-100 text-green-700' : 'bg-red-50 border border-red-100 text-red-700'}`}>
              {message}
            </div>
          )}

          {/* Global Sticky / Floating Bottom Actions Bar */}
          <div className="pt-4 flex items-center justify-between gap-4 border-t border-slate-100">
            <form action="/auth/signout" method="post">
              <button type="submit" className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-600 transition hover:bg-slate-50 hover:text-red-600">
                Sign out
              </button>
            </form>

            <button
              onClick={() => updateProfile({ fullname, username, website, avatar_url })}
              disabled={saving || !claims?.sub}
              className="rounded-xl bg-blue-600 px-5 py-2 text-xs font-semibold text-white transition hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed min-w-[110px] shadow-sm"
            >
              {saving ? 'Saving...' : 'Save Changes'}
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}