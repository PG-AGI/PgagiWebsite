

import { NextResponse } from 'next/server';
import clientPromise from '@/utils/mongodb';
import { Binary } from 'mongodb';

export async function POST(req: Request) {
  try {
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
    const resumeFile = formData.get('resume') as File;
    const projectDocFile = formData.get('projectDocFile') as File;
    const demoVideoFile = formData.get('demoVideoFile') as File;
    const codeBaseFile = formData.get('codeBaseFile') as File;

    if (!jobId || !jobTitle || !firstName || !lastName || !email || !resumeFile) {
      return NextResponse.json(
        { message: 'Missing required fields' }, 
        { status: 400 }
      );
    }

    const fileToBinary = async (file: File | null) => {
      if (!file) return null;
      const buffer = await file.arrayBuffer();
      return new Binary(new Uint8Array(buffer));
    };
    const resumeBinary = await fileToBinary(resumeFile);
    const projectDocBinary = await fileToBinary(projectDocFile);
    const demoVideoBinary = await fileToBinary(demoVideoFile);
    const codeBaseBinary = await fileToBinary(codeBaseFile);

    const client = await clientPromise;
    const database = client.db('jobPosting'); 
    const applicantsCollection = database.collection('Applicants');

    const applicantData: any = {
      jobId,
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
        data: resumeBinary
      },
      applicationDate: new Date(),

      assignments: {
        projectDocument: {
          url: projectDocUrl || '',
          file: projectDocBinary ? {
            filename: projectDocFile.name,
            contentType: projectDocFile.type,
            data: projectDocBinary
          } : null
        },
        demoVideo: {
          url: demoVideoUrl || '',
          file: demoVideoBinary ? {
            filename: demoVideoFile.name,
            contentType: demoVideoFile.type,
            data: demoVideoBinary
          } : null
        },
        codeBase: {
          url: codeBaseUrl || '',
          file: codeBaseBinary ? {
            filename: codeBaseFile.name,
            contentType: codeBaseFile.type,
            data: codeBaseBinary
          } : null
        },
        hostedLink: hostedLink || ''
      }
    };

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
