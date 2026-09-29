import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { CheckList } from "@/components/ui/CheckList";
import { Reveal } from "@/components/ui/Reveal";
import { FURA_HABITECH_PHILOSOPHY } from "@/lib/companies-content";

/**
 * Philosophy checklist beside a photo that stretches to the copy's height;
 * the photo drops below at a fixed 450px on mobile. Like the frame, this runs
 * the full padded 1240px width rather than the 1200px container.
 */
export function FuraStatsSection() {
  return (
    <section className="w-full bg-surface-muted px-4 py-8 lg:px-[100px] lg:py-24">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col gap-8 lg:flex-row lg:items-stretch">
        <Reveal
          from="left"
          className="flex flex-col items-start gap-4 lg:min-w-0 lg:flex-1 lg:gap-6"
        >
          <h2 className="w-full text-display-xs font-medium text-title lg:text-display-md">
            Our Philosophy
          </h2>
          <div className="flex w-full flex-col gap-4">
            <p className="w-full text-xl font-medium text-subtitle">
              Capital Preservation First
            </p>
            <CheckList items={FURA_HABITECH_PHILOSOPHY} align="center" />
          </div>
          <Button href="#contact-form">Partner With Us</Button>
        </Reveal>

        <Reveal
          from="right"
          className="relative h-[450px] w-full overflow-hidden rounded-xl lg:h-auto lg:min-w-0 lg:flex-1"
        >
          <Image
            src="/fura/companies/fura-habitech/philosophy.png"
            alt="FURA Habitech office building"
            fill
            sizes="(min-width: 1024px) 604px, 100vw"
            className="object-cover"
          />
        </Reveal>
      </div>
    </section>
  );
}
