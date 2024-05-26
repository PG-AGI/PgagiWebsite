import fs from 'fs'
import path from 'path'
import { compileMDX } from 'next-mdx-remote/rsc'

const rootDirectory = path.join(process.cwd(), 'src', 'app', 'files')

export const getProjectBySlug = async slug => {
  const realSlug = slug.replace(/\.mdx$/, '')
  const filePath = path.join(rootDirectory, `${realSlug}.mdx`)

  const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' })

  const { frontmatter, content } = await compileMDX({
    source: fileContent,
    options: { parseFrontmatter: true }
  })

  return { meta: { ...frontmatter, slug: realSlug }, content }
}

export const getAllProjectsMeta = async () => {
  const files = fs.readdirSync(rootDirectory)

  let projects = []

  for (const file of files) {
    const { meta } = await getProjectBySlug(file)
    projects.push(meta)
  }

  return projects
}