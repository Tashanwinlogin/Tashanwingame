const fs = require('fs');
const path = require('path');

const items = [];

// 1. AUTO-DETECT real pages (EXCLUDE 404, _files, index.js)
const pagesDir = path.join(process.cwd(), 'pages');
if (fs.existsSync(pagesDir)) {
  const pageFiles = fs.readdirSync(pagesDir)
    .filter(f => 
      f.endsWith('.js') && 
      !f.startsWith('_') && 
      f !== 'index.js' && 
      f !== '404.js'      // ← EXCLUDE 404
    );
  
  pageFiles.forEach(file => {
    const slug = file.replace(/\.js$/, '');
    items.push({ 
      url: `/${slug}`, 
      changefreq: 'weekly', 
      priority: 0.8 
    });
  });
  
  // Homepage
  items.unshift({ url: '/', changefreq: 'daily', priority: 1.0 });
}

// 2. AUTO-DETECT blog posts
const blogDir = path.join(process.cwd(), 'content', 'blog');
if (fs.existsSync(blogDir)) {
  const files = fs.readdirSync(blogDir).filter(f => f.endsWith('.md'));
  files.forEach(file => {
    const slug = file.replace(/\.md$/, '');
    items.push({ 
      url: `/blog/${slug}`, 
      changefreq: 'weekly', 
      priority: 0.7 
    });
  });
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${items.map(item => `
  <url>
    <loc>https://tashan-win.vercel.app${item.url}</loc>
    <changefreq>${item.changefreq}</changefreq>
    <priority>${item.priority}</priority>
  </url>`).join('')}
</urlset>`;

fs.writeFileSync(path.join(process.cwd(), 'public', 'sitemap.xml'), sitemap);
console.log('✅ CLEAN Sitemap:', items.length, 'URLs (404 excluded)');
console.log('   📄 Pages:', items.filter(i => !i.url.includes('/blog/')).length);
console.log('   📝 Posts:', items.filter(i => i.url.includes('/blog/')).length);
