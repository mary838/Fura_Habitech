/** Content for the Habitech Training Program page. */

import type { RichSegment } from "@/lib/about-content";

export type TrainingStage = {
  /** "01 / LEARN" — the label shared by the strip and the matching course. */
  code: string;
  summary: string;
  icon: string;
};

export type TrainingCourse = {
  code: string;
  title: string;
  /** Single-line statement of what the module delivers. */
  lead: string;
  /** One entry per paragraph; runs inside a paragraph carry their own weight. */
  body: readonly (readonly RichSegment[])[];
  tags: readonly string[];
  image: string;
};

/** The five-stage strip above the course cards. */
export const TRAINING_STAGES: TrainingStage[] = [
  {
    code: "01 / LEARN",
    summary: "Technical foundations",
    icon: "/fura/companies/training/stage-01.png",
  },
  {
    code: "02 / UNDERSTAND",
    summary: "Technical vocabulary & design principles",
    icon: "/fura/companies/training/stage-02.png",
  },
  {
    code: "03 / COMPLY",
    summary: "Australian standards & requirements",
    icon: "/fura/companies/training/stage-03.png",
  },
  {
    code: "04 / APPLY",
    summary: "Practical and industry-based training",
    icon: "/fura/companies/training/stage-04.png",
  },
  {
    code: "05 / DESIGN",
    summary: "Digital tools & engineering applications",
    icon: "/fura/companies/training/stage-05.png",
  },
];

export const TRAINING_COURSES: TrainingCourse[] = [
  {
    code: "01 / LEARN",
    title: "1. Technical Courses",
    lead: "3-week technical foundation in MMC and prefabricated construction",
    body: [
      [
        {
          text: "Participants develop a comprehensive understanding of modern construction methods, covering ",
        },
        {
          text: "MMC principles, materials, structural systems, building physics, insulation, thermal performance, durability, design, fabrication and installation.",
          bold: true,
        },
      ],
      [
        {
          text: "The objective is to build the technical foundation required to work with ",
        },
        {
          text: "specialised MMC and prefabrication systems, from design through to construction.",
        },
      ],
    ],
    tags: ["MMC principles", "Fabrication & installation", "Building performance"],
    image: "/fura/companies/training/course-01.png",
  },
  {
    code: "02 / UNDERSTAND",
    title: "2. Technical Vocabulary & Design Workshops",
    lead: "Applying technical knowledge to real construction situations",
    body: [
      [
        {
          text: "Participants develop their technical vocabulary and understanding of key MMC concepts through a structured ",
        },
        {
          text: "technical glossary and self-assessment exercises.",
          bold: true,
        },
      ],
      [
        { text: "This knowledge is then applied through " },
        { text: "online design workshops and 3D construction exercises" },
        {
          text: ", allowing participants to understand how prefabricated components are designed, assembled and integrated into a complete building system.",
        },
      ],
    ],
    tags: ["Technical glossary", "Self-assessment", "3D assembly"],
    image: "/fura/companies/training/course-02.png",
  },
  {
    code: "03 / COMPLY",
    title: "3. Australian Standards & Compliance",
    lead: "Understanding the standards governing MMC construction",
    body: [
      [
        { text: "The programme introduces participants to the key " },
        {
          text: "Australian building, engineering and construction standards",
          bold: true,
        },
        { text: " relevant to prefabricated and modular construction." },
      ],
      [
        { text: "Training covers " },
        {
          text: "compliance, structural requirements, building performance and construction standards",
          bold: true,
        },
        {
          text: ", providing participants with the knowledge required to develop and assess MMC solutions within an Australian regulatory framework.",
        },
      ],
    ],
    tags: ["Structural requirements", "Building performance", "Australian framework"],
    image: "/fura/companies/training/course-03.png",
  },
  {
    code: "04 / APPLY",
    title: "4. Practical Application & Industry Training",
    lead: "Applying technical knowledge to real construction situations",
    body: [
      [
        { text: "Through " },
        { text: "15 Studio Tasks and 7 practical applications", bold: true },
        { text: ", participants move from theory into practical implementation." },
      ],
      [
        { text: "The training applies MMC principles to realistic design and construction scenarios, including specialised modules covering " },
        {
          text: "prefabrication, modular construction and industry workflows.",
          bold: true,
        },
      ],
      [
        {
          text: "This component can also support company-based training, allowing teams to apply the methodology directly to their own construction and prefabrication activities.",
        },
      ],
    ],
    tags: ["15 Studio Tasks", "7 applications", "Industry workflows"],
    image: "/fura/companies/training/course-04.png",
  },
  {
    code: "05 / DESIGN",
    title: "5. Digital Design & Engineering Tools",
    lead: "Learning the digital tools used to design and assess MMC systems",
    body: [
      [
        { text: "Participants work with " },
        {
          text: "3D construction and design tools, interactive design consoles and engineering calculation tools",
          bold: true,
        },
        { text: "." },
      ],
      [
        {
          text: "These tools allow participants to explore and assess key parameters including ",
        },
        {
          text: "structural performance, building physics, thermal performance, material requirements, weight and transportation considerations.",
          bold: true,
        },
      ],
    ],
    tags: ["3D construction", "Engineering calculations", "Transport planning"],
    image: "/fura/companies/training/course-05.png",
  },
];

/** Ticked capabilities beside the MoU photograph. */
export const TRAINING_CAPABILITIES: readonly string[] = [
  "Safety & site operational management protocols",
  "Advanced heavy-timber joinery machine operation",
  "Digital layout and precision crane coordination",
  "Sustainable material procurement and tracking",
];

export const TRAINING_EXPERIENCE_PARAGRAPHS: readonly string[] = [
  "From Training to Real Projects",
  "A key objective of the initiative is to create a direct connection between training and practical implementation.",
  "Professionals who develop their MMC capabilities through the initiative may have opportunities to apply this knowledge directly through FURA’s Australian development pipeline and future MMC projects, providing practical exposure to the design, planning and delivery of projects using modern construction methods.",
];

export type TrainingPartner = {
  name: string;
  logo: string;
  /** Intrinsic size, so each mark keeps its own aspect ratio in the row. */
  width: number;
  height: number;
};

export const TRAINING_PARTNERS: TrainingPartner[] = [
  {
    name: "National University of Singapore",
    logo: "/fura/companies/training/partner-nus.png",
    width: 1390,
    height: 862,
  },
  {
    name: "Trade & Investment Queensland",
    logo: "/fura/companies/training/partner-tiq.png",
    width: 524,
    height: 243,
  },
];
