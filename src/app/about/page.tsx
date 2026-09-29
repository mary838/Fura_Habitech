import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { PageShell } from "@/components/layout/PageShell";
import { PageSchema } from "@/components/seo/PageSchema";
import { CompanyHero } from "@/components/companies/CompanyHero";
import { KeyStatisticsSection } from "@/components/about/KeyStatisticsSection";
import { NewsSection } from "@/components/about/NewsSection";
import { OrganigramSection } from "@/components/about/OrganigramSection";
import { VisionSection } from "@/components/about/VisionSection";

export const metadata: Metadata = pageMetadata({
  title: "About Fura Group",
  description:
    "FURA is a Singapore-headquartered investment group focused on real estate, infrastructure, agriculture, hospitality, and industry.",
  path: "/about",
});

export default function AboutPage() {
  // The banner sits below a solid bar, as on the company pages, but its copy
  // is centred in the 500px band rather than bottom-aligned.
  return (
    <PageShell>
      <PageSchema
        crumbs={[
          { name: "Home", path: "/" },
          { name: "About Fura Group", path: "/about" },
        ]}
      />
      <CompanyHero
        image="/fura/images/about-hero.png"
        title="FURA Australia"
        subtitle="Integrated Prefabricated Building Solutions"
        tagline="From precision manufacturing to efficient construction."
        ctaLabel="Explore Our Capabilities"
        ctaHref="#contact-form"
        overlayImage="linear-gradient(257.6deg, rgba(255, 255, 255, 0.35) 22.702%, rgba(0, 0, 0, 0.35) 64.026%)"
        overlayImageMobile="linear-gradient(266.9deg, rgba(0, 0, 0, 0.297) 43.087%, rgba(0, 0, 0, 0.612) 81.538%)"
        align="center"
      />
      <OrganigramSection />
      <VisionSection />
      <KeyStatisticsSection />
      <NewsSection />
    </PageShell>
  );
}
