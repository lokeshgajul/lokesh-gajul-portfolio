import React, { useState, useMemo } from "react";
import SectionHeader from "./SectionHeader";
import ProjectCard from "./ProejctCard";
import ScrollReveal from "./ScrollReveal";
import { SegmentedTabs } from "./SegmentTabs.tsx";
import { trackGlow } from "../utils/glow";
import type { Project, ProjectCategory } from "../../types.ts";

interface ProjectsProps {
  projects: Project[];
}

const categories: { id: ProjectCategory; label: string }[] = [
  { id: "all", label: "All" },
  { id: "fullstack", label: "Full-Stack" },
];

export const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");

  const filteredProjects = useMemo(
    () =>
      activeCategory === "all"
        ? projects
        : projects.filter((p) => p.category === activeCategory),
    [activeCategory, projects],
  );

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          badge="Projects"
          title="Selected"
          titleHighlight="Work"
          description="A selection of web apps, mobile products, and backend systems I've built."
        />

        <ScrollReveal className="mb-8">
          <SegmentedTabs
            tabs={categories}
            active={activeCategory}
            onChange={setActiveCategory}
          />
        </ScrollReveal>

        {/* key remounts the grid so the entrance replays on every filter change */}
        <div
          key={activeCategory}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {filteredProjects.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 60}>
              <div
                onMouseMove={trackGlow}
                className="glow-card rounded-2xl h-full"
              >
                <ProjectCard project={project} />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
