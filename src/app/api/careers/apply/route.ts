import { NextResponse } from 'next/server';

const FRAPPE_BASE_URL = process.env.FRAPPE_BASE_URL!;
const FRAPPE_API_TOKEN = process.env.FRAPPE_API_TOKEN!;

const authHeaders = {
  Authorization: `token ${FRAPPE_API_TOKEN}`,
  'Content-Type': 'application/json',
  Accept: 'application/json',
};

export async function POST(req: Request) {
  try {
    // ── 1. Parse the exact same FormData the UI already sends ──────────────
    const formData = await req.formData();

    const jobId = formData.get('jobId') as string;
    const jobTitle = formData.get('jobTitle') as string; // human-readable title
    const firstName = formData.get('firstName') as string;
    const lastName = formData.get('lastName') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const linkedIn = formData.get('linkedIn') as string;
    const portfolio = formData.get('portfolio') as string;
    const coverLetter = formData.get('coverLetter') as string;
    const projectDocUrl = formData.get('projectDocUrl') as string;
    const demoVideoUrl = formData.get('demoVideoUrl') as string;
    const codeBaseUrl = formData.get('codeBaseUrl') as string;
    const hostedLink = formData.get('hostedLink') as string;
    const resumeLink = formData.get('resumeLink') as string;
    const educationalInstitute = formData.get('educational_institute') as string;

    // ── 2. Required-field validation (same rules as before) ────────────────
    if (!firstName || !lastName || !email || !phone || !educationalInstitute || !resumeLink) {
      return NextResponse.json(
        {
          message:
            'First Name, Last Name, Email, Phone Number, Educational Institute, and Resume/CV are required.',
        },
        { status: 400 }
      );
    }

    const applicantName = `${firstName.trim()} ${lastName.trim()}`;

    // ── 3. Build the custom_external_links child-table array ────────────────
    // Frappe's Job Applicant has a child table `custom_external_links` where
    // each row has: link_type, url OR attachment.
    // We map every URL the user supplied into a row here.
    const externalLinks: Array<{ link_type: string; url?: string }> = [];

    // Frappe's link_type field only allows: "Resume", "Assignment", "Portfolio", "Other"
    if (resumeLink) {
      externalLinks.push({ link_type: 'Resume', url: resumeLink });
    }
    if (linkedIn) {
      // LinkedIn → "Other" (closest allowed type)
      externalLinks.push({ link_type: 'Other', url: linkedIn });
    }
    if (portfolio) {
      externalLinks.push({ link_type: 'Portfolio', url: portfolio });
    }
    if (projectDocUrl) {
      externalLinks.push({ link_type: 'Assignment', url: projectDocUrl });
    }
    if (demoVideoUrl) {
      externalLinks.push({ link_type: 'Other', url: demoVideoUrl });
    }
    if (codeBaseUrl) {
      externalLinks.push({ link_type: 'Other', url: codeBaseUrl });
    }
    if (hostedLink) {
      externalLinks.push({ link_type: 'Other', url: hostedLink });
    }

    // ── 4. Build the Job Applicant payload ────────────────────────────────
    // `job_title` in Frappe Job Applicant is a Link field pointing to Job Opening.
    // We pass jobId (the HR-OPN-xxx name), NOT the human-readable title.
    // Custom fields are silently ignored by Frappe if they don't exist on the doctype.
    const applicantPayload = {
      applicant_name: applicantName,
      email_id: email,
      job_title: jobId,       // HR-OPN-xxx
      status: 'Open',
      // Custom fields — gracefully ignored if not on doctype
      custom_phone: phone || '',
      custom_cover_letter: coverLetter || '',
      custom_educational_institute: educationalInstitute || '',
      // Child table — all links/URLs consolidated here
      custom_external_links: externalLinks,
    };

    // ── 5. POST to Frappe Job Applicant ────────────────────────────────────
    const frappeResponse = await fetch(
      `${FRAPPE_BASE_URL}/api/resource/Job%20Applicant`,
      {
        method: 'POST',
        headers: authHeaders,
        body: JSON.stringify(applicantPayload),
      }
    );

    const frappeResult = await frappeResponse.json();

    if (!frappeResponse.ok) {
      const errMsg =
        frappeResult?.exception ||
        frappeResult?.message ||
        `Frappe error: ${frappeResponse.status}`;
      console.error('Frappe applicant creation error:', frappeResponse.status, frappeResult);
      return NextResponse.json(
        { message: 'Failed to submit application', error: errMsg },
        { status: frappeResponse.status }
      );
    }

    // ── 6. Return success — same shape as before so UI toast works ────────
    return NextResponse.json(
      {
        message: 'Application submitted successfully',
        applicantName,
        jobId,
        jobTitle,
        frappeDocName: frappeResult?.data?.name ?? null,
      },
      { status: 201 }
    );
  } catch (error) {
    const err = error as Error;
    console.error('Error submitting application to Frappe:', err.message, err.stack);
    return NextResponse.json(
      { message: 'Failed to submit application', error: err.message },
      { status: 500 }
    );
  }
}
