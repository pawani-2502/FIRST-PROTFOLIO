import { IProject } from '@/types';

export const SITE_URL = 'https://pawan-i.tech';

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
  { name: 'Resume', url: GENERAL_INFO.resumeUrl },
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

const projectImage = '/profile.png';

export const PROJECTS: IProject[] = [
  {
    title: 'Smart Resume Shortlister',
    slug: 'smart-resume-shortlister',
    sourceCode: 'https://github.com/pawani-2502/SMART-RESUME-SHORTLISTER-A',
    year: 2026,
    description: `AI-powered recruitment platform that helps recruiters shortlist candidates faster with evidence-grounded rankings and transparent scoring.`,
    role: `Full-stack developer — built the AI shortlisting engine, recruiter dashboard, and API layer for resume parsing and candidate evaluation.`,
    techStack: ['Python', 'React', 'FastAPI', 'AI/ML', 'REST APIs'],
    thumbnail: projectImage,
    longThumbnail: projectImage,
    images: [projectImage, projectImage, projectImage],
  },
  {
    title: 'YojnaConnect',
    slug: 'yojna-connect',
    sourceCode: 'https://github.com/pawani-2502/YOJNA-CONNECT',
    year: 2026,
    description: `Government scheme discovery platform helping Indian citizens find relevant welfare schemes through search, eligibility filtering, and category-based recommendations.`,
    role: `Full-stack developer — designed RESTful APIs, MySQL schema, and responsive React interfaces for scheme discovery.`,
    techStack: ['React', 'Vite', 'Node.js', 'Express', 'MySQL'],
    thumbnail: projectImage,
    longThumbnail: projectImage,
    images: [projectImage, projectImage, projectImage],
  },
  {
    title: 'KeyForge AI',
    slug: 'keyforge-ai',
    sourceCode: 'https://github.com/pawani-2502/KEYFORGE_AI',
    year: 2026,
    description: `Real-time multiplayer typing platform with live races, leaderboards, WPM/accuracy tracking, and secure authentication.`,
    role: `Full-stack developer — implemented Socket.IO event handling, REST APIs, and database-driven score management.`,
    techStack: ['React', 'Node.js', 'Socket.IO', 'MySQL', 'Express'],
    thumbnail: projectImage,
    longThumbnail: projectImage,
    images: [projectImage, projectImage, projectImage],
  },
  {
    title: 'LayChess-A',
    slug: 'laychess-a',
    sourceCode: 'https://github.com/pawani-2502/LAYCHESS-A',
    year: 2026,
    description: `Browser-based chess platform with a custom TypeScript engine using Negamax search, Alpha-Beta pruning, Zobrist hashing, and transposition tables.`,
    role: `Full-stack developer — built the chess engine, interactive UI, board customization, and game analytics.`,
    techStack: ['React', 'TypeScript', 'TanStack Start'],
    thumbnail: projectImage,
    longThumbnail: projectImage,
    images: [projectImage, projectImage, projectImage],
  },
  {
    title: 'Edugram',
    slug: 'edugram',
    year: 2025,
    description: `Gamified learning platform for rural Indian students with local language support tailored for Odisha. Selected in SRM Internal Selection for Smart India Hackathon 2025.`,
    role: `Developer — built a gamified education experience focused on accessibility and engagement for underserved learners.`,
    techStack: ['Web App', 'Gamification', 'Education'],
    thumbnail: projectImage,
    longThumbnail: projectImage,
    images: [projectImage, projectImage],
  },
  {
    title: 'Expense Tracker',
    slug: 'expense-tracker',
    year: 2025,
    description: `Full-stack expense management application with real-time transaction tracking, categorization, and graphical spending trend visualization.`,
    role: `Solo developer — built the complete Java web application with JSP/Servlets and responsive UI for monthly financial summaries.`,
    techStack: ['Java', 'JSP', 'Servlets', 'MySQL'],
    thumbnail: projectImage,
    longThumbnail: projectImage,
    images: [projectImage, projectImage],
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
