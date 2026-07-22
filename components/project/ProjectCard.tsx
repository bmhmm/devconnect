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
  created_at: string
}
  
// type Project = {
//   id: string
//   title: string
//   description: string | null
//   image_url: string | null
//   github_url: string | null
//   live_url: string | null
//   created_at: string

//   profiles: {
//     full_name: string | null
//     username: string | null
//     avatar_url: string | null
//   } | null
// }


// type Props = {
//   project: Project
//   onEdit: (project: Project) => void
//   onDelete: (project: Project) => void
// }
type Props = {
  project: Project
  onEdit?: (project: Project) => void
  onDelete?: (project: Project) => void
}

export default function ProjectCard({
  project,
  onEdit,
  onDelete,
}: Props){
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
       {/* <div className="mt-4 flex gap-3">

  <button
    type="button"
    onClick={() => onEdit(project)}
    className="
      flex-1
      rounded-xl
      border
      border-slate-200
      py-2
      text-sm
      font-medium
      transition
      hover:bg-slate-100
    "
  >
    Edit
  </button>

  <button
    type="button"
    onClick={() => onDelete(project)}
    className="
      flex-1
      rounded-xl
      bg-red-500
      py-2
      text-sm
      font-medium
      text-white
      transition
      hover:bg-red-600
    "
  >
    Delete
  </button>

</div> */}
{(onEdit || onDelete) && (

  <div className="mt-4 flex gap-3">

    {onEdit && (

      <button
        type="button"
        onClick={() => onEdit(project)}
        className="
          flex-1
          rounded-xl
          border
          border-slate-200
          py-2
          text-sm
          font-medium
          transition
          hover:bg-slate-100
        "
      >
        Edit
      </button>

    )}

    {onDelete && (

      <button
        type="button"
        onClick={() => onDelete(project)}
        className="
          flex-1
          rounded-xl
          bg-red-500
          py-2
          text-sm
          font-medium
          text-white
          transition
          hover:bg-red-600
        "
      >
        Delete
      </button>

    )}

  </div>

)}
      </div>

    </div>
  )
}