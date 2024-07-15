import fs from 'fs'
import path from 'path'
import { compileMDX } from 'next-mdx-remote/rsc'

const rootDirectory = path.join(process.cwd(), 'src', 'app', 'content')

export const getPostBySlug = async slug => {
  const realSlug = slug.replace(/\.mdx$/, '')
  const filePath = path.join(rootDirectory, `${realSlug}.mdx`)

  const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' })

  const { frontmatter, content } = await compileMDX({
    source: fileContent,
    options: { parseFrontmatter: true }
  })

  return { meta: { ...frontmatter, slug: realSlug }, content }
}

export const getAllPostsMeta = async () => {
  const files = fs.readdirSync(rootDirectory)

  let posts = []

  for (const file of files) {
    const { meta } = await getPostBySlug(file)
    posts.push(meta)
  }

  return posts
}

// import { getStaticProps } from 'next';
// import path from 'path';
// import { compileMDX } from 'next-mdx-remote/rsc';
// import { readdir, readFile } from 'fs/promises';

// const rootDirectory = path.join(process.cwd(), 'src', 'app', 'content');

// export const getPostBySlug = async ({ params }) => {
//   const realSlug = params.slug.replace(/\.mdx$/, '');
//   const filePath = path.join(rootDirectory, `${realSlug}.mdx`);

//   const fileContent = await readFile(filePath, 'utf8');

//   const { frontmatter, content } = await compileMDX({
//     source: fileContent,
//     options: { parseFrontmatter: true }
//   });

//   return {
//     props: {
//       meta: { ...frontmatter, slug: realSlug },
//       content
//     }
//   };
// };

// export const getAllPostsMeta = async () => {
//   const files = await readdir(rootDirectory);

//   let posts = [];

//   for (const file of files) {
//     const { meta } = await getPostBySlug({ params: { slug: file } });
//     posts.push(meta);
//   }

//   return posts;
// };


// export const getStaticProps = async () => {
//   const posts = await getAllPostsMeta();

//   return {
//     props: {
//       posts
//     }
//   };
// };
