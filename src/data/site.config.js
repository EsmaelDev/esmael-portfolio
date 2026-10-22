/* ============================================================
   SITE CONFIG — edit this file to personalise your portfolio.
   Every value below is plain text: change it and save.
   ============================================================ */

export const site = {
  // ——— identity ———
  name: "Esmael Gemechu",
  shortName: "Esmael",
  role: "Software Engineering Student",
  school: "Arba Minch University",
  location: "Arba Minch, Ethiopia",

  // ——— contact ————————————————————————————————
  // ✏️ Your real email and phone (already configured from your brief).
  email: "gemechuesamel5@gmail.com",
  phone: "+251978930362",
  phoneDisplay: "+251 97 893 0362",

  // ——— links ———
  github: "https://github.com/EsmaelDev",
  portfolioRepo: "https://github.com/EsmaelDev/esmael-portfolio",

  // ——— hero copy ———
  hero: {
    overline: "Software Engineering Student · Arba Minch University · Ethiopia",
    // The headline renders across three lines; keep each string short.
    titleLines: ["Building", "useful digital", "experiences."],
    serifWords: ["useful digital"], // words rendered in italic gold serif
    lede: "I'm Esmael Gemechu — a Software Engineering student at Arba Minch University in Ethiopia. I design and build websites and web apps that help real people do real things: bakeries that show off their cakes, stores that present their clothing with respect, and hotel menus that live one scan away.",
    chips: ["React", "JavaScript", "Modern CSS", "Responsive by default"],
  },

  // ——— marquee strip under the hero ———
  marquee: [
    "React Engineering",
    "UI Design",
    "Problem Solving",
    "Clean Code",
    "Accessibility",
    "Modern CSS",
    "Learning in Public",
  ],

  // ——— footer ———
  footer: {
    // Editable closing message
    message: "Designed & built with care in Arba Minch, Ethiopia.",
    credit: "Built from scratch — React, Vite & modern CSS.",
  },
};

/* Navigation — sections the navbar / mobile menu / palette link to.
   `id` must match the section id in the JSX. */
export const navLinks = [
  { id: "work", label: "Work", num: "01" },
  { id: "about", label: "About", num: "02" },
  { id: "skills", label: "Skills", num: "03" },
  { id: "journey", label: "Process", num: "04" },
  { id: "contact", label: "Contact", num: "05" },
];
