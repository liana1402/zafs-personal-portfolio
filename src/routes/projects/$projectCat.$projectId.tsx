import { createFileRoute, Link } from '@tanstack/react-router'
import { projectCategories } from '../projects'
import CustomLink from '#/components/link'

export const Route = createFileRoute('/projects/$projectCat/$projectId')({
  component: RouteComponent,
})

function RouteComponent() {
  const { projectId } = Route.useParams()
  const project = Object.values(projectCategories).flatMap((cat) => cat.projects).find((p) => p.id === projectId)
  const category = projectCategories[project?.projectCat as keyof typeof projectCategories]

  return (
    <div className="flex flex-col lg:flex-row pt-25 p-5 lg:p-25 pb-0 gap-20 lg:gap-30 min-h-body-height">
      <div className="lg:pt-10">
        <div className='flex items-center'>
          <Link to=".." >
            <span className="material-symbols-outlined text-5xl text-dark-green hover:text-custom-white cursor:pointer">
              arrow_left
            </span>
          </Link>
          <p className='text-xl font-bold font-mono text-dark-green'>{category.title ?? 'Unknown category'}</p>
        </div>
        <ul className="pl-5 pt-3">
          {Object.entries(category.projects).map(([key, project]) => (
            <li key={key}>
                <CustomLink label={project.title} href="/projects/$projectCat/$projectId" params={{ projectCat: project.projectCat, projectId: project.id }} />
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h1 className='text-4xl font-bold font-mono text-dark-green'>{project?.title}</h1>
        <div className="flex flex-col lg:flex-row gap-15 pt-5 items-center lg:items-start">
          <div className='justify-items-center items-center max-w-1/2 max-h-fit'>
            <div className='flex flex-row'>
              <button>
                <span className="material-symbols-outlined text-5xl">
                  chevron_left
                </span>
              </button>
              <div className='w-80 h-120 items-center bg-custom-white rounded-lg'></div>
              <button>
                <span className="material-symbols-outlined text-5xl">
                  chevron_right
                </span>
              </button>
            </div>
            <p className='text-3xl font-bold'>...</p>
          </div>
          <p className='lg:max-w-1/2'>{project?.description}</p>
        </div>
      </div>
    </div>
  )
}
