import { RevealGroup } from "@/components/ui/RevealGroup";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StatCard } from "@/components/ui/StatCard";
import { STATISTICS_PRIMARY, STATISTICS_SECONDARY } from "@/lib/about-content";

export function KeyStatisticsSection() {
  return (
    <Section gap="xl-tight" padding="tight" reveal className="bg-surface-muted">
      <SectionHeading
        gap="lg"
        align="center"
        title="FURA Australia Track Record"
        description="A snapshot of our experience, scale, and global reach across real asset investment and development."
      />

      {/*
        From `lg` the two rows share one grid with equal-height rows, and each
        row stretches its cards, so all five tiles match the tallest one.
      */}
      <div className="flex w-full flex-col items-start gap-4 lg:grid lg:auto-rows-fr lg:gap-6">
        <RevealGroup className="flex w-full flex-col justify-center gap-4 lg:h-full lg:flex-row lg:items-stretch">
          {STATISTICS_PRIMARY.map((stat) => (
            <div key={stat.value} className="w-full lg:w-[397.333px]">
              <StatCard {...stat} />
            </div>
          ))}
        </RevealGroup>

        <RevealGroup delay={180} className="grid w-full grid-cols-1 gap-4 lg:h-full lg:grid-cols-3">
          {STATISTICS_SECONDARY.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </RevealGroup>
      </div>
    </Section>
  );
}
