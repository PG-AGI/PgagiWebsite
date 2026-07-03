import Projects from '@/components/organisms/Projects';
import { getCaseStudies } from '@/services/getCaseStudies';

// ISR: prerender at build, refresh in the background every hour. Case studies
// change rarely, so this keeps MongoDB out of the per-request critical path
// while still picking up edits without a redeploy.
export const revalidate = 3600;

export default async function ProjectsPage() {
  const initialStudies = await getCaseStudies();
  return <Projects initialStudies={initialStudies} />;
}
