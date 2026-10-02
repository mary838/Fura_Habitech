"use client";

import { useEffect, useRef, useState } from "react";

/** Gap between the subsidiary columns, in px (`lg:gap-3`). */
const COLUMN_GAP = 12;
const HEIGHT = 120;
/** Where the horizontal run sits, from the top of the gap. */
const RUN_Y = 58;
/** Lines start just under the holding card, as the Figma layers do. */
const START_Y = 4;
const RADIUS = 20;

/**
 * The design's connector lines (Figma "Connector line" layers) in the 120px
 * gap between the holding card and the subsidiary row: 1.5px #757575 elbows
 * with 20px corners from the card's centre into each of `count` columns,
 * ending in a 10px dot in brand-accent, the navbar's active-link colour.
 *
 * Drawn as one SVG, measured to the row's pixel width, so every straight and
 * corner gets the same 1.5px stroke — CSS borders round 1.5px to whole device
 * pixels and draw the curves thinner than the straights.
 */
export function OrganigramConnectors({ count }: { count: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new ResizeObserver(([entry]) =>
      setWidth(entry.contentRect.width),
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const trunk = width / 2;
  const centres = Array.from(
    { length: count },
    (_, i) => ((i + 0.5) * (width + COLUMN_GAP)) / count - COLUMN_GAP / 2,
  );

  return (
    <div
      ref={ref}
      aria-hidden
      className="relative z-10 hidden w-full lg:block"
      style={{ height: HEIGHT }}
    >
      {width > 0 && (
        <svg
          width={width}
          height={HEIGHT}
          viewBox={`0 0 ${width} ${HEIGHT}`}
          className="absolute inset-0 overflow-visible"
        >
          {centres.map((x) => (
            <path
              key={x}
              d={elbow(trunk, x)}
              fill="none"
              stroke="#757575"
              strokeWidth={1.5}
            />
          ))}
          {centres.map((x) => (
            <circle
              key={x}
              cx={x}
              cy={HEIGHT}
              r={5}
              className="fill-brand-accent"
            />
          ))}
        </svg>
      )}
    </div>
  );
}

/** Down from the trunk, a corner onto the run, a corner down to column `x`. */
function elbow(trunk: number, x: number) {
  const dir = x < trunk ? -1 : 1;
  // Turning from "down" towards the column, then back to "down": clockwise
  // then anticlockwise for a column on the left, the reverse on the right.
  const first = dir < 0 ? 1 : 0;
  const second = 1 - first;
  return [
    `M ${trunk} ${START_Y}`,
    `V ${RUN_Y - RADIUS}`,
    `A ${RADIUS} ${RADIUS} 0 0 ${first} ${trunk + dir * RADIUS} ${RUN_Y}`,
    `H ${x - dir * RADIUS}`,
    `A ${RADIUS} ${RADIUS} 0 0 ${second} ${x} ${RUN_Y + RADIUS}`,
    `V ${HEIGHT}`,
  ].join(" ");
}
