export default function Marquee({ items, testid = "framework-marquee" }) {
  const row = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-slate-200/70 bg-slate-50/60 py-8" data-testid={testid}>
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent" />
      <div className="flex w-max animate-marquee gap-4 hover:[animation-play-state:paused]">
        {row.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="inline-flex items-center gap-2.5 whitespace-nowrap rounded-full border border-slate-200 bg-white px-6 py-3 font-mono text-xs tracking-wider text-slate-700 shadow-[0_1px_3px_rgba(15,23,42,0.05)] transition-colors duration-300 hover:border-brand-500/40"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
