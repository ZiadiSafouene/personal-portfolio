import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { ExperienceEducation } from "@/components/ExperienceEducation";
import { Projects } from "@/components/Projects";
import { ResumeSection } from "@/components/ResumeSection";
import { Blogs } from "@/components/Blogs";
import { Contact } from "@/components/Contact";

const title = "Safouene Ziadi — AI Engineer & Deep Learning Researcher";
const description =
  "Portfolio of Safouene Ziadi: AI engineer focused on deep learning, interpretable ML and agentic AI systems built with PyTorch, LangChain and CrewAI.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <About />
        <ExperienceEducation />
        <Projects />
        <ResumeSection />
        <Blogs />
        <Contact />
      </main>
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-10 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Safouene Ziadi. All rights reserved.</p>
          <p>Designed and built in Monastir, Tunisia.</p>
        </div>
      </footer>
    </div>
  );
}
