import { Reveal, SectionHeading } from "@/components/Reveal";
import { experienceData, educationData, type TimelineItem } from "@/data/portfolio";

function Timeline({ title, items }: { title: string; items: TimelineItem[] }) {
  return (
    <div>
      <p className="eyebrow">{title}</p>
      <ol className="mt-8 border-l border-border">
        {items.map((item, i) => (
          <Reveal key={item.org + item.role} delay={i * 0.06}>
            <li className="relative pb-10 pl-7 last:pb-0 mb-6">
              <span className="absolute top-1.5 -left-[4.5px] size-2 rounded-full bg-border-strong" />
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-base font-semibold">{item.role}</h3>
                <span className="text-xs text-muted-foreground">{item.period}</span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">
                {item.org} · {item.location}
              </p>
              <ul className="mt-4 space-y-2">
                {item.points.map((p) => (
                  <li
                    key={p}
                    className="text-sm leading-relaxed text-muted-foreground before:mr-3 before:text-border-strong before:content-['—']"
                  >
                    {p}
                  </li>
                ))}
              </ul>
            </li>
          </Reveal>
        ))}
      </ol>
    </div>
  );
}

export function ExperienceEducation() {
  return (
    <section id="experience" className="scroll-mt-24 border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading
          eyebrow="Experience & Education"
          title="Where the work happened."
        />
        <div className="mt-14 grid gap-14 lg:grid-cols-2">
          <Timeline title="Professional Experience" items={experienceData} />
          <Timeline title="Education" items={educationData} />
        </div>
      </div>
    </section>
  );
}
