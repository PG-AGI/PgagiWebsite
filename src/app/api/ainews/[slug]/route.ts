import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import clientPromise from '@/utils/mongodb';
import { ObjectId } from 'mongodb';
import { AINews } from '@/interfaces/ainews';

interface ContentBlock {
  type: 'paragraph' | 'quote' | 'highlight' | 'code' | 'image' | 'video' | 'table';
  content?: string | { headers: string[]; rows: string[][] };
  src?: string;
  alt?: string;
  caption?: string;
  title?: string;
}

export async function GET(request: NextRequest, { params }: { params: { slug: string } }) {
  const { slug } = params;
  if (!slug) {
    return NextResponse.json({ message: 'Slug is missing' }, { status: 400 });
  }

  try {
    const client = await clientPromise;
    const db = client.db();
    const collection = db.collection('ainews');
    const ainews = await collection.findOne({ slug: slug });

    if (!ainews) {
      return NextResponse.json({ message: 'AINEWS Not Found' }, { status: 404 });
    }

    const { _id, ...rest } = ainews;
    const response = {
      id: _id.toString(),
      ...rest,
    };

    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.error('Error fetching AINEWS:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest, { params }: { params: { slug: string } }) {
  const { slug } = params;
  if (!slug) {
    return NextResponse.json({ message: 'Slug is missing' }, { status: 400 });
  }

  try {
    const data = await request.json();

    if (
      !data.contentType ||
      !data.coverImage ||
      !data.title ||
      !data.publishDate ||
      !data.readTime ||
      !data.authorName ||
      !data.authorRole ||
      !Array.isArray(data.sections)
    ) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

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
        switch (block.type) {
          case 'paragraph':
          case 'quote':
          case 'highlight':
          case 'code':
          case 'table':
            if (!block.content) {
              return NextResponse.json(
                { message: `Content block ${blockIndex + 1} in section ${sectionIndex + 1} is missing content.` },
                { status: 400 }
              );
            }
            if (block.type === 'table') {
              if (
                typeof block.content !== 'object' ||
                !Array.isArray(block.content.headers) ||
                !Array.isArray(block.content.rows)
              ) {
                return NextResponse.json(
                  { message: `Table block ${blockIndex + 1} in section ${sectionIndex + 1} has invalid content structure.` },
                  { status: 400 }
                );
              }
              const headers = (block.content as { headers: string[] }).headers;
              const rows = (block.content as { rows: string[][] }).rows;
              if (rows.some(row => row.length !== headers.length)) {
                console.log('Table row length mismatch:', {
                  headers: headers.length,
                  rows: rows.map(r => r.length)
                });
                return NextResponse.json(
                  { message: `All rows in table block ${blockIndex + 1} must have the same number of columns as headers.` },
                  { status: 400 }
                );
              }
            }
            break;
          case 'box':
            if (!block.content ||
              typeof block.content !== 'object' ||
              !block.content.heading ||
              !block.content.text) {
              console.log('Table validation failed:', block.content);
              return NextResponse.json(
                { message: `Box block ${blockIndex + 1} in section ${sectionIndex + 1} requires valid heading and text.` },
                { status: 400 }
              );
            }
            break;
          case 'image':
            if (!block.content.src || !block.content.alt) {
              return NextResponse.json(
                { message: `Image block ${blockIndex + 1} in section ${sectionIndex + 1} requires src and alt.` },
                { status: 400 }
              );
            }
            const imageUrlPattern = /^https?:\/\/.*\.(jpeg|jpg|gif|png)$/;
            if (!imageUrlPattern.test(block.content.src)) {
              return NextResponse.json(
                { message: `Image block ${blockIndex + 1} in section ${sectionIndex + 1} requires a valid image URL.` },
                { status: 400 }
              );
            }
            break;
          case 'video':
            if (!block.content.src) {
              return NextResponse.json(
                { message: `Video block ${blockIndex + 1} in section ${sectionIndex + 1} requires src.` },
                { status: 400 }
              );
            }
            const youtubeEmbedRegex = /^https?:\/\/(www\.)?(youtube\.com\/embed\/|youtu\.be\/).+$/;
            if (!youtubeEmbedRegex.test(block.content.src)) {
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

    const updatedAinews: Partial<AINews> = {
      slug: data.slug,
      contentType: data.contentType,
      coverImage: data.coverImage,
      title: data.title,
      publishDate: data.publishDate,
      readTime: data.readTime,
      author: {
        name: data.authorName,
        role: data.authorRole,
      },
      metaDescription: data.metaDescription,
      metaKeywords: data.metaKeywords,
      metaAuthor: data.metaAuthor,
      metaTitle: data.metaTitle,
      sections: data.sections.map((section: any) => ({
        title: section.title,
        content: section.content.map((block: any) => ({
          type: block.type,
          content: block.content || '',
        })),
      })),
      updatedAt: new Date(),
    };

    const client = await clientPromise;
    const db = client.db();
    const collection = db.collection('ainews');

    const result = await collection.updateOne(
      { slug: slug },
      { $set: updatedAinews }
    );
    if (result.matchedCount === 0) {
      return NextResponse.json({ message: 'AINEWS Not Found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'AINEWS Updated Successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error updating AINEWS:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest, { params }: { params: { slug: string } }) {
  const { slug } = params;
  if (!slug) {
    return NextResponse.json({ message: 'Slug is missing' }, { status: 400 });
  }

  try {
    const client = await clientPromise;
    const db = client.db();
    const collection = db.collection('ainews');

    const result = await collection.deleteOne({ slug: slug });

    if (result.deletedCount === 0) {
      return NextResponse.json({ message: 'AINEWS Not Found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'AINEWS Deleted Successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error deleting AINEWS:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
