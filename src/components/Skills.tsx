import React from "react";
import SectionHeader from "./SectionHeader";
import ScrollReveal from "./ScrollReveal";
import { SKILL_GROUPS } from "../data/profileData";

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          badge="Skills"
          title="Technologies"
          titleHighlight="& Tooling"
          description="Technologies and libraries I work with regularly across full-stack and mobile systems."
        />

        <div className="divide-y divide-border">
          {SKILL_GROUPS.map((group, index) => (
            <ScrollReveal
              key={group.category}
              delay={index * 60}
              className="group py-7 first:pt-0 last:pb-0 grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-6 items-baseline"
            >
              <div className="md:col-span-4">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-muted">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="h-px w-4 bg-accent transition-all duration-300 group-hover:w-10" />
                </div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-text mt-2">
                  {group.category}
                </h3>
                <p className="text-xs text-muted mt-0.5">
                  {group.items.length} technologies
                </p>
              </div>

              <div className="md:col-span-8 flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="skill-chip px-3 py-1 rounded-md text-sm font-medium bg-surfaceHover/70 text-textSecondary border border-border/60 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
