import { OrganigramConnectors } from "@/components/about/OrganigramConnectors";
import { OrganigramCard } from "@/components/ui/OrganigramCard";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  ORGANIGRAM_PARENT,
  ORGANIGRAM_SUBSIDIARIES,
} from "@/lib/about-content";

/**
 * The diagram sits in the 1200px container, giving the six subsidiary cards
 * ~190px each; on mobile the cards stack in the frame's 361px column. The connectors fill the design's 120px gap between the
 * holding card and the subsidiary row.
 */
export function OrganigramSection() {
  return (
    <section className="w-full bg-surface-muted px-4 py-8 lg:p-[100px]">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-6 lg:gap-12">
        <SectionHeading
          align="center"
          title="A Global and Connected Real Asset Platform"
          description="First United Real Asset Platform connecting Singapore, USA, China, Cambodia, Japan and Australia"
          descriptionSize="base"
        />

        <Reveal className="mx-auto flex w-full max-w-[361px] flex-col items-center gap-3 lg:max-w-[1200px] lg:gap-0">
          <OrganigramCard {...ORGANIGRAM_PARENT} emphasis />

          <OrganigramConnectors count={ORGANIGRAM_SUBSIDIARIES.length} />

          <div className="flex w-full flex-col justify-center gap-3 lg:flex-row lg:gap-3">
            {ORGANIGRAM_SUBSIDIARIES.map((entry) => (
              <div
                key={entry.name}
                className="flex flex-col items-center lg:min-w-0 lg:flex-1"
              >
                <OrganigramCard {...entry} className="lg:flex-1" />
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

