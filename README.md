# Daksh Jain — Engineering Portfolio

A zero-dependency static portfolio site. No build step, no framework, no server —
just open `index.html` or host it anywhere.

## How editing security works

The site is **static**: visitors can only view it. There is no admin panel and no
login because there's nothing to log into — content only changes when **you** edit
the files in this folder and re-deploy. Host it on GitHub Pages and only your
GitHub account can publish changes. That's the whole security model.

## Adding content

All content lives in the `content/` folder. Edit with any text editor (or ask Claude).

| What | Where |
|---|---|
| Name, about me, skills, links, resume path | `content/config.js` |
| Projects (full documentation template) | `content/projects.js` |
| Blog posts | `content/posts.js` |
| Photos, videos, standalone CAD files | `content/media.js` |

Files themselves go in `assets/`:

- `assets/images/` — photos (referenced from projects, posts, and the gallery)
- `assets/videos/` — local video files (or use YouTube embed URLs)
- `assets/cad/` — STEP/STL/F3D files for download
- `assets/resume/` — your resume PDF

### Adding a project

Copy the sample object in `content/projects.js` and fill in each section:
**problem, designGoals, research, challenges, failures, iterations, finalProduct,
improvements**. Markdown works everywhere (`**bold**`, `- lists`, `## headings`,
`![photo caption](assets/images/pic.jpg)`). Empty sections are hidden automatically.

### Adding a blog post

Copy the sample object in `content/posts.js`. Newest date appears first.

## Previewing locally

Just double-click `index.html`, or run a local server for the resume embed to work:

```
python3 -m http.server 8000
```

then open http://localhost:8000

## Deploying (GitHub Pages — free)

1. Create a repo on GitHub (e.g. `dakshjain.github.io` for a root URL).
2. In this folder: `git init && git add . && git commit -m "Portfolio site"`.
3. Push to the repo, then in repo **Settings → Pages** set the source to the
   `main` branch.
4. Your site is live at `https://YOURUSERNAME.github.io/` in a minute or two.

To update the site later: edit files, commit, push. Done.

The `old-site/` folder contains the previous calendar-diary experiment and is not
linked from the new site — delete it whenever you like.
