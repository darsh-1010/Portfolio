
import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  mysql,
  figma,
  git,
  html,
  meta,
  shopify,
  starbucks,
  tesla,
  tekisky,
  religglobal,
  shayonaIT,
  augmentedLogo,
} from '../assets';

// Import new service icons
import aiSymbol from '../assets/ai-symbol.png';
import nlpIcon from '../assets/NLP.png';
import opencvIcon from '../assets/OpenCV.png';
import mlIcon from '../assets/ml.png';

// Import project cover images (must be imports, not string paths, so Vite bundles them)
import finsightImage from '../assets/finsight-dashboard.png';
import dsaSolverImage from '../assets/DSA_solver.png';
import jarvisImage from '../assets/jarvis.png';

// Fetched from fxis.ai (their site logo, white variant, pairs with a dark iconBg)
import fxisLogo from '../assets/fxis-logo.svg';

// Placeholder cover graphics (no real screenshots yet) for FXIS.ai projects
import geoBrandTrackerImage from '../assets/geo-brand-tracker-cover.svg';
import financeRagChatbotImage from '../assets/finance-rag-chatbot-cover.svg';
import seoBlogGeneratorImage from '../assets/seo-blog-generator-cover.svg';

// Tools & IDEs not in devicon - fetched from their official sites
import claudeCodeIcon from '../assets/tech/claude-code.png';
import antigravityIcon from '../assets/tech/antigravity.png';

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "AI Engineer",
    icon: aiSymbol,
  },
  {
    title: "NLP Engineer",
    icon: nlpIcon,
  },
  {
    title: "Computer Vision Engineer",
    icon: opencvIcon,
  },
  {
    title: "Machine Learning",
    icon: mlIcon,
  },
];

const technologies = [
  // Backend & Languages
  {
    name: "Python",
    iconClass: "devicon-python-plain colored",
    websiteUrl: "https://www.python.org/",
  },
  {
    name: "C/C++",
    iconClass: "devicon-cplusplus-plain colored",
    websiteUrl: "https://isocpp.org/",
  },
  {
    name: "Java",
    iconClass: "devicon-java-plain colored",
    websiteUrl: "https://www.java.com/",
  },
  {
    name: "Node.js",
    iconClass: "devicon-nodejs-plain colored",
    websiteUrl: "https://nodejs.org/",
  },
  
  // Frameworks & Libraries
  {
    name: "Flask",
    iconClass: "devicon-flask-original",
    websiteUrl: "https://flask.palletsprojects.com/",
  },
  {
    name: "TensorFlow",
    iconClass: "devicon-tensorflow-original colored",
    websiteUrl: "https://www.tensorflow.org/",
  },
  {
    name: "Scikit-learn",
    iconClass: "devicon-scikitlearn-plain colored",
    websiteUrl: "https://scikit-learn.org/",
  },
  {
    name: "LangChain",
    iconClass: "devicon-python-plain colored",
    customIcon: "https://cdn-icons-png.flaticon.com/128/1017/1017466.png",
    websiteUrl: "https://www.langchain.com/",
  },
  {
    name: "OpenCV",
    iconClass: "devicon-python-plain colored",
    customIcon: "https://upload.wikimedia.org/wikipedia/commons/3/32/OpenCV_Logo_with_text_svg_version.svg",
    websiteUrl: "https://opencv.org/",
  },
  
  // Database
  {
    name: "MySQL",
    iconClass: "devicon-mysql-plain colored",
    websiteUrl: "https://www.mysql.com/",
  },
  {
    name: "SQL",
    iconClass: "devicon-mysql-plain colored",
    websiteUrl: "https://www.w3schools.com/sql/",
  },
  
  // Cloud & Platforms
  {
    name: "AWS",
    iconClass: "devicon-amazonwebservices-plain-wordmark colored",
    websiteUrl: "https://aws.amazon.com/",
  },
  
  // Tools & IDEs
  {
    name: "VSCode",
    iconClass: "devicon-vscode-plain colored",
    websiteUrl: "https://code.visualstudio.com/",
  },
  {
    name: "PyCharm",
    iconClass: "devicon-pycharm-plain colored",
    websiteUrl: "https://www.jetbrains.com/pycharm/",
  },
  {
    name: "Google Colab",
    iconClass: "devicon-google-plain colored",
    websiteUrl: "https://colab.research.google.com/",
  },
  {
    name: "Claude Code",
    customIcon: claudeCodeIcon,
    websiteUrl: "https://claude.com/claude-code",
  },
  {
    name: "Antigravity",
    customIcon: antigravityIcon,
    websiteUrl: "https://antigravity.google/",
  },
  {
    name: "Git",
    iconClass: "devicon-git-plain colored",
    websiteUrl: "https://git-scm.com/",
  },
  {
    name: "GitHub",
    iconClass: "devicon-github-original",
    websiteUrl: "https://github.com/",
  },
  {
    name: "GitLab",
    iconClass: "devicon-gitlab-plain colored",
    websiteUrl: "https://gitlab.com/",
  },
  
  // Automation & Testing
  {
    name: "Selenium",
    iconClass: "devicon-selenium-original colored",
    websiteUrl: "https://selenium.dev/",
  },
  
  // Database
  {
    name: "PostgreSQL",
    iconClass: "devicon-postgresql-plain colored",
    websiteUrl: "https://www.postgresql.org/",
  },
  
  // Frontend & Web (at the end)
  {
    name: "HTML",
    iconClass: "devicon-html5-plain colored",
    websiteUrl: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    name: "CSS",
    iconClass: "devicon-css3-plain colored",
    websiteUrl: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
];

const experiences = [
  {
    title: "AI Engineer",
    company_name: "FXIS.ai",
    icon: fxisLogo,
    iconBg: "#151030",
    date: "Aug 2025 - Present",
    points: [
      "Built a Geo Brand Tracker that uses Selenium to submit prompts to ChatGPT, Gemini, and Google AI Mode and scrape the responses, automating brand-ranking checks across 3 AI platforms and auto-generating the visibility report.",
      "Built a finance RAG chatbot combining a Chromium-scraped vector database with live yfinance pricing; added prompt and data caching that cut repeat LLM calls by roughly 30%, plus 3-tier security guardrails and per-user daily/monthly token quotas gated by subscription plan.",
      "Built an AI-powered SEO blog generator that drafts against a self-defined checklist of ~20 on-page SEO parameters (keyword density, meta tags, heading structure, readability, internal linking), auto-revising each draft until every parameter is satisfied before publish.",
    ],
  },
  {
    title: "AI/ML Developer",
    company_name: "ReligGlobal",
    icon: religglobal,
    iconBg: "#383E56",
    date: "Mar 2025 - Aug 2025",
    points: [
      "Reduced candidate screening time by 40% by deploying GenAI LLM-based resume-job match system to address recruiter inefficiencies in shortlisting; implemented using OpenAI APIs and Python.",
      "Generated optimized Dream11 fantasy squads by developing an XGBoost and RL-based prediction engine that selects winning player combinations based on historical stats, matchups, pitch conditions, and recent form trends.",
      "Improved real-time trading decision accuracy by creating an intelligent stock signal bot using Put-Call Ratios, live news sentiment, momentum indicators, and volatility measures; developed with Python and integrated financial APIs.",
      "Enhanced recruiter productivity by automating repetitive workflows using UiPath RPA, reducing manual effort by over 30%.",
    ],
  },
  {
    title: "AI/ML Engineering Intern",
    company_name: "Augmented LLP Client: FPMCCAN, UK",
    icon: augmentedLogo,
    iconBg: "#E6DEDD",
    date: "Jan 2025 - Mar 2025",
    points: [
      "Reduced manual QA for tile/piping lines by preparing custom datasets and training YOLO models for defect detection.",
      "Converted raw industrial images to polar format to improve model accuracy in cylindrical surface inspections.",
      "Automated dataset ingestion and preprocessing workflows using Python and OpenCV, increasing annotation throughput.",
    ],
  },
  {
    title: "SQL Developer Intern",
    company_name: "Shayona IT Services",
    icon: shayonaIT,
    iconBg: "#383E56",
    date: "Jun 2023 - Jul 2023",
    points: [
      "Increased database performance by 20% by identifying and optimizing slow queries and adding indexes, addressing critical performance bottlenecks in web applications and formating databases properly.",
      "Enhanced platform scalability by contributing to backend schema design using SQL and ER modeling for web platforms.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Darsh Shah's expertise in AI and machine learning transformed our recruitment process. His candidate matching system significantly reduced our hiring timeline.",
    name: "Manan Vyas",
    company: "AI ML Developer",
  },
  {
    testimonial:
      "The computer vision system Darsh Shah developed for our sports analytics platform exceeded our expectations in both accuracy and performance.",
    name: "Twinkle Sangani",
    company: "Owner of Muse Lens",
  },
  {
    testimonial:
      "Darsh Shah's innovative approach to our dental appointment AI system has dramatically improved our patient scheduling efficiency.",
    name: "Dhruv Raut",
    company: "FullStack Developer",
  },
];

const projects = [
  {
    name: "Geo Brand Tracker",
    description:
      "Tracks a brand's visibility and ranking inside AI answers instead of classic search results. Takes user-style prompts, drives Selenium against ChatGPT, Gemini, and Google AI Mode to submit them and scrape the generated responses, then analyzes where and how the brand is placed/ranked across those answers to produce a report.",
    tags: [
      {
        name: "Selenium",
        color: "blue-text-gradient",
      },
      {
        name: "Web Scraping",
        color: "green-text-gradient",
      },
      {
        name: "GEO/AI Ranking",
        color: "pink-text-gradient",
      },
      {
        name: "Python",
        color: "blue-text-gradient",
      },
    ],
    image: geoBrandTrackerImage,
    // ponytail: no public repo/demo link given yet, pointing at the employer
    // site for now — swap for a repo or case-study link when there is one.
    source_code_link: "https://fxis.ai",
  },
  {
    name: "Finance RAG Chatbot",
    description:
      "A finance Q&A chatbot combining retrieval-augmented generation with live market data. A Chromium-based scraper pulls financial content off the web into a vector database, which is combined with live share prices from yfinance to ground detailed answers. Adds prompt caching and data caching for speed/cost, multi-level security guardrails tiered by subscription plan, and daily/monthly token-usage limits per user.",
    tags: [
      {
        name: "RAG",
        color: "blue-text-gradient",
      },
      {
        name: "Vector DB",
        color: "green-text-gradient",
      },
      {
        name: "yfinance",
        color: "pink-text-gradient",
      },
      {
        name: "Security Guardrails",
        color: "blue-text-gradient",
      },
    ],
    image: financeRagChatbotImage,
    // ponytail: same as above, placeholder link until a real one is shared.
    source_code_link: "https://fxis.ai",
  },
  {
    name: "AI SEO Blog Generator",
    description:
      "Generates SEO-optimized blog posts against a self-defined checklist of on-page ranking parameters — keyword density and placement, meta title/description length, heading structure, readability, and internal linking — then scores each draft against the checklist and auto-revises it until every parameter is satisfied.",
    tags: [
      {
        name: "GenAI",
        color: "blue-text-gradient",
      },
      {
        name: "SEO",
        color: "green-text-gradient",
      },
      {
        name: "Content Automation",
        color: "pink-text-gradient",
      },
    ],
    image: seoBlogGeneratorImage,
    // ponytail: same as above, placeholder link until a real one is shared.
    source_code_link: "https://fxis.ai",
  },
  {
    name: "FinSight",
    description:
      "An AI-powered financial concierge and investment intelligence platform: a React/TypeScript frontend, a FastAPI backend (auth, billing via Stripe, chat proxy), and a separate FastAPI ML/RAG service backed by a Weaviate vector database and web scrapers. Runs on FreeLLMAPI as the primary LLM provider with automatic fallback to OpenAI for uptime, and ships a 4-tier subscription architecture (Starter, Growth, Premium, Enterprise) with its own token refill/cap rules per tier.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "FastAPI",
        color: "green-text-gradient",
      },
      {
        name: "RAG / Weaviate",
        color: "pink-text-gradient",
      },
      {
        name: "Python",
        color: "blue-text-gradient",
      },
    ],
    image: finsightImage,
    source_code_link: "https://github.com/darsh-1010/finsight",
  },
  {
    name: "DSA Solver",
    description:
      "Master Data Structures & Algorithm: A comprehensive web application that helps you master Data Structures & Algorithms through AI-powered solutions, interactive problem solving, and modern web interface.",
    tags: [
      {
        name: "AI",
        color: "blue-text-gradient",
      },
      {
        name: "Web App",
        color: "green-text-gradient",
      },
      {
        name: "DSA",
        color: "pink-text-gradient",
      },
    ],
    image: dsaSolverImage,
    source_code_link: "https://github.com/darsh-1010/algo-master-pro",
  },
  {
    name: "Jarvis-A-Voice-Based-Assistant-Powered-by-LLaMA",
    description:
      "Jarvis is a voice-based assistant built in Python that simplifies daily tasks through voice interaction. Utilizing libraries like speech_recognition and pyttsx3, Jarvis can understand spoken commands and respond with synthesized speech.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Voice AI",
        color: "green-text-gradient",
      },
      {
        name: "LLaMA",
        color: "pink-text-gradient",
      },
    ],
    image: jarvisImage,
    source_code_link: "https://github.com/darsh-1010/Jarvis-A-Voice-Based-Assistant-Powered-by-LLaMA",
  },
];

export { services, technologies, experiences, testimonials, projects };







