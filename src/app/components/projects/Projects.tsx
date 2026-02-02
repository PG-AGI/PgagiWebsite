'use client';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useState } from 'react';
import styles from './Project.module.scss';
import MediaPreview from './MediaPreview';
import { techIconMap } from './TechIcons'; // adjust path
import Link from 'next/link';

export const myProjects = [
  {
    title: 'Cracked.AI',
    desc: 'Cracked.AI is an AI-powered automation and intelligence platform built to help modern businesses scale operations, decision-making, and customer engagement with minimal manual effort.',
    subdesc:
      'The platform focuses on combining AI agents, workflow automation, and real-time data processing into a unified system. Built using modern frontend frameworks and an AI-first backend architecture, Cracked.AI is designed for speed, reliability, and long-term scalability.',
    href: '#',
    texture: '/Landing Projects/CrackedAI.webm',
    logo: '/assets/CrackedAi-light.png',
    logoStyle: {
      backgroundColor: '#0B0F1A',
      border: '0.2px solid #1C2333',
      boxShadow: '0px 0px 60px 0px rgba(88, 101, 242, 0.35)',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      { id: 1, name: 'React.js', path: '/assets/react.svg' },
      { id: 2, name: 'TailwindCSS', path: '/assets/tailwindcss.png' },
      { id: 3, name: 'AI Systems', path: '/assets/ai.svg' },
    ],
  },

  {
    title: 'FOMO',
    desc: 'FOMO is a growth-focused AI product designed to increase urgency, engagement, and conversion rates by leveraging behavioral signals and real-time user intelligence.',
    subdesc:
      'The system combines dynamic UI components, real-time logic, and AI-driven triggers to influence user actions at the right moment. It is built as a performance-first product with a strong emphasis on responsiveness, experimentation, and measurable growth outcomes.',
    href: '#',
    texture: '/Landing Projects/FOMO.gif',
    logo: '/assets/FOMO.jpg',
    logoStyle: {
      backgroundColor: '#160A0A',
      border: '0.2px solid #2A1414',
      boxShadow: '0px 0px 60px 0px rgba(255, 77, 77, 0.35)',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      { id: 1, name: 'React.js', path: '/assets/react.svg' },
      { id: 2, name: 'Framer Motion', path: '/assets/framer.png' },
      { id: 3, name: 'Growth AI', path: '/assets/ai.svg' },
    ],
  },

  {
    title: 'LinkedAI',
    desc: 'LinkedAI is an AI-driven LinkedIn automation platform that streamlines outreach, lead personalization, and prospect intelligence for sales teams and founders.',
    subdesc:
      'The platform uses intelligent workflows to automate messaging while maintaining a human-like tone and contextual relevance. It is optimized for high-volume outreach, personalization at scale, and seamless integration into existing sales processes.',
    href: '#',
    texture: '/Landing Projects/LinkedAI.gif',
    logo: '/assets/linkedai.png',
    logoStyle: {
      backgroundColor: '#0A1A2F',
      border: '0.2px solid #0E2A4D',
      boxShadow: '0px 0px 60px 0px rgba(10, 102, 194, 0.4)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      { id: 1, name: 'React.js', path: '/assets/react.svg' },
      { id: 2, name: 'Automation', path: '/assets/automation.png' },
      { id: 3, name: 'AI Agents', path: '/assets/ai.svg' },
    ],
  },

  {
    title: 'Toingg',
    desc: 'Toingg is a real-time voice and AI agent platform that enables businesses to deploy intelligent, conversational workflows for sales, support, and operations.',
    subdesc:
      'Built with low-latency infrastructure and real-time streaming capabilities, Toingg supports AI-powered voice agents that can listen, reason, and respond instantly. The platform is designed to scale across teams and use cases while maintaining consistent performance.',
    href: '#',
    texture: '/Landing Projects/Toingg.mp4',
    logo: '/assets/toingg.png',
    logoStyle: {
      backgroundColor: '#0F172A',
      border: '0.2px solid #1E293B',
      boxShadow: '0px 0px 60px 0px rgba(56, 189, 248, 0.35)',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      { id: 1, name: 'Voice AI', path: '/assets/voice.png' },
      { id: 2, name: 'Real-time Systems', path: '/assets/realtime.png' },
      { id: 3, name: 'React.js', path: '/assets/react.svg' },
    ],
  },

  {
    title: 'Onchain Toolkit',
    desc: 'Onchain Toolkit is a developer-focused platform that simplifies access to blockchain data and onchain interactions through clean, composable tools.',
    subdesc:
      'It is built to support modern Web3 applications by abstracting complex blockchain operations into easy-to-use modules. The toolkit emphasizes performance, security, and flexibility, making it suitable for both rapid prototyping and production-grade systems.',
    href: '#',
    texture: '/Landing Projects/OnchainToolkit.webm',
    logo: '/assets/onchain.png',
    logoStyle: {
      backgroundColor: '#0C1022',
      border: '0.2px solid #1A1F3D',
      boxShadow: '0px 0px 60px 0px rgba(139, 92, 246, 0.35)',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      { id: 1, name: 'Web3', path: '/assets/web3.png' },
      { id: 2, name: 'Blockchain', path: '/assets/blockchain.png' },
      { id: 3, name: 'TypeScript', path: '/assets/typescript.png' },
    ],
  },

  {
    title: 'AIMI',
    desc: 'AIMI is an AI-first companion and assistant platform designed to deliver personalized, context-aware interactions through natural conversations.',
    subdesc:
      'The system is built around long-term memory, user context, and safety-first design principles. AIMI focuses on creating meaningful, ongoing interactions while remaining scalable, secure, and adaptable to multiple real-world use cases.',
    href: '#',
    texture: '/Landing Projects/AIMI.mp4',
    logo: '/assets/aimi.png',
    logoStyle: {
      backgroundColor: '#071A16',
      border: '0.2px solid #0E3B34',
      boxShadow: '0px 0px 60px 0px rgba(16, 185, 129, 0.35)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      { id: 1, name: 'AI Companion', path: '/assets/ai.svg' },
      { id: 2, name: 'Voice + NLP', path: '/assets/voice.png' },
      { id: 3, name: 'React.js', path: '/assets/react.svg' },
    ],
  },
];

const projectCount = myProjects.length;

const Projects = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

  const handleNavigation = (direction: string) => {
    setSelectedProjectIndex((prevIndex) => {
      if (direction === 'previous') {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
      } else {
        return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  useGSAP(() => {
    gsap.fromTo(
      `.animatedText`,
      { opacity: 0 },
      { opacity: 1, duration: 1, stagger: 0.2, ease: 'power2.inOut' },
    );
  }, [selectedProjectIndex]);

  const currentProject = myProjects[selectedProjectIndex];

  return (
    <section className={styles.container}>
      <div className={styles.projectButtonContainer}>
        <Link href="/projects" className={styles.projectButton}>
          Projects
        </Link>
      </div>
      <div className={styles.grid}>
        <div className={styles.card}>
          <div className={styles.spotlight}>
            <img src={currentProject.spotlight} alt="spotlight" />
          </div>

          {/* <div className={styles.logo} style={currentProject.logoStyle}>
            <img src={currentProject.logo} alt="logo" />
          </div> */}

          <div className={styles.content}>
            <p className={`${styles.projectName} animatedText`}>
              {currentProject.title}
            </p>

            <p className="animatedText">{currentProject.desc}</p>
            <p className="animatedText">{currentProject.subdesc}</p>
          </div>

          <div className={styles.footer}>
            <div className={styles.tags}>
              {currentProject.tags.map((tag) => (
                <div key={tag.id} className={styles.tagIcon} title={tag.name}>
                  {techIconMap[tag.name]}
                </div>
              ))}
            </div>

            <a
              className={styles.link}
              href={currentProject.href}
              target="_blank"
              rel="noreferrer"
            >
              <p>Check Live Site</p>
              <img src="/assets/arrow-up.png" alt="arrow" />
            </a>
          </div>

          <div className={styles.nav}>
            <button onClick={() => handleNavigation('previous')}>
              <img src="/assets/left-arrow.png" alt="left" />
            </button>

            <button onClick={() => handleNavigation('next')}>
              <img src="/assets/right-arrow.png" alt="right" />
            </button>
          </div>
        </div>

        <div className={styles.media}>
          <MediaPreview src={currentProject.texture} />
        </div>
      </div>
    </section>
  );
};

export default Projects;
