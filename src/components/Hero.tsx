import { Send, Eye, Code2, CheckCircle, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative clip-path-slant bg-[#020617] pt-32 pb-48 overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-20 left-10 w-[500px] h-[500px] border border-red-500/10 rounded-full animate-spin-slow" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] border border-orange-500/10 rounded-full animate-spin-slow-reverse" />
      <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-red-600/20 rounded-full blur-3xl mix-blend-screen" />
      <div className="absolute bottom-1/4 right-1/4 w-56 h-56 bg-blue-600/20 rounded-full blur-3xl mix-blend-screen" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 bg-red-600/10 border border-red-600/20 rounded-full px-4 py-2 mb-6 animate-fade-in-up">
              <div className="status-dot w-2.5 h-2.5 bg-green-500 rounded-full relative" />
              <span className="text-red-400 text-sm font-medium">
                Available for Freelance Work
              </span>
            </div>

            <h1 className="text-4xl lg:text-7xl font-semibold leading-[1.1] tracking-tight mb-6 animate-fade-in-up delay-100">
              Hi, I'm <span className="gradient-text">Ibraheem Khan</span>
            </h1>

            <p className="text-xl lg:text-2xl text-slate-400 font-light leading-relaxed mb-4 animate-fade-in-up delay-200">
              Full-Stack Developer & UI/UX Designer
            </p>

            <p className="text-lg text-slate-500 leading-relaxed mb-8 max-w-lg animate-fade-in-up delay-300">
              I help businesses build stunning websites, scalable web apps, and
              memorable brand identities. 2+ years of experience with 100+ happy
              clients worldwide.
            </p>

            <div className="flex flex-wrap gap-4 mb-10 animate-fade-in-up delay-400">
              <a
                href="#contact"
                className="bg-red-600 hover:bg-red-500 text-white px-8 py-4 rounded-full text-lg font-medium transition-all shadow-lg shadow-red-600/20 flex items-center gap-2"
              >
                <Send className="w-5 h-5" /> Let's Talk
              </a>
              <a
                href="#portfolio"
                className="border border-white/10 hover:border-white/30 text-white px-8 py-4 rounded-full text-lg font-medium transition-all flex items-center gap-2"
              >
                <Eye className="w-5 h-5" /> View Work
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-8 animate-fade-in-up delay-500">
              <div>
                <div className="text-3xl font-bold text-white">100+</div>
                <div className="text-sm text-slate-500">Projects Done</div>
              </div>
              <div className="w-px bg-white/10" />
              <div>
                <div className="text-3xl font-bold text-white">5.0</div>
                <div className="text-sm text-slate-500 flex items-center gap-1">
                  <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                  Fiverr Rating
                </div>
              </div>
              <div className="w-px bg-white/10" />
              <div>
                <div className="text-3xl font-bold text-white">2+</div>
                <div className="text-sm text-slate-500">Years Exp.</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative animate-slide-in-right delay-300">
            <img
              src="https://picsum.photos/seed/devprofile2024/600/700.jpg"
              alt="Ibraheem Khan"
              className="w-full h-[500px] lg:h-[600px] object-cover rounded-2xl shadow-2xl shadow-black/50 relative z-10"
            />
            {/* Floating Badge: Top Rated */}
            <div className="absolute -left-6 top-1/4 bg-[#0f172a] border border-white/10 rounded-2xl p-4 shadow-2xl animate-float z-20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-red-600/20 rounded-lg flex items-center justify-center">
                  <Code2 className="w-5 h-5 text-red-500" />
                </div>
                <div>
                  <div className="text-sm font-semibold">New Seller</div>
                  <div className="text-xs text-slate-500">Fiverr Seller</div>
                </div>
              </div>
            </div>
            {/* Floating Badge: 100% Delivery */}
            <div
              className="absolute -right-4 bottom-1/3 bg-[#0f172a] border border-white/10 rounded-2xl p-4 shadow-2xl animate-float z-20"
              style={{ animationDelay: "1s" }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-600/20 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                </div>
                <div>
                  <div className="text-sm font-semibold">100% Delivery</div>
                  <div className="text-xs text-slate-500">On Time Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
