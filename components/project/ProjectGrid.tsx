'use client'

import ProjectCard from './ProjectCard'

type Project = {
  id: string
  title: string
  description: string | null
  image_url: string | null
  github_url: string | null
  live_url: string | null
}

type Props = {
  projects: Project[]
}

export default function ProjectGrid({
  projects,
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
        />
      ))}
    </div>
  )
}