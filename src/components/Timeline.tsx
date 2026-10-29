import React from "react";
import type { Experience, Education } from "../../types";

interface TimelineProps {
  title: string;
  items: (Experience | Education)[];
}

const Timeline: React.FC<TimelineProps> = ({ title, items }) => {
  return (
    <div className="glass rounded-[2rem] p-8 md:p-10 border-white/5">
      <h3 className="text-2xl font-bold mb-10 flex items-center gap-3">
        <span className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
          {title === "Experience" ? "💼" : "🎓"}
        </span>
        {title}
      </h3>

      <div className="space-y-12 relative">
        <div className="absolute left-4 top-0 bottom-0 w-[1px] bg-white/10" />

        {items.map((item, idx) => (
          <div key={idx} className="relative pl-12 group">
            <div className="absolute left-[13px] top-2 w-2 h-2 rounded-full bg-blue-500 group-hover:scale-150 transition-transform ring-4 ring-blue-500/20" />

            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-white/30">
                {"period" in item ? item.period : item.score}
              </span>
              <h4 className="text-xl font-bold">
                {"role" in item ? item.role : item.degree}
              </h4>
              <p className="text-blue-400 font-medium">
                {"company" in item ? item.company : item.school}
              </p>

              {"description" in item && (
                <ul className="mt-4 space-y-2">
                  {item.description.map((desc, i) => (
                    <li
                      key={i}
                      className="text-sm text-white/60 flex items-start gap-2"
                    >
                      <span className="text-blue-500 mt-1.5 w-1 h-1 rounded-full flex-shrink-0 bg-blue-500"></span>
                      {desc}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
