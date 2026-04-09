import API_ENDPOINTS from '@/constants/apiEndpoints';
import type Job from '@/utils/job';

export interface CareerApplicationPayload {
  jobId: string;
  name: string;
  email: string;
  resume: string;
  coverLetter?: string;
}

export type JobPostingStatus = 'active' | 'inactive';

export async function fetchJobPostings(status: JobPostingStatus): Promise<Job[]> {
  const res = await fetch(`${API_ENDPOINTS.CAREERS_POSTINGS}?status=${status}`);
  if (!res.ok) throw new Error(`Failed to fetch ${status} job postings`);
  return res.json() as Promise<Job[]>;
}

export async function fetchActiveJobPostings(): Promise<Job[]> {
  return fetchJobPostings('active');
}

export async function fetchJobPostingById(id: string): Promise<Job> {
  const res = await fetch(API_ENDPOINTS.CAREER_POSTING_BY_ID(id));
  if (!res.ok) throw new Error(`Failed to fetch job posting: ${id}`);
  return res.json() as Promise<Job>;
}

export async function createJobPosting(payload: Job): Promise<void> {
  const res = await fetch(API_ENDPOINTS.CAREERS_POSTINGS, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error('Failed to create job posting');
}

export async function updateJobPosting(id: string, payload: Job): Promise<void> {
  const res = await fetch(API_ENDPOINTS.CAREER_POSTING_BY_ID(id), {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error('Failed to update job posting');
}

export async function closeJobPosting(id: string): Promise<void> {
  const res = await fetch(API_ENDPOINTS.CAREER_POSTING_BY_ID(id), { method: 'DELETE' });
  if (!res.ok) throw new Error('Failed to close job posting');
}

export async function submitCareerApplication(payload: CareerApplicationPayload): Promise<void> {
  const res = await fetch(API_ENDPOINTS.CAREERS_APPLY, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error('Failed to submit career application');
}

export async function submitCareerApplicationFormData(payload: FormData): Promise<void> {
  const res = await fetch(API_ENDPOINTS.CAREERS_APPLY, {
    method: 'POST',
    body: payload,
  });
  if (!res.ok) {
    const message = await res.text();
    throw new Error(message || 'Failed to submit career application');
  }
}
