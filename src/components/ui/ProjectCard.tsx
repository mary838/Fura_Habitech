import Image from "next/image";
import { cn } from "@/lib/cn";
import type { Project } from "@/lib/home-content";

/**
 * Image-only project tile used in the "Our Projects" row. The muted fill shows
 * while the photo decodes rather than an empty white card.
 */
export function ProjectCard({
  image,
  title,
  className,
}: Project & { className?: string }) {
  return (
    <article
      className={cn(
        "group shrink-0 overflow-hidden rounded-[23.111px] border-[1.444px] border-border-primary bg-surface-muted",
        className,
      )}
    >
      <div className="relative aspect-[628/353.25] w-full">
        <Image
          src={image}
          alt={title}
          fill
          sizes="555px"
          className="object-cover transition-transform duration-500 group-hover:scale-105 group-active:scale-105"
        />
      </div>
    </article>
  );
}
