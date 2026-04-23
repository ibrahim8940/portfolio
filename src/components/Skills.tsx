import { useEffect, useRef, useState } from "react";
import { skills, techIcons } from "../data";

function SkillBar({ name, percentage }: { name: string; percentage: number }) {
  const barRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = barRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="skill-bar-container" ref={barRef}>
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-sm text-red-500">{percentage}%</span>
      </div>
      <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
        <div
          className="skill-bar h-full bg-gradient-to-r from-red-600 to-orange-500 rounded-full"
          style={{ width: visible ? `${percentage}%` : "0%" }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section className="py-24 bg-[#020617]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-sm font-semibold text-red-500 uppercase tracking-wide mb-3">
            My Skills
          </div>
          <h2 className="text-3xl lg:text-5xl font-semibold tracking-tight">
            Technologies I <span className="gradient-text">Master</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Skill Bars */}
          <div className="space-y-6">
            {skills.map((skill) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                percentage={skill.percentage}
              />
            ))}
          </div>

          {/* Tech Grid */}
          <div className="grid grid-cols-3 gap-4">
            {techIcons.map((tech) => (
              <div
                key={tech.name}
                className="bg-slate-900 border border-white/5 rounded-2xl p-6 text-center hover:border-red-500/30 transition-colors group"
              >
                <div className="text-3xl mb-2">{tech.emoji}</div>
                <div className="text-sm font-medium text-slate-400 group-hover:text-white transition-colors">
                  {tech.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
