import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
  {
    title: "Fullstack Developer",
    company_name: "PT Investasi Bersama Bangsa Indonesia",
    date: "October 2023 - October 2024",
    points: [
      "Developed and maintained scalable web applications using React.js and Next.js for frontend, and Laravel for backend.",
      "Collaborated closely with UI/UX designers and backend teams to build seamless, user-friendly interfaces and APIs.",
      "Implemented performance optimizations such as code splitting, lazy loading, and server-side rendering for improved SEO and faster load times.",
      "Built RESTful APIs with Laravel, ensuring secure authentication and efficient database interactions using MySQL.",
      "Participated in code reviews, testing, and debugging to maintain high code quality and application stability.",
      "Applied Agile methodologies to coordinate development efforts and deliver features iteratively."
    ],
  },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/ray34-cyber',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/ranchaadzany/',
    }
];

export const projects = [
  {
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/733/733553.png', // Apple “A” logo (can be styled to slate via CSS)
    name: 'Apple 3D Website',
    description:
      'A modern 3D product showcase website inspired by Apple, built using React Three Fiber and Tailwind CSS. Includes interactive 3D product views, responsive layout, and smooth animations.',
    link: 'https://apple-website-pi-livid.vercel.app/',
  },
  {
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/190/190411.png', // Money icon for finance
    name: 'Investment Platform – Frontend',
    description:
      'Led development of a responsive investment dashboard with Nuxt.js, enabling users to track portfolios, execute transactions, and view real-time market data.',
    link: 'https://github.com/ray34-cyber/invest_ui',
  },
  {
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/3064/3064197.png', // Lock icon representing API security
    name: 'Investment Platform – API',
    description:
      'Built and maintained secure RESTful APIs using Laravel to handle user authentication, transaction processing, and integration with external financial data providers.',
    link: 'https://github.com/ray34-cyber/invest_api',
  },
  {
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/2983/2983782.png', // Checklist icon for task management
    name: 'Task Management App – Frontend',
    description:
      'Developed a responsive task management interface using Next.js and Tailwind CSS, featuring task creation, editing, and status tracking with real-time validation.',
    link: 'https://pegawai-fe.vercel.app/',
  },
  {
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/3064/3064197.png', // Lock icon for backend/API security
    name: 'Task Management App – Backend',
    description:
      'Implemented backend services in Laravel to support task CRUD operations, user authentication, and data validation for a secure task management system.',
    link: 'https://github.com/ray34-cyber/pegawai-be',
  },
  {
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/1170/1170678.png', // Shopping cart icon
    name: 'E-Commerce Website',
    description:
      'A full-featured e-commerce platform with product listings, shopping cart, and checkout flows, built using Next.js (frontend) and Laravel (backend).',
    link: 'https://github.com/ray34-cyber/e-commerce',
  },
];




