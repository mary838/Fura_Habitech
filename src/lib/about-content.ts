/** Content for the Fura Habitech about page sections. */

export type OrganigramEntry = {
  name: string;
  country: string;
};

export const ORGANIGRAM_PARENT: OrganigramEntry = {
  name: "Fura Capital Pte Ltd",
  country: "Singapore",
};

export const ORGANIGRAM_SUBSIDIARIES: OrganigramEntry[] = [
  { name: "Fura Landbank Fund", country: "Singapore" },
  { name: "Furi Corporation", country: "Cambodia" },
  { name: "Fari Inc", country: "USA" },
  { name: "Fura Japan", country: "Japan" },
  { name: "Fura Chongqing", country: "China" },
  { name: "Fura Australia", country: "Australia" },
];

/**
 * A run of copy inside a checklist row. The design bolds the substantive part
 * of each "About fura group" bullet, so a row is a sequence of runs rather
 * than a single string.
 */
export type RichSegment = { text: string; bold?: boolean };

export const GROUP_HIGHLIGHTS: RichSegment[][] = [
  [
    { text: "Singapore-headquartered " },
    {
      text: "investment group focused on real estate, infrastructure, agriculture, hospitality and industry",
      bold: true,
    },
    { text: "." },
  ],
  [
    { text: "Presence across " },
    { text: "Singapore, Australia, Cambodia, Japan and the USA", bold: true },
    { text: "." },
  ],
  [
    { text: "15+ years of experience ", bold: true },
    { text: "in fund management and international investment structuring." },
  ],
  [
    { text: "Real asset portfolio exceeding " },
    {
      text: "USD 750 million, covering more than 250 hectares",
      bold: true,
    },
    { text: " of developed land." },
  ],
  [
    { text: "Hospitality fund assets valued at over " },
    { text: "USD 250 million", bold: true },
    { text: "." },
  ],
];

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
  { value: "+15 years experience in Fund Management" },
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
    image: "/fura/images/news-business-forum.png",
    title:
      "FURA group as Golden Sponsort of the Cambodia-Singapore Business Forum held by Cambodia Chamber of Commerce (CCC), the Singapore Chamber of Commerce (SCC), and the Singapore Business Federation (SBF).",
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
