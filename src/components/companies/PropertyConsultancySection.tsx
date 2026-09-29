import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/cn";
import { PROPERTY_CONSULTANCY } from "@/lib/companies-content";

/**
 * Three service rows — copy top-aligned beside a 568px photo, alternating sides from
 * `lg` and 96px apart; stacked copy-over-photo, 24px apart, below that.
 */
export function PropertyConsultancySection() {
  return (
    <section className="w-full bg-surface px-4 py-8 lg:px-[100px] lg:py-24">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center gap-6 lg:gap-24">
        <SectionHeading
          align="center"
          title="Property consultancy offering end-to-end real estate solutions and management"
          description="From development and acquisition to leasing and ongoing operations, our team delivers practical real estate solutions designed to protect value and create long-term growth."
          className="lg:[&>h2]:max-w-[899px]"
        />

        <div className="flex w-full flex-col gap-6 lg:gap-24">
          {PROPERTY_CONSULTANCY.map((service, index) => {
            const reversed = index % 2 === 1;
            return (
              <div
                key={service.title}
                className={cn(
                  "flex w-full flex-col gap-6 lg:items-start lg:gap-16",
                  reversed ? "lg:flex-row-reverse" : "lg:flex-row",
                )}
              >
                <Reveal
                  from={reversed ? "right" : "left"}
                  className={cn(
                    "flex flex-col items-start lg:min-w-0 lg:flex-1",
                    service.gap === "lg" ? "gap-6" : "gap-4",
                  )}
                >
                  <h3 className="w-full text-display-xs font-medium text-title lg:text-display-md">
                    {service.title}
                  </h3>
                  {service.blocks.map((block, blockIndex) => {
                    if (block.kind === "paragraph") {
                      return (
                        <p key={blockIndex} className="w-full text-xl text-subtitle">
                          {block.text}
                        </p>
                      );
                    }
                    return (
                      <ul
                        key={blockIndex}
                        className={cn(
                          "flex w-full list-disc flex-col pl-[30px] text-xl",
                          service.gap === "lg" ? "gap-6" : "gap-4",
                          block.kind === "list" ? "text-title" : "text-subtitle",
                        )}
                      >
                        {block.kind === "list"
                          ? block.items.map((item) => <li key={item}>{item}</li>)
                          : block.items.map((point) => (
                              <li key={point.label}>
                                <strong className="font-semibold text-title">
                                  {point.label}
                                </strong>{" "}
                                {point.text}
                              </li>
                            ))}
                      </ul>
                    );
                  })}
                </Reveal>

                <Reveal
                  from={reversed ? "left" : "right"}
                  className="w-full lg:w-[568px] lg:shrink-0"
                >
                  <div
                    className={cn(
                      "relative w-full overflow-hidden rounded-xl",
                      service.imageHeight === 494 ? "h-[494px]" : "h-[502px]",
                    )}
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(min-width: 1024px) 568px, 100vw"
                      className="object-cover"
                    />
                  </div>
                </Reveal>
              </div>
            );
          })}
        </div>

        <Button href="/properties">Check our Real Estate Project</Button>
      </div>
    </section>
  );
}
