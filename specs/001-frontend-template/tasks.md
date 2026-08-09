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
- [ ] T002 [P] Install Tailwind CSS and dependencies, configure in `tailwind.config.js` and `postcss.config.js`
- [ ] T003 [P] Initialize shadcn/ui and configure in `components.json`

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

- [ ] T008 [P] [US1] Configure React Router in `src/routes/index.tsx`
- [ ] T009 [P] [US1] Create basic AppLayout in `src/layouts/AppLayout.tsx`
- [ ] T010 [P] [US1] Create HomePage component in `src/pages/Home.tsx`
- [ ] T011 [US1] Update `src/App.tsx` and `src/main.tsx` to use the router

**Checkpoint**: At this point, User Story 1 should be fully functional and testable independently

---

## Phase 4: User Story 2 - Automated Code Quality Checks (Priority: P1)

**Goal**: Automatically check code for style, type, and linting errors before committing.

**Independent Test**: Intentionally introduce a formatting or typing error and attempt to commit the code.

### Implementation for User Story 2

- [ ] T012 [P] [US2] Configure ESLint with strict React rules in `eslint.config.js`
- [ ] T013 [P] [US2] Configure Prettier rules in `prettier.config.js`
- [ ] T014 [P] [US2] Configure Vitest and React Testing Library in `vitest.config.ts`
- [ ] T015 [US2] Configure Husky and lint-staged in `.husky/pre-commit` and `package.json`
- [ ] T016 [US2] Update `package.json` with scripts for `lint`, `format`, `typecheck`, and `test`

**Checkpoint**: At this point, User Stories 1 AND 2 should both work independently

---

## Phase 5: User Story 3 - Feature-Based Scaffolding (Priority: P2)

**Goal**: Provide a clear example of the feature-based architecture for developers to emulate.

**Independent Test**: Navigate the `src/features` directory and verify the separation of components, hooks, services, and state boundaries.

### Implementation for User Story 3

- [ ] T017 [P] [US3] Create example entity in `src/features/example/types/index.ts`
- [ ] T018 [P] [US3] Create example API service in `src/features/example/services/example.service.ts`
- [ ] T019 [P] [US3] Configure TanStack Query provider in `src/lib/query/provider.tsx` and integrate it into `src/App.tsx`
- [ ] T020 [P] [US3] Create example hook using TanStack Query in `src/features/example/hooks/useExample.ts`
- [ ] T021 [P] [US3] Configure Zustand base store in `src/stores/app.store.ts`
- [ ] T022 [P] [US3] Create Zod schema and React Hook Form component in `src/features/example/schemas/example.schema.ts` and `src/features/example/components/ExampleForm.tsx`
- [ ] T023 [US3] Create example UI component tying state and queries together in `src/features/example/components/ExampleFeature.tsx`

**Checkpoint**: All user stories should now be independently functional

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories

- [ ] T024 [P] Update `README.md` with final architecture notes and run instructions
- [ ] T025 Run `quickstart.md` validation to ensure project runs properly

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
