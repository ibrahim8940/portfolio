import { useState, type FormEvent } from "react";
import { Send, Mail, MessageCircle } from "lucide-react";
import { projectTypes, budgetRanges } from "../data";

const LinkedInIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

export default function Contact({ onSubmit }: { onSubmit: () => void }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    projectType: "",
    budget: "",
    details: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit();
    setForm({ name: "", email: "", projectType: "", budget: "", details: "" });
  };

  const inputClass =
    "w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all text-sm";

  return (
    <section
      id="contact"
      className="py-24 bg-[#0f172a] clip-path-slant-reverse"
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-8 pt-12">
        <div className="text-center mb-12">
          <div className="text-sm font-semibold text-red-500 uppercase tracking-wide mb-3">
            Get In Touch
          </div>
          <h2 className="text-3xl lg:text-5xl font-semibold tracking-tight mb-4">
            Let's Build Something <span className="gradient-text">Amazing</span>
          </h2>
          <p className="text-slate-400 text-lg">
            Have a project in mind? Fill out the form or reach out directly.
          </p>
        </div>

        <div className="bg-[#020617] border border-white/5 rounded-2xl p-8 lg:p-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="John Doe"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={inputClass}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="john@example.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={inputClass}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Project Type
              </label>
              <select
                value={form.projectType}
                onChange={(e) =>
                  setForm({ ...form, projectType: e.target.value })
                }
                className={inputClass}
              >
                <option value="">Select a service...</option>
                {projectTypes.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Budget Range
              </label>
              <select
                value={form.budget}
                onChange={(e) => setForm({ ...form, budget: e.target.value })}
                className={inputClass}
              >
                <option value="">Select budget...</option>
                {budgetRanges.map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Project Details
              </label>
              <textarea
                rows={5}
                required
                placeholder="Tell me about your project, goals, and timeline..."
                value={form.details}
                onChange={(e) => setForm({ ...form, details: e.target.value })}
                className={`${inputClass} resize-none`}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-500 text-white py-4 rounded-lg text-lg font-medium transition-all shadow-lg shadow-red-600/20 flex items-center justify-center gap-2"
            >
              <Send className="w-5 h-5" /> Send Message
            </button>
          </form>

          {/* Contact Links */}
          <div className="grid md:grid-cols-3 gap-6 mt-8 pt-8 border-t border-white/5">
            {[
              { icon: Mail, label: "www.linkedin.com/in/ibrahim-khan-4b0847233" },
              { icon: MessageCircle, label: "Fiverr Inbox" },
              { icon: LinkedInIcon, label: "LinkedIn" },
            ].map(({ icon: Icon, label }) => (
              <a
                key={label}
                href="#"
                className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors"
              >
                <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center">
                  <Icon />
                </div>
                <span className="text-sm">{label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
