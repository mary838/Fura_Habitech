/** Content for the Fura Habitech team page. */

export type TeamMember = {
  photo: string;
  name: string;
  role: string;
  bio: string;
  /**
   * Where the portrait sits in its 276x248 frame from `lg`, as the frame
   * places it: each photo is scaled and offset on its own so the heads line
   * up, rather than all being cropped the same way. Percentages of the frame.
   */
  frame: { width: string; height: string; left: string; top: string };
};

export const LEADERSHIP: TeamMember[] = [
  {
    photo: "/fura/team/ly-senleap.png",
    name: "Ly Senleap",
    role: "Founder & Group CEO",
    bio: "Founder of FURA Corporation in 2012, Ly Sen Leap has led the development of landmark projects spanning luxury villas, condominiums and large-scale commercial developments. Through longstanding international relationships, he has expanded the Group’s presence across the USA, Singapore, Japan, Cambodia, China and Australia, connecting real asset development with global capital and investment networks.",
    frame: { width: "89.21%", height: "128.89%", left: "4.82%", top: "3.92%" },
  },
  {
    photo: "/fura/team/paul-ducan.png",
    name: "Paul Ducan",
    role: "Head of Funds Management",
    bio: "With a background in Electrical Engineering, Paul Ducan brings extensive experience across major infrastructure and development projects in Australia. For nearly 15 years, he has focused on fund structuring, financial product development and investment management, with a strong emphasis on regulatory governance and compliance under Australia’s AFSL framework. His expertise bridges complex project delivery with disciplined fund management and institutional investment requirements.",
    frame: { width: "82.95%", height: "130.93%", left: "8.58%", top: "0.15%" },
  },
  {
    photo: "/fura/team/may-yang.png",
    name: "May Yang",
    role: "Head of Sales",
    bio: "With over 20 years of experience in the Australian property market, May Yang brings extensive expertise across land acquisition, property sales, leasing and asset management. Her longstanding relationships across the real estate sector and extensive international network provide the Group with strong market access and investor connections, supporting the sourcing, positioning and successful distribution of property opportunities.",
    frame: { width: "81.94%", height: "142.12%", left: "8.94%", top: "3.56%" },
  },
  {
    photo: "/fura/team/leo-liao.png",
    name: "Leo Liao",
    role: "Head of Manufacturing",
    bio: "Leo Liao specialises in prefabricated housing and modular building systems, with extensive expertise across China and international markets. He has held senior management roles within leading steel-structure companies, contributed to major modular and prefab projects, and led research initiatives supported by China’s Ministry of Science and Technology. His strong industry network and deep understanding of factory production and modular manufacturing support the Group’s ability to deliver scalable, efficient and high-quality solutions.",
    frame: { width: "121.53%", height: "249.69%", left: "-12.57%", top: "2.19%" },
  },
  {
    photo: "/fura/team/leo-li.png",
    name: "Leo Li",
    role: "Head of Construction",
    bio: "Leo Li specialises in high-rise construction, modular development and complex institutional projects, with a proven track record of over AUD 550 million in delivered projects across Australia. His expertise in large-scale project delivery ensures precision, reliability and compliance with Australian construction standards and certifications.",
    frame: { width: "69.63%", height: "99.02%", left: "12.73%", top: "1.01%" },
  },
];
