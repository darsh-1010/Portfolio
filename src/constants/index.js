
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
    name: "JavaScript",
    iconClass: "devicon-javascript-plain colored",
    websiteUrl: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
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
    name: "Keras",
    iconClass: "devicon-keras-plain colored",
    websiteUrl: "https://keras.io/",
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
    name: "MongoDB",
    iconClass: "devicon-mongodb-plain colored",
    websiteUrl: "https://www.mongodb.com/",
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
    name: "Spyder",
    iconClass: "devicon-python-plain colored",
    websiteUrl: "https://www.spyder-ide.org/",
  },
  {
    name: "Google Colab",
    iconClass: "devicon-google-plain colored",
    websiteUrl: "https://colab.research.google.com/",
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
    title: "AI/ML Developer",
    company_name: "ReligGlobal",
    icon: religglobal,
    iconBg: "#383E56",
    date: "Mar 2025 - Present",
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
    name: "Smallbiz Inventory Software",
    description:
      "A modern, professional web application for small businesses to manage inventory, generate quotations with AI, track sales, and reports, automate client follow-ups. Built with Streamlit, this solution streamlines business operations with an intuitive interface, automated email/PDF workflows, and real-time analytics.",
    tags: [
      {
        name: "Streamlit",
        color: "blue-text-gradient",
      },
      {
        name: "AI",
        color: "green-text-gradient",
      },
      {
        name: "Python",
        color: "pink-text-gradient",
      },
    ],
    image: "assets/SmallBiz_Inventory_System.png",
    source_code_link: "https://github.com/darsh-1010/smallbiz_inventory_software",
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
    image: "src/assets/DSA_solver.png",
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
    image: "src/assets/jarvis.png",
    source_code_link: "https://github.com/darsh-1010/Jarvis-A-Voice-Based-Assistant-Powered-by-LLaMA",
  },
];

export { services, technologies, experiences, testimonials, projects };







