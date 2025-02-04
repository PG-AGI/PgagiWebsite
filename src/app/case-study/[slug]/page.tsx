import { Metadata } from "next";
import { getMetaTags } from "@/services/apiMetaService";
import CaseStudy from "./CaseStudy";

export default function CaseStudyPage() {
  return (
    <CaseStudy />
  )
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const slug = params.slug as string;
  
  try {
    const metaData = await getMetaTags({ contentType: "case-studies", pageId: slug });

    const metaDescription = metaData.metaDescription;
    const appTitle = metaData.metaTitle;
    
    const baseUrl = "https://pgagi.in"; // Change this to your live domain

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
      openGraph: {
        title: appTitle,
        description: metaDescription,
        url: `${baseUrl}/case-studies/${slug}`, // ✅ This should now work
        siteName: "PGAGI",
        type: "website",
      },
    };
  } catch (error) {
    console.error("Metadata Fetch Error:", error);
    return {};
  }
}

