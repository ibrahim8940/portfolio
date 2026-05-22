import type {
  NavLink,
  Skill,
  TechIcon,
  Service,
  Project,
  TimelineEntry,
  Tip,
} from "../../src/types/index";

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Experience", href: "#experience" },
  { label: "Fiverr Tips", href: "#tips" },
];

export const skills: Skill[] = [
  { name: "HTML5 / CSS3", percentage: 98 },
  { name: "React / Next.js", percentage: 95 },
  { name: "Node.js / NestJS", percentage: 90 },
  { name: "TypeScript", percentage: 88 },
  { name: "Tailwind CSS / SCSS", percentage: 96 },
  { name: "JavaScript", percentage: 92 },
  { name: "jQuery", percentage: 85 },
  { name: "NestJS", percentage: 88 },
  { name: "SQL Server", percentage: 90 },
  { name: "Material UI", percentage: 92 },
  { name: "MongoDB / SQL", percentage: 89 },
  { name: "Figma / UI Design", percentage: 91 },
];

export const techIcons: TechIcon[] = [
  { emoji: "⚛️", name: "React" },
  { emoji: "🟢", name: "Node.js" },
  { emoji: "🔷", name: "TypeScript" },
  { emoji: "🎨", name: "Figma" },
  { emoji: "🌊", name: "Tailwind" },
  { emoji: "🗄️", name: "MongoDB" },
  { emoji: "🌐", name: "HTML5" },
  { emoji: "🎨", name: "CSS3" },
  { emoji: "⚡", name: "JavaScript" },
  { emoji: "🧩", name: "jQuery" },
  { emoji: "⚙️", name: "NestJS" },
  { emoji: "🗄️", name: "SQL Server" },
  { emoji: "🎨", name: "Material UI" },
];

export const services: Service[] = [
  {
    icon: "database",
    title: "ERP & Admin Panel Development",
    description:
      "Modern ERP systems with dynamic forms, RBAC, dashboards, generic CRUD architecture, and scalable business modules.",
    price: 400,
  },
  {
    icon: "settings",
    title: "Dynamic Form & CRUD Systems",
    description:
      "Reusable dynamic form builders and generic CRUD systems using React, Next.js, NestJS, and SQL Server.",
    price: 250,
  },
  {
    icon: "layout",
    title: "Website Design & Development",
    description:
      "Custom responsive websites built from scratch using modern technologies. Perfect for businesses, portfolios, and e-commerce.",
    price: 150,
  },
  {
    icon: "smartphone",
    title: "React / Next.js Web App",
    description:
      "Full-stack web applications with React, Next.js, Node.js and databases. Scalable, fast, and SEO-friendly.",
    price: 300,
  },
  {
    icon: "pen-tool",
    title: "UI/UX Design in Figma",
    description:
      "User-centered design with wireframes, prototypes, and pixel-perfect UI. Delivered with full Figma source files.",
    price: 100,
  },
  {
    icon: "shopping-bag",
    title: "E-Commerce Store",
    description:
      "Shopify, WooCommerce, or custom e-commerce solutions with payment integration and inventory management.",
    price: 250,
  },
  {
    icon: "search",
    title: "SEO Optimization",
    description:
      "Technical SEO, on-page optimization, speed improvements, and schema markup to boost your Google rankings.",
    price: 80,
  },
  {
    icon: "bug",
    title: "Bug Fixing & Debugging",
    description:
      "Quick diagnosis and resolution of bugs, errors, and performance issues in your existing codebase.",
    price: 50,
  },
];

export const projects: Project[] = [
  {
    title: "React TypeScript Starter Template",
    category: "web",
    tech: "React + TypeScript + Tailwind CSS",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1200&auto=format&fit=crop",
    liveUrl: "https://react-ts-tailwind-starter-template.netlify.app/",
  },

  {
    title: "Modern E-Commerce Application",
    category: "app",
    tech: "React + Firebase + Tailwind CSS",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop",
    liveUrl: "https://e-commerce-app-f5e073.netlify.app/",
  },

  {
    title: "ERP Management System",
    category: "app",
    tech: "Next.js + NestJS + SQL Server",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    liveUrl: "#",
  },

  {
    title: "Dynamic Form Builder",
    category: "app",
    tech: "React + Material UI + Generic CRUD",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop",
    liveUrl: "#",
  },
];

export const timeline: TimelineEntry[] = [
  {
    period: "2024 — Present",
    title: "Full Stack Developer — Fiverr",
    description:
      "Building modern web applications, ERP systems, admin panels, and scalable business solutions using React, Next.js, NestJS, and SQL Server.",
  },
  {
    period: "2023 — Present",
    title: "Independent ERP System Development",
    description:
      "Developing a large-scale ERP platform with dynamic forms, reusable CRUD architecture, RBAC, and enterprise business modules.",
  },
  {
    period: "2022 — 2023",
    title: "Frontend & Backend Development Practice",
    description:
      "Focused on mastering React, Next.js, Node.js, SQL Server, REST APIs, authentication systems, and responsive UI development.",
  },
];

export const testimonials = [
  {
    text: "Great developer, delivered on time with clean code.",
    name: "Client 1",
    role: "CEO, Company",
    avatar: "https://picsum.photos/seed/client1/40/40.jpg",
  },
  {
    text: "Very professional and skilled in React and Node.js.",
    name: "Client 2",
    role: "Founder, Startup",
    avatar: "https://picsum.photos/seed/client2/40/40.jpg",
  },
];

export const highlights = [
  {
    title: "Enterprise ERP Architecture",
    description:
      "Building scalable ERP systems with reusable modules, RBAC, and dynamic business workflows.",
  },
  {
    title: "Dynamic Form Engine",
    description:
      "Database-driven dynamic forms with reusable validations, layouts, and dropdown management.",
  },
  {
    title: "Generic CRUD System",
    description:
      "Reusable frontend and backend CRUD architecture for rapid enterprise module development.",
  },
  {
    title: "Modern Full Stack Development",
    description:
      "Developing high-performance applications using React, Next.js, NestJS, and SQL Server.",
  },
];

export const tips: Tip[] = [
  {
    number: 1,
    title: "Choose a Professional Profile Photo",
    description:
      "Use a high-quality headshot with good lighting. Smile, dress professionally, and use a clean background. NO selfies, logos, or illustrations.",
    proTip:
      "Hire a photographer or use a phone with portrait mode against a plain wall.",
  },
  {
    number: 2,
    title: "Write a Killer Profile Description",
    description:
      "Start with WHO you help, WHAT you do, and RESULTS you deliver. Use keywords buyers search for. Keep it under 600 characters.",
    proTip:
      'Formula: "I help [target audience] achieve [result] through [service]."',
  },
  {
    number: 3,
    title: "Create 3-7 Focused Gigs",
    description:
      "Don't offer everything. Specialize in 3-7 specific services. Each gig should target one specific buyer need with clear deliverables.",
    proTip:
      'Bad: "I will do web development" → Good: "I will build a React landing page in 3 days"',
  },
  {
    number: 4,
    title: "Design Eye-Catching Gig Images",
    description:
      "Use 1280×769px images. Include bold text, your photo, and show the end result. Use consistent branding across all gig images.",
    proTip:
      'Use Canva or Figma. Add "Featured on Fiverr" badge-style elements for social proof.',
  },
  {
    number: 5,
    title: "Add a Portfolio Video",
    description:
      "Gigs with video get 200% more engagement. Record a 60-second intro: who you are, what you offer, and why they should choose you.",
    proTip:
      "Use good lighting, look at the camera, and show your screen briefly with past work.",
  },
  {
    number: 6,
    title: "Price Strategically",
    description:
      "Start competitive but not cheap. Use 3 pricing tiers. The middle package should be your most profitable. Show clear value differences.",
    proTip:
      "Basic ($50-100) → Standard ($150-300, highlighted) → Premium ($500+)",
  },
  {
    number: 7,
    title: "Get Your First 10 Reviews",
    description:
      "The hardest part is the start. Offer lower prices, deliver exceptional quality, and ask satisfied buyers for reviews. Never buy fake reviews.",
    proTip:
      "Tell friends with real businesses to order. Deliver 10x value on every order.",
  },
  {
    number: 8,
    title: "Respond Within 1 Hour",
    description:
      "Response time is a ranking factor. Use the Fiverr app for instant notifications. Set up quick responses for common questions.",
    proTip:
      'Even if you can\'t start immediately, reply quickly: "I can start this on [date]."',
  },
  {
    number: 9,
    title: "Build an External Portfolio",
    description:
      "Link a professional website (like this one!) from your Fiverr profile. It builds trust and lets you showcase work that doesn't fit in Fiverr's gallery.",
    proTip:
      'Add your portfolio URL in the "Portfolio" section of your Fiverr profile settings.',
  },
];

export const projectTypes = [
  "Website Design & Development",
  "React / Next.js Web App",
  "UI/UX Design in Figma",
  "E-Commerce Store",
  "SEO Optimization",
  "Bug Fixing & Debugging",
  "Other",
];

export const budgetRanges = [
  "$50 - $150",
  "$150 - $300",
  "$300 - $500",
  "$500 - $1,000",
  "$1,000+",
];
