import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { PageShell } from "@/components/layout/PageShell";
import { PageSchema } from "@/components/seo/PageSchema";
import { CompanyHero } from "@/components/companies/CompanyHero";
import { PropertyServicesSection } from "@/components/companies/PropertyServicesSection";
import { OurProjectsSection } from "@/components/home/OurProjectsSection";

export const metadata: Metadata = pageMetadata({
  title: "Habitech Real Estate Property",
  description:
    "Property sales, market positioning, and buyer engagement across Australia and international markets.",
  path: "/companies/habitech-property",
});

export default function HabitechPropertyPage() {
  return (
    <PageShell>
      <PageSchema
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Habitech Real Estate Property", path: "/companies/habitech-property" },
        ]}
      />
      <CompanyHero
        image="/fura/companies/property/hero.png"
        title="Habitech Real Estate Property Pty Ltd"
        subtitle="Integrated Construction Solutions"
        tagline="Crafting Excellence, Building Success"
        ctaLabel="Partner With Us"
        ctaHref="#contact-form"
      />
      <PropertyServicesSection />
      {/* Same frame as the home page's, cards and CTA included. */}
      <OurProjectsSection />
    </PageShell>
  );
}
