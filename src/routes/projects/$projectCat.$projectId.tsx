import { createFileRoute, Link } from '@tanstack/react-router'
import { projectCategories } from '../projects'
import CustomLink from '#/components/link'
import { useState } from 'react'

export const Route = createFileRoute('/projects/$projectCat/$projectId')({
  component: RouteComponent,
})

function ImageIndicators({
  imageCount,
  currentImage,
  onSelect,
}: {
  imageCount: number
  currentImage: number
  onSelect: (imageIndex: number) => void
}) {
  return (
    <div className="flex items-center justify-center gap-2 pt-3" aria-label="Image selection">
      {Array.from({ length: imageCount }, (_, imageIndex) => (
        <button
          key={imageIndex}
          type="button"
          aria-label={`Show image ${imageIndex + 1}`}
          aria-current={currentImage === imageIndex}
          onClick={() => onSelect(imageIndex)}
          className={`h-2 w-2 rounded-full bg-custom-black transition-transform ${
            currentImage === imageIndex
              ? 'scale-150'
              : 'opacity-40 hover:opacity-70'
          }`}
        />
      ))}
    </div>
  )
}

function RouteComponent() {
  const { projectId } = Route.useParams()
  const project = Object.values(projectCategories).flatMap((cat) => cat.projects).find((p) => p.id === projectId)
  const category = projectCategories[project?.projectCat as keyof typeof projectCategories]
  const [currentImage, setCurrentImage] = useState(0);
  
  return (
    <div className="flex flex-col lg:flex-row pt-25 p-5 lg:p-25 pb-0 gap-20 lg:gap-30 min-h-body-height">
      <div className="lg:pt-10">
        <div className='flex items-center'>
          <Link to=".." >
            <span className="material-symbols-outlined text-5xl text-dark-green hover:text-custom-white cursor-pointer">
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
            <div className='flex flex-row items-center max-w-screen'>
              <button className='h-fit' onClick={() => {
                if (currentImage > 0) {
                  setCurrentImage(currentImage - 1)
                }
              }}>
                <span className={`material-symbols-outlined text-5xl text-custom-black ${currentImage > 0 ? 'cursor-pointer hover:text-custom-white' : 'cursor-default opacity-20'}`}>
                  chevron_left
                </span>
              </button>
              <div className='flex w-80 h-120 p-3 items-center justify-center overflow-hidden bg-custom-white rounded-lg'>
                {project?.images?.[currentImage] && (
                  <img
                    src={project.images[currentImage]}
                    alt={`${project.title} image ${currentImage + 1}`}
                    className='max-w-full max-h-full object-contain rounded-lg'
                  />
                )}
              </div>
              <button className='h-fit' onClick={() => {
                if (project?.images && currentImage < project.images.length - 1) {
                  setCurrentImage(currentImage + 1)
                }
              }}>
                <span className={`material-symbols-outlined text-5xl text-custom-black ${(project?.images && currentImage < project.images.length - 1) ? 'cursor-pointer hover:text-custom-white' : 'cursor-default opacity-20'}`}>
                  chevron_right
                </span>
              </button>
            </div>
            <ImageIndicators
              imageCount={project?.images?.length ?? 0}
              currentImage={currentImage}
              onSelect={setCurrentImage}
            />
          </div>
          <p className='lg:max-w-1/2'>{project?.description}</p>
        </div>
      </div>
    </div>
  )
}
