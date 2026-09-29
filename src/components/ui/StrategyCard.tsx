import Image from "next/image";
import type { Strategy } from "@/lib/home-content";

/**
 * Full-bleed investment-strategy tile used in the "Our Investment Strategies"
 * section: photo under a diagonal scrim, with the icon, title and description
 * pinned to the bottom edge.
 */
export function StrategyCard({ image, icon, title, description }: Strategy) {
  return (
    <article className="group relative flex h-[434px] w-full shrink-0 flex-col lg:w-auto lg:min-w-0 lg:flex-1 justify-end overflow-hidden rounded-xl card-hover hover:-translate-y-1 hover:shadow-xl active:-translate-y-1 active:shadow-xl touch:shadow-xl">
      <Image
        src={image}
        alt=""
        fill
        sizes="(min-width: 1024px) 389px, 100vw"
        className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 group-active:scale-105"
      />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(146.2deg, rgba(24, 29, 39, 0) 31.25%, rgba(24, 29, 39, 0.902) 81.25%), linear-gradient(90deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.3) 100%)",
        }}
      />

      <div className="relative flex w-full flex-col gap-3 bg-black/5 p-5 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-2 group-active:-translate-y-2">
        <div className="flex size-10 items-center justify-center rounded-full bg-white/20 p-2">
          <Image src={icon} alt="" width={24} height={24} className="size-6" />
        </div>
        <div className="flex w-full flex-col gap-2">
          <h3 className="text-display-xs font-medium text-title-inverse">
            {title}
          </h3>
          <p className="max-w-[293px] text-xs text-subtitle-inverse">
            {description}
          </p>
        </div>
      </div>
    </article>
  );
}
