import React from "react";
import ScrollReveal from "./ScrollReveal";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  titleHighlight?: string;
  description?: string;
  centered?: boolean;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  titleHighlight,
  description,
  centered = false,
}) => {
  return (
    <ScrollReveal className={`mb-12 ${centered ? "text-center" : "text-left"}`}>
      {badge && (
        <span className="text-xs font-bold uppercase tracking-wider text-accent mb-2 block">
          {badge}
        </span>
      )}

      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-text">
        {title}{" "}
        {titleHighlight && (
          <span className="text-accent">{titleHighlight}</span>
        )}
      </h2>

      {description && (
        <p className="mt-2 text-sm sm:text-base text-muted max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
    </ScrollReveal>
  );
};

export default SectionHeader;
