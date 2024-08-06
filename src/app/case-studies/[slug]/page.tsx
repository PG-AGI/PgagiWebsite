// src/app/case-studies/[slug]/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { remark } from 'remark';
import html from 'remark-html';

const CaseStudyPage = () => {
  const params = useParams();
  const slug = params.slug; // Get the slug from the URL
  const [content, setContent] = useState<string>('');
  const [title, setTitle] = useState<string>('');

  useEffect(() => {
    if (!slug) return;

    const fetchMarkdownContent = async () => {
      try {
        const res = await fetch(`/api/case-study?slug=${slug}`);
        const data = await res.json();
        if (data.error) {
          console.error(data.error);
        } else {
          const processedContent = await remark().use(html).process(data.content);
          setContent(processedContent.toString());
          const titleMatch = data.content.match(/# (.*)/);
          setTitle(titleMatch ? titleMatch[1] : '');
        }
      } catch (error) {
        console.error('Error fetching markdown content:', error);
      }
    };

    fetchMarkdownContent();
  }, [slug]);

  if (!content) return <p>Loading...</p>;

  return (
    <div>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default CaseStudyPage;
