import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Linkedin, ArrowUpRight } from "lucide-react";
import { Reveal, Chapter, PageHeader } from "@/components/Reveal";
import CtaBanner from "@/components/CtaBanner";
import { FORWARD, LEADERS, IMAGES } from "@/data/content";

const CHAPTERS = [
  {
    no: "01",
    title: "Execution over advice",
    body: "The consulting industry sells documents. We build operating programs — authoring the policies, engineering the controls, harvesting the evidence, and standing beside you when the auditor asks the hard questions. Advice without ownership is overhead.",
  },
  {
    no: "02",
    title: "Seniority is non-negotiable",
    body: "Every Gaussians engagement is architected and led by practice directors with 15+ years across Big 4 firms and global enterprises. No junior hand-offs, no learning on your dime. The person who scopes your program is the person who delivers it.",
  },
  {
    no: "03",
    title: "Velocity with integrity",
    body: "Compliance timelines should track your shipping cadence, not a quarterly engagement calendar. We run sprint-aligned delivery that reaches audit readiness in under 90 days — without cutting a single regulatory corner.",
  },
  {
    no: "04",
    title: "Compliance as a growth engine",
    body: "A well-run GRC program is not a cost center. It is the trust artifact that closes enterprise deals, unlocks regulated markets, and lets your sales team answer security reviews in hours instead of weeks.",
  },
];

function Manifesto() {
  return (
    <section className="relative px-6 py-16 lg:px-12 lg:py-24" data-testid="manifesto-section">
      <img
        src={IMAGES.expressway}
        alt=""
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.07]"
      />
      <div className="relative mx-auto max-w-7xl">
        <Chapter index="02" label="The Manifesto" />
        <div className="mt-16 space-y-0">
          {CHAPTERS.map((c, i) => (
            <Reveal key={c.no} delay={0.05}>
              <div
                className={`grid gap-6 border-t border-slate-800/80 py-14 lg:grid-cols-12 lg:gap-12 ${
                  i === CHAPTERS.length - 1 ? "border-b" : ""
                }`}
                data-testid={`manifesto-chapter-${c.no}`}
              >
                <div className="lg:col-span-3">
                  <span className="font-display text-5xl font-bold text-slate-800 transition-colors duration-500 sm:text-6xl">
                    {c.no}
                  </span>
                </div>
                <div className="lg:col-span-4">
                  <h2 className="font-serif text-2xl italic leading-snug text-white sm:text-3xl">{c.title}</h2>
                </div>
                <div className="lg:col-span-5">
                  <p className="text-sm leading-relaxed text-slate-400 sm:text-base">{c.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Leadership() {
  return (
    <section className="px-6 py-24 lg:px-12 lg:py-32" data-testid="leadership-section">
      <div className="mx-auto max-w-7xl">
        <Chapter index="03" label="Leadership" />
        <Reveal className="mt-8">
          <h2 className="max-w-2xl font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Led from the <em className="font-serif italic text-emerald-400">front.</em>
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {LEADERS.map((l, i) => (
            <Reveal key={l.slug} delay={i * 0.1}>
              <article
                className="group glass-card overflow-hidden transition-[border-color,box-shadow] duration-500 hover:border-emerald-500/40 hover:shadow-[0_0_36px_rgba(16,185,129,0.12)]"
                data-testid={`leader-card-${l.slug}`}
              >
                <div className="relative h-72 overflow-hidden sm:h-80">
                  <img
                    src={l.image}
                    alt={`${l.name} portrait`}
                    className="h-full w-full object-cover object-top grayscale-[35%] transition-[filter,transform] duration-700 group-hover:scale-[1.03] group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B101C] via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-6 right-6">
                    <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-emerald-400">{l.role}</p>
                    <h3 className="mt-1.5 font-display text-2xl font-bold text-white">{l.name}</h3>
                  </div>
                </div>
                <div className="p-7">
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-cyan-400">{l.focus}</p>
                  <p className="mt-3 font-mono text-[11px] leading-relaxed tracking-wider text-slate-500">{l.track}</p>
                  <p className="mt-4 text-sm leading-relaxed text-slate-400">{l.bio}</p>
                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    <a
                      href="#"
                      data-testid={`leader-linkedin-${l.slug}`}
                      className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.16em] text-slate-300 transition-[border-color,color] duration-300 hover:border-cyan-400/60 hover:text-cyan-400"
                    >
                      <Linkedin className="h-3.5 w-3.5" /> Connect with {l.name.split(" ")[0]}
                    </a>
                    <Link
                      to="/contact"
                      data-testid={`leader-book-${l.slug}`}
                      className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-950/40 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.16em] text-emerald-400 transition-[background-color,border-color] duration-300 hover:border-emerald-400/70 hover:bg-emerald-950/70"
                    >
                      Book consultation <ArrowUpRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Forward() {
  return (
    <section className="relative px-6 py-24 lg:px-12 lg:py-32" data-testid="forward-section">
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(circle at 80% 30%, rgba(6,182,212,0.06), transparent 55%)" }}
      />
      <div className="relative mx-auto max-w-7xl">
        <Chapter index="04" label="Gaussians Forward" />
        <div className="mt-8 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <h2 className="max-w-xl font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Community & <em className="font-serif italic text-cyan-400">innovation</em> lab.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-md text-sm leading-relaxed text-slate-400">
              Beyond client work, Gaussians Forward invests in the ecosystem — open frameworks, mentorship, and pro
              bono security for organizations that need it most.
            </p>
          </Reveal>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {FORWARD.map((f, i) => {
            const Icon = f.icon;
            return (
              <Reveal key={f.title} delay={i * 0.08}>
                <div
                  className="group flex h-full gap-6 rounded-2xl border border-slate-800 bg-slate-900/60 p-8 transition-[border-color,box-shadow] duration-500 hover:border-cyan-400/40 hover:shadow-[0_0_28px_rgba(6,182,212,0.1)]"
                  data-testid={`forward-card-${f.title.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-cyan-400/30 bg-cyan-950/40 text-cyan-400 transition-shadow duration-500 group-hover:shadow-[0_0_18px_rgba(6,182,212,0.35)]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-white">{f.title}</h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-slate-400">{f.desc}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default function About() {
  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} data-testid="about-page">
      <PageHeader
        chapter={{ no: "01", label: "About Gaussians" }}
        title="Built by practitioners,"
        accent="not PowerPoint."
        sub="Gaussians was founded to close the gap between strategic security governance and practical execution — a GRC firm that gets its hands dirty."
      />
      <Manifesto />
      <Leadership />
      <Forward />
      <CtaBanner />
    </motion.main>
  );
}
