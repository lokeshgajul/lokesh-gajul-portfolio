import React from "react";
import SectionHeader from "./SectionHeader";
import ScrollReveal from "./ScrollReveal";
import { CountUp } from "./CountUp";
import { PROFILE_DATA } from "../data/profileData";
import { trackGlow } from "../utils/glow";
import profileImg from "../assets/profile.png";

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          badge="About"
          title="Background &"
          titleHighlight="Philosophy"
        />

        <ScrollReveal>
          <div className="flex flex-col sm:flex-row gap-8 items-start">
            <div className="avatar-ring flex-shrink-0">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-[0.9rem] overflow-hidden bg-surface">
                <img
                  src={profileImg}
                  alt="Lokesh Gajul"
                  loading="lazy"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            <div className="space-y-4 text-base text-textSecondary leading-relaxed flex-1">
              {PROFILE_DATA.shortBio.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}

              <div className="pt-3 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted">
                <span className="flex items-center gap-1.5">
                  <span className="text-accent">📍</span> Mumbai, Maharashtra
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="text-accent">🎓</span> B.E. IT, RGIT Mumbai
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="text-accent">💼</span> React, Node.js &amp;
                  React Native
                </span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {PROFILE_DATA.stats.map((s, i) => (
            <ScrollReveal key={s.label} delay={i * 80}>
              <div
                onMouseMove={trackGlow}
                className="glow-card minimal-card p-5 h-full"
              >
                <div className="text-3xl font-bold text-text tracking-tight">
                  <CountUp value={s.value} />
                </div>
                <div className="text-sm font-medium text-textSecondary mt-1">
                  {s.label}
                </div>
                <div className="text-xs text-muted mt-0.5">{s.sublabel}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
