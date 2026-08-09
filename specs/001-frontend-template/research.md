# Research: Base Frontend Template

## Technology Stack Decisions

**Decision**: Use React, Vite, and TypeScript.
**Rationale**: Mandated by the project constitution as the standard for frontend templates.
**Alternatives considered**: Next.js (rejected as the constitution specifies Vite for this template).

**Decision**: State Management boundaries (TanStack Query for server, Zustand for client).
**Rationale**: Mandated by the project constitution.

**Decision**: UI Foundation (Tailwind CSS + shadcn/ui).
**Rationale**: Mandated by the project constitution.

**Decision**: Code Quality Automation
**Rationale**: Constitution requires strict quality gates. We will implement Husky and lint-staged to run ESLint, Prettier, and TypeScript checks before every commit.
