

export interface BlogContentBlock {
    type: 'paragraph' | 'quote' | 'highlight' | 'code' | 'image' | 'video'| 'table';
    content?: string | { headers: string[]; rows: string[][] };
    src?: string;
    alt?: string;
    caption?: string;
    title?: string; 
  }
  
  export interface BlogSection {
    title: string;
    content: BlogContentBlock[];
  }
  
  export interface Blog {
    contentType: string;
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
    tldr: {
      heading: '',
      text: ''
    }
    sections: BlogSection[];
    createdAt: Date;
    updatedAt: Date;
  }
  