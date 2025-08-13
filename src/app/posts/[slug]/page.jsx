"use-client"
import { getPostBySlug } from "../../../lib/mdx"
import GlareBackground from '@/app/components/base/GlareBackground';
import styles from './singlepost.module.scss';
// import Footer from '../../components/Footer'
const getPageContent = async slug => {
  const { meta, content } = await getPostBySlug(slug)
  return { meta, content }
}

const Page = async ({ params }) => {
  const { meta, content } = await getPageContent(params.slug)

  return (
    <section className={styles.main}>
      {/* <GlareBackground /> */}
      <div className={styles.sect}>
        {/* thumbnail and title */}
        <div
          className={styles.poster}
          style={{ backgroundImage: `url(${meta.thumbnail})` }}
        >
          <div className={styles.posterblur}></div>
          <div className={styles.postertitle}>
            <p>{meta.title}</p>
          </div>
          <div className={styles.authoranddate}>
            <div className={styles.authordiv}>
              <p>By {meta.author}</p>
            </div>
            <div className={styles.datediv}>
              <p>{meta.publishDate}</p>
            </div>
          </div>
        </div>
        {/* Fetching content */}
        <div className={styles.container}>
          <div>
            {content}
          </div>
        </div>

      </div>
    </section>
  )
}

export default Page
