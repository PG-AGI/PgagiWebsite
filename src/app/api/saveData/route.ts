import { NextResponse } from 'next/server';
import clientPromise from '@/utils/mongodb';

export async function POST(req: Request) {
  try {
    console.log("Request received");

    const { whatYouCanBuild, email } = await req.json();
    console.log("Parsed request data:", whatYouCanBuild);

    const client = await clientPromise;
    const db = client.db('buildData'); 
    const collection = db.collection('bdata'); 

    console.log("Connected to MongoDB");

    // Insert the data into MongoDB
    const result = await collection.insertOne({
      whatYouCanBuild,
      email,
      createdAt: new Date(),
    });

    console.log("Data inserted successfully:", result);

    return NextResponse.json({ message: 'Data saved successfully', result });
  } catch (error) {
    const err = error as Error;
    console.error("Error in API saveData:", err.message, err.stack);
    return NextResponse.json({ message: 'Failed to save data', error: err.message }, { status: 500 });
  }
}
