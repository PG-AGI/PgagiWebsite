"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { remark } from "remark";
import html from 'remark-html'
import styles from "@/styles/app/whatwethink/[slug]/blog.module.scss";
import { ClipLoader } from "react-spinners";
import { motion } from "framer-motion"; // Import framer-motion
import { fetchBlogMarkdownBySlug } from "@/services/blogService";

const BlogPage = () => {
  const params = useParams();
  const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug; // Get the slug from the URL
  const [content, setContent] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true); // State for loading

  useEffect(() => {
    if (!slug) return;

    const fetchMarkdownContent = async () => {
      try {
        const data = await fetchBlogMarkdownBySlug(slug);
        if (data.error) {
          console.error(data.error);
        } else {
          const processedContent = await remark()
            .use(html)
            .process(data.content);
          setContent(processedContent.toString());
        }
      } catch (error) {
        console.error("Error fetching markdown content:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMarkdownContent();
  }, [slug]);

  if (loading) {
    return (
      <div className={styles.loaderContainer}>
        <ClipLoader color="#8836F1" size={80} />
      </div>
    );
  }

  return (
    <>
            {/* <Head>
  <link
    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
    rel="stylesheet"
  />
</Head> */}

      <div>
        {/* Navigation removed */}
      </div>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={styles.blogPage}
      >
        <motion.div
          className={styles.blogContent}
          dangerouslySetInnerHTML={{ __html: content }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        />
        <motion.hr
          className={styles.separator}
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 1 }}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Footer removed */}
      </motion.div>
    </>
  );
};

export default BlogPage;
