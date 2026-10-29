interface Tab<T extends string> {
  id: T;
  label: string;
}
interface Props<T extends string> {
  tabs: Tab<T>[];
  active: T;
  onChange: (id: T) => void;
}

export function SegmentedTabs<T extends string>({
  tabs,
  active,
  onChange,
}: Props<T>) {
  const index = Math.max(
    0,
    tabs.findIndex((t) => t.id === active),
  );

  return (
    <div className="relative inline-grid grid-flow-col auto-cols-fr p-1 rounded-lg bg-surfaceHover border border-border">
      <span
        aria-hidden="true"
        className="absolute top-1 bottom-1 left-1 rounded-md bg-text transition-transform duration-300 ease-out"
        style={{
          width: `calc((100% - 0.5rem) / ${tabs.length})`,
          transform: `translateX(${index * 100}%)`,
        }}
      />
      {tabs.map((t) => (
        <button
          key={t.id}
          type="button"
          onClick={() => onChange(t.id)}
          className={`relative z-10 px-4 py-1.5 text-xs sm:text-sm font-medium transition-colors ${
            active === t.id ? "text-bg" : "text-muted hover:text-text"
          }`}
        >
          {t.label}
        </button>
      ))}
    </div>
  );
}
