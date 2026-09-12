import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowUpRight } from "lucide-react";
import { Reveal, Chapter, PageHeader, EASE } from "@/components/Reveal";
import Marquee from "@/components/Marquee";
import CtaBanner from "@/components/CtaBanner";
import { SERVICES, SERVICE_CATEGORIES, MODELS, FRAMEWORKS } from "@/data/content";

function ServiceExplorer() {
  const [cat, setCat] = useState("All");
  const filtered = cat === "All" ? SERVICES : SERVICES.filter((s) => s.category === cat);

  return (
    <section className="px-6 py-16 lg:px-12" data-testid="service-explorer">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap gap-2.5" data-testid="service-filter-tabs">
          {SERVICE_CATEGORIES.map((c) => (
            <button
              key={c}
              data-testid={`service-filter-${c.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
              onClick={() => setCat(c)}
              className={`relative rounded-full px-5 py-2.5 font-mono text-[11px] uppercase tracking-[0.18em] transition-colors duration-300 ${
                cat === c ? "text-[#06281c]" : "border border-slate-700/80 text-slate-400 hover:border-emerald-500/50 hover:text-emerald-400"
              }`}
            >
              {cat === c && (
                <motion.span
                  layoutId="service-tab"
                  className="absolute inset-0 rounded-full bg-emerald-500"
                  transition={{ duration: 0.45, ease: EASE }}
                />
              )}
              <span className="relative">{c}</span>
            </button>
          ))}
        </div>

        <motion.div layout className="mt-12 grid gap-5 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filtered.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.article
                  layout
                  key={s.slug}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.5, delay: i * 0.05, ease: EASE }}
                  className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 p-8 transition-[border-color,box-shadow] duration-500 hover:border-emerald-500/40 hover:shadow-[0_0_32px_rgba(16,185,129,0.1)]"
                  data-testid={`service-card-${s.slug}`}
                >
                  <div
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{ background: "linear-gradient(135deg, rgba(16,185,129,0.1), transparent 55%)" }}
                  />
                  <div className="relative">
                    <div className="flex items-center justify-between">
                      <span className="grid h-12 w-12 place-items-center rounded-xl border border-emerald-500/30 bg-emerald-950/40 text-emerald-400">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div className="flex gap-2">
                        {s.tags.map((t) => (
                          <span key={t} className="chip">{t}</span>
                        ))}
                      </div>
                    </div>
                    <h2 className="mt-6 font-display text-xl font-semibold text-white sm:text-2xl">{s.title}</h2>
                    <p className="mt-3 text-sm leading-relaxed text-slate-400">{s.desc}</p>
                    <ul className="mt-6 space-y-2.5">
                      {s.deliverables.map((d) => (
                        <li key={d} className="flex items-start gap-2.5 text-sm text-slate-300">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                          {d}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/contact"
                      data-testid={`service-cta-${s.slug}`}
                      className="mt-7 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-emerald-400 transition-colors duration-300 hover:text-emerald-300"
                    >
                      Scope this engagement
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

function DeliveryModels() {
  const [active, setActive] = useState(0);
  const model = MODELS[active];

  return (
    <section className="px-6 py-24 lg:px-12 lg:py-32" data-testid="delivery-models">
      <div className="mx-auto max-w-7xl">
        <Chapter index="02" label="Delivery Architecture" />
        <Reveal className="mt-8">
          <h2 className="max-w-2xl font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Four ways to <em className="font-serif italic text-cyan-400">engage.</em>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-12">
          <div className="flex flex-col gap-3 lg:col-span-5">
            {MODELS.map((m, i) => (
              <button
                key={m.name}
                data-testid={`model-tab-${i}`}
                onClick={() => setActive(i)}
                className={`relative overflow-hidden rounded-xl border px-6 py-5 text-left transition-[border-color,background-color] duration-400 ${
                  active === i
                    ? "border-emerald-500/50 bg-emerald-950/25"
                    : "border-slate-800 bg-slate-900/40 hover:border-slate-600"
                }`}
              >
                {active === i && (
                  <motion.span
                    layoutId="model-indicator"
                    className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-emerald-400 to-cyan-400"
                    transition={{ duration: 0.45, ease: EASE }}
                  />
                )}
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-cyan-400">{m.tag}</span>
                <span className={`mt-1.5 block font-display text-base font-semibold sm:text-lg ${active === i ? "text-white" : "text-slate-300"}`}>
                  {m.name}
                </span>
              </button>
            ))}
          </div>

          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.45, ease: EASE }}
                className="glass-card h-full p-8 sm:p-10"
                data-testid="model-panel"
              >
                <p className="text-base leading-relaxed text-slate-300">{model.desc}</p>
                <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                  {model.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 rounded-lg border border-slate-800/80 bg-slate-950/50 px-4 py-3 text-sm text-slate-300">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 border-t border-slate-800 pt-6">
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-slate-500">Ideal for</p>
                  <p className="mt-2 font-serif text-lg italic text-slate-200">{model.ideal}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

function FrameworkMatrix() {
  return (
    <section className="px-6 pb-8 lg:px-12" data-testid="framework-matrix">
      <div className="mx-auto max-w-7xl">
        <Chapter index="03" label="Compliance Matrix" />
        <Reveal className="mt-8">
          <h2 className="max-w-2xl font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Every standard. <em className="font-serif italic text-emerald-400">Mapped.</em>
          </h2>
        </Reveal>
        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {FRAMEWORKS.map((f, i) => (
            <Reveal key={f} delay={i * 0.03}>
              <div
                className="group flex items-center gap-2.5 rounded-xl border border-slate-800 bg-slate-900/50 px-4 py-3.5 transition-[border-color,box-shadow] duration-300 hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.12)]"
                data-testid={`framework-badge-${f.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
              >
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400/80 transition-shadow duration-300 group-hover:shadow-[0_0_8px_rgba(6,182,212,0.9)]" />
                <span className="font-mono text-[11px] tracking-wider text-slate-300">{f}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Services() {
  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} data-testid="services-page">
      <PageHeader
        chapter={{ no: "01", label: "Services" }}
        title="Capabilities built for"
        accent="zero surprises."
        sub="From AI governance to turnkey managed compliance — six practices engineered to make audits boring and enterprise deals faster."
      />
      <ServiceExplorer />
      <Marquee items={FRAMEWORKS} />
      <DeliveryModels />
      <FrameworkMatrix />
      <div className="h-16" />
      <CtaBanner />
    </motion.main>
  );
}
