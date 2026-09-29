import { RevealGroup } from "@/components/ui/RevealGroup";
import { ScrollHint } from "@/components/ui/ScrollHint";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StrategyCard } from "@/components/ui/StrategyCard";
import { FH_COMPARISON } from "@/lib/fura-habitech-content";
import { STRATEGIES } from "@/lib/home-content";

export function StrategyComparisonSection() {
  return (
    <section className="w-full bg-surface-muted px-4 py-8 lg:px-[100px] lg:py-24">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center gap-8">
        <SectionHeading
          gap="2xs"
          className="justify-center"
          title="Strategy Comparison"
        >
          <p className="w-full text-base text-[#717680]">
            Choose the strategy that best fits your investment goals. Each
            class offers a distinct balance of return profile, hold period
            and risk exposure.
          </p>
        </SectionHeading>

        <div className="flex w-full flex-col items-start gap-8">
          {/* The same three photo cards the home page shows. */}
          <RevealGroup className="flex w-full flex-col items-stretch gap-4 lg:flex-row lg:items-start">
            {STRATEGIES.map((strategy) => (
              <StrategyCard key={strategy.title} {...strategy} />
            ))}
          </RevealGroup>

          {/*
            The table keeps its 1200px desktop width on mobile in the design, so
            it scrolls horizontally rather than reflowing — `ScrollHint` supplies
            the arrows and progress that say so, and stays out of the way at the
            widths where the whole table already fits.
          */}
          <ScrollHint label="Strategy comparison">
            <div className="min-w-[900px] overflow-hidden rounded-lg border border-border-primary text-sm">
              <div className="flex w-full items-start gap-4 bg-utility-gray-900 px-6 py-4 font-medium text-white">
                <p className="min-w-0 flex-1">STRATEGY</p>
                <p className="min-w-0 flex-1">TARGET RETURN</p>
                <p className="min-w-0 flex-1">TYPICAL HOLD</p>
                <p className="min-w-0 flex-1">KEY FOCUS</p>
              </div>

              {FH_COMPARISON.map((row, index) => (
                <div
                  key={row.klass}
                  className={`flex w-full items-center gap-4 bg-surface px-6 py-5 ${
                    index < FH_COMPARISON.length - 1
                      ? "border-b border-border-primary"
                      : ""
                  }`}
                >
                  <div className="flex min-w-0 flex-1 flex-col gap-1 whitespace-nowrap">
                    <p className="font-semibold text-title">{row.klass}</p>
                    <p className="text-subtitle">{row.strategy}</p>
                  </div>
                  <div className="min-w-0 flex-1 font-semibold text-title">
                    {row.targetReturn.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                  <p className="min-w-0 flex-1 text-subtitle">{row.hold}</p>
                  <p className="min-w-0 flex-1 text-subtitle">{row.focus}</p>
                </div>
              ))}
            </div>
          </ScrollHint>
        </div>
      </div>
    </section>
  );
}
