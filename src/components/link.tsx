import { Link } from "@tanstack/react-router"

type LinkProps = {
  label: string
  href: string
  external?: boolean
  params?: Record<string, string>
  icon?: string
}

function CustomLink ({ label, href, external = false, params, icon }: LinkProps) {
    const className = "text-custom-black hover:text-custom-white transition-colors duration-200 ease-in-out"
    const content = icon ? (
      <>
          <span className="material-symbols-outlined text-3xl md:hidden" aria-hidden="true">{icon}</span>
          <span className="hidden md:inline">{label}</span>
      </>
    ) : label

    if (external) {
        return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={className} aria-label={label} title={label}>
            {content}
        </a>
        )
    }

    return (
    <Link to={href} className={className} activeProps={{ className: "text-custom-white font-bold" }} params={params} aria-label={label} title={label}>
      {content}
    </Link>
  )
}

export default CustomLink