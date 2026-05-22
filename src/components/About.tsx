import { Check, ArrowRight } from "lucide-react";

const strengths = [
  "Clean Code",
  "Responsive Design",
  "Scalable Architecture",
  "Fast Delivery",
  "SEO Optimized",
  "Enterprise Solutions",
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#0f172a] relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <img
              src="https://picsum.photos/seed/workspace2024/600/500.jpg"
              alt="Workspace"
              className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
            />
            <div className="absolute -bottom-6 -right-6 bg-red-600 rounded-2xl p-6 text-center">
              <div className="text-4xl font-bold">2+</div>
              <div className="text-sm text-red-100">
                Years of
                <br />
                Experience
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="text-sm font-semibold text-red-500 uppercase tracking-wide mb-3">
              About Me
            </div>
            <h2 className="text-3xl lg:text-5xl font-semibold tracking-tight mb-6">
              Turning Ideas Into{" "}
              <span className="gradient-text">Digital Reality</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-6">
              I'm a passionate full-stack developer based in Pakistan,
              specializing in modern, scalable, and high-performance web
              applications. I focus on creating clean UI/UX experiences combined
              with secure and maintainable backend architectures.
            </p>

            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              My expertise includes React, Next.js, Node.js, NestJS, SQL Server,
              Material-UI, and Tailwind CSS. I also build dynamic ERP and
              business management systems using reusable CRUD architectures,
              database-driven forms, and scalable enterprise solutions.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {strengths.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <span className="text-slate-300 text-sm">{item}</span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-red-500 hover:text-red-400 font-medium transition-colors"
            >
              Let's Build Something Great <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
