/**
 * Page opener: heading, the AFSL pill and the oversight line. The frame sets
 * the pill's full sentence from `lg`; on mobile it collapses to the licence
 * number so it stays on one line.
 */
export function FuraIntroSection() {
  return (
    <section className="w-full bg-surface px-4 py-12 lg:px-[100px] lg:py-24">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-start gap-6">
        <div className="flex w-full flex-col items-start gap-4">
          <h2 className="text-display-xs font-medium tracking-tight text-title lg:text-display-md">
            FURA HABITECH assets developments
          </h2>
          <span className="rounded-full bg-surface-muted px-3 py-3 text-sm font-medium text-title lg:hidden">
            AFSL 389315
          </span>
          <span className="hidden rounded-full bg-surface-muted px-3 py-3 text-sm font-medium text-title lg:inline-flex">
            FURA HABITECH pty ltd is an investment management company,
            regulated under ASIC AFSL no 389315
          </span>
        </div>
        <p className="w-full text-lg leading-7 text-subtitle">
          Providing trusted oversight and management to protect and grow
          investor value.
        </p>
      </div>
    </section>
  );
}
