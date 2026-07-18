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










'use client'
import { useCallback, useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import Avatar from './AvatarUploader'

type Claims = { sub: string; email?: string; [key: string]: unknown }

export default function ProfileForm({ claims }: { claims: Claims | null }) {
  const [message, setMessage] = useState<string | null>(null)
  const [messageType, setMessageType] = useState<'success' | 'error' | null>(null)
  const [saving, setSaving] = useState(false)  
  const supabase = createClient()
  const [loading, setLoading] = useState(true)
  const [fullname, setFullname] = useState<string | null>(null)
  const [username, setUsername] = useState<string | null>(null)
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
        .select(`full_name, username, website, avatar_url`)
        .eq('id', claims.sub)
        .single()

      if (error && status !== 406) throw error

      if (data) {
        setFullname(data.full_name)
        setUsername(data.username)
        setWebsite(data.website)
        setAvatarUrl(data.avatar_url)
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
    <div className="mx-auto max-w-4xl px-4 py-12">
      {/* Header Info */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">Account Settings</h1>
        <p className="mt-2 text-sm text-slate-600">
          Manage your DevConnect developer identity, digital links, and portfolio details.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-12">
        {/* Left Card: Avatar Section */}
        <div className="md:col-span-4 rounded-3xl border border-amber-900/5 bg-white/60 p-6 text-center backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.03)] flex flex-col items-center justify-center">
          <div className="relative group rounded-full p-2 border border-slate-100 bg-amber-50/30">
            <Avatar
              uid={claims?.sub ?? null}
              url={avatar_url}
              size={140}
              onUpload={(url) => {
                setAvatarUrl(url)
                updateProfile({ fullname, username, website, avatar_url: url })
              }}
            />
          </div>
          <h2 className="mt-4 font-semibold text-slate-800">{fullname || 'Developer Portfolio'}</h2>
          <p className="text-xs text-slate-500 mt-1">@{username || 'username'}</p>
        </div>

        {/* Right Card: Main Settings Form */}
        <div className="md:col-span-8 rounded-3xl border border-amber-900/5 bg-white/60 p-8 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.03)]">
          <div className="space-y-6">
            
            {/* Account Email (Read-Only Container) */}
            <div>
              <label htmlFor="email" className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">
                Account Email
              </label>
              <input
                id="email"
                type="text"
                value={claims?.email ?? ''}
                disabled
                className="w-full rounded-xl border border-slate-200/60 bg-slate-50/50 px-4 py-3 text-sm text-slate-500 outline-none cursor-not-allowed"
              />
            </div>

            {/* Full Name Input */}
            <div>
              <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">
                Full Name
              </label>
              <input
                id="fullName"
                type="text"
                placeholder="e.g. Michael Bacha"
                value={fullname || ''}
                onChange={(e) => setFullname(e.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-white/80 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-blue-500 focus:bg-white"
              />
            </div>

            {/* Username Input */}
            <div>
              <label htmlFor="username" className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">
                Username
              </label>
              <input
                id="username"
                type="text"
                placeholder="username"
                value={username || ''}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-white/80 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-blue-500 focus:bg-white"
              />
            </div>

            {/* Portfolio Website Input */}
            <div>
              <label htmlFor="website" className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">
                Portfolio URL / Website
              </label>
              <input
                id="website"
                type="url"
                placeholder="https://yourportfolio.dev"
                value={website || ''}
                onChange={(e) => setWebsite(e.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-white/80 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-blue-500 focus:bg-white"
              />
            </div>
               {message && (
  <div
    className={`
      rounded-xl px-4 py-3 text-sm font-medium
      ${
        messageType === 'success'
          ? 'bg-green-50 text-green-700'
          : 'bg-red-50 text-red-700'
      }
    `}
  >
    {message}
  </div>
)}
            {/* Form Actions Panel */}
            <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between gap-4">
              <form action="/auth/signout" method="post">
                <button 
                  type="submit"
                  className="rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-xs font-semibold text-slate-600 transition hover:bg-slate-50 hover:text-red-600"
                >
                  Sign out
                </button>
              </form>

             <button
  onClick={() => updateProfile({ fullname, username, website, avatar_url })}
  disabled={saving || !claims?.sub}
  className="rounded-xl bg-blue-600 px-6 py-2.5 text-xs font-semibold text-white transition hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed min-w-[120px]"
>
  {saving ? 'Saving...' : 'Save Changes'}
</button>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
