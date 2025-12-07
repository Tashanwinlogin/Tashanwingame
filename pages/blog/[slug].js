import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const contentDir = path.join(process.cwd(), 'content/blog');

export async function getStaticPaths() {
  const files = fs.readdirSync(contentDir);
  const paths = files.map((file) => ({
    params: { slug: file.replace(/\.md$/, '') },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const fullPath = path.join(contentDir, `${params.slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return { props: { data, contentHtml } };
}

export default function Post({ data, contentHtml }) {
  return (
    <main className="min-h-screen bg-black text-white py-20 px-4">
      <article className="max-w-4xl mx-auto prose prose-invert">
        <h1 className="text-5xl font-bold mb-4">{data.title}</h1>
        <div className="text-gray-400 mb-8">{data.date}</div>
        <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </article>
    </main>
  );
}
