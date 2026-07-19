'use client'

import ProjectCard from './ProjectCard'

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
  projects: Project[]
  onEdit: (project: Project) => void
  onDelete: (project: Project) => void
}

export default function ProjectGrid({
  projects,
  onEdit,
  onDelete
}: Props) {

  return (
    <div
      className="
      grid
      gap-6
      sm:grid-cols-2
      lg:grid-cols-3
      "
    >
      {projects.map((project)=>(
        <ProjectCard
  key={project.id}
  project={project}
  onEdit={onEdit}
  onDelete={onDelete}
/>
      ))}
    </div>
  )
}