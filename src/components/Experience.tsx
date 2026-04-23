import { Star } from "lucide-react";
import { timeline, testimonials } from "../data";
import { useScrollAnimation } from "../hooks/useCcrollAnimation";

function TimelineItem({
  entry,
  index,
}: {
  entry: (typeof timeline)[0];
  index: number;
}) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className="timeline-item relative"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transition: `all 0.6s ease-out ${index * 150}ms`,
      }}
    >
      <div className="text-xs text-red-500 font-semibold mb-1">
        {entry.period}
      </div>
      <h3 className="text-lg font-semibold">{entry.title}</h3>
      <p className="text-slate-400 text-sm mt-2">{entry.description}</p>
    </div>
  );
}

function ReviewCard({
  testimonial,
  index,
}: {
  testimonial: (typeof testimonials)[0];
  index: number;
}) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className="bg-[#020617] border border-white/5 rounded-2xl p-6"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transition: `all 0.6s ease-out ${index * 150}ms`,
      }}
    >
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
        ))}
      </div>
      <p className="text-slate-300 text-sm leading-relaxed mb-4">
        &ldquo;{testimonial.text}&rdquo;
      </p>
      <div className="flex items-center gap-3">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <div className="text-sm font-semibold">{testimonial.name}</div>
          <div className="text-xs text-slate-500">{testimonial.role}</div>
        </div>
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-[#0f172a]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Timeline */}
          <div>
            <div className="text-sm font-semibold text-red-500 uppercase tracking-wide mb-3">
              Experience
            </div>
            <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight mb-10">
              Work <span className="gradient-text">History</span>
            </h2>
            <div className="relative border-l-2 border-white/10 pl-8 space-y-10">
              {timeline.map((entry, i) => (
                <TimelineItem key={entry.period} entry={entry} index={i} />
              ))}
            </div>
          </div>

          {/* Testimonials */}
          <div>
            <div className="text-sm font-semibold text-red-500 uppercase tracking-wide mb-3">
              Testimonials
            </div>
            <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight mb-10">
              Client <span className="gradient-text">Reviews</span>
            </h2>
            <div className="space-y-6">
              {testimonials.map((t, i) => (
                <ReviewCard key={t.name} testimonial={t} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
