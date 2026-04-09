import { redirect } from 'next/navigation';
import ROUTES from '@/constants/routes';

// Base ainews route - redirect to whatwethink with ainews section
export default function AinewsBasePage() {
  redirect(ROUTES.WHAT_WE_THINK_AINEWS);
}
