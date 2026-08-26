# Adding photos, screenshots and video

Nothing here is required for the site to build — every slot renders a designed
placeholder until you fill it in. Add media in two steps.

## 1. Drop the file in

| Folder | What goes in it | Suggested size |
|---|---|---|
| `profile/` | Your portrait — rendered as a circle, so use a **square** head-and-shoulders crop | 900 × 900 |
| `projects/` | Project screenshots, diagrams, result figures | 1600 × 1000 (16:10) |
| `apps/` | App Store screenshots and marketing shots | 1600 × 900 (16:9) |
| `beyond/` | Fitness, travel and lifestyle photos | 1200 × 1200 (square) |

Name files after the thing they belong to, e.g. `projects/robust-eo-pipeline.jpg`,
`beyond/travel-banff-01.jpg`. Keep each file under ~400 KB — export JPEG at
quality 80, or WebP. There is no image optimisation step, so what you upload is
what visitors download.

## 2. Point the content file at it

Every media slot lives in `src/content/`. Set `src` to the path **from `/public`**
and write real alt text:

```ts
// src/content/beyond.ts
media: [
  { src: "/media/beyond/travel-banff-01.jpg", alt: "Moraine Lake at sunrise" },
  { src: "/media/beyond/travel-tokyo-01.jpg", alt: "Side street in Shimokitazawa" },
]
```

- **Portrait** → `src/content/profile.ts`, the `portrait` field. It renders as a
  circle with a centre crop; if the face sits high or low, set
  `position: "50% 35%"` on the media item to nudge it.
- **Project galleries** → `src/content/projects.ts`, the `media` array on each project.
  Add as many entries as you like; the gallery grid grows to fit.
- **App screenshots** → `src/content/apps.ts`.
- **Beyond Work photos** → `src/content/beyond.ts`. Two or three per tile looks best.

`caption` is optional and renders over the bottom of the image.

## Video

Set `type: "video"` and point `src` at an `.mp4` in the same folders:

```ts
{ src: "/media/projects/demo.mp4", alt: "Pose estimation demo", type: "video" }
```

Keep videos short and under ~10 MB — GitHub Pages serves them uncompressed.

## Waiting on a photo

If a `src` points at a file that isn't there yet, the site shows the designed
placeholder instead of a broken image — so it is safe to wire up a path before
the photo lands. Right now `beyond/training-gym.jpg` is wired up and waiting.

## Publishing

Commit and push to `main`. GitHub Actions rebuilds and redeploys automatically;
the live site updates in about two minutes.
