import { getMetaTags } from "@/services/apiMetaService";
import CaseStudy from "./CaseStudy";

export default function CaseStudyPage() {
  return (
    <CaseStudy />
  )
}

// Note: Please don't remove the file structure for BlogPost, CaseStudy or Ainews
// because this generateMetadata() method requires a Server Side Component.
export async function generateMetadata({ params }: { params: { id: string } }) {
  const id = params.id as string;
  try {
    const metaData = await getMetaTags({ contentType: 'case-study', pageId: id });

    const metaDescription = metaData.description;
    const metaKeywords = metaData.keywords;
    const metaAuthor = metaData.author;
    const appTitle = metaData.title;

      // const metaDescription = "AI-powered business solutions for your company";
      // const metaKeywords = "AI, business, solutions, technology, innovation";
      // const metaAuthor = "AI-powered business solutions for your company";
      // const appTitle = "AI-powered business solutions for your company";
    return {
      title: appTitle,
      description: metaDescription,
      // Add additional meta tags
      metadataBase: new URL("https://pgagi.in"),
      robots: {
        index: true,
        follow: true,
      },
      appleWebApp: {
        title: appTitle,
      },
      applicationName: appTitle,
      keywords: metaKeywords.split(", "), // Convert the string to an array
      author: metaAuthor,
    };
  }catch(error){
    return {}
  }

}

  // const metaDescription = "AI-powered business solutions for your company";
  // const metaKeywords = "AI, business, solutions, technology, innovation";
  // const metaAuthor = "AI-powered business solutions for your company";
  // const appTitle = "AI-powered business solutions for your company";