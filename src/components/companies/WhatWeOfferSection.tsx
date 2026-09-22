import { IntroSplit } from "@/components/ui/IntroSplit";

export function WhatWeOfferSection() {
  return (
    <IntroSplit
      title="What We Offer"
      paragraphs={[
        "At Habitech Development, we specialise in sourcing sustainable building materials that promote environmentally responsible construction and design. With a deep commitment to green architecture, we offer tailored procurement solutions for projects that priorities both sustainability and functionality.",
        "We stay at the forefront of green building standards and certifications, such as LEED, BREEAM, and WELL, ensuring that all materials we source comply with the latest regulations and industry best practices.",
      ]}
      image={{
        src: "/fura/companies/development/what-we-offer.png",
        alt: "Planted atrium in a Habitech Development building",
      }}
      cta={{ label: "Partner With Us", href: "#contact-form" }}
    />
  );
}
