export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  email: string;
  phone?: string;
  location: string;
  website?: string;
  avatar: string;
  resume?: string;
}

export interface SocialLink {
  id: string;
  name: string;
  url: string;
  icon: string;
  username?: string;
}

export interface Skill {
  id: string;
  name: string;
  category: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  yearsOfExperience?: number;
  icon?: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  description?: string;
  skills: Skill[];
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate?: string; // null for current position
  description: string;
  achievements: string[];
  technologies: string[];
  companyLogo?: string;
  companyUrl?: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  gpa?: string;
  achievements?: string[];
  location: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  shortDescription: string;
  technologies: string[];
  features: string[];
  challenges?: string[];
  solutions?: string[];
  images: string[];
  demoUrl?: string;
  sourceUrl?: string;
  category: string;
  status: 'Completed' | 'In Progress' | 'Planned';
  startDate: string;
  endDate?: string;
  teamSize?: number;
  role?: string;
  featured: boolean;
}

export interface ProjectCategory {
  id: string;
  name: string;
  description?: string;
  projects: Project[];
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  issueDate: string;
  expiryDate?: string;
  credentialId?: string;
  credentialUrl?: string;
  description?: string;
}

export interface AboutSection {
  summary: string;
  detailedBio: string;
  interests: string[];
  values: string[];
  funFacts?: string[];
}

export interface ContactInfo {
  email: string;
  phone?: string;
  location: string;
  availability: string;
  preferredContactMethod: string;
}

export interface PortfolioData {
  personalInfo: PersonalInfo;
  socialLinks: SocialLink[];
  about: AboutSection;
  skills: SkillCategory[];
  experience: Experience[];
  education: Education[];
  projects: ProjectCategory[];
  certifications: Certification[];
  contact: ContactInfo;
}

export interface NavigationItem {
  id: string;
  name: string;
  href: string;
  section: string;
}

export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  author: string;
  ogImage?: string;
} 