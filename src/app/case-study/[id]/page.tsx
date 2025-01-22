import { getMetaTags } from "@/services/apiMetaService";
import CaseStudy from "./CaseStudy";

export default function CaseStudyPage() {
  return (
    <CaseStudy />
  )
}
export async function generateMetadata({ params }: { params: { id: string } }) {
  const id = params.id as string;
  try {
    const metaData = await getMetaTags({ contentType: 'case-studies', pageId: id });

    const metaDescription = metaData.metaDescription;
    const metaKeywords = metaData.metaKeywords;
    const metaAuthor = metaData.metaAuthor;
    const appTitle = metaData.metaTitle;

    return {
      title: appTitle,
      description: metaDescription,
      // Add additional meta tags
      robots: {
        index: true,
        follow: true,
      },
      appleWebApp: {
        title: appTitle,
      },
      applicationName: appTitle,
      keywords: metaKeywords.split(/[\s,]+/), // Convert the string to an array
      author: metaAuthor,
    };
  }catch(error){
    return {}
  }

}

