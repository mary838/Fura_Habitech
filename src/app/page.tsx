import { PageShell } from "@/components/layout/PageShell";
import { AboutSection } from "@/components/home/AboutSection";
import { GovernanceSection } from "@/components/home/GovernanceSection";
import { HousingHero } from "@/components/home/HousingHero";
import { OurProjectsSection } from "@/components/home/OurProjectsSection";
import { PartnerRibbon } from "@/components/home/PartnerRibbon";
import { PortfolioSection } from "@/components/home/PortfolioSection";
import { StrategiesSection } from "@/components/home/StrategiesSection";

export default function Home() {
  return (
    <PageShell nav="transparent">
      <HousingHero />
      <AboutSection />
      <StrategiesSection />
      <PortfolioSection />
      <OurProjectsSection />
      <GovernanceSection />
      <PartnerRibbon />
    </PageShell>
  );
}
