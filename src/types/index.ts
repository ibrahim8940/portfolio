export interface NavLink {
  label: string;
  href: string;
}

export interface Skill {
  name: string;
  percentage: number;
}

export interface TechIcon {
  emoji: string;
  name: string;
}

export interface Service {
  icon: string;
  title: string;
  description: string;
  price: number;
}

export interface Project {
  title: string;
  category: "web" | "app" | "design";
  tech: string;
  image: string;
}

export interface TimelineEntry {
  period: string;
  title: string;
  description: string;
}

export interface Testimonial {
  text: string;
  name: string;
  role: string;
  avatar: string;
}

export interface Tip {
  number: number;
  title: string;
  description: string;
  proTip: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  projectType: string;
  budget: string;
  details: string;
}
