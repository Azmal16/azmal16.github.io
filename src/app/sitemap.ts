import type { MetadataRoute } from "next";
import { projects } from "@/content/projects";
import { profile } from "@/content/profile";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${profile.siteUrl}/`, lastModified: now, priority: 1 },
    ...projects.map((p) => ({
      url: `${profile.siteUrl}/projects/${p.slug}/`,
      lastModified: now,
      priority: 0.7,
    })),
  ];
}
