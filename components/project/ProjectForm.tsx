'use client'

import { useEffect, useState } from 'react'
import ProjectImageUpload from './ProjectImageUpload'

export type ProjectFormValues = {
  title: string
  description: string
  github_url: string
  live_url: string
  image_url: string | null
}

type Props = {
  userId: string
  loading: boolean
  initialValues?: ProjectFormValues
  onSubmit: (values: ProjectFormValues) => Promise<void>
}
export default function ProjectForm({
  userId,
  loading,
  initialValues,
  onSubmit,
}: Props){
  const [title, setTitle] = useState(initialValues?.title ?? '')
  const [description, setDescription] = useState(
    initialValues?.description ?? ''
  )
  const [githubUrl, setGithubUrl] = useState(
    initialValues?.github_url ?? ''
  )
  const [liveUrl, setLiveUrl] = useState(
    initialValues?.live_url ?? ''
  )
 const [imageUrl, setImageUrl] = useState(
  initialValues?.image_url ?? null
)


useEffect(() => {
  setTitle(initialValues?.title ?? '')
  setDescription(initialValues?.description ?? '')
  setGithubUrl(initialValues?.github_url ?? '')
  setLiveUrl(initialValues?.live_url ?? '')
  setImageUrl(initialValues?.image_url ?? null)
}, [initialValues])

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

 await onSubmit({
  title,
  description,
  github_url: githubUrl,
  live_url: liveUrl,
  image_url: imageUrl,
})
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Project Title
        </label>
<ProjectImageUpload
  userId={userId}
  imageUrl={imageUrl}
  onUpload={(url) => {
    setImageUrl(url)
  }}
/>

        <input
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="DevConnect"
          className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-amber-500"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Description
        </label>

        <textarea
          rows={5}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Describe your project..."
          className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-amber-500"
        />
      </div>

      <div className="grid gap-5 md:grid-cols-2">

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            GitHub URL
          </label>

          <input
            type="url"
            value={githubUrl}
            onChange={(e) => setGithubUrl(e.target.value)}
            placeholder="https://github.com/..."
            className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-amber-500"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Live Demo URL
          </label>

          <input
            type="url"
            value={liveUrl}
            onChange={(e) => setLiveUrl(e.target.value)}
            placeholder="https://..."
            className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-amber-500"
          />
        </div>

      </div>

      <button
        type="submit"
        disabled={loading}
        className="rounded-xl bg-amber-500 px-6 py-3 font-semibold text-white transition hover:bg-amber-600 disabled:opacity-50"
      >
        {loading ? 'Saving...' : 'Save Project'}
      </button>

    </form>
  )
}