import type {
  NavLink,
  Skill,
  TechIcon,
  Service,
  Project,
  TimelineEntry,
  Testimonial,
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
    {name: "HTML5 / CSS3", percentage: 98},
  { name: "React / Next.js", percentage: 95 },
  { name: "Node.js / Express", percentage: 90 },
  { name: "TypeScript", percentage: 88 },
  { name: "Tailwind CSS / SCSS", percentage: 96 },
  { name: "JavaScript", percentage: 92 },
  { name: "jQuery", percentage: 85 },
  { name: "ASP.NET Core MVC", percentage: 80 },
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
  { emoji: "🖥️", name: "ASP.NET Core MVC" }
];

export const services: Service[] = [
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
    title: "SaaS Landing Page",
    category: "web",
    tech: "React + Tailwind CSS",
    image: "https://picsum.photos/seed/project-saas/600/400.jpg",
  },
  {
    title: "E-Commerce Platform",
    category: "app",
    tech: "Next.js + Stripe + MongoDB",
    image: "https://picsum.photos/seed/project-ecom/600/400.jpg",
  },
  {
    title: "Banking App Design",
    category: "design",
    tech: "Figma + Prototype",
    image: "https://picsum.photos/seed/project-ui/600/400.jpg",
  },
  {
    title: "Restaurant Website",
    category: "web",
    tech: "HTML + CSS + JavaScript",
    image: "https://picsum.photos/seed/project-restaurant/600/400.jpg",
  },
  {
    title: "CRM Dashboard",
    category: "app",
    tech: "React + Node.js + PostgreSQL",
    image: "https://picsum.photos/seed/project-crm/600/400.jpg",
  },
  {
    title: "Creative Portfolio",
    category: "design",
    tech: "Figma + Webflow",
    image: "https://picsum.photos/seed/project-portfolio/600/400.jpg",
  },
];

export const timeline: TimelineEntry[] = [
  {
    period: "2022 — Present",
    title: "Top Rated Seller — Fiverr",
    description:
      "Delivered 150+ projects in web development and UI/UX design. Maintained 5.0 rating with 100% on-time delivery.",
  },
  {
    period: "2021 — 2022",
    title: "Senior Developer — TechCorp",
    description:
      "Led a team of 5 developers building enterprise SaaS products. Improved app performance by 40%.",
  },
  {
    period: "2020 — 2021",
    title: "Freelance Developer — Upwork",
    description:
      "Built 50+ websites for small businesses and startups. Earned Top Rated Plus badge.",
  },
  {
    period: "2019 — 2020",
    title: "Junior Developer — StartupX",
    description:
      "Built front-end interfaces and REST APIs. Collaborated with design team on user experience.",
  },
];

export const testimonials: Testimonial[] = [
  {
    text: "Alex delivered an incredible website that exceeded our expectations. Communication was perfect, and he went above and beyond with extra features. Will definitely hire again!",
    name: "Sarah Johnson",
    role: "CEO, Bloom Studio",
    avatar: "https://picsum.photos/seed/client1/40/40.jpg",
  },
  {
    text: "Best Fiverr seller I've worked with. The React dashboard was clean, fast, and exactly what we needed. Delivered 2 days early with full documentation.",
    name: "Mike Chen",
    role: "CTO, DataFlow Inc",
    avatar: "https://picsum.photos/seed/client2/40/40.jpg",
  },
  {
    text: "The Figma designs were stunning. Alex understood our brand perfectly and created a design system we still use today. Highly recommend for any design work!",
    name: "Emily Rodriguez",
    role: "Founder, Bright Brand",
    avatar: "https://picsum.photos/seed/client3/40/40.jpg",
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
