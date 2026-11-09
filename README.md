# Acervo Digital & Memorial Histórico José Adell y Fons (1868–1927)

Plataforma hemerográfica, biográfica e numismática dedicada a **José Adell y Fons ("Pepe Adell", 1868–1927)**, nascido em Vinaròs (Castellón, Comunidade Valenciana, Espanha), com atuação marcante em Barcelona, Madrid, Rio de Janeiro e Salvador (Bahia).

## Configuração para Deploy na Cloudflare Pages

- **Framework Preset:** Next.js (Static HTML Export)
- **Build Command:** `npm run build`
- **Build Output Directory:** `out`
- **Node.js Version:** `20.x`

Os arquivos `public/sitemap.xml`, `public/sitemap-index.xml`, `public/sitemap-hemeroteca.xml` e `public/robots.txt` são copiados automaticamente para a raiz do diretório `out/` durante o build estático.
