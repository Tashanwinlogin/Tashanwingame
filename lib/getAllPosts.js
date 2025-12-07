const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const contentDir = path.join(process.cwd(), 'content/blog');

module.exports = () => {
  const files = fs.readdirSync(contentDir).filter(f => f.endsWith('.md'));
  const posts = files.map(file => {
    const fullPath = path.join(contentDir, file);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);
    return {
      slug: file.replace(/\.md$/, ''),
      ...matterResult.data
    };
  }).sort((a, b) => new Date(b.date) - new Date(a.date));
  return posts;
};