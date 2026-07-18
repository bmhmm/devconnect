// 'use client'
// import React, { useEffect, useState } from 'react'
// import { createClient } from '@/lib/supabase/client'
// import Image from 'next/image'

// export default function AvatarUploader({
//   uid,
//   url,
//   size,
//   onUpload,
// }: {
//   uid: string | null
//   url: string | null
//   size: number
//   onUpload: (url: string) => void
// }) {
//   const supabase = createClient()
//   const [avatarUrl, setAvatarUrl] = useState<string | null>(url)
//   const [uploading, setUploading] = useState(false)

//   useEffect(() => {
//     async function downloadImage(path: string) {
//       try {
//         const { data, error } = await supabase.storage.from('avatars').download(path)
//         if (error) {
//           throw error
//         }

//         const url = URL.createObjectURL(data)
//         setAvatarUrl(url)
//       } catch (error) {
//         console.log('Error downloading image: ', error)
//       }
//     }

//     if (url) downloadImage(url)
//   }, [url, supabase])

//   const uploadAvatar: React.ChangeEventHandler<HTMLInputElement> = async (event) => {
//     try {
//       setUploading(true)

//       if (!event.target.files || event.target.files.length === 0) {
//         throw new Error('You must select an image to upload.')
//       }

//       const file = event.target.files[0]
//       const fileExt = file.name.split('.').pop()
//       const filePath = `${uid}-${Math.random()}.${fileExt}`

//       const { error: uploadError } = await supabase.storage.from('avatars').upload(filePath, file)

//       if (uploadError) {
//         throw uploadError
//       }

//       onUpload(filePath)
//     } catch (error) {
//       alert('Error uploading avatar!')
//     } finally {
//       setUploading(false)
//     }
//   }

//   return (
//     <div>
//       {avatarUrl ? (
//         <Image
//           width={size}
//           height={size}
//           src={avatarUrl}
//           alt="Avatar"
//           className="avatar image"
//           style={{ height: size, width: size }}
//         />
//       ) : (
//         <div className="avatar no-image" style={{ height: size, width: size }} />
//       )}
//       <div style={{ width: size }}>
//         <label className="button primary block" htmlFor="single">
//           {uploading ? 'Uploading ...' : 'Upload'}
//         </label>
//         <input
//           style={{
//             visibility: 'hidden',
//             position: 'absolute',
//           }}
//           type="file"
//           id="single"
//           accept="image/*"
//           onChange={uploadAvatar}
//           disabled={uploading}
//         />
//       </div>
//     </div>
//   )
// }



'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { UploadCloud } from 'lucide-react'
import { createClient } from '@/lib/supabase/client'

interface AvatarUploaderProps {
  uid: string | null
  url: string | null
  size: number
  onUpload: (url: string) => void
}

export default function AvatarUploader({
  uid,
  url,
  size,
  onUpload,
}: AvatarUploaderProps) {
  const supabase = createClient()

  const [avatarUrl, setAvatarUrl] = useState<string | null>(url)
  const [uploading, setUploading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function downloadImage(path: string) {
      try {
        const { data, error } = await supabase.storage
          .from('avatars')
          .download(path)

        if (error) throw error

        const objectUrl = URL.createObjectURL(data)

        setAvatarUrl(objectUrl)
      } catch (error) {
        console.error('Avatar download error:', error)
      }
    }

    if (url) {
      downloadImage(url)
    }
  }, [url, supabase])

  async function uploadAvatar(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    try {
      setError(null)

      if (!uid) {
        throw new Error('User not authenticated')
      }

      const file = event.target.files?.[0]

      if (!file) return

      // Validate file type
      if (!file.type.startsWith('image/')) {
        throw new Error('Please upload an image file')
      }

      // Validate size (5MB)
      if (file.size > 5 * 1024 * 1024) {
        throw new Error('Image must be smaller than 5MB')
      }

      setUploading(true)

      const fileExt = file.name.split('.').pop()

      const filePath = `${uid}/${Date.now()}.${fileExt}`

      const { error: uploadError } = await supabase.storage
        .from('avatars')
        .upload(filePath, file)

      if (uploadError) {
        throw uploadError
      }

      // Instant preview
      const previewUrl = URL.createObjectURL(file)

      setAvatarUrl(previewUrl)

      onUpload(filePath)

    } catch (error) {
      console.error(error)

      setError(
        error instanceof Error
          ? error.message
          : 'Something went wrong'
      )
    } finally {
      setUploading(false)
    }
  }


  return (
    <div className="flex flex-col items-center gap-4">

      <div
        className="overflow-hidden rounded-full border-4 border-white shadow-lg bg-amber-50"
        style={{
          width: size,
          height: size,
        }}
      >
        {avatarUrl ? (
          <Image
            src={avatarUrl}
            alt="Profile avatar"
            width={size}
            height={size}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-sm text-slate-400">
            No Image
          </div>
        )}
      </div>


      <label
        htmlFor="avatar-upload"
        className={`
          flex cursor-pointer items-center gap-2 rounded-xl
          px-5 py-2.5 text-sm font-semibold
          transition
          ${
            uploading
              ? 'cursor-not-allowed bg-slate-200 text-slate-400'
              : 'bg-amber-500 text-white hover:bg-amber-600'
          }
        `}
      >
        <UploadCloud size={18} />

        {uploading ? 'Uploading...' : 'Upload Photo'}

        <input
          id="avatar-upload"
          type="file"
          accept="image/*"
          className="hidden"
          onChange={uploadAvatar}
          disabled={uploading}
        />
      </label>


      {error && (
        <p className="text-center text-sm text-red-500">
          {error}
        </p>
      )}

    </div>
  )
}