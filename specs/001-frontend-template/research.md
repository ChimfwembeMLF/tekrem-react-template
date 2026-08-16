# Research: Base Frontend Template

## Technology Stack Decisions

**Decision**: Use React, Vite, and TypeScript.
**Rationale**: Mandated by the project constitution as the standard for frontend templates.
**Alternatives considered**: Next.js (rejected as the constitution specifies Vite for this template).

**Decision**: State Management boundaries (TanStack Query for server, Zustand for client).
**Rationale**: Mandated by the project constitution.

**Decision**: UI Foundation (Tailwind CSS + shadcn/ui).
**Rationale**: Mandated by the project constitution.

### Form Management & Validation

- **Decision**: React Hook Form + Zod
- **Rationale**: Best-in-class integration via `@hookform/resolvers/zod`. Minimal re-renders. Zod allows defining both form schemas and API payload schemas.
- **Alternatives**: Formik, Yup (older, larger bundle, less native TypeScript support).

## Enterprise Additions Research

### Toast Notifications

- **Decision**: `sonner` via shadcn/ui.
- **Rationale**: Lightweight, highly customizable, and natively supported by shadcn/ui as the modern toast default.
- **Alternatives**: react-hot-toast, react-toastify.

### Global Error Boundary

- **Decision**: React Router `errorElement` and a custom top-level Error Boundary component.
- **Rationale**: Integrates perfectly with our router to gracefully catch render/fetch errors without crashing the entire SPA.

### Theme Toggle

- **Decision**: `next-themes` via shadcn/ui.
- **Rationale**: Automatically handles system preference, prevents hydration mismatch (if SSR), and applies `dark` class easily.

### Environment Validation

- **Decision**: Validate `import.meta.env` with `zod` at startup in `src/lib/env.ts`.
- **Rationale**: Prevents missing environment variables from causing obscure runtime errors deep within the application.

### CI/CD

- **Decision**: GitHub Actions.
- **Rationale**: Standard, free for public/private repos, easily configured with a simple `ci.yml` that runs `pnpm install`, `pnpm lint`, `pnpm typecheck`, and `pnpm test`.

**Decision**: Code Quality Automation
**Rationale**: Constitution requires strict quality gates. We will implement Husky and lint-staged to run ESLint, Prettier, and TypeScript checks before every commit.
