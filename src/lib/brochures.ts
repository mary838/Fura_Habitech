/**
 * What each property's brochure shows. `scripts/generate-brochures.mjs`
 * prints `/brochures/<slug>` for every entry here to
 * `public/fura/brochures/<slug>.pdf`, which the detail page's
 * "Download Project Brochure" button serves. A slug left out (Winghouse) keeps
 * the designed PDF already in that folder.
 */
import {
  FURA_LIVING_KELVYNGROOVE_DESCRIPTION,
  FURA_LIVING_KELVYNGROOVE_DETAIL_SPECS,
  FURA_LIVING_KELVYNGROOVE_GALLERY,
  FURA_LIVING_KELVYNGROOVE_PRICE,
  HABITECH_RESIDENCES_GALLERY,
  HABITECH_RESIDENCES_SPECS,
  THE_LAKES_DESCRIPTION,
  THE_LAKES_DETAIL_SPECS,
  THE_LAKES_GALLERY,
  THE_LAKES_PRICE,
  TIMOR_AVENUE_1_IMAGE,
  TIMOR_AVENUE_1_PRICE,
  TIMOR_AVENUE_1_SPECS,
  TIMOR_AVENUE_2_IMAGE,
  TIMOR_AVENUE_2_PRICE,
  TIMOR_AVENUE_2_SPECS,
  TIMOR_AVENUE_3_IMAGE,
  TIMOR_AVENUE_3_PRICE,
  TIMOR_AVENUE_3_SPECS,
  WINGHOUSE_L_DESCRIPTION,
  WINGHOUSE_L_DETAIL_SPECS,
  WINGHOUSE_L_GALLERY,
  WINGHOUSE_L_PRICE,
  WINGHOUSE_M_DESCRIPTION,
  WINGHOUSE_M_DETAIL_SPECS,
  WINGHOUSE_M_GALLERY,
  WINGHOUSE_M_PRICE,
  WINGHOUSE_S_DESCRIPTION,
  WINGHOUSE_S_DETAIL_SPECS,
  WINGHOUSE_S_GALLERY,
  WINGHOUSE_S_PRICE,
  WOLLOONGABBA_COLLECTIVE_GALLERY,
  WOLLOONGABBA_COLLECTIVE_SPECS,
} from "@/lib/properties-content";

export type Brochure = {
  title: string;
  description: string;
  status: string;
  price: string;
  images: string[];
  specs: { icon: string; label: string; value: string }[];
};

const TIMOR_AVENUE_DESCRIPTION =
  "A residential development across three land parcels in Loganholme, targeting low-rise housing using modern prefab modular construction. The project is planned for a rapid Build-to-Sell strategy in an area of strong housing demand.";

export const BROCHURES: Record<string, Brochure> = {
  "the-lakes": {
    title: "The Lakes",
    description: THE_LAKES_DESCRIPTION,
    status: "On going",
    price: THE_LAKES_PRICE,
    images: THE_LAKES_GALLERY,
    specs: THE_LAKES_DETAIL_SPECS,
  },
  "fura-living-kelvyngroove": {
    title: "Fura Living, Kelvyngroove Village",
    description: FURA_LIVING_KELVYNGROOVE_DESCRIPTION,
    status: "On going",
    price: FURA_LIVING_KELVYNGROOVE_PRICE,
    images: FURA_LIVING_KELVYNGROOVE_GALLERY,
    specs: FURA_LIVING_KELVYNGROOVE_DETAIL_SPECS,
  },
  "habitech-residences": {
    title: "Habitech Residences",
    description:
      "Habitech Residences is a opportunity comprising the acquisition, development and sale of a premium five-storey residential apartment project located at 153 Mt Gravatt–Capalaba Road, Upper Mount Gravatt, Queensland. The project comprises 35 apartments with two basement parking levels and rooftop communal facilities. The development has an estimated Gross Development Value (GDV) of AUD 38.67 million and is expected to be completed within 24 months.",
    status: "On going",
    price: "A$38.7M GDV",
    images: HABITECH_RESIDENCES_GALLERY,
    specs: HABITECH_RESIDENCES_SPECS,
  },
  "wolloongabba-collective": {
    title: "The Wolloongabba Collective",
    description:
      "A large-scale inner-city landbank project comprising six adjoining parcels with a combined site area of 10,336 sqm. The site offers strong mixed-use development potential and provides flexibility for either short-term exit or long-term delivery.",
    status: "On going",
    price: "10,336 sqm",
    images: WOLLOONGABBA_COLLECTIVE_GALLERY,
    specs: WOLLOONGABBA_COLLECTIVE_SPECS,
  },
  "timor-avenue": {
    title: "Timor Avenue",
    description: TIMOR_AVENUE_DESCRIPTION,
    status: "On going",
    price: TIMOR_AVENUE_1_PRICE,
    images: [TIMOR_AVENUE_1_IMAGE],
    specs: TIMOR_AVENUE_1_SPECS,
  },
  "timor-avenue-2": {
    title: "Timor Avenue Site 2",
    description: TIMOR_AVENUE_DESCRIPTION,
    status: "On going",
    price: TIMOR_AVENUE_2_PRICE,
    images: [TIMOR_AVENUE_2_IMAGE],
    specs: TIMOR_AVENUE_2_SPECS,
  },
  "timor-avenue-3": {
    title: "Timor Avenue Site 3",
    description: TIMOR_AVENUE_DESCRIPTION,
    status: "On going",
    price: TIMOR_AVENUE_3_PRICE,
    images: [TIMOR_AVENUE_3_IMAGE],
    specs: TIMOR_AVENUE_3_SPECS,
  },
  "winghouse-s": {
    title: "Winghouse S",
    description: WINGHOUSE_S_DESCRIPTION,
    status: "On going",
    price: WINGHOUSE_S_PRICE,
    images: WINGHOUSE_S_GALLERY,
    specs: WINGHOUSE_S_DETAIL_SPECS,
  },
  "winghouse-m": {
    title: "Winghouse M",
    description: WINGHOUSE_M_DESCRIPTION,
    status: "On going",
    price: WINGHOUSE_M_PRICE,
    images: WINGHOUSE_M_GALLERY,
    specs: WINGHOUSE_M_DETAIL_SPECS,
  },
  "winghouse-l": {
    title: "Winghouse L",
    description: WINGHOUSE_L_DESCRIPTION,
    status: "On going",
    price: WINGHOUSE_L_PRICE,
    images: WINGHOUSE_L_GALLERY,
    specs: WINGHOUSE_L_DETAIL_SPECS,
  },
};
