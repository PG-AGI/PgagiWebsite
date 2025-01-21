import { getMetaTags } from "@/services/apiMetaService";
import BlogPost from "./BlogPost";

export default function BlogPostPage() {
  return (
    <BlogPost />
  )
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const id = params.id as string;
  try {
    const metaData = await getMetaTags({ contentType: 'blogs', pageId: id });

    const metaDescription = metaData.description;
    const metaKeywords = metaData.keywords;
    const metaAuthor = metaData.author;
    const appTitle = metaData.title;

  
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
