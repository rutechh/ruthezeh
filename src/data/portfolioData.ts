
import { ProfileAvatar,PrimedEHealth,QSM_INVENTORY,QSM_SPLASH,SpeakFluent } from '../assets/images';
import type { PortfolioData, NavigationItem, SEOData } from '../types/portfolio';

export const portfolioData: PortfolioData = {
  personalInfo: {
    name: "Ruth Ezeh",
    title: "Senior Software Engineer",
    tagline: "Building scalable solutions with modern technologies",
    email: "ruth.codes@gmail.com",
    phone: "+234 (906) 488-2273",
    location: "Lagos, Nigeria", 
    website: "https://ruth.codes",
    avatar: ProfileAvatar,
    resume: "/resume.html"
  },

  socialLinks: [
    {
      id: "github",
      name: "GitHub",
      url: "https://github.com/rutechh",
      icon: "Github",
      username: "rutechh"
    },
    // {
    //   id: "linkedin",
    //   name: "LinkedIn",
    //   url: "https://linkedin.com/in/rutechh",
    //   icon: "Linkedin",
    //   username: "rutechh"
    // },
    // {
    //   id: "twitter",
    //   name: "Twitter",
    //   url: "https://twitter.com/rutechh",
    //   icon: "Twitter",
    //   username: "@rutechh"
    // },
    {
      id: "email",
      name: "Email",
      url: "mailto:ruth.codes@gmail.com",
      icon: "Mail"
    }
  ],

  about: {
    summary: "Passionate software engineer with 5+ years of experience building scalable web applications and distributed systems. I specialize in React, TypeScript and Next.js, with a strong focus on clean code, performance optimization, and user experience.",
    detailedBio: "I'm a senior software engineer who loves turning complex problems into elegant solutions. My journey in tech started with a Computer Science degree, and I've since worked with startups and established companies to build products that serve millions of users. I'm passionate about mentoring junior developers, contributing to open source, and staying up-to-date with the latest technologies. When I'm not coding, you'll find me hiking, reading tech blogs, or experimenting with new frameworks.",
    interests: [
      "Web Development",
      "Cloud Architecture",
      // "Machine Learning",
      "Open Source",
      "Tech Mentoring",
      // "Hiking",
      "Photography",
      // "Cooking"
    ],
    values: [
      "Clean, maintainable code",
      "Continuous learning",
      "Team collaboration",
      "User-first thinking",
      "Innovation",
      "Mentorship"
    ],
    funFacts: [
      // "Contributed to 50+ open source projects",
      // "Traveled to 25 countries",
      // "Built my first website at age 12",
      "Can solve a Rubik's cube in under 2 minutes",
      "Fluent in JavaScript, TypeScript Programming Languages and 2 human languages"
    ]
  },

  skills: [
    {
      id: "frontend",
      name: "Frontend Development",
      description: "Building responsive and interactive user interfaces",
      skills: [
        { id: "react", name: "React", category: "frontend", level: "Expert", yearsOfExperience: 5, icon: "React" },
        { id: "angular", name: "Angular", category: "frontend", level: "Advanced", yearsOfExperience: 5, icon: "React" },
        { id: "typescript", name: "TypeScript", category: "frontend", level: "Expert", yearsOfExperience: 5, icon: "Code" },
        { id: "javascript", name: "JavaScript", category: "frontend", level: "Expert", yearsOfExperience: 6, icon: "Code" },
        { id: "nextjs", name: "Next.js", category: "frontend", level: "Advanced", yearsOfExperience: 3, icon: "Code" },
        { id: "tailwind", name: "Tailwind CSS", category: "frontend", level: "Advanced", yearsOfExperience: 5, icon: "Palette" },
        { id: "chakra", name: "Chakra UI", category: "frontend", level: "Advanced", yearsOfExperience: 3, icon: "Palette" },
        { id: "html", name: "HTML5", category: "frontend", level: "Expert", yearsOfExperience: 6, icon: "Code" },
        { id: "css", name: "CSS3", category: "frontend", level: "Expert", yearsOfExperience: 6, icon: "Palette" }
      ]
    },
    {
      id: "backend",
      name: "Backend Development",
      description: "Server-side development and API design",
      skills: [
        // { id: "nodejs", name: "Node.js", category: "backend", level: "Expert", yearsOfExperience: 5, icon: "Server" },
        // { id: "python", name: "Python", category: "backend", level: "Advanced", yearsOfExperience: 4, icon: "Code" },
        // { id: "java", name: "Java", category: "backend", level: "Advanced", yearsOfExperience: 3, icon: "Code" },
        // { id: "express", name: "Express.js", category: "backend", level: "Expert", yearsOfExperience: 5, icon: "Server" },
        { id: "nestjs", name: "NestJS", category: "backend", level: "Advanced", yearsOfExperience: 3, icon: "Server" },
        // { id: "graphql", name: "GraphQL", category: "backend", level: "Advanced", yearsOfExperience: 3, icon: "Network" },
        { id: "rest", name: "REST APIs", category: "backend", level: "Advanced", yearsOfExperience: 3, icon: "Network" }
      ]
    },
    {
      id: "database",
      name: "Database & Storage",
      description: "Data modeling and database management",
      skills: [
        { id: "postgresql", name: "PostgreSQL", category: "database", level: "Advanced", yearsOfExperience: 3, icon: "Database" },
        // { id: "mongodb", name: "MongoDB", category: "database", level: "Advanced", yearsOfExperience: 3, icon: "Database" },
        // { id: "redis", name: "Redis", category: "database", level: "Advanced", yearsOfExperience: 2, icon: "Database" },
        { id: "mysql", name: "MySQL", category: "database", level: "Advanced", yearsOfExperience: 3, icon: "Database" }
      ]
    },
    {
      id: "cloud",
      name: "Cloud & DevOps",
      description: "Cloud platforms and deployment automation",
      skills: [
        // { id: "aws", name: "AWS", category: "cloud", level: "Advanced", yearsOfExperience: 4, icon: "Cloud" },
        // { id: "docker", name: "Docker", category: "cloud", level: "Advanced", yearsOfExperience: 3, icon: "Container" },
        // { id: "kubernetes", name: "Kubernetes", category: "cloud", level: "Intermediate", yearsOfExperience: 2, icon: "Container" },
        // { id: "terraform", name: "Terraform", category: "cloud", level: "Intermediate", yearsOfExperience: 2, icon: "Settings" },
        { id: "cicd", name: "CI/CD", category: "cloud", level: "Advanced", yearsOfExperience: 3, icon: "GitBranch" }
      ]
    },
    {
      id: "tools",
      name: "Tools & Methodologies",
      description: "Development tools and practices",
      skills: [
        { id: "git", name: "Git", category: "tools", level: "Expert", yearsOfExperience: 6, icon: "GitBranch" },
        { id: "agile", name: "Agile/Scrum", category: "tools", level: "Advanced", yearsOfExperience: 5, icon: "Users" },
        { id: "testing", name: "Testing (Jest, Cypress)", category: "tools", level: "Intermediate", yearsOfExperience: 2, icon: "CheckCircle" },
        { id: "figma", name: "Figma", category: "tools", level: "Intermediate", yearsOfExperience: 5, icon: "Figma" }
      ]
    }
  ],

  experience: [
    {
      id: "senior-engineer-techcorp",
      company: "Todo Toronto",
      position: "Senior Software Engineer",
      location: "Toronto, Canada",
      startDate: "2024-08",
      description: "Contributed to development of a multi tenant application for a booking and invoicing system.",
      achievements: [
        // "Reduced API response time by 40% through optimization and caching strategies",
        "Designed and built multi tenant application for a booking an invoicing system",
        // "Led migration from monolith to microservices, improving system scalability",
        // "Mentored 5 junior developers, with 4 receiving promotions",
        // "Implemented comprehensive testing strategy, increasing code coverage to 85%",
        "Designed and built real-time notification system"
      ],
      technologies: ["React", "TypeScript", "Next.js", "PostgreSQL", "Chakra UI"],
      // companyLogo: "/api/placeholder/100/100",
      // companyUrl: "https://techcorp.com"
    },
    {
      id: "fullstack-developer-innovate",
      company: "Mojec International",
      position: "Software Engineer",
      location: "Lagos, Nigeria",
      startDate: "2022-08",
      endDate: "2024-07",
      description: "Developed and maintained multiple client-facing applications using modern web technologies. Collaborated with design and product teams to deliver exceptional user experiences.",
      achievements: [
        "Built 8 production applications from scratch using React and Angular",
        "Improved application performance by 60% through code optimization",
        // "Implemented automated deployment pipeline reducing release time by 75%",
        "Collaborated with UX team to increase user engagement by 45%"
      ],
      technologies: ["React", "JavaScript", "Angular", "Git"],
      // companyLogo: "/api/placeholder/100/100",
      // companyUrl: "https://innovatesolutions.com"
    },
    {
      id: "junior-developer-startup",
      company: "Pharez Technologies",
      position: "Junior Software Developer",
      location: "Lagos, Nigeria",
      startDate: "2021-06",
      endDate: "2022-07",
      description: "Started as an intern and quickly became a full-time developer. Worked on various features for the company's main product while learning modern development practices.",
      achievements: [
        "Developed responsive frontend components",
        "Built a web application for a client to manage their expenses and income",
        // "Fixed 100+ bugs and implemented 20+ new features",
        // "Created comprehensive documentation for the development team",
        // "Participated in daily standups and sprint planning meetings"
      ],
      technologies: ["JavaScript", "TypeScript", "Angular", "Tailwind CSS", "Git"],
      // companyLogo: "/api/placeholder/100/100",
      // companyUrl: "https://startupxyz.com"
    }
  ],

  education: [
    // {
    //   id: "bs-computer-science",
    //   institution: "University of Lagos",
    //   degree: "Bachelor of Science",
    //   field: "Computer Science",
    //   startDate: "2018-09",
    //   endDate: "2018-05",
    //   gpa: "3.7/4.0",
    //   achievements: [
    //     "Dean's List for 4 semesters",
    //     "President of Computer Science Club",
    //     "Published research paper on distributed systems",
    //     "Teaching Assistant for Data Structures course"
    //   ],
    //   location: "Berkeley, CA"
    // }
  ],

  projects: [
    {
      id: "web-apps",
      name: "Web Applications",
      description: "Full-stack web applications and platforms",
      projects: [
        {
          id: "soap-notes",
          name: "Soap Notes",
          description: "A comprehensive SOAP Notes platform built with React, Next.js, and PostgreSQL(Supabase). Features include user authentication, booking and invoicing system, and admin dashboard.",
          shortDescription: "Full-featured SOAP Notes platform",
          technologies: ["React", "TypeScript", "Next.js", "PostgreSQL", "Supabase", "AWS S3", "Redis"],
          features: [
            "Booking and invoicing system",
            "Admin dashboard with analytics",
            "Secure payment processing",
            "Order tracking and management",
            "Mobile-responsive design"
          ],
          challenges: [
            "Handling concurrent booking and invoicing",
            "Implementing complex pricing rules",
            "Optimizing search performance"
          ],
          solutions: [
            "Used database transactions and locks for booking and invoicing",
            "Created flexible pricing engine with rule builder",
            "Implemented Elasticsearch for fast search"
          ],
          images: [SpeakFluent],
          demoUrl: "https://www.speakfluent.ca/",
          sourceUrl: "",
          category: "web-apps",
          status: "Completed",
          startDate: "2023-01",
          endDate: "2023-06",
          teamSize: 4,
          role: "Full Stack Developer",
          featured: true
        },
        {
          id: "invoice-management",
          name: "Quality Signs and Marquee",
          description: "A website for a movie poster company built with React and Tailwind CSS.",
          shortDescription: "Movie poster company website",
          technologies: ["React", "Tailwind CSS", ],
          features: [
            "Admin dashboard with with order processing",
            "Order tracking and management",
            "Mobile-responsive design"
          ],
          images: [QSM_SPLASH, QSM_INVENTORY],
          demoUrl: "https://app.qsmfulfillment.com/user/login",
          sourceUrl: "",
          category: "web-apps",
          status: "Completed",
          startDate: "2022-08",
          endDate: "2022-11",
          teamSize: 2,
          role: "Lead Developer",
          featured: true
        },
        {
          id: "primede-health",
          name: "Primed E-Health",
          description: "Smart Clinic - Hospital Management Solution Smart Clinic is a comprehensive hospital management solution designed to facilitate the day-to-day operations of healthcare organizations. This advanced software platform integrates various functionalities to streamline administrative tasks, enhance patient care, and optimize overall efficiency within the healthcare facility.",
          shortDescription: "Health and fitness platform",
          technologies: ["React", "TypeScript", "Tailwind CSS"],
          features: [
            "Health and fitness tracking",
            "Nutrition logging",
            "Progress analytics",
            "Mobile-responsive design"
          ],
          images: [PrimedEHealth],
          demoUrl: "https://primedehealth.com/",
          sourceUrl: "",
          category: "web-apps",
          status: "Completed",
          startDate: "2022-03",
          endDate: "2022-07",
          teamSize: 3,
          featured: false
        }
      ]
    },
    {
      id: "mobile-apps",
      name: "Mobile Applications",
      description: "React Native and Progressive Web Apps",
      projects: [
        
      ]
    },
    {
      id: "open-source",
      name: "Open Source",
      description: "Contributions to open source projects and libraries",
      projects: [
      
      ]
    }
  ],

  certifications: [
    {
      id: "react-developer",
      name: "React Developer",
      issuer: "Udemy",
      issueDate: "2021-09",
      // credentialId: "UDEMY-REACT-67890",
      // description: "Advanced React development patterns and best practices"
    },
    {
      id: "angular-developer",
      name: "Angular Developer",
      issuer: "Udemy",
      issueDate: "2022-06",
      expiryDate: "2025-06",
      // credentialId: "UDEMY-ANGULAR-12345",
      // credentialUrl: "https://udemy.com/verification",
      // description: "Validates expertise in designing distributed systems on AWS"
    },
  ],

  contact: {
    email: "ruth.codes@gmail.com",
    phone: "+234 (906) 488-2273",
    location: "Lagos, Nigeria",
    availability: "Available for new opportunities",
    preferredContactMethod: "Email"
  }
};

export const navigation: NavigationItem[] = [
  { id: "hero", name: "Home", href: "#hero", section: "hero" },
  { id: "about", name: "About", href: "#about", section: "about" },
  { id: "skills", name: "Skills", href: "#skills", section: "skills" },
  { id: "experience", name: "Experience", href: "#experience", section: "experience" },
  { id: "projects", name: "Projects", href: "#projects", section: "projects" },
  { id: "contact", name: "Contact", href: "#contact", section: "contact" }
];

export const seoData: SEOData = {
  title: "Ruth Ezeh - Senior Software Engineer",
  description: "Senior Software Engineer specializing in React, TypeScript, Angular, and Next.js technologies. Building scalable solutions with modern technologies.",
  keywords: [
    "software engineer",
    "full stack developer",
    "react developer",
    "typescript",
    "node.js",
    "angular",
    "nestjs",
    "postgresql",
    "mysql",
    "cicd",
    "git",
    "agile",
    "aws",
    "portfolio"
  ],
  author: "Ruth Ezeh",
  ogImage: "/og-image.jpg"
}; 