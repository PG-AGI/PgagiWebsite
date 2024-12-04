import { NextResponse } from 'next/server';
import clientPromise from '@/utils/mongodb';
import { Binary } from 'mongodb';

export async function POST(req: Request) {
  try {
    // Create a FormData object to handle multipart/form-data
    const formData = await req.formData();

    // Extract form fields
    const firstName = formData.get('firstName') as string;
    const lastName = formData.get('lastName') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const linkedIn = formData.get('linkedIn') as string;
    const portfolio = formData.get('portfolio') as string;
    const coverLetter = formData.get('coverLetter') as string;
    const jobTitle = formData.get('jobTitle') as string;

    // Handle file upload
    const resumeFile = formData.get('resume') as File;
    
    // Validate required fields
    if (!firstName || !lastName || !email || !resumeFile) {
      return NextResponse.json(
        { message: 'Missing required fields' }, 
        { status: 400 }
      );
    }

    // Read file as Uint8Array
    const resumeBuffer = await resumeFile.arrayBuffer();
    const resumeUint8Array = new Uint8Array(resumeBuffer);

    // Get MongoDB client
    const client = await clientPromise;
    const database = client.db('jobPosting'); // Replace with your database name
    const applicantsCollection = database.collection('Applicants');

    // Prepare applicant data
    const applicantData = {
      jobTitle,
      firstName,
      lastName,
      email,
      phone: phone || '',
      linkedIn: linkedIn || '',
      portfolio: portfolio || '',
      coverLetter: coverLetter || '',
      resume: {
        filename: resumeFile.name,
        contentType: resumeFile.type,
        data: resumeUint8Array
      },
      applicationDate: new Date()
    };

    // Insert applicant data
    const result = await applicantsCollection.insertOne(applicantData);

    return NextResponse.json(
      { 
        message: 'Application submitted successfully', 
        applicantId: result.insertedId 
      }, 
      { status: 201 }
    );
  } catch (error) {
    const err = error as Error;
    console.error('Error submitting application:', err.message, err.stack);
    return NextResponse.json(
      { message: 'Failed to submit application', error: err.message },
      { status: 500 }
    );
  }
}