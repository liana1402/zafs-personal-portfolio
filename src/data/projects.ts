import { allProjects } from '../../.content-collections/generated'
import type { Project } from '#/types/project'

const imageUrls = import.meta.glob('./images/*', {
  eager: true,
  import: 'default',
  query: '?url',
}) as Record<string, string>

const projectCategories = {
  'editorial': 'Editorial',
  'trend-research': 'Trend Research',
  'brand-communications': 'Brand Communications',
  'brand-identity': 'Brand Identity',
} as const

export const projects: Project[] = allProjects.map((project) => ({
  id: project._meta.path,
  projectCat: project.category,
  title: project.title,
  images: project.images?.map((image) => imageUrls[`./images/${image}`]),
  description: project.description ?? '',
}))

export const groupedProjects = Object.fromEntries(
  Object.entries(projectCategories).map(([key, title]) => [key, {
    title,
    projects: projects.filter((project) => project.projectCat === key),
  }]),
) as Record<keyof typeof projectCategories, { title: string; projects: Project[] }>
