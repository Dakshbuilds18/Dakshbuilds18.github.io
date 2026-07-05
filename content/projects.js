// ─── Projects ─────────────────────────────────────────────────────────
// Each project documents the full engineering process.
// To add a project: copy the sample object below, give it a unique "id",
// and fill in each section. Markdown works in every text field:
//   **bold**, *italic*, `code`, [link](url), ![caption](assets/images/pic.jpg)
//   - bullet lists, ## sub-headings
// Set "featured: true" to show it on the home page.

const PROJECTS = [
  {
    id: "sample-project",
    title: "Sample Project — Replace Me",
    date: "2026-07",
    status: "Completed",                       // e.g. Completed / In Progress / On Hold
    tags: ["CAD", "3D Printing", "Arduino"],
    cover: "",                                 // e.g. "assets/images/sample-cover.jpg"
    summary: "One or two sentences that appear on the project card. What is it and why is it interesting?",
    featured: true,

    // ── The engineering documentation template ──
    problem: "What problem were you trying to solve? Who has this problem and why does it matter?\n\nBe specific: *\"My desk lamp glare made late-night CAD work painful\"* beats *\"I wanted better lighting.\"*",

    designGoals: "- Goal 1 — e.g. must cost under $30\n- Goal 2 — e.g. fully 3D-printable, no supports\n- Goal 3 — e.g. assembly in under 10 minutes\n- Goal 4 — measurable success criteria",

    research: "What did you look into before building? Existing products, papers, videos, teardowns, math.\n\nWhat did you learn that shaped the design?",

    challenges: "The hard parts. Tolerances that didn't fit, code that wouldn't compile, parts that arrived late, physics that disagreed with you.",

    failures: "What broke, snapped, burned, or simply didn't work — and **why**. Failed attempts are the most valuable part of the documentation. Add photos of the carnage:\n\n![First prototype after the stress test](assets/images/placeholder.jpg)",

    iterations: "## v1 — Proof of concept\nWhat it was, what worked, what didn't.\n\n## v2 — Fixing the big issues\nWhat changed and the reasoning behind each change.\n\n## v3 — Refinement\nTolerances, finish, usability.",

    finalProduct: "Describe the finished product. Specs, performance numbers, photos, and a demo video if you have one.\n\n![Final assembly](assets/images/placeholder.jpg)",

    improvements: "- What would you change with more time/money?\n- What did you learn that you'd apply from day one next time?\n- Any features cut from scope?",

    // Optional extras (leave "" or [] if not used)
    videoUrl: "",                              // YouTube embed URL, e.g. "https://www.youtube.com/embed/VIDEO_ID"
    cadFiles: [                                // downloadable files for this project (put files in assets/cad/)
      // { name: "Main body v3 (STEP)", file: "assets/cad/main-body-v3.step" },
    ],
    githubRepo: ""                             // link to the project's code repo, if any
  }
];
