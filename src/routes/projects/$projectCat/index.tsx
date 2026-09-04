import ProjectCard from '#/components/project-card'
import { projectCategories } from '#/routes/projects'
import type { Project } from '#/types/project'
import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/projects/$projectCat/')({
  component: RouteComponent,
})

function RouteComponent() {
  const { projectCat } = Route.useParams()
  const category = projectCategories[projectCat as keyof typeof projectCategories] ?? {
    title: 'the selected category is not available',
    projects: [],
  }

  return (
    <div className="pt-20">
      <h2 className="pl-5 text-2xl font-bold font-mono text-dark-green">
        Projects in {category.title}
      </h2>
      <div className="flex flex-row gap-5 flex-wrap justify-center mt-10">
        {category.projects.map((project: Project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <Outlet />
    </div>
  )
}
