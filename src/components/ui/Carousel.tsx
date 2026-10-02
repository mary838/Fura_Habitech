"use client";

import { cn } from "@/lib/cn";
import { CarouselArrows, useCarouselControls } from "@/components/ui/carousel-controls";

type CarouselProps = {
  children: React.ReactNode;
  className?: string;
  /** Accessible name for the scrollable region. */
  label: string;
  /**
   * From `lg`, run the row past the container to the right edge of the
   * screen, so the next card peeks in (the About page's News frame). The
   * section must clip horizontal overflow (`overflow-x-clip`).
   */
  bleed?: boolean;
};

/**
 * Horizontally scrolling row with a previous/next pair beneath it.
 *
 * The row is a plain scroll container, so it stays usable by touch, trackpad
 * and keyboard whether or not the buttons are reachable — they only paginate
 * it.
 */
export function Carousel({
  children,
  className,
  label,
  bleed = false,
}: CarouselProps) {
  const { trackRef, active, step } = useCarouselControls();

  return (
    <div className="flex w-full flex-col gap-8">
      {/*
        Below `lg` the row runs out to the edge of the screen with the page's
        16px gutter, so the first card starts flush with the heading; the
        arrows (and a swipe) bring the next one in. From `lg` it is exactly the
        container: three 384px cards and two 24px gaps fill 1200px, so a full
        set of three is shown and the arrows page one card at a time.
      */}
      <div
        ref={trackRef}
        role="group"
        aria-label={label}
        tabIndex={0}
        className={cn(
          "-mx-4 -my-4 flex w-[calc(100%+2rem)] snap-x snap-mandatory scroll-px-4 items-stretch gap-6 overflow-x-auto px-4 py-4 lg:scroll-px-0",
          "[-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
          // The track takes focus for keyboard scrolling, so it needs a ring.
          "focus-visible:outline-offset-[-2px]",
          // Vertical padding (cancelled by the matching negative margin, so it
          // doesn't add layout height) gives a hovered card's lifted box-shadow
          // room to render before `overflow-x-auto` — which clips both axes —
          // cuts it off.
          // With `bleed` the right edge moves out by the gutter right of the
          // 1200px container — (viewport - 1200) / 2, never less than the
          // section's 100px padding — and pads back in by the same amount so
          // the last card can still scroll fully into view.
          bleed
            ? "lg:-mr-[max(100px,calc((100vw-1200px)/2))] lg:ml-0 lg:w-auto lg:pr-[max(100px,calc((100vw-1200px)/2))] lg:pl-0"
            : "lg:mx-0 lg:w-full lg:px-0",
          className,
        )}
      >
        {children}
      </div>

      <CarouselArrows active={active} step={step} className="w-full" />
    </div>
  );
}
