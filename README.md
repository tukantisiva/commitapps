# Commitapps Platform & Technical Blog

Welcome to the **Commitapps** repository. This project serves as the primary digital presence for Commitapps' Fractional CTO & Enterprise Architecture consulting agency, as well as a high-performance, industry-standard technical blog.

Built on **Next.js 16** with the App Router, this platform is statically exported and hosted seamlessly on **GitHub Pages**.

## 🚀 Features

- **Blazing Fast MDX Blog:** Write technical posts in Markdown while natively embedding interactive React components.
- **Industry Standard Typography:** Powered by Tailwind Typography (`prose-zinc`) for a perfectly legible, minimalist reading experience inspired by top-tier engineering blogs.
- **Automated CLI Post Generator:** Scaffold new posts (and drafts) effortlessly right from your terminal.
- **Zero-Database Comments & Reactions:** Powered by `@giscus/react`, allowing readers to authenticate via GitHub and leave comments/reactions directly via GitHub Discussions.
- **Deep Analytics:** Integrated with **PostHog** for session replays, page view tracking, and user flow analysis.
- **Technical SEO Built-in:** Automatically generates Open Graph tags, Twitter Summary Cards, and an XML Sitemap dynamically for every post.

---

## 📝 Writing a New Blog Post

We built a custom CLI template manager so you never have to memorize YAML frontmatter.

To create a new post, simply run:
```bash
npm run new-post
```

The script will ask you for a Title, Author, Excerpt, and whether it's a **Draft**. It will then automatically generate your `.mdx` file in `src/content/blog/` with the current date.

### The Draft System
If you mark a post as a draft (`draft: true`), it will be **hidden from the production build**. However, you can still view and edit it locally by running the development server.

---

## 💻 Local Development

1. **Install Dependencies:**
   ```bash
   npm install
   ```
2. **Environment Variables:**
   Make sure you have a `.env.local` file with your PostHog keys (for local analytics testing):
   ```env
   NEXT_PUBLIC_POSTHOG_KEY=your_key_here
   NEXT_PUBLIC_POSTHOG_HOST=https://us.i.posthog.com
   ```
3. **Start the Server:**
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000/blog](http://localhost:3000/blog) to see your posts.

---

## 🌐 Deployment (GitHub Pages)

This project relies on Next.js Static Exports (`output: "export"`). It does not require a Node.js server. 

Deployment is **100% automated** via GitHub Actions.

When you push a commit to the `main` or `master` branch:
1. The `.github/workflows/deploy.yml` action triggers.
2. Next.js compiles all your MDX posts into static HTML inside the `/out` directory.
3. The action pushes the `/out` directory live to `commitapp.com`.

```bash
git add .
git commit -m "Publishing new architecture post"
git push origin main
```
*That's it. Your post is live in 2 minutes.*

---

## ⚙️ Integrations

### Giscus (Comments)
Comments are linked to this repository's "Discussions" tab. If you change your repository name, you must update the `repoId` and `categoryId` inside `src/components/Comments.tsx`.

### PostHog (Analytics)
Analytics are injected globally via `src/components/Analytics.tsx`. The API key is securely injected during the GitHub Actions build process via repository environment variables.
