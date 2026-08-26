/**
 * Shared content types.
 *
 * Everything the site displays comes from `src/content/*` and is typed here.
 * To add a project, a photo or a new "beyond work" tile, edit the content
 * modules — never the components.
 */

/** A photo, screenshot or video slot. Leave `src` empty to render a placeholder. */
export type MediaItem = {
  /** Path under /public, e.g. "/media/projects/robust-eo-01.jpg". Empty = placeholder. */
  src: string;
  /** Always write real alt text — it is read aloud and shown if the file is missing. */
  alt: string;
  caption?: string;
  type?: "image" | "video";
  /** CSS object-position, e.g. "50% 30%". Use to nudge the crop when a face
   *  sits high or low in the frame. Defaults to centre. */
  position?: string;
};

export type Link = {
  label: string;
  href: string;
  /** Renders a small icon next to the label. */
  icon?: "github" | "external" | "paper" | "appstore" | "playstore" | "mail" | "linkedin";
};

export type Category = "AI & ML" | "iOS" | "Research" | "Full-stack";

/**
 * `core` projects render as large cards at the top of the Selected Work
 * section, in array order. `more` projects render as compact rows underneath,
 * bucketed by `group`. Ordering is priority order — highest first.
 */
export type Tier = "core" | "more";

export type Project = {
  slug: string;
  title: string;
  /** One line, shown on the card. Keep it under ~110 characters. */
  blurb: string;
  /** Paragraphs for the detail page. */
  body: string[];
  /** Bullet points of what was actually built / found. */
  highlights?: string[];
  year: string;
  categories: Category[];
  stack: string[];
  links?: Link[];
  media?: MediaItem[];
  tier: Tier;
  /** Bucket heading for `more` projects. Ignored for `core`. */
  group?: string;
  /** Organisation or affiliation, shown above the title. */
  context?: string;
};

export type Role = {
  title: string;
  org: string;
  location: string;
  period: string;
  current?: boolean;
  points: string[];
  stack?: string[];
};

export type ResearchItem = {
  title: string;
  venue?: string;
  status: string;
  summary: string;
  points?: string[];
  stack?: string[];
  links?: Link[];
  media?: MediaItem[];
};

export type AppItem = {
  name: string;
  tagline: string;
  description: string;
  role: string;
  stack: string[];
  links?: Link[];
  media?: MediaItem[];
};

export type SkillGroup = {
  name: string;
  items: string[];
};

export type BeyondTile = {
  key: string;
  title: string;
  kicker: string;
  body: string;
  media: MediaItem[];
};

export type Award = {
  title: string;
  detail: string;
  year: string;
};

export type EducationItem = {
  school: string;
  credential: string;
  location: string;
  period: string;
  notes?: string[];
};
