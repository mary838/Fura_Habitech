import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { PageShell } from "@/components/layout/PageShell";
import { PageSchema } from "@/components/seo/PageSchema";
import { BuildingSystemsSection } from "@/components/companies/BuildingSystemsSection";
import { DevelopmentHeroSection } from "@/components/companies/DevelopmentHeroSection";
import { EnvironmentalSection } from "@/components/companies/EnvironmentalSection";
import { WhatWeOfferSection } from "@/components/companies/WhatWeOfferSection";

export const metadata: Metadata = pageMetadata({
  title: "Habitech Development",
  description:
    "Integrated construction solutions. Crafting excellence, building success.",
  path: "/companies/habitech-development",
});

export default function HabitechDevelopmentPage() {
  return (
    <PageShell>
      <PageSchema
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Habitech Development", path: "/companies/habitech-development" },
        ]}
      />
      <DevelopmentHeroSection />
      <WhatWeOfferSection />
      <EnvironmentalSection />
      <BuildingSystemsSection />
    </PageShell>
  );
}
