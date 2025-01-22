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
      // const metaDescription = "AI-powered business solutions for your company";
      // const metaKeywords = "AI, business, solutions, technology, innovation";
      // const metaAuthor = "AI-powered business solutions for your company";
      // const appTitle = "AI-powered business solutions for your company";