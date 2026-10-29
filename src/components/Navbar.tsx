import React, { useState, useEffect } from "react";
import { NAV_LINKS, PROFILE_DATA } from "../data/profileData";

interface NavbarProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

const SECTION_IDS = [
  "hero",
  "about",
  "projects",
  "skills",
  "experience",
  "contact",
];

export const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  // Scroll tracking
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const scrollPosition = window.scrollY + 100;
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mobile menu: Escape to close, close on resize to desktop, lock body scroll
  useEffect(() => {
    if (!mobileMenuOpen) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth >= 640) setMobileMenuOpen(false);
    };

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    setMobileMenuOpen(false);

    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(targetId);
    }
  };

  const solidHeader = isScrolled || mobileMenuOpen;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        solidHeader ? "glass-nav py-3" : "bg-transparent py-4"
      } ${mobileMenuOpen ? "menu-open" : ""}`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, "#hero")}
          className="text-base font-bold tracking-tight text-text hover:text-accent transition-colors"
        >
          {PROFILE_DATA.name}
        </a>

        {/* Desktop Nav */}
        <nav className="hidden sm:flex items-center gap-6">
          {NAV_LINKS.map((link) => {
            const sectionId = link.href.replace("#", "");
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`group relative py-1 text-sm transition-colors ${
                  isActive
                    ? "text-text font-semibold"
                    : "text-muted hover:text-text"
                }`}
              >
                {link.name}
                <span
                  aria-hidden="true"
                  className={`absolute left-0 -bottom-0.5 h-0.5 rounded-full bg-accent transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </a>
            );
          })}
        </nav>

        {/* Theme Toggle & Mobile Menu */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            className="p-2 text-muted hover:text-text rounded-md hover:bg-surfaceHover transition-colors"
          >
            {theme === "dark" ? (
              // Sun
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="5" />
                <path
                  strokeLinecap="round"
                  d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
                />
              </svg>
            ) : (
              // Moon
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            )}
          </button>

          {/* Mobile hamburger: three bars morph into an X */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((o) => !o)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            className="sm:hidden relative w-9 h-9 flex items-center justify-center text-muted hover:text-text rounded-md hover:bg-surfaceHover transition-colors"
          >
            <span className="relative block w-5 h-4">
              <span
                className={`absolute left-0 w-full h-0.5 rounded-full bg-current transition-all duration-300 ease-out ${
                  mobileMenuOpen
                    ? "top-1/2 -translate-y-1/2 rotate-45"
                    : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-1/2 -translate-y-1/2 h-0.5 rounded-full bg-current transition-all duration-300 ease-out ${
                  mobileMenuOpen ? "w-0 opacity-0" : "w-3/4 opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 w-full h-0.5 rounded-full bg-current transition-all duration-300 ease-out ${
                  mobileMenuOpen
                    ? "top-1/2 -translate-y-1/2 -rotate-45"
                    : "bottom-0"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Backdrop (absolute, not fixed: the header's backdrop-filter would
          otherwise make a fixed child size to the header instead of the screen) */}
      <div
        data-open={mobileMenuOpen}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
        className="mobile-backdrop sm:hidden absolute top-full left-0 right-0 h-screen bg-black/30 backdrop-blur-sm"
      />

      {/* Mobile menu panel */}
      <div
        id="mobile-menu"
        data-open={mobileMenuOpen}
        aria-hidden={!mobileMenuOpen}
        className="mobile-menu sm:hidden absolute top-full left-0 right-0 mx-3 mt-2 rounded-2xl border border-border overflow-hidden"
      >
        <nav className="p-2">
          {NAV_LINKS.map((link, i) => {
            const sectionId = link.href.replace("#", "");
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                tabIndex={mobileMenuOpen ? 0 : -1}
                style={{ "--i": i } as React.CSSProperties}
                className={`mobile-link group flex items-center justify-between gap-3 px-4 py-3 rounded-xl text-sm font-medium hover:text-text hover:bg-surfaceHover ${
                  isActive ? "text-text bg-surfaceHover" : "text-textSecondary"
                }`}
              >
                <span className="flex items-center gap-3">
                  <span
                    className={`text-xs font-mono transition-colors group-hover:text-accent ${
                      isActive ? "text-accent" : "text-muted"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {link.name}
                </span>
                <span
                  aria-hidden="true"
                  className={`transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-accent ${
                    isActive
                      ? "opacity-100 translate-x-0 text-accent"
                      : "opacity-0 -translate-x-2 text-muted"
                  }`}
                >
                  →
                </span>
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
