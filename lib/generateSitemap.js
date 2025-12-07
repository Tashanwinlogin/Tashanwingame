const fs = require('fs');
const path = require('path');

const baseUrl = 'https://yourdomain.com'; // CHANGE THIS TO YOUR DOMAIN

const pagesDir = path.join(process.cwd(), 'pages');
const contentDir = path.join(process.cwd(), 'content/blog');

function getPages() {
  const pages = fs.readdirSync(pagesDir).filter(f => f.endsWith('.js') && !f.startsWith('_'));
  return pages.map(p => p.replace(/\.js$/, ''));
}

function getPosts() {
  if (!fs.existsSync(contentDir)) {
    return [];
  }
  const files = fs.readdirSync(contentDir).filter(f => f.endsWith('.md'));
  return files.map(f => f.replace(/\.md$/, ''));
}

const routes = [
  '',
  'about',
  'contact',
  'search',
  'blog'
].concat(getPosts().map(slug => `blog/${slug}`));

let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

routes.forEach(route => {
  xml += `  <url>\n`;
  xml += `    <loc>${baseUrl}/${route}</loc>\n`;
  xml += `    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>\n`;
  xml += `    <changefreq>weekly</changefreq>\n`; // ✅ FIXED THIS LINE
  xml += `    <priority>${route === '' ? '1.0' : '0.8'}</priority>\n`;
  xml += `  </url>\n`;
});

xml += '</urlset>';

const outputPath = path.join(process.cwd(), 'public/sitemap.xml');
fs.writeFileSync(outputPath, xml);

console.log(`✅ Generated sitemap with ${routes.length} URLs: ${outputPath}`);