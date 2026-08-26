# azmal16.github.io

Personal portfolio — [azmal16.github.io](https://azmal16.github.io)

Static Next.js site, deployed to GitHub Pages by GitHub Actions on every push to `main`.

## Editing content

All copy, links and media references live in `src/content/`. You should never
need to touch a component to change what the site says.

| File | What it holds |
|---|---|
| `profile.ts` | Name, headline, bio, contact links, the four fact cards, portrait slot |
| `experience.ts` | Job timeline |
| `projects.ts` | Every project card and its detail page |
| `research.ts` | Research section |
| `apps.ts` | Shipped apps (App Store / Play links) |
| `education.ts` | Degrees and certifications |
| `skills.ts` | Skill groups |
| `awards.ts` | Competitions and recognition |
| `beyond.ts` | Fitness / travel / lifestyle tiles |

### Adding a project

Copy any object in `src/content/projects.ts`, change the fields, and pick a
unique `slug` — the detail page at `/projects/<slug>/` is generated automatically.
Set `featured: true` to promote it to a full-width card at the top of the grid.

### Adding photos or video

See [`public/media/README.md`](public/media/README.md). Every media slot renders
a designed placeholder until you fill it in, so nothing breaks while you wait.

### Replacing the résumé

Drop the new PDF at `public/Azmal_Awasaf_CV.pdf` (same filename) and push.

## Local development

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static export into ./out
```

## Publishing

Push to `main`. The Action builds and deploys; the live site updates in about
two minutes. Watch it under the repository's **Actions** tab.

## Stack

Next.js 16 (App Router, static export) · React 19 · TypeScript · Tailwind CSS v4 ·
Motion · Lucide icons. No runtime services — the whole site is static files.
