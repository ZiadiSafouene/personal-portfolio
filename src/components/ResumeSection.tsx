import { Download } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/Reveal";
import cvAsset from "@/assets/cv.pdf.asset.json";

const qualifications = [

];

export function ResumeSection() {
  return (
    <section id="resume" className="scroll-mt-24 border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading eyebrow="Resume" title="The short version, on paper." />
        <Reveal delay={0.06}>
          <div className="card-elevated mt-14 rounded-xl p-8 sm:p-10">
            <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <p className="font-display text-xl font-semibold">
                  Safouene Ziadi — AI Engineer
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Monastir , Tunisia
                </p>
                {/* <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                  {qualifications.map((q) => (
                    <li
                      key={q}
                      className="text-sm leading-relaxed text-muted-foreground before:mr-3 before:text-border-strong before:content-['—']"
                    >
                      {q}
                    </li>
                  ))}
                </ul> */}
              </div>
              <a
                href={cvAsset.url}
                download="Safouene_Ziadi_CV.pdf"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity duration-300 hover:opacity-85"
              >
                <Download className="size-4" /> Download Resume
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
