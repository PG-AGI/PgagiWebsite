// app/api/case-studies/route.ts
// https://pgagi.in/api/case-studies/[id]

import {NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import clientPromise from '@/utils/mongodb'; 
import { ObjectId } from 'mongodb';


interface ContentBlock {
  type: 'paragraph' | 'quote' | 'highlight' | 'code' | 'image' | 'video' | 'table'| 'box';
  content?: string | { headers: string[]; rows: string[][] };
  src?: string;
  alt?: string;
  caption?: string;
  title?: string; 
}

interface Section {
  title: string;
  content: ContentBlock[];
}

interface CaseStudy {
  slug: string;
  contentType: string;
  coverImage: string;
  title: string;
  publishDate: string;
  readTime: string;
  author: {
    name: string;
    role: string;
  };
  metaDescription: string,
  metaKeywords: string,
  metaAuthor: string,
  metaTitle: string,
  sections: Section[];
  createdAt: Date;
  updatedAt: Date;
}

export const revalidate = 3600; // Revalidate every hour

export async function POST(request: NextRequest) {
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
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      );
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
            break;
          case 'video':
            if (!block.src) {
              return NextResponse.json(
                { message: `Video block ${blockIndex + 1} in section ${sectionIndex + 1} requires src.` },
                { status: 400 }
              );
            }
            const youtubeEmbedRegex = /^https?:\/\/(www\.)?(youtube\.com\/embed\/|youtu\.be\/).+$/;
            if (!youtubeEmbedRegex.test(block.src)) {
              return NextResponse.json(
                { message: `Video block ${blockIndex + 1} in section ${sectionIndex + 1} requires a valid YouTube embed URL.` },
                { status: 400 }
              );
            }
            break;
          case 'table':
            if (!block.content || 
                typeof block.content !== 'object' || 
                !Array.isArray((block.content as { headers: string[]; rows: string[][] }).headers) || 
                !Array.isArray((block.content as { headers: string[]; rows: string[][] }).rows)) {
              return NextResponse.json(
                { message: `Table block ${blockIndex + 1} in section ${sectionIndex + 1} requires valid headers and rows.` },
                { status: 400 }
              );
            }
            const headers = (block.content as { headers: string[] }).headers;
            const rows = (block.content as { rows: string[][] }).rows;
            if (rows.some(row => row.length !== headers.length)) {
              return NextResponse.json(
                { message: `All rows in table block ${blockIndex + 1} must have the same number of columns as headers.` },
                { status: 400 }
              );
            }
            break;
          case 'box':
            if (!block.content || 
                typeof block.content !== 'object' || 
                !block.content.heading || 
                !block.content.text) {
              return NextResponse.json(
                { message: `Box block ${blockIndex + 1} in section ${sectionIndex + 1} requires heading and text.` },
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

    // Prepare the case study object
    const caseStudy: CaseStudy = {
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
      sections: data.sections.map((section: Section) => ({
        title: section.title,
        content: section.content.map((block: ContentBlock) => ({
          type: block.type,
          content: block.content || '',
          src: block.src || '',
          alt: block.alt || '',
          caption: block.caption || '',
          title: block.title || '',
        })),
      })),
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    // Connect to MongoDB
    const client = await clientPromise;
    const db = client.db(); // Use the default DB specified in your MongoClient
    const collection = db.collection('caseStudies');

    // Insert the case study into the collection
    const result = await collection.insertOne(caseStudy);

    // Return the inserted case study's ID
    return NextResponse.json(
      { message: 'Case Study created successfully', id: result.insertedId },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating case study:', error);
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: 500 }
    );
  }
}


export async function GET(request: NextRequest) {
  try {
    const client = await clientPromise;
    const db = client.db();
    const collection = db.collection('caseStudies');
    const caseStudies = await collection.find({}, { projection: { slug: 1, title: 1, coverImage: 1 } }).toArray();
    const response = caseStudies.map((caseStudy) => ({
      slug: caseStudy.slug,
      title: caseStudy.title,
      coverImage: caseStudy.coverImage,
    }));

    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.error('Error fetching case studies:', error);
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
