
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
  export type FormValues = {
    contentType: ContentType;
    coverImage: string;
    title: string;
    publishDate: string;
    readTime: string;
    authorName: string;
    authorRole: string;
    sections: Section[];
  };
export type ContentSummary = {
  id: string;
  title: string;
  coverImage: string;
  contentType: ContentType;
};

export type ContentDetails = {
  id: string;
  coverImage: string;
  title: string;
  publishDate: string;
  readTime: string;
  author: {
    name: string;
    role: string;
  };
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
export type TableData = Row[]; 
