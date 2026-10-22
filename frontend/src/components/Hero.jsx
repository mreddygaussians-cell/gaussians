import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, useInView, animate } from "framer-motion";
import { ArrowRight, CalendarClock } from "lucide-react";
import { EASE } from "@/components/Reveal";
import { METRICS, IMAGES } from "@/data/content";

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
    <span ref={ref} className="font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
      {prefix}
      {display}
      <span className="text-brand-500">{suffix}</span>
    </span>
  );
}

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yBg = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const yImg = useTransform(scrollYProgress, [0, 1], [0, -40]);

  return (
    <section ref={ref} className="relative overflow-hidden" data-testid="hero-section">
      <motion.div style={{ y: yBg }} className="pointer-events-none absolute inset-0">
        <motion.img
          src={IMAGES.arch1}
          alt=""
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 36, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={IMAGES.arch1}
          data-testid="hero-video"
        >
          <source src={IMAGES.heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-white/[0.88]" />
        <div className="grid-pattern absolute inset-0 opacity-50 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_40%,transparent_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent" />
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
                <span className="h-1.5 w-1.5 rounded-full bg-brand-500 animate-pulse-dot" />
                STATUS: OPERATIONAL · GAUSSIANS ASSURANCE
              </span>
              <span className="font-mono text-[11px] font-medium uppercase tracking-[0.25em] text-slate-600">
                Operationalizing Security, Compliance & Trust
              </span>
            </motion.div>

            <h1 className="mt-8 font-display text-4xl font-bold leading-[1.05] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              <KineticLine delay={0.5}>Operationalizing</KineticLine>
              <KineticLine delay={0.62}>
                <em className="font-serif font-medium italic text-brand-500">Security,</em> Compliance,
              </KineticLine>
              <KineticLine delay={0.74}>
                and{" "}
                <em className="font-serif font-medium italic underline decoration-brand-300 decoration-[3px] underline-offset-8">
                  Trust.
                </em>
              </KineticLine>
            </h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.15, ease: EASE }}
              className="mt-8 max-w-xl space-y-4 text-base leading-relaxed text-slate-500 sm:text-lg"
            >
              <p>
                Helping organizations transform security, compliance, and risk management from business challenges into
                strategic advantages through practical execution and long-term partnership.
              </p>
              <p>
                We do not only advise. We deliver. From audit readiness and risk management to managed services and
                specialist talent solutions, we help organizations turn complex requirements into structured, scalable,
                and business-aligned programs.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.3, ease: EASE }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <Link
                to="/services"
                data-testid="hero-cta-button"
                className="group inline-flex items-center gap-2.5 rounded-full bg-slate-900 px-7 py-3.5 font-display text-sm font-semibold text-white transition-[background-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:bg-brand-500 hover:shadow-[0_12px_32px_-6px_rgba(117,112,212,0.5)]"
              >
                Explore Our Services
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                to="/contact"
                data-testid="hero-secondary-cta"
                className="group inline-flex items-center gap-2.5 rounded-full border border-slate-300 bg-white/70 px-7 py-3.5 font-display text-sm font-semibold text-slate-700 backdrop-blur transition-[border-color,color] duration-300 hover:border-slate-900 hover:text-slate-900"
              >
                <CalendarClock className="h-4 w-4 text-brand-500" />
                Talk to an Expert
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.8, ease: EASE }}
            className="relative hidden lg:col-span-5 lg:block"
            data-testid="hero-node-graphic"
          >
            <div className="overflow-hidden rounded-3xl border border-slate-200/80 shadow-[0_30px_60px_-20px_rgba(15,23,42,0.18)]">
              <motion.img
                src={IMAGES.arch2}
                alt="Precision architecture — Gaussians engineering ethos"
                style={{ y: yImg }}
                className="aspect-[4/3] w-full scale-110 object-cover"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6, ease: EASE }}
              className="absolute -bottom-6 -left-8 flex items-center gap-3 rounded-2xl border border-slate-200/80 bg-white/90 px-5 py-4 shadow-[0_16px_40px_-12px_rgba(15,23,42,0.18)] backdrop-blur-md animate-float"
            >
              <span className="grid h-9 w-9 place-items-center rounded-full bg-brand-500/10">
                <span className="h-2 w-2 rounded-full bg-brand-500 animate-pulse-dot" />
              </span>
              <div>
                <p className="font-mono text-[10px] font-medium uppercase tracking-[0.22em] text-slate-600">GRC Engine</p>
                <p className="font-mono text-[11px] font-semibold tracking-wider text-slate-800">
                  CONTROLS: MAPPED · EVIDENCE: LIVE
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.5, ease: EASE }}
          className="mt-24 grid grid-cols-2 overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_10px_30px_-5px_rgba(15,23,42,0.06)] lg:grid-cols-4"
          data-testid="hero-metrics-bar"
        >
          {METRICS.map((m) => (
            <div key={m.label} className="border-slate-100 px-6 py-8 [&:not(:last-child)]:border-r max-lg:[&:nth-child(-n+2)]:border-b">
              <Counter prefix={m.prefix} value={m.value} suffix={m.suffix} />
              <p className="mt-2 font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-slate-600">{m.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
      <div className="h-24" />
    </section>
  );
}
