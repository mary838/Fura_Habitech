/** Content for the Fura Habitech about page sections. */

export type OrganigramEntry = {
  name: string;
  description?: string;
  country: string;
  /** Company logo in /public, drawn at its design size. */
  logo: { src: string; width: number; height: number };
  /**
   * City-skyline card art, multiplied over white at 50%. `crop` is the
   * image's box relative to the card in the design (Figma's fill crop), in %.
   */
  texture: {
    src: string;
    crop: { top: number; left: number; width: number; height: number };
    multiply?: boolean;
  };
  /** Long names drop to 14/20 so they stay on one line in a 193px card. */
  compactName?: boolean;
};

const ORG = "/fura/organigram";

export const ORGANIGRAM_PARENT: OrganigramEntry = {
  name: "HOLDING COMPANY",
  country: "Singapore",
  logo: { src: `${ORG}/logo-fura-capital.png`, width: 184, height: 98 },
  texture: {
    src: `${ORG}/texture-singapore.webp`,
    crop: { top: -26.87, left: -0.06, width: 100.11, height: 136.22 },
    multiply: true,
  },
};

export const ORGANIGRAM_SUBSIDIARIES: OrganigramEntry[] = [
  {
    name: "FURA TRUST",
    description: "Landbank and investment management",
    country: "Singapore",
    logo: { src: `${ORG}/logo-fura-trust.png`, width: 68, height: 30 },
    texture: {
      src: `${ORG}/texture-singapore.webp`,
      crop: { top: -8.48, left: -0.06, width: 99.58, height: 121.17 },
    },
  },
  {
    name: "FURA INVESTMENT",
    description: "Tourism & Industry Development",
    country: "Cambodia",
    logo: { src: `${ORG}/logo-fura-investment.png`, width: 83, height: 36 },
    texture: {
      src: `${ORG}/texture-cambodia.webp`,
      crop: { top: 4.49, left: 0.48, width: 99.76, height: 117.76 },
      multiply: true,
    },
  },
  {
    name: "FURI Inc",
    description: "Real asset & Banking",
    country: "United States",
    logo: { src: `${ORG}/logo-furi.svg`, width: 49, height: 24 },
    texture: {
      src: `${ORG}/texture-usa.webp`,
      crop: { top: 13.86, left: 0, width: 100, height: 103.33 },
      multiply: true,
    },
  },
  {
    name: "FURA JAPAN",
    description: "Fund Management",
    country: "Japan",
    logo: { src: `${ORG}/logo-fura-japan.svg`, width: 104, height: 21 },
    texture: {
      src: `${ORG}/texture-japan.webp`,
      crop: { top: 21.9, left: -0.06, width: 99.4, height: 78.91 },
      multiply: true,
    },
  },
  {
    name: "FURA CHONGQING",
    description: "Trade & Investment Platform",
    country: "China",
    logo: { src: `${ORG}/logo-fura-chongqing.png`, width: 68, height: 30 },
    texture: {
      src: `${ORG}/texture-china.webp`,
      crop: { top: 11.85, left: -1.14, width: 102.29, height: 112.92 },
      multiply: true,
    },
    compactName: true,
  },
  {
    name: "FURA AUSTRALIA",
    description: "Fund Management & Housing Development",
    country: "Australia",
    logo: { src: `${ORG}/logo-fura-australia.png`, width: 65, height: 30 },
    texture: {
      src: `${ORG}/texture-australia.webp`,
      crop: { top: -12.38, left: 0.71, width: 99.29, height: 178.54 },
      multiply: true,
    },
    compactName: true,
  },
];

/**
 * A run of copy inside a checklist row, for rows that bold part of their text,
 * so a row is a sequence of runs rather than a single string.
 */
export type RichSegment = { text: string; bold?: boolean };

export const CAPABILITIES: string[] = [
  "Create value through land acquisition and DA uplift",
  "Generate development profits through Build-to-Sell projects",
  "Create recurring income through Build-to-Rent assets",
  "Deliver housing faster through modular construction",
  "Provide investors with multiple exit pathways (including asset sales, institutional portfolio acquisitions, superannuation fund purchases, and owner refinancing or buyback options).",
];

export type Statistic = {
  value: string;
  /** Omitted where the frame gives the tile a headline and no supporting line. */
  label?: string;
};

/** Rendered as a centred pair above a three-up row, as in the design. */
export const STATISTICS_PRIMARY: Statistic[] = [
  {
    value: "+15 years experience in Fund Management",
    label: "Operating in Australia under AFSL License",
  },
  {
    value: "AUD +500 million GDV",
    label: "Construction project delivered in Australia",
  },
];

export const STATISTICS_SECONDARY: Statistic[] = [
  {
    value: "Australian Standards",
    label:
      "Licensed engineering & construction operations, with certified materials exported to 10+ countries.",
  },
  {
    value: "6 Integrated Companies",
    label:
      "One-stop solution from design to turnkey completion, reducing project and execution risks.",
  },
  {
    value: "6-Country Investment Platform",
    label: "Connecting global capital with local real assets.",
  },
];

export type NewsItem = {
  image: string;
  /** Bold lead-in ahead of the title, where the design sets one. */
  titleLead?: string;
  title: string;
  date: string;
};

export const NEWS_ITEMS: NewsItem[] = [
  {
    image: "/fura/images/news-nus-chongqing.png",
    title:
      "Agreement signing between FURA and NUS Chongqing Institute to collaborate on Modern Methods of Construction, education and industry innovation in Australia.",
    date: "May 2, 2026",
  },
  {
    image: "/fura/images/news-ppap-sez.png",
    title:
      "Agreement signing between Fura and PPAP authority for the Development of a Green Special Economic Zone",
    date: "May 2, 2026",
  },
  {
    image: "/fura/images/news-mice-tour.png",
    title: "2026 Hospitality fund & MICE tour by FURA and HMD Asia",
    date: "May 2, 2026",
  },
  {
    image: "/fura/images/news-investor-event.png",
    titleLead: "Habitech Housing – Investor & Partnership Event ",
    title:
      "Showcasing sustainable and affordable housing opportunities in Australia",
    date: "May 2, 2026",
  },
  {
    image: "/fura/images/news-sponsorship.png",
    title:
      "FURA group as Golden Sponsort of the Cambodia-Singapore Business Forum held by Cambodia Chamber of Commerce (CCC), the Singapore Chamber of Commerce (SCC), and the Singapore Business Federation (SBF).",
    date: "May 2, 2026",
  },
];
