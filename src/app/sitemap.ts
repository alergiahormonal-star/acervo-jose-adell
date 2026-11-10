import { MetadataRoute } from 'next';
import { CATALOG_WORKS } from '@/data/acervo-completo';
import { HUMAN_STORIES } from '@/data/historias-humanas';
import { PERSONALITIES_LIST } from '@/data/personalidades';
import { SUPPORTED_LANGS } from '@/lib/i18n-ui';
import { SITE_URL } from '@/lib/site-config';

const BASE_URL = SITE_URL;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString().split('T')[0];
  const entries: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
  ];

  for (const lang of SUPPORTED_LANGS) {
    entries.push(
      {
        url: `${BASE_URL}/${lang}/`,
        lastModified: now,
        changeFrequency: 'weekly',
        priority: 1.0,
      },
      {
        url: `${BASE_URL}/${lang}/acervo/`,
        lastModified: now,
        changeFrequency: 'weekly',
        priority: 0.95,
      },
      {
        url: `${BASE_URL}/${lang}/prefacio/`,
        lastModified: now,
        changeFrequency: 'monthly',
        priority: 0.95,
      },
      {
        url: `${BASE_URL}/${lang}/trineto-de-pepe-adell/`,
        lastModified: now,
        changeFrequency: 'monthly',
        priority: 0.9,
      },
      {
        url: `${BASE_URL}/${lang}/caderno-original/`,
        lastModified: now,
        changeFrequency: 'monthly',
        priority: 0.9,
      }
    );

    for (const story of HUMAN_STORIES) {
      entries.push({
        url: `${BASE_URL}/${lang}/historia/${story.slug}/`,
        lastModified: now,
        changeFrequency: 'monthly',
        priority: 0.95,
      });
    }

    for (const person of PERSONALITIES_LIST) {
      entries.push({
        url: `${BASE_URL}/${lang}/personalidade/${person.slug}/`,
        lastModified: now,
        changeFrequency: 'monthly',
        priority: 0.9,
      });
    }

    for (const work of CATALOG_WORKS) {
      entries.push({
        url: `${BASE_URL}/${lang}/obra/${work.slug}/`,
        lastModified: now,
        changeFrequency: 'monthly',
        priority: 0.85,
      });
    }

    for (let p = 1; p <= 89; p++) {
      entries.push({
        url: `${BASE_URL}/${lang}/pagina/${p}/`,
        lastModified: now,
        changeFrequency: 'monthly',
        priority: 0.75,
      });
    }
  }

  return entries;
}
