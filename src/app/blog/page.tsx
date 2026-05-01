import Link from "next/link";
import { getAllBlogPosts } from "@/lib/mdx";

export const metadata = {
  title: "Blog | Commitapps",
  description: "Technical deep-dives, architecture, and agency journey.",
};

export default function BlogIndexPage() {
  const posts = getAllBlogPosts();

  return (
    <div className="max-w-4xl mx-auto px-6 py-16 min-h-screen">
      <header className="mb-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-gray-900 dark:text-white">
          Commitapps Blog
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Technical deep-dives, modern architecture, and our journey building an enterprise agency.
        </p>
      </header>

      <div className="grid gap-10">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="group relative flex flex-col items-start justify-between rounded-2xl border border-gray-200 dark:border-gray-800 p-6 sm:p-8 transition-colors hover:border-blue-500/50 hover:bg-gray-50 dark:hover:bg-white/[0.02]"
          >
            <div className="flex items-center gap-x-4 text-xs mb-4">
              <time dateTime={post.date} className="text-gray-500 dark:text-gray-400">
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <span className="relative z-10 rounded-full bg-blue-50 dark:bg-blue-900/30 px-3 py-1.5 font-medium text-blue-600 dark:text-blue-400">
                Engineering
              </span>
            </div>
            <div className="group relative">
              <h3 className="mt-3 text-2xl font-semibold leading-6 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                <Link href={`/blog/${post.slug}`}>
                  <span className="absolute inset-0" />
                  {post.title}
                </Link>
              </h3>
              <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600 dark:text-gray-300">
                {post.excerpt}
              </p>
            </div>
            <div className="relative mt-6 flex items-center gap-x-4">
              <div className="text-sm leading-6">
                <p className="font-semibold text-gray-900 dark:text-white">
                  <span className="absolute inset-0" />
                  {post.author}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
