import { NextResponse } from 'next/server';

const FRAPPE_BASE_URL = process.env.FRAPPE_BASE_URL!;
const FRAPPE_API_TOKEN = process.env.FRAPPE_API_TOKEN!;

const authHeaders = {
  Authorization: `token ${FRAPPE_API_TOKEN}`,
  Accept: 'application/json',
};

// Fields we request from Frappe Job Opening list endpoint.
// Only fields that actually exist on the standard doctype are listed here.
// description, responsibilities, requirements, category are fetched on the detail
// endpoint (GET /[id]) where the full document is returned regardless.
const FRAPPE_FIELDS = [
  'name',
  'job_title',
  'status',
  'department',
  'location',
  'employment_type',
  'vacancies',
  'custom_assignment_link',
  'description',
].join('","');

/**
 * Safely parse a value that might be a JSON array string, a plain string, or null/undefined.
 * Returns a string[].
 */
function parseArrayField(value: unknown): string[] {
  if (Array.isArray(value)) return value as string[];
  if (typeof value === 'string' && value.trim().startsWith('[')) {
    try {
      const parsed = JSON.parse(value);
      if (Array.isArray(parsed)) return parsed;
    } catch {
      // not JSON — treat as a single paragraph, split by newline
      return value.split('\n').map((s) => s.trim()).filter(Boolean);
    }
  }
  if (typeof value === 'string' && value.trim()) {
    return value.split('\n').map((s) => s.trim()).filter(Boolean);
  }
  return [];
}

/**
 * Map a raw Frappe Job Opening record to our internal Job interface.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function mapFrappeJobToJob(raw: any) {
  const frappeStatus: string = raw.status ?? '';
  return {
    id: raw.name as string,
    title: (raw.job_title as string) ?? '',
    department: (raw.department as string) ?? '',
    location: (raw.location as string) ?? '',
    type: (raw.employment_type as string) ?? '',
    description: (raw.description as string) ?? '',
    responsibilities: parseArrayField(raw.custom_responsibilities),
    requirements: parseArrayField(raw.custom_requirements),
    numberOfOpenings: typeof raw.vacancies === 'number' ? raw.vacancies : 0,
    applicationUrl: (raw.custom_assignment_link as string) ?? '',
    status: frappeStatus === 'Open' ? ('active' as const) : ('inactive' as const),
    category: (raw.custom_category as 'technical' | 'non technical') ?? 'technical',
  };
}

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const statusParam = url.searchParams.get('status') || 'active';

    // Map our internal status back to Frappe status
    const frappeStatus = statusParam === 'active' ? 'Open' : 'Closed';

    const frappeUrl = new URL(`${FRAPPE_BASE_URL}/api/resource/Job%20Opening`);
    frappeUrl.searchParams.set('fields', `["${FRAPPE_FIELDS}"]`);
    frappeUrl.searchParams.set('filters', `[["status","=","${frappeStatus}"]]`);
    frappeUrl.searchParams.set('limit', '50');

    const response = await fetch(frappeUrl.toString(), {
      headers: authHeaders,
      // No caching — always get fresh data from Frappe
      cache: 'no-store',
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error('Frappe list error:', response.status, errText);
      return NextResponse.json(
        { message: 'Failed to fetch job openings from Frappe', error: errText },
        { status: response.status }
      );
    }

    const json = await response.json();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const rawJobs: any[] = json.data ?? [];

    const jobs = rawJobs.map(mapFrappeJobToJob);

    return NextResponse.json(jobs, { status: 200 });
  } catch (error) {
    const err = error as Error;
    console.error('Error fetching jobs from Frappe:', err.message, err.stack);
    return NextResponse.json(
      { message: 'Failed to fetch job postings', error: err.message },
      { status: 500 }
    );
  }
}
