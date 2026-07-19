// 'use client'

// import { useState } from 'react'
// import Image from 'next/image'
// import { createClient } from '@/lib/supabase/client'
// import { Upload } from 'lucide-react'


// type Props = {
//   userId: string
//   imageUrl?: string | null
//   onUpload: (url: string) => void
// }


// export default function ProjectImageUpload({
//   userId,
//   imageUrl,
//   onUpload,
// }: Props) {

//   const supabase = createClient()

//   const [preview, setPreview] = useState(imageUrl ?? null)
//   const [uploading, setUploading] = useState(false)


//   async function uploadImage(
//     event: React.ChangeEvent<HTMLInputElement>
//   ) {

//     try {

//       setUploading(true)


//       const file = event.target.files?.[0]

//       if (!file) return


//       const extension = file.name.split('.').pop()

//       const fileName =
//         `${userId}-${Date.now()}.${extension}`


//       const { error } = await supabase.storage
//         .from('project-images')
//         .upload(fileName, file)


//       if(error) throw error



//       const {
//         data
//       } = supabase.storage
//         .from('project-images')
//         .getPublicUrl(fileName)



//       setPreview(data.publicUrl)

//       onUpload(data.publicUrl)


//     } catch(error){

//       console.error(
//         "Image upload failed:",
//         error
//       )

//     } finally {

//       setUploading(false)

//     }

//   }



//   return (

//     <div className="space-y-4">


//       <div
//         className="
//         relative
//         flex
//         h-48
//         items-center
//         justify-center
//         overflow-hidden
//         rounded-2xl
//         border
//         border-dashed
//         border-slate-300
//         bg-slate-50
//         "
//       >

//         {
//           preview ? (

//             <Image
//               src={preview}
//               alt="Project preview"
//               fill
//               className="object-cover"
//             />

//           ) : (

//             <div className="flex flex-col items-center text-slate-400">

//               <Upload size={28}/>

//               <span className="mt-2 text-sm">
//                 Upload project cover
//               </span>

//             </div>

//           )
//         }

//       </div>



//       <label
//         className="
//         inline-flex
//         cursor-pointer
//         items-center
//         rounded-xl
//         bg-amber-500
//         px-5
//         py-3
//         text-sm
//         font-semibold
//         text-white
//         transition
//         hover:bg-amber-600
//         "
//       >

//         {
//           uploading
//           ? "Uploading..."
//           : "Choose Image"
//         }


//         <input
//           type="file"
//           accept="image/*"
//           hidden
//           onChange={uploadImage}
//           disabled={uploading}
//         />

//       </label>


//     </div>

//   )

// }




'use client'
import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { FaImage } from 'react-icons/fa' // Clean up to date icon

type Props = {
  userId: string
  imageUrl?: string | null
  onUpload: (url: string) => void
}

export default function ProjectImageUpload({
  userId,
  imageUrl,
  onUpload,
}: Props) {
  const supabase = createClient()
  const [uploading, setUploading] = useState(false)

async function uploadImage(event: React.ChangeEvent<HTMLInputElement>) {
  try {
    setUploading(true)

    if (!event.target.files || event.target.files.length === 0) {
      throw new Error('You must select an image to upload.')
    }

    const file = event.target.files[0]
    
    // Get the extension and clean it up
    const fileExt = file.name.split('.').pop()?.trim() || 'png'
    
    // FIX: Removed the empty space after the dot completely
    const fileName = `${userId}-${Date.now()}.${fileExt}`
    
    console.log('Target Bucket: project-images')
    console.log('Generated Filename:', fileName)
    console.log('File Details:', { type: file.type, size: file.size })

    // 1. Upload file to Supabase Storage
    const { data: uploadData, error: uploadError } = await supabase.storage
      .from('project-images')
      .upload(fileName, file, {
        cacheControl: '3600',
        upsert: true,
      })

    if (uploadError) {
      console.error('Supabase Storage SDK Error Object:', uploadError)
      throw uploadError
    }

    console.log('Upload Successful. Metadata:', uploadData)

    // 2. Retrieve Public URL directly
    const { data } = supabase.storage
      .from('project-images')
      .getPublicUrl(fileName)

    if (!data?.publicUrl) {
      throw new Error('Failed to retrieve public URL.')
    }

    console.log('Generated Public CDN URL:', data.publicUrl)

    // Pass the absolute clean URL string up to the parent component form state
    onUpload(data.publicUrl)
    
  } catch (error: any) {
    console.error('Final Caught Exception Context:', error)
    alert(`Upload failed: ${error.message || 'Check browser dev console for details.'}`)
  } finally {
    setUploading(false)
  }
}

  return (
    <div className="flex flex-col items-center gap-4">
      <label 
        htmlFor="project-image-input" 
        className="flex h-40 w-full max-w-md cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50/50 transition hover:border-blue-500 hover:bg-white"
      >
        {imageUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img 
            src={imageUrl} 
            alt="Project Showcase" 
            className="h-full w-full rounded-2xl object-cover"
          />
        ) : (
          <div className="flex flex-col items-center gap-2 text-slate-400">
            <FaImage className="h-8 w-8" />
            <span className="text-xs font-medium">{uploading ? 'Uploading...' : 'Upload Image'}</span>
          </div>
        )}
        <input
          id="project-image-input"
          type="file"
          accept="image/*"
          onChange={uploadImage}
          disabled={uploading}
          className="hidden"
        />
      </label>
    </div>
  )
}