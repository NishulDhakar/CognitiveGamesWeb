# Contributing to Cognitive Games

Thank you for your interest in contributing to **Blync Cognitive Games**! This guide will help you get started.

## Prerequisites

- **Node.js** v18+ (recommended: v20)
- **pnpm** (recommended) or npm
- A **Supabase** account for the database
- A **Google Cloud** account (for OAuth and Gemini AI, optional for local dev)

## Getting Started

1. **Fork & Clone**
   ```bash
   git clone https://github.com/<your-username>/CognitiveGamesWeb.git
   cd CognitiveGamesWeb
   ```

2. **Install Dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Set Up Environment**
   ```bash
   cp .env.example .env
   ```
   Fill in the required values — see `.env.example` for documentation.

4. **Set Up Database**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. **Start Development Server**
   ```bash
   pnpm dev
   ```
   Visit [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
├── app/              # Next.js App Router (routes & pages)
├── components/       # React components
│   ├── ui/           # shadcn/ui primitives
│   ├── layout/       # App shell (Header, Footer, Container)
│   ├── marketing/    # Landing page sections
│   ├── games/        # Game-specific UIs
│   ├── shared/       # Shared/common components
│   └── icons/        # SVG icon components
├── features/         # Feature modules (auth, leaderboard, scoring, polls)
├── hooks/            # Shared React hooks
├── lib/              # Infrastructure (Prisma, auth, utils)
├── config/           # App configuration & constants
├── content/          # Static content data
├── types/            # Shared TypeScript types
└── utils/            # Pure utility functions
```

## Coding Guidelines

- **TypeScript**: All new code must be written in TypeScript with strict mode
- **Naming**:
  - Components: `PascalCase.tsx`
  - Hooks: `use-kebab-case.ts`
  - Utilities/config: `kebab-case.ts`
  - Route directories: `kebab-case` (lowercase)
- **Imports**: Use the `@/` path alias (e.g., `import { siteConfig } from "@/config/site"`)
- **Components**: Prefer server components by default; add `"use client"` only when needed
- **Styling**: Use Tailwind CSS utility classes; avoid inline styles

## Making Changes

1. Create a feature branch: `git checkout -b feat/your-feature`
2. Make your changes following the coding guidelines
3. Ensure builds pass: `pnpm build`
4. Ensure linting passes: `pnpm lint`
5. Commit with a clear message: `git commit -m "feat: add new game mode"`
6. Push and open a Pull Request

## Commit Convention

We follow [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` — New feature
- `fix:` — Bug fix
- `docs:` — Documentation changes
- `style:` — Code style changes (formatting, no logic change)
- `refactor:` — Code restructuring without feature/fix
- `test:` — Adding or updating tests
- `chore:` — Maintenance tasks

## Need Help?

- Open an [issue](https://github.com/NishulDhakar/CognitiveGamesWeb/issues) for bugs or feature requests
- Check existing issues before creating new ones

---

Thank you for contributing! 🎮
