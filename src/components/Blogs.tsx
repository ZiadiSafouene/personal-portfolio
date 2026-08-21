import { ArrowUpRight } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { blogPosts } from "@/data/portfolio";

export function Blogs() {
  return (
    <section id="blogs" className="scroll-mt-24 border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading
          eyebrow="Blogs"
          title="Writing on AI, safety and interpretability."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {blogPosts.map((post, i) => (
            <Reveal key={post.title} delay={i * 0.06}>
              <a
                href={post.url}
                target="_blank"
                rel="noreferrer"
                className="card-elevated group flex h-full flex-col rounded-xl p-6"
              >
                <div className="flex items-center gap-3 text-[11px] text-muted-foreground">
                  <span>{post.date}</span>
                  <span className="size-1 rounded-full bg-border-strong" />
                  <span>{post.readingTime}</span>
                </div>
                <h3 className="mt-4 text-base font-semibold">{post.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {post.excerpt}
                </p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm">
                  Read article
                  <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
