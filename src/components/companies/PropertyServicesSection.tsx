/** The two sentences the frame splits with a hard break. */
const WHAT_WE_DO = [
  "We manage and operate real estate assets across their full lifecycle, from acquisition and development through to leasing, operations and long-term asset management.",
  "Our integrated approach combines property management, asset oversight and operational coordination to maintain asset quality, improve performance and support long-term value creation",
];

export function PropertyServicesSection() {
  return (
    <section className="w-full bg-surface-muted px-4 py-8 lg:px-[100px] lg:py-24">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-start gap-4">
        <h2 className="w-full text-display-xs font-medium text-title lg:text-display-md">
          What we do
        </h2>
        <p className="w-full text-xl text-subtitle">
          {WHAT_WE_DO[0]}
          <br />
          {WHAT_WE_DO[1]}
        </p>
      </div>
    </section>
  );
}
