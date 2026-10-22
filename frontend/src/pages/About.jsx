import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { Linkedin, ArrowUpRight, Globe2, Building2, Laptop, Users } from "lucide-react";
import { Reveal, Chapter, PageHeader } from "@/components/Reveal";
import CtaBanner from "@/components/CtaBanner";
import { FORWARD, LEADERS, IMAGES, GLOBAL_PRESENCE, LEADERSHIP_OVERVIEW, MISSION_VISION, HOW_WE_WORK, FORWARD_COMMITMENT } from "@/data/content";

const CHAPTERS = [
  {
    no: "01",
    title: "Integrity",
    body: "Integrity guides every decision we make.",
  },
  {
    no: "02",
    title: "Transparency",
    body: "Transparency ensures our clients always know where they stand.",
  },
  {
    no: "03",
    title: "Ownership",
    body: "Ownership drives us to remain accountable for outcomes, not just activities.",
  },
  {
    no: "04",
    title: "Excellence",
    body: "Excellence pushes us to continually raise the standard of our work. Above all, we measure our success through the success of our clients.",
  },
];

function Manifesto() {
  return (
    <section className="relative px-6 py-16 lg:px-12 lg:py-24" data-testid="manifesto-section">
      <div className="relative mx-auto max-w-7xl">
        <Chapter index="02" label="Our Values" />
        <Reveal className="mt-8">
          <h2 className="max-w-2xl font-display text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            We believe that successful partnerships are built on{" "}
            <em className="font-serif italic text-brand-500">strong values.</em>
          </h2>
        </Reveal>
        <div className="mt-16 space-y-0">
          {CHAPTERS.map((c, i) => (
            <Reveal key={c.no} delay={0.05}>
              <div
                className={`group grid gap-6 border-t border-slate-200/80 py-14 lg:grid-cols-12 lg:gap-12 ${
                  i === CHAPTERS.length - 1 ? "border-b" : ""
                }`}
                data-testid={`manifesto-chapter-${c.no}`}
              >
                <div className="lg:col-span-3">
                  <span className="font-display text-5xl font-bold text-slate-200 transition-colors duration-500 group-hover:text-brand-300 sm:text-6xl">
                    {c.no}
                  </span>
                </div>
                <div className="lg:col-span-4">
                  <h2 className="font-serif text-2xl italic leading-snug text-slate-900 sm:text-3xl">{c.title}</h2>
                </div>
                <div className="lg:col-span-5">
                  <p className="text-sm leading-relaxed text-slate-500 sm:text-base">{c.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Mission & Vision */}
        <Reveal className="mt-16 border-t border-slate-200/80 pt-12">
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="card-white p-7 sm:p-8" data-testid="mission-card">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-brand-500">Mission</span>
              <h3 className="mt-3 font-display text-xl font-semibold text-slate-900">{MISSION_VISION.mission.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                {MISSION_VISION.mission.desc}
              </p>
            </div>
            <div className="card-white p-7 sm:p-8" data-testid="vision-card">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-brand-500">Vision</span>
              <h3 className="mt-3 font-display text-xl font-semibold text-slate-900">{MISSION_VISION.vision.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                {MISSION_VISION.vision.desc}
              </p>
            </div>
          </div>
        </Reveal>

        {/* How We Work */}
        <Reveal className="mt-12 border-t border-slate-200/80 pt-12" data-testid="how-we-work-section">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-brand-500">Operational Ethos</span>
              <h3 className="mt-3 font-display text-2xl font-semibold text-slate-900 sm:text-3xl">
                How We <em className="font-serif italic text-brand-500">Work.</em>
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-500">
                {HOW_WE_WORK.subtitle}
              </p>
            </div>
            <div className="lg:col-span-7">
              <ul className="space-y-3.5">
                {HOW_WE_WORK.principles.map((pr, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3.5 rounded-xl border border-slate-200/80 bg-slate-50/70 p-4 text-sm leading-relaxed text-slate-700"
                  >
                    <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-500/10 font-mono text-[11px] font-semibold text-brand-600">
                      {i + 1}
                    </span>
                    <span>{pr}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-16 border-t border-slate-200/80 pt-12">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-brand-500">Our Purpose</span>
              <h3 className="mt-3 font-display text-2xl font-semibold text-slate-900 sm:text-3xl">
                Navigating change with <em className="font-serif italic text-brand-500">confidence.</em>
              </h3>
            </div>
            <div className="lg:col-span-7 space-y-4 text-sm leading-relaxed text-slate-500 sm:text-base">
              <p>
                Today, Gaussians combines strategic advisory, operational support, managed services, and specialist talent solutions to help organizations navigate change, manage risk, strengthen trust, and achieve their goals with confidence.
              </p>
              <p>
                Our journey continues to evolve, but our purpose remains unchanged: to be the trusted partner organizations rely on when security, compliance, risk, and trust matter most.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function GlobalPresenceSection() {
  const icons = [Building2, Laptop, Globe2, Users];
  return (
    <section className="relative bg-slate-50/60 px-6 py-24 lg:px-12 lg:py-32" data-testid="global-presence-section">
      <div className="relative mx-auto max-w-7xl">
        <Chapter index="03" label="Global Presence" />
        <div className="mt-8 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <h2 className="max-w-xl font-display text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Supporting organizations across{" "}
              <em className="font-serif italic text-brand-500">global markets.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-md text-sm leading-relaxed text-slate-500 sm:text-base">
              {GLOBAL_PRESENCE.desc}
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {GLOBAL_PRESENCE.models.map((m, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal key={m.title} delay={i * 0.08}>
                <div
                  className="card-white group flex h-full flex-col justify-between p-7 transition-[border-color,box-shadow,transform] duration-500 hover:-translate-y-1 hover:border-brand-500/40 hover:shadow-[0_20px_40px_-15px_rgba(117,112,212,0.18)]"
                  data-testid={`presence-card-${m.title.toLowerCase()}`}
                >
                  <div>
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-brand-500/25 bg-brand-500/[0.07] text-brand-500 transition-shadow duration-500 group-hover:shadow-[0_8px_25px_-4px_rgba(117,112,212,0.35)]">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-6 font-display text-xl font-semibold text-slate-900">{m.title}</h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-slate-500">{m.desc}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-12 text-center">
          <p className="font-serif text-lg italic text-slate-700 sm:text-xl">
            “{GLOBAL_PRESENCE.conclusion}”
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function ImageBand() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <section ref={ref} className="relative h-[380px] overflow-hidden sm:h-[460px]" data-testid="about-image-band">
      <motion.img
        src={IMAGES.community}
        alt="Gaussians global presence"
        style={{ y }}
        className="absolute inset-0 h-[125%] w-full object-cover"
      />
      <div className="absolute inset-0 bg-white/25" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent" />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white to-transparent" />
      <div className="absolute bottom-8 left-6 lg:left-12">
        <span className="status-pill bg-white/90 backdrop-blur" data-testid="about-image-caption">
          GLOBAL REACH · OFFSHORE, REMOTE, HYBRID & EMBEDDED
        </span>
      </div>
    </section>
  );
}

function Leadership() {
  return (
    <section className="px-6 py-24 lg:px-12 lg:py-32" data-testid="leadership-section">
      <div className="mx-auto max-w-7xl">
        <Chapter index="04" label="Leadership & Experts" />
        <Reveal className="mt-8">
          <h2 className="max-w-2xl font-display text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Leadership and <em className="font-serif italic text-brand-500">Subject Matter Experts.</em>
          </h2>
        </Reveal>

        <div className="mt-8 grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-6 space-y-4 text-sm leading-relaxed text-slate-500 sm:text-base">
            <Reveal delay={0.05}>
              <p className="font-medium text-slate-700">{LEADERSHIP_OVERVIEW.lead}</p>
            </Reveal>
            <Reveal delay={0.1}>
              <p>{LEADERSHIP_OVERVIEW.paragraphs[0]}</p>
            </Reveal>
          </div>
          <div className="lg:col-span-6 space-y-4 text-sm leading-relaxed text-slate-500 sm:text-base">
            <Reveal delay={0.15}>
              <p>{LEADERSHIP_OVERVIEW.paragraphs[1]}</p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="font-medium text-slate-700">{LEADERSHIP_OVERVIEW.paragraphs[2]}</p>
            </Reveal>
          </div>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {LEADERS.map((l, i) => (
            <Reveal key={l.slug} delay={i * 0.1}>
              <article
                className="card-white group flex flex-col justify-between p-8 transition-[border-color,box-shadow,transform] duration-500 hover:-translate-y-1 hover:border-brand-500/40 hover:shadow-[0_28px_56px_-20px_rgba(117,112,212,0.25)] sm:p-10"
                data-testid={`leader-card-${l.slug}`}
              >
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-brand-600">{l.role}</p>
                      <h3 className="mt-2 font-display text-2xl font-bold text-slate-900 sm:text-3xl">{l.name}</h3>
                    </div>
                    <span className="font-mono text-xs font-medium text-slate-400 transition-colors duration-500 group-hover:text-brand-500">
                      /{String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.18em] text-brand-500">{l.focus}</p>
                  <p className="mt-3 font-mono text-[11px] font-medium leading-relaxed tracking-wider text-slate-600">{l.track}</p>
                  <p className="mt-5 text-sm leading-relaxed text-slate-600 sm:text-base">{l.bio}</p>
                </div>
                <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-slate-100 pt-6">
                  <a
                    href="#"
                    data-testid={`leader-linkedin-${l.slug}`}
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.16em] text-slate-600 transition-[border-color,color] duration-300 hover:border-slate-900 hover:text-slate-900"
                  >
                    <Linkedin className="h-3.5 w-3.5" /> Connect with {l.name.split(" ")[0]}
                  </a>
                  <Link
                    to="/contact"
                    data-testid={`leader-book-${l.slug}`}
                    className="inline-flex items-center gap-2 rounded-full border border-brand-500/40 bg-brand-500/[0.07] px-4 py-2 font-mono text-[11px] uppercase tracking-[0.16em] text-brand-600 transition-[background-color,border-color] duration-300 hover:border-brand-500/60 hover:bg-brand-500/10"
                  >
                    Book consultation <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
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
    <section className="relative bg-slate-50/60 px-6 py-24 lg:px-12 lg:py-32" data-testid="forward-section">
      <div className="relative mx-auto max-w-7xl">
        <Chapter index="05" label="Gaussians Forward" />
        <div className="mt-8 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <h2 className="max-w-xl font-display text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Gaussians Forward: <em className="font-serif italic text-brand-500">Learn. Share. Grow. Give Back.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-md text-sm leading-relaxed text-slate-500">
              At Gaussians, we believe that building a stronger profession requires more than delivering great work for
              clients. It requires investing in people, sharing knowledge, creating opportunities, and contributing to the
              communities that help us grow.
            </p>
          </Reveal>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {FORWARD.map((f, i) => {
            const Icon = f.icon;
            return (
              <Reveal key={f.title} delay={i * 0.08}>
                <div
                  className="card-white group flex h-full gap-6 p-8 transition-[border-color,box-shadow,transform] duration-500 hover:-translate-y-1 hover:border-brand-500/40 hover:shadow-[0_20px_40px_-15px_rgba(117,112,212,0.18)]"
                  data-testid={`forward-card-${f.title.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-brand-500/25 bg-brand-500/[0.07] text-brand-500 transition-shadow duration-500 group-hover:shadow-[0_8px_25px_-4px_rgba(117,112,212,0.35)]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-slate-900">{f.title}</h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-slate-500">{f.desc}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-12">
          <div className="rounded-2xl border border-brand-500/20 bg-brand-500/[0.04] p-8 text-center sm:p-10" data-testid="forward-commitment">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-600">
              {FORWARD_COMMITMENT.title} · {FORWARD_COMMITMENT.subtitle}
            </p>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-700 sm:text-base">
              {FORWARD_COMMITMENT.desc}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function AboutStory() {
  return (
    <section className="relative px-6 pb-20 pt-4 lg:px-12 lg:pb-24" data-testid="about-story-section">
      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Understanding & Partnership */}
          <div className="lg:col-span-6 space-y-8 text-base leading-relaxed text-slate-600 sm:text-lg">
            <Reveal>
              <p>
                We know that behind every audit, security review, compliance requirement, or customer questionnaire is a
                leadership team trying to grow the business, protect its reputation, earn customer trust, and make the
                right decisions with limited time and resources. Having worked alongside organizations at different stages
                of growth, we understand these pressures because we have lived them with our clients.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="space-y-3 border-l-2 border-brand-500/30 pl-6">
                <h3 className="font-display text-xl font-semibold text-slate-900 sm:text-2xl">
                  That understanding shapes the way we work.
                </h3>
                <p className="text-slate-600">
                  At Gaussians, we do not see ourselves as an external consulting firm delivering reports and
                  recommendations. We see ourselves as partners in our clients' journey. We work alongside leadership
                  teams, security teams, compliance functions, auditors, and operational stakeholders to build trust,
                  strengthen resilience, and create programs that support long-term business success.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Inception & People */}
          <div className="lg:col-span-6 space-y-8 text-base leading-relaxed text-slate-600 sm:text-lg">
            <Reveal delay={0.15}>
              <p>
                Since our inception in 2021, we have grown from a founder-led vision into a team of dedicated
                professionals supporting organizations across global markets. Over the years, we have helped clients
                establish and mature cybersecurity, governance, risk, compliance, and assurance programs while building
                scalable operating models that continue to deliver value long after individual projects have concluded.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="space-y-3 border-l-2 border-brand-500/30 pl-6">
                <h3 className="font-display text-xl font-semibold text-slate-900 sm:text-2xl">
                  What makes Gaussians special is our people.
                </h3>
                <p className="text-slate-600">
                  Our team brings together experienced professionals with diverse backgrounds across cybersecurity,
                  governance, risk management, compliance, assurance, privacy, and technology advisory. Beyond technical
                  expertise, our people are known for their curiosity, accountability, professionalism, and commitment to
                  client success. We take pride in building teams that clients trust—not only for their knowledge, but for
                  their ability to listen, collaborate, and deliver.
                </p>
              </div>
            </Reveal>
          </div>
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
        title="Every organization deserves a"
        accent="trusted partner."
        sub="Gaussians was founded on a simple belief: every organization deserves a trusted partner who understands both the challenges of running a business and the realities of managing cybersecurity, compliance, and risk in an increasingly complex world."
      />
      <AboutStory />
      <Manifesto />
      <GlobalPresenceSection />
      <ImageBand />
      <Leadership />
      <Forward />
      <CtaBanner />
    </motion.main>
  );
}
