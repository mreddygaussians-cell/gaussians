import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Globe2, Siren, CheckCircle2, ArrowRight } from "lucide-react";
import { toast } from "sonner";
import { Reveal, PageHeader, EASE } from "@/components/Reveal";
import { CONTACT, FRAMEWORKS, MODELS, IMAGES } from "@/data/content";

const FRAMEWORK_OPTIONS = ["SOC 2", "ISO 27001", "ISO 42001", "PCI DSS", "HIPAA", "GDPR", "HITRUST", "CMMC", "NIST CSF", "SOX ITGC"];

function ConsultForm() {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [frameworks, setFrameworks] = useState([]);
  const [model, setModel] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const toggleFramework = (f) =>
    setFrameworks((prev) => (prev.includes(f) ? prev.filter((x) => x !== f) : [...prev, f]));

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    toast.success("Consultation request received.", {
      description: "A practice director will respond within one business day.",
    });
  };

  return (
    <div className="card-white relative overflow-hidden p-8 shadow-[0_20px_50px_-20px_rgba(15,23,42,0.12)] sm:p-10" data-testid="contact-form-card">
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(circle at 100% 0%, rgba(117,112,212,0.07), transparent 50%)" }}
      />
      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="relative flex min-h-[420px] flex-col items-start justify-center"
            data-testid="contact-form-success"
          >
            <span className="grid h-16 w-16 place-items-center rounded-2xl border border-brand-500/30 bg-brand-500/[0.08]">
              <CheckCircle2 className="h-8 w-8 text-brand-500" />
            </span>
            <h2 className="mt-8 font-display text-2xl font-bold text-slate-900 sm:text-3xl">
              Request <em className="font-serif italic text-brand-500">logged.</em>
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-500">
              Thank you, {form.name.split(" ")[0] || "there"}. A Gaussians practice director will reach out at{" "}
              <span className="font-medium text-slate-800">{form.email}</span> within one business day to scope your
              consultation.
            </p>
            {frameworks.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-2">
                {frameworks.map((f) => (
                  <span key={f} className="chip">{f}</span>
                ))}
              </div>
            )}
            <button
              onClick={() => {
                setSubmitted(false);
                setForm({ name: "", email: "", company: "", message: "" });
                setFrameworks([]);
                setModel("");
              }}
              data-testid="contact-form-reset-button"
              className="mt-10 font-mono text-[11px] uppercase tracking-[0.22em] text-slate-400 transition-colors duration-300 hover:text-brand-600"
            >
              Submit another request
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={submit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="relative"
            data-testid="contact-form"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="contact-name" className="mb-2 block font-mono text-[10px] uppercase tracking-[0.22em] text-slate-400">Full name</label>
                <input id="contact-name" required value={form.name} onChange={set("name")} placeholder="Ada Lovelace" className="field" data-testid="contact-input-name" />
              </div>
              <div>
                <label htmlFor="contact-email" className="mb-2 block font-mono text-[10px] uppercase tracking-[0.22em] text-slate-400">Work email</label>
                <input id="contact-email" type="email" required value={form.email} onChange={set("email")} placeholder="ada@company.com" className="field" data-testid="contact-input-email" />
              </div>
            </div>
            <div className="mt-5">
              <label htmlFor="contact-company" className="mb-2 block font-mono text-[10px] uppercase tracking-[0.22em] text-slate-400">Company</label>
              <input id="contact-company" required value={form.company} onChange={set("company")} placeholder="Company Inc." className="field" data-testid="contact-input-company" />
            </div>
            <div className="mt-7">
              <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.22em] text-slate-400">Frameworks in scope</p>
              <div className="flex flex-wrap gap-2">
                {FRAMEWORK_OPTIONS.map((f) => (
                  <button
                    type="button"
                    key={f}
                    onClick={() => toggleFramework(f)}
                    data-testid={`contact-input-framework-${f.toLowerCase().replace(/[^a-z0-9]+/g, "")}`}
                    className={`rounded-full px-4 py-2 font-mono text-[11px] tracking-wider transition-[background-color,border-color,color] duration-300 ${
                      frameworks.includes(f)
                        ? "border border-brand-500/60 bg-brand-500/[0.09] text-brand-600"
                        : "border border-slate-200 bg-white text-slate-500 hover:border-slate-300 hover:text-slate-800"
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>
            <div className="mt-7">
              <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.22em] text-slate-400">Engagement model</p>
              <div className="flex flex-wrap gap-2">
                {MODELS.map((m) => (
                  <button
                    type="button"
                    key={m.tag}
                    onClick={() => setModel(m.tag)}
                    data-testid={`contact-input-model-${m.tag.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                    className={`rounded-full px-4 py-2 font-mono text-[11px] tracking-wider transition-[background-color,border-color,color] duration-300 ${
                      model === m.tag
                        ? "border border-slate-900 bg-slate-900 text-white"
                        : "border border-slate-200 bg-white text-slate-500 hover:border-slate-300 hover:text-slate-800"
                    }`}
                  >
                    {m.tag}
                  </button>
                ))}
              </div>
            </div>
            <div className="mt-7">
              <label htmlFor="contact-message" className="mb-2 block font-mono text-[10px] uppercase tracking-[0.22em] text-slate-400">What are you trying to achieve?</label>
              <textarea
                id="contact-message"
                rows={4}
                value={form.message}
                onChange={set("message")}
                placeholder="e.g. SOC 2 Type II readiness before our enterprise launch in Q4…"
                className="field resize-none"
                data-testid="contact-input-message"
              />
            </div>
            <button
              type="submit"
              data-testid="contact-form-submit-button"
              className="group mt-8 inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-brand-500 px-8 py-4 font-display text-sm font-semibold text-white transition-[background-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:bg-brand-600 hover:shadow-[0_12px_32px_-6px_rgba(117,112,212,0.5)] sm:w-auto"
            >
              Request Consultation
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.2em] text-slate-300">
              Response SLA: within one business day
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

function HubPanel() {
  return (
    <div className="flex flex-col gap-6">
      <Reveal delay={0.1}>
        <div className="card-white overflow-hidden shadow-[0_20px_50px_-20px_rgba(15,23,42,0.12)]" data-testid="contact-hq-card">
          <div className="relative h-52 overflow-hidden">
            <img src={IMAGES.gurgaon} alt="Gurgaon headquarters skyline at night" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-4 left-5">
              <span className="status-pill bg-white/90 backdrop-blur">GLOBAL HEADQUARTERS</span>
            </div>
          </div>
          <div className="p-7">
            <ul className="space-y-4 text-sm text-slate-600">
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                <a href={`mailto:${CONTACT.email}`} data-testid="contact-email-link" className="transition-colors duration-300 hover:text-brand-600">{CONTACT.email}</a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                <a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`} data-testid="contact-phone-link" className="transition-colors duration-300 hover:text-brand-600">{CONTACT.phone}</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                <span>{CONTACT.address}</span>
              </li>
              <li className="flex items-start gap-3">
                <Globe2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                <span className="text-slate-500">{CONTACT.regions}</span>
              </li>
            </ul>
          </div>
        </div>
      </Reveal>
      <Reveal delay={0.2}>
        <div
          className="flex items-start gap-4 rounded-2xl border border-amber-200/80 bg-amber-50/70 p-6"
          data-testid="contact-sla-banner"
        >
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-amber-200 bg-white">
            <Siren className="h-5 w-5 text-amber-500" />
          </span>
          <div>
            <h3 className="font-display text-base font-semibold text-amber-800">Incident? We respond in &lt;24 hours.</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-slate-500">
              Emergency breach and audit-escalation response with rapid engagement. Call the hotline directly.
            </p>
          </div>
        </div>
      </Reveal>
    </div>
  );
}

export default function Contact() {
  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} data-testid="contact-page">
      <PageHeader
        chapter={{ no: "01", label: "Contact" }}
        title="Start your compliance"
        accent="journey."
        sub="Tell us where you're headed. A practice director — not a sales rep — will scope your engagement and respond within one business day."
      />
      <section className="px-6 pb-28 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <ConsultForm />
          </Reveal>
          <div className="lg:col-span-5">
            <HubPanel />
          </div>
        </div>
      </section>
    </motion.main>
  );
}
