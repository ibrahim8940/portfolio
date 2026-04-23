import { Lightbulb } from "lucide-react";
import { tips } from "../data";
import { useScrollAnimation } from "../hooks/useCcrollAnimation";

function TipCard({ tip, index }: { tip: (typeof tips)[0]; index: number }) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className="tip-card bg-[#0f172a] border border-white/5 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(30px)",
        transition: `all 0.6s ease-out ${index * 80}ms`,
      }}
    >
      <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center text-white font-bold text-lg mb-6">
        {tip.number}
      </div>
      <h3 className="text-lg font-semibold mb-3">{tip.title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed mb-4">
        {tip.description}
      </p>
      <div className="bg-red-600/5 border border-red-600/10 rounded-lg p-3">
        <div className="flex items-start gap-2">
          <Lightbulb className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
          <span className="text-xs text-red-300">{tip.proTip}</span>
        </div>
      </div>
    </div>
  );
}

export default function FiverrTips() {
  return (
    <section id="tips" className="py-24 bg-[#020617] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/5 rounded-full blur-3xl" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="text-sm font-semibold text-red-500 uppercase tracking-wide mb-3">
            Free Guide
          </div>
          <h2 className="text-3xl lg:text-5xl font-semibold tracking-tight mb-4">
            How to Create a{" "}
            <span className="gradient-text">Professional Fiverr Profile</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            Follow these proven steps to build a Fiverr portfolio that converts
            visitors into buyers. These tips helped me reach Top Rated status.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tips.map((tip, i) => (
            <TipCard key={tip.number} tip={tip} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
