"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { remark } from "remark";
import GlareBackground from "../../components/base/GlareBackground";
import html from "remark-html";
import Image from "next/image"; // Import Image from Next.js
import Head from "next/head"; // Import Head for adding link
import Navigation from "../../components/base/Navigation";
import styles from "./case_study.module.scss"; // Import the SCSS module
import Footer from "../../components/Footer";
import { ClipLoader } from "react-spinners";
import { motion } from "framer-motion"; // Import framer-motion

// Import the image directly from your assets
import caseFrame from "../../assets/case.png";

const CaseStudyPage = () => {
  const params = useParams();
  const slug = params.slug; // Get the slug from the URL
  const [content, setContent] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!slug) return;

    const fetchMarkdownContent = async () => {
      try {
        const res = await fetch(`/api/case-study?slug=${slug}`);
        const data = await res.json();
        if (data.error) {
          console.error(data.error);
        } else {
          const processedContent = await remark()
            .use(html)
            .process(data.content);
          setContent(processedContent.toString());
          const titleMatch = data.content.match(/# (.*)/); // Extracting title from the markdown heading
          setTitle(titleMatch ? titleMatch[1] : "");
        }
      } catch (error) {
        console.error("Error fetching markdown content:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMarkdownContent();
  }, [slug]);

  if (!content)
    return (
      <div className={styles.loaderContainer}>
        <ClipLoader color="#8836F1" size={80} />
      </div>
    );

  return (
    <>
      <GlareBackground />
      {/* Add the Google Fonts link */}
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* Animate the Navigation */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Navigation />
      </motion.div>

      {/* Image can be animated similarly if you decide to include it */}
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className={styles.imageContainer}
      >
        <Image src={caseFrame} alt="Top Frame" className={styles.topImage} />
      </motion.div> */}

      {/* Animate the case study content */}
      <motion.div
        className={styles.caseStudyPage}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Animate the content as it enters */}
        <motion.div
          className={styles.caseStudyContent}
          dangerouslySetInnerHTML={{ __html: content }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.hr
          className={styles.separator}
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 1 }}
        />
      </motion.div>

      {/* Animate the Footer */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Footer />
      </motion.div>
    </>
  );
};

export default CaseStudyPage;
