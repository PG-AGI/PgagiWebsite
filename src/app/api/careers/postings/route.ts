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
  numberOfOpenings: number;
  applicationUrl: string;
}

export async function GET() {
  try {
    const client = await clientPromise;
    const database = client.db('jobPosting');
    const jobsCollection = database.collection('Postings');
    const jobs = await jobsCollection.find({}).toArray();

    const formattedJobs: Job[] = jobs.map(job => ({
      id: job.id,
      title: job.title,
      department: job.department,
      location: job.location,
      type: job.type,
      description: job.description,
      responsibilities: job.responsibilities,
      requirements: job.requirements,
      numberOfOpenings: job.numberOfOpenings,
      applicationUrl: job.applicationUrl
    }));

    return NextResponse.json(formattedJobs, { status: 200 });
  } catch (error) {
    const err = error as Error;
    console.error('Error fetching jobs:', err.message, err.stack);
    return NextResponse.json(
      { message: 'Failed to fetch job postings', error: err.message },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      id,
      title,
      department,
      location,
      type,
      description,
      responsibilities,
      requirements,
      numberOfOpenings,
      applicationUrl
    } = body;

    if (
      !id ||
      !title ||
      !department ||
      !location ||
      !type ||
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
    

    const client = await clientPromise;
    const database = client.db('jobPosting');
    const jobsCollection = database.collection('Postings');

    const newJob: Job = {
      id,
      title,
      department,
      location,
      type,
      description,
      responsibilities,
      requirements,
      applicationUrl,
      numberOfOpenings
    };

    const result = await jobsCollection.insertOne(newJob);

    if (result.acknowledged) {
      return NextResponse.json(
        { message: 'Job posting created successfully', job: newJob },
        { status: 201 }
      );
    } else {
      throw new Error('Failed to insert the job posting');
    }
  } catch (error) {
    const err = error as Error;
    console.error('Error creating job posting:', err.message, err.stack);
    return NextResponse.json(
      { message: 'Failed to create job posting', error: err.message },
      { status: 500 }
    );
  }
}
