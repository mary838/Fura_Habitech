import { CheckList } from "@/components/ui/CheckList";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import {
  TRAINING_CAPABILITIES,
  TRAINING_EXPERIENCE_PARAGRAPHS,
} from "@/lib/training-content";

/**
 * Copy and ticked capabilities beside the MoU photograph, with the signing
 * caption running the full width beneath them.
 */
export function TrainingExperienceSection() {
  return (
    <Section gap="lg" className="bg-surface">
      <div className="flex w-full flex-col items-center justify-between gap-4 lg:flex-row lg:gap-8">
        <Reveal
          from="left"
          className="flex w-full flex-col items-start gap-6 lg:w-[520px] lg:shrink-0"
        >
          <h2 className="w-full text-display-xs font-medium text-title lg:text-display-md">
            Experience modern building, physically.
          </h2>

          <div className="flex w-full flex-col gap-4 text-base text-subtitle lg:gap-5 lg:text-xl">
            {TRAINING_EXPERIENCE_PARAGRAPHS.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <CheckList items={TRAINING_CAPABILITIES} reveal revealDelay={120} />
        </Reveal>

        <Reveal from="right" className="w-full lg:w-[640px] lg:shrink-0">
          <MediaFrame
            src="/fura/companies/training/mou.jpg"
            alt="FURA Australia and the National University of Singapore, Chongqing Institute, signing the MoU"
            sizes="(min-width: 1024px) 640px, 100vw"
            className="h-[400px] lg:h-[480px]"
          />
        </Reveal>
      </div>

      <p className="w-full text-display-xs font-semibold text-subtitle lg:text-display-sm">
        Fura Australia and National University of Singapore, Chongqing
        Institute, MoU signing to establish a collaboration on Modern Method of
        Construction (MCC), education and industry development in Australia.
      </p>
    </Section>
  );
}
