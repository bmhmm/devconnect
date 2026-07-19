'use client'

import { useCallback, useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import ProjectForm, { ProjectFormValues } from './ProjectForm'
import ProjectGrid from './ProjectGrid'

type Project = {
  id: string
  title: string
  description: string | null
  image_url: string | null
  github_url: string | null
  live_url: string | null
  created_at: string
}

type Props = {
  userId: string
}

export default function ProjectManager({ userId }: Props) {
  const supabase = createClient()

  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
const [saving, setSaving] = useState(false)

  const loadProjects = useCallback(async () => {
    setLoading(true)

    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false })

    if (error) {
      console.error(error)
    } else {
      setProjects(data ?? [])
    }

    setLoading(false)
  }, [supabase, userId])

  useEffect(() => {
    loadProjects()
  }, [loadProjects])

  async function createProject(values: ProjectFormValues) {
  try {
    setSaving(true)

const { error } = await supabase.from('projects').insert({
  user_id: userId,
  title: values.title,
  description: values.description,
  github_url: values.github_url,
  live_url: values.live_url,
  image_url: values.image_url,
})

    if (error) throw error

    setShowForm(false)

    await loadProjects()
  } catch (error) {
    console.error('Error creating project:', error)
  } finally {
    setSaving(false)
  }
}

  return (
    <section className="space-y-6">

      <div className="flex items-center justify-between">

        <div>
          <h2 className="text-xl font-semibold text-slate-900">
            Projects
          </h2>

          <p className="text-sm text-slate-500">
            Showcase your best work.
          </p>
        </div>

        <button
  onClick={() => setShowForm((prev) => !prev)}
  className="
    rounded-xl
    bg-amber-500
    px-5
    py-2.5
    text-sm
    font-semibold
    text-white
    transition
    hover:bg-amber-600
  "
>
  {showForm ? 'Close' : 'Add Project'}
</button>

      </div>
        {showForm && (
  <div className="rounded-2xl border border-slate-200 bg-white p-6">
    <ProjectForm
  userId={userId}
  loading={saving}
  onSubmit={createProject}
/>
  </div>
)}
      {loading ? (
        <div className="rounded-2xl border border-slate-200 p-8 text-center text-slate-500">
          Loading projects...
        </div>
      ) : projects.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-slate-300 p-10 text-center">
          <h3 className="font-semibold text-slate-800">
            No projects yet
          </h3>
          
          <p className="mt-2 text-sm text-slate-500">
            Add your first project to showcase your work.
          </p>
        </div>
      ) : (
        <ProjectGrid projects={projects} />
      )}

    </section>
  )
}