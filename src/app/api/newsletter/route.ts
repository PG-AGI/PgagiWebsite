// src/app/api/newsletter/route.ts

import { NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';

// MongoDB connection string
const MONGODB_URI = 'mongodb+srv://sahil:jGkcD58oin2tjwx7@pgagiwebsite.wzf6u.mongodb.net/?retryWrites=true&w=majority';

let cachedClient: MongoClient | null = null;

async function connectToDatabase() {
  if (cachedClient) {
    console.log('Using cached MongoDB client');
    return cachedClient;
  }

  console.log('Connecting to MongoDB');
  const client = await MongoClient.connect(MONGODB_URI);
  cachedClient = client;
  return client;
}

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || typeof email !== 'string' || !email.includes('@')) {
      console.error('Invalid email format');
      return NextResponse.json({ message: 'Invalid email format.' }, { status: 400 });
    }

    const client = await connectToDatabase();
    const db = client.db('Website'); // Database name
    const collection = db.collection('UserEmailsforNewletters'); // Collection name

    console.log('Inserting email:', email);
    const result = await collection.insertOne({ email, date: new Date() });
    console.log('Insert result:', result);

    if (result.acknowledged) {
      console.log('Email inserted successfully:', email);
      return NextResponse.json({ message: 'Successfully signed up for the newsletter!' }, { status: 200 });
    } else {
      console.error('Failed to insert email:', email);
      return NextResponse.json({ message: 'Failed to insert email.' }, { status: 500 });
    }
  } catch (error) {
    console.error('An error occurred:', error);
    return NextResponse.json({ message: 'An error occurred. Please try again.' }, { status: 500 });
  }
}
