# Alfa Zihal | UX Architect Portfolio

A personal portfolio site for **Alfa Zihal**, UX Architect — wireframe-first product strategy. Built with Next.js, Sanity CMS, and a clean architecture (domain / application / infrastructure).

## Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **UI:** [React 19](https://react.dev/), [Tailwind CSS](https://tailwindcss.com/), [Radix UI](https://www.radix-ui.com/) (shadcn/ui)
- **CMS:** [Sanity](https://www.sanity.io/) — content for blog, work, profile, and site copy
- **Language:** TypeScript

## Project Structure

```
app/
  (portfolio)/          # Main site routes
    page.tsx            # Home
    blog/               # Blog listing & [slug]
    contact/            # Contact page
    resume/             # Resume
    work/               # Work / projects ([id], [projectSlug])
  studio/               # Sanity Studio at /studio
sanity/schemas/         # Sanity document types (post, profile, siteContent, work)
src/
  domain/               # Entities, repository interfaces
  application/          # Use cases, DI, services
  infrastructure/       # Sanity repos, queries, mappers
components/             # Portfolio components + ui (shadcn)
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS)
- [pnpm](https://pnpm.io/) (`npm install -g pnpm`)

### Environment

Create `.env.local` and set:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=optional_for_studio
```

### Install & Run

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000). Content is managed in Sanity Studio at [http://localhost:3000/studio](http://localhost:3000/studio).

## Scripts

| Command       | Description        |
|--------------|--------------------|
| `pnpm dev`   | Start dev server   |
| `pnpm build` | Production build   |
| `pnpm start` | Start production   |
| `pnpm lint`  | Run ESLint         |

## Content (Sanity)

- **Blog** — posts with slug-based URLs
- **Work** — projects with id and slug routing
- **Profile** — single document (bio, etc.)
- **Site content** — single document for global site copy

Images are served from Sanity CDN (`cdn.sanity.io`); see `next.config.mjs` for `remotePatterns`.

## License

Private — portfolio of Alfa Zihal.
