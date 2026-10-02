import Image from "next/image";
import { cn } from "@/lib/cn";
import type { OrganigramEntry } from "@/lib/about-content";

/**
 * Card in the corporate-structure tree: company logo, name and country pill
 * over the country's skyline, multiplied over white at 50%. `emphasis` is the
 * 380px holding-company card at the top of the tree.
 */
export function OrganigramCard({
  name,
  description,
  country,
  logo,
  texture,
  compactName = false,
  className,
  emphasis = false,
}: OrganigramEntry & { className?: string; emphasis?: boolean }) {
  return (
    <div
      className={cn(
        "relative isolate flex w-full flex-col items-center gap-4 overflow-hidden rounded-2xl bg-surface py-[18px] text-center shadow-[0px_1px_2px_rgba(10,13,18,0.05)]",
        "card-hover hover:-translate-y-1 hover:shadow-[0_12px_24px_-8px_rgba(9,12,20,0.15)] active:-translate-y-1 active:shadow-[0_12px_24px_-8px_rgba(9,12,20,0.15)] touch:shadow-[0_12px_24px_-8px_rgba(9,12,20,0.15)]",
        emphasis ? "justify-center px-6 lg:w-[380px]" : "h-[202px] px-4",
        className,
      )}
    >
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute -z-10 opacity-50",
          texture.multiply && "mix-blend-multiply",
        )}
        style={{
          top: `${texture.crop.top}%`,
          left: `${texture.crop.left}%`,
          width: `${texture.crop.width}%`,
          height: `${texture.crop.height}%`,
        }}
      >
        <Image
          src={texture.src}
          alt=""
          fill
          sizes={emphasis ? "380px" : "(min-width: 1024px) 200px, 100vw"}
          className="object-fill"
        />
      </div>

      {emphasis ? (
        <>
          <Image
            src={logo.src}
            alt={`${name} logo`}
            width={logo.width}
            height={logo.height}
            className="shrink-0"
            style={{ width: logo.width, height: logo.height }}
          />
          <p className="w-full text-base font-semibold text-title">{name}</p>
        </>
      ) : (
        <div className="flex w-full flex-1 flex-col items-center gap-3">
          <div className="flex h-9 w-full shrink-0 justify-center">
            <Image
              src={logo.src}
              alt={`${name} logo`}
              width={logo.width}
              height={logo.height}
              style={{ width: logo.width, height: logo.height }}
            />
          </div>
          <div className="flex w-full flex-col gap-1">
            <p
              className={cn(
                "w-full font-semibold text-title",
                compactName ? "text-sm" : "text-base",
              )}
            >
              {name}
            </p>
            {description && (
              <p className="w-full text-xs text-subtitle">{description}</p>
            )}
          </div>
        </div>
      )}

      <span className="shrink-0 rounded-full bg-brand-secondary px-3 py-2 text-sm whitespace-nowrap text-title">
        {country}
      </span>
    </div>
  );
}
