import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import { getAllBlogPosts } from '@/lib/mdx';

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export const dynamicParams = false;

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  
  try {
    const { default: Post, frontmatter } = await import(`@/content/blog/${slug}.mdx`);

    return (
      <article className="max-w-3xl mx-auto px-6 py-16 min-h-screen">
        <header className="mb-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
            {/* The title is usually in frontmatter, but if not, the MDX might have an h1. We'll let the MDX render its own H1 if we just output <Post /> */}
            {/* Actually, for standard styling, we can let MDX handle the body and we handle the container. */}
          </h1>
          <div className="flex items-center justify-center gap-x-4 text-sm text-gray-500 dark:text-gray-400">
            {/* If we want to show date here from frontmatter, we'd need to parse it or export it. */}
          </div>
        </header>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <Post />
        </div>
        
        <hr className="my-12 border-gray-200 dark:border-gray-800" />
        
        <div className="bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-8 border border-gray-100 dark:border-gray-800 text-center">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Need help scaling your Next.js application?</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">Book a technical audit with Commitapps and let us help you build faster, more resilient software.</p>
          <a href="mailto:contact@commitapp.com" className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors">
            Contact Us
          </a>
        </div>
      </article>
    );
  } catch (error) {
    notFound();
  }
}
