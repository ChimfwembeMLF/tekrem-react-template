<!-- Sync Impact Report
- Version change: 0.0.0 -> 1.0.0
- Modified principles: Replaced template principles with README architecture rules (Feature-Based Architecture, Separation of Concerns, State Management Boundaries, Forms & Validation, UI Foundation, Strict TypeScript)
- Added sections: None
- Removed sections: None
- Templates requiring updates: 
  - .specify/templates/plan-template.md (⚠ pending)
  - .specify/templates/spec-template.md (⚠ pending)
  - .specify/templates/tasks-template.md (⚠ pending)
-->
# Tekrem React Template Constitution

## Core Principles

### I. Feature-Based Architecture
Code MUST be organized by feature (`src/features/*`) rather than purely by type (e.g., all components together). Each feature should encapsulate its own components, hooks, schemas, services, and types to ensure scalability.

### II. Separation of Concerns (API Calls)
Components MUST NOT directly call APIs. The required data flow is: Component → Hook → TanStack Query → Service → API Client. This prevents components from being bloated with API logic.

### III. Strict State Management Boundaries
- **Server state** MUST be managed exclusively by TanStack Query.
- **Client/application state** MUST be managed exclusively by Zustand.

### IV. Robust Forms & Validation
- **Form state** MUST be managed by React Hook Form.
- **Runtime validation** MUST be handled by Zod.

### V. Standardized UI Foundation
shadcn/ui and Tailwind CSS MUST be used as the default UI foundation. Custom components should only be built when a shadcn/ui equivalent is not suitable.

### VI. Strict TypeScript & Quality Gates
TypeScript strict mode is mandatory. No JavaScript files are allowed in `src`. All code MUST pass ESLint, Prettier, and Vitest checks (via Husky/lint-staged) before committing.

## Additional Constraints

- Node.js 22 LTS+ and pnpm 10+ are required.
- No secrets may be placed in frontend environment variables. Variables starting with `VITE_` are exposed to the browser.
- Git conventions require conventional commits (e.g., feat:, fix:, docs:, refactor:).

## Development Workflow

- Local development is run via `pnpm dev` using Vite.
- Pre-commit hooks run ESLint, Prettier, and TypeScript checks.
- CI pipelines must enforce building, linting, formatting, and testing.

## Governance

The constitution supersedes all other practices. All Pull Requests and code reviews MUST verify compliance with these architecture rules.

**Version**: 1.0.0 | **Ratified**: 2026-08-09 | **Last Amended**: 2026-08-09
