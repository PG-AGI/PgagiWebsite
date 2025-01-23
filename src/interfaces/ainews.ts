
export interface AINewsContentBlock {
    type: 'paragraph' | 'quote' | 'highlight' | 'code' | 'image' | 'video' | 'table';
    content?: string | { headers: string[]; rows: string[][] };
    src?: string;
    alt?: string;
    caption?: string;
    title?: string;
  }
  
  export interface AINewsSection {
    title: string;
    content: AINewsContentBlock[];
  }
  
  export interface AINews {
    coverImage: string;
    title: string;
    publishDate: string;
    readTime: string;
    metaDescription: string;
    metaKeywords: string;
    metaAuthor: string;
    metaTitle: string;
    author: {
      name: string;
      role: string;
    };
    sections: AINewsSection[];
    createdAt: Date;
    updatedAt: Date;
  }
  