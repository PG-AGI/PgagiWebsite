import linkedin from '../app/assets/social/in.png'
import instagram from '../app/assets/social/instagram.png'
import youtube from '../app/assets/social/youtube.png'
import x from '../app/assets/social/x.png'
import case_study from '../app/assets/trending_cards/case_study2.png';
import ai_news from '../app/assets/trending_cards/ai_news2.png';
import stories from '../app/assets/trending_cards/stories.png'
import news from '../app/assets/trending_cards/news2.png';
import case1 from '../app/assets/trending_cards/case1.svg';
import case2 from '../app/assets/trending_cards/case2.svg';
import case3 from '../app/assets/trending_cards/case3.svg';
import case4 from '../app/assets/trending_cards/case4.svg';
import news1 from '../app/assets/trending_cards/news1.svg';
import news2 from '../app/assets/trending_cards/news2.svg';
import news3 from '../app/assets/trending_cards/news3.svg';
import news4 from '../app/assets/trending_cards/news4.svg';
import news5 from '../app/assets/trending_cards/news5.svg';
import blogs from '../app/assets/trending_cards/blogs2.png';
import blog1 from '../app/assets/trending_cards/blog1.svg';
import blog2 from '../app/assets/trending_cards/blog2.svg';
import blog3 from '../app/assets/trending_cards/blog3.svg';
import blog4 from '../app/assets/trending_cards/blog4.svg';
import ais from '../app/assets/partners/ais3.png';
import hx from '../app/assets/partners/hx.png';
import social from '../app/assets/partners/social27.png';
import ciek from '../app/assets/partners/ciek2.png';
import aixl from '../app/assets/partners/aixl2.png';
import topSection from '../app/assets/topSection.png';
import { StaticImageData } from 'next/image';

export const trendingList = [
  {
    "title": "Case Studies",
    "description": "Explore Our Success Stories",
    "brief": "Discover how businesses across various industries have leveraged our solutions to overcome challenges and drive success.",
    "image": case_study
  },
  {
    "title": "Blogs",
    "description": "Insights and Expertise",
    "brief": "Stay updated with the latest industry insights, expert opinions, and trends through our regularly updated blog section.",
    "image": blogs
  },
  {
    "title": "AI News",
    "description": "Latest Developments in AI",
    "brief": "Get the latest updates on advancements in artificial intelligence, innovations, and key industry developments.",
    "image": ai_news
  },
  {
"title": "Stories",
  "description": "Inspiring Journeys and Success Stories",
  "brief": "Explore the personal journeys, challenges, and triumphs of individuals and businesses who have leveraged AI to make an impact and drive success.",
  "image": stories
  },
];


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
    "image":topSection
  },
]

export const blogContent = [
  {
    "title": "Blogs",
    "description": "TS Arena: Benchmarking Text-to-Speech Models in the Wild",
    "brief":"Discover how our AI Recruiter Agent revolutionizes the staffing industry with predictive analytics and humanized interactions, enhancing recruitment precision and efficiency.",
    "slug": "blog3",
    "image":blog1
  },
  {
    "title": "Blog",
    "description": "Community Dataset: Dataset is better together",
    "brief":"Discover Explore the intricacies of prompt engineering and prompt tuning in AI, uncovering how these NLP techniques refine language model interactions for superior outcomes.",
    "slug": "community-datasets",
    "image":blog2

  },
  {
    "title": "Blog",
    "description": "Revolutionizing Hiring with A.I",
    "brief":"Discover Explore the intricacies of prompt engineering and prompt tuning in AI, uncovering how these NLP techniques refine language model interactions for superior outcomes.",
    "slug": "hiring",
    "image":blog3

  },
  {
    "title": "Blog",
    "description": "Introduction to Matryoshka Embedding Models",
    "brief":"Discover Explore the intricacies of prompt engineering and prompt tuning in AI, uncovering how these NLP techniques refine language model interactions for superior outcomes.",
    "slug": "matrayoshka",
    "image":blog4

  },
  {
    "title": "Blog",
    "description": "StarCoder: A State-of-the-Art LLM for Code",
    "brief":"Discover Explore the intricacies of prompt engineering and prompt tuning in AI, uncovering how these NLP techniques refine language model interactions for superior outcomes.",
    "slug": "starcoder",
    "image":blog1

  },
  
]

export const caseStudyContent = [
  {
    "title": "Case study",
    "description": "Revolutionizing Recruitment with AI", 
    "slug": "hiring"   ,
    "image":case1
  },
  {
    "title": "Case study",
    "description": "TutorGPT: Smart AI for Smarter Learning",
    "slug": "tutorgpt",
    "image":case2
  },
  {
    "title": "Case study",
    "description": "MultiAgent Trading: Smart AI for Crypto Trading",
    "slug": "multiagent",
    "image":case3
  },
  {
    "title": "Case study",
    "description": "Advance NBA Betting Application",
    "slug": "nbabetting",
    "image":case4
  },
  {
    "title": "Case study",
    "description": "Telemetry Data Analytics for iRacing Optimization",
    "slug": "telemetry",
    "image":case1 
  },
  {
    "title": "Case study",
    "description": "Voice Assistant ChatBot -Shopify",
    "slug": "shopifychatbot",
    "image":case2 
  },
  {
    "title": "Case study",
    "description": "Multi-Label Text Classification with BERT-Large",
    "slug": "multilabel",
    "image":case3 
  },
  {
    "title": "Case study",
    "description": "Innovative Healthcare Marketplace with AI/ML Technology",
    "slug": "healthcare",
    "image":case4 
  },
  {
    "title": "Case study",
    "description": "AI Chatbot for Legal Assistance",
    "slug": "legalassistant",
    "image":case1 
  },
  {
    "title": "Case study",
    "description": "Realistic AI Model for Digital Influencers",
    "slug": "digitalinfluencer",
    "image":case2 
  },
  {
    "title": "Case study",
    "description": "AI Interviewer Using Mistral 7b Architecture",
    "slug": "mistral7b",
    "image":case3 
  },
  {
    "title": "Case study",
    "description": "Custom MT5 Indicator Development for Enhanced Binary Options Trading",
    "slug": "mt5indicator",
    "image":case4 
  },
  {
    "title": "Case study",
    "description": "Automated Trading Agent for cTrader to MT5 Integration",
    "slug": "tradingagent",
    "image":case1 
  },
  {
    "title": "Case study",
    "description": "Toingg: Revolutionary AI Calling Agent",
    "slug": "toingg",
    "image":case2 
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
    "image":news1
  },
   {
      "title": "Case Study",
      "description": "Next-Gen AI Hypnotherapist",
      // "brief":"Experience the future of hypnotherapy with our AI-powered platform, automating the creation of personalized hypnosis scripts for enhanced therapeutic sessions.",
      "image":news5

    },
    {
      "title": "Blog",
      "description": "DSPy: Your Guide to AI Prompt Mastery",
      "brief":"Discover the simplicity of DSPy in optimizing AI prompts, improving model performance and saving development time.",
      "image":news2

    },
    {
      "title": "Blog",
      "description": "DSPy: Your Guide to AI Prompt Mastery",
      "brief":"Discover the simplicity of DSPy in optimizing AI prompts, improving model performance and saving development time.",
      "image":news4

    },
    {
      "title": "News",
      "description": "Interactive AI Q&A on YouTube",
      "brief":"Check out YouTube’s AI-driven Q&A feature for Premium users, offering seamless, real-time interaction with video content.",
      "image":news3

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