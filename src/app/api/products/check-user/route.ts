import clientPromise from '@/utils/mongodb';
import { NextResponse } from 'next/server';

// Helper function to check if a date is older than 7 days
const isOlderThan7Days = (date: Date): boolean => {
  const now = new Date();
  const difference = now.getTime() - new Date(date).getTime();
  return difference > 7 * 24 * 60 * 60 * 1000; // 7 days in milliseconds
  //return difference >  1000;
};

export async function POST(req: Request) {
  try {
    const formData = await req.json();
    const { fingerprint, userId } = formData;

    if (!fingerprint || !userId) {
      return NextResponse.json({ message: 'Invalid fingerprint or userId' }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db('product-tracking');
    const collection = db.collection('requests');

    const existingRequest = await collection.findOne({ fingerprint, userId });

    if (existingRequest) {
      const { requestTime } = existingRequest;

      // Check if the requestTime is older than 7 days
      if (isOlderThan7Days(requestTime)) {
        return NextResponse.json({
          message: 'Free trial has ended',
          freeTrialEnded: true,
        });
      } else {
        return NextResponse.json({
          message: 'User has used the request before',
          usedBefore: true,
        });
      }
    } else {
      const newRequest = await collection.insertOne({
        fingerprint,
        userId,
        requestTime: new Date(),
      });

      return NextResponse.json({
        message: 'New request added',
        usedBefore: false,
      });
    }
  } catch (error) {
    const err = error as Error;
    console.error('Error in POST API:', err.message, err.stack);
    return NextResponse.json(
      { message: 'Failed to track request', error: err.message },
      { status: 500 }
    );
  }
}
