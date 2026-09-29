import { RevealGroup } from "@/components/ui/RevealGroup";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TrainingCourseCard } from "@/components/companies/TrainingCourseCard";
import { TRAINING_COURSES, TRAINING_STAGES } from "@/lib/training-content";

/**
 * The programme itself: the five-stage strip, then one card per module.
 *
 * The strip is a single bordered panel — five columns split by vertical rules
 * on desktop, stacked rows split by horizontal ones below `lg`, which is why
 * the dividers are drawn per cell rather than with `divide-*`.
 */
export function TrainingProgramSection() {
  return (
    <Section gap="xl" reveal className="bg-surface-muted">
      <SectionHeading
        align="center"
        title="Vocational Training in Modern Methods of Construction"
        description="A one-year vocational training program focused on modern prefabricated and modular construction, combining technical knowledge with practical industry experience."
        descriptionSize="xl"
        gap="lg"
      />

      <div className="flex w-full flex-col items-center gap-4 lg:gap-8">
        <h3 className="w-full text-center text-display-xs font-medium text-title lg:text-display-sm">
          Five stages. One job-ready MMC capability.
        </h3>

        <RevealGroup
          step={70}
          className="flex w-full flex-col items-stretch rounded-2xl border border-border-primary bg-surface lg:flex-row"
        >
          {TRAINING_STAGES.map((stage, index) => (
            <div
              key={stage.code}
              className={`flex flex-col items-center gap-3 px-6 py-8 lg:min-w-0 lg:flex-1 lg:gap-4 ${
                index < TRAINING_STAGES.length - 1
                  ? "border-b border-border-primary lg:border-b-0 lg:border-r"
                  : ""
              }`}
            >
              <p className="text-base font-semibold text-title">{stage.code}</p>
              <p className="w-full text-center text-sm font-medium text-title">
                {stage.summary}
              </p>
            </div>
          ))}
        </RevealGroup>

        <RevealGroup className="flex w-full flex-col gap-4 lg:gap-6">
          {TRAINING_COURSES.map((course) => (
            <TrainingCourseCard key={course.code} course={course} />
          ))}
        </RevealGroup>
      </div>
    </Section>
  );
}
