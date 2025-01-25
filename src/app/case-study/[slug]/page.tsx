import { getMetaTags } from "@/services/apiMetaService";
import CaseStudy from "./CaseStudy";

export default function CaseStudyPage() {
  return (
    <CaseStudy />
  )
}
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const slug = params.slug as string;
  try {
    const metaData = await getMetaTags({ contentType: 'case-studies', pageId: slug });

    const metaDescription = metaData.metaDescription;
    const metaKeywords = metaData.metaKeywords;
    const metaAuthor = metaData.metaAuthor;
    const appTitle = metaData.metaTitle;

    return {
      title: appTitle,
      description: metaDescription,
      robots: {
        index: true,
        follow: true,
      },
      appleWebApp: {
        title: appTitle,
      },
      applicationName: appTitle,
      keywords: metaKeywords.split(/[\s,]+/), 
      author: metaAuthor,
    };
  }catch(error){
    return {}
  }

}

