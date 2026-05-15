import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDir = path.join(process.cwd(), 'src/content/blog');

export type BlogPostMetadata = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  author: string;
  draft?: boolean;
};

export function getAllBlogPosts(): BlogPostMetadata[] {
  if (!fs.existsSync(contentDir)) {
    return [];
  }

  const files = fs.readdirSync(contentDir);

  const posts = files
    .filter((filename) => filename.endsWith('.mdx') || filename.endsWith('.md'))
    .map((filename) => {
      const filePath = path.join(contentDir, filename);
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const { data } = matter(fileContent);

      return {
        slug: filename.replace(/\.mdx?$/, ''),
        title: data.title || 'Untitled',
        date: data.date || '1970-01-01',
        excerpt: data.excerpt || '',
        author: data.author || 'Anonymous',
        draft: data.draft === true || data.draft === 'true',
      } as BlogPostMetadata;
    })
    // Filter out drafts in production builds, but show them in local development
    .filter((post) => {
      if (process.env.NODE_ENV === 'production') {
        return !post.draft;
      }
      return true;
    })
    .sort((a, b) => (new Date(b.date).getTime() - new Date(a.date).getTime()));

  return posts;
}
