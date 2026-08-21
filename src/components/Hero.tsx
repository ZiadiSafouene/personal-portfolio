import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import profile from "@/assets/profile.jpg";
import { contact } from "@/data/portfolio";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-24 sm:pt-40">
      <div className="veil pointer-events-none absolute inset-x-0 top-0 h-[520px]" />
      <div className="relative mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="eyebrow">AI Engineer · Deep Learning · AI Safety</p>
          <h1 className="mt-6 text-4xl leading-[1.05] font-semibold sm:text-6xl">
            Safouene Ziadi
            <span className="block text-muted-foreground">
              Building AI systems that can be explained.
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            AI Engineer , final-year software engineering student focused on AI systems, deep
            learning and interpretable machine learning. I build neural
            architectures from scratch in PyTorch and ship agentic AI systems —
            from multi-agent systems to safety tooling that guards
            LLM agents in production.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity duration-300 hover:opacity-85"
            >
              View Projects
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 text-sm font-medium transition-colors duration-300 hover:border-border-strong hover:bg-surface"
            >
              Get in Touch
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-6 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <MapPin className="size-3.5" /> {contact.location}
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="group relative mx-auto w-full max-w-sm"
        >
          <div className="rounded-xl border border-border p-2 transition-colors duration-300 group-hover:border-border-strong">
            <img
              src={profile}
              alt="Portrait of Safouene Ziadi"
              width={912}
              height={1104}
              className="aspect-[4/5] w-full rounded-lg object-cover grayscale transition-[filter,transform] duration-500 group-hover:scale-[1.01] group-hover:grayscale-0"
            />
          </div>
          <div className="hairline mt-4 pt-4 text-xs text-muted-foreground">
            Open to AI engineering & research roles
          </div>
        </motion.div>
      </div>
    </section>
  );
}
