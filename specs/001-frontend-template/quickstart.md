# Quickstart Validation Guide

## Prerequisites

- Node.js 22 LTS+
- pnpm 10+

## Setup

```bash
pnpm install
```

## Running the Application

```bash
pnpm dev
```

Navigate to `http://localhost:5173`. You should see the welcome page and the example feature.

### 4. Code Quality & Pre-commit

We use Husky and lint-staged to run the following checks before committing. You can run them manually to verify the setup:

```bash
pnpm format:check
pnpm lint
pnpm typecheck
pnpm test:run
```

Expected: All scripts exit with code 0.

### 5. Enterprise Additions Validation

1. **Theme Toggle**: Navigate to the UI, find the Theme Toggle component, switch to Dark Mode. Expected: UI instantly switches to dark theme with `dark` class added to `html`.
2. **Toast Notifications**: Trigger an action (e.g. login). Expected: A sonner toast notification pops up.
3. **Environment Validation**: Rename or remove a required variable from `.env` and restart dev server. Expected: Terminal immediately prints a Zod validation error.
4. **Global Error Boundary**: Trigger a forced error in a route. Expected: The custom Error Boundary UI catches it gracefully instead of crashing the app.
5. **CI/CD**: Push to a branch on GitHub. Expected: The GitHub Action workflow triggers and runs tests/linting.
