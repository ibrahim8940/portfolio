import image from "../assets/ibraheem.jpeg";

export default function FiverrMockup() {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-0 -mt-8">
      <div className="bg-[#0f172a] border border-white/10 rounded-2xl overflow-hidden hover:scale-[1.01] transition-transform duration-300">
        {/* Banner */}
        <div className="bg-gradient-to-r from-green-600 to-green-500 h-32 relative">
          <div className="absolute bottom-0 left-8 translate-y-1/2">
            <img
              src={image}
              alt="Profile"
              className="w-24 h-24 rounded-full border-4 border-[#0f172a] object-cover"
            />
          </div>
        </div>

        {/* Profile Info */}
        <div className="pt-16 px-8 pb-8">
          <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
            {/* Left Info */}
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-xl font-semibold">Ibraheem Khan</h3>

                <span className="bg-green-600/20 text-green-400 text-xs font-semibold px-2 py-0.5 rounded">
                  New Seller
                </span>
              </div>

              <p className="text-slate-400 text-sm">
                Full-Stack Developer & UI/UX Designer | React, Next.js, Node.js
              </p>
            </div>

            {/* Stats */}
            <div className="flex gap-6 text-center flex-wrap justify-end">
              <div>
                <div className="text-lg font-bold">New</div>
                <div className="text-xs text-slate-500">On Fiverr</div>
              </div>

              <div>
                <div className="text-lg font-bold">0</div>
                <div className="text-xs text-slate-500">Reviews</div>
              </div>

              <div>
                <div className="text-lg font-bold">Fast</div>
                <div className="text-xs text-slate-500">Response</div>
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="bg-[#020617] rounded-xl p-5 mb-4">
            <p className="text-slate-300 text-sm leading-relaxed whitespace-pre-line">
              {`🔥 I help businesses build modern, high-performance websites and web applications that deliver real results.

💻 Specialized in: React, Next.js, Node.js, TypeScript, Tailwind CSS, Figma
🚀 Expertise: ERP systems, dashboards, e-commerce, landing pages, UI/UX design

📩 Open for new clients — I respond quickly and deliver clean, professional work.`}
            </p>
          </div>

          {/* Meta */}
          <div className="text-xs text-slate-500 flex flex-wrap items-center gap-4">
            <span>From: Pakistan</span>
            <span>•</span>
            <span>Member since: 2024</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              Available for work
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
