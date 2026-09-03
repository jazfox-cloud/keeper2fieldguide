# Keeper 2 Field Guide Production Verification

Verification time: `2026-09-03T12:37:51Z`

## Decision

```yaml
current_stage: PRODUCTION_VERIFIED
gate: PASS
release_record_state: PUSHED
surface_holds:
  - "Recipes, quests, maps, progression, walkthroughs, and exact mechanics require eligible released-build evidence."
authorized_actions:
  - "Read-only production verification"
blocked_actions:
  - "Publish held content without passing its evidence and URL gates"
  - "Create or modify GA4, Search Console, advertising, or additional domains without separate authorization"
next_action: "Refresh official sources on the recorded release-window schedule; keep each held surface blocked until its own evidence gate passes."
```

## Source Chain

| Layer | Verified value |
|---|---|
| Local repository | `/Users/jazfox/Documents/ChatGPT/Graveyard Keeper` |
| GitHub repository | `https://github.com/jazfox-cloud/keeper2fieldguide` |
| Local commit | `cd163f52b5f305a09c425478747cb0c6799dc843` |
| Remote `origin/main` | `cd163f52b5f305a09c425478747cb0c6799dc843` |
| Cloudflare Pages project | `keeper2fieldguide` |
| Git provider | `Yes` |
| Production branch | `main` |
| Active deployment | `b5fda127-5375-4e78-8069-180284e6cf2a` |
| Deployment source | `cd163f5` |
| Pages project hostname | `https://keeper2fieldguide.pages.dev` |
| Fixed deployment URL | `https://b5fda127.keeper2fieldguide.pages.dev` |
| Canonical production host | `https://keeper2fieldguide.com/` |

The Pages project and active deployment were checked with Wrangler. The local and remote Git SHAs matched before this report was written.

## Live HTTP Checks

The HTTP origin redirected with `301` to HTTPS. The HTTPS homepage returned `200` with `text/html; charset=utf-8`.

| URL | Status |
|---|---:|
| `https://keeper2fieldguide.com/` | 200 |
| `https://keeper2fieldguide.com/release-date/` | 200 |
| `https://keeper2fieldguide.com/system-requirements/` | 200 |
| `https://keeper2fieldguide.com/platforms/` | 200 |
| `https://keeper2fieldguide.com/multiplayer/` | 200 |
| `https://keeper2fieldguide.com/gameplay/` | 200 |
| `https://keeper2fieldguide.com/robots.txt` | 200 |
| `https://keeper2fieldguide.com/sitemap.xml` | 200 |
| `https://keeper2fieldguide.com/favicon.ico` | 200 |
| `https://keeper2fieldguide.com/brand/favicon-32.png` | 200 |

## Local Verification

`npm run verify` passed on the audited source: 45 tests passed, Astro diagnostics reported 0 errors/0 warnings/0 hints, the static build completed, and generated-output verification passed.

The Vite client build emitted one non-fatal warning: `Generated an empty chunk: "AnalyticsConsent.astro_astro_type_script_index_0_lang"`. This report does not classify that warning as a production defect; it remains a known build signal rather than being silently described as zero warnings overall.

## External State Boundaries

- Production deployment and custom-domain DNS are verified.
- The non-`www` host is intentional; no duplicate `www` entry point was opened.
- GA4, Search Console property verification, sitemap submission through Search Console, advertising, and indexing operations are not proved or authorized by this report.
- The prelaunch research report and local implementation plan remain historical decision records. `PRODUCT.md` is the current product-state document.
