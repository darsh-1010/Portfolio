# Graph Report - Portfolio  (2026-08-22)

## Corpus Check
- 36 files · ~544,911 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 269 nodes · 342 edges · 15 communities
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 6 edges (avg confidence: 0.5)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `0fb7d693`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- AI Chatbot for Portfolio Website
- constants/index.js
- dependencies
- 🚀 Groq AI Integration Setup Guide
- Antigravity — Code Instructions
- devDependencies
- components/index.js
- 🚀 Deployment Guide
- Darsh Shah Portfolio
- AIChatbot.jsx
- Enhancement Opportunities
- vercel.json

## God Nodes (most connected - your core abstractions)
1. `AI Chatbot for Portfolio Website` - 15 edges
2. `Antigravity — Code Instructions` - 13 edges
3. `Darsh Shah Portfolio` - 12 edges
4. `🚀 Groq AI Integration Setup Guide` - 11 edges
5. `styles` - 10 edges
6. `StarWrapper()` - 9 edges
7. `🚀 Deployment Guide` - 9 edges
8. `AIChatbot()` - 5 edges
9. `scripts` - 4 edges
10. `CanvasLoader()` - 4 edges

## Surprising Connections (you probably didn't know these)
- `AIChatbot()` --calls--> `generateGroqResponse()`  [EXTRACTED]
  src/components/AIChatbot.jsx → src/config/chatbot.js
- `AIChatbot()` --calls--> `generateSmartResponse()`  [EXTRACTED]
  src/components/AIChatbot.jsx → src/config/chatbot.js
- `Contact()` --calls--> `slideIn()`  [EXTRACTED]
  src/components/Contact.jsx → src/utils/motion.js
- `Experience()` --calls--> `textVariant()`  [EXTRACTED]
  src/components/Experience.jsx → src/utils/motion.js
- `StarWrapper()` --calls--> `staggerContainer()`  [EXTRACTED]
  src/hoc/SectionWrapper.jsx → src/utils/motion.js

## Import Cycles
- None detected.

## Communities (15 total, 0 thin omitted)

### Community 0 - "AI Chatbot for Portfolio Website"
Cohesion: 0.05
Nodes (38): 1. Basic Usage, 2. Quick Actions, 3. Custom Questions, Adding New Features, AI Chatbot for Portfolio Website, Automated Testing, Build Process, Code Style (+30 more)

### Community 1 - "constants/index.js"
Cohesion: 0.11
Nodes (17): About(), ServiceCard(), useGsap(), Contact(), Experience(), TechIcon(), experiences, navLinks (+9 more)

### Community 2 - "dependencies"
Cohesion: 0.06
Nodes (35): email-js, @emailjs/browser, framer-motion, gsap, @gsap/react, @heroicons/react, maath, dependencies (+27 more)

### Community 3 - "🚀 Groq AI Integration Setup Guide"
Cohesion: 0.07
Nodes (28): 💡 Advanced Features, Advanced Features, Available AI Services, 🎉 Benefits for Your Portfolio, Common Issues, 🔧 Configuration Options, Cost Analysis, Custom System Prompts (+20 more)

### Community 4 - "Antigravity — Code Instructions"
Cohesion: 0.08
Nodes (25): 0. General Principles, 10. Continuous Documentation Updates, 1. Deep Research & Production-Ready Planning, 2. Pylint Compliance (Non-Negotiable), 3. Code Clarity — Write for Humans First, 4. Security, 5. Robustness & Error Handling, 6. Logging Standards (+17 more)

### Community 5 - "devDependencies"
Cohesion: 0.08
Nodes (23): autoprefixer, devDependencies, autoprefixer, postcss, tailwindcss, @types/react, @types/react-dom, vite (+15 more)

### Community 6 - "components/index.js"
Cohesion: 0.19
Nodes (8): App(), ComputersCanvas(), EarthCanvas(), StarsCanvas(), Footer(), Hero(), CanvasLoader(), Navbar()

### Community 7 - "🚀 Deployment Guide"
Cohesion: 0.12
Nodes (15): Common Issues:, 🚀 Deployment Guide, Next Steps:, Option A: Automatic Deployment (Easiest), Option B: Manual Deployment with GitHub Actions, Performance Tips:, Render:, Step 1: Install Node.js (+7 more)

### Community 8 - "Darsh Shah Portfolio"
Cohesion: 0.13
Nodes (14): Alternative: Render, 🔧 Configuration, 📞 Contact, 🤝 Contributing, 🎨 Customization, Darsh Shah Portfolio, 🌐 Deployment, 🚀 Features (+6 more)

### Community 9 - "AIChatbot.jsx"
Cohesion: 0.36
Nodes (8): AIChatbot(), aiResponses, chatbotConfig, conversationStarters, generateGroqResponse(), generateSmartResponse(), groqConfig, quickActions

### Community 10 - "Enhancement Opportunities"
Cohesion: 0.33
Nodes (6): 🧠 AI Enhancements, 🔌 API Integration, Enhancement Opportunities, Hugging Face Integration, OpenAI Integration, 🎨 UI Enhancements

### Community 11 - "vercel.json"
Cohesion: 0.33
Nodes (5): buildCommand, framework, headers, outputDirectory, rewrites

## Knowledge Gaps
- **130 isolated node(s):** `name`, `private`, `version`, `type`, `dev` (+125 more)
  These have ≤1 connection - possible missing edges or undocumented components.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `dependencies` connect `dependencies` to `devDependencies`?**
  _High betweenness centrality (0.038) - this node is a cross-community bridge._
- **Why does `AI Chatbot for Portfolio Website` connect `AI Chatbot for Portfolio Website` to `Enhancement Opportunities`?**
  _High betweenness centrality (0.025) - this node is a cross-community bridge._
- **What connects `name`, `private`, `version` to the rest of the system?**
  _130 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `AI Chatbot for Portfolio Website` be split into smaller, more focused modules?**
  _Cohesion score 0.05128205128205128 - nodes in this community are weakly interconnected._
- **Should `constants/index.js` be split into smaller, more focused modules?**
  _Cohesion score 0.10931174089068826 - nodes in this community are weakly interconnected._
- **Should `dependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.05714285714285714 - nodes in this community are weakly interconnected._
- **Should `🚀 Groq AI Integration Setup Guide` be split into smaller, more focused modules?**
  _Cohesion score 0.06896551724137931 - nodes in this community are weakly interconnected._