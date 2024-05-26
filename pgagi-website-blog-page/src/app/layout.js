import { Inter } from "next/font/google";
import Head from "next/head"; // Import Head component
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "PGAGI",
  description: "At PGAGI, we believe in a future where AI and human intelligence coexist in harmony, creating a world that is smarter, faster, and better. We are not just building AI. we are shaping a future where AI is a fundamental and positive force for businesses.",
  favicon: "/images/pgagi.png",
  keywords: "AI, artificial intelligence, technology, innovation, PGAGI, AI robotics, AI for startups, AI for transportation, AI workforce development, AI publications, AI quality assurance, AI solutions for SMEs, AI algorithms, AI performance, AI collaboration, AI consultancy, AGI market analysis, AI solutions, AI custom solutions, AGI opportunity identification, AI improvement, AI startup assistance, AGI support, AI consulting firm, AGI, AI opportunity identification, Core Technologies and Services, Artificial Intelligence, Machine Learning, Deep Learning, NLM, Large Language Models, AI consultancy, AI research, AI development, AI strategy, AI integration, AI optimization, Industry Applications, AI in healthcare, AI in finance, AI in retail, AI in manufacturing, AI in logistics, AI in education, AI in real estate, AI in agriculture, Technical Specifics, Neural networks, Predictive analytics, Computer vision, Natural language processing, Speech recognition, Robotics, AI algorithms, Data mining, Professional Services, AI advisory, AI transformation, AI project management, AI implementation, AI training, AI workshops, AI seminars, AI publications, AI case studies, Business Benefits, Operational efficiency, Customer experience, Digital transformation, Innovation, Competitive advantage, Data-driven decision-making, Cost reduction, Revenue growth, Ethical and Regulatory Aspects, AI ethics, AI governance, AI policy, AI regulation compliance, AI security, AI privacy, Responsible AI, Sustainable AI, Emerging Trends and Technologies, Quantum AI, AIoT (AI + IoT), Edge AI, Federated learning, Generative models, Reinforcement learning, Synthetic data, AI in blockchain, Client-focused Terms, Custom AI solutions, Tailored AI strategies, AI best practices, AI insights, Industry-specific AI applications, Client success stories, AI ROI"
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <link rel="icon" href={metadata.favicon} sizes="16x16" type="image/png" />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
