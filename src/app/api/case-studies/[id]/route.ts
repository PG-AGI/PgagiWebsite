// app/api/case-studies/[id]/route.ts

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import clientPromise from '@/utils/mongodb'; // Adjust the path based on your project structure
import { ObjectId } from 'mongodb';

// Define the shape of the incoming data for PUT requests
interface ContentBlock {
  type: 'paragraph' | 'quote' | 'highlight' | 'code' | 'image' | 'video';
  content?: string;
  src?: string;
  alt?: string;
  caption?: string;
  title?: string; // For video title
}

interface Section {
  title: string;
  content: ContentBlock[];
}

interface CaseStudy {
  coverImage: string;
  title: string;
  publishDate: string;
  readTime: string;
  author: {
    name: string;
    role: string;
  };
  sections: Section[];
  createdAt: Date;
  updatedAt: Date;
}

// Existing GET Handler: Fetch a single case study by ID
export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;

  if (!ObjectId.isValid(id)) {
    return NextResponse.json(
      { message: 'Invalid Case Study ID' },
      { status: 400 }
    );
  }

  try {
    const client = await clientPromise;
    const db = client.db(); 
    const collection = db.collection('caseStudies');

    const caseStudy = await collection.findOne({ _id: new ObjectId(id) });

    if (!caseStudy) {
      return NextResponse.json(
        { message: 'Case Study Not Found' },
        { status: 404 }
      );
    }

    const { _id, ...rest } = caseStudy;
    const response = {
      id: _id.toString(),
      ...rest,
    };

    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.error('Error fetching case study:', error);
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: 500 }
    );
  }
}

// PUT Handler: Update an existing case study by ID
export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;

  // Validate ObjectId
  if (!ObjectId.isValid(id)) {
    return NextResponse.json(
      { message: 'Invalid Case Study ID' },
      { status: 400 }
    );
  }

  try {
    const data = await request.json();

    // Basic validation
    if (
      !data.coverImage ||
      !data.title ||
      !data.publishDate ||
      !data.readTime ||
      !data.authorName ||
      !data.authorRole ||
      !Array.isArray(data.sections)
    ) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Further validation: Validate each section and content blocks
    for (const [sectionIndex, section] of data.sections.entries()) {
      if (!section.title) {
        return NextResponse.json(
          { message: `Section ${sectionIndex + 1} is missing a title.` },
          { status: 400 }
        );
      }
      if (!Array.isArray(section.content)) {
        return NextResponse.json(
          { message: `Section ${sectionIndex + 1} content should be an array.` },
          { status: 400 }
        );
      }
      for (const [blockIndex, block] of section.content.entries()) {
        if (!block.type) {
          return NextResponse.json(
            { message: `Content block ${blockIndex + 1} in section ${sectionIndex + 1} is missing a type.` },
            { status: 400 }
          );
        }
        // Additional validations based on block type
        switch (block.type) {
          case 'paragraph':
          case 'quote':
          case 'highlight':
          case 'code':
            if (!block.content) {
              return NextResponse.json(
                { message: `Content block ${blockIndex + 1} in section ${sectionIndex + 1} is missing content.` },
                { status: 400 }
              );
            }
            break;
          case 'image':
            if (!block.src || !block.alt) {
              return NextResponse.json(
                { message: `Image block ${blockIndex + 1} in section ${sectionIndex + 1} requires src and alt.` },
                { status: 400 }
              );
            }
            // Optional: Validate image URL format
            const imageUrlPattern = /^https?:\/\/.*\.(jpeg|jpg|gif|png)$/;
            if (!imageUrlPattern.test(block.src)) {
              return NextResponse.json(
                { message: `Image block ${blockIndex + 1} in section ${sectionIndex + 1} requires a valid image URL.` },
                { status: 400 }
              );
            }
            break;
          case 'video':
            if (!block.src) {
              return NextResponse.json(
                { message: `Video block ${blockIndex + 1} in section ${sectionIndex + 1} requires src.` },
                { status: 400 }
              );
            }
            // Optional: Validate YouTube embed URL format
            const youtubeEmbedRegex = /^https?:\/\/(www\.)?(youtube\.com\/embed\/|youtu\.be\/).+$/;
            if (!youtubeEmbedRegex.test(block.src)) {
              return NextResponse.json(
                { message: `Video block ${blockIndex + 1} in section ${sectionIndex + 1} requires a valid YouTube embed URL.` },
                { status: 400 }
              );
            }
            break;
          default:
            return NextResponse.json(
              { message: `Invalid content block type '${block.type}' in section ${sectionIndex + 1}.` },
              { status: 400 }
            );
        }
      }
    }

    // Prepare the updated case study object
    const updatedCaseStudy: Partial<CaseStudy> = {
      coverImage: data.coverImage,
      title: data.title,
      publishDate: data.publishDate,
      readTime: data.readTime,
      author: {
        name: data.authorName,
        role: data.authorRole,
      },
      sections: data.sections.map((section: any) => ({
        title: section.title,
        content: section.content.map((block: any) => ({
          type: block.type,
          content: block.content || '',
          src: block.src || '',
          alt: block.alt || '',
          caption: block.caption || '',
          title: block.title || '',
        })),
      })),
      updatedAt: new Date(),
    };

    // Connect to MongoDB
    const client = await clientPromise;
    const db = client.db();
    const collection = db.collection('caseStudies');

    // Update the case study in the collection
    const result = await collection.updateOne(
      { _id: new ObjectId(id) },
      { $set: updatedCaseStudy }
    );

    if (result.matchedCount === 0) {
      return NextResponse.json(
        { message: 'Case Study Not Found' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: 'Case Study Updated Successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error updating case study:', error);
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: 500 }
    );
  }
}

// DELETE Handler: Remove a case study by ID
export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;

  // Validate ObjectId
  if (!ObjectId.isValid(id)) {
    return NextResponse.json(
      { message: 'Invalid Case Study ID' },
      { status: 400 }
    );
  }

  try {
    const client = await clientPromise;
    const db = client.db();
    const collection = db.collection('caseStudies');

    // Delete the case study
    const result = await collection.deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      return NextResponse.json(
        { message: 'Case Study Not Found' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: 'Case Study Deleted Successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error deleting case study:', error);
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
