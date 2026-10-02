/* eslint-disable @next/next/no-img-element -- plain <img> loads eagerly, so headless Chrome prints every photo. */
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BROCHURES } from "@/lib/brochures";
import { ORGANISATION, SITE_URL } from "@/lib/site";

/**
 * An A4 brochure for one property, laid out for print: a cover, the details
 * table with the first photos, then as many gallery pages as the rest need. It is not
 * linked anywhere: `npm run brochures` prints it to
 * `public/fura/brochures/<slug>.pdf`.
 */

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(BROCHURES).map((slug) => ({ slug }));
}

/** Photos under the details table, then per gallery page. */
const DETAIL_PHOTOS = 4;
const GALLERY_PHOTOS = 6;

export async function generateMetadata({
  params,
}: PageProps<"/brochures/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  return {
    // The PDF's document title, shown in the viewer's title bar.
    title: `${BROCHURES[slug]?.title} Brochure`,
    robots: { index: false, follow: false },
  };
}

export default async function BrochurePage({
  params,
}: PageProps<"/brochures/[slug]">) {
  const { slug } = await params;
  const brochure = BROCHURES[slug];
  if (!brochure) notFound();

  const [cover, ...rest] = brochure.images;
  const photos = rest.slice(0, DETAIL_PHOTOS);
  const galleries: string[][] = [];
  for (let i = DETAIL_PHOTOS; i < rest.length; i += GALLERY_PHOTOS) {
    galleries.push(rest.slice(i, i + GALLERY_PHOTOS));
  }

  return (
    <div className="mx-auto bg-white text-title print:mx-0">
      <style>{`
        @page { size: A4; margin: 0; }
        html, body { background: #fff; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
        .sheet { width: 210mm; height: 297mm; overflow: hidden; break-after: page; }
        .sheet:last-child { break-after: auto; }
      `}</style>

      <section className="sheet flex flex-col gap-8 px-[16mm] py-[14mm]">
        <header className="flex items-center justify-between">
          <img src="/fura/icons/logo-lockup.svg" alt="Fura Habitech" className="h-9" />
          <span className="text-sm text-subtitle">Project Brochure</span>
        </header>

        <img
          src={photo(cover, 1920)}
          alt=""
          className="h-[118mm] w-full rounded-2xl object-cover"
        />

        <div className="flex items-start justify-between gap-6">
          <h1 className="text-display-md font-medium">{brochure.title}</h1>
          <div className="flex shrink-0 flex-col items-end gap-2">
            <span className="rounded-md bg-brand-secondary px-3 py-1.5 text-base font-medium">
              {brochure.status}
            </span>
            <p className="text-display-sm font-bold whitespace-nowrap">
              {brochure.price}
            </p>
          </div>
        </div>

        <p className="text-lg leading-relaxed text-subtitle">
          {brochure.description}
        </p>
      </section>

      <section className="sheet flex flex-col gap-8 px-[16mm] py-[14mm]">
        <div className="flex flex-col overflow-hidden rounded-xl border border-border-primary">
          <p className="bg-surface-muted px-5 py-3 text-xl font-medium">
            Properties Detail
          </p>
          {brochure.specs.map((spec, index) => (
            <div
              key={`${spec.label}-${index}`}
              className="flex items-center justify-between gap-4 border-t border-border-primary bg-surface-muted px-5 py-3"
            >
              <span className="flex items-center gap-3">
                <img src={spec.icon} alt="" className="size-5 shrink-0" />
                <span className="text-sm font-medium text-subtitle">
                  {spec.label}
                </span>
              </span>
              <span className="text-right text-base font-semibold">
                {spec.value}
              </span>
            </div>
          ))}
        </div>

        {photos.length > 0 && (
          <div
            className={`grid min-h-0 flex-1 gap-4 ${photos.length === 1 ? "grid-cols-1" : "grid-cols-2"}`}
          >
            {photos.map((src) => (
              <img
                key={src}
                src={photo(src, photos.length === 1 ? 1920 : 1080)}
                alt=""
                className={`h-full w-full rounded-xl object-cover ${photos.length === 1 ? "max-h-[110mm]" : "max-h-[62mm]"}`}
              />
            ))}
          </div>
        )}

        {galleries.length === 0 && <Footer />}
      </section>

      {galleries.map((gallery, index) => (
        <section
          key={index}
          className="sheet flex flex-col gap-8 px-[16mm] py-[14mm]"
        >
          <p className="text-xl font-medium">Gallery</p>
          <div className="grid grid-cols-2 gap-4">
            {gallery.map((src) => (
              <img
                key={src}
                src={photo(src, 1080)}
                alt=""
                className="h-[68mm] w-full rounded-xl object-cover"
              />
            ))}
          </div>
          {index === galleries.length - 1 && <Footer />}
        </section>
      ))}
    </div>
  );
}

/** Contact block at the foot of the last page. */
function Footer() {
  return (
    <footer className="mt-auto flex items-end justify-between border-t border-border-primary pt-5 text-sm text-subtitle">
      <div className="flex flex-col gap-1">
        <p className="font-semibold text-title">{ORGANISATION.legalName}</p>
        <p>
          {ORGANISATION.streetAddress}, {ORGANISATION.addressLocality}{" "}
          {ORGANISATION.addressRegion} {ORGANISATION.postalCode}
        </p>
      </div>
      <div className="flex flex-col items-end gap-1">
        <p>{ORGANISATION.email}</p>
        <p>{ORGANISATION.telephone}</p>
        <p>{SITE_URL.replace(/^https?:\/\//, "")}</p>
      </div>
    </footer>
  );
}

/**
 * A photo via the image optimizer: the source PNGs run to several MB each,
 * and Chrome embeds whatever it is given, so unoptimised they bloat the PDF.
 */
function photo(src: string, width: number) {
  return `/_next/image?url=${encodeURIComponent(src)}&w=${width}&q=75`;
}
