/** Content for the FURA Habitech company page. */

export type ComparisonRow = {
  klass: string;
  strategy: string;
  /** Rendered on its own lines when it contains a newline. */
  targetReturn: string[];
  hold: string;
  focus: string;
};

export const FH_COMPARISON: ComparisonRow[] = [
  {
    klass: "CLASS A",
    strategy: "Landbank & DA uplift",
    targetReturn: ["15-25% IRR"],
    hold: "12–24 months",
    focus: "Value creation through planning and DA uplift",
  },
  {
    klass: "CLASS B",
    strategy: "Build-to-Sell",
    targetReturn: ["15–20% IRR"],
    hold: "24–36 months",
    focus: "Development profit via efficient delivery",
  },
  {
    klass: "CLASS C",
    strategy: "Build-to-Rent",
    targetReturn: ["5-10% Yield", "+ Capital Growth"],
    hold: "5–7 years",
    focus: "Stable income through long-term rentals",
  },
];

export const FH_FLOW_STEPS: { title: string; description: string }[] = [
  {
    title: "Select Class B",
    description: "Eligible wholesale and institutional investors",
  },
  { title: "Class B Bond", description: "Issued by FURA Habitech" },
  { title: "BTS Portfolio", description: "Managed by CODA" },
  { title: "Mt Gravatt SPV", description: "One eligible Class B deployment" },
  { title: "Develop and sell", description: "Apartments delivered and sold" },
  { title: "Redemption", description: "Proceeds and target return" },
];

export const CODA_ROLES: { icon: string; title: string; caption: string }[] = [
  {
    icon: "/fura/icons/check-circle.svg",
    title: "AFS License",
    caption: "Provides licensed oversight",
  },
  {
    icon: "/fura/icons/briefcase.svg",
    title: "Investment Manager",
    caption: "Manages the portfolio",
  },
  {
    icon: "/fura/icons/lock.svg",
    title: "Security Trustee",
    caption: "Holds security for bondholders",
  },
];
