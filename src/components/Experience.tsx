import React, { useState } from "react";
import SectionHeader from "./SectionHeader";
import ScrollReveal from "./ScrollReveal";
import { SegmentedTabs } from "./SegmentTabs";
import { EXPERIENCES_DATA, EDUCATION_DATA } from "../data/profileData";
import { trackGlow } from "../utils/glow";

type ExperienceTab = "work" | "education";

const TABS: { id: ExperienceTab; label: string }[] = [
  { id: "work", label: "Work Experience" },
  { id: "education", label: "Education" },
];

export const Experience: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ExperienceTab>("work");

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          badge="Experience"
          title="Work &"
          titleHighlight="Education"
          description="My engineering internships and academic milestones."
        />

        {/* Sliding tab switcher */}
        <ScrollReveal className="mb-8">
          <SegmentedTabs
            tabs={TABS}
            active={activeTab}
            onChange={setActiveTab}
          />
        </ScrollReveal>

        {/* Work Timeline */}
        {activeTab === "work" && (
          <div className="relative pl-8 space-y-6">
            <div
              className="timeline-line absolute left-[3px] top-2 bottom-2 w-px"
              aria-hidden="true"
            />

            {EXPERIENCES_DATA.map((exp, idx) => (
              <ScrollReveal key={exp.id} delay={idx * 60} className="relative">
                {/* Timeline node (pulses on the current role) */}
                <span className="absolute -left-8 top-6 flex w-2 h-2">
                  {exp.current && (
                    <span className="absolute inline-flex w-full h-full rounded-full bg-accent opacity-75 animate-ping" />
                  )}
                  <span className="relative inline-flex w-2 h-2 rounded-full bg-accent" />
                </span>

                <div
                  onMouseMove={trackGlow}
                  className="glow-card minimal-card p-5"
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
                    <h3 className="text-lg font-bold text-text">{exp.role}</h3>
                    <span className="text-xs font-medium text-muted">
                      {exp.period}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 text-sm font-medium text-accent mb-3">
                    <span>
                      {exp.company} •{" "}
                      <span className="text-muted">{exp.location}</span>
                    </span>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wide bg-accent-soft text-accent border border-border">
                      {exp.type}
                    </span>
                  </div>

                  <ul className="space-y-1.5 text-sm text-textSecondary leading-relaxed mb-4">
                    {exp.description.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-accent mt-1.5 text-xs">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {exp.tech && (
                    <div className="flex flex-wrap gap-1.5">
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className="skill-chip px-2 py-0.5 rounded text-xs font-medium bg-surfaceHover text-muted border border-border/60 cursor-default"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        )}

        {/* Education Timeline */}
        {activeTab === "education" && (
          <div className="relative pl-8 space-y-6">
            <div
              className="timeline-line absolute left-[3px] top-2 bottom-2 w-px"
              aria-hidden="true"
            />

            {EDUCATION_DATA.map((edu, idx) => (
              <ScrollReveal key={edu.id} delay={idx * 60} className="relative">
                <span className="absolute -left-8 top-6 flex w-2 h-2">
                  <span className="relative inline-flex w-2 h-2 rounded-full bg-accent" />
                </span>

                <div
                  onMouseMove={trackGlow}
                  className="glow-card minimal-card p-5"
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
                    <h3 className="text-base sm:text-lg font-bold text-text">
                      {edu.degree}
                    </h3>
                    <span className="text-xs font-medium text-muted">
                      {edu.period}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 text-sm text-textSecondary mb-2">
                    <span>{edu.school}</span>
                    {edu.score && (
                      <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-accent-soft text-accent border border-border">
                        {edu.score}
                      </span>
                    )}
                  </div>

                  {edu.highlights && (
                    <ul className="space-y-1 text-xs text-muted">
                      {edu.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-accent">•</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Experience;
