import type { SiteConfig } from './types'

export const siteConfig: SiteConfig = {
  metadata: {
    title: 'Vaibhav Surthi — AI Engineer & Product Builder',
    description:
      'Building intelligent systems, machine learning products, and AI-powered experiences. AI Engineer, ML Engineer, Data Scientist, and Product Builder.',
    url: 'https://vaibhavsurthi.vercel.app',
    ogImage: '/images/og.png',
    author: 'Vaibhav Surthi',
    twitterHandle: '@vaibhavsurthi',
  },
  hero: {
    name: 'Vaibhav Surthi',
    roles: [
      'AI Engineer',
      'Machine Learning Engineer',
      'Product Builder',
      'Data Scientist',
    ],
    statement:
      'Building intelligent systems, machine learning products, and useful software.',
    cta: {
      primary: { label: 'View Work', href: '#projects' },
      secondary: { label: 'Resume', href: '/resume.pdf' },
      tertiary: { label: 'GitHub', href: 'https://github.com/vaibhxvvy' },
    },
  },
  statusModules: [
    {
      label: 'Current Focus',
      icon: '🎯',
      description: 'What I am building right now',
      items: [
        'Building AI products and intelligent systems',
        'Developing ML-powered applications',
        'Creating useful developer tools',
      ],
    },
    {
      label: 'Current Stack',
      icon: '⚡',
      description: 'Technologies I work with daily',
      items: [
        'Python',
        'FastAPI',
        'PyTorch',
        'TensorFlow',
        'Docker',
        'Linux',
        'React',
        'TypeScript',
      ],
    },
    {
      label: 'Availability',
      icon: '📶',
      description: 'What I am open to',
      items: [
        'Open to internships',
        'Open to remote work',
        'Open to collaborations',
      ],
    },
    {
      label: 'Currently Learning',
      icon: '📖',
      description: 'What I am exploring next',
      items: ['AI Agents', 'LLM Systems', 'AI Engineering'],
    },
  ],
  projects: [
    {
      title: 'Customer Churn Prediction',
      description:
        'An end-to-end machine learning pipeline that predicts customer churn with high accuracy, enabling proactive retention strategies.',
      problem:
        'Businesses lose significant revenue from customer churn, often detecting it too late to take preventive action.',
      solution:
        'Built a classification model using ensemble methods with feature engineering and automated data preprocessing. Deployed as a REST API with real-time prediction capabilities.',
      techStack: [
        'Python',
        'Scikit-learn',
        'XGBoost',
        'FastAPI',
        'Docker',
        'Pandas',
      ],
      impact: 'Achieved 92% prediction accuracy, enabling proactive customer retention',
      image: '/images/project-churn.jpg',
      github: 'https://github.com/vaibhxvvy',
      tags: ['Machine Learning', 'API', 'Production'],
      year: '2024',
    },
    {
      title: 'Intelligent Recommendation System',
      description:
        'A collaborative filtering recommendation engine that delivers personalized content suggestions at scale.',
      problem:
        'Users struggle to discover relevant content in large datasets, leading to poor engagement and experience.',
      solution:
        'Implemented collaborative filtering with matrix factorization and deep learning hybrid approach. Built efficient nearest-neighbor search for real-time recommendations.',
      techStack: [
        'Python',
        'TensorFlow',
        'NumPy',
        'FastAPI',
        'Redis',
      ],
      impact: 'Improved user engagement by 35% through personalized recommendations',
      image: '/images/project-recommend.jpg',
      github: 'https://github.com/vaibhxvvy',
      tags: ['Deep Learning', 'Recommendations', 'Scale'],
      year: '2024',
    },
    {
      title: 'Real-Time Sales Analytics Dashboard',
      description:
        'An interactive business intelligence dashboard that transforms raw sales data into actionable insights.',
      problem:
        'Decision-makers lacked real-time visibility into sales performance, relying on static reports that were often outdated.',
      solution:
        'Designed interactive dashboards with drill-down capabilities, automated data pipelines, and real-time KPI tracking with anomaly detection.',
      techStack: [
        'Power BI',
        'SQL',
        'Python',
        'DAX',
        'Excel',
      ],
      impact: 'Reduced reporting time by 60% and enabled data-driven decisions',
      image: '/images/project-dashboard.jpg',
      github: 'https://github.com/vaibhxvvy',
      tags: ['Data Science', 'Analytics', 'BI'],
      year: '2024',
    },
  ],
  capabilities: [
    {
      category: 'Artificial Intelligence',
      skills: [
        'LLMs',
        'Prompt Engineering',
        'RAG',
        'AI Agents',
        'LangChain',
        'Fine-tuning',
      ],
      color: '#7C3AED',
    },
    {
      category: 'Machine Learning',
      skills: [
        'Scikit-learn',
        'TensorFlow',
        'PyTorch',
        'XGBoost',
        'Model Deployment',
        'MLOps',
      ],
      color: '#06B6D4',
    },
    {
      category: 'Data Science',
      skills: [
        'Pandas',
        'NumPy',
        'Statistical Analysis',
        'EDA',
        'Data Visualization',
        'Feature Engineering',
      ],
      color: '#22C55E',
    },
    {
      category: 'Backend Engineering',
      skills: [
        'Python',
        'FastAPI',
        'SQL',
        'REST APIs',
        'Docker',
        'Linux',
      ],
      color: '#F59E0B',
    },
    {
      category: 'DevOps',
      skills: [
        'Git',
        'Docker',
        'CI/CD',
        'Linux',
        'Cloud Deployment',
        'Vercel',
      ],
      color: '#EC4899',
    },
    {
      category: 'Design & Frontend',
      skills: [
        'React',
        'TypeScript',
        'Next.js',
        'Tailwind CSS',
        'Figma',
        'UI/UX',
      ],
      color: '#8B5CF6',
    },
  ],
  journey: [
    {
      year: '2024',
      title: 'AI Engineering Focus',
      description:
        'Deep-diving into LLM systems, AI agents, and building intelligent applications.',
      type: 'milestone',
    },
    {
      year: '2024',
      title: 'ML Product Development',
      description:
        'Built end-to-end machine learning pipelines with production deployment.',
      type: 'project',
    },
    {
      year: '2023',
      title: 'Data Science & Analytics',
      description:
        'Developed interactive dashboards and data-driven solutions for business intelligence.',
      type: 'project',
    },
    {
      year: '2023',
      title: 'Machine Learning Engineering',
      description:
        'Focused on model development, training, and deployment at scale.',
      type: 'experience',
    },
    {
      year: '2022',
      title: 'Programming & Python',
      description:
        'Built strong foundations in Python, data structures, and algorithms.',
      type: 'education',
    },
    {
      year: '2022',
      title: 'Started Building',
      description:
        'Began the journey into software development and data science.',
      type: 'milestone',
    },
  ],
  about: {
    whoami: ['AI Engineer', 'Machine Learning Engineer', 'Product Builder'],
    description:
      'Building useful systems and intelligent products. Currently focused on AI engineering, LLM applications, and machine learning products.',
  },
  socials: [
    {
      platform: 'GitHub',
      url: 'https://github.com/vaibhxvvy',
      command: 'open github',
      icon: 'github',
    },
    {
      platform: 'LinkedIn',
      url: 'https://www.linkedin.com/in/vaibhavsurthi/',
      command: 'open linkedin',
      icon: 'linkedin',
    },
    {
      platform: 'Email',
      url: 'mailto:vaibhavsurthi08@gmail.com',
      command: 'send email',
      icon: 'mail',
    },
    {
      platform: 'Resume',
      url: '/resume.pdf',
      command: 'download resume',
      icon: 'file-text',
    },
  ],
}
