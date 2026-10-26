/* ============================================================
   PROJECTS DATA — your three featured projects.
   ✏️ EDIT EVERYTHING HERE freely — descriptions, tech, images, links.
   Images live in src/assets/projects/ (swap the files, keep names,
   or import new ones and update `images` below).
   ============================================================ */

import bakeryHero from "../assets/projects/bakery-hero.jpg";
import bakeryDetail from "../assets/projects/bakery-detail.jpg";
import fashionHero from "../assets/projects/fashion-hero.jpg";
import fashionDetail from "../assets/projects/fashion-detail.jpg";
import hotelHero from "../assets/projects/hotel-hero.jpg";
import hotelDetail from "../assets/projects/hotel-detail.jpg";

export const projects = [
  {
    id: "shakir",
    index: "01",
    label: "Web Presence",
    name: "Shakir Cake & Bakery",
    tagline: "A bakery, served warm.",
    // Short card description (1–2 sentences)
    description:
      "A warm, appetizing web presence for a local bakery — designed to showcase celebration cakes, pastries and daily bakes, and to make it effortless for customers to find and contact the shop.",
    // Longer case-study copy shown in the modal
    overview:
      "Shakir Cake & Bakery needed a home on the web that feels as welcoming as the shop itself. The concept pairs a warm cream-and-caramel palette with large, appetizing photography so the products do the talking — from custom celebration cakes to everyday pastries.",
    approach:
      "This section is yours to write: what the bakery needed, how you structured the pages, what you focused on, and what you would improve next. (Edit src/data/projects.data.js — no code changes required.)",
    // ✏️ Confirm / adjust these to the stack you actually used
    tech: ["HTML", "CSS", "JavaScript"],
    accent: "caramel",
    status: "Featured project",
    images: [
      {
        src: bakeryHero,
        alt: "Three decorated cakes on marble stands in a warm bakery display — representative imagery",
      },
      {
        src: bakeryDetail,
        alt: "Artisan pastries plated in a minimalist editorial style — representative imagery",
      },
    ],
    // ✏️ Add real links when available — leave empty ("") to show an honest
    // "not yet added" note instead of a dead button.
    liveUrl: "",
    repoUrl: "",
  },

  {
    id: "bamrika",
    index: "02",
    label: "Web Presence",
    name: "Bamrika Islamic Cloth Center",
    tagline: "Modest fashion, presented with respect.",
    description:
      "An elegant storefront concept for an Islamic clothing center — a calm, trustworthy presentation of modest clothing and fabric, built to feel refined and respectful of its audience.",
    overview:
      "Bamrika Islamic Cloth Center offers modest fashion and quality fabrics. The design direction is deliberately quiet: ivory, deep emerald and charcoal tones, generous whitespace, and photography that presents the garments with dignity — letting the craftsmanship of each piece speak.",
    approach:
      "Tell the story of this build here: the pages you planned, how you approached the look and feel, and what you learned while building it. (Edit src/data/projects.data.js.)",
    tech: ["HTML", "CSS", "JavaScript"],
    accent: "emerald",
    status: "Featured project",
    images: [
      {
        src: fashionHero,
        alt: "Elegant embroidered abayas displayed on mannequins in a refined interior — representative imagery",
      },
      {
        src: fashionDetail,
        alt: "Rich emerald velvet fabric in soft folds — representative imagery",
      },
    ],
    liveUrl: "",
    repoUrl: "",
  },

  {
    id: "mekida",
    index: "03",
    label: "Digital Product",
    name: "Mekida Hotel QR Digital Menu",
    tagline: "The menu, one scan away.",
    description:
      "A digital menu system for a hotel dining room — guests scan a QR code at the table and browse a fast, elegant menu on their phone. No app install, no waiting for a printed menu.",
    overview:
      "Mekida Hotel's dining room deserves a menu that feels as considered as the food. The concept is a phone-first digital menu: guests scan a code at the table and instantly get a dark, elegant interface with champagne-gold accents — readable at a glance, updatable in minutes, and friendly to phones on limited data.",
    approach:
      "Describe how you approached the QR flow, the menu layout, and what you'd build next (categories, languages, prices…). This text is fully editable in src/data/projects.data.js.",
    tech: ["HTML", "CSS", "JavaScript"],
    accent: "gold",
    status: "Featured project",
    images: [
      {
        src: hotelHero,
        alt: "Elegant hotel dining room with marble table and crystal chandelier — representative imagery",
      },
      {
        src: hotelDetail,
        alt: "Moody fine-dining plated dish on a dark plate — representative imagery",
      },
    ],
    liveUrl: "",
    repoUrl: "",
  },
];
