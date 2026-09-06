import { defineCollection, defineConfig } from '@content-collections/core'
import matter from 'gray-matter'
import { z } from 'zod'

function extractFrontMatter(content: string) {
    const { data } = matter(content)
    return data
}

const projects = defineCollection({
  name: 'projects',
  directory: './src/data', // Directory containing your .md files
  include: '**/*.md',
  schema: z.object({
    category: z.string(),
    title: z.string(),
    images: z.string().array().optional(),
    description: z.string().optional(),
    content: z.string(),
  }),
  transform: ({ content, ...project }) => {
    const frontMatter = extractFrontMatter(content)

    return {
      ...project,
      slug: project._meta.path,
      ...frontMatter
    }
  },
})

export default defineConfig({
  content: [projects],
})