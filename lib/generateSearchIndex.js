const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const outputPath = path.join(process.cwd(), 'public', 'search-index.json');

// Custom title overrides - ROOT DIRECTORY (same level as package.json)
const searchTitlesPath = path.join(process.cwd(), 'search-titles.json');
let searchTitles = {};
if (fs.existsSync(searchTitlesPath)) {
  searchTitles = JSON.parse(fs.readFileSync(searchTitlesPath, 'utf8'));
  console.log('Loaded custom titles:', Object.keys(searchTitles).length);
} else {
  console.log('No search-titles.json found - using defaults');
}

const items = [];

// 1. BLOG POSTS (content/blog/*.md)
const blogDir = path.join(process.cwd(), 'content', 'blog');
if (fs.existsSync(blogDir)) {
  const blogFiles = fs.readdirSync(blogDir).filter(f => f.endsWith('.md'));
  
  blogFiles.forEach(file => {
    const fullPath = path.join(blogDir, file);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    const slug = file.replace(/\.md$/, '');

    // Custom title OR frontmatter title OR default formatted slug
    const title = searchTitles[slug] || data.title || 
                  slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

    items.push({
      slug,
      title,
      excerpt: content.slice(0, 200).trim() + '...',
      content: content.toLowerCase(),
      tags: data.tags || [],
      type: 'post',
      url: `/blog/${slug}`
    });
  });
}

// 2. STATIC PAGES (pages/*.js) - Only if custom title exists
const staticPages = ['privacy', 'contact', 'about', 'login']; // Add your page slugs

staticPages.forEach(slug => {
  // Include page if it has custom title OR page file exists
  const hasCustomTitle = searchTitles[slug];
  const pagePath = path.join(process.cwd(), 'pages', `${slug}.js`);
  
  if (hasCustomTitle || fs.existsSync(pagePath)) {
    const title = searchTitles[slug] || 
                  `${slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}`;
    
    items.push({
      slug,
      title,
      excerpt: `View ${title.toLowerCase()}.`,
      content: slug,
      tags: ['page'],
      type: 'page',
      url: `/${slug}`
    });
  }
});

// Write updated index
fs.writeFileSync(outputPath, JSON.stringify(items, null, 2));
console.log(`✅ Search index generated: ${items.length} items`);
console.log(`   📝 ${items.filter(i => i.type === 'post').length} blog posts`);
console.log(`   📄 ${items.filter(i => i.type === 'page').length} pages`);
console.log(`   ✨ ${Object.keys(searchTitles).length} custom titles applied`);
