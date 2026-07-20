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

export default function DeveloperProjects({
  projects,
}: Props) {
  return (
    // <section className="rounded-3xl bg-white p-6 transition-all duration-300 ease-out shadow-sm">
      <section className="rounded-3xl bg-white p-6 shadow-sm transition-all duration-300 ease-out hover:scale-[1.01]">
      <h2 className="mb-6 text-2xl font-bold">
        Featured Projects
      </h2>

      {projects.length === 0 ? (
        <div className="rounded-2xl border border-dashed p-10 text-center text-slate-500">
          No projects yet.
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.id}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-lg"
            >
              {project.image_url ? (
                <img
                  src={project.image_url}
                  alt={project.title}
                  className="h-52 w-full object-cover"
                />
              ) : (
                <div className="flex h-52 items-center justify-center bg-slate-100 text-slate-400">
                  No Image
                </div>
              )}

              <div className="space-y-4 p-5">
                <h3 className="text-xl font-semibold">
                  {project.title}
                </h3>

                <p className="text-sm text-slate-600">
                  {project.description}
                </p>

                <div className="flex gap-3">
                  {project.github_url && (
                    <a
                      href={project.github_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg border px-4 py-2 text-sm hover:bg-slate-100"
                    >
                      GitHub
                    </a>
                  )}

                  {project.live_url && (
                    <a
                      href={project.live_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg bg-amber-500 px-4 py-2 text-sm text-white hover:bg-amber-600"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

    </section>
  )
}