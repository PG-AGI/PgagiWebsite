
export type ContentType = 'caseStudy' | 'blog' | 'ainews';

export type ContentBlock = {
    id: string;
    type: 'paragraph' | 'quote' | 'highlight' | 'code' | 'image' | 'video' | 'table' | 'box';
    content?: string | { headers: string[]; rows: string[][] } | { heading: string; text: string };
    src?: string;
    alt?: string;
    caption?: string;
    title?: string;
  };

  export type Section = {
    id: string;
    title: string;
    content: ContentBlock[];
  };
  interface tldrType{
    heading: string,
    text: string
  }
  export type FormValues = {
    slug: string;
    contentType: ContentType;
    coverImage: string;
    title: string;
    publishDate: string;
    readTime: string;
    authorName: string;
    authorRole: string;
    metaDescription: string,
    metaKeywords: string,
    metaAuthor: string,
    metaTitle: string,
    tldr: tldrType;
    sections: Section[];
  };
export type ContentSummary = {
  id: string;
  slug: string;
  title: string;
  coverImage: string;
  contentType: ContentType;
};

export type ContentDetails = {
  slug: string;
  coverImage: string;
  title: string;
  publishDate: string;
  readTime: string;
  author: {
    name: string;
    role: string;
  };
  metaDescription: string;
  metaKeywords: string;
  metaAuthor: string;
  metaTitle: string;
  tldr: {
    heading: '',
    text: ''
  }
  sections: {
    title: string;
    content: {
      type: 'paragraph' | 'quote' | 'highlight' | 'code' | 'image' | 'video' | 'table';
      content?: string | { headers: string[]; rows: string[][] };
      src?: string;
      alt?: string;
      caption?: string;
      title?: string;
    }[];
  }[];
  createdAt: string;
  updatedAt: string;
  contentType: ContentType;
};

export type Row = string[]; 
export interface TableData {
    headers: string[];
    rows: string[][];
  }