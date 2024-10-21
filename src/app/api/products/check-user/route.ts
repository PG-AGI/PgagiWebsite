import clientPromise from '@/utils/mongodb';
import { NextResponse } from 'next/server';

// POST request to track user request by fingerprint and userId
export async function POST(req: Request) {
  try {
    console.log("Request received");

    const formData = await req.json();
    const { fingerprint, userId } = formData;

    if (!fingerprint || !userId) {
      return NextResponse.json({ message: 'Invalid fingerprint or userId' }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db('product-tracking'); 
    const collection = db.collection('requests'); 

    console.log("Connected to MongoDB");

    // Check if the fingerprint and userId exist
    const existingRequest = await collection.findOne({ fingerprint, userId });

    if (existingRequest) {
      console.log("User has used the request before:", existingRequest);
      return NextResponse.json({ message: 'User has used the request before', usedBefore: true });
    } else {
      // Insert new record if not found
      const newRequest = await collection.insertOne({ fingerprint, userId, requestTime: new Date() });
      console.log("New request added:", newRequest);
      return NextResponse.json({ message: 'New request added', usedBefore: false });
    }
  } catch (error) {
    const err = error as Error;
    console.error("Error in POST API:", err.message, err.stack);
    return NextResponse.json({ message: 'Failed to track request', error: err.message }, { status: 500 });
  }
}
