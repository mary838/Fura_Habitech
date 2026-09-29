import { PortfolioCard } from "@/components/ui/PortfolioCard";
import { RevealGroup } from "@/components/ui/RevealGroup";
import { Section } from "@/components/ui/Section";
import { SplitLines } from "@/components/ui/SplitLines";
import { PORTFOLIO_COMPANIES } from "@/lib/home-content";

export function PortfolioSection() {
  return (
    <Section gap="2xl" reveal className="bg-surface-muted">
      <div className="flex w-full flex-col gap-6 lg:flex-row lg:items-start">
        <SplitLines
          as="h2"
          text="One group connects capital, development and delivery"
          className="text-display-xs font-medium text-subtitle lg:min-w-0 lg:flex-1 lg:text-display-md"
        />
        <SplitLines
          text="A specialized ecosystem spanning capital, prefabrication, construction, and educational platforms delivering innovative housing solutions across Australia."
          className="text-xl text-subtitle lg:min-w-0 lg:flex-1"
          startDelay={200}
        />
      </div>

      <RevealGroup className="grid w-full grid-cols-1 gap-6 lg:grid-cols-2">
        {PORTFOLIO_COMPANIES.map((company) => (
          <PortfolioCard key={company.title} {...company} />
        ))}
      </RevealGroup>
    </Section>
  );
}
