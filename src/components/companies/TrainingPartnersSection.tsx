import Image from "next/image";
import { RevealGroup } from "@/components/ui/RevealGroup";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TRAINING_PARTNERS } from "@/lib/training-content";

/** Academic and industry marks backing the programme. */
export function TrainingPartnersSection() {
  return (
    <Section gap="md" reveal className="bg-surface-muted">
      <SectionHeading
        align="center"
        gap="sm"
        title="Supported by leading organizations."
        description="Habitech Training is supported by respected academic and industry partners."
        descriptionSize="xl"
      />

      <RevealGroup className="flex w-full flex-col items-center justify-center gap-8 lg:flex-row lg:items-center">
        {TRAINING_PARTNERS.map((partner) => (
          <Image
            key={partner.name}
            src={partner.logo}
            alt={partner.name}
            width={partner.width}
            height={partner.height}
            quality={75}
            className="h-[112px] w-auto object-contain"
          />
        ))}
      </RevealGroup>
    </Section>
  );
}
