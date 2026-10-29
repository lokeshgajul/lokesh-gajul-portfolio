import { useEffect, useRef, useState } from "react";

export const CountUp = ({ value }: { value: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const match = value.match(/^(\d+(?:\.\d+)?)(.*)$/);
  const target = match ? parseFloat(match[1]) : null;
  const [n, setN] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (target === null || !el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const tick = (t: number) => {
          const p = Math.min((t - start) / 1200, 1);
          setN(target * (1 - Math.pow(1 - p, 3))); // ease-out
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.5 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [target]);

  if (!match || target === null) return <span>{value}</span>;
  const decimals = match[1].includes(".") ? 1 : 0;
  return (
    <span ref={ref}>
      {n.toFixed(decimals)}
      {match[2]}
    </span>
  );
};
