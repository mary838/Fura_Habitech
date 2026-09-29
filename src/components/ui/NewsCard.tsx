import Image from "next/image";
import type { NewsItem } from "@/lib/about-content";

/**
 * Article card in the News & Events carousel. Read-only: there is no article
 * page behind these, so the card states the announcement in full rather than
 * linking away.
 *
 * The card is the frame's 384 x 470 at every width, narrowing only where a
 * phone is too small to hold 384px beside the 16px gutters. 470px is a
 * minimum, not a fixed height: every card in the row stretches to the tallest
 * one, so the row stays even and a long headline is never clipped.
 */
export function NewsCard({ image, titleLead, title, date }: NewsItem) {
  return (
    <article className="group flex min-h-[470px] w-[min(384px,calc(100vw-2rem))] shrink-0 snap-start flex-col items-start overflow-hidden rounded-2xl border border-border-primary bg-surface card-hover hover:-translate-y-1 hover:shadow-lg active:-translate-y-1 active:shadow-lg touch:shadow-lg lg:w-[384px]">
      <div className="relative aspect-[384/256] w-full shrink-0">
        <Image
          src={image}
          alt=""
          fill
          sizes="384px"
          className="object-cover transition-transform duration-500 group-hover:scale-105 group-active:scale-105"
        />
      </div>

      <div className="flex w-full flex-col items-start gap-5 p-6">
        <h3 className="w-full text-base text-title">
          {titleLead ? <strong className="font-bold">{titleLead}</strong> : null}
          {title}
        </h3>
        <p className="text-sm whitespace-nowrap text-subtitle">{date}</p>
      </div>
    </article>
  );
}
