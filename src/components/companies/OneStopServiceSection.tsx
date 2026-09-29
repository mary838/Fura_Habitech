import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceStepRow } from "@/components/ui/ServiceStepRow";
import { MANUFACTURING_STEPS } from "@/lib/companies-content";

export function OneStopServiceSection() {
  return (
    <Section gap="xl" className="bg-surface-muted">
      <SectionHeading
        align="center"
        title="One Stop Service"
        description="Complete solutions, delivered with precision"
      />

      {/* Six rows, 24px apart on mobile and 46px from `lg`. */}
      <div className="flex w-full flex-col gap-6 lg:gap-[46px]">
        {MANUFACTURING_STEPS.map((step, index) => (
          <ServiceStepRow
            key={step.number}
            {...step}
            reversed={index % 2 === 1}
          />
        ))}
      </div>
    </Section>
  );
}
