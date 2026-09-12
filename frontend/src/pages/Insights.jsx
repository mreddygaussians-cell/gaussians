import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import { toast } from "sonner";
import { Reveal, PageHeader, EASE } from "@/components/Reveal";
import CtaBanner from "@/components/CtaBanner";
import { ARTICLES, ARTICLE_CATEGORIES, IMAGES } from "@/data/content";

function Featured({ article }) {
  return (
    <Reveal>
      <article
        className="group relative overflow-hidden rounded-2xl border border-slate-800"
        data-testid="insight-featured"
      >
        <img
          src={IMAGES.mesh}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-30 transition-[opacity,transform] duration-700 group-hover:scale-105 group-hover:opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B101C] via-[#0B101C]/80 to-[#0B101C]/30" />
        <div className="relative flex min-h-[340px] flex-col justify-end p-8 sm:p-12">
          <div className="flex items-center gap-3">
            <span className="status-pill">FEATURED BRIEF</span>
            <span className="chip">{article.category}</span>
          </div>
          <h2 className="mt-6 max-w-2xl font-display text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
            {article.title}
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-400">{article.excerpt}</p>
          <div className="mt-6 flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.2em] text-slate-500">
            <span>{article.date}</span>
            <span className="h-1 w-1 rounded-full bg-slate-600" />
            <span>{article.read} read</span>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

function Feed() {
  const [cat, setCat] = useState("All");
  const rest = ARTICLES.filter((a) => !a.featured);
  const filtered = cat === "All" ? rest : rest.filter((a) => a.category === cat);

  return (
    <section className="mt-16" data-testid="insight-feed">
      <div className="flex flex-wrap gap-2.5">
        {ARTICLE_CATEGORIES.map((c) => (
          <button
            key={c}
            data-testid={`insight-filter-${c.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
            onClick={() => setCat(c)}
            className={`relative rounded-full px-5 py-2.5 font-mono text-[11px] uppercase tracking-[0.18em] transition-colors duration-300 ${
              cat === c ? "text-[#15142E]" : "border border-slate-700/80 text-slate-400 hover:border-cyan-400/50 hover:text-cyan-400"
            }`}
          >
            {cat === c && (
              <motion.span
                layoutId="insight-tab"
                className="absolute inset-0 rounded-full bg-cyan-400"
                transition={{ duration: 0.45, ease: EASE }}
              />
            )}
            <span className="relative">{c}</span>
          </button>
        ))}
      </div>

      <motion.div layout className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((a, i) => (
            <motion.article
              layout
              key={a.slug}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.5, delay: i * 0.05, ease: EASE }}
              className="group flex h-full cursor-pointer flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/60 p-7 transition-[border-color,box-shadow,transform] duration-500 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-[0_0_28px_rgba(6,182,212,0.1)]"
              data-testid={`insight-card-${a.slug}`}
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="chip">{a.category}</span>
                  <ArrowUpRight className="h-4 w-4 text-slate-600 transition-[color,transform] duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan-400" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold leading-snug text-white">{a.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">{a.excerpt}</p>
              </div>
              <div className="mt-6 flex items-center gap-4 border-t border-slate-800/80 pt-4 font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
                <span>{a.date}</span>
                <span className="h-1 w-1 rounded-full bg-slate-700" />
                <span>{a.read} read</span>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

function Newsletter() {
  const [email, setEmail] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    toast.success("Subscribed. Intelligence incoming.", { description: "You'll receive the next Gaussians security brief." });
    setEmail("");
  };

  return (
    <Reveal className="mt-20">
      <div className="glass-card relative overflow-hidden px-8 py-12 sm:px-12" data-testid="newsletter-box">
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(circle at 90% 10%, rgba(117,112,212,0.12), transparent 50%)" }}
        />
        <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-brand-400">The Gaussians Brief</p>
            <h3 className="mt-3 font-display text-2xl font-semibold text-white sm:text-3xl">
              Monthly intelligence. <em className="font-serif italic text-brand-400">Zero noise.</em>
            </h3>
            <p className="mt-3 max-w-md text-sm text-slate-400">
              Regulatory transitions, framework updates, and field notes from 200+ audit engagements.
            </p>
          </div>
          <form onSubmit={submit} className="flex w-full max-w-md flex-col gap-3 sm:flex-row" data-testid="newsletter-form">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              data-testid="newsletter-input-email"
              className="field flex-1"
            />
            <button
              type="submit"
              data-testid="newsletter-submit-button"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-500 px-6 py-3 font-display text-sm font-semibold text-[#15142E] transition-[background-color,box-shadow] duration-300 hover:bg-brand-400 hover:shadow-[0_8px_24px_rgba(117,112,212,0.35)]"
            >
              <Mail className="h-4 w-4" /> Subscribe
            </button>
          </form>
        </div>
      </div>
    </Reveal>
  );
}

export default function Insights() {
  const featured = ARTICLES.find((a) => a.featured);
  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} data-testid="insights-page">
      <PageHeader
        chapter={{ no: "01", label: "Insights & Intelligence" }}
        title="Field notes from"
        accent="the trenches."
        sub="Playbooks, framework transitions, and regulatory bulletins from practitioners who sit through the audits — not just the kickoff calls."
      />
      <section className="px-6 pb-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <Featured article={featured} />
          <Feed />
          <Newsletter />
        </div>
      </section>
      <div className="h-12" />
      <CtaBanner />
    </motion.main>
  );
}
