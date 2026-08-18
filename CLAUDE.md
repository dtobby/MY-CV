# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
yarn install      # install dependencies
yarn serve        # dev server with hot-reload (Node 22 required — see .nvmrc)
yarn api          # local contact-form API on port 3001; run alongside yarn serve
yarn build        # production build to dist/
yarn lint         # lint and auto-fix
```

There are no tests in this project.

## Architecture

This is a **Vue 3 personal CV/portfolio site** built with Vue CLI, Vue Router, and Tailwind CSS. It uses `@emailjs/browser` for contact and `jspdf` for PDF generation.

### Routing (`src/router/index.js`)

| Path            | Component                                  |
| --------------- | ------------------------------------------ |
| `/`             | `LandingPage.vue` (entry animation/intro)  |
| `/home`         | `Home.vue` (project cards grid)            |
| `/skills`       | `SkillsPage.vue`                           |
| `/about`        | `About.vue`                                |
| `/achievements` | `Achievements.vue` (timeline)              |
| `/resume`       | `Resume.vue` (PDF-downloadable resume)     |
| `/certificates` | `Certificates.vue` (slideshow by category) |

All unmatched routes redirect to `/`.

### Key data flow

- **`src/data/Projects.js`** — single source of truth for all project entries (title, company, date, role, description, challenges, solutions, image, project_image, stack). `Home.vue` imports this and chunks it into rows for the card grid. Images are required via `@/assets/...` directly in the data file.
- **`App.vue`** — wraps everything: global animated background (`bg3.jpg` + CSS data-stream overlay), `<MyNavbar />`, and a `<router-view>` with a fade transition.
- **`Navbar.vue`** — fixed top nav with a mobile hamburger menu; tracks active route state locally.
- **`Certificates.vue`** — images are grouped into categories (Git, Data science, API, etc.) and displayed as a slideshow; all cert images live under `src/assets/<category>/`.

### Adding a new project

1. Add logo and screenshot images to `src/assets/`.
2. Add an entry to `src/data/Projects.js` following the existing object shape — `require('@/assets/...')` the images inline.

### Adding certificates

Place images under the appropriate subfolder in `src/assets/` (e.g. `src/assets/Git/`). The `Certificates.vue` component maps category names to asset arrays — add the new image import to the matching category there.

### Styling

Tailwind utility classes are used throughout. Global styles and the Tailwind base are in `src/assets/tailwind.css`. The design language uses `cyan-500`/`cyan-600` as the primary accent colour and `gray-800`/`gray-900` for dark card surfaces.

### it is deployed in vercel for free

# After every task assigned to you , new implementation or fixes on Bug things to be followed (Important)

1. You are as senior engineer
2. check it quality ( look for code quality , data optimization, cpu and memory , security vunerlibities)
3. after every new implementation or fixes on Bug (create or update the existing test file).
4. run test if test failed follow point 3.

## Commit Format

## Commit Format

```
feat: <description>      # new feature
fix: <description>       # bug fix
refactor: <description>  # refactoring
test: <description>      # tests
docs: <description>      # documentation
chore: <description>     # dependency updates, etc.
```
