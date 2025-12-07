const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

// Directories
const blogDir = path.join(process.cwd(), 'content', 'blog');
const pagesDir = path.join(process.cwd(), 'pages');

// Load exclusion list from search-exclude.json (optional)
function getExcludedSlugs() {
  const excludePath = path.join(process.cwd(), 'search-exclude.json');
  if (!fs.existsSync(excludePath)) {
    return new Set();
  }

  try {
    const raw = fs.readFileSync(excludePath, 'utf8');
    const parsed = JSON.parse(raw);
    const list = Array.isArray(parsed.slugs) ? parsed.slugs : [];
    return new Set(list);
  } catch (err) {
    console.error('Failed to read search-exclude.json:', err);
    return new Set();
  }
}

// Blog posts: /blog/[slug]
function getBlogItems(excluded) {
  if (!fs.existsSync(blogDir)) return [];

  const files = fs.readdirSync(blogDir).filter((f) => f.endsWith('.md'));
  const items = [];

  for (const file of files) {
    const slug = file.replace(/\.md$/, '');
    if (excluded.has(slug)) continue;

    const fullPath = path.join(blogDir, file);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    items.push({
      slug,
      title: data.title || slug.replace(/-/g, ' '),
      excerpt: content.slice(0, 200).trim() + '...',
      content,
      tags: data.tags || [],
      date: data.date || '',
      type: 'post',
      url: `/blog/${slug}` // final URL for posts
    });
  }

  return items;
}

// Top-level pages: /about, /contact, /privacy, etc.
function getPageItems(excluded) {
  const items = [];
  if (!fs.existsSync(pagesDir)) return items;

  const entries = fs.readdirSync(pagesDir, { withFileTypes: true });

  for (const entry of entries) {
    if (entry.isDirectory()) {
      if (entry.name === 'blog' || entry.name === 'api') continue;
      continue;
    }
    if (!entry.name.endsWith('.js')) continue;

    const slug = entry.name.replace(/\.js$/, '');

    // Ignore special files and excluded slugs
    if (slug.startsWith('_')) continue;
    if (excluded.has(slug)) continue;

    const filePath = path.join(pagesDir, entry.name);
    const source = fs.readFileSync(filePath, 'utf8');

    const h1Match = source.match(/<h1[^>]*>([^<]+)<\/h1>/);
    const title = h1Match ? h1Match[1].trim() : slug.replace(/-/g, ' ');

    items.push({
      slug,
      title,
      excerpt: `Page: ${title}`,
      content: `Static page: ${title}`,
      tags: ['page'],
      date: '',
      type: 'page',
      url: slug === 'index' ? '/' : `/${slug}` // final URL for pages
    });
  }

  return items;
}

function generateSearchIndex() {
  const excluded = getExcludedSlugs();

  const posts = getBlogItems(excluded);
  const pages = getPageItems(excluded);

  const index = [...posts, ...pages];

  const outPath = path.join(process.cwd(), 'public', 'search-index.json');
  fs.writeFileSync(outPath, JSON.stringify(index, null, 2));

  console.log(
    `Generated search index with ${index.length} items (${posts.length} posts, ${pages.length} pages).`
  );
}

generateSearchIndex();
