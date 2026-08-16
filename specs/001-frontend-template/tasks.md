# Tasks: Base Frontend Template

**Input**: Design documents from `specs/001-frontend-template/`

**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, quickstart.md

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [x] T001 Initialize React/Vite/TypeScript project in repository root (updating `package.json` and `vite.config.ts`)
- [x] T002 [P] Install Tailwind CSS and dependencies, configure in `tailwind.config.js` and `postcss.config.js`
- [x] T003 [P] Initialize shadcn/ui and configure in `components.json`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [x] T004 Enforce strict TypeScript settings in `tsconfig.json` and `tsconfig.app.json`
- [x] T005 Create standard project directories (`src/assets`, `src/components`, `src/features`, `src/lib`, `src/routes`, `src/pages`, `src/services`, `src/stores`, `src/types`, `src/schemas`, `src/hooks`, `src/layouts`)
- [ ] T006 Setup global CSS variables for Tailwind/shadcn in `src/index.css`
- [x] T007 Implement centralized API architecture with standard client in `src/lib/api/client.ts`

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - Developer Setup (Priority: P1) 🎯 MVP

**Goal**: Developers can clone the repository and start the development server immediately.

**Independent Test**: Clone the repo, run install, and start the dev server to see the welcome page.

### Implementation for User Story 1

- [x] T008 [P] [US1] Configure React Router in `src/routes/index.tsx`
- [x] T009 [P] [US1] Create basic AppLayout in `src/layouts/AppLayout.tsx`
- [x] T010 [P] [US1] Create HomePage component in `src/pages/Home.tsx`
- [x] T011 [US1] Update `src/App.tsx` and `src/main.tsx` to use the router

**Checkpoint**: At this point, User Story 1 should be fully functional and testable independently

---

## Phase 4: User Story 2 - Automated Code Quality Checks (Priority: P1)

**Goal**: Automatically check code for style, type, and linting errors before committing.

**Independent Test**: Intentionally introduce a formatting or typing error and attempt to commit the code.

### Implementation for User Story 2

- [x] T012 [P] [US2] Configure ESLint with strict React rules in `eslint.config.js`
- [x] T013 [P] [US2] Configure Prettier rules in `prettier.config.js`
- [x] T014 [P] [US2] Configure Vitest and React Testing Library in `vitest.config.ts`
- [x] T015 [US2] Configure Husky and lint-staged in `.husky/pre-commit` and `package.json`
- [x] T016 [US2] Update `package.json` with scripts for `lint`, `format`, `typecheck`, and `test`

**Checkpoint**: At this point, User Stories 1 AND 2 should both work independently

---

## Phase 5: User Story 3 - Feature-Based Scaffolding (Priority: P2)

**Goal**: Provide a clear example of the feature-based architecture for developers to emulate.

**Independent Test**: Navigate the `src/features` directory and verify the separation of components, hooks, services, and state boundaries.

### Implementation for User Story 3

- [x] T017 [P] [US3] Create example entity in `src/features/example/types/index.ts`
- [x] T018 [P] [US3] Create example API service in `src/features/example/services/example.service.ts`
- [x] T019 [P] [US3] Configure TanStack Query provider in `src/lib/query/provider.tsx` and integrate it into `src/App.tsx`
- [x] T020 [P] [US3] Create example hook using TanStack Query in `src/features/example/hooks/useExample.ts`
- [x] T021 [P] [US3] Configure Zustand base store in `src/stores/app.store.ts`
- [x] T022 [P] [US3] Create Zod schema and React Hook Form component in `src/features/example/schemas/example.schema.ts` and `src/features/example/components/ExampleForm.tsx`
- [x] T023 [US3] Create example UI component tying state and queries together in `src/features/example/components/ExampleFeature.tsx`

**Checkpoint**: All user stories should now be independently functional

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories

- [x] T024 [P] Update `README.md` with final architecture notes and run instructions
- [x] T025 Run `quickstart.md` validation to ensure project runs properly

---

## Phase 7: Enterprise Additions (Priority: P2)

**Goal**: Complete the template with enterprise-ready features (CI/CD, Error Boundaries, Toast, env validation, theme toggle, unit testing).

**Independent Test**: Trigger a toast, toggle the theme, view GitHub actions, check console for env validation, trigger a runtime error.

### Implementation for Enterprise Additions

- [x] T026 [P] [US4] Setup GitHub Actions CI/CD workflow in `.github/workflows/ci.yml`
- [x] T027 [P] [US4] Configure environment variable validation with Zod in `src/lib/env.ts`
- [x] T028 [P] [US4] Implement Error Boundary in `src/components/common/ErrorBoundary.tsx` and integrate into `src/routes/index.tsx`
- [x] T029 [P] [US4] Install and configure sonner toast notifications in `src/components/ui/sonner.tsx` and `src/layouts/AppLayout.tsx`
- [x] T030 [P] [US4] Install and configure next-themes toggle in `src/components/common/ThemeToggle.tsx`
- [x] T031 [P] [US4] Add example unit test for Auth in `src/tests/auth.test.ts`

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3+)**: All depend on Foundational phase completion
  - User stories can then proceed in parallel
- **Polish (Final Phase)**: Depends on all desired user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational (Phase 2)
- **User Story 2 (P1)**: Can start after Foundational (Phase 2)
- **User Story 3 (P2)**: Can start after Foundational (Phase 2) - Requires TanStack/Zustand libraries.

### Parallel Opportunities

- All Setup tasks marked [P] can run in parallel
- All Foundational tasks marked [P] can run in parallel
- US1, US2, and US3 can start in parallel once the foundation is laid.
- Most components in US3 (models, services, hooks) can be created in parallel.

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational (CRITICAL - blocks all stories)
3. Complete Phase 3: User Story 1
4. **STOP and VALIDATE**: Test User Story 1 independently (run the Vite server).
5. Deploy/demo if ready

### Incremental Delivery

1. Complete Setup + Foundational → Foundation ready
2. Add User Story 1 → Test independently → Deploy/Demo (MVP!)
3. Add User Story 2 → Test independently → Validate pre-commit hooks
4. Add User Story 3 → Test independently → Validate feature structure
