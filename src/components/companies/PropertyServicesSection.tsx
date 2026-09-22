import Image from "next/image";
import { RevealGroup } from "@/components/ui/RevealGroup";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PROPERTY_SERVICES } from "@/lib/companies-content";

/** The two sentences the frame splits with a hard break. */
const WHAT_WE_DO = [
  "We manage and operate real estate assets across their full lifecycle, from acquisition and development through to leasing, operations and long-term asset management.",
  "Our integrated approach combines property management, asset oversight and operational coordination to maintain asset quality, improve performance and support long-term value creation",
];

export function PropertyServicesSection() {
  return (
    <section className="w-full bg-surface-muted px-4 py-8 lg:px-[100px] lg:py-24">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-start gap-8 lg:gap-[52px]">
        <div className="flex w-full flex-col items-start gap-4">
          <h2 className="w-full text-display-xs font-medium text-title lg:text-display-md">
            what we do
          </h2>
          <p className="w-full text-base text-subtitle lg:text-xl">
            {WHAT_WE_DO[0]}
            <br />
            {WHAT_WE_DO[1]}
          </p>
        </div>

        <div className="flex w-full flex-col items-start gap-6">
          <SectionHeading title="Our Services" />

          {/*
            The cards are a fixed 384px in the frame and wrap three-up, leaving
            the last row short rather than stretching to fill it.
          */}
          <RevealGroup className="flex w-full flex-col flex-wrap gap-4 lg:flex-row lg:gap-6">
            {PROPERTY_SERVICES.map((item) => (
              <article
                key={item.title}
                className="group flex w-full flex-col items-start gap-5 rounded-xl border border-border-primary bg-surface p-8 card-hover hover:-translate-y-1 hover:shadow-[0_12px_24px_-8px_rgba(9,12,20,0.15)] lg:h-56 lg:w-[384px] active:-translate-y-1 active:shadow-[0_12px_24px_-8px_rgba(9,12,20,0.15)] touch:shadow-[0_12px_24px_-8px_rgba(9,12,20,0.15)]"
              >
                <div className="flex size-10 shrink-0 items-center justify-center rounded-[20px] bg-surface-muted transition-colors duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:bg-brand-secondary group-active:bg-brand-secondary">
                  <Image
                    src={item.icon}
                    alt=""
                    width={24}
                    height={24}
                    className="size-6"
                  />
                </div>

                <div className="flex w-full flex-col gap-2">
                  <h3 className="w-full text-xl font-semibold text-[#1b2b4b]">
                    {item.title}
                  </h3>
                  <p className="w-full text-sm text-subtitle">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
