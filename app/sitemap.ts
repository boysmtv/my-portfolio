import type { MetadataRoute } from "next";

import { featuredProjects } from "@/components/portfolio-data";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/#projects", "/#contact"].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
  }));

  const caseStudyRoutes = featuredProjects.map((project) => ({
    url: `${siteUrl}/case-studies/${project.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...caseStudyRoutes];
}
