/**
 * Page opener: heading, the AFSL pill, the CODA partnership copy and the
 * oversight line. The pill carries the full sentence at every width; on
 * mobile it spans the column at 12px and wraps inside the pill.
 */
export function FuraIntroSection() {
  return (
    <section className="w-full bg-surface px-4 py-8 lg:px-[100px] lg:py-24">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-start gap-4 lg:gap-6">
        <div className="flex w-full flex-col items-start gap-4">
          <h2 className="w-full text-display-xs font-medium text-title lg:text-display-md">
            FURA Habitech pty ltd Investment management company
          </h2>
          <span className="w-full rounded-full bg-surface-muted px-4 py-3 text-xs font-medium text-title lg:w-auto lg:p-3 lg:text-sm">
            FURA HABITECH pty ltd is an investment management company,
            regulated under ASIC AFSL no 389315
          </span>
          <div className="flex w-full flex-col gap-4 text-base text-subtitle lg:gap-0 lg:text-lg">
            <p>
              FURA Habitech is an Australian property development and
              investment platform, operating within an ASIC-licensed framework
              under AFSL 389315, in partnership with CODA Asset Management Pty
              Ltd.
            </p>
            <p>
              With over 15 years of experience in asset management and
              financial structuring, CODA brings institutional expertise,
              robust governance and a strong focus on compliance to FURA
              Habitech’s investment and development activities.
            </p>
          </div>
        </div>
        <p className="w-full text-base text-subtitle lg:text-lg">
          Providing trusted oversight and management to protect and grow
          investor value.
        </p>
      </div>
    </section>
  );
}
