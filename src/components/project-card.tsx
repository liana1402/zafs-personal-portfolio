import type { Project } from "#/types/project"
import { Link } from "@tanstack/react-router"

type ProjectCardProps = {
    project: Project
}

function ProjectCard({ project }: ProjectCardProps) {
    return (
        <Link to={"/projects/$projectCat/$projectId"} params={{ projectCat: project.projectCat, projectId: project.id }} className="w-40 lg:w-70 aspect-square items-center text-center bg-custom-white rounded-lg">
            {project.title}
        </Link>
    )
}

export default ProjectCard