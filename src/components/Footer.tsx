import React from "react";
import { PROFILE_DATA } from "../data/profileData";

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-border py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted">
        <div>
          © {new Date().getFullYear()} {PROFILE_DATA.name}. Built with React,
          TypeScript & Tailwind CSS.
        </div>

        <div className="flex items-center gap-4">
          <a
            href={PROFILE_DATA.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-text transition-colors"
          >
            GitHub
          </a>
          <a
            href={PROFILE_DATA.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-text transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${PROFILE_DATA.email}`}
            className="hover:text-text transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
