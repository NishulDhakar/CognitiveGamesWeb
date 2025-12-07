import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://games.nishul.dev";
  const lastModified = new Date();

  // ✅ MAIN GAME ROUTES (Play Pages)
  const games = [
    "switchchallenge",
    "gridchallenge",
    "digitchallenge",
    "motionchallenge",
    "spaciochallenge",
    "inductivechallenge",
    "deductivechallenge",
  ];

  // ✅ RULES / GUIDE ROUTES (SEO GOLD)
  const rules = [
    "switch-challenge",
    "grid-challenge",
    "digit-challenge",
    "motion-challenge",
    "spacio-challenge",
    "inductive-challenge",
    "deductive-challenge",
  ];

  // ✅ CORE SITE PAGES (HIGH PRIORITY)
  const corePages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/games`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/rules`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/capgemini-games`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/cognizant-games`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  // ✅ GAME PAGES
  const gamePages: MetadataRoute.Sitemap = games.map((slug) => ({
    url: `${baseUrl}/games/${slug}`,
    lastModified,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  // ✅ RULE / GUIDE PAGES
  const rulePages: MetadataRoute.Sitemap = rules.map((slug) => ({
    url: `${baseUrl}/rules/${slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  return [...corePages, ...gamePages, ...rulePages];
}
