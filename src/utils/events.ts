export const webinarList = [
    {
      id: "ai-agent",
      type: "Recent Event",
      title: "How to build your first AI Agent",
      description: "Learn the basics of building an AI agent in this exciting webinar.",
      status: true,
      link: "/eventform/ai-agent"
    },
    {
      id: "ai-voices",
      type: "On Demand Event",
      title: "Crafting Voices with AI",
      description: "Explore the world of AI-generated voices in this informative session.",
      status: false,
      link: "/eventform/ai-voices"
    },
    {
      id: "ai-business",
      type: "Recent Event",
      title: "Learn how to Amplify Business with AI Voice",
      description: "Discover how AI voices can boost your business in this comprehensive webinar.",
      status: true,
      link: "/eventform/ai-business"
    }
  ];
  
  export const eventFormData = [
    {
      id: "ai-agent",
      title: "How to build your first AI Agent",
      date: "2024-10-11",
      duration: "1 hour",
      interested: 100,
      description: "The 'How to build your first AI Agent' event will cover speech recognition, NLP, and text-to-speech. Attendees will learn how to process voice input, interpret it using AI models, and generate voice responses. This hands-on session will guide you through creating a functional AI agent from scratch.",
      detailedDescription: "This event aims to introduce participants to voice-based AI technology and guide them through the process of creating an AI agent that can understand and respond to spoken language. The session will cover fundamental concepts of voice recognition, natural language processing (NLP), and text-to-speech (TTS) technologies, offering hands-on development experience using tools like Python, Google's Speech-to-Text API, and speech synthesis libraries. Whether developing for smart assistants, customer service bots, or automated voice systems, attendees will leave with a functional voice AI agent and a solid foundation in voice interaction technologies. The session will conclude with a live demo, troubleshooting tips, and guidance on how to enhance and deploy their agents in real-world applications."
    },
    {
      id: "ai-voices",
      title: "Crafting Voices with AI",
      date: "2024-11-15",
      duration: "45 minutes",
      interested: 75,
      description: "Explore the fascinating world of AI-generated voices in this on-demand event. Learn about the latest technologies and techniques used to create realistic and expressive synthetic voices.",
      detailedDescription: "In this on-demand session, we'll dive deep into the realm of AI-generated voices. You'll learn about the cutting-edge technologies driving synthetic speech, including neural text-to-speech models, voice cloning, and emotion synthesis. We'll explore how these technologies are being used in various industries, from entertainment and gaming to accessibility and customer service. The session will include demonstrations of different voice synthesis techniques, comparisons of various AI voice technologies, and discussions on the ethical considerations of creating and using synthetic voices."
    },
    {
      id: "ai-business",
      title: "Learn how to Amplify Business with AI Voice",
      date: "2024-12-01",
      duration: "1.5 hours",
      interested: 150,
      description: "Discover how AI-powered voice technologies can transform your business operations, enhance customer experiences, and drive growth in this comprehensive webinar.",
      detailedDescription: "This webinar is designed for business leaders, entrepreneurs, and innovators looking to leverage AI voice technologies to gain a competitive edge. We'll explore how AI voices can be integrated into various aspects of business, including customer service, marketing, and product development. You'll learn about successful case studies from different industries, understand the potential ROI of implementing AI voice solutions, and get insights into the future trends of voice AI in business. The session will also cover practical steps for implementing AI voice technologies in your organization, potential challenges and how to overcome them, and strategies for measuring the impact of these technologies on your business outcomes."
    }
  ];
  export const eventsList=[
    {
      id: "ai-communication",
      title: "AI in Action: Elevating Communication Through Voice Software",
      description: "Lorem ipsum dolor sit amet consectetur. Eu molestie pretium porttitor aliquam aenean amet. Nibh orci odio ut scelerisque mattis mauris sagittis. Fusce lacinia sapien lectus euismod massa convallis. Consectetur condimentum at non neque mauris consectetur.",
      day: "WED",
      date: "30,OCTOBER,2024",
      image: "/images/img5.png",
      link: "/eventform/ai-agent"
    },
    {
      id: "ai-healthcare",
      title: "AI Revolution in Healthcare: Voice-Assisted Diagnosis",
      description: "Explore the groundbreaking applications of AI voice technology in healthcare. This event showcases how voice software is transforming patient care, streamlining diagnoses, and improving overall healthcare efficiency.",
      day: "FRI",
      date: "15,NOVEMBER,2024",
      image: "/images/img6.png",
      link: "/eventform/ai-voices"
    },
    {
      id: "ai-education",
      title: "Transforming Education with AI Voice Assistants",
      description: "Discover how AI-powered voice assistants are revolutionizing the education sector. Learn about personalized learning experiences, accessibility improvements, and the future of interactive educational content.",
      day: "MON",
      date: "02,DECEMBER,2024",
      image: "/images/img7.png",
      link: "/eventform/ai-business"
    },
    {
      id: "ai-prev",
      title: "Transforming Education with AI Voice Assistants",
      description: "Discover how AI-powered voice assistants are revolutionizing the education sector. Learn about personalized learning experiences, accessibility improvements, and the future of interactive educational content.",
      day: "MON",
      date: "02,DECEMBER,2023",
      image: "/images/img7.png",
      link: "/eventform/ai-business"
    }
  ]

export const updateInterestedCount = (id:string, newInterestedCount:number) => {
    eventFormData.forEach((event) => {
      if (event.id === id) {
        event.interested = newInterestedCount;
      }
    });
  };