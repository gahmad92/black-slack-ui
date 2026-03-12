import React, { useEffect, useRef, useState } from "react";

const stats = [
  {
    value: 89,
    suffix: "%",
    label: "of users say Black helps them stay more connected",
  },
  {
    value: 43,
    suffix: "",
    label: "The average number of apps used by teams in Black",
  },
  {
    value: 86,
    suffix: "%",
    label: "of users say Black helps them collaborate more efficiently",
  },
];

function useCountUp(targetValue, isActive, durationMs = 1200) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isActive) return;
    let start = null;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / durationMs, 1);
      const nextValue = Math.round(progress * targetValue);
      setValue(nextValue);
      if (progress < 1) requestAnimationFrame(step);
    };
    const raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [targetValue, isActive, durationMs]);

  return value;
}

function StatCard({ value, suffix, label, trigger }) {
  const count = useCountUp(value, trigger);
  return (
    <div className="flex flex-col items-center gap-3 text-center text-white">
      <div className="flex items-end gap-1">
        <span className="text-5xl font-semibold md:text-6xl">{count}</span>
        {suffix && <span className="text-2xl font-semibold">{suffix}</span>}
      </div>
      <p className="max-w-xs text-sm text-white/85 md:text-base">{label}</p>
    </div>
  );
}

function StatsSection() {
  const ref = useRef(null);
  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTrigger(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="w-full bg-[#481A54] py-20">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-10 px-6 text-center">
        <h2 className="text-3xl font-semibold text-white md:text-4xl lg:text-5xl">
          We&apos;re in the business of growing businesses.
        </h2>
        <div className="grid w-full gap-10 md:grid-cols-3">
          {stats.map((item) => (
            <StatCard key={item.label} {...item} trigger={trigger} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default StatsSection;
