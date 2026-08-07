import { IProject } from '@/types';

export const SITE_URL = 'https://www.pawan-i.tech';

export const GENERAL_INFO = {
  siteUrl: SITE_URL,
  email: 'pawanisharma16450@gmail.com',
  emailSubject: "Let's collaborate on a project",
  emailBody: 'Hi Pawani, I am reaching out to you because...',
  linkedinProfile: 'https://www.linkedin.com/in/pawani-sharma02/',
  githubProfile: 'https://github.com/pawani-2502',
  resumeUrl: '/resume.pdf',
};

export const SOCIAL_LINKS = [
  { name: 'github', url: GENERAL_INFO.githubProfile },
  { name: 'linkedin', url: GENERAL_INFO.linkedinProfile },
  { name: 'Resume', url: '#resume' },
];

export const MY_STACK = {
  languages: [
    { name: 'Java', icon: '/logo/js.png' },
    { name: 'Python', icon: '/logo/js.png' },
    { name: 'JavaScript', icon: '/logo/js.png' },
    { name: 'TypeScript', icon: '/logo/ts.png' },
    { name: 'C / C++', icon: '/logo/js.png' },
    { name: 'SQL', icon: '/logo/mysql.svg' },
  ],
  frontend: [
    { name: 'React', icon: '/logo/react.png' },
    { name: 'Vite', icon: '/logo/next.png' },
    { name: 'Tailwind CSS', icon: '/logo/tailwind.png' },
    { name: 'HTML5 / CSS3', icon: '/logo/bootstrap.svg' },
    { name: 'JSP & Servlets', icon: '/logo/js.png' },
    { name: 'Framer Motion', icon: '/logo/framer-motion.png' },
  ],
  backend: [
    { name: 'Node.js', icon: '/logo/node.png' },
    { name: 'Express.js', icon: '/logo/express.png' },
    { name: 'REST APIs', icon: '/logo/node.png' },
    { name: 'Socket.IO', icon: '/logo/node.png' },
    { name: 'JWT Auth', icon: '/logo/node.png' },
  ],
  database: [
    { name: 'MySQL', icon: '/logo/mysql.svg' },
    { name: 'MongoDB', icon: '/logo/mongodb.svg' },
  ],
  tools: [
    { name: 'Git', icon: '/logo/git.png' },
    { name: 'GitHub', icon: '/logo/github.png' },
    { name: 'Pandas', icon: '/logo/js.png' },
    { name: 'NumPy', icon: '/logo/js.png' },
    { name: 'Postman', icon: '/logo/git.png' },
    { name: 'VS Code', icon: '/logo/git.png' },
  ],
};

export const PROJECTS: IProject[] = [
  {
    title: 'Smart Resume Shortlister',
    slug: 'smart-resume-shortlister',
    sourceCode: 'https://github.com/pawani-2502/SMART-RESUME-SHORTLISTER-A',
    year: 2026,
    description: `AI-powered recruitment platform with 24+ Python engines, evidence-grounded rankings, recruiter dashboard, and FastAPI backend.<br/><br/><strong>Architecture:</strong> Next.js frontend → FastAPI API → Celery workers → PostgreSQL + Redis + FAISS vector store → LLM chain (Groq / Gemini / Ollama).<br/><br/><strong>Pipeline:</strong> Upload resumes → parse & structure → eligibility + credibility checks → hybrid retrieval → reciprocal fit scoring → shadow interview → transparent shortlist with citations.`,
    role: `Full-stack developer — built the AI shortlisting engine, recruiter dashboard, ranking pipeline, and REST/SSE APIs for resume parsing and candidate evaluation.`,
    techStack: ['Python', 'FastAPI', 'React', 'Next.js', 'PostgreSQL', 'Redis', 'FAISS', 'Celery', 'AI/ML'],
    thumbnail: '/projects/thumbnail/smart-resume-shortlister.jpg',
    longThumbnail: '/projects/long/smart-resume-shortlister.jpg',
    images: [
      '/projects/images/smart-resume-shortlister-1.png',
      '/projects/images/smart-resume-shortlister-1.png',
      '/projects/images/smart-resume-shortlister-1.png',
    ],
  },
  {
    title: 'YojnaConnect',
    slug: 'yojna-connect',
    liveUrl: 'https://yojnaconnect.prakharkr.online/',
    sourceCode: 'https://github.com/pawani-2502/YOJNA-CONNECT',
    year: 2026,
    description: `Government scheme discovery platform helping Indian citizens find relevant welfare schemes through age-based discovery, search, eligibility filtering, and bilingual support.<br/><br/><strong>Architecture:</strong> React + Vite frontend → Express REST API → MySQL (schemes & sectors tables) with i18n (EN/HI).<br/><br/><strong>API:</strong> /api/schemes, /api/schemes/:id, /api/sectors, health checks — powering personalized scheme lists and detail pages.`,
    role: `Full-stack developer — designed RESTful APIs, MySQL schema, responsive React UI, and scheme guide chatbot for civic welfare discovery.`,
    techStack: ['React', 'Vite', 'Node.js', 'Express', 'MySQL', 'i18next', 'Tailwind CSS'],
    thumbnail: '/projects/thumbnail/yojna-connect.jpg',
    longThumbnail: '/projects/long/yojna-connect.jpg',
    images: [
      '/projects/images/yojna-connect-1.png',
      '/projects/images/yojna-connect-2.png',
      '/projects/images/yojna-connect-1.png',
    ],
  },
  {
    title: 'KeyForge AI',
    slug: 'keyforge-ai',
    liveUrl: 'https://typeracer.prakharkr.online/',
    sourceCode: 'https://github.com/pawani-2502/KEYFORGE_AI',
    year: 2026,
    description: `Real-time multiplayer typing platform with live races, leaderboards, WPM/accuracy tracking, analytics dashboard, and secure authentication.<br/><br/><strong>Architecture:</strong> React frontend → Node.js + Express REST API → MySQL + Socket.IO for real-time race sync and live leaderboard updates.<br/><br/><strong>Features:</strong> Multiplayer races, JWT auth, WPM/accuracy engines, database-driven score management, responsive UI.`,
    role: `Full-stack developer — implemented Socket.IO event handling, REST APIs, analytics, and database-driven score management.`,
    techStack: ['React', 'Node.js', 'Socket.IO', 'MySQL', 'Express', 'JWT'],
    thumbnail: '/projects/thumbnail/keyforge-ai.jpg',
    longThumbnail: '/projects/long/keyforge-ai.jpg',
    images: [
      '/projects/images/keyforge-ai-1.png',
      '/projects/images/keyforge-ai-2.png',
      '/projects/images/keyforge-ai-1.png',
    ],
  },
  {
    title: 'LayChess-A',
    slug: 'laychess-a',
    liveUrl: 'https://chess.prakharkr.online/',
    sourceCode: 'https://github.com/pawani-2502/LAYCHESS-A',
    year: 2026,
    description: `Browser-based chess with a custom TypeScript engine using Negamax search, Alpha-Beta pruning, Zobrist hashing, and transposition tables.<br/><br/><strong>Architecture:</strong> React + TanStack Start SPA → client-side chess engine (no backend) with board themes, hint generation, and game analytics.<br/><br/><strong>Engine:</strong> Negamax + alpha-beta pruning, transposition tables, configurable search depth, move hints, and performance-optimized search.`,
    role: `Full-stack developer — built the chess engine, interactive UI, board customization, depth control, and game analytics.`,
    techStack: ['React', 'TypeScript', 'TanStack Start', 'Chess Engine', 'Vite'],
    thumbnail: '/projects/thumbnail/laychess-a.jpg',
    longThumbnail: '/projects/long/laychess-a.jpg',
    images: [
      '/projects/images/laychess-a-1.png',
      '/projects/images/laychess-a-1.png',
      '/projects/images/laychess-a-1.png',
    ],
  },
  {
    title: 'Edugram',
    slug: 'edugram',
    year: 2025,
    description: `Gamified learning platform for rural Indian students with local language support tailored for Odisha. Selected in SRM Internal Selection for Smart India Hackathon 2025.`,
    role: `Developer — built a gamified education experience focused on accessibility and engagement for underserved learners.`,
    techStack: ['Web App', 'Gamification', 'Education'],
    thumbnail: '/profile.png',
    longThumbnail: '/profile.png',
    images: ['/profile.png', '/profile.png'],
  },
  {
    title: 'Expense Tracker',
    slug: 'expense-tracker',
    year: 2025,
    description: `Full-stack expense management application with real-time transaction tracking, categorization, and graphical spending trend visualization.`,
    role: `Solo developer — built the complete Java web application with JSP/Servlets and responsive UI for monthly financial summaries.`,
    techStack: ['Java', 'JSP', 'Servlets', 'MySQL'],
    thumbnail: '/profile.png',
    longThumbnail: '/profile.png',
    images: ['/profile.png', '/profile.png'],
  },
];

export const MY_EXPERIENCE = [
  {
    title: 'B.Tech Computer Science and Engineering',
    company: 'SRM Institute of Science and Technology, KTR',
    duration: '2025 – 2029 · 3rd Semester · CGPA: 9.42',
  },
  {
    title: 'Azure AI Apps and Agents Developer Associate',
    company: 'Microsoft Certified',
    duration: '2026',
  },
  {
    title: 'Fabric Data Engineer Associate',
    company: 'Microsoft Certified',
    duration: '2026',
  },
  {
    title: 'SRM Internal Selection',
    company: 'Smart India Hackathon 2025',
    duration: '2025',
  },
];
