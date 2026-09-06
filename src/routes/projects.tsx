import CustomLink from '#/components/link'
import { groupedProjects } from '#/data/projects'
import { createFileRoute, Outlet, useRouterState } from '@tanstack/react-router'

export const Route = createFileRoute('/projects')({
  component: RouteComponent,
})

export const projectCategories = groupedProjects

function RouteComponent() {
    const isProjectDetail = useRouterState({
        select: (state) => state.matches.some(
            (match) => match.routeId === '/projects/$projectCat/$projectId'
        ),
    })

    if (isProjectDetail) {
        return <Outlet />
    }

  return (
        <div className="pt-25 lg:p-25 min-h-body-height">
            <h1 className="text-4xl font-bold text-dark-green pl-5">Projects</h1>
            <ul className="pl-10 pt-3">
                {Object.entries(projectCategories).map(([key, category]) => (
                    <li key={key}>
                        <CustomLink label={category.title} href="/projects/$projectCat" params={{ projectCat: key }} />
                    </li>
                ))}
            </ul>
        <Outlet />
        </div>
    )
}
