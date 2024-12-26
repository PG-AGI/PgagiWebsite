// interfaces/blog.ts

export interface BlogContentBlock {
    type: 'paragraph' | 'quote' | 'highlight' | 'code' | 'image' | 'video';
    content?: string;
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
    coverImage: string;
    title: string;
    publishDate: string;
    readTime: string;
    author: {
      name: string;
      role: string;
    };
    sections: BlogSection[];
    createdAt: Date;
    updatedAt: Date;
  }
  