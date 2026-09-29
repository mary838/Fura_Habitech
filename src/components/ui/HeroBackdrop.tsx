import Image from "next/image";

type HeroBackdropProps = {
  src: string;
  /** Scrim over the photo: a Tailwind class, or a raw `background-image`. */
  overlay?: string;
  overlayImage?: string;
  /** A different `background-image` scrim below `lg`, where a frame sets one. */
  overlayImageMobile?: string;
};

/** Full-bleed hero photograph with its darkening scrim. */
export function HeroBackdrop({
  src,
  overlay,
  overlayImage,
  overlayImageMobile,
}: HeroBackdropProps) {
  return (
    <div aria-hidden className="absolute inset-0">
      <Image
        src={src}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      {overlay ? <div className={`absolute inset-0 ${overlay}`} /> : null}
      {overlayImageMobile ? (
        <div
          className="absolute inset-0 lg:hidden"
          style={{ backgroundImage: overlayImageMobile }}
        />
      ) : null}
      {overlayImage ? (
        <div
          className={`absolute inset-0 ${overlayImageMobile ? "hidden lg:block" : ""}`}
          style={{ backgroundImage: overlayImage }}
        />
      ) : null}
    </div>
  );
}
