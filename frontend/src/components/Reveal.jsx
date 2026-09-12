import { motion } from "framer-motion";

export const EASE = [0.22, 1, 0.36, 1];

export function Reveal({ children, className = "", delay = 0, y = 28 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, delay, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Chapter({ index, label, className = "" }) {
  return (
    <Reveal className={`flex items-center gap-4 ${className}`} y={14}>
      <span className="font-mono text-xs tracking-[0.3em] text-brand-400">{index}</span>
      <span className="h-px w-12 bg-gradient-to-r from-brand-500/70 to-transparent" />
      <span className="font-mono text-xs uppercase tracking-[0.3em] text-slate-400">{label}</span>
    </Reveal>
  );
}

export function PageHeader({ chapter, title, accent, sub }) {
  return (
    <header className="relative overflow-hidden px-6 pb-16 pt-36 sm:pt-44 lg:px-12">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 0%, rgba(117,112,212,0.14) 0%, rgba(6,182,212,0.06) 35%, rgba(9,13,22,0) 70%)",
        }}
      />
      <div className="grid-pattern pointer-events-none absolute inset-0 opacity-20 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_60%,transparent_100%)]" />
      <div className="relative mx-auto max-w-7xl">
        <Chapter index={chapter.no} label={chapter.label} />
        <h1 className="mt-8 max-w-4xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
          {title} <em className="font-serif font-medium italic text-brand-400">{accent}</em>
        </h1>
        {sub && <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-400">{sub}</p>}
      </div>
    </header>
  );
}
