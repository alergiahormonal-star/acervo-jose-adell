import { MetadataRoute } from 'next';
import { CATALOG_WORKS } from '@/data/acervo-completo';
import { HUMAN_STORIES } from '@/data/historias-humanas';

const BASE_URL = 'https://acervo-jose-adell.mbossois.workers.dev';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const mainPages: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/acervo/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${BASE_URL}/caderno-original/`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
  ];

  const storyPages: MetadataRoute.Sitemap = HUMAN_STORIES.map((story) => ({
    url: `${BASE_URL}/historia/${story.slug}/`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.95,
  }));

  const workPages: MetadataRoute.Sitemap = CATALOG_WORKS.map((work) => ({
    url: `${BASE_URL}/obra/${work.slug}/`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.85,
  }));

  return [...mainPages, ...storyPages, ...workPages];
}
