import clientPromise from '@/utils/mongodb';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    console.log("Request received");

    const formData = await req.json();
    console.log(formData)

    const client = await clientPromise;
    const db = client.db('events'); 
    const collection = db.collection('participants'); 

    console.log("Connected to MongoDB");

    // Insert the data into MongoDB
    const result = await collection.insertOne({
      ... formData,
      enrolledAt: new Date(),
    });

    console.log("Data inserted successfully:", result);

    return NextResponse.json({ message: 'Data saved successfully', result });
  } catch (error) {
    const err = error as Error;
    console.error("Error in API saveData:", err.message, err.stack);
    return NextResponse.json({ message: 'Failed to save data', error: err.message }, { status: 500 });
  }
}