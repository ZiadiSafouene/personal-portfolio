import { Reveal, SectionHeading } from "@/components/Reveal";
import { skillGroups } from "@/data/portfolio";

const highlights = [
  {
    stat: "AI Systems Safety",
    label:
      "Multi-agent systems with LangChain and CrewAI, safety tools for agent workflows  .",
  },
  {
    stat: "AI From scratch",
    label:
      "Transformer , XAI , and embedding architectures implemented line by line in PyTorch — no pretrained shortcuts.",
  },
  {
    stat: "150+ learners",
    label:
      "Trained students in ML, deep learning and C/C++ across institutional and club programs.",
  },
];

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
      <SectionHeading
        eyebrow="About"
        title="Research depth, engineering discipline."
        lead="I work at the intersection of deep learning research and applied AI engineering. My focus is AI Safety — designing systems whose internal representations and decisions can be inspected, explained and trusted, then shipping them as real software."
      />

      <div className="mt-14 grid gap-4 sm:grid-cols-3">
        {highlights.map((h, i) => (
          <Reveal key={h.stat} delay={i * 0.06}>
            <div className="card-elevated h-full rounded-xl p-6">
              <p className="font-display text-lg font-semibold">{h.stat}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {h.label}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-14 space-y-8">
        {skillGroups.map((group, i) => (
          <Reveal key={group.label} delay={i * 0.06}>
            <div className="grid gap-4 sm:grid-cols-[200px_1fr]">
              <p className="eyebrow pt-1">{group.label}</p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="card-elevated rounded-md px-3 py-1.5 text-xs text-muted-foreground hover:text-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
