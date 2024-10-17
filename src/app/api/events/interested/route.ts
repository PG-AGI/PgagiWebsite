import clientPromise from '@/utils/mongodb';
import { NextResponse } from 'next/server';

// POST request to update interested count
export async function POST(req: Request) {
  try {
    console.log("Request received");

    const formData = await req.json();
    const { event_id, incrementBy } = formData;

    if (!event_id || typeof incrementBy !== 'number') {
      return NextResponse.json({ message: 'Invalid event_id or incrementBy' }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db('events'); 
    const collection = db.collection('interested'); 

    console.log("Connected to MongoDB");

    // Increment the interested count
    const result = await collection.findOneAndUpdate(
      { event_id},
      { $inc: { interestedCount: incrementBy } },
      { returnDocument: 'after', upsert: true }
    );

    console.log("Interested count updated successfully:", result?.value);

    return NextResponse.json({ message: 'Interested count updated successfully', result: result?.value });
  } catch (error) {
    const err = error as Error;
    console.error("Error in POST API:", err.message, err.stack);
    return NextResponse.json({ message: 'Failed to update interested count', error: err.message }, { status: 500 });
  }
}

// GET request to retrieve interested count
export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const event_id = url.searchParams.get('event_id');

    if (!event_id) {
      return NextResponse.json({ message: 'Missing event_id' }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db('events');
    const collection = db.collection('interested');

    // Check if the event exists
    const event = await collection.findOne({ event_id });

    if (!event) {
      // Create a new event with interestedCount of 5 if not found
      const newEvent = { event_id, interestedCount: 5 };
      await collection.insertOne(newEvent);
      return NextResponse.json({ message: 'New event created with interestedCount of 5', result: newEvent });
    }

    return NextResponse.json({ message: 'Event found', result: event });
  } catch (error) {
    const err = error as Error;
    console.error("Error in GET API:", err.message, err.stack);
    return NextResponse.json({ message: 'Failed to retrieve interested count', error: err.message }, { status: 500 });
  }
}
