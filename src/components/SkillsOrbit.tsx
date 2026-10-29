import React from "react";

const SKILLS_CORE = [
  { name: "React", icon: "⚛️", color: "text-blue-400" },
  { name: "Node.js", icon: "🟢", color: "text-green-400" },
  { name: "TypeScript", icon: "🟦", color: "text-blue-500" },
  { name: "MongoDB", icon: "🍃", color: "text-green-500" },
];

const SKILLS_EXTENDED = [
  { name: "Docker", icon: "🐋" },
  { name: "Tailwind", icon: "🌊" },
  { name: "Python", icon: "🐍" },
  { name: "Git", icon: "🔀" },
  { name: "AWS", icon: "☁️" },
  { name: "Next.js", icon: "▲" },
];

const SkillsOrbit: React.FC = () => {
  return (
    <div className="relative h-[500px] flex items-center justify-center overflow-hidden">
      {/* Central Core */}
      <div className="relative z-20 w-32 h-32 rounded-full glass flex flex-col items-center justify-center border-white/20 shadow-[0_0_50px_rgba(59,130,246,0.2)]">
        <span className="text-xs font-bold uppercase tracking-widest text-blue-400">
          Builder
        </span>
        <span className="text-sm font-medium">Lokesh</span>
      </div>

      {/* Orbit Rings */}
      <div className="absolute w-[200px] h-[200px] rounded-full border border-white/5 animate-pulse" />
      <div className="absolute w-[350px] h-[350px] rounded-full border border-white/5" />

      {/* Inner Orbit Items */}
      {SKILLS_CORE.map((skill, i) => (
        <div
          key={skill.name}
          className="orbit-item group"
          style={{ animationDelay: `${i * -5}s` }}
        >
          <div className="glass p-3 rounded-2xl border-white/10 flex flex-col items-center gap-1 group-hover:scale-110 transition-transform">
            <span className="text-lg">{skill.icon}</span>
            <span className={`text-[10px] font-bold uppercase ${skill.color}`}>
              {skill.name}
            </span>
          </div>
        </div>
      ))}

      {/* Outer Orbit Items */}
      {SKILLS_EXTENDED.map((skill, i) => (
        <div
          key={skill.name}
          className="orbit-item-outer group"
          style={{ animationDelay: `${i * -5}s` }}
        >
          <div className="glass p-2 rounded-xl border-white/5 flex items-center gap-2 group-hover:border-white/20 transition-all">
            <span className="text-sm">{skill.icon}</span>
            <span className="text-[10px] font-medium text-white/50">
              {skill.name}
            </span>
          </div>
        </div>
      ))}

      {/* Background Glow */}
      <div className="absolute inset-0 bg-radial-gradient from-blue-500/5 via-transparent to-transparent pointer-events-none" />
    </div>
  );
};

export default SkillsOrbit;
