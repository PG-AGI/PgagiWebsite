import { NextResponse } from 'next/server';
import clientPromise from '@/utils/mongodb';

interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  category: 'technical' | 'non technical';
  description: string;
  responsibilities: string[];
  requirements: string[];
  numberOfOpenings: number;
  applicationUrl: string;
  status: 'active' | 'inactive';
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
      category: job.category, 
      description: job.description,
      responsibilities: job.responsibilities,
      requirements: job.requirements,
      numberOfOpenings: job.numberOfOpenings,
      applicationUrl: job.applicationUrl,
      status: job.status,
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
      category, 
      description,
      responsibilities,
      requirements,
      numberOfOpenings,
      applicationUrl,
      status 
    } = body;


    if (
      !title ||
      !department ||
      !location ||
      !type ||
      !category ||
      (category !== 'technical' && category !== 'non technical') ||
      !description ||
      !Array.isArray(responsibilities) ||
      !Array.isArray(requirements) ||
      numberOfOpenings == null ||
      !applicationUrl
    ) {
      return NextResponse.json(
        { message: 'Invalid job posting data' },
        { status: 400 }
      );
    }

    if (status && !['active', 'inactive'].includes(status)) {
      return NextResponse.json(
        { message: 'Invalid status value' },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const database = client.db('jobPosting');
    const jobsCollection = database.collection('Postings');

    const updateFields: Partial<Job> = {
      title: title.trim(),
      department: department.trim(),
      location: location.trim(),
      type: type.trim(),
      category: category.trim(),
      description: description.trim(),
      responsibilities: responsibilities
        .map((resp: string) => resp.trim())
        .filter((resp: string) => resp !== ''),
      requirements: requirements
        .map((req: string) => req.trim())
        .filter((req: string) => req !== ''),
      numberOfOpenings: numberOfOpenings,
      applicationUrl: applicationUrl.trim(),
    };

    if (status) {
      updateFields.status = status;
    }

    const updateResult = await jobsCollection.updateOne(
      { id },
      { $set: updateFields }
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

    const updateResult = await jobsCollection.updateOne(
      { id },
      { $set: { status: 'inactive' } }
    );

    if (updateResult.matchedCount === 0) {
      return NextResponse.json(
        { message: 'Job posting not found' },
        { status: 404 }
      );
    }

    if (updateResult.modifiedCount === 1) {
      return NextResponse.json(
        { message: 'Job posting marked as inactive successfully' },
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
    console.error('Error marking job posting as inactive:', err.message, err.stack);
    return NextResponse.json(
      { message: 'Failed to mark job posting as inactive', error: err.message },
      { status: 500 }
    );
  }
}
