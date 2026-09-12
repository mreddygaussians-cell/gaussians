import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";
import { Reveal, Chapter, EASE } from "@/components/Reveal";
import { IMPACT_METRICS, QUOTES } from "@/data/content";

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % QUOTES.length), 6500);
    return () => clearInterval(t);
  }, []);

  const quote = QUOTES[index];

  return (
    <section className="relative px-6 py-24 lg:px-12 lg:py-32" data-testid="testimonials-section">
      <div className="mx-auto max-w-7xl">
        <Chapter index="03" label="Client Impact" />
        <div className="mt-8 grid gap-6 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Multi-framework readiness in <em className="font-serif italic text-brand-400">90 days.</em>
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-slate-400">
              A global technology scale-up engaged Gaussians to deploy an embedded GRC managed unit — establishing IT
              workflows, automating evidence harvesting, validating cloud controls, and facilitating external auditor
              walkthroughs end to end.
            </p>
          </Reveal>
          <div className="grid grid-cols-2 gap-4 lg:col-span-7">
            {IMPACT_METRICS.map((m, i) => (
              <Reveal key={m.label} delay={i * 0.08}>
                <div
                  className="glass-card group h-full px-6 py-7 transition-[border-color,box-shadow] duration-300 hover:border-brand-500/40 hover:shadow-[0_0_28px_rgba(117,112,212,0.12)]"
                  data-testid={`impact-metric-${i}`}
                >
                  <p className="font-display text-3xl font-bold text-white sm:text-4xl">
                    {m.value}
                    <span className="text-brand-400">{m.suffix}</span>
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-slate-400">{m.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="mt-16">
          <div className="glass-card relative overflow-hidden px-8 py-12 sm:px-14" data-testid="testimonial-slider">
            <div
              className="pointer-events-none absolute inset-0"
              style={{ background: "radial-gradient(circle at 20% 0%, rgba(6,182,212,0.1), transparent 55%)" }}
            />
            <Quote className="relative h-8 w-8 text-brand-400/70" />
            <div className="relative mt-6 min-h-[150px] sm:min-h-[120px]">
              <AnimatePresence mode="wait">
                <motion.blockquote
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.6, ease: EASE }}
                >
                  <p className="max-w-3xl font-serif text-xl italic leading-relaxed text-slate-200 sm:text-2xl" data-testid="testimonial-quote">
                    “{quote.text}”
                  </p>
                  <footer className="mt-6 font-mono text-xs uppercase tracking-[0.2em] text-slate-500">
                    <span className="text-brand-400">{quote.author}</span> — {quote.org}
                  </footer>
                </motion.blockquote>
              </AnimatePresence>
            </div>
            <div className="relative mt-8 flex gap-2.5">
              {QUOTES.map((_, i) => (
                <button
                  key={i}
                  data-testid={`testimonial-dot-${i}`}
                  onClick={() => setIndex(i)}
                  aria-label={`Show quote ${i + 1}`}
                  className={`h-1.5 rounded-full transition-[width,background-color] duration-400 ${
                    i === index ? "w-10 bg-brand-400" : "w-4 bg-slate-700 hover:bg-slate-500"
                  }`}
                />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
