# Keeper 2 Field Guide Local Build Implementation Plan

> **Execution boundary:** Implement inline in this isolated unborn repository. Stop at `LOCAL_VERIFIED / RELEASE_APPROVAL_REQUIRED`. Do not commit, push, deploy, buy/bind a domain, or mutate GA4/GSC/Cloudflare.

**Goal:** Consume the verified neutral Astro starter and produce a locally runnable, evidence-first six-page Graveyard Keeper 2 pre-launch guide that matches the approved Sprint 002 architecture.

**Architecture:** Keep the starter's typed project-owned configuration and evidence contracts, replace all demonstration identity/routes/data, and add a reusable evidence page shell plus purpose-built homepage. Facts and sources live in typed data modules; every search page renders freshness, evidence class, source links, canonical metadata, breadcrumbs, and intentional internal links. Static game imagery stays absent; the homepage uses the official privacy-enhanced tinyBuild YouTube embed with attribution and fallbacks.

**Tech Stack:** Astro 5, TypeScript, Node test runner, starter validation scripts, static output.

**Source of truth:** `reports/sprint-001/2026-09-01-graveyard-keeper-2-prelaunch-research-architecture-build-spec.md`

---

## Task 1: Consume the starter without inheriting project residue

**Files:**
- Copy: `astro.config.mjs`, `package.json`, `package-lock.json`, `tsconfig.json`, `scripts/`, `src/`, `tests/`, `public/`
- Preserve: `reports/`, `PRODUCT.md`, `docs/superpowers/plans/`

1. Copy the verified neutral starter baseline into this repository without `.git`, `node_modules`, `dist`, starter documentation, or verification artifacts.
2. Install the locked dependencies locally.
3. Run the inherited starter tests once in the consumer repository to prove the copied mechanism is intact.

Verify: inherited `npm test` passes before project-specific edits.

## Task 2: Write failing consumer contracts

**Files:**
- Create: `tests/keeper2-site.test.mjs`
- Modify: inherited tests only where their neutral assumptions must become project-specific.

1. Add tests for the exact six published route owners, navigation order, independent identity, analytics-off state, and eligible official source set.
2. Add tests for typed facts/keyword ownership, homepage video attribution/fallback, exact sitemap membership, no demo routes, and no residue from other game projects.
3. Add built-output assertions for all six pages: one H1, unique title/description, self-canonical, no `noindex`, source/freshness rendering, working internal links, and disclaimer.
4. Run the new test file and record the expected failure against starter placeholders.

Verify: the new consumer contract fails for relevant missing Graveyard Keeper 2 implementation, not due to syntax or fixture errors.

## Task 3: Replace identity, routes, evidence, and brand assets

**Files:**
- Modify: `src/config/site.config.ts`, `src/config/routes.config.ts`, `src/config/navigation.config.ts`, `src/config/sources.config.ts`, `src/config/features.config.ts`
- Create: `src/data/facts.ts`, `src/data/keywords.ts`, `src/data/page-content.ts`
- Modify/Create: `public/brand/logo.svg`, `public/brand/favicon.svg`, `public/brand/favicon-16.png`, `public/brand/favicon-32.png`, `public/brand/favicon-192.png`, `public/brand/favicon-512.png`, `public/favicon.ico`

1. Replace all starter identity and placeholder origins with project-owned configuration.
2. Define exactly six published/sitemap routes and the approved header order.
3. Record only approved official sources and dated pre-release facts; preserve explicit boundaries for unknown claims.
4. Add keyword ownership records for the six approved page clusters and no public owner for held deep-guide intents.
5. Create an owned monogram/wordmark and cache-safe multi-candidate favicon set; never reuse the official game logo.
6. Run data/config/route tests.

Verify: config/evidence/keyword contracts pass and the favicon ICO contains 16/32/48 px entries.

## Task 4: Build the shell and six page surfaces

**Files:**
- Modify: `src/layouts/BaseLayout.astro`, `src/components/seo/SeoHead.astro`, `src/components/shell/SiteHeader.astro`, `src/components/shell/SiteFooter.astro`, `src/styles/global.css`
- Create: `src/components/media/OfficialVideo.astro`, `src/components/content/FactTable.astro`, `src/components/content/FaqList.astro`, `src/templates/EvidencePage.astro`
- Replace/Create: `src/pages/index.astro`, `src/pages/release-date/index.astro`, `src/pages/system-requirements/index.astro`, `src/pages/platforms/index.astro`, `src/pages/multiplayer/index.astro`, `src/pages/gameplay/index.astro`
- Preserve/adjust: `src/pages/privacy/index.astro`, `src/pages/terms/index.astro`, `src/pages/404.astro`, `src/pages/robots.txt.ts`, `src/pages/sitemap.xml.ts`
- Remove: starter demo route pages under `src/pages/guide`, `src/pages/status`, and `src/pages/entities`.

1. Establish the independent visual direction in the emitted layout contract and implement the charcoal/violet/ochre design system with responsive navigation, visible focus, skip link, and small-screen table containment.
2. Build the homepage in the approved order, with the official privacy-enhanced trailer, visible attribution, direct fallbacks, six working task destinations, confirmed facts, gameplay pillars, latest official update, held-content trust block, and source policy.
3. Build the five intent pages with direct answers, task-specific tables, visible evidence/freshness, source lists, breadcrumbs, FAQs where rendered, and coherent related links.
4. Keep analytics disabled and ensure legal/404 routes are intentional and non-demand.
5. Run the consumer tests after each minimal implementation slice.

Verify: `npm test` passes and no page depends on invented facts or unapproved static game imagery.

## Task 5: Verify generated output and local experience

**Files:**
- Inspect: `dist/`
- Create: `artifacts/local-preview/keeper2-desktop.png`, `artifacts/local-preview/keeper2-mobile.png`
- Create at finish: `DESIGN.md` and the Impeccable design sidecar if required by the selected design workflow.

1. Run `RESIDUE_ALLOWED_IDENTITY="Graveyard Keeper 2,Keeper 2 Field Guide" npm run verify`.
2. Inspect generated output for exact sitemap routes, canonicals, metadata uniqueness, H1 count, `noindex` state, internal-link resolution, source rendering, disclaimer, and design-contract persistence.
3. Start the local preview server; verify all route/status/MIME checks, favicon candidates, and the official embed fallback.
4. Capture desktop and mobile views in one bounded pass, fix material issues once, and confirm in one final pass.
5. Run the design detector once, `git diff --check`, and `git status --short`.

Verify: all local contracts pass, desktop/mobile screenshots show no material overflow or navigation defects, and the repository stops at `LOCAL_VERIFIED / RELEASE_APPROVAL_REQUIRED` with no commit or external mutation.
