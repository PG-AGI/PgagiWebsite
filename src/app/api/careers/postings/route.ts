import { NextResponse } from 'next/server';
import clientPromise from '@/utils/mongodb'; // Adjust the path to your MongoDB client
// import  Job  from '@/utils/Job'; // Adjust the path to your Job interface

export async function GET() {
  try {
    // Get the MongoDB client
    const client = await clientPromise;
    
    // Select the database and collection
    const database = client.db('jobPosting'); // Replace with your actual database name
    const jobsCollection = database.collection('Postings');
    
    // Fetch all jobs
    const jobs = await jobsCollection.find({}).toArray();
    
    // Convert MongoDB documents to Job interface
    const formattedJobs = jobs.map(job => ({
      id: job.id,
      title: job.title,
      department: job.department,
      location: job.location,
      type: job.type,
      description: job.description,
      responsibilities: job.responsibilities,
      requirements: job.requirements,
      applicationUrl: job.applicationUrl
    }));
    
    // Return the jobs
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