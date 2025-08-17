import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://games.nishul.dev";

  const games = [
    "deductivechallenge",
    "gridchallenge",
    "inductivechallenge",
    "motionchallenge",
    "switchchallenge",
  ];

  const rules = [
    "deductive-challenge",
    "grid-challenge",
    "inductive-challenge",
    "motion-challenge",
    "swith-challenge", // typo? maybe should be "switch-challenge"
  ];

  const urls: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/games`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/rules`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  games.forEach((slug) => {
    urls.push({
      url: `${baseUrl}/games/${slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    });
  });

  rules.forEach((slug) => {
    urls.push({
      url: `${baseUrl}/rules/${slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    });
  });

  return urls;
}
