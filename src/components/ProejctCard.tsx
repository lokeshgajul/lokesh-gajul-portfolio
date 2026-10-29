import React from "react";
import type { Project } from "../../types.ts";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <article className="minimal-card group flex h-full flex-col overflow-hidden">
      {project.image && (
        <div className="overflow-hidden border-b border-border/50">
          <img
            src={project.image}
            alt={`${project.title} project preview`}
            loading="lazy"
            className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}

      {/* Padded content area */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        {/* Top header: category and action links */}
        <div className="mb-4 flex items-center justify-between gap-4">
          <span className="text-xs font-medium uppercase tracking-wide text-accent">
            {project.categoryLabel}
          </span>

          <div className="-mr-2 flex items-center gap-1">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md p-2 text-muted transition-colors hover:bg-surfaceHover hover:text-text"
                aria-label={`View ${project.title} on GitHub`}
                title="View Code"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12c0-5.523-4.477-10-10-10z" />
                </svg>
              </a>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 rounded-md px-2 py-2 text-xs font-medium text-muted transition-colors hover:bg-surfaceHover hover:text-accent"
                aria-label={`Open live demo for ${project.title}`}
                title="Open Live App"
              >
                <span>Live</span>
                <span aria-hidden="true">↗</span>
              </a>
            )}
          </div>
        </div>

        {/* Title */}
        <h3 className="mb-2 text-xl font-bold leading-snug text-text transition-colors group-hover:text-accent">
          {project.title}
        </h3>

        {/* Description */}
        <p className="mb-5 text-sm leading-relaxed text-muted">
          {project.description}
        </p>

        {/* Result / impact */}
        {project.impact && (
          <p className="mb-6 rounded-lg border border-border/50 bg-surfaceHover/50 px-3.5 py-3 text-xs leading-relaxed text-textSecondary">
            <span className="font-semibold text-text">Result:</span>{" "}
            {project.impact}
          </p>
        )}

        {/* Tech tags (mt-auto pins them to the bottom of the card) */}
        <div className="mt-auto flex flex-wrap gap-2 border-t border-border pt-5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-md bg-surfaceHover px-2.5 py-1 text-xs font-medium text-muted"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
