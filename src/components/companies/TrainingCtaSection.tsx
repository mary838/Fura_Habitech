import { Button } from "@/components/ui/Button";
import { HeroBackdrop } from "@/components/ui/HeroBackdrop";
import { Reveal } from "@/components/ui/Reveal";

/** Full-bleed enrolment call to action between the programme and the MoU. */
export function TrainingCtaSection() {
  return (
    <section className="relative flex w-full flex-col items-center justify-center gap-[52px] overflow-hidden bg-[#222325] px-4 py-8 lg:px-[100px] lg:py-24">
      <HeroBackdrop
        src="/fura/companies/training/cta.jpg"
        overlay="bg-black/20"
      />

      <Reveal className="relative flex w-full flex-col items-center gap-4 text-center text-white">
        <h2 className="w-full text-display-md font-medium">
          Build the sustainable world of tomorrow.
        </h2>
        <p className="w-full text-base lg:w-[640px]">
          Enrollment is now open for the 2026 Academic Cohort. Accelerate your
          career in high-performance prefabricated structures.
        </p>
      </Reveal>

      <Reveal delay={120} className="relative">
        <Button href="#contact-form" variant="outline" className="border-white">
          Talk to an Advisor
        </Button>
      </Reveal>
    </section>
  );
}
