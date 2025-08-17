import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '*',
      // disallow: '/api/', // (optional) if you want to block APIs from indexing
    },
    sitemap: 'https://games.nishul.dev/sitemap.xml',
  }
}
