import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { getAllBlogPosts } from '@/lib/mdx';

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const posts = getAllBlogPosts();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      url: `https://commitapp.com/blog/${slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const posts = getAllBlogPosts();
  const postMetadata = posts.find((p) => p.slug === slug);
  
  if (!postMetadata) {
    notFound();
  }

  try {
    const { default: Post } = await import(`@/content/blog/${slug}.mdx`);

    return (
      <article className="max-w-2xl mx-auto px-6 py-20 min-h-screen font-sans selection:bg-blue-200 dark:selection:bg-blue-900">
        <Link href="/blog" className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors flex items-center gap-2 mb-12">
          ← Back to Blog
        </Link>
        
        <header className="mb-14">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-50 mb-6 leading-snug">
            {postMetadata.title}
          </h1>
          <div className="flex items-center gap-x-3 text-sm text-gray-500 dark:text-gray-400 font-medium">
            <time dateTime={postMetadata.date}>
              {new Date(postMetadata.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <span>•</span>
            <span>{postMetadata.author}</span>
          </div>
        </header>

        {/* The typography plugin makes standard HTML tags look beautiful */}
        <div className="prose prose-zinc prose-lg dark:prose-invert prose-headings:font-semibold prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline prose-img:rounded-xl max-w-none prose-p:leading-relaxed">
          <Post />
        </div>
        
        <hr className="my-16 border-gray-200 dark:border-gray-800" />
        
        <div className="bg-zinc-50 dark:bg-zinc-900/40 rounded-2xl p-8 border border-zinc-100 dark:border-zinc-800 text-center shadow-sm">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Build faster with Commitapps.</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm">We help scale modern architectures. Let's work together on your next MVP.</p>
          <a href="mailto:contact@commitapp.com" className="inline-flex items-center justify-center rounded-full bg-zinc-900 dark:bg-white px-6 py-2.5 text-sm font-medium text-white dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors">
            Contact Us
          </a>
        </div>
      </article>
    );
  } catch (error) {
    notFound();
  }
}
