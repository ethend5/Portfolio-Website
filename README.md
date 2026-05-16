# Ethen Dhanaraj — Portfolio

Personal portfolio site for Ethen Dhanaraj, EE student at UC Santa Cruz, built with Next.js 16, TypeScript, Tailwind CSS v4, and Framer Motion.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Geist Sans / Geist Mono (via `next/font/google`)
- **Deployment**: Vercel

## Local Development

```bash
# Install dependencies
npm install

# Start dev server at http://localhost:3000
npm run dev
```

## Adding a New Project

Projects are stored in [`src/data/projects.ts`](src/data/projects.ts). Add a new object to the array:

```ts
{
  slug: "my-project",          // URL-safe identifier — used as /projects/my-project
  title: "My Project",
  description: "Short summary shown on the card.",
  longDescription: "Full detail shown on the project detail page.",
  tags: ["TypeScript", "React"],
  githubUrl: "https://github.com/ethend5/my-project",  // optional
  liveUrl: "https://myproject.dev",                     // optional
  featured: true,              // shows on the homepage Projects section
}
```

The project detail page at `/projects/[slug]` is automatically generated — no extra files needed.

## Resume PDF

Place your resume at `public/resume.pdf`. It will be served at `/resume` and available for download.

## Deploying to Vercel

1. Push to GitHub.
2. Import the repo at [vercel.com/new](https://vercel.com/new).
3. Vercel auto-detects Next.js — no extra settings needed (see `vercel.json`).
4. Add environment variables (see below).

## Environment Variables

Copy `.env.example` to `.env.local` and fill in the values:

```bash
cp .env.example .env.local
```

| Variable               | Purpose                                                                   |
| ---------------------- | ------------------------------------------------------------------------- |
| `RESEND_API_KEY`       | API key for sending contact-form emails via [Resend](https://resend.com)  |
| `NEXT_PUBLIC_SITE_URL` | Full URL of the deployed site (e.g. `https://ethendhanaraj.com`)          |

In Vercel, set these under **Project → Settings → Environment Variables**.
