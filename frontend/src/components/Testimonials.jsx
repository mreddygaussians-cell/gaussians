import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";
import { Reveal, Chapter, EASE } from "@/components/Reveal";
import { SUCCESS_STORIES, QUOTES } from "@/data/content";

export default function Testimonials() {
  const quotes = QUOTES || [];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!quotes.length) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % quotes.length), 6500);
    return () => clearInterval(t);
  }, [quotes.length]);

  const quote = quotes[index] || quotes[0] || {};
  const story = SUCCESS_STORIES?.story || {};

  return (
    <section className="relative px-6 py-24 lg:px-12 lg:py-32" data-testid="testimonials-section">
      <div className="mx-auto max-w-7xl">
        <Chapter index="03" label="Success Stories" />
        <div className="mt-8 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <h2 className="max-w-2xl font-display text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Practical support. Clear outcomes. <em className="font-serif italic text-brand-500">Lasting value.</em>
            </h2>
          </Reveal>
        </div>

        {/* Client Success Story */}
        <Reveal className="mt-14">
          <div
            className="card-white overflow-hidden p-8 shadow-[0_20px_50px_-20px_rgba(15,23,42,0.12)] sm:p-12"
            data-testid="client-success-story-card"
          >
            <div className="flex flex-wrap items-center gap-3">
              <span className="status-pill">{story.badge}</span>
              <span className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-slate-600">
                IT GRC & Third-Party Risk
              </span>
            </div>

            <h3 className="mt-6 font-display text-2xl font-bold text-slate-900 sm:text-3xl">
              {story.title}
            </h3>

            <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg">
              {story.context}
            </p>

            <div className="mt-8 grid gap-8 border-t border-slate-100 pt-8 lg:grid-cols-12">
              <div className="lg:col-span-6 space-y-3">
                <span className="font-mono text-xs uppercase tracking-[0.22em] text-brand-500">How Gaussians Supported</span>
                <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                  {story.solution}
                </p>
              </div>
              <div className="lg:col-span-6 space-y-3">
                <span className="font-mono text-xs uppercase tracking-[0.22em] text-brand-500">Engagement Outcomes</span>
                <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                  {story.impact}
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Testimonials */}
        <div className="mt-20">
          <Reveal>
            <div className="max-w-3xl">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-brand-500">Testimonials</span>
              <h3 className="mt-3 font-display text-2xl font-semibold text-slate-900 sm:text-3xl">
                What our clients say about <em className="font-serif italic text-brand-500">Gaussians.</em>
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-slate-500 sm:text-base">
                {SUCCESS_STORIES.testimonialsIntro}
              </p>
            </div>
          </Reveal>

          <Reveal className="mt-10">
            <div
              className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-slate-50/80 px-8 py-12 sm:px-14"
              data-testid="testimonial-slider"
            >
              <div
                className="pointer-events-none absolute inset-0"
                style={{ background: "radial-gradient(circle at 20% 0%, rgba(117,112,212,0.08), transparent 55%)" }}
              />
              <Quote className="relative h-8 w-8 text-brand-400" />
              <div className="relative mt-6 min-h-[140px] sm:min-h-[110px]">
                <AnimatePresence mode="wait">
                  <motion.blockquote
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                    transition={{ duration: 0.6, ease: EASE }}
                  >
                    <p className="max-w-3xl font-serif text-xl italic leading-relaxed text-slate-700 sm:text-2xl" data-testid="testimonial-quote">
                      “{quote?.text}”
                    </p>
                    <footer className="mt-6 font-mono text-xs font-medium uppercase tracking-[0.2em] text-slate-600">
                      <span className="text-brand-600">{quote?.author}</span> — {quote?.org}
                    </footer>
                  </motion.blockquote>
                </AnimatePresence>
              </div>
              <div className="relative mt-8 flex gap-2.5">
                {quotes.map((_, i) => (
                  <button
                    key={i}
                    data-testid={`testimonial-dot-${i}`}
                    onClick={() => setIndex(i)}
                    aria-label={`Show quote ${i + 1}`}
                    className={`h-1.5 rounded-full transition-[width,background-color] duration-400 ${i === index ? "w-10 bg-brand-500" : "w-4 bg-slate-300 hover:bg-slate-400"
                      }`}
                  />
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
