import { MediaFrame } from "@/components/ui/MediaFrame";
import { RevealGroup } from "@/components/ui/RevealGroup";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DELIVERY_IMAGES, DELIVERY_POINTS } from "@/lib/companies-content";

export function DeliveryEfficiencySection() {
  return (
    <Section gap="xl" className="bg-surface lg:bg-surface-muted">
      <SectionHeading
        align="center"
        gap="xs"
        title="Modular delivery targets labour and time efficiency"
        description="More work moves into a controlled factory environment while site works progress in parallel."
      />

      <div className="flex w-full flex-col gap-6 lg:flex-row lg:items-start lg:gap-10">
        {/*
          From `lg` the list spans the image column's full height and spreads
          its four points evenly down it, set at the frame's larger scale.
        */}
        <RevealGroup
          as="ol"
          step={120}
          className="flex w-full flex-col gap-5 lg:min-w-0 lg:flex-1 lg:justify-between lg:self-stretch lg:py-6"
        >
          {DELIVERY_POINTS.map((point) => (
            <li
              key={point.number}
              className="flex w-full items-start gap-4 lg:gap-[22.222px]"
            >
              <span className="w-9 shrink-0 text-base font-semibold text-role lg:w-[50px] lg:text-[22.222px] lg:leading-[33.333px]">
                {point.number}
              </span>
              <span className="flex min-w-0 flex-1 flex-col gap-1 lg:gap-[5.556px]">
                <span className="text-base font-medium text-title lg:text-[22.222px] lg:leading-[33.333px]">
                  {point.title}
                </span>
                <span className="text-sm text-subtitle lg:text-[19.444px] lg:leading-[27.778px]">
                  {point.description}
                </span>
              </span>
            </li>
          ))}
        </RevealGroup>

        {/* The four delivery stages, two up, in a 500px column beside the list. */}
        <RevealGroup className="grid w-full grid-cols-1 gap-3 lg:w-[500px] lg:shrink-0 lg:grid-cols-2">
          {DELIVERY_IMAGES.map((image) => (
            <MediaFrame
              key={image.src}
              src={image.src}
              alt={image.alt}
              sizes="(min-width: 1024px) 244px, 100vw"
              radius="md"
              className="h-[242px]"
            />
          ))}
        </RevealGroup>
      </div>
    </Section>
  );
}
