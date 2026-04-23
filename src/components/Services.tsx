import {
  Layout,
  Smartphone,
  PenTool,
  ShoppingBag,
  Search,
  Bug,
  type LucideIcon,
} from "lucide-react";
import { services } from "../data";
import { useScrollAnimation } from "../hooks/useCcrollAnimation";

const iconMap: Record<string, LucideIcon> = {
  layout: Layout,
  smartphone: Smartphone,
  "pen-tool": PenTool,
  "shopping-bag": ShoppingBag,
  search: Search,
  bug: Bug,
};

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const { ref, isVisible } = useScrollAnimation();
  const Icon = iconMap[service.icon] || Layout;

  return (
    <div
      ref={ref}
      className="service-card bg-[#020617] border border-white/5 rounded-2xl p-8 group transition-all duration-300"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(30px)",
        transitionDelay: `${index * 100}ms`,
        transition: "all 0.5s ease-out",
      }}
    >
      <div className="w-14 h-14 bg-red-600/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-600 transition-colors">
        <Icon className="w-6 h-6 text-red-500 group-hover:text-white transition-colors" />
      </div>
      <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed mb-6">
        {service.description}
      </p>
      <div className="flex items-center justify-between border-t border-white/5 pt-4">
        <span className="text-sm text-slate-500">Starting at</span>
        <span className="text-xl font-bold text-red-500">${service.price}</span>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#0f172a]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-sm font-semibold text-red-500 uppercase tracking-wide mb-3">
            What I Offer
          </div>
          <h2 className="text-3xl lg:text-5xl font-semibold tracking-tight mb-4">
            My <span className="gradient-text">Services</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Each service is crafted to deliver maximum value. These mirror my
            actual Fiverr gigs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
