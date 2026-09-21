import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { PageShell } from "@/components/layout/PageShell";
import { PageSchema } from "@/components/seo/PageSchema";
import { CompanyHero } from "@/components/companies/CompanyHero";
import { TrainingCtaSection } from "@/components/companies/TrainingCtaSection";
import { TrainingExperienceSection } from "@/components/companies/TrainingExperienceSection";
import { TrainingPartnersSection } from "@/components/companies/TrainingPartnersSection";
import { TrainingProgramSection } from "@/components/companies/TrainingProgramSection";

/** The training banner's own scrim, shallower than the company default. */
const HERO_OVERLAY =
  "linear-gradient(250.88deg, rgba(255, 255, 255, 0) 2.9975%, rgba(19, 19, 19, 0.4) 56.888%)";

export const metadata: Metadata = pageMetadata({
  title: "Habitech Training Program",
  description:
    "A one-year vocational training program in Modern Methods of Construction, building long-term MMC capability in Australia.",
  path: "/companies/habitech-training",
  image: { url: "/fura/companies/training/hero.jpg" },
});

export default function HabitechTrainingPage() {
  return (
    <PageShell>
      <PageSchema
        crumbs={[
          { name: "Home", path: "/" },
          {
            name: "Habitech Training Program",
            path: "/companies/habitech-training",
          },
        ]}
      />
      <CompanyHero
        image="/fura/companies/training/hero.jpg"
        title="Habitech Training Program"
        subtitle="Integrated Construction Solutions"
        tagline="Building Long-Term MMC Capability in Australia"
        ctaLabel="Talk to an Advisor"
        ctaHref="#contact-form"
        overlayImage={HERO_OVERLAY}
      />
      <TrainingProgramSection />
      <TrainingCtaSection />
      <TrainingExperienceSection />
      <TrainingPartnersSection />
    </PageShell>
  );
}
