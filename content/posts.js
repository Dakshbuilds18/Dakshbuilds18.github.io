// ─── Blog posts ───────────────────────────────────────────────────────
// To add a post: copy the sample object, give it a unique "id",
// set the date (YYYY-MM-DD), and write the body in Markdown.
// Newest-dated posts appear first automatically.

const POSTS = [
  {
    id: "welcome",
    title: "Welcome to my engineering notebook",
    date: "2026-07-05",
    tags: ["meta"],
    summary: "Why I'm documenting everything I build — including the failures.",
    body: `Most portfolios only show the polished final product. This one doesn't.

Every project here is documented the way real engineering actually happens:

- The **problem** I started with
- The **research** and design goals
- The **failures** (there are always failures)
- Each **iteration** and why it changed
- What I'd **improve** next time

## Why document failures?

Because that's where the learning is. A print that warped teaches you more about thermal contraction than ten that didn't.

More posts coming soon — starting with a build log of my first documented project.`
  }
];
