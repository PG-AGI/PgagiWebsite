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

export async function GET(request: Request) {
  try {
    const client = await clientPromise;
    const database = client.db('jobPosting');
    const jobsCollection = database.collection('Postings');

    const url = new URL(request.url);
    const status = url.searchParams.get('status') || 'active'; 

    const jobs = await jobsCollection.find({ status }).toArray();


    const formattedJobs: Job[] = jobs.map(job => ({
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
      status: job.status 
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
      category,
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
      !category ||
      (category !== 'technical' && category !== 'non technical') ||
      !description ||
      !Array.isArray(responsibilities) ||
      !Array.isArray(requirements) ||
      numberOfOpenings == null
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
      category, 
      description,
      responsibilities,
      requirements,
      numberOfOpenings,
      applicationUrl,
      status: 'active'
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
