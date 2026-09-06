import type { Project } from "#/types/project"
import { Link } from "@tanstack/react-router"

type ProjectCardProps = {
    project: Project
}

function ProjectCard({ project }: ProjectCardProps) {
    const image = project.images?.[0]

    return (
        <Link
            to={"/projects/$projectCat/$projectId"}
            params={{ projectCat: project.projectCat, projectId: project.id }}
            className="flex w-40 lg:w-70 aspect-square object-cover items-center justify-center text-center rounded-lg bg-custom-white bg-center bg-cover hover:scale-105 transition-transform duration-300 ease-in-out"
            style={{
                backgroundImage: image ? `url(${image})` : undefined,
            }}>
            {image ? '' : project.title}
        </Link>
    )
}

export default ProjectCard