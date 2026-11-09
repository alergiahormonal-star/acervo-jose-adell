import type { Metadata } from 'next';
import '@/styles/globals.css';
import { getMemorialJsonLd } from '@/lib/schema-jsonld';

export const metadata: Metadata = {
  title: 'Acervo Digital & Memorial Histórico José Adell y Fons (1868–1927)',
  description:
    'Plataforma hemerográfica, biográfica e numismática dedicada ao jornalista republicano e mestre gravador em metal José Adell y Fons (Vinaròs, Barcelona, Rio de Janeiro e Salvador).',
  alternates: {
    canonical: 'https://acervo-jose-adell.pages.dev/pt/',
    languages: {
      'pt-BR': 'https://acervo-jose-adell.pages.dev/pt/',
      'es-ES': 'https://acervo-jose-adell.pages.dev/es/',
      'ca-valencia': 'https://acervo-jose-adell.pages.dev/va/',
      'x-default': 'https://acervo-jose-adell.pages.dev/pt/',
    },
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
