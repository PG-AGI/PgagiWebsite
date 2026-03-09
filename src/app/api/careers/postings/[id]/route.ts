import { NextResponse } from 'next/server';

const FRAPPE_BASE_URL = process.env.FRAPPE_BASE_URL!;
const FRAPPE_API_TOKEN = process.env.FRAPPE_API_TOKEN!;

const authHeaders = {
  Authorization: `token ${FRAPPE_API_TOKEN}`,
  Accept: 'application/json',
};

/**
 * Safely parse a value that might be a JSON array string, a plain string, or null/undefined.
 */
function parseArrayField(value: unknown): string[] {
  if (Array.isArray(value)) return value as string[];
  if (typeof value === 'string' && value.trim().startsWith('[')) {
    try {
      const parsed = JSON.parse(value);
      if (Array.isArray(parsed)) return parsed;
    } catch {
      return value.split('\n').map((s) => s.trim()).filter(Boolean);
    }
  }
  if (typeof value === 'string' && value.trim()) {
    return value.split('\n').map((s) => s.trim()).filter(Boolean);
  }
  return [];
}

export async function GET(
  _request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  try {
    const frappeUrl = `${FRAPPE_BASE_URL}/api/resource/Job%20Opening/${encodeURIComponent(id)}`;

    const response = await fetch(frappeUrl, {
      headers: authHeaders,
      cache: 'no-store',
    });

    if (response.status === 404) {
      return NextResponse.json(
        { message: 'Job posting not found' },
        { status: 404 }
      );
    }

    if (!response.ok) {
      const errText = await response.text();
      console.error('Frappe detail error:', response.status, errText);
      return NextResponse.json(
        { message: 'Failed to fetch job opening from Frappe', error: errText },
        { status: response.status }
      );
    }

    const json = await response.json();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const raw: any = json.data;

    if (!raw) {
      return NextResponse.json(
        { message: 'Job posting not found' },
        { status: 404 }
      );
    }

    const frappeStatus: string = raw.status ?? '';
    const job = {
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

    return NextResponse.json(job, { status: 200 });
  } catch (error) {
    const err = error as Error;
    console.error('Error fetching job from Frappe:', err.message, err.stack);
    return NextResponse.json(
      { message: 'Failed to fetch job posting', error: err.message },
      { status: 500 }
    );
  }
}
