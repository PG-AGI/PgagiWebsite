import { NextResponse } from 'next/server';
import clientPromise from '@/utils/mongodb'; 

interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  applicationUrl: string;
}

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const { id } = params;

  try {
    const client = await clientPromise;
    const database = client.db('jobPosting');
    const jobsCollection = database.collection('Postings');

    const job = await jobsCollection.findOne({ id });

    if (!job) {
      return NextResponse.json(
        { message: 'Job posting not found' },
        { status: 404 }
      );
    }

    const formattedJob: Job = {
      id: job.id,
      title: job.title,
      department: job.department,
      location: job.location,
      type: job.type,
      description: job.description,
      responsibilities: job.responsibilities,
      requirements: job.requirements,
      applicationUrl: job.applicationUrl
    };

    return NextResponse.json(formattedJob, { status: 200 });
  } catch (error) {
    const err = error as Error;
    console.error('Error fetching job posting:', err.message, err.stack);
    return NextResponse.json(
      { message: 'Failed to fetch job posting', error: err.message },
      { status: 500 }
    );
  }
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  const { id } = params;

  try {
    const body = await request.json();

    const {
      title,
      department,
      location,
      type,
      description,
      responsibilities,
      requirements,
      applicationUrl
    } = body;

    if (
      !title ||
      !department ||
      !location ||
      !type ||
      !description ||
      !Array.isArray(responsibilities) ||
      !Array.isArray(requirements) ||
      !applicationUrl
    ) {
      return NextResponse.json(
        { message: 'Invalid job posting data' },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const database = client.db('jobPosting');
    const jobsCollection = database.collection('Postings');

    const updateResult = await jobsCollection.updateOne(
      { id },
      {
        $set: {
          title: title.trim(),
          department: department.trim(),
          location: location.trim(),
          type: type.trim(),
          description: description.trim(),
          responsibilities: responsibilities.map((resp: string) => resp.trim()).filter((resp: string) => resp !== ''),
          requirements: requirements.map((req: string) => req.trim()).filter((req: string) => req !== ''),
          applicationUrl: applicationUrl.trim()
        }
      }
    );

    if (updateResult.matchedCount === 0) {
      return NextResponse.json(
        { message: 'Job posting not found' },
        { status: 404 }
      );
    }

    if (updateResult.modifiedCount === 1) {
      return NextResponse.json(
        { message: 'Job posting updated successfully' },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { message: 'No changes made to the job posting' },
        { status: 200 }
      );
    }
  } catch (error) {
    const err = error as Error;
    console.error('Error updating job posting:', err.message, err.stack);
    return NextResponse.json(
      { message: 'Failed to update job posting', error: err.message },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  const { id } = params;

  try {
    const client = await clientPromise;
    const database = client.db('jobPosting');
    const jobsCollection = database.collection('Postings');

    const deleteResult = await jobsCollection.deleteOne({ id });

    if (deleteResult.deletedCount === 0) {
      return NextResponse.json(
        { message: 'Job posting not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: 'Job posting deleted successfully' },
      { status: 200 }
    );
  } catch (error) {
    const err = error as Error;
    console.error('Error deleting job posting:', err.message, err.stack);
    return NextResponse.json(
      { message: 'Failed to delete job posting', error: err.message },
      { status: 500 }
    );
  }
}