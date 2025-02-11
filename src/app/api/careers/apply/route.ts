import { NextResponse } from 'next/server';
import clientPromise from '@/utils/mongodb';
import { ObjectId } from 'mongodb';

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
    const resumeLink = formData.get('resumeLink') as string;
    const educationalInstitute = formData.get('educational_institute') as string;

    const projectDocFile = formData.get('projectDocFile') as File;
    const demoVideoFile = formData.get('demoVideoFile') as File;
    const codeBaseFile = formData.get('codeBaseFile') as File;

    const fileToBinary = async (file: File | null) => {
      if (!file) return null;
      const buffer = await file.arrayBuffer();
      return new Uint8Array(buffer);
    };

    const projectDocBinary = await fileToBinary(projectDocFile);
    const demoVideoBinary = await fileToBinary(demoVideoFile);
    const codeBaseBinary = await fileToBinary(codeBaseFile);

    const applicantId = new ObjectId();
    const client = await clientPromise;
    const session = client.startSession();

    try {
      session.startTransaction();
      const jobPostingDb = client.db('jobPosting');
      const applicantsCollection = jobPostingDb.collection('Applicants');

      const applicantData = {
        _id: applicantId,
        jobId,
        jobTitle,
        firstName,
        lastName,
        email,
        phone: phone || '',
        linkedIn: linkedIn || '',
        portfolio: portfolio || '',
        coverLetter: coverLetter || '',
        educational_institute: educationalInstitute || '', // Added field
        applicationDate: new Date(),
      };

      await applicantsCollection.insertOne(applicantData, { session });

   
      const applicationDetailsDb = client.db('jobPosting');
      const assignmentsCollection = applicationDetailsDb.collection('Assignments');

      const assignmentsData = {
        _id: applicantId,
        projectDocument: {
          url: projectDocUrl || '',
          file: projectDocBinary
            ? {
                filename: projectDocFile.name,
                contentType: projectDocFile.type,
                data: projectDocBinary,
              }
            : null,
        },
        demoVideo: {
          url: demoVideoUrl || '',
          file: demoVideoBinary
            ? {
                filename: demoVideoFile.name,
                contentType: demoVideoFile.type,
                data: demoVideoBinary,
              }
            : null,
        },
        codeBase: {
          url: codeBaseUrl || '',
          file: codeBaseBinary
            ? {
                filename: codeBaseFile.name,
                contentType: codeBaseFile.type,
                data: codeBaseBinary,
              }
            : null,
        },
        hostedLink: hostedLink || '',
      };

      await assignmentsCollection.insertOne(assignmentsData, { session });

      const resumesCollection = applicationDetailsDb.collection('Resumes');

      const resumeData = {
        _id: applicantId,
        resumeLink, 
        uploadedAt: new Date(),
      };

      await resumesCollection.insertOne(resumeData, { session });

      await session.commitTransaction();
      session.endSession();

      return NextResponse.json(
        {
          message: 'Application submitted successfully',
          applicantId: applicantId.toHexString(),
        },
        { status: 201 }
      );
    } catch (transactionError) {
      await session.abortTransaction();
      session.endSession();
      throw transactionError;
    }
  } catch (error) {
    const err = error as Error;
    console.error('Error submitting application:', err.message, err.stack);
    return NextResponse.json(
      { message: 'Failed to submit application', error: err.message },
      { status: 500 }
    );
  }
}
