import type { MetadataRoute } from "next";

import { featuredProjects } from "@/components/portfolio-data";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://dedywijaya.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 1,
    },
  ];

  const caseStudyRoutes = featuredProjects.map((project) => ({
    url: `${siteUrl}/case-studies/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...caseStudyRoutes];
}
