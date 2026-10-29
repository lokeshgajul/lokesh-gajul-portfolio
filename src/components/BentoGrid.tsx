import React from "react";
import profile from "./assets/profile.png";

const BentoGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-none md:grid-rows-2 gap-4 h-auto md:h-[600px]">
      {/* About Me - Large */}
      <div className="md:col-span-2 md:row-span-2 glass rounded-[2.5rem] p-10 flex flex-col justify-end bento-card relative overflow-hidden group">
        {/* Background Image */}
        <img
          src={profile}
          alt="Profile"
          className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-opacity duration-500"
        />

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

        {/* Icon */}
        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity z-10">
          {/* <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
    </svg> */}
        </div>

        {/* Content */}
        <div className="relative z-10">
          <h3 className="text-white/40 uppercase tracking-[0.2em] text-xs font-bold mb-4">
            Core Identity
          </h3>
          <p className="text-2xl md:text-3xl font-medium leading-snug text-white">
            I'm Lokesh Santosh Gajul. An IT student at RGIT Mumbai, obsessed
            with <span className="text-blue-400">clean code</span> and{" "}
            <span className="text-purple-400">meaningful web experiences</span>.
          </p>
        </div>
      </div>

      {/* Location */}
      <div className="glass rounded-[2rem] p-8 flex flex-col justify-center items-center bento-card border-white/5">
        <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center mb-4">
          <svg
            className="w-6 h-6 text-red-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </div>
        <h4 className="font-bold text-lg">Mumbai, IN</h4>
        <p className="text-white/40 text-sm">Working Globally</p>
      </div>

      {/* Interests */}
      <div className="glass rounded-[2rem] p-8 bento-card border-white/5">
        <h3 className="text-white/40 uppercase tracking-[0.2em] text-xs font-bold mb-6">
          Passions
        </h3>
        <div className="space-y-3">
          {["AI & ML", "Open Source", "UI/UX Design", "Social Impact"].map(
            (item) => (
              <div key={item} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                <span className="text-sm font-medium">{item}</span>
              </div>
            ),
          )}
        </div>
      </div>

      {/* Availability Status */}
      <div className="md:col-span-2 glass rounded-[2rem] p-8 flex items-center justify-between bento-card border-white/5">
        <div>
          <h4 className="text-xl font-bold">Currently Building</h4>
          <p className="text-white/50 text-sm">
            Advanced full-stack solutions with React ecosystem.
          </p>
        </div>
        <div className="px-4 py-2 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-bold uppercase">
          Open to Work
        </div>
      </div>
    </div>
  );
};

export default BentoGrid;
