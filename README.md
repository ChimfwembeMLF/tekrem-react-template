# Tekrem React Frontend Template

Official frontend starter template implementing our Feature-Based Architecture.

## Architecture

This project strictly adheres to the architecture outlined in our constitution:

- **State Management**: TanStack Query (Server State) + Zustand (Client State)
- **Styling**: Tailwind CSS + shadcn/ui
- **Routing**: React Router
- **Forms**: React Hook Form + Zod
- **Type Safety**: Strict TypeScript (`noImplicitReturns`, `noUnusedLocals`, etc.)

### Directory Structure

- `src/features/*`: Encapsulated feature modules containing their own components, hooks, schemas, services, and types.
- `src/components/ui/*`: Reusable UI components from shadcn.
- `src/components/common/*`: Global layout and wrapper components.
- `src/lib/*`: Global utilities (e.g., `apiClient.ts`, `cn()`).
- `src/pages/*`: Page-level route components.
- `src/stores/*`: Global Zustand stores.

## Requirements

- Node.js 22 LTS+
- yarn 10+
- Git

## Getting Started

1. **Install dependencies**:

   ```bash
   yarn install
   ```

2. **Start the development server**:
   ```bash
   yarn run dev
   ```

## Development Commands

- `yarn run build`: Type-check and build the production bundle
- `yarn run lint`: Run ESLint and check for code quality issues
- `yarn run format`: Format code with Prettier
- `yarn run test`: Run the Vitest suite
- `yarn run typecheck`: Run TypeScript compiler without emitting files
