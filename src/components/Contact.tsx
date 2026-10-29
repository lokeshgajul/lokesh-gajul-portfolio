import React, { useState } from "react";
import SectionHeader from "./SectionHeader";
import ScrollReveal from "./ScrollReveal";
import { PROFILE_DATA } from "../data/profileData";

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState<boolean>(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sent, setSent] = useState<boolean>(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PROFILE_DATA.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    const subject = encodeURIComponent(
      `Portfolio Message from ${formState.name}`,
    );
    const body = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`,
    );
    window.location.href = `mailto:${PROFILE_DATA.email}?subject=${subject}&body=${body}`;

    setSent(true);
    setTimeout(() => {
      setSent(false);
      setFormState({ name: "", email: "", message: "" });
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          badge="Contact"
          title="Get In"
          titleHighlight="Touch"
          description="Have a question, an opportunity, or want to work together? Feel free to reach out."
        />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Direct Contact info */}
          <ScrollReveal className="md:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-muted block mb-2">
                Email
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={`mailto:${PROFILE_DATA.email}`}
                  className="text-base font-semibold text-text hover:text-accent transition-colors"
                >
                  {PROFILE_DATA.email}
                </a>
                <button
                  type="button"
                  onClick={copyEmail}
                  className="px-2 py-1 text-xs rounded border border-border bg-surfaceHover hover:bg-border text-muted transition-colors"
                >
                  {copied ? "Copied" : "Copy"}
                </button>
              </div>
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-muted block mb-2">
                Location
              </span>
              <p className="text-sm text-textSecondary">
                Mumbai, India • Available for remote and local roles.
              </p>
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-muted block mb-2">
                Social Profiles
              </span>
              <div className="flex items-center gap-4 text-sm font-medium">
                <a
                  href={PROFILE_DATA.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg border border-border bg-surface text-muted hover:text-text hover:border-accent hover:-translate-y-0.5 transition-all flex items-center gap-1"
                >
                  <span>GitHub</span>
                  <span aria-hidden="true">↗</span>
                </a>
                <a
                  href={PROFILE_DATA.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg border border-border bg-surface text-muted hover:text-text hover:border-accent hover:-translate-y-0.5 transition-all flex items-center gap-1"
                >
                  <span>LinkedIn</span>
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Simple Contact Form */}
          <ScrollReveal className="md:col-span-7">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-semibold text-muted mb-1"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="Your name"
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-lg bg-surface border border-border text-text placeholder-muted text-sm focus:border-accent focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-semibold text-muted mb-1"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="your@email.com"
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-lg bg-surface border border-border text-text placeholder-muted text-sm focus:border-accent focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-semibold text-muted mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  placeholder="Your message..."
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({ ...formState, message: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 rounded-lg bg-surface border border-border text-text placeholder-muted text-sm focus:border-accent focus:outline-none transition-colors resize-none"
                />
              </div>

              <div className="flex items-center justify-between gap-4 pt-1">
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-lg bg-text text-bg hover:opacity-90 font-medium text-sm transition-opacity"
                >
                  Send Message
                </button>

                {sent && (
                  <span className="text-xs font-medium text-emerald-500">
                    Email client launched!
                  </span>
                )}
              </div>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
