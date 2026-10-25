/* ============================================================
   SKILLS & ENGINEERING TOOLKIT DATA
   Categorized technical toolkit based on Software Engineering
   coursework at Arba Minch University and active project execution.
   ============================================================ */

export const skillCategories = [
  { id: "all", label: "All Capabilities" },
  { id: "languages", label: "Languages & Core Logic" },
  { id: "frontend", label: "Frontend & Interfaces" },
  { id: "engineering", label: "Computer Science & AMU Coursework" },
  { id: "tools", label: "Workflow & Tooling" },
];

export const skillGroups = [
  {
    category: "languages",
    group: "Languages & Core Logic",
    items: [
      {
        name: "HTML5 & Semantic Web",
        blurb: "Accessible, semantic document architecture with pristine hierarchy.",
        context: "Core Foundation",
        appliedIn: "All 3 Projects",
      },
      {
        name: "Modern CSS & Responsive Systems",
        blurb: "Tokens, custom properties, responsive fluid typography, and micro-physics.",
        context: "Deep Practice",
        appliedIn: "Bamrika Fashion & Shakir Bakery",
      },
      {
        name: "JavaScript (ES6+)",
        blurb: "State machines, DOM APIs, async workflows, and pure modular logic.",
        context: "Daily Practice",
        appliedIn: "Mekida QR Engine & Command HUD",
      },
    ],
  },
  {
    category: "frontend",
    group: "Libraries & UI Architecture",
    items: [
      {
        name: "React (v18+)",
        blurb: "Composable component trees, state hooks, and resilient interface lifecycles.",
        context: "Production Framework",
        appliedIn: "This Portfolio & Web Concepts",
      },
      {
        name: "Component-Driven Design",
        blurb: "Self-contained UI components, design tokens, and modular style sheets.",
        context: "Active Practice",
        appliedIn: "Phone Mockup & Case Modals",
      },
    ],
  },
  {
    category: "engineering",
    group: "Computer Science & AMU Coursework",
    items: [
      {
        name: "Data Structures & Algorithms",
        blurb: "Algorithmic complexity, search & sort logic, and spatial efficiency.",
        context: "AMU Faculty Study",
        appliedIn: "Academic Coursework",
      },
      {
        name: "Object-Oriented Programming",
        blurb: "Inheritance, encapsulation, abstraction, and clean design patterns.",
        context: "AMU Faculty Study",
        appliedIn: "Core CS Studies",
      },
      {
        name: "Database Systems & SQL",
        blurb: "Relational schemas, queries, normalization, and entity modeling.",
        context: "AMU Faculty Study",
        appliedIn: "Systems Architecture",
      },
    ],
  },
  {
    category: "tools",
    group: "Tools & Daily Workflow",
    items: [
      {
        name: "Git Version Control",
        blurb: "Atomic commits, branching, and disciplined daily commit hygiene.",
        context: "Daily Sprints",
        appliedIn: "Daily GitHub Commits",
      },
      {
        name: "Vite Tooling",
        blurb: "Lightning-fast HMR dev server and optimized Rollup production builds.",
        context: "Build Pipeline",
        appliedIn: "Fast Local Development",
      },
      {
        name: "Responsive Design (360px—4K)",
        blurb: "Pixel-perfect adaptation across ultra-wide monitors and small mobile phones.",
        context: "Quality Standard",
        appliedIn: "Zero Overflow Layouts",
      },
    ],
  },
];

export const currentlyLearning = [
  "Advanced React Patterns",
  "Design Systems & Token Architecture",
  "Clean Code & Architectural Refactoring",
  "Web Accessibility (WCAG AAA standards)",
];
