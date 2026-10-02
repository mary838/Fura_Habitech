import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { PageShell } from "@/components/layout/PageShell";
import { PageSchema } from "@/components/seo/PageSchema";
import { BuildingSystemsSection } from "@/components/companies/BuildingSystemsSection";
import { CompanyHero } from "@/components/companies/CompanyHero";
import { WhatWeOfferSection } from "@/components/companies/WhatWeOfferSection";

export const metadata: Metadata = pageMetadata({
  title: "Habitech Development",
  description:
    "Architecture and urban planning company. Architecture, master planning and urban design.",
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
      <CompanyHero
        image="/fura/companies/development/hero-urban.png"
        title="Habitech Development Pty Ltd"
        subtitle="Architecture and Urban Planning Company"
        tagline="Architecture, Master Planning & Urban Design"
        taglineTone="title"
        ctaLabel="Partner With Us"
        ctaHref="#contact-form"
        align="center"
        copyWidth="wide"
      />
      <WhatWeOfferSection />
      <BuildingSystemsSection />
    </PageShell>
  );
}
