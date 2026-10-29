import React, { useEffect, useRef, useState } from "react";
import { PROFILE_DATA } from "../data/profileData";
import resumePdf from "../assets/Lokesh_resume.pdf";

// Keep this outside the component so the array identity is stable
const ROLES = [
  PROFILE_DATA.role,
  "Full Stack Developer",
  "React & TypeScript Enthusiast",
  "Problem Solver",
];

function useTypewriter(
  words: string[],
  typeMs = 70,
  deleteMs = 35,
  pauseMs = 1600,
) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index % words.length];
    let timer: ReturnType<typeof setTimeout> | undefined;

    if (!deleting && text === word) {
      timer = setTimeout(() => setDeleting(true), pauseMs);
    } else if (deleting && text === "") {
      setDeleting(false);
      setIndex((i) => i + 1);
    } else {
      timer = setTimeout(
        () => setText(word.slice(0, text.length + (deleting ? -1 : 1))),
        deleting ? deleteMs : typeMs,
      );
    }
    return () => clearTimeout(timer);
  }, [text, deleting, index, words, typeMs, deleteMs, pauseMs]);

  return text;
}

const delay = (s: number) => ({ "--d": `${s}s` }) as React.CSSProperties;

export const Hero: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const role = useTypewriter(ROLES);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const el = sectionRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <section
      id="hero"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative isolate overflow-hidden min-h-[85vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8"
    >
      {/* Animated background */}
      <div
        className="absolute inset-0 -z-10 pointer-events-none"
        aria-hidden="true"
      >
        <div className="hero-grid absolute inset-0" />
        <div className="hero-spotlight absolute inset-0" />
        <div
          className="hero-blob w-72 h-72 sm:w-96 sm:h-96 -top-10 -left-10"
          style={{
            background: "var(--accent)",
            animation: "float-a 14s ease-in-out infinite",
          }}
        />
        <div
          className="hero-blob w-64 h-64 sm:w-80 sm:h-80 bottom-0 right-0"
          style={{
            background: "#8b5cf6",
            animation: "float-b 18s ease-in-out infinite",
          }}
        />
      </div>

      <div className="max-w-3xl w-full mx-auto">
        {/* Status Badge */}
        <div
          className="fade-up inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-surfaceHover border border-border text-muted mb-6"
          style={delay(0)}
        >
          <span className="relative flex w-2 h-2">
            <span className="absolute inline-flex w-full h-full rounded-full bg-emerald-500 opacity-75 animate-ping" />
            <span className="relative inline-flex w-2 h-2 rounded-full bg-emerald-500" />
          </span>
          <span>{PROFILE_DATA.statusText}</span>
        </div>

        {/* Heading */}
        <h1
          className="fade-up gradient-text text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4"
          style={delay(0.1)}
        >
          Lokesh Gajul
        </h1>

        {/* Typewriter role */}
        <p
          className="fade-up text-lg sm:text-xl font-medium text-textSecondary mb-4 min-h-[1.75rem]"
          style={delay(0.2)}
        >
          {role}
          <span className="caret" aria-hidden="true" />
        </p>

        {/* Tagline */}
        <p
          className="fade-up text-base sm:text-lg text-muted max-w-2xl mb-8 leading-relaxed"
          style={delay(0.3)}
        >
          {PROFILE_DATA.tagline}
        </p>

        {/* Actions */}
        <div
          className="fade-up flex flex-wrap items-center gap-3"
          style={delay(0.4)}
        >
          <a
            href="#projects"
            className="px-5 py-2.5 rounded-lg bg-text text-bg hover:opacity-90 hover:-translate-y-0.5 font-medium text-sm transition-all"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-lg border border-border bg-surface hover:bg-surfaceHover hover:-translate-y-0.5 text-text font-medium text-sm transition-all"
          >
            Contact Me
          </a>
          <a
            href={resumePdf}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 text-sm font-medium text-muted hover:text-text transition-colors flex items-center gap-1.5"
          >
            <span>Resume</span>
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
