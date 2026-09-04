import CustomLink from '#/components/link'
import { Project } from '#/types/project'
import { createFileRoute, Outlet, useRouterState } from '@tanstack/react-router'

export const Route = createFileRoute('/projects')({
  component: RouteComponent,
})

export const projectCategories = {
  'editorial': {
    title: 'Editorial',
    projects: [
        new Project(
            'project-1',
            'editorial',
            'Project 1',
            'project-1.jpg',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor adipisci, minus, quo fuga laborum dolores nobis modi enim ab soluta qui exercitationem labore asperiores quisquam dicta deleniti incidunt, cum facere.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor adipisci, minus, quo fuga laborum dolores nobis modi enim ab soluta qui exercitationem labore asperiores quisquam dicta deleniti incidunt, cum facere.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor adipisci, minus, quo fuga laborum dolores nobis modi enim ab soluta qui exercitationem labore asperiores quisquam dicta deleniti incidunt, cum facere.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor adipisci, minus, quo fuga laborum dolores nobis modi enim ab soluta qui exercitationem labore asperiores quisquam dicta deleniti incidunt, cum facere.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor adipisci, minus, quo fuga laborum dolores nobis modi enim ab soluta qui exercitationem labore asperiores quisquam dicta deleniti incidunt, cum facere.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor adipisci, minus, quo fuga laborum dolores nobis modi enim ab soluta qui exercitationem labore asperiores quisquam dicta deleniti incidunt, cum facere.Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        ),
        new Project(
            'project-2',
            'editorial',
            'Project 2',
            'project-2.jpg',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor adipisci, minus, quo fuga laborum dolores nobis modi enim ab soluta qui exercitationem labore asperiores quisquam dicta deleniti incidunt, cum facere.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor adipisci, minus, quo fuga laborum dolores nobis modi enim ab soluta qui exercitationem labore asperiores quisquam dicta deleniti incidunt, cum facere.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor adipisci, minus, quo fuga laborum dolores nobis modi enim ab soluta qui exercitationem labore asperiores quisquam dicta deleniti incidunt, cum facere.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor adipisci, minus, quo fuga laborum dolores nobis modi enim ab soluta qui exercitationem labore asperiores quisquam dicta deleniti incidunt, cum facere.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor adipisci, minus, quo fuga laborum dolores nobis modi enim ab soluta qui exercitationem labore asperiores quisquam dicta deleniti incidunt, cum facere.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor adipisci, minus, quo fuga laborum dolores nobis modi enim ab soluta qui exercitationem labore asperiores quisquam dicta deleniti incidunt, cum facere.Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        ),
    ],
  },
  'trend-research': {
    title: 'Trend Research',
    projects: [] as Project[],
  },
  'brand-communications': {
    title: 'Brand Communications',
    projects: [
        new Project(
            'project-3',
            'brand-communications',
            'Project 3',
            'project-3.jpg',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor adipisci, minus, quo fuga laborum dolores nobis modi enim ab soluta qui exercitationem labore asperiores quisquam dicta deleniti incidunt, cum facere.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor adipisci, minus, quo fuga laborum dolores nobis modi enim ab soluta qui exercitationem labore asperiores quisquam dicta deleniti incidunt, cum facere.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor adipisci, minus, quo fuga laborum dolores nobis modi enim ab soluta qui exercitationem labore asperiores quisquam dicta deleniti incidunt, cum facere.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor adipisci, minus, quo fuga laborum dolores nobis modi enim ab soluta qui exercitationem labore asperiores quisquam dicta deleniti incidunt, cum facere.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor adipisci, minus, quo fuga laborum dolores nobis modi enim ab soluta qui exercitationem labore asperiores quisquam dicta deleniti incidunt, cum facere.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor adipisci, minus, quo fuga laborum dolores nobis modi enim ab soluta qui exercitationem labore asperiores quisquam dicta deleniti incidunt, cum facere.Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        ),
        new Project(
            'project-4',
            'brand-communications',
            'Project 4',
            'project-4.jpg',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor adipisci, minus, quo fuga laborum dolores nobis modi enim ab soluta qui exercitationem labore asperiores quisquam dicta deleniti incidunt, cum facere.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor adipisci, minus, quo fuga laborum dolores nobis modi enim ab soluta qui exercitationem labore asperiores quisquam dicta deleniti incidunt, cum facere.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor adipisci, minus, quo fuga laborum dolores nobis modi enim ab soluta qui exercitationem labore asperiores quisquam dicta deleniti incidunt, cum facere.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor adipisci, minus, quo fuga laborum dolores nobis modi enim ab soluta qui exercitationem labore asperiores quisquam dicta deleniti incidunt, cum facere.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor adipisci, minus, quo fuga laborum dolores nobis modi enim ab soluta qui exercitationem labore asperiores quisquam dicta deleniti incidunt, cum facere.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor adipisci, minus, quo fuga laborum dolores nobis modi enim ab soluta qui exercitationem labore asperiores quisquam dicta deleniti incidunt, cum facere.Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        ),
        new Project(
            'project-5',
            'brand-communications',
            'Project 5',
            'project-5.jpg',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor adipisci, minus, quo fuga laborum dolores nobis modi enim ab soluta qui exercitationem labore asperiores quisquam dicta deleniti incidunt, cum facere.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor adipisci, minus, quo fuga laborum dolores nobis modi enim ab soluta qui exercitationem labore asperiores quisquam dicta deleniti incidunt, cum facere.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor adipisci, minus, quo fuga laborum dolores nobis modi enim ab soluta qui exercitationem labore asperiores quisquam dicta deleniti incidunt, cum facere.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor adipisci, minus, quo fuga laborum dolores nobis modi enim ab soluta qui exercitationem labore asperiores quisquam dicta deleniti incidunt, cum facere.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor adipisci, minus, quo fuga laborum dolores nobis modi enim ab soluta qui exercitationem labore asperiores quisquam dicta deleniti incidunt, cum facere.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor adipisci, minus, quo fuga laborum dolores nobis modi enim ab soluta qui exercitationem labore asperiores quisquam dicta deleniti incidunt, cum facere.Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        ),
        new Project(
            'project-6',
            'brand-communications',
            'Project 6',
            'project-6.jpg',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor adipisci, minus, quo fuga laborum dolores nobis modi enim ab soluta qui exercitationem labore asperiores quisquam dicta deleniti incidunt, cum facere.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor adipisci, minus, quo fuga laborum dolores nobis modi enim ab soluta qui exercitationem labore asperiores quisquam dicta deleniti incidunt, cum facere.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor adipisci, minus, quo fuga laborum dolores nobis modi enim ab soluta qui exercitationem labore asperiores quisquam dicta deleniti incidunt, cum facere.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor adipisci, minus, quo fuga laborum dolores nobis modi enim ab soluta qui exercitationem labore asperiores quisquam dicta deleniti incidunt, cum facere.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor adipisci, minus, quo fuga laborum dolores nobis modi enim ab soluta qui exercitationem labore asperiores quisquam dicta deleniti incidunt, cum facere.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor adipisci, minus, quo fuga laborum dolores nobis modi enim ab soluta qui exercitationem labore asperiores quisquam dicta deleniti incidunt, cum facere.Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        ),
        new Project(
            'project-7',
            'brand-communications',
            'Project 7',
            'project-7.jpg',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor adipisci, minus, quo fuga laborum dolores nobis modi enim ab soluta qui exercitationem labore asperiores quisquam dicta deleniti incidunt, cum facere.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor adipisci, minus, quo fuga laborum dolores nobis modi enim ab soluta qui exercitationem labore asperiores quisquam dicta deleniti incidunt, cum facere.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor adipisci, minus, quo fuga laborum dolores nobis modi enim ab soluta qui exercitationem labore asperiores quisquam dicta deleniti incidunt, cum facere.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor adipisci, minus, quo fuga laborum dolores nobis modi enim ab soluta qui exercitationem labore asperiores quisquam dicta deleniti incidunt, cum facere.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor adipisci, minus, quo fuga laborum dolores nobis modi enim ab soluta qui exercitationem labore asperiores quisquam dicta deleniti incidunt, cum facere.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor adipisci, minus, quo fuga laborum dolores nobis modi enim ab soluta qui exercitationem labore asperiores quisquam dicta deleniti incidunt, cum facere.Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        ),
    ],
  },
  'brand-identity': {
    title: 'Brand Identity',
    projects: [] as Project[],
  },
}

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
