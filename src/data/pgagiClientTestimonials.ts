/**
 * Real client reviews — single source of truth (aligned with `main` branch
 * InfiniteTestimonial carousel). Import from here for Customers wall, carousel, etc.
 */
export type PgagiClientReview = {
  name: string;
  company: string;
  country: string;
  quote: string;
  projectName: string;
  gender?: "male" | "female" | "neutral";
  platform?: "upwork" | "clutch";
  memberImage?: string;
  caseStudyUrl?: string;
};

export const pgagiClientTestimonials: PgagiClientReview[] = [
  {
    name: "Pascal",
    company: "",
    country: "France",
    platform: "upwork",
    gender: "male",
    memberImage: "/assets/Customers/Member1.png",
    quote:
      "I am so happy with this company. I am very happy I found them. I will do many many more optimizations and automations for my e-commerce business with them hopefully.",
    projectName: "AI System for E-commerce market place",
  },
  {
    name: "Will Dean",
    company: "",
    country: "",
    gender: "male",
    platform: "upwork",
    memberImage: "/assets/Customers/Member2.png",
    quote:
      "Highly skilled engineers who know how to scale AI applications. Their strategic approach saved us months of development time.",
    projectName: "Cracked.ai",
  },
  {
    name: "Nidaa",
    company: "Signato LLC",
    country: "",
    platform: "upwork",
    gender: "female",
    memberImage: "/assets/Customers/Member3.png",
    quote:
      "I loved working with this team. Extremely dedicated, constant communication and proactive in solving things. The best part is whenever i got a crazy idea ....",
    projectName: "Brainify",
  },
  {
    name: "Bernard",
    company: "",
    country: "USA",
    platform: "upwork",
    quote:
      "From day one, I was given expert analysis of our custom trained model. I don't know of many others that will walk you through data processing, model training, and endpoint deployment with such ease and expertise. Highly recommended for anyone who needs to get an A.I. endpoint up and running in under a week from scratch!",
    projectName:
      "VertexCast AI – Forecasting future trends with Vertex AI",
  },
  {
    name: "Nicholas",
    company: "",
    country: "Canada",
    platform: "clutch",
    quote:
      "Awesome service, sometimes takes more time than expected but they worked very hard and a very complicated project and never gave up. at the end of the day, project is done and working. We will hire for sure",
    projectName: "SportBetting ML Project",
  },
  {
    name: "San Dev",
    company: "Onchaintoolkit",
    country: "USA",
    platform: "upwork",
    quote: "You guys are really organized and professional. Thanks!",
    projectName: "MULTI-AGENT AI CRYPTO TRADING SYSTEM",
  },
  {
    name: "Lauren Fernandez",
    company: "Soulful Humans",
    country: "USA",
    gender: "female",
    platform: "upwork",
    memberImage: "/assets/Customers/Member8.png",
    quote:
      "I highly recommend PGAGI. They are highly communicative, talented, and a great team. I will work with them again!",
    projectName: "AI System to Convert Performance Data into Company",
  },
  {
    name: "David Catarious",
    company: "",
    country: "USA",
    platform: "clutch",
    quote:
      "PGAGI team did a terrific job. The quality of their work was high and communication was great. Schedules were clearly laid out, milestones were met on time, and they exhibited a high degree of cooperation with me throughout the project. Highly recommended.",
    projectName: "Gradio Application",
  },
  {
    name: "Nicholas ",
    company: "",
    country: "Canada",
    platform: "upwork",
    quote:
      "The team were very research oriented, worked over hours to get it done. Excellent work and sure will work together again.",
    projectName: "Binary Options Trading Indicator on MT4/MT5",
  },
  {
    name: "Nicholas",
    company: "",
    country: "Canada",
    platform: "upwork",
    quote:
      "This is the 2nd project we have worked together, highly satisfied. Hopefully will work more in future.",
    projectName:
      "iRaceOpt AI – Intelligent Telemetry Optimization for iRacing",
  },
  {
    name: "Lorella Sini",
    company: "Sardina Rentals",
    country: "Italy",
    gender: "female",
    platform: "clutch",
    memberImage: "/assets/Customers/Member10.png",
    quote:
      "Great service ,i suggest to collaborate with Vivek and his team ,they are very prepared for everything ,even though you are ignorant like me .",
    projectName: "SMUBOO AI AUTOMATION AGENT",
  },
  {
    name: "Rizwan",
    company: "Mideo Pty Ltd",
    country: "Australia",
    gender: "male",
    platform: "upwork",
    quote:
      "It was great working with the team, very thoughtful guys will work with PGAGI again.",
    projectName: "AI Hypnosis Agent",
  },
  {
    name: "Sybestian",
    company: "",
    country: "USA",
    platform: "upwork",
    quote:
      "Great working with the team, they are very research oriented and also responsive at the same time. ",
    projectName:
      "Airtable + AI ChatGPT Integration for Social Media Caption and Scheduling",
  },
  {
    name: "Subrotom21",
    company: "",
    country: "USA",
    platform: "clutch",
    quote:
      "They are very professional, flexible, and fast. Highly recommend working with them.",
    projectName: "RAG implementation for smart contact code",
  },
  {
    name: "Bally S Kehel",
    company: "Social 27",
    country: "USA",
    gender: "male",
    platform: "upwork",
    memberImage: "/assets/Customers/Member4.png",
    quote:
      "I had an exceptional experience working with this team. Their professionalism and deep expertise in React, React Flow, and AI were evident throughout the project. They quickly grasped our requirements and executed each task with precision, resulting in a swift and high-quality turnaround. Even when mid-stream changes occurred, they handled them gracefully while consistently meeting every milestone. I highly recommend this team for their technical prowess and commitment to excellence.",
    projectName: "Social 27",
  },
  {
    name: "Nitesh Puchhadiya",
    company: "",
    country: "IN",
    gender: "male",
    platform: "upwork",
    memberImage: "/assets/Customers/Member5.png",
    quote:
      " I had a great experience working with PGAGI Consultancy on an AI project. Their team demonstrated strong technical expertise, clear communication, and a proactive approach throughout the engagement. They delivered high-quality work, met deadlines consistently, and were highly responsive to any feedback or adjustments needed. ",
    projectName: "WebCodeGenie",
  },
  {
    name: "Nidaa",
    company: "Signato LLC",
    country: "",
    platform: "upwork",
    gender: "female",
    memberImage: "/assets/Customers/Member6.png",
    quote:
      "I loved working with this team. Extremely dedicated, constant communication and proactive in solving things. The best part is whenever i got a crazy idea....",
    projectName: "Brainify",
  },
  {
    name: "Mike Giuffrida",
    company: "",
    country: "USA",
    platform: "clutch",
    quote:
      "Great communication and very responsive throughout the project. The PGAGI team delivered excellent work, exceeding expectations in both quality and speed. They were proactive, collaborative, and quick to understand our requirements. Their technical expertise and dedication truly stood out. We're extremely satisfied with the outcome and look forward to working with them again on future projects.",
    projectName: "AI HIRING AGENT",
  },
  {
    name: "Preska Thomas",
    company: "DebitMyData",
    country: "USA",
    gender: "female",
    platform: "upwork",
    memberImage: "/assets/Customers/Member7.png",
    caseStudyUrl: "https://debitmydata.com/",
    quote:
      "PGAGI Team not only delivered the project on time but exceeded my expectations in every way. Their attention to detail, creativity, and ability to understand my vision were truly remarkable. They communicated clearly throughout the process, kept me updated regularly, and were always open to feedback, making collaboration seamless and enjoyable.",
    projectName: "AI NFT GENERATOR",
  },
  {
    name: "Lorella Sini",
    company: "",
    country: "",
    gender: "female",
    platform: "clutch",
    memberImage: "/assets/Customers/Member9.png",
    quote:
      "Professional, communicative, and technically brilliant. They are our go-to partner for any AI-driven development.",
    projectName: "Client Review",
  },
  {
    name: "Odunayo Talabi",
    company: "Sheltas Healthcare",
    country: "",
    gender: "male",
    platform: "clutch",
    memberImage: "/assets/Customers/Member11.png",
    quote:
      "PGAGI PRIVATE LIMITED has been an excellent, professional team — they deliver project milestones on time and with excellent work quality. Moreover, the team is technically efficient, very collaborative, and willing to course-correct if needed.",
    projectName: "Sheltas Healthcare AI System",
  },
];
