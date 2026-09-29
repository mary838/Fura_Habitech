import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/Button";
import { HeroBackdrop } from "@/components/ui/HeroBackdrop";

type CompanyHeroProps = {
  image: string;
  title: string;
  subtitle: string;
  /** Omitted on pages whose hero has no third line. */
  tagline?: string;
  ctaLabel: string;
  ctaHref: string;
  /** Raw `background-image` for the scrim, where a frame sets its own. */
  overlayImage?: string;
  /** Scrim below `lg`, for a frame whose mobile gradient differs. */
  overlayImageMobile?: string;
  /**
   * Where the copy sits in the 500px band. Company frames bottom-align it from
   * `lg`; every frame centres it while the band is only 16px-gutter wide.
   */
  align?: "end" | "center";
  /** `"wide"` gives the copy the 663px column a longer company name needs. */
  copyWidth?: "default" | "wide";
};

/** The scrim the company pages share. */
const DEFAULT_OVERLAY =
  "linear-gradient(258.9deg, rgba(0, 0, 0, 0.33) 43.087%, rgba(0, 0, 0, 0.68) 81.538%)";

/** The same scrim at the steeper angle the mobile frames draw it. */
const DEFAULT_OVERLAY_MOBILE =
  "linear-gradient(266.9deg, rgba(0, 0, 0, 0.33) 43.087%, rgba(0, 0, 0, 0.68) 81.538%)";

/** Full-bleed banner at the top of a company page. */
export function CompanyHero({
  image,
  title,
  subtitle,
  tagline,
  ctaLabel,
  ctaHref,
  overlayImage = DEFAULT_OVERLAY,
  overlayImageMobile = overlayImage === DEFAULT_OVERLAY
    ? DEFAULT_OVERLAY_MOBILE
    : undefined,
  align = "end",
  copyWidth = "default",
}: CompanyHeroProps) {
  return (
    <section
      className={cn(
        "relative flex h-[500px] w-full flex-col items-start overflow-hidden px-4 py-8 lg:px-[100px] lg:py-24",
        // The frame is 1440x500 in Figma. Past that width a fixed 500px band
        // would make `object-cover` crop away most of the photo, so the band
        // keeps the design's 2.88:1 ratio instead — capped so it never
        // swallows the fold on an ultrawide screen.
        "min-[1440px]:h-[34.72vw] min-[1440px]:max-h-[680px]",
        align === "center" ? "justify-center" : "justify-center lg:justify-end",
      )}
    >
      <HeroBackdrop
        src={image}
        overlayImage={overlayImage}
        overlayImageMobile={overlayImageMobile}
      />

      <div
        className={cn(
          "relative flex w-full max-w-[1200px] flex-col items-start gap-6",
          copyWidth === "wide" ? "lg:w-[663px]" : "lg:w-[633px]",
        )}
      >
        <div
          className="hero-rise flex w-full flex-col gap-3 font-medium text-title-inverse"
          style={{ animationDelay: "80ms" }}
        >
          {/*
            The banner holds its full type scale at every width — the frames
            let the three lines wrap rather than stepping the sizes down.
          */}
          <h1 className="text-display-md">{title}</h1>
          <p
            className={cn(
              "text-display-xs",
              copyWidth === "default" && "lg:w-[396px]",
            )}
          >
            {subtitle}
          </p>
        </div>
        {tagline ? (
          <p
            className="hero-rise w-full text-xl text-subtitle-inverse"
            style={{ animationDelay: "180ms" }}
          >
            {tagline}
          </p>
        ) : null}
        <span className="hero-rise" style={{ animationDelay: "280ms" }}>
          <Button href={ctaHref} variant="outline" className="border-white">
            {ctaLabel}
          </Button>
        </span>
      </div>
    </section>
  );
}
