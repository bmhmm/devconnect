import {
  FaGithub,
  FaLinkedin,
  FaGlobe,
} from "react-icons/fa"

type Props = {
  github?: string | null
  linkedin?: string | null
  portfolio?: string | null
}

export default function SocialLinks({
  github,
  linkedin,
  portfolio,
}: Props) {
  const links = [
    {
      label: "GitHub",
      icon: <FaGithub />,
      url: github,
    },
    {
      label: "LinkedIn",
      icon: <FaLinkedin />,
      url: linkedin,
    },
    {
      label: "Portfolio",
      icon: <FaGlobe />,
      url: portfolio,
    },
  ].filter((item) => item.url)

  if (links.length === 0) return null

  return (
    <div className="mt-8 border-t border-amber-700/40 pt-6">

      <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white/70">
        Links
      </h3>

      <div className="space-y-3">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.url!}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex
              items-center
              gap-3
              rounded-xl
              bg-white/10
              px-4
              py-3
              text-white
              transition
              hover:bg-white/20
            "
          >
            {link.icon}

            <span>{link.label}</span>
          </a>
        ))}
      </div>

    </div>
  )
}