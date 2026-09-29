import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { PageShell } from "@/components/layout/PageShell";
import { PageSchema } from "@/components/seo/PageSchema";
import { CompanyHero } from "@/components/companies/CompanyHero";
import { PropertyServicesSection } from "@/components/companies/PropertyServicesSection";
import { PropertyConsultancySection } from "@/components/companies/PropertyConsultancySection";

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
        subtitle="Real Estate Management"
        tagline="Integrated asset, property and operational management."
        ctaLabel="Partner With Us"
        ctaHref="#contact-form"
        overlayImage="linear-gradient(250.9deg, rgba(255, 255, 255, 0) 2.998%, rgba(19, 19, 19, 0.4) 56.888%)"
        overlayImageMobile="linear-gradient(264.5deg, rgba(255, 255, 255, 0) 2.998%, rgba(19, 19, 19, 0.4) 56.888%)"
      />
      <PropertyServicesSection />
      <PropertyConsultancySection />
    </PageShell>
  );
}
