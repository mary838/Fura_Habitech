import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { SplitLines } from "@/components/ui/SplitLines";
import { FuraLivingGallery } from "@/components/properties/FuraLivingGallery";

type FuraLivingDetailSectionProps = {
  title: string;
  description: string;
  price: string;
  gallery: string[];
  specs: { icon: string; label: string; value: string }[];
};

/** Layout for the Fura Living, Kelvyngroove Village detail page. */
export function FuraLivingDetailSection({
  title,
  description,
  price,
  gallery,
  specs,
}: FuraLivingDetailSectionProps) {
  return (
    <section className="w-full bg-surface px-4 py-8 lg:px-[100px] lg:py-24">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-start gap-6 lg:gap-16">
        <nav className="flex w-full items-center gap-0.5 text-base lg:text-xl">
          <Link
            href="/properties"
            className="shrink-0 font-normal whitespace-nowrap text-title lg:font-medium"
          >
            Real Estate Properties
          </Link>
          <Image
            src="/fura/icons/chevron-right.svg"
            alt=""
            width={16}
            height={16}
            className="size-4 shrink-0"
          />
          <span className="min-w-0 flex-1 truncate font-normal text-brand-primary lg:flex-none">
            {title}
          </span>
        </nav>

        <div className="order-1 w-full lg:order-2">
          <FuraLivingGallery images={gallery} alt={title} />
        </div>

        <Reveal className="order-2 flex w-full flex-col items-start gap-4 lg:order-1 lg:flex-row lg:items-start lg:justify-between lg:gap-8">
          <div className="order-2 flex w-full flex-col items-start gap-3 lg:order-1 lg:w-[800px] lg:gap-3">
            <SplitLines
              as="h1"
              text={title}
              className="w-full text-display-xs font-medium text-title lg:text-display-md"
            />
            <SplitLines
              text={description}
              className="w-full text-base text-subtitle"
              startDelay={120}
            />
          </div>

          <div className="order-1 flex shrink-0 items-start gap-2 lg:order-2 lg:flex-col lg:items-end">
            <span className="rounded-md bg-brand-secondary px-3 py-1.5 text-base font-medium whitespace-nowrap text-title">
              On going
            </span>
            <p className="text-display-sm font-medium whitespace-nowrap text-title lg:font-bold lg:text-display-lg">
              {price}
            </p>
          </div>
        </Reveal>

        {/*
          The table and the brochure button are one 32px-gap stack in both
          frames (Frame 101), not two items of the section's 64px rhythm.
        */}
        <div className="order-3 flex w-full flex-col items-start gap-8">
          <div className="flex w-full flex-col items-start overflow-hidden rounded-xl border border-border-primary">
            {/*
              This table carries eleven rows, so both frames draw it denser
              than the other properties': 51.56px rows rather than 70px, at
              every width. The height is a minimum — a value that wraps on a
              phone grows its row, and nothing here may be `nowrap`, since
              the table clips its overflow.
            */}
            <div className="flex min-h-[52px] w-full shrink-0 items-center bg-surface-muted px-5 py-2.5">
              <p className="text-xl font-medium text-title">Properties Detail</p>
            </div>
            {specs.map((spec) => (
              <div
                key={spec.label}
                className="flex min-h-[52px] w-full shrink-0 items-center justify-between gap-3 border-t border-border-primary bg-surface-muted px-5 py-2.5 lg:gap-4"
              >
                <span className="flex min-w-0 flex-1 items-center gap-3 lg:flex-none">
                  <Image
                    src={spec.icon}
                    alt=""
                    width={20}
                    height={20}
                    className="size-5 shrink-0"
                  />
                  <span className="min-w-0 text-sm font-medium text-subtitle">
                    {spec.label}
                  </span>
                </span>
                <span className="min-w-0 flex-1 text-right text-base font-semibold text-title">
                  {spec.value}
                </span>
              </div>
            ))}
          </div>

          <a
            href="#contact-form"
            className="flex w-full items-center justify-center gap-1.5 overflow-hidden rounded-full border border-utility-gray-900 bg-surface px-[18px] py-3 text-base font-semibold text-title transition-colors hover:bg-surface-muted active:bg-surface-muted"
          >
            <Image
              src="/fura/icons/download-cloud-02.svg"
              alt=""
              width={20}
              height={20}
              className="size-5"
            />
            Download Project Brochure
          </a>
        </div>
      </div>
    </section>
  );
}
