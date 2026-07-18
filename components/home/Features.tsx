import {
  UserRound,
  FolderGit2,
  Users,
  Sparkles,
} from "lucide-react";

const features = [
  {
    icon: UserRound,
    title: "Developer Profiles",
    description:
      "Build a professional profile highlighting your experience, skills, and achievements.",
  },
  {
    icon: FolderGit2,
    title: "Project Showcase",
    description:
      "Showcase your best projects with live demos, GitHub repositories, and technology stacks.",
  },
  {
    icon: Users,
    title: "Meaningful Networking",
    description:
      "Connect with developers, grow your network, and discover exciting collaboration opportunities.",
  },
  {
    icon: Sparkles,
    title: "Skills & Expertise",
    description:
      "Display your technical skills and stand out to recruiters and fellow developers.",
  },
];

export default function Features() {
  return (
    <section className="bg-[var(--color-background)] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-semibold uppercase tracking-[0.25em] text-amber-700">
            Features
          </p>

          <h2 className="mt-4 text-4xl font-bold text-[var(--color-text)] md:text-5xl">
            Everything a developer needs.
          </h2>

          <p className="mt-6 text-lg leading-8 text-[var(--color-text-light)]">
            DevConnect helps developers build a professional identity,
            showcase their work, and create valuable connections.
          </p>
        </div>

        <div className="mt-20 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-amber-700/10"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-600 to-orange-500 text-white">
                  <Icon size={28} />
                </div>

                <h3 className="mt-8 text-xl font-semibold text-[var(--color-text)]">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-[var(--color-text-light)]">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}