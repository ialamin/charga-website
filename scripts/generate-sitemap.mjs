import { writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import landingData from '../src/data/landingPages.json' with { type: 'json' }

const site = process.argv[2] ?? 'pike'
const outDir = process.argv[3] ?? 'dist'

const baseUrl =
  site === 'grill' ? 'https://chargagrill.com' : 'https://chargaonthepike.com'

const mainPaths = ['/menu', '/about', '/locations']
const seoPaths =
  site === 'pike' ? landingData.pages.map((page) => `/${page.slug}`) : []

const paths = ['', ...mainPaths, ...seoPaths]
const lastmod = new Date().toISOString().slice(0, 10)

const urlEntries = paths
  .map((path) => {
    const loc = path ? `${baseUrl}${path}` : `${baseUrl}/`
    return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
  </url>`
  })
  .join('\n')

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>
`

const robots = `User-agent: *
Allow: /
${site === 'pike' ? 'Disallow: /seo-page\n' : ''}
Sitemap: ${baseUrl}/sitemap.xml
`

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
writeFileSync(join(root, outDir, 'sitemap.xml'), sitemap)
writeFileSync(join(root, outDir, 'robots.txt'), robots)

console.log(`Wrote sitemap (${paths.length} URLs) and robots.txt for ${site} → ${outDir}/`)
