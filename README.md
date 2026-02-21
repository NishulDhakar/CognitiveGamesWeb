<div align="center">
  <img src="public/og-logo.png" alt="Blync Cognitive Games Logo" width="200" height="auto" />
  <h1>Blync – Cognitive Games Platform</h1>
  <p>
    <strong>A high-performance web platform for practicing cognitive ability tests used in placement assessments by top-tier tech companies like Capgemini and Cognizant.</strong>
  </p>

  <p>
    <a href="https://www.cognitivegames.me" target="_blank">View Live Demo</a> ·
    <a href="https://github.com/NishulDhakar/CognitiveGamesWeb/issues">Report a Bug</a> ·
    <a href="https://github.com/NishulDhakar/CognitiveGamesWeb/issues">Request Feature</a>
  </p>

  <p>
    <a href="https://nextjs.org"><img src="https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js" /></a>
    <a href="https://www.typescriptlang.org"><img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" /></a>
    <a href="https://tailwindcss.com"><img src="https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" /></a>
    <a href="https://supabase.com"><img src="https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white" alt="Supabase" /></a>
    <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge" alt="License: MIT" /></a>
  </p>
</div>

<hr />

## ✨ Features

- 🎮 **Interactive Cognitive Games** – Train your brain with memory, pattern recognition, and logical reasoning challenges exactly like the real exams.
- 🎯 **Placement-Focused Curriculum** – Practice authentic assessment patterns: Switch Challenge, Grid Challenge, Digit Challenge, Motion Challenge, Spacio Challenge, and more.
- 📊 **Progress & Leaderboards** – Monitor your improvement with global leaderboards and detailed performance analytics.
- 📚 **Comprehensive Guides** – Access in-depth tutorials, rules, mock tests, and strategies for optimal test preparation.
- 🤖 **AI-Powered Insights** – Leveraging Google Gemini for intelligent feedback and dynamic content generation.
- ⚡ **Lightning Fast** – Built on Next.js 16 with Turbopack, optimized for instant interactions and zero-layout shift.
- 🔒 **Secure Auth** – Seamless authentication via Google OAuth using Better Auth.

## 🛠 Active Technical Stack

| Category | Technology | Description |
|---|---|---|
| **Framework** | Next.js 16 (App Router) | React framework for SSR/SSG and optimized routing. |
| **Language** | TypeScript | Fully typed codebase for maximum reliability. |
| **Styling** | Tailwind CSS 4 + shadcn/ui | Utility-first CSS and unstyled accessible components. |
| **Animation** | Framer Motion | Fluid, physics-based UI animations. |
| **Auth** | Better Auth | Modern, secure authentication with Google OAuth integration. |
| **Database** | PostgreSQL + Supabase | Scalable relational database. |
| **ORM** | Prisma | Type-safe database client and migrations. |
| **AI Integration**| Google Gemini | Core AI engine for dynamic capabilities. |

## 🚀 Quick Start

Get the project running locally in under 2 minutes:

### 1. Clone the repository
```bash
git clone https://github.com/NishulDhakar/CognitiveGamesWeb.git
cd CognitiveGamesWeb
```

### 2. Install dependencies
```bash
pnpm install
```

### 3. Configure environment variables
```bash
cp .env.example .env
```
> **Note:** You will need to populate `.env` with your Supabase credentials, Better Auth secrets, Google OAuth keys, and Gemini API key.

### 4. Setup the database
```bash
npx prisma generate
npx prisma db push
```

### 5. Start the development server
```bash
pnpm dev
```
Your application will be running at [http://localhost:3000](http://localhost:3000).

## 🏗 Architecture Overview

The project follows a modern **feature-based architecture** combined with Next.js App Router conventions:

```text
src/
├── app/                  # Next.js routing, layouts, pages, and API endpoints
├── components/           # UI layer: shadcn/ui primitives, feature components, game engines
├── features/             # Domain logic (auth, leaderboard, scoring, polls, admin)
├── config/               # Centralized configuration (SEO, navigation, site data)
├── lib/                  # Core infrastructure (Prisma, auth setup, shared utils)
├── content/              # Static content for blogs, rules, and guides
└── types/                # Global TypeScript definitions
```

## 🤝 Contributing

We welcome contributions from the community! Whether it's reporting a bug, suggesting a feature, or writing code, your help is appreciated.

Please read our [Contributing Guidelines](CONTRIBUTING.md) to get started on how to submit Pull Requests.

## 📄 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

---

<div align="center">
  <p>Built with ❤️ by <a href="https://www.nishul.dev">Nishul Dhakar</a></p>
  <p>
    <a href="https://twitter.com/nishuldhakar">Twitter</a> •
    <a href="https://github.com/Nishuldhakar">GitHub</a>
  </p>
</div>
