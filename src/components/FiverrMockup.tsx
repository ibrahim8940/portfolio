export default function FiverrMockup() {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-0 -mt-8">
      <div className="bg-[#0f172a] border border-white/10 rounded-2xl overflow-hidden">
        {/* Green Banner */}
        <div className="bg-gradient-to-r from-green-600 to-green-500 h-32 relative">
          <div className="absolute bottom-0 left-8 translate-y-1/2">
            <img
              src="https://picsum.photos/seed/devprofile2024/120/120.jpg"
              alt="Profile"
              className="w-24 h-24 rounded-full border-4 border-[#0f172a] object-cover"
            />
          </div>
        </div>

        {/* Profile Info */}
        <div className="pt-16 px-8 pb-8">
          <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-xl font-semibold">Ibraheem Khan</h3>
                <span className="bg-green-600/20 text-green-400 text-xs font-semibold px-2 py-0.5 rounded">
                  TOP RATED
                </span>
              </div>
              <p className="text-slate-400 text-sm">
                Full-Stack Developer & UI/UX Designer | React, Next.js, Node.js
              </p>
            </div>
            <div className="flex gap-6 text-center">
              <div>
                <div className="text-lg font-bold">5.0</div>
                <div className="text-xs text-slate-500">Rating</div>
              </div>
              <div>
                <div className="text-lg font-bold">213</div>
                <div className="text-xs text-slate-500">Reviews</div>
              </div>
              <div>
                <div className="text-lg font-bold">1hr</div>
                <div className="text-xs text-slate-500">Response</div>
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="bg-[#020617] rounded-xl p-5 mb-4">
            <p className="text-slate-300 text-sm leading-relaxed whitespace-pre-line">
              {`🔥 I help businesses build stunning, high-performance websites and web applications that drive real results.

✅ 200+ projects completed | ✅ 5.0 rating | ✅ 100% on-time delivery

💻 Expert in: React, Next.js, Node.js, TypeScript, Tailwind CSS, Figma
🚀 Specialties: SaaS dashboards, e-commerce, landing pages, UI/UX design

📩 Message me — I respond within 1 hour!`}
            </p>
          </div>

          {/* Meta */}
          <div className="text-xs text-slate-500 flex flex-wrap items-center gap-4">
            <span>From: United States</span>
            <span>•</span>
            <span>Member since: Jan 2019</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <div className="w-2 h-2 bg-green-500 rounded-full" /> Online now
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
