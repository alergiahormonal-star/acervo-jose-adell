import type { Metadata } from 'next';
import '@/styles/globals.css';
import { getMemorialJsonLd } from '@/lib/schema-jsonld';

export const metadata: Metadata = {
  metadataBase: new URL('https://acervo-jose-adell.mbossois.workers.dev'),
  title: 'Memorial Humano & Acervo Completo José Adell y Fons (1868–1927)',
  description:
    'A vida emocionante, a família, o sorriso, o buril de mestre gravador e todas as 56 obras e 89 páginas originais de José Adell y Fons ("Pepe Adell", Vinaròs 1868 – Salvador da Bahia 1927).',
  alternates: {
    canonical: 'https://acervo-jose-adell.mbossois.workers.dev/',
  },
  openGraph: {
    title: 'Memorial Humano & Acervo Completo José Adell y Fons (1868–1927)',
    description:
      'Conheça as histórias humanas de Pepe Adell, a carta de adeus de Adolfo Morales de los Ríos, o luto por Doña Emilia e o catálogo completo de suas 56 publicações.',
    url: 'https://acervo-jose-adell.mbossois.workers.dev/',
    siteName: 'Memorial José Adell y Fons',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: '/paginas/pagina-84.webp',
        width: 1100,
        height: 1500,
        alt: 'Carta de Adolfo Morales de los Ríos sobre Pepe Adell (1927)',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = getMemorialJsonLd();

  return (
    <html lang="pt-BR">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
