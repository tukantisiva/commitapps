# Commitapps AI Agent Skills & Instructions

**Purpose:** This document provides structured context, strict constraints, and coding standards for any AI agent interacting with the `commitapps` repository. 

Read this document *before* generating code or making architectural suggestions to prevent hallucinations and ensure alignment with the project's exact stack.

---

## 1. Project Context & Identity
- **Business Identity:** Commitapps is a premium Fractional CTO and Enterprise Architecture consulting agency.
- **Design Philosophy:** The UI/UX must be minimalist, highly professional, and "industry-standard" (akin to Vercel, Linear, or Stripe).
- **Core Features:** Agency landing page + high-performance technical blog.

## 2. Technology Stack
- **Framework:** Next.js (App Router only).
- **Language:** TypeScript.
- **Styling:** Tailwind CSS (v4) with `@tailwindcss/typography` for markdown.
- **Content:** MDX (`@next/mdx`, `gray-matter`, `remark-frontmatter`).
- **Analytics:** PostHog (`posthog-js`).
- **Comments/Reactions:** Giscus (`@giscus/react`).

## 3. Critical Architectural Constraints (STRICT)
> [!WARNING]
> DO NOT suggest or implement any Node.js runtime features. This application is a strictly static site.

- **Deployment Target:** GitHub Pages.
- **Next.js Config:** Uses `output: "export"`.
- **Prohibited Features:** 
  - No Next.js API Routes (`src/app/api/...`).
  - No Server Actions that mutate data.
  - No `getServerSideProps` or dynamic server rendering.
  - No native Next.js Image Optimization (`next/image` requires unoptimized: true or a custom loader for static exports, though standard `<img>` tags or static images are preferred if unoptimized).
- **Dynamic Routes:** Any dynamic route (like `/blog/[slug]`) MUST use `generateStaticParams()` and export `const dynamicParams = false;`.

## 4. UI/UX & Styling Guidelines
- **Color Palette:** Do not use generic colors (e.g., standard red, blue, green). Use Tailwind's `zinc` palette for neutral backgrounds and borders.
- **Dark Mode:** The application defaults to Dark Mode. Always ensure classes support `dark:` variants (e.g., `bg-white dark:bg-zinc-950`).
- **Typography:** The blog uses `prose prose-zinc dark:prose-invert`. Do NOT add custom font-sizing or margins to raw Markdown elements; rely on the typography plugin.
- **Aesthetics:** Favor subtle borders (`border-zinc-800`), slight background transparencies, and rounded corners (`rounded-2xl`, `rounded-xl`).

## 5. Blog / Content Workflow
- **Path:** All posts live in `src/content/blog/`.
- **Format:** strictly `.mdx`.
- **Frontmatter Schema:**
  ```yaml
  title: string
  date: YYYY-MM-DD
  excerpt: string
  author: string
  draft: boolean (optional, true hides post in production)
  ```
- **CLI Generator:** Always instruct human users to use `npm run new-post` to generate new blog content instead of manually creating files.
- **Metadata:** SEO metadata is dynamically generated in `src/app/blog/[slug]/page.tsx` during the static build.

## 6. Integrations & State
Because the architecture is stateless (GitHub Pages), all stateful features must use 3rd-party BaaS:
- **Analytics:** Handled by `<Analytics />` (PostHog). Requires `NEXT_PUBLIC_POSTHOG_KEY` at build time.
- **Comments/Database:** Handled by `<Comments />` (Giscus). Uses GitHub Discussions as a database.
- **Environment Variables:** Because of the static export, all environment variables accessed in the client or required for the static build must be prefixed with `NEXT_PUBLIC_`.

## 7. AI Behavior Directives
- **Simplicity First:** Do not over-engineer. If a feature requires spinning up a database (e.g., Supabase/Firebase) or a backend, flag it as an architectural violation and suggest a BaaS or static alternative.
- **Component Placement:** Shared components go in `src/components/`. Route-specific components go in `src/app/`.
- **MDX Safety:** Do not add standard HTML `<h1>` tags inside the actual `.mdx` files; the `BlogPostPage` layout automatically renders the title from the frontmatter.
