'use client'
import { FaGithub } from 'react-icons/fa'
import { ExternalLink } from 'lucide-react' // Keep this if ExternalLink works


type Project = {
  id: string
  title: string
  description: string | null
  image_url: string | null
  github_url: string | null
  live_url: string | null
}

type Props = {
  project: Project
}

export default function ProjectCard({ project }: Props) {
  return (
    <div
      className="
      overflow-hidden
      rounded-3xl
      border
      border-amber-900/10
      bg-white
      shadow-sm
      transition
      hover:-translate-y-1
      hover:shadow-lg
      "
    >

      {/* Image */}
      <div className="
        flex
        h-48
        items-center
        justify-center
        bg-amber-50
      ">
        {project.image_url ? (
          <img
            src={project.image_url}
            alt={project.title}
            className="
              h-full
              w-full
              object-cover
            "
          />
        ) : (
          <span className="text-sm text-slate-400">
            No image
          </span>
        )}
      </div>


      {/* Content */}
      <div className="space-y-4 p-6">

        <h3 className="
          text-lg
          font-semibold
          text-slate-900
        ">
          {project.title}
        </h3>


        <p className="
          line-clamp-3
          text-sm
          text-slate-600
        ">
          {project.description || 'No description provided.'}
        </p>


        <div className="flex gap-3">

          {project.github_url && (
            <a
              href={project.github_url}
              target="_blank"
              className="
                flex
                items-center
                gap-2
                rounded-xl
                border
                px-3
                py-2
                text-sm
                transition
                hover:bg-slate-50
              "
            >
              <FaGithub size={16} />
              GitHub
            </a>
          )}


          {project.live_url && (
            <a
              href={project.live_url}
              target="_blank"
              className="
                flex
                items-center
                gap-2
                rounded-xl
                bg-amber-500
                px-3
                py-2
                text-sm
                text-white
                transition
                hover:bg-amber-600
              "
            >
              <ExternalLink size={16}/>
              Live
            </a>
          )}

        </div>

      </div>

    </div>
  )
}