import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: [
          '/',
          '/es/',
          '/va/',
          '/pt/',
          '/paginas/',
          '/destaques/',
        ],
      },
    ],
    sitemap: 'https://acervo-jose-adell.mbossois.workers.dev/sitemap.xml',
    host: 'https://acervo-jose-adell.mbossois.workers.dev',
  };
}
