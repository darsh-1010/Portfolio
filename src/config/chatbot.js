// Enhanced Chatbot Configuration and AI Responses
export const chatbotConfig = {
  welcomeMessage: "Hi! I'm Darsh Shah's AI assistant. I can help you learn about his skills, projects, and experience. What would you like to know?",
  typingDelay: 800, // Faster response for better UX
  maxMessages: 50,
  // AI Service Configuration
  aiService: 'groq', // 'groq', 'local', or 'hybrid'
  groqModel: 'llama3-8b-8192', // Fast and free model
  maxTokens: 200,
  // API Key Configuration
  groqApiKey: import.meta.env.VITE_GROQ_API_KEY || null,
};

// Groq API Configuration
export const groqConfig = {
  apiUrl: 'https://api.groq.com/openai/v1/chat/completions',
  systemPrompt: `You are Darsh Shah's AI assistant. Help visitors learn about his skills, projects, and experience.

  IMPORTANT CONTEXT ABOUT DARSH SHAH:
- Skills: AI/ML, Deep Learning, Python, React, Node.js, MongoDB, TensorFlow, PyTorch, OpenCV
- Projects: AI-powered applications, web development, machine learning models, computer vision, NLP
- Experience: AI/ML development, web development, software engineering, real-world projects
- Education: Computer Science background with AI/ML specialization
- Location: Mumbai, Maharashtra, India
- Contact: darsh.cs@gmail.com, +91 9913361337

INSTRUCTIONS:
- Always be helpful, professional, and accurate
- Keep responses concise but informative (max 150 words)
- If asked about specific technical details, provide detailed explanations
- Be conversational and engaging
- If you don't know something specific, suggest asking Darsh Shah directly
- Always maintain a positive, collaborative tone`,
};

// AI Response Templates with better context understanding
export const aiResponses = {
  skills: {
    keywords: ['skill', 'technology', 'tech', 'programming', 'language', 'framework', 'what can you do', 'expertise'],
        response: "Darsh Shah is skilled in AI/ML, Deep Learning, Python, React, Node.js, MongoDB, and many more technologies. He specializes in building intelligent systems and has experience with frameworks like TensorFlow, PyTorch, and computer vision libraries like OpenCV. His expertise spans from frontend development to backend systems and machine learning pipelines. He's particularly strong in Python for AI projects and JavaScript/React for web development."
  },
  projects: {
    keywords: ['project', 'work', 'portfolio', 'application', 'app', 'what have you built', 'show me your work'],
        response: "Darsh Shah has worked on various projects including AI-powered applications, web development, and machine learning models. His projects demonstrate expertise in computer vision, natural language processing, and full-stack development. He's built everything from web applications to AI models and has experience deploying them in production environments. Some notable projects include computer vision applications, natural language processing systems, and full-stack web applications."
  },
  experience: {
    keywords: ['experience', 'background', 'work history', 'career', 'job', 'how long', 'years of experience'],
        response: "Darsh Shah has experience in AI/ML development, web development, and software engineering. He's worked on real-world projects and has a strong foundation in both theoretical and practical aspects of machine learning and software development. His experience includes both academic research and industry applications, with hands-on experience in building and deploying AI systems, web applications, and machine learning models."
  },
  contact: {
    keywords: ['contact', 'email', 'reach', 'phone', 'location', 'address', 'how to reach', 'get in touch'],
        response: "You can reach Darsh Shah at desaikushal1234@gmail.com or call him at +91 7574975141. He's based in Mumbai, Maharashtra, India and is always open to discussing new opportunities, collaborations, or just having a chat about technology! Feel free to reach out for project discussions, collaboration opportunities, or any questions about his work."
  },
  ai: {
    keywords: ['ai', 'machine learning', 'ml', 'deep learning', 'neural network', 'tensorflow', 'pytorch', 'artificial intelligence'],
        response: "Darsh Shah specializes in AI and Machine Learning! He has experience with deep learning frameworks, computer vision, natural language processing, and building intelligent systems. His expertise includes TensorFlow, PyTorch, OpenCV, and various ML algorithms. He's particularly interested in computer vision and natural language processing applications, and has worked on projects involving image recognition, text analysis, and predictive modeling."
  },
  programming: {
    keywords: ['python', 'javascript', 'react', 'node', 'java', 'c++', 'code', 'programming language', 'coding'],
        response: "Darsh Shah is proficient in multiple programming languages and frameworks. He uses Python for AI/ML projects, JavaScript/React for frontend development, and has experience with Node.js for backend development. He's also skilled in databases like MongoDB and MySQL, and has worked with various cloud platforms. His coding expertise spans from low-level algorithms to high-level application development."
  },
  education: {
    keywords: ['education', 'degree', 'university', 'college', 'study', 'academic', 'where did you study', 'qualification'],
        response: "Darsh Shah has a strong educational background in computer science and engineering, with specialized coursework in artificial intelligence and machine learning. He combines theoretical knowledge with practical application in his projects and work. His academic foundation provides him with deep understanding of algorithms, data structures, and computational theory, which he applies effectively in real-world projects."
  },
  collaboration: {
    keywords: ['collaborate', 'work together', 'team', 'partnership', 'join', 'hire', 'work with you'],
        response: "Darsh Shah is always open to collaborations and new opportunities! Whether it's working on innovative AI projects, contributing to open source, or joining exciting teams, he loves connecting with like-minded developers and researchers. He's experienced in team environments and enjoys working on challenging problems that can make a real impact. Feel free to reach out if you have an interesting project or opportunity!"
  },
  resume: {
    keywords: ['resume', 'cv', 'curriculum vitae', 'experience details', 'work details'],
        response: "Darsh Shah's experience includes AI/ML development, web development, and software engineering roles. He has worked on various projects involving computer vision, natural language processing, and full-stack development. His technical skills include Python, JavaScript, React, Node.js, TensorFlow, PyTorch, and various databases. He's always looking for new challenges and opportunities to grow his skills."
  },
  salary: {
    keywords: ['salary', 'pay', 'compensation', 'rate', 'hourly', 'cost', 'price'],
    response: "Darsh Shah's compensation expectations depend on the project scope, complexity, and duration. For freelance work, he typically charges competitive rates based on the technical requirements. For full-time positions, he's open to discussing market-competitive packages. The best approach is to discuss your specific project or role requirements, and he can provide a tailored proposal."
  },
  timeline: {
    keywords: ['timeline', 'how long', 'duration', 'deadline', 'when', 'schedule'],
    response: "Project timelines vary based on complexity and scope. Simple web applications might take 2-4 weeks, while complex AI systems could take 2-3 months. Darsh Shah always provides realistic timelines and keeps clients updated on progress. He's experienced in agile development and can work with your schedule requirements. For specific projects, he can provide detailed timeline estimates."
  }
};

// Groq API Integration Function
export const generateGroqResponse = async (userMessage) => {
  try {
    // Check if API key is available
    if (!chatbotConfig.groqApiKey) {
      throw new Error('Groq API key not configured');
    }

    console.log('Using Groq API for response...');
    
    const response = await fetch(groqConfig.apiUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${chatbotConfig.groqApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: chatbotConfig.groqModel,
        messages: [
          {
            role: 'system',
            content: groqConfig.systemPrompt
          },
          {
            role: 'user',
            content: userMessage
          }
        ],
        max_tokens: chatbotConfig.maxTokens,
        temperature: 0.7,
        top_p: 0.9,
      })
    });
    
    if (!response.ok) {
      throw new Error(`Groq API error: ${response.status}`);
    }
    
    const data = await response.json();
    console.log('Groq API response received successfully');
    return data.choices[0].message.content;
  } catch (error) {
    console.error('Groq API Error:', error);
    throw error; // Let the calling function handle the fallback
  }
};

// Enhanced smart response generation with better context understanding
export const generateSmartResponse = (userMessage) => {
  const lowerMessage = userMessage.toLowerCase();
  
  // Check for exact matches first with priority scoring
  let bestMatch = null;
  let bestScore = 0;
  
  for (const [category, data] of Object.entries(aiResponses)) {
    const score = data.keywords.reduce((total, keyword) => {
      if (lowerMessage.includes(keyword)) {
        return total + 1;
      }
      return total;
    }, 0);
    
    if (score > bestScore) {
      bestScore = score;
      bestMatch = category;
    }
  }
  
  // If we found a good match, return it
  if (bestScore > 0) {
    return aiResponses[bestMatch].response;
  }
  
  // Enhanced context-aware responses
  if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
    return "Hello! I'm here to help you learn about Darsh Shah. Feel free to ask me about his skills, projects, experience, or anything else you'd like to know! I can provide detailed information about his AI/ML expertise, programming skills, and project experience."
  }
  
  if (lowerMessage.includes('help') || lowerMessage.includes('what can you do') || lowerMessage.includes('capabilities')) {
    return "I can tell you about Darsh Shah's skills, projects, experience, education, and help you get in touch with him. I'm particularly knowledgeable about his AI/ML expertise, programming skills, and project portfolio. Just ask me anything specific and I'll provide detailed information!"
  }
  
  if (lowerMessage.includes('thank') || lowerMessage.includes('thanks')) {
    return "You're welcome! I'm here to help. Is there anything else you'd like to know about Darsh Shah? I can tell you more about his technical skills, project experience, or help you get in touch with him."
  }
  
  if (lowerMessage.includes('cool') || lowerMessage.includes('awesome') || lowerMessage.includes('amazing')) {
    return "I'm glad you find it interesting! Darsh Shah has worked hard to develop his skills in AI, machine learning, and web development. Is there a specific area you'd like to learn more about? I can dive deeper into any topic!"
  }
  
  if (lowerMessage.includes('who') && lowerMessage.includes('you')) {
    return "I'm Darsh Shah's AI assistant, designed to help visitors learn about his skills, projects, and experience. I can answer questions about his technical expertise, work history, and help you get in touch with him. Think of me as your personal guide to understanding Darsh Shah's capabilities!"
  }
  
  // Smart suggestions for unrecognized queries
  const suggestions = [
    "I'd be happy to tell you about Darsh Shah's skills in AI/ML and programming!",
    "I can share details about his project experience and technical expertise!",
    "Let me know if you'd like to learn about his background or how to contact him!",
    "I'm here to help you understand Darsh Shah's capabilities and experience!"
  ];
  
  const randomSuggestion = suggestions[Math.floor(Math.random() * suggestions.length)];
  
  return `That's an interesting question! ${randomSuggestion} What would you like to know about Darsh Shah? I can help with information about his skills, projects, experience, or contact details.`;
};

// Enhanced quick action suggestions
export const quickActions = [
  "Tell me about Darsh Shah's skills",
  "What projects has he worked on?",
  "How can I contact him?",
  "What's his experience with AI?",
  "Tell me about his education",
  "Show me his technical expertise"
];

// Additional conversation starters for better engagement
export const conversationStarters = [
  "I'm interested in AI/ML projects",
  "Tell me about your web development skills",
  "What technologies do you use?",
  "How can we collaborate?",
  "What's your background in programming?"
];
