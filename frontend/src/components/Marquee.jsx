export default function Marquee({ items, testid = "framework-marquee" }) {
  const row = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-slate-800/80 bg-slate-950/50 py-5" data-testid={testid}>
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#090D16] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#090D16] to-transparent" />
      <div className="flex w-max animate-marquee gap-3 hover:[animation-play-state:paused]">
        {row.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-slate-800 bg-slate-900/60 px-5 py-2 font-mono text-xs tracking-wider text-slate-300"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brand-400/80" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
