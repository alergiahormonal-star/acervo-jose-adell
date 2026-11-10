import type { Metadata } from 'next';
import '@/styles/globals.css';
import { getMemorialJsonLd } from '@/lib/schema-jsonld';
import { SITE_URL } from '@/lib/site-config';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Memorial Humano y Archivo Completo José Adell y Fons (1868–1927)',
  description:
    'La vida conmovedora, la familia, la sonrisa, el buril de maestro grabador y las 72 obras y 89 páginas originales de José Adell y Fons ("Pepe Adell", Vinaròs, Comunidad Valenciana, España, 1868 – Salvador de Bahía, Brasil, 1927).',
  alternates: {
    canonical: `${SITE_URL}/`,
    languages: {
      'es-ES': `${SITE_URL}/`,
      'ca-valencia': `${SITE_URL}/va/`,
      'pt-BR': `${SITE_URL}/pt/`,
      'x-default': `${SITE_URL}/`,
    },
  },
  openGraph: {
    title: 'Memorial Humano y Archivo Completo José Adell y Fons (1868–1927)',
    description:
      'Conozca las historias humanas de Pepe Adell, la carta de adiós de Adolfo Morales de los Ríos, el duelo por Doña Emilia y sus 72 obras en Castellano, Valencià y Português.',
    url: `${SITE_URL}/`,
    siteName: 'Memorial José Adell y Fons',
    locale: 'es_ES',
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
    <html lang="es">
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
