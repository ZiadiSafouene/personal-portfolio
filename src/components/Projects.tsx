import { ArrowUpRight } from "lucide-react";
import { GithubIcon as Github } from "@/components/BrandIcons";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { projectsData } from "@/data/portfolio";

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading
          eyebrow="Projects"
          title="Selected research & engineering work."
          lead="Architectures built from first principles, agentic systems, and safety tooling for LLM agents."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {projectsData.map((project, i) => (
            <Reveal key={project.title} delay={(i % 2) * 0.06}>
              <article className="card-elevated group flex h-full flex-col overflow-hidden rounded-xl">
                <div className="overflow-hidden border-b border-border">
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    loading="lazy"
                    width={1200}
                    height={800}
                    className="aspect-[3/2] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-border px-2.5 py-1 text-[11px] text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 flex flex-wrap items-center gap-5 pt-5 hairline">
                    {project.projectUrl ? (
                      <a
                        href={project.projectUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm transition-opacity duration-300 hover:opacity-70"
                      >
                        Live Demo <ArrowUpRight className="size-4" />
                      </a>
                    ) : null}
                    {project.repoUrl ? (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground"
                      >
                        <Github className="size-4" /> Source Code
                      </a>
                    ) : null}
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
