import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, useInView, animate } from "framer-motion";
import { ArrowRight, CalendarClock } from "lucide-react";
import { EASE } from "@/components/Reveal";
import { METRICS } from "@/data/content";

function KineticLine({ children, delay }) {
  return (
    <span className="block overflow-hidden pb-[0.08em]">
      <motion.span
        className="block"
        initial={{ y: "112%" }}
        animate={{ y: 0 }}
        transition={{ duration: 1.1, delay, ease: EASE }}
      >
        {children}
      </motion.span>
    </span>
  );
}

function Counter({ prefix, value, suffix }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 2,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref} className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
      {prefix}
      {display}
      <span className="text-brand-400">{suffix}</span>
    </span>
  );
}

const NODES = [
  { x: 60, y: 40, c: "#7570D4", d: 0 },
  { x: 220, y: 90, c: "#06B6D4", d: 0.4 },
  { x: 360, y: 40, c: "#7570D4", d: 0.9 },
  { x: 120, y: 200, c: "#06B6D4", d: 1.2 },
  { x: 300, y: 220, c: "#7570D4", d: 0.2 },
  { x: 420, y: 150, c: "#6366F1", d: 0.7 },
  { x: 180, y: 330, c: "#7570D4", d: 1.5 },
  { x: 380, y: 330, c: "#06B6D4", d: 1.0 },
];

const LINKS = [
  [0, 1], [1, 2], [1, 3], [1, 4], [2, 5], [4, 5], [3, 6], [4, 7], [6, 7], [4, 6],
];

function NodeNetwork() {
  return (
    <svg viewBox="0 0 480 380" className="h-full w-full" aria-hidden="true">
      {LINKS.map(([a, b], i) => (
        <motion.line
          key={i}
          x1={NODES[a].x} y1={NODES[a].y} x2={NODES[b].x} y2={NODES[b].y}
          stroke="url(#nodeGrad)"
          strokeWidth="0.8"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.5 }}
          transition={{ duration: 1.4, delay: 1.2 + i * 0.08, ease: EASE }}
        />
      ))}
      {NODES.map((n, i) => (
        <g key={i}>
          <motion.circle
            cx={n.x} cy={n.y} r="4"
            fill={n.c}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 + n.d, ease: EASE }}
            style={{ filter: `drop-shadow(0 0 8px ${n.c})` }}
          />
          <circle cx={n.x} cy={n.y} r="4" fill="none" stroke={n.c} strokeWidth="0.8" className="animate-node-ping" style={{ animationDelay: `${n.d}s`, transformOrigin: `${n.x}px ${n.y}px` }} />
        </g>
      ))}
      <defs>
        <linearGradient id="nodeGrad" x1="0" y1="0" x2="480" y2="380">
          <stop stopColor="#7570D4" stopOpacity="0.7" />
          <stop offset="1" stopColor="#06B6D4" stopOpacity="0.7" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yBg = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const fade = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section ref={ref} className="relative overflow-hidden" data-testid="hero-section">
      <motion.div style={{ y: yBg, opacity: fade }} className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 50% 0%, rgba(117,112,212,0.15) 0%, rgba(6,182,212,0.08) 35%, rgba(9,13,22,0) 75%)",
          }}
        />
        <div className="grid-pattern absolute inset-0 opacity-30 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </motion.div>

      <div className="relative mx-auto max-w-7xl px-6 pt-36 sm:pt-44 lg:px-12">
        <div className="grid items-center gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35, ease: EASE }}
              className="flex flex-wrap items-center gap-3"
            >
              <span className="status-pill" data-testid="hero-status-pill">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-400 animate-pulse-dot" />
                STATUS: OPERATIONAL · 100% AUDIT READINESS RATE
              </span>
              <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-slate-500">
                Modernizing Security, Risk & Compliance
              </span>
            </motion.div>

            <h1 className="mt-8 font-display text-4xl font-bold leading-[1.04] tracking-tight text-white sm:text-5xl lg:text-6xl">
              <KineticLine delay={0.5}>Security engineered</KineticLine>
              <KineticLine delay={0.62}>
                for <em className="font-serif font-medium italic text-brand-400">velocity.</em>
              </KineticLine>
              <KineticLine delay={0.74}>Compliance built</KineticLine>
              <KineticLine delay={0.86}>
                for <em className="font-serif font-medium italic text-cyan-400">scale.</em>
              </KineticLine>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.15, ease: EASE }}
              className="mt-8 max-w-xl text-base leading-relaxed text-slate-400"
            >
              We move beyond passive advisory. Gaussians embeds within your organization to design, build, and
              operationalize enterprise GRC, audit defense, and AI governance — transforming complex regulatory
              requirements into strategic growth drivers with zero friction.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.3, ease: EASE }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <Link
                to="/contact"
                data-testid="hero-cta-button"
                className="group inline-flex items-center gap-2.5 rounded-full bg-brand-500 px-7 py-3.5 font-display text-sm font-semibold text-[#15142E] transition-[background-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:bg-brand-400 hover:shadow-[0_12px_36px_rgba(117,112,212,0.4)]"
              >
                Launch Compliance Journey
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                to="/contact"
                data-testid="hero-secondary-cta"
                className="group inline-flex items-center gap-2.5 rounded-full border border-slate-700 px-7 py-3.5 font-display text-sm font-semibold text-slate-200 transition-[border-color,background-color] duration-300 hover:border-cyan-400/60 hover:bg-cyan-950/30"
              >
                <CalendarClock className="h-4 w-4 text-cyan-400" />
                Book 1:1 Executive Consultation
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.8, ease: EASE }}
            className="relative hidden lg:col-span-5 lg:block"
            data-testid="hero-node-graphic"
          >
            <div className="glass-card relative aspect-[480/380] overflow-hidden p-6">
              <div
                className="absolute inset-0 opacity-40"
                style={{ background: "radial-gradient(circle at 60% 30%, rgba(6,182,212,0.18), transparent 60%)" }}
              />
              <NodeNetwork />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl border border-slate-800/80 bg-[#0B101C]/80 px-4 py-3 backdrop-blur-md">
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-slate-500">GRC Engine</span>
                <span className="flex items-center gap-2 font-mono text-[10px] tracking-wider text-brand-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-400 animate-pulse-dot" />
                  CONTROLS: MAPPED · EVIDENCE: LIVE
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.5, ease: EASE }}
          className="glass-card mt-20 grid grid-cols-2 gap-px overflow-hidden lg:grid-cols-4"
          data-testid="hero-metrics-bar"
        >
          {METRICS.map((m) => (
            <div key={m.label} className="bg-slate-950/40 px-6 py-8">
              <Counter prefix={m.prefix} value={m.value} suffix={m.suffix} />
              <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.2em] text-slate-500">{m.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
      <div className="h-20" />
    </section>
  );
}
