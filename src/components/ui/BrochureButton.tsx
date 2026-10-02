import { existsSync } from "node:fs";
import path from "node:path";
import Image from "next/image";

type BrochureButtonProps = {
  /** The property's page slug — its brochure lives at `/fura/brochures/<slug>.pdf`. */
  slug: string;
  /** Which of the two cloud glyphs the frame draws. */
  icon?: "download-cloud" | "download-cloud-02";
  className?: string;
};

/**
 * The "Download Project Brochure" pill on a property detail page. When the
 * property's PDF is in `public/fura/brochures/` it downloads it; until one is
 * added it falls back to the contact form, so the button never 404s.
 */
export function BrochureButton({
  slug,
  icon = "download-cloud-02",
  className,
}: BrochureButtonProps) {
  const href = `/fura/brochures/${slug}.pdf`;
  const available = existsSync(
    path.join(process.cwd(), "public", "fura", "brochures", `${slug}.pdf`),
  );

  return (
    <a
      href={available ? href : "#contact-form"}
      download={available ? `${slug}-brochure.pdf` : undefined}
      className={className}
    >
      <Image
        src={`/fura/icons/${icon}.svg`}
        alt=""
        width={20}
        height={20}
        className="size-5"
      />
      Download Project Brochure
    </a>
  );
}

