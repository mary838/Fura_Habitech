"use client";

import { useEffect, useRef } from "react";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { PROJECTS } from "@/lib/home-content";

/** Speed of the automatic scroll, in px per second. */
const SPEED = 80;

/** How quickly the speed follows its target, in ms — the start/resume ease. */
const SMOOTHING_MS = 350;

/** How long the drift waits after the reader last scrolled it by hand, in ms. */
const RESUME_AFTER_MS = 1500;

/**
 * How many times the cards are laid out. The drift runs through the second
 * copy and wraps back by one copy's width, so there is always a full copy on
 * either side for a swipe to reach. One copy of the seventeen cards is far
 * wider than any screen, so three is enough.
 */
const COPIES = 3;

/**
 * The project cards in an endless row that glides one way, right to left,
 * without a gap or a turn: the cards repeat, and once the drift has travelled
 * one full set it jumps back by exactly that width, which lands on an
 * identical frame. The leading padding lines the first card up with the
 * 1200px container.
 *
 * It is a plain scroll container, so swipe, trackpad and keyboard scrolling
 * all work; the drift picks up from wherever the reader leaves it, shortly
 * after they stop scrolling. It holds while the pointer rests on the row
 * (mouse hover or a touch hold) or keyboard focus is inside it, while the tab
 * is hidden, and entirely for readers who ask for reduced motion.
 *
 * Browsers snap `scrollLeft` to whole device pixels, so a drift of about a
 * pixel per frame advanced in uneven steps and read as judder. The scroll
 * position still carries the whole pixels — keeping native scrolling intact
 * — and a `transform` on the inner row makes up the fraction the snap threw
 * away, which the compositor can place exactly.
 */
export function ProjectSlider() {
  const trackRef = useRef<HTMLDivElement>(null);
  const rowRef = useRef<HTMLDivElement>(null);
  const heldRef = useRef(false);

  useEffect(() => {
    const track = trackRef.current;
    const row = rowRef.current;
    if (!track || !row) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Distance from one copy's first card to the next copy's: one full loop.
    const loopWidth = () => {
      const slides = row.children;
      const first = slides[0] as HTMLElement | undefined;
      const next = slides[PROJECTS.length] as HTMLElement | undefined;
      return first && next ? next.offsetLeft - first.offsetLeft : 0;
    };

    // Start one copy in: it looks the same as the start, and leaves a copy
    // to the left for a reader swiping backwards.
    track.scrollLeft = loopWidth();

    let frame = 0;
    let last = 0;
    let velocity = 0;
    // Kept as a float — see above.
    let position = track.scrollLeft;
    let pausedUntil = 0;

    const setOffset = (px: number) => {
      row.style.transform = px ? `translate3d(${-px}px, 0, 0)` : "";
    };

    // Any scroll that isn't the drift's own — a swipe and its momentum, a
    // trackpad flick, arrow keys — holds the drift until the row settles.
    const onScroll = () => {
      if (Math.abs(track.scrollLeft - position) > 2) {
        pausedUntil = performance.now() + RESUME_AFTER_MS;
      }
    };
    track.addEventListener("scroll", onScroll, { passive: true });

    const tick = (time: number) => {
      const elapsed = last ? Math.min(time - last, 64) : 0;
      last = time;

      if (heldRef.current || document.hidden || time < pausedUntil) {
        // Resume from wherever the reader scrolled it to, from a standstill.
        position = track.scrollLeft;
        velocity = 0;
        setOffset(0);
      } else {
        const loop = loopWidth();
        velocity += (SPEED - velocity) * (1 - Math.exp(-elapsed / SMOOTHING_MS));
        position += velocity * (elapsed / 1000);

        // Keep the view within the second copy; a swipe may have left it
        // anywhere, and each jump is a whole copy so nothing visibly moves.
        if (loop > 0) {
          while (position >= loop * 2) position -= loop;
          while (position < loop) position += loop;
        }
        track.scrollLeft = position;
        setOffset(position - track.scrollLeft);
      }
      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(frame);
      track.removeEventListener("scroll", onScroll);
      setOffset(0);
    };
  }, []);

  const hold = () => {
    heldRef.current = true;
  };
  const release = () => {
    heldRef.current = false;
  };

  return (
    <div
      ref={trackRef}
      role="group"
      aria-label="Our projects"
      tabIndex={0}
      onPointerEnter={hold}
      onPointerDown={hold}
      onPointerUp={release}
      onPointerCancel={release}
      onPointerLeave={release}
      onFocus={(event) => {
        if (event.target.matches(":focus-visible")) hold();
      }}
      onBlur={release}
      className="w-full overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] focus-visible:outline-offset-[-2px] [&::-webkit-scrollbar]:hidden"
    >
      {/*
        The padding lives on this `w-max` row rather than the scroller, where
        some browsers drop the trailing side from the scrollable width.
      */}
      <div
        ref={rowRef}
        className="flex w-max gap-[34.667px] px-4 will-change-transform lg:px-[max(100px,calc((100vw-1200px)/2))]"
      >
        {Array.from({ length: COPIES }, (_, copy) =>
          PROJECTS.map((project) => (
            // Only the first set is read out; the rest are the loop's
            // scenery.
            <div
              key={`${copy}-${project.image}`}
              aria-hidden={copy > 0 || undefined}
              className="w-[554.667px] shrink-0"
            >
              <ProjectCard {...project} className="w-full" />
            </div>
          )),
        )}
      </div>
    </div>
  );
}
