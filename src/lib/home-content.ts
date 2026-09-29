/** Content for the Fura Habitech home page sections. */

export type Strategy = {
  image: string;
  icon: string;
  title: string;
  description: string;
};

export const STRATEGIES: Strategy[] = [
  {
    image: "/fura/images/project-mt-gravatt.png",
    icon: "/fura/icons/marker-pin-01-white.svg",
    title: "Landbank and DA uplift",
    description:
      "Acquire strategic land and seek value uplift through planning, rezoning or approvals.",
  },
  {
    image: "/fura/images/strategy-build-to-sell.png",
    icon: "/fura/icons/home-02-white.svg",
    title: "Build-to-Sell",
    description:
      "Deliver residential projects and realise development margin through sale.",
  },
  {
    image: "/fura/images/project-wing-house.png",
    icon: "/fura/icons/building-07-white.svg",
    title: "Build-to-Rent",
    description:
      "Hold completed housing for rental income and longer-term asset growth.",
  },
];

export type Project = {
  image: string;
  /** Used as the image's alt text; the cards themselves carry no caption. */
  title: string;
};

/** The "Our Projects" row, in the order the frame lays the cards out. */
export const PROJECTS: Project[] = [
  { image: "/fura/images/project-mt-gravatt.png", title: "Mt Gravatt–Capalaba" },
  { image: "/fura/images/project-woolloongabba.png", title: "Woolloongabba" },
  { image: "/fura/properties/listings/timor-avenue-1.png", title: "Timor Avenue" },
  { image: "/fura/properties/listings/timor-avenue-2.png", title: "Timor Avenue 2" },
  { image: "/fura/properties/listings/timor-avenue-3.png", title: "Timor Avenue 3" },
  { image: "/fura/properties/listings/winghouse-s-photo.png", title: "Winghouse S" },
  { image: "/fura/properties/listings/winghouse-m-photo.png", title: "Winghouse M" },
  {
    image: "/fura/properties/listings/fura-living-kelvyngroove.png",
    title: "Fura Living, Kelvyngroove Village",
  },
  { image: "/fura/properties/listings/the-lakes.png", title: "The Lakes" },
  { image: "/fura/properties/completed/central-street-20.png", title: "20 Central Street" },
  { image: "/fura/properties/completed/cent-road-200.png", title: "200 Cent Road" },
  { image: "/fura/properties/completed/high-street.png", title: "High Street" },
  { image: "/fura/properties/completed/private-hospital.png", title: "Private Hospital" },
  { image: "/fura/properties/completed/gold-central-city.png", title: "Gold Central City" },
  {
    image: "/fura/properties/completed/office-headquarters.png",
    title: "Office Headquarters",
  },
  {
    image: "/fura/properties/completed/state-school.png",
    title: "State School New Learning Centre",
  },
  {
    image: "/fura/properties/completed/east-primary-school.png",
    title: "East Primary School",
  },
];

export type PortfolioCompany = {
  image: string;
  title: string;
  href: string;
};

export const PORTFOLIO_COMPANIES: PortfolioCompany[] = [
  {
    image: "/fura/images/portfolio-manufacturing.png",
    title: "Habitech Manufacturing Pty Ltd",
    href: "/companies/habitech-manufacturing",
  },
  {
    image: "/fura/images/portfolio-construction.png",
    title: "Habitech Construction Pty Ltd",
    href: "/companies/habitech-construction",
  },
  {
    image: "/fura/images/portfolio-Development.png",
    title: "Habitech Development Pty Ltd",
    href: "/companies/habitech-development",
  },
  {
    image: "/fura/images/portfolio-Property.png",
    title: "Habitech Real Estate Property Pty Ltd",
    href: "/companies/habitech-property",
  },
  {
    image: "/fura/images/portfolio-training.png",
    title: "Habitech Training Program",
    href: "/companies/habitech-training",
  },
  {
    image: "/fura/images/portfolio-fura-habitech.png",
    title: "FURA Habitech pty ltd",
    href: "/companies/fura-habitech",
  },
];

export type GovernanceItem = {
  num: string;
  title: string;
  description: string;
};

export const GOVERNANCE_ITEMS: GovernanceItem[] = [
  {
    num: "01",
    title: "AFS licence oversight",
    description:
      "Fura habitech benefit from CODA.  Asset Management holds AFSL 389315 and supervises the financial-services activities within its authorisations.",
  },
  {
    num: "02",
    title: "Formal investment management",
    description:
      "CODA is appointed to manage the portfolio and deployment of investor capital under the Investment Management Agreement.",
  },
  {
    num: "03",
    title: "Security trustee",
    description:
      "Fura Habitech holds relevant security on behalf of bondholders under the Security Trust Deed.",
  },
  {
    num: "04",
    title: "Global Asset Backing",
    description:
      "Fura Habitech investment management company, with FURA Australia as guarantor, holds..",
  },
  {
    num: "05",
    title: "Stage-Gated Investment",
    description:
      "Capital deployed progressively across the project lifecycle — from SPV and land acquisition to construction, materials and unit sales or leasing.",
  },
];

export type Partner = {
  logo: string;
  name: string;
  /** Per-logo fit tweaks taken from the Figma frame crops. */
  logoClassName?: string;
};

export const PARTNERS: Partner[] = [
  { logo: "/fura/partners/rhodium.png", name: "Rhodium Equity Pty Limited" },
  {
    logo: "/fura/partners/fura-capital.png",
    name: "Fura Capital Pte Ltd",
    logoClassName: "scale-[1.2]",
  },
  { logo: "/fura/partners/jane-box.png", name: "Jane-Box Co., Ltd" },
  { logo: "/fura/partners/open-build.png", name: "Open Build Pty Ltd" },
  {
    logo: "/fura/partners/national-university.png",
    name: "National University",
  },
  {
    logo: "/fura/partners/trade-investment-queensland.png",
    name: "Trade Investment Queenland",
  },
  { logo: "/fura/partners/ty-consultant.png", name: "TY Consultant Pty Ltd" },
  {
    logo: "/fura/partners/aad-sourcing.png",
    name: "AAD Sourcing Solutions Pty Ltd",
  },
  {
    logo: "/fura/partners/vertium.png",
    name: "Vertium Asset Management Pty Ltd.",
  },
];
