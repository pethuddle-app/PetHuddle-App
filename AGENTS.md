This is an Expo/React Native mobile application. Prioritize mobile-first patterns, performance, and cross-platform compatibility.

## Expo has changed — do not trust your training data

Expo ships breaking changes every SDK release. APIs you remember are likely renamed, moved, or removed. Before writing any code that touches an Expo, EAS, or React Native API:

1. Read the major version of the `expo` package in `package.json`.
2. Fetch the matching versioned docs: `https://docs.expo.dev/versions/v<major>.0.0/`
3. For anything else, fetch https://docs.expo.dev/llms.txt — an index of all Expo docs with corrections to common LLM misconceptions. Follow its links to the specific page you need; never answer from memory.

## Commands

Use `bunx` instead of `bunx` if the project uses bun (`bun.lock` present).

```bash
bunx expo install <package>  # ALWAYS use instead of npm/yarn/pnpm/bun add — resolves SDK-compatible versions
bunx expo start              # start the dev server
bunx expo lint               # lint
bunx tsc --noEmit            # typecheck
bunx expo-doctor             # diagnose dependency and config issues
bunx expo install --fix      # fix incompatible package versions
```

Run lint and typecheck before declaring any task done.

## Navigation & Routing

- Use **Expo Router** for all navigation. Routes live in `src/app/` — every file there is a screen, `_layout.tsx` files define navigators. Keep non-route code (components, hooks, utils) outside `src/app/`.
- Import `Link`, `router`, and `useLocalSearchParams` from `expo-router`.
- Docs: https://docs.expo.dev/router/introduction.md

## Source organization

Keep application code under `src/` organized by responsibility. Add new code to the appropriate existing folder rather than putting unrelated concerns together or creating duplicate top-level folders:

```text
src/
├── app/         # Expo Router routes and layouts; keep route files focused on navigation and screen wiring
├── components/  # Reusable UI components
├── constants/   # App-wide static constants
├── hooks/       # Reusable React hooks
├── screens/     # Screen-level UI and composition rendered by routes
├── services/    # External integrations and data-access services
├── shared/      # Cross-feature shared modules that do not fit a more specific folder
├── store/       # Client-side application state
├── theme/       # Design tokens and shared styling
├── types/       # Shared TypeScript types
└── utils/       # Reusable utility functions
```

- Extract reusable logic and UI from screens and route files into the folder that matches its responsibility.
- Keep route entry points in `src/app/`; place screen implementations in `src/screens/` and import them from the corresponding routes.
- Keep backend functions and schema in `convex/`; this `src/` layout does not replace the backend structure.

## Building with EAS

Use EAS to build, sign, and submit the app in the cloud (`eas build`, `eas submit`) and to ship over-the-air updates (`eas update`) — no local Xcode or Android Studio required. Run EAS CLI as `bunx eas-cli <command>` in Bun projects, or `bunx eas-cli@latest <command>` otherwise; substitute that for bare `eas` in docs examples.
Docs: https://docs.expo.dev/eas/index.md

## Rules

- Before starting a task, inspect and use the applicable skills in `.agents/skills/`. Follow their instructions strictly; do not substitute another workflow when a relevant skill applies.
- Read and follow all applicable `AGENTS.md` instructions strictly before making changes. When instructions conflict, follow the more specific applicable guidance.
- For every code change, add or update unit tests that cover the changed behavior, including relevant edge cases. Add other appropriate tests (such as integration or end-to-end tests) when the change requires them, and run the relevant tests before finishing.
- If `ios/` and `android/` directories do not exist, they are generated (Continuous Native Generation). Never create or edit them by hand — configure native behavior in `app.json` and config plugins.
- Expo Go only includes its bundled native modules. After adding a library with native code, the app needs a development build: `bunx expo run:ios|android` locally, or `eas build --profile development`.
- Prefer recommended Expo modules over third-party libraries, and check your available skills before adding dependencies. Docs: https://docs.expo.dev/versions/latest/index.md

<!-- convex-ai-start -->

This project uses [Convex](https://convex.dev) as its backend.

When working on Convex code, **always read
`convex/_generated/ai/guidelines.md` first** for important guidelines on
how to correctly use Convex APIs and patterns. The file contains rules that
override what you may have learned about Convex from training data.

Convex agent skills for common tasks can be installed by running
`npx convex ai-files install`.

<!-- convex-ai-end -->
