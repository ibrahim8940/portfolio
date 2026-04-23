import { useState } from "react";
import { projects } from "../data";

type FilterType = "all" | "web" | "app" | "design";

const filters: { label: string; value: FilterType }[] = [
  { label: "All", value: "all" },
  { label: "Websites", value: "web" },
  { label: "Web Apps", value: "app" },
  { label: "UI/UX", value: "design" },
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");

  const filtered = projects.filter(
    (p) => activeFilter === "all" || p.category === activeFilter,
  );

  return (
    <section id="portfolio" className="py-24 bg-[#020617]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="text-sm font-semibold text-red-500 uppercase tracking-wide mb-3">
            My Work
          </div>
          <h2 className="text-3xl lg:text-5xl font-semibold tracking-tight mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A selection of my best work from Fiverr and private clients.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActiveFilter(f.value)}
              className={`px-5 py-2 rounded-full text-sm font-medium border transition-all ${
                activeFilter === f.value
                  ? "bg-red-600 border-red-600 text-white"
                  : "border-white/10 text-slate-400 hover:text-white hover:border-white/20"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((project) => (
            <div
              key={project.title}
              className="portfolio-card relative overflow-hidden rounded-2xl cursor-pointer animate-scale-in"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-72 object-cover transition-transform duration-500"
              />
              <div className="card-content absolute bottom-0 left-0 right-0 p-6">
                <span className="text-xs font-semibold text-red-400 uppercase tracking-wide">
                  {project.category === "web"
                    ? "Website"
                    : project.category === "app"
                      ? "Web App"
                      : "UI/UX"}
                </span>
                <h3 className="text-lg font-semibold mt-1">{project.title}</h3>
                <p className="text-sm text-slate-400 mt-1">{project.tech}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
