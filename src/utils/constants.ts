import linkedin from '../app/assets/social/in.png'
import instagram from '../app/assets/social/instagram.png'
import youtube from '../app/assets/social/youtube.png'
import x from '../app/assets/social/x.png'
import case_study from '../app/assets/trending_cards/case_study2.png';
import ai_news from '../app/assets/trending_cards/ai_news2.png';
import news from '../app/assets/trending_cards/news2.png';
import blogs from '../app/assets/trending_cards/blogs2.png';
import ais from '../app/assets/partners/ais3.png';
import hx from '../app/assets/partners/hx.png';
import social from '../app/assets/partners/social27.png';
import ciek from '../app/assets/partners/ciek2.png';
import aixl from '../app/assets/partners/aixl2.png';
import topSection from '../app/assets/topSection.png';
import { StaticImageData } from 'next/image';

export const trendingList = [
    {
      "title": "Case study",
      "description": "Revolutionizing Recruitment with AI",
      "brief":"Discover how our AI Recruiter Agent revolutionizes the staffing industry with predictive analytics and humanized interactions, enhancing recruitment precision and efficiency.",
      "image":case_study
    },
    {
      "title": "Blog",
      "description": "Prompt Engineering vs Prompt Tuning",
      "brief":"Discover Explore the intricacies of prompt engineering and prompt tuning in AI, uncovering how these NLP techniques refine language model interactions for superior outcomes.",
      "image":blogs

    },
    {
      "title": "AI News",
      "description": "Meta Unveils Groundbreaking Enhancements to Its AI with Llama 3 Release",
      "brief":"Meta launches Llama 3 AI, boasting advanced reasoning and coding, set to revolutionize AI interactions and integration across its platforms.",
      "image":ai_news,
      "url": "https://www.businessinsider.in/tech/news/mark-zuckerberg-announces-big-ai-news/articleshow/109412432.cms"
  

    },
    // {
    //   "title": "Case Study",
    //   "description": "Next-Gen AI Hypnotherapist",
    //   "brief":"Experience the future of hypnotherapy with our AI-powered platform, automating the creation of personalized hypnosis scripts for enhanced therapeutic sessions.",
    //   "image":""

    // },
    // {
    //   "title": "Blog",
    //   "description": "DSPy: Your Guide to AI Prompt Mastery",
    //   "brief":"Discover the simplicity of DSPy in optimizing AI prompts, improving model performance and saving development time.",
    //   "image":""

    // },
    // {
    //   "title": "News",
    //   "description": "Interactive AI Q&A on YouTube",
    //   "brief":"Check out YouTube’s AI-driven Q&A feature for Premium users, offering seamless, real-time interaction with video content.",
    //   "image":news

    // },
    {
      "title": "Case Study",
      "description": "TutorGPT: Smart AI for Smarter Learning",
      "brief":"Discover TutorGPT, the Advanced AI educational platform offering personalized tutoring and enhancing learning experience, helping students to achieve a deeper understanding of complex subjects.",
      "image": case_study
      
    },
    // {
    //   "title": "Blog",
    //   "description": "Unlock AI Potential with DSPy Signatures",
    //   "brief":"Explore how DSPy Signatures enhance AI prompt creation, leading to more precise and efficient language model outputs.",
    //   "image":""

    // }
]

export const segmentList = [
  {
    title: 'Here’s How We Make Your Products Grow',
  },
  {
    title: 'Discover & Feasibility',
    subtitle: 'Assessing AI’s potential to innovate and validating the initial concept with a POC'
  },
  {
    title: 'Data preparation & research',
    subtitle: 'Curating and refining data sets to lay the groundwork for tailored AI solutions'
  },
  {
    title: 'Modern development & strategy',
    subtitle: 'Crafting and training bespoke AI models, strategising for integration and scalability.'
  },
  {
    title: 'MVP creation',
    subtitle: 'Building a functional minimum viable product that embodies the AI solution for user feedback.'
  },
  {
    title: 'Quality assurance',
    subtitle: 'Testing and refining the AI MVP prioritising performance and user centric enhancements.'
  },
  {
    title: 'Deployment & Evaluation',
    subtitle: 'Launching the AI product with ongoing evaluation and optimisation for peak performance.'
  }
]

export const links = [
  'Blogs',
  'News',
  'Case Study'
  
]

export const services = [
  'Generative AI Solutions',
  'AI-Driven Business Automation',
  'Ethical AI Development',
  'Prompt Engineering & Tuning',
  'AI Integration & Deployment'
]

export const resources = [  
  'About Us',
]

// Define a type for social media links
type SocialLink = {
  icon: StaticImageData;
  url: string;
  alt: string;
};

// Update your socialList with this type
export const socialList: SocialLink[] = [
  {
      icon: linkedin,
      url: 'https://www.linkedin.com/company/pg-agi/',
      alt: 'LinkedIn'
  },
  {
      icon: instagram,
      url: 'https://www.instagram.com/pgagi_pvt.ltd/',
      alt: 'Instagram'
  },
  {
      icon: youtube,
      url: 'https://youtube.com/@pg-agi?feature=shared',
      alt: 'YouTube'
  },
  {
      icon: x,
      url: 'https://x.com/PGAGI123?t=hAoqjn4ffAoYXjIp9yt-ug&s=09',
      alt: 'Example'
  }
];
export const whatWeDoLinks = {
	solutions: [
		"AGI",
		"AI Agent Development",
		"AI Calling Agent",
		"Multi-Agent Development for Trading",
		"Multi-Agent Development for Recruiting",
		"Healthcare AI",
		"Business Automation",
		"Voice Assistant ChatBot Development",
		"Machine Learning Deployment",
		"Natural Language Processing",
		"Retrieval-Augmented Generation",
		"Market Sentiment Analysis",
		"Prompt Engineering",
		"Retrieval-Augmented Generation",
		"Predictive Analytics",
		"Data Mining",
		"Supply Chain AI",
		"Financial Forecasting",
		"Ethical AI",
    "Market Research AI",
    "Algorithm Development",
    "AI Training",
    "AI for Sustainability"
],
	industries: [
		"Software & Platforms",
    "Telecommunications",
    "Healthcare",
    "Finance",
    "Real Estate",
    "Media & Entertainment",
    "Banking",
    "Education",
    "Automotive",
    "Government & Public Sector",
    "Retail",
    "Transportation & Logistics",
    "Consumer Goods & Services",
    "Energy & Utilities",
    "Hospitality & Tourism",
    "Insurance",
    "Manufacturing",
    "Agriculture",
	],
	caseStudy: [
		"AI Calling Agent",
		"AI Autonomous Recruiter Agent",
		"AI Multi-Trading Bot",
		"E-Commerce Voice-bot",
		"AI Interviewer",
		"MT4 Binary Trading Bot",
		"Multi-Agent Trading(Crypto)",
    "Automated Trading Agent for cTrader to MT5 Integration",
    "Live Trading Data extraction",
    "NBA Betting Application",
    "Telemetry Data Analytics for Icar racing optimization",
    "Innovative Healthcare Marketplace with AI/ML Technology",
    "Auto caption generator (Image & Video processing system)",
    "Market Sentiment Analysis",
    "Advanced NBA Betting Application",
    "Tutor GPT",
    "Hypnosis Script Generator",
	],
};

export const topContent = [
  {
    "title": "Latest Update",
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, possimus.",   
    "image":topSection
  },
  {
    "title": "Latest Update",
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, possimus.",   
    "image":news
  },
  {
    "title": "Latest Update",
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, possimus.",   
    "image":ai_news
  },
  {
    "title": "Latest Update",
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, possimus.",   
    "image":blogs
  },
]

export const blogContent = [
  {
    "title": "Case study",
    "description": "Revolutionizing Recruitment with AI",
    "brief":"Discover how our AI Recruiter Agent revolutionizes the staffing industry with predictive analytics and humanized interactions, enhancing recruitment precision and efficiency.",
    "image":case_study
  },
  {
    "title": "Blog",
    "description": "Prompt Engineering vs Prompt Tuning",
    "brief":"Discover Explore the intricacies of prompt engineering and prompt tuning in AI, uncovering how these NLP techniques refine language model interactions for superior outcomes.",
    "image":blogs

  },
  {
    "title": "AI News",
    "description": "Meta Unveils Groundbreaking Enhancements to Its AI with Llama 3 Release",
    "brief":"Meta launches Llama 3 AI, boasting advanced reasoning and coding, set to revolutionize AI interactions and integration across its platforms.",
    "image":ai_news,
    "url": "https://www.businessinsider.in/tech/news/mark-zuckerberg-announces-big-ai-news/articleshow/109412432.cms"


  },
  {
    "title": "Case Study",
    "description": "Next-Gen AI Hypnotherapist",
    "brief":"Experience the future of hypnotherapy with our AI-powered platform, automating the creation of personalized hypnosis scripts for enhanced therapeutic sessions.",
    "image":news

  },
]

export const caseStudyContent = [
  {
    "title": "Case study",
    "description": "Revolutionizing Recruitment with AI",    
    "image":case_study
  },
  {
    "title": "Latest Update",
    "description": "TutorGPT: Smart AI for Smarter Learning",
    "image":news
  },
  {
    "title": "Latest Update",
    "description": "DSPy: Your Guide to AI Prompt Mastery",
    "image":ai_news
  },
  {
    "title": "Latest Update",
    "description": "Meta Unveils Groundbreaking Enhancements to Its AI with Llama 3 Release",
    "image":blogs
  },
  // {
  //   "title": "Latest Update",
  //   "description": "TutorGPT: Smart AI for Smarter Learning",
  //   "image":news
  // },
  // {
  //   "title": "Latest Update",
  //   "description": "DSPy: Your Guide to AI Prompt Mastery",
  //   "image":ai_news
  // },
  // {
  //   "title": "Latest Update",
  //   "description": "Meta Unveils Groundbreaking Enhancements to Its AI with Llama 3 Release",
  //   "image":blogs
  // },
]

export const newsContent = [
  {
    "title": "Case study",
    "description": "Revolutionizing Recruitment with AI",
    "brief":"Discover how our AI Recruiter Agent revolutionizes the staffing industry with predictive analytics and humanized interactions, enhancing recruitment precision and efficiency.",
    "image":case_study
  },
   {
      "title": "Case Study",
      "description": "Next-Gen AI Hypnotherapist",
      // "brief":"Experience the future of hypnotherapy with our AI-powered platform, automating the creation of personalized hypnosis scripts for enhanced therapeutic sessions.",
      "image":news

    },
    {
      "title": "Blog",
      "description": "DSPy: Your Guide to AI Prompt Mastery",
      "brief":"Discover the simplicity of DSPy in optimizing AI prompts, improving model performance and saving development time.",
      "image":blogs

    },
    {
      "title": "News",
      "description": "Interactive AI Q&A on YouTube",
      "brief":"Check out YouTube’s AI-driven Q&A feature for Premium users, offering seamless, real-time interaction with video content.",
      "image":ai_news

    },
]

export const storyContent = [
  {
    "title": "HireXtra.com is Unicorn AI HRTech Platform",
    // "description": "Revolutionizing Recruitment with AI",    
    "image":hx
  },
   {
      "title": "Events that accelerate Sales & build Community",
      // "description": "Next-Gen AI Hypnotherapist",      
      "image":social

    },
    {
      "title": "CIEK help maximize customer value and return on marketing investments.",
      // "description": "DSPy: Your Guide to AI Prompt Mastery",
      "image":ciek

    },
    {
      "title": "AIXL",
      // "description": "Interactive AI Q&A on YouTube",      
      "image":aixl

    },
    {
      "title": "ais",
      // "description": "Interactive AI Q&A on YouTube",      
      "image":ais

    },
]

export const aboutUs =[
  {
    "titile" : "Innovation",
    "description" : "Constantly pushing the boundaries of what's possible with AI."
  },
  {
    "titile" : "Collaboration",
    "description" : "Working closely with clients to achieve their goals."
  },
  {
    "titile" : "Integrity",
    "description" : " Upholding the highest standards of honesty and transparency."
  },
  {
    "titile" : "Excellence",
    "description" : "Committed to delivering the best quality in all our projects."
  },
  {
    "titile" : "Customer Focus",
    "description" : "Ensuring client satisfaction through dedicated service and support."
  }
]

export const whyChoose =[
  {
    "title": "Expertise and Experience: ",
    "description" : "Our team consists of seasoned AI professionals and researchers who are well-versed in the latest technologies and methodologies.",
  },
  {
    "title": "Customized Solutions: ",
    "description" : "We tailor our AI solutions to meet the specific needs of each client, ensuring maximum impact and efficiency.",
  },
  {
    "title": "Innovative Approach ",
    "description" : "We stay ahead of industry trends, utilizing cutting-edge techniques and tools to deliver innovative and effective AI solutions.",
  },
  {
    "title": "Comprehensive Support: ",
    "description" : "From strategy development to implementation and training, we provide end-to-end support to ensure seamless integration and optimal use of AI.",
  },
  {
    "title": "Proven Track Record: ",
    "description" : "Our successful projects and satisfied clients are a testament to our ability to deliver high-quality AI solutions that drive real business results.",
  },
]