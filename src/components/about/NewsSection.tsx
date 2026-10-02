import { Carousel } from "@/components/ui/Carousel";
import { NewsCard } from "@/components/ui/NewsCard";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { NEWS_ITEMS } from "@/lib/about-content";

export function NewsSection() {
  return (
    <Section gap="xl-tight" reveal className="overflow-x-clip bg-surface">
      <SectionHeading
        gap="sm"
        title="News & Events"
        description="Stay informed on our latest projects, partnerships, market insights, and company updates."
        descriptionSize="lg"
      />

      {/*
        More cards than fit the container at any width, so the row scrolls at
        every breakpoint and the arrows page through it. On desktop it runs to
        the screen's right edge, as the frame does, with the fourth card
        peeking in.
      */}
      <Carousel label="News and events" bleed>
        {/* Keyed by image, which is unique per story. */}
        {NEWS_ITEMS.map((item) => (
          <NewsCard key={item.image} {...item} />
        ))}
      </Carousel>
    </Section>
  );
}
