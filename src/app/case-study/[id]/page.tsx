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
    const metaData = await getMetaTags({ contentType: 'case-study', pageId: id });

    const metaDescription = metaData.description;
    const metaKeywords = metaData.keywords;
    const metaAuthor = metaData.author;
    const appTitle = metaData.title;
    return {
      title: appTitle,
      description: metaDescription,
      metadataBase: new URL("https://pgagi.in"),
      robots: {
        index: true,
        follow: true,
      },
      appleWebApp: {
        title: appTitle,
      },
      applicationName: appTitle,
      keywords: metaKeywords.split(", "),
      author: metaAuthor,
    };
  }catch(error){
    return {}
  }

}

