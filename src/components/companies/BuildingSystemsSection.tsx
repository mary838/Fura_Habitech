import Image from "next/image";
import { RevealGroup } from "@/components/ui/RevealGroup";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BUILDING_SYSTEMS } from "@/lib/companies-content";

/**
 * Each system is its own 800px row — copy on the left, a full-bleed photo
 * filling the right half — stacked 16px apart and centred in the section
 * rather than running the full 1200px container.
 */
export function BuildingSystemsSection() {
  return (
    <section className="w-full bg-surface-muted px-4 py-8 lg:px-[100px] lg:py-24">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center gap-6 lg:gap-10">
        <SectionHeading
          align="center"
          title="Construction Materials & Building Systems"
          description="High-performance material systems that support efficient, durable, and environmentally responsible development outcomes."
          descriptionSize="base"
        />

        <RevealGroup className="flex w-full flex-col items-center gap-4">
          {BUILDING_SYSTEMS.map((system) => (
            <article
              key={system.title}
              className="group card-hover flex w-full max-w-[800px] flex-col overflow-hidden rounded-2xl border border-border-primary bg-surface hover:-translate-y-1 hover:shadow-lg lg:h-[300px] lg:flex-row lg:items-center active:-translate-y-1 active:shadow-lg touch:shadow-lg"
            >
              <div className="flex flex-col items-start gap-4 p-6 lg:h-full lg:min-w-0 lg:flex-1 lg:justify-center lg:p-8">
                <h3 className="w-full text-display-xs font-semibold text-title lg:text-display-sm">
                  {system.title}
                </h3>
                <p className="w-full text-sm text-subtitle lg:text-base">
                  {system.description}
                </p>
              </div>

              {/* Photo fills its half of the row; 200px tall once stacked. */}
              <div className="relative order-first h-[200px] w-full shrink-0 lg:order-none lg:h-full lg:w-auto lg:min-w-0 lg:flex-1">
                <Image
                  src={system.image}
                  alt={system.title}
                  fill
                  sizes="(min-width: 1024px) 400px, 100vw"
                  className="object-cover transition-transform duration-200 ease-out group-hover:scale-105 group-active:scale-105"
                />
              </div>
            </article>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
