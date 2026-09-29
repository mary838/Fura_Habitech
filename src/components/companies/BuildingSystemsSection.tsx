import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { RevealGroup } from "@/components/ui/RevealGroup";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/cn";
import { BUILDING_SYSTEMS } from "@/lib/companies-content";

/**
 * Two layouts from the one list. Below `lg` each system is a white card — a
 * 296px photo over its title and copy — stacked 16px apart. From `lg` the card
 * chrome drops away and each system becomes an open 392px row, copy beside a
 * 568px photo, alternating sides and spaced 96px apart.
 */
export function BuildingSystemsSection() {
  return (
    <section className="w-full bg-surface-muted px-4 py-6 lg:px-[100px] lg:py-24">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center gap-10 lg:gap-16">
        <SectionHeading
          align="center"
          title="Construction Materials & Building Systems"
          description="High-performance material systems that support efficient, durable, and environmentally responsible development outcomes."
          descriptionSize="base"
        />

        <RevealGroup className="flex w-full flex-col gap-4 lg:gap-24">
          {BUILDING_SYSTEMS.map((system, index) => {
            const reversed = index % 2 === 1;
            return (
              <article
                key={system.title}
                className={cn(
                  "flex w-full flex-col gap-4 overflow-hidden rounded-2xl border border-border-primary bg-surface",
                  "lg:h-[392px] lg:items-center lg:gap-16 lg:overflow-visible lg:rounded-none lg:border-0 lg:bg-transparent",
                  reversed ? "lg:flex-row-reverse" : "lg:flex-row",
                )}
              >
                <Reveal
                  from={reversed ? "right" : "left"}
                  className="order-last flex flex-col items-start gap-1 px-6 pb-8 lg:order-none lg:min-w-0 lg:flex-1 lg:gap-6 lg:p-0"
                >
                  <h3 className="w-full text-xl font-semibold text-title lg:text-display-md lg:font-medium">
                    {system.title}
                  </h3>
                  <p className="w-full text-sm text-subtitle lg:text-xl">
                    {system.description}
                  </p>
                </Reveal>

                <div className="relative h-[296px] w-full shrink-0 overflow-hidden lg:h-full lg:w-[568px] lg:rounded-xl">
                  <Image
                    src={system.image}
                    alt={system.title}
                    fill
                    sizes="(min-width: 1024px) 568px, 100vw"
                    className="object-cover"
                  />
                </div>
              </article>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
