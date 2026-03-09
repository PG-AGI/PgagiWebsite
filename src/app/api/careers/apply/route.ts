import { NextResponse } from 'next/server';

const FRAPPE_BASE_URL = process.env.FRAPPE_BASE_URL!;
const FRAPPE_API_TOKEN = process.env.FRAPPE_API_TOKEN!;

export async function POST(req: Request) {
  try {
    // ── 1. Parse FormData ──────────────────────────────────────────────────
    const formData = await req.formData();

    const jobId = formData.get('jobId') as string;
    const jobTitle = formData.get('jobTitle') as string;
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
    const educationalInstitute = formData.get('educational_institute') as string;
    const resumeFile = formData.get('resumeFile') as File | null;

    // ── 2. Required-field validation ───────────────────────────────────────
    if (!firstName || !lastName || !email || !phone) {
      return NextResponse.json(
        { message: 'First Name, Last Name, Email, and Phone are required.' },
        { status: 400 }
      );
    }

    if (!resumeFile || resumeFile.size === 0) {
      return NextResponse.json(
        { message: 'Resume file is required.' },
        { status: 400 }
      );
    }

    if (!linkedIn) {
      return NextResponse.json(
        { message: 'LinkedIn profile URL is required.' },
        { status: 400 }
      );
    }

    if (!portfolio) {
      return NextResponse.json(
        { message: 'Portfolio / GitHub URL is required.' },
        { status: 400 }
      );
    }

    if (!projectDocUrl) {
      return NextResponse.json(
        { message: 'Assignment link is required.' },
        { status: 400 }
      );
    }

    // ── 3. STEP 1 — Upload resume file to Frappe ───────────────────────────
    // POST /api/method/upload_file
    // Returns: { message: { file_url: "/private/files/resume.pdf", ... } }
    const uploadFormData = new FormData();
    uploadFormData.append('file', resumeFile, resumeFile.name);
    uploadFormData.append('is_private', '1');

    const uploadResponse = await fetch(
      `${FRAPPE_BASE_URL}/api/method/upload_file`,
      {
        method: 'POST',
        headers: {
          Authorization: `token ${FRAPPE_API_TOKEN}`,
        },
        body: uploadFormData,
      }
    );

    const uploadResult = await uploadResponse.json();

    if (!uploadResponse.ok) {
      const errMsg =
        uploadResult?.exception ||
        uploadResult?.message ||
        `File upload failed: ${uploadResponse.status}`;
      console.error('Frappe upload_file error:', uploadResponse.status, uploadResult);
      return NextResponse.json(
        { message: 'Failed to upload resume. Please try again.', error: errMsg },
        { status: uploadResponse.status }
      );
    }

    // Frappe returns file_url inside message object
    const fileUrl: string =
      uploadResult?.message?.file_url ||
      uploadResult?.file_url ||
      '';

    if (!fileUrl) {
      console.error('Frappe upload_file returned no file_url:', uploadResult);
      return NextResponse.json(
        { message: 'Resume upload succeeded but no file URL was returned.' },
        { status: 500 }
      );
    }

    // ── 4. STEP 2 — Build custom_external_links array ─────────────────────
    // Frappe's Job Applicant child table allowed link_types:
    // "Resume", "Assignment", "Portfolio", "Other"
    const externalLinks: Array<{
      link_type: string;
      attachment?: string;
      url?: string;
    }> = [
        // Resume: use `attachment` with the Frappe file_url (not `url`)
        { link_type: 'Resume', attachment: fileUrl },
        // Assignment: URL the applicant submitted
        { link_type: 'Assignment', url: projectDocUrl },
        // Portfolio/GitHub
        { link_type: 'Portfolio', url: portfolio },
        // LinkedIn → maps to "Other" (closest allowed type)
        { link_type: 'Other', url: linkedIn },
      ];

    if (demoVideoUrl) {
      externalLinks.push({ link_type: 'Other', url: demoVideoUrl });
    }
    if (codeBaseUrl) {
      externalLinks.push({ link_type: 'Other', url: codeBaseUrl });
    }
    if (hostedLink) {
      externalLinks.push({ link_type: 'Other', url: hostedLink });
    }

    // ── 5. STEP 2 — POST Job Applicant to Frappe ──────────────────────────
    const applicantName = `${firstName.trim()} ${lastName.trim()}`;

    const applicantPayload = {
      applicant_name: applicantName,
      email_id: email,
      job_title: jobId,   // HR-OPN-xxx (Frappe link field)
      status: 'Open',
      // Custom fields — silently ignored if not on doctype
      custom_phone: phone || '',
      custom_cover_letter: coverLetter || '',
      custom_educational_institute: educationalInstitute || '',
      // Child table with all links
      custom_external_links: externalLinks,
    };

    const applicantResponse = await fetch(
      `${FRAPPE_BASE_URL}/api/resource/Job%20Applicant`,
      {
        method: 'POST',
        headers: {
          Authorization: `token ${FRAPPE_API_TOKEN}`,
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(applicantPayload),
      }
    );

    const applicantResult = await applicantResponse.json();

    if (!applicantResponse.ok) {
      const errMsg =
        applicantResult?.exception ||
        applicantResult?.message ||
        `Frappe error: ${applicantResponse.status}`;
      console.error('Frappe Job Applicant error:', applicantResponse.status, applicantResult);
      return NextResponse.json(
        { message: 'Failed to submit application', error: errMsg },
        { status: applicantResponse.status }
      );
    }

    // ── 6. Success ─────────────────────────────────────────────────────────
    return NextResponse.json(
      {
        message: 'Application submitted successfully',
        applicantName,
        jobId,
        jobTitle,
        resumeFileUrl: fileUrl,
        frappeDocName: applicantResult?.data?.name ?? null,
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
