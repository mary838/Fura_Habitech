import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SplitLines } from "@/components/ui/SplitLines";
import { ProjectSlider } from "@/components/home/ProjectSlider";

/**
 * The header sits in the 1200px container; the three project cards slide
 * edge to edge beneath it.
 *
 * The header is a grid so one set of elements serves both frames: stacked
 * title → description → button on mobile, and from `lg` the title and button
 * share a 640px column with the description alongside.
 */
export function OurProjectsSection() {
  return (
    <section className="flex w-full flex-col items-center gap-8 overflow-hidden bg-surface py-8 lg:gap-16 lg:py-24">
      <div className="grid w-full max-w-[1200px] grid-cols-1 items-start justify-items-start gap-4 px-4 lg:box-content lg:grid-cols-[640px_minmax(0,1fr)] lg:gap-x-0 lg:px-[100px]">
        <SplitLines
          as="h2"
          text="Our Projects"
          className="text-display-xs font-medium text-title lg:col-start-1 lg:row-start-1 lg:text-display-md"
        />
        <Reveal
          from="right"
          className="lg:col-start-2 lg:row-span-2 lg:row-start-1"
        >
          <p className="text-base text-subtitle lg:text-xl">
            Discover how Fura Habitech transforms Australian real assets. From
            high-yield landbanking initiatives to community-first residential
            developments.
          </p>
        </Reveal>
        <Reveal from="left" className="lg:col-start-1 lg:row-start-2">
          <Button href="/properties">See all projects</Button>
        </Reveal>
      </div>

      <ProjectSlider />
    </section>
  );
}
