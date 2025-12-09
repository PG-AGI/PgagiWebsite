import { redirect } from 'next/navigation';

// Base ainews route - redirect to whatwethink with ainews section
export default function AinewsBasePage() {
  redirect('/whatwethink#ainews');
}