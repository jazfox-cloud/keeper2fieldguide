# Graveyard Keeper 2 — Sprint 001 Pre-launch Research, Architecture & Build Specification

Date: `2026-09-01`
Target release date: `2026-09-22`
Target market/language for research: `US / English`
Publication authorization: `false`

## STATUS

```yaml
current_stage: MVP_DESIGN
gate: PASS
evidence:
  - Official release date, platform stores, PC requirements, price/pre-order state, single-player status, and high-level gameplay are currently verifiable.
  - Authenticated Similarweb shows 153 raw Phrase Match rows and 69,120 current 28-day Global volume; the cleaned planning set is recorded separately because raw results contain extensive Graveyard Keeper 1 numeric noise.
  - Exact-title Similarweb data is 33.2K current / 17.5K average / KD14; release-date data is 7.9K current / 2.4K average / KD17.
  - Google Trends shows a past-30-day Worldwide Web Search average of 14 versus 72 for gpts, with an event spike after the August 26 release-date announcement.
  - Live SERPs show an official exact-match site, official stores, two dedicated wiki/guide competitors, specialist databases, major media, and substantial Graveyard Keeper 1 contamination.
  - Deep mechanics and utility datasets remain unavailable before release.
authorized_actions:
  - Read-only research
  - Architecture and source baseline
  - Durable Sprint 001 report
blocked_actions:
  - Domain purchase
  - Repository/bootstrap creation
  - Site implementation or full-page content writing
  - Commit, push, deployment, DNS, GA4, GSC, sitemap submission, or indexing request
next_action: User reviews the corrected keyword/SERP/page map, selects the domain, and separately authorizes Sprint 002 local build.
```

Decision: `GO_PRELAUNCH / HOLD_DEEP_CONTENT / EXPAND_ON_RELEASE_DATA`.

No newly observed evidence overturns the existing GO. The August 26 official release-date announcement, active pre-orders, current official storefronts, and detailed official devlogs strengthen the case that the game and its September release window are real. Competition is higher than a blank pre-launch SERP because an official exact-match domain and two dedicated guide/wiki properties are already visible. That changes positioning and page discipline, not the decision to build a small evidence-clean site.

## REUSED_RESEARCH_ASSETS

### Skills and workflows actually used

1. `/Users/jazfox/.codex/skills/building-evidence-first-game-sites/`
   - Stage router, official/first-hand fact boundary, URL Gate, Data Product Gate, release boundary, and `MVP_DESIGN` status contract.
2. `/Users/jazfox/.codex/skills/researching-game-site-keywords/`
   - Exact-title context, Global-vs-US demand separation, KD context boundary, SERP competition independence, and read-only/publication boundary.
3. `/Users/jazfox/.codex/skills/game-seo-keyword-loop/`
   - Query clustering, one primary route per opportunity, keyword scorecard, answer/entity/utility/backlog/hold routing, and acquisition/unblock tasks.
4. `/Users/jazfox/.agents/skills/gsc-query-page-gap-review/`
   - Post-launch query-to-owner mapping, `STRENGTHEN_EXISTING` before `CREATE_PAGE`, low-signal boundary, and indexing classifications.
5. `/Users/jazfox/.codex/skills/ga4-consent-integration/`
   - Consent Mode v2, exact production-host guard, low-cardinality events, and separate browser/Realtime proof.
6. `/Users/jazfox/.codex/skills/github-cloudflare-pages-publish/`
   - GitHub-backed Pages source chain and prohibition on treating a local build or Direct Upload as release proof.

### Project Memory and playbooks actually read

- `/Users/jazfox/Documents/aios/Project-Memory/02_PROJECTS/SITE_FACTORY.md`
- `/Users/jazfox/Documents/aios/Project-Memory/09_REFERENCE/registries/GAME_SITE_FACTORY_ASSET_LOCATOR.md`
- `/Users/jazfox/.codex/memories/MEMORY.md` entries covering the evidence-first lifecycle, WARDOGS/DragonSword/LouGuide research boundaries, starter ownership, URL discipline, media acceptance, and the DragonSword utility gate.
- `/Users/jazfox/.codex/skills/building-evidence-first-game-sites/references/launch-playbook.md`
- `/Users/jazfox/.codex/skills/building-evidence-first-game-sites/references/evidence-gates.md`
- `/Users/jazfox/.codex/skills/game-seo-keyword-loop/references/keyword-scoring.md`

### Factory assets actually inspected

- Canonical neutral starter: `/Users/jazfox/Documents/Codex/2026-08-24/game-guide-starter`
  - Verified current state: `main@ecfd7ff71f41c6c753b5850b08002a388c9614e7`, aligned with `origin/main`.
  - Reusable mechanisms: typed configuration, route/source/fact/media/keyword contracts, `HomePage`, `AnswerPage`, `TimelinePage`, source display, SEO shell, consent primitive, sitemap, robots, and validators.
- Starter checklist: `/Users/jazfox/Documents/Codex/2026-08-24/game-guide-starter/TEMPLATE-CHECKLIST.md`
- Starter setup: `/Users/jazfox/Documents/Codex/2026-08-24/game-guide-starter/SETUP.md`
- Canonical game-site rubric: `/Users/jazfox/Documents/aios/reconcile-clean/docs/website-factory-aios-2/pilot-selection/game-site-evidence-rubric.v1.md`
- Demand Gate owner, located but not modified: `/Users/jazfox/Documents/aios/reconcile-clean/src/server/website-factory-demand-gate.ts`
- Typed utility pattern, reference only: `/Users/jazfox/Documents/ChatGPT/Relic Ledger/src`
- DragonSword map/roadmap patterns, reference only and not copied: `/Users/jazfox/Documents/ChatGPT/DragonSwordGuide/scripts/map`, `/Users/jazfox/Documents/ChatGPT/DragonSwordGuide/reports/map-data`, and `/Users/jazfox/Documents/ChatGPT/DragonSwordGuide/src`

`REUSE FIRST` was satisfied. No new scoring system, scraper, architecture framework, SEO checklist, content workflow, or Site Factory implementation was created.

## GO_DECISION

```yaml
decision: GO_PRELAUNCH
deep_content: HOLD_FOR_RELEASE
release_expansion: EVIDENCE_GATED
repository_creation: NOT_AUTHORIZED
publication_authorized: false
```

Why the GO remains valid:

- The title, developer, publisher, release date, storefronts, PC requirements, single-player state, and high-level systems are confirmed by first-party sources.
- The refreshed authenticated Similarweb capture supplies a material Global 28-day demand signal and low contextual title/release KD. It is not reinterpreted as US demand.
- The August release-date/pre-order event adds current search freshness without being misclassified as keyword volume.
- Six distinct pre-launch user tasks can be solved completely from official evidence now.

Why the scope remains small:

- `US_DEMAND_UNKNOWN`; current Similarweb and Trends captures are Global rather than US-only.
- Official and dedicated competitor coverage is already visible.
- The released game/version and reproducible gameplay data do not exist yet.
- Broad pre-launch wiki shells would compete on quantity while failing the Public Fact and URL Gates.

## OFFICIAL_EVIDENCE

### Source registry

| ID | Source | Evidence class | Supported scope | Last verified | Public-fact use |
| --- | --- | --- | --- | --- | --- |
| `source:official-site` | [Official Graveyard Keeper 2 site](https://www.graveyardkeeper2.com/) | `OFFICIAL` | Official identity, trailer/store destinations, publisher/developer ownership | 2026-09-01 | Exact stated facts only; static-media reuse rights remain unknown |
| `source:developer` | [Lazy Bear Games product page](https://lazybeargames.com/game/graveyard-keeper-2/) | `OFFICIAL` | Release date, PC/PS5/Xbox scope, single-player, premise and feature pillars | 2026-09-01 | Yes |
| `source:steam` | [Steam App 4358690](https://store.steampowered.com/app/4358690/Graveyard_Keeper_2/) | `OFFICIAL` | Steam release, current price/pre-purchase state, Windows requirements, languages, single-player, store copy | 2026-09-01 | Yes, with timestamp/region for price |
| `source:steam-news` | [Official Steam Community/news](https://steamcommunity.com/app/4358690) | `OFFICIAL` | August 26 release/pre-order announcement; official devlogs on zombies, Town, and 3D visuals | 2026-09-01 | Yes |
| `source:tinybuild-trailer` | [tinyBuild announcement trailer](https://www.youtube.com/watch?v=KZ6VRXqGEws) | `OFFICIAL` | Official trailer, initial platform scope, high-level premise and feature demonstration | 2026-09-01 | Embedding/linking is eligible; visible observations must stay narrowly scoped |
| `source:playstation` | [PlayStation Store](https://store.playstation.com/concept/10018528) | `OFFICIAL` | PS5, one player, release, localized price, pre-order bonus | 2026-09-01 | Yes, with locale/timestamp for price |
| `source:xbox` | [Xbox Store](https://www.xbox.com/games/store/graveyard-keeper-2/9pfzq5gnm8tj) | `OFFICIAL` | Xbox One/Series compatibility listing, single-player, pre-order bundle | 2026-09-01 | Yes, with store-locale caveat |
| `source:nintendo-switch` | [Nintendo Switch store](https://www.nintendo.com/us/store/products/graveyard-keeper-2-switch/) | `OFFICIAL` | Switch release, one local player, compatibility and file-size estimates | 2026-09-01 | Yes; estimates must remain labeled |
| `source:nintendo-switch-2` | [Nintendo Switch 2 store](https://www.nintendo.com/us/store/products/graveyard-keeper-2-switch-2/) | `OFFICIAL` | Switch 2 SKU, release, one local player, file-size estimate | 2026-09-01 | Yes; estimates must remain labeled |

### Fact classification

`CONFIRMED`

- Title: Graveyard Keeper 2.
- Developer: Lazy Bear Games. Publisher: tinyBuild.
- Release date: September 22, 2026.
- Current official destinations cover Steam/Windows, PS5, Xbox consoles, Nintendo Switch, and Nintendo Switch 2.
- Current storefronts identify the game as single-player/one-player.
- Steam currently lists a US price snapshot of `$24.99` base / `$19.99` pre-purchase, 20% off; it is a dated, regional snapshot, not a permanent universal price.
- Official pre-order messaging lists a personal sauna and a platform-dependent outfit as bonuses.
- Officially described systems include graveyard management, production automation, zombie workers/army, Town restoration, fortifications/combat, crafting, and quests.
- Steam lists current Windows minimum/recommended requirements, including Windows 10 x64, 4/8 GB RAM, DirectX 12, and 2 GB storage.

`COMMUNITY_SUPPORTED` — discovery only, not public game facts

- Current player questions include platform choice and whether co-op/multiplayer exists.
- Community discussion shows interest in recipe tracking, construction-material planning, and automation quality-of-life.
- These questions can prioritize research after release; they do not establish mechanics, demand volume, or product requirements.

`UNKNOWN`

- US/en monthly-search volume and query-level US volume; the captured Similarweb and Trends scopes are Worldwide/Global.
- Post-promotion prices and exact release timing across every region/store.
- macOS/Linux versions, cross-save, cross-progression, future multiplayer/co-op, formal roadmap, and DLC plans.
- Exact quest order, NPCs, recipes, item stats, resource locations, map coordinates, automation ratios, progression strategy, and optimal builds.
- Commercial reuse rights for downloaded press-kit/static store art. An official video embed with attribution/fallback is the safer current media route.

## CORRECTED_KEYWORD_SERP_PAGE_DECISION

The original Sprint 001 draft did not complete the long-tail, query-level KD, or reproducible SERP work. It is corrected by these durable artifacts:

- [Keyword → volume/KD → cluster → owner → decision matrix](./2026-09-01-graveyard-keeper-2-keyword-page-map.csv)
- [Keyword, SERP and page-plan report](./2026-09-01-graveyard-keeper-2-keyword-serp-page-plan.md)

Corrected research summary:

| Signal | Current verified result |
| --- | --- |
| Similarweb raw Phrase Match | `153` rows / `69,120` current Global 28-day volume |
| Similarweb cleaned planning matrix | `51` English sequel rows, including exact seeds with `NO_ROW`/`UNKNOWN` retained |
| Exact title | `33.2K` current / `17.5K` average / KD `14` / zero-click `65%` |
| Release date | `7.9K` current / `2.4K` average / KD `17` / zero-click `83%` |
| Switch | `1.4K` current / average `<50` / KD `UNKNOWN` |
| Multiplayer | `260` current / `224` average; question form `340`; KD `UNKNOWN` |
| Gameplay | `440` current / `107` average / KD `19` |
| Review | `270` current / average `<50` / KD `24`; `HOLD_FOR_RELEASE` |
| Trends | Graveyard Keeper 2 average `14` vs `gpts` `72`; visible Aug 26 event spike |

The corrected prelaunch URLs are:

1. `/`
2. `/release-date/`
3. `/platforms/`
4. `/multiplayer/`
5. `/gameplay/`
6. `/system-requirements/`

`/updates/` is removed from the initial sitemap. Similarweb returned no exact row for `graveyard keeper 2 updates` or `graveyard keeper 2 roadmap`, no formal roadmap was found, and official Steam news owns the task. `/multiplayer/` replaces it because exact and question-form demand is measurable and the SERP lacks a strong independent direct answer.

The detailed SERP report records an approximately 30-result homepage sample, query-level owners for release, price, requirements and platforms, and cross-checked competition for multiplayer, gameplay, beginner, wiki, crafting, automation and updates. Google required human verification after the first four inner-page queries; no CAPTCHA was solved or bypassed, and the remaining clusters are explicitly labeled as public-search/Similarweb cross-checks rather than a localized US top-10 export.

## SUPERSEDED_FIRST_DRAFT_KEYWORD_RESEARCH

The following original section is retained only as an audit trail. Its statements that the authenticated capture was unavailable and its `/updates/` recommendation are superseded by the corrected artifacts and decision above.

### Method source

The research reused `researching-game-site-keywords`, `game-seo-keyword-loop`, its existing six-factor scorecard, the canonical game-site evidence rubric, and the URL Gate. Scores below route work; they are not a replacement Demand Gate or a claim of US volume.

### Demand evidence and limitations

| Metric | Value | Scope/status |
| --- | ---: | --- |
| Similarweb average volume | approximately `17.5K` | User-supplied prior capture; Global, visible 28-day dataset; not independently refreshed this sprint |
| Similarweb traffic | approximately `33.2K` | User-supplied prior capture; supplemental, not obtainable traffic/TAM |
| Similarweb growth | approximately `+34%` | User-supplied prior capture; discovery signal |
| Similarweb KD | approximately `14` | `KD_CONTEXT_ONLY` |
| US/en monthly searches | `UNKNOWN` | `US_DEMAND_UNKNOWN` |
| Google Trends | `NOT_CAPTURED` | Authenticated Chrome/Similarweb workflow was not callable in this environment; no proxy estimate was created |

The new release-date announcement and active pre-orders are freshness signals, not replacements for keyword volume. No Top-20 candidate selection was rerun.

### Existing keyword scorecard application

| Cluster | Score / 18 | Evidence summary | Route | Decision |
| --- | ---: | --- | --- | --- |
| Game name / overview | 15 | Prior global demand, official product/store pages, strong fresh SERP, useful verified overview | `ANSWER_PAGE` | `BUILD_PRELAUNCH` on `/` |
| Release date / launch / price / pre-order | 14 | Official date, live store pricing, bonuses, current transactional freshness; query-level volume unknown | `ANSWER_PAGE` | `BUILD_PRELAUNCH`; one merged owner |
| System requirements | 13 | Complete official Steam table; specialist SERP competition; query-level volume unknown | `ANSWER_PAGE` | `BUILD_PRELAUNCH` |
| Platforms / single-player / multiplayer status | 13 | Multiple official stores plus current community question; co-op future unknown | `ANSWER_PAGE` | `BUILD_PRELAUNCH`; one merged owner |
| Confirmed gameplay / features | 14 | Official store copy and three devlogs provide useful confirmed detail | `ANSWER_PAGE` | `BUILD_PRELAUNCH` |
| Updates / official news / roadmap | 15 | Active official devlog cadence and release event; no formal roadmap exists | `ANSWER_PAGE` | `BUILD_PRELAUNCH`; timeline, not speculative roadmap |
| Multiplayer / co-op | 13 | Clear current official single-player answer but limited standalone depth | `ANSWER_PAGE` | `HUB_ONLY`; owned by `/platforms/` |
| Automation / zombies / Town / combat | 13 | Official high-level detail exists; exact mechanics and optimization do not | `ANSWER_PAGE` now, future entity/tool route possible | `HUB_ONLY` inside `/gameplay/`; detailed guides `HOLD_FOR_RELEASE` |
| Beginner guide / walkthrough | 9 | Intent/competitors exist, but no released build or reproducible route data | `RESEARCH_BACKLOG` | `HOLD_FOR_RELEASE` |
| Wiki | 10 | Broad intent and dedicated competition; evidence cannot yet support entity depth | `ENTITY_CLUSTER` | `HOLD_FOR_RELEASE`; homepage is not called a complete wiki |
| Crafting / recipes / items / resources | 9 | Systems are confirmed, exact records are not | `ENTITY_CLUSTER` | `HOLD_FOR_RELEASE` |
| Map / locations / quests / NPCs | 8–9 | Search/competitor signals exist; reliable versioned fields are absent | `ENTITY_CLUSTER` or `UTILITY_TOOL` | `HOLD_FOR_RELEASE` |
| Production-chain / zombie planner | 8 | Potential interactive task, no eligible dataset | `UTILITY_TOOL` | `HOLD`; `NO_UPLIFT` |

## SERP_BASELINE

Capture date: `2026-09-01`. The accessible search path exposed current result owners and snippets, but not a reproducible localized US/en top-10 export for every query. Therefore:

```yaml
competition_capture_state: INCOMPLETE
competition_score: UNKNOWN
kd_state: KD_CONTEXT_ONLY
SERP_COMPETITOR_DENSITY: MEDIUM_HIGH
```

### Observed competition by intent

| Cluster | Observed result types/owners | Density | Interpretation |
| --- | --- | --- | --- |
| Game name / release | Official exact-match `graveyardkeeper2.com`, Steam, official stores, major media, `graveyardkeeper2guide.wiki`, The Games Wiki | High | Official result owns the brand; independent site must lead with useful sourced answers, not impersonation |
| Price / pre-order / platforms | Steam, PlayStation, Xbox, Nintendo, SteamDB, dedicated guide/wiki pages | High | Store pages are direct answers; merge price/pre-order with release and add a cross-store, timestamped comparison rather than separate thin pages |
| System requirements | Steam direct answer, System Requirements Lab, PCGamingWiki, Gamepressure, dedicated guide/wiki pages | High | A page is still eligible because the official data table and PC decision task are complete, but differentiation must be clarity/source freshness |
| Gameplay / features | Official site, Steam/devlogs, platform trailers, major media, The Games Wiki, exact-match guide site | Medium-high | Official source synthesis and explicit confirmed/unknown boundaries are the defensible angle |
| Updates / roadmap | Steam news/devlogs, official site, media recaps, guide/wiki pages | Medium | No official formal roadmap was found; `/updates/` should track official records rather than manufacture roadmap states |
| Guide / wiki / beginner | `graveyardkeeper2guide.wiki`, The Games Wiki, Japanese exact-game wiki, major-guide sites for the 2018 game | Medium-high | Dedicated competition exists, and the SERP is contaminated by Graveyard Keeper 1 content; pre-release procedural claims are especially risky |
| Recipes / quests / map / items | Dedicated pre-launch shells, The Games Wiki, community discussion, and extensive Graveyard Keeper 1 results | Superficially thin but ineligible | A weak competitor field does not create eligible data; wait for release/first-hand evidence |
| Multiplayer / co-op | Steam store single-player feature, official store one-player fields, Steam/Reddit questions, Graveyard Keeper 1 results | Medium | Provide the current direct answer on `/platforms/`; do not split a thin standalone page yet |

### Named competitors

1. [Official Graveyard Keeper 2 site](https://www.graveyardkeeper2.com/) — `OFFICIAL_DIRECT_ANSWER`; exact-match official domain.
2. [Graveyard Keeper 2 Guide Wiki](https://www.graveyardkeeper2guide.wiki/) — `EXACT_MATCH_NICHE_SITE`; broad pre-launch route inventory with many launch-sensitive pages.
3. [The Games Wiki: Graveyard Keeper 2](https://thegameswiki.com/graveyard-keeper-2/wiki/overview) — `DEDICATED_WIKI`; current overview/system coverage, plus evidence of content contamination in an indexed revision snippet.
4. [PCGamingWiki](https://www.pcgamingwiki.com/wiki/Graveyard_Keeper_2) — `SEARCHABLE_DATABASE`; particularly strong for PC requirements/technical intent.
5. System Requirements Lab — `MAJOR_EDITORIAL_DIRECT_ANSWER`; strong exact requirements result.
6. Steam/PlayStation/Xbox/Nintendo — `OFFICIAL_DIRECT_ANSWER`; dominant for release, platform, price, and player-count fields.

Important quality observation: one indexed The Games Wiki revision snippet for a Graveyard Keeper 2 “Getting Started” result described a different game (“Windrose,” an island, Blackbeard, coconuts). This is competitor contamination evidence only. It is not a claim about the current article and must not be copied or used as a public fact.

## QUERY_INTENT_MAP

| Query cluster | User intent | Demand evidence | Trend evidence | SERP competition | Evidence confidence | Recommended URL | Page type | Pre-launch decision | Update trigger |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Graveyard Keeper 2 / guide / overview | Understand the sequel and reach verified answers | Prior Global capture; query-level US unknown | Release/pre-order freshness only | High | High for facts, unknown for US demand | `/` | `HomePage` | `BUILD_PRELAUNCH` | Any official product/store change; launch day |
| release date / launch / price / preorder | Know when it launches, current cost, bonus, and where to buy | Query-level volume unknown; current transactional SERP | Aug 26 event | High | High | `/release-date/` | `AnswerPage` | `BUILD_PRELAUNCH` | Store/date/price/bonus change; mandatory launch-day rewrite |
| system requirements / can I run it | Compare a Windows PC with official minimum/recommended specs | Query-level volume unknown; exact specialist results | Not captured | High | High | `/system-requirements/` | `AnswerPage` | `BUILD_PRELAUNCH` | Steam requirements change; released-build verification |
| platforms / PS5 / Xbox / Switch / PC | Know supported platforms and official stores | Current platform-choice community signal; volume unknown | Not captured | High | High | `/platforms/` | `AnswerPage` | `BUILD_PRELAUNCH` | Store SKU/platform change |
| multiplayer / co-op / single-player | Know whether the game currently supports co-op | Current Steam/Reddit questions; volume unknown | Not captured | Medium | High for current answer | `/platforms/` | Section/FAQ | `HUB_ONLY` | Official multiplayer feature change or validated distinct GSC cluster |
| gameplay / features / what is new | Understand confirmed systems without speculation | Prior overall demand; query-level unknown | Current trailer/devlog freshness | Medium-high | High for official descriptions | `/gameplay/` | `AnswerPage` | `BUILD_PRELAUNCH` | Official devlog/trailer; launch-day first-hand check |
| automation / zombies / Town / combat | Understand sequel differentiators | Current dedicated competitor pages; volume unknown | Devlogs May–July | Medium-high | High at overview level only | `/gameplay/` | Confirmed-systems sections | `HUB_ONLY` | Validated distinct query cluster plus deeper eligible facts |
| updates / news / roadmap | Find current official announcements | Active official devlog cadence | High freshness need | Medium | High for official timeline | `/updates/` | `TimelinePage` | `BUILD_PRELAUNCH` | Any new official announcement; launch patch |
| beginner guide / walkthrough | Learn first-hour actions and progression | Dedicated competitors/old-game pollution; volume unknown | Launch-sensitive | Medium-high | Low before release | none | `RESEARCH_BACKLOG` | `HOLD_FOR_RELEASE` | Released build + reproducible first-hand route + validated query cluster |
| recipes / crafting / items / resources | Look up exact inputs, outputs, and sources | Competitor/community signal; volume unknown | Launch-sensitive | Thin/contaminated | Low | none | `ENTITY_CLUSTER` | `HOLD_FOR_RELEASE` | Versioned complete records and source provenance |
| quests / NPCs / locations / map | Find exact steps, people, and places | Competitor shells; volume unknown | Launch-sensitive | Thin/contaminated | Low | none | `ENTITY_CLUSTER`/`UTILITY_TOOL` | `HOLD_FOR_RELEASE` | First-hand coverage, stable IDs, rights/provenance, validated query cluster |

## SUPERSEDED_FIRST_DRAFT_PRELAUNCH_URL_SET

Indexable search pages: `6`.

1. `/`
2. `/release-date/`
3. `/system-requirements/`
4. `/platforms/`
5. `/gameplay/`
6. `/updates/`

Structural routes such as `/privacy/`, `/terms/`, and `/404` are required for site operation but are not counted as demand-backed pages. Only the six approved URLs belong in the initial sitemap. There is no public `/guides/`, `/wiki/`, `/beginner-guide/`, `/quests/`, `/recipes/`, `/map/`, or utility shell before its gate passes.

Why each URL deserves to exist now:

- `/` owns the exact-game overview and routes users to verified task pages.
- `/release-date/` merges overlapping launch, current price, and pre-order intent into one maintained transactional answer.
- `/system-requirements/` resolves a complete PC suitability task with official minimum/recommended data.
- `/platforms/` resolves official store/platform and current single-player/co-op status without thin variant pages.
- `/gameplay/` explains officially confirmed sequel systems while visibly separating unknown mechanics.
- `/updates/` turns current official announcements into a maintained timeline and avoids inventing a roadmap.

## HOLD_FOR_RELEASE

| Candidate | Current route | Missing prerequisite | UNLOCK CONDITION | Stop condition |
| --- | --- | --- | --- | --- |
| Beginner guide / first-hour walkthrough | `RESEARCH_BACKLOG` | Released build and reproducible path | Game released; version recorded; first two hours captured and independently replayed; query cluster validated | Do not publish if steps cannot be reproduced or are patch-sensitive without owner |
| Full walkthrough | `RESEARCH_BACKLOG` | Complete progression/quest order | First-hand end-to-end completion with version and conflict log | No shell, guessed order, or copied competitor steps |
| Quests | `ENTITY_CLUSTER` | Names, triggers, objectives, rewards, dependencies | Required fields 100% eligible; stable IDs; representative validation | Hold if any required step/reward is unknown |
| NPCs/characters | `ENTITY_CLUSTER` | Canonical names, roles, schedules/locations, quest links | Versioned source ledger and stable IDs | Hold if records rely on trailer inference or GK1 carryover |
| Recipes/crafting chains | `ENTITY_CLUSTER` | Exact inputs, outputs, station, unlock, quantity, version | Complete typed records and reproducible in-game verification | Hold if any required input/output is guessed |
| Items/resources | `ENTITY_CLUSTER` | IDs, acquisition, uses, quantity/value, version | Complete representative slice and integrity checks | Hold if public data is copied or incomplete |
| Locations/map | `UTILITY_TOOL` | Stable location IDs, owned/licensed map basis, coordinates/regions, coverage | Data Product Gate passes and representative map pilot is verified | Hold on rights uncertainty or incomplete required locations |
| Zombie automation guide | `ANSWER_PAGE` then possible utility | Exact unlocks, worker fields, rates, layouts, patch scope | Released-build first-hand observations plus independent intent | Official overview remains on `/gameplay/`; no optimization claims before verification |
| Production-chain planner | `UTILITY_TOOL` | Full recipe graph, machine/station rules, throughput units | 100% required graph coverage, deterministic tests, provenance and refresh owner | `NO_UPLIFT` until gate passes |
| Progression optimization / best builds | `ANSWER_PAGE`/utility | Tested context and comparative results | Multiple reproducible scenarios, version, editorial labeling | No universal “best” claims from community repetition |
| Achievements | `ENTITY_CLUSTER` | Official released achievement list and hidden-achievement handling | Official list available; version and spoiler policy set | Do not infer unpublished names |
| Dedicated multiplayer page | `ANSWER_PAGE` | Corrected research found measurable exact/question demand | `UNLOCKED_PRELAUNCH`; owner is `/multiplayer/` | Keep one owner for multiplayer/co-op/single-player variants |
| Roadmap page | `TimelinePage` | Official structured forward-looking roadmap | Official roadmap exists and needs a distinct maintained owner | Official news remains source material on `/`, `/release-date/`, and `/gameplay/`; no inferred plans |

## UTILITY_GATE

```yaml
rubric_id: game-site-evidence-rubric.v1
base_policy_id: website-factory-demand-quant.v1
us_demand_state: US_DEMAND_UNKNOWN
global_volume_state: GLOBAL_VOLUME_SUPPLEMENTAL_ONLY
competition_capture_state: INCOMPLETE
kd_state: KD_CONTEXT_ONLY
utility_data_provenance: HOLD
utility_status: HOLD
uplift: NO_UPLIFT
```

| Utility | Current decision | Blocking data |
| --- | --- | --- |
| Interactive map | `HOLD` | Map/coordinate rights, stable IDs, coverage, versioning |
| Recipe database | `HOLD` | Complete exact recipe records and provenance |
| Crafting calculator | `HOLD` | Deterministic recipe graph, quantities, station/unlock rules |
| Production-chain planner | `HOLD` | Throughput/timing rules and complete graph |
| Resource locator | `HOLD` | Verified locations, conditions, respawn/version behavior |
| Zombie automation planner | `HOLD` | Worker stats, machine compatibility, rates, constraints |
| Progression tracker | `HOLD` | Stable milestones, dependency graph, save-state semantics |

Required future sequence: `Verified Data -> Rules -> Utility -> Measurement -> Iterate`. Relic Ledger provides only the typed/deterministic implementation pattern. DragonSword provides only the provenance/pilot lesson. Neither supplies Graveyard Keeper 2 data.

## DOMAIN_SHORTLIST

Read-only Verisign RDAP checks on `2026-09-01` returned `404 / no registration record` for all five `.com` candidates below. This is a point-in-time registry result, not a purchase guarantee; registrar availability/premium/reserved status must be rechecked at decision time.

| Candidate | Clarity | Memorability | Game relevance | Official-confusion risk | Trademark/naming risk | Decision |
| --- | --- | --- | --- | --- | --- | --- |
| `keeper2fieldguide.com` | High with site title | High | High enough without copying exact official domain | Low-medium | Medium | `RECOMMENDED_DOMAIN` |
| `gk2guide.com` | Medium | Very high | High for existing fans, ambiguous to new users | Low | Medium due abbreviation/collision | Strong short alternative |
| `gk2fieldguide.com` | Medium | High | High for existing fans | Low | Medium | Distinctive alternative |
| `keeper2codex.com` | Medium | High | Medium-high | Low | Medium | Brandable, less immediately descriptive |
| `graveyardkeeper2guide.com` | Very high | Medium | Exact | High beside official `graveyardkeeper2.com` | High | Avoid unless legal/brand review accepts the confusion risk |

Recommended: `keeper2fieldguide.com`.

Reasoning: it is descriptive and memorable, supports an independent “Keeper 2 Field Guide” publisher identity, and does not visually imitate the official exact-match domain as closely as `graveyardkeeper2guide.com`. The site must still state that it is an independent, unofficial guide; use an owned wordmark/favicon; avoid the official logo as publisher identity; and provide labeled official destinations.

Do not use `graveyardkeeper2guide.wiki`: it is already live as a competing exact-match guide site.

## SPRINT_002_BUILD_SPEC

### Project and factory boundary

- Create a new independent repository only after Sprint 002 authorization.
- Consume `/Users/jazfox/Documents/Codex/2026-08-24/game-guide-starter` at recorded baseline `ecfd7ff71f41c6c753b5850b08002a388c9614e7`.
- Run the neutral baseline verification before customization.
- Consumer-owned: identity, routes, facts, source records, media records, keywords, domain, analytics, GSC, hosting, and release state.
- Do not edit the starter, DragonSword, Relic Ledger, War Dogs, AIOS, or another production site.
- Working site language: English. No localization in Sprint 002.

### Page specifications

#### 1. `/`

- Primary intent: exact-game overview and routing to reliable pre-launch answers.
- Query cluster: `Graveyard Keeper 2`, `Graveyard Keeper 2 guide`, `Graveyard Keeper 2 wiki`.
- Official evidence: all source-registry records, with Steam/developer/official site primary.
- Title direction: `Graveyard Keeper 2 Guide: Release Date, Platforms & Confirmed Features`.
- H1 direction: `Graveyard Keeper 2 Field Guide`.
- Opening/direct answer: release date, currently confirmed platforms, single-player status, and an explicit statement that deep guides wait for the released build.
- Required sections: release snapshot; confirmed facts; confirmed gameplay pillars; where to play; current answers; what remains unverified; latest official update; official destinations/sources.
- FAQ need: yes, visible answers for release status, platforms, multiplayer status, and source policy.
- Table need: quick-facts table.
- Source requirements: every fact resolves to typed `SourceRecord` IDs; no competitor facts.
- Internal links: all five child pages.
- Schema: `WebSite` and `Organization` for the independent publisher; add `VideoGame` only if the implementation supports complete, sourced properties. No fake ratings/offers.
- Freshness trigger: any official store/devlog change; daily source check during the final seven days.
- Release-day requirement: replace pre-release language, verify all links/facts, add current game version if published, keep deep holds visible internally rather than as public promises.

#### 2. `/release-date/`

- Primary intent: launch date, current price/pre-order state, bonus, and official purchase destinations.
- Query cluster: release date, launch, price, pre-order/preorder.
- Official evidence: Steam store/news and each platform store.
- Title direction: `Graveyard Keeper 2 Release Date, Price & Pre-Order Details`.
- H1 direction: `Graveyard Keeper 2 Release Date and Pre-Order Details`.
- Opening/direct answer: September 22, 2026; current Steam US snapshot `$24.99` / `$19.99` with date; prices vary by region/store.
- Required sections: release status; dated store-price table; pre-order discount/bonus; platform purchase links; regional-price caveat; what changes on launch day.
- FAQ need: yes.
- Table need: store/platform/status/price snapshot/checked date/official link.
- Source requirements: official store only for price/bonus; every price carries currency, locale, and verification date.
- Internal links: `/platforms/`, `/system-requirements/`, `/multiplayer/`.
- Schema: `WebPage`, `BreadcrumbList`, visible FAQ schema only if rendered FAQ exactly matches.
- Freshness trigger: any price, promotion, date, bonus, or store-state change.
- Release-day requirement: change pre-order to released/available, remove expired promotional language, retain the URL and historical launch answer, refresh prices.

#### 3. `/system-requirements/`

- Primary intent: compare a Windows PC with official minimum/recommended requirements.
- Query cluster: system requirements, PC requirements, can I run it, storage, RAM, GPU.
- Official evidence: Steam App 4358690.
- Title direction: `Graveyard Keeper 2 System Requirements: Minimum & Recommended PC Specs`.
- H1 direction: `Graveyard Keeper 2 PC System Requirements`.
- Opening/direct answer: Windows 10 x64; minimum/recommended table; Steam currently lists 2 GB storage.
- Required sections: minimum vs recommended; 720p/1080p notes; storage/DirectX; how to compare; Mac/Linux status explicitly unknown; source/last checked.
- FAQ need: yes, limited to sourced questions.
- Table need: exact Steam requirements table.
- Source requirements: Steam only for requirements; no third-party substitution.
- Internal links: `/release-date/`, `/platforms/`, `/gameplay/`.
- Schema: `WebPage`, `BreadcrumbList`.
- Freshness trigger: Steam requirements or OS/platform change.
- Release-day requirement: re-fetch official specs and record whether release build changed them.

#### 4. `/platforms/`

- Primary intent: know where to play across official PC and console stores.
- Query cluster: PC, Steam, PS5, Xbox, Switch, Switch 2.
- Official evidence: official site plus all platform stores.
- Title direction: `Graveyard Keeper 2 Platforms: PC, PS5, Xbox, Switch & Switch 2`.
- H1 direction: `Graveyard Keeper 2 Platforms`.
- Opening/direct answer: list currently confirmed official destinations and link the separate multiplayer answer.
- Required sections: platform matrix; official store links; platform-specific known facts; unknown Mac/Linux/cross-save; choosing a store without unsourced performance claims.
- FAQ need: yes.
- Table need: platform/SKU/release/current player-count field/official link/checked date.
- Source requirements: platform holder or developer only.
- Internal links: `/release-date/`, `/system-requirements/`, `/gameplay/`, `/multiplayer/`.
- Schema: `WebPage`, `BreadcrumbList`.
- Freshness trigger: official SKU, compatibility, player count, or feature change.
- Release-day requirement: verify every store is live and do not publish cross-platform performance comparisons without first-hand tests.

#### 5. `/gameplay/`

- Primary intent: understand what Graveyard Keeper 2 officially confirms and what is new.
- Query cluster: gameplay, features, automation, zombies, Town, graveyard, combat, 3D.
- Official evidence: developer page, Steam store, official Steam devlogs/trailers.
- Title direction: `Graveyard Keeper 2 Gameplay: Confirmed Features, Zombies & Automation`.
- H1 direction: `Confirmed Graveyard Keeper 2 Gameplay Features`.
- Opening/direct answer: it combines graveyard management, zombie-powered production, Town restoration, and undead-army combat; exact recipes/progression remain unverified.
- Required sections: confirmed-vs-unknown table; graveyard management; zombie automation; Town restoration; combat/fortifications; 3D presentation; single-player; held deep guides.
- FAQ need: yes, only official/high-confidence overview questions.
- Table need: system/officially confirmed/unknown detail/source/update trigger.
- Source requirements: official devlogs/store; trailers may support only visible observations and must be labeled.
- Internal links: `/multiplayer/`, `/platforms/`, `/release-date/`.
- Schema: `WebPage`, `BreadcrumbList`; no `HowTo` before a reproducible procedure exists.
- Freshness trigger: official devlog/trailer or released-build verification.
- Release-day requirement: validate the released version, remove statements contradicted by gameplay, and route newly complete tasks through the URL Gate before splitting pages.

#### 6. `/multiplayer/`

- Primary intent: answer whether Graveyard Keeper 2 supports multiplayer, co-op, or only single-player.
- Query cluster: multiplayer, co-op, coop, single-player, play with friends.
- Measured demand: exact `260` current / `224` average; question form `340`; KD `UNKNOWN`.
- Official evidence: Steam single-player feature plus PlayStation/Nintendo one-player fields and other platform-holder records.
- Title direction: `Is Graveyard Keeper 2 Multiplayer or Co-Op? Current Official Status`.
- H1 direction: `Is Graveyard Keeper 2 Multiplayer?`.
- Opening/direct answer: current official storefronts describe single-player/one-player; no verified co-op mode is claimed.
- Required sections: direct answer; official player-count evidence by store; multiplayer/co-op terminology; what is not confirmed; change log and checked date.
- FAQ need: yes, with only rendered and sourced answers.
- Table need: source/store/player-count field/checked date/official link.
- Source requirements: platform holder, developer, or publisher only; Reddit is discovery evidence, not a public fact source.
- Internal links: `/platforms/`, `/gameplay/`, `/release-date/`, `/`.
- Schema: `WebPage`, `BreadcrumbList`; visible FAQ schema only if it matches rendered content.
- Freshness trigger: any official feature/player-count change.
- Release-day requirement: recheck all store fields and the released build; do not infer multiplayer from community requests.

### Homepage architecture and navigation

Header navigation, in this order: `Home`, `Release`, `PC Requirements`, `Platforms`, `Multiplayer`, `Gameplay`.

Homepage order:

1. Independent identity, current launch answer, and one official destination above the fold.
2. Six-card task router with no disabled/dead guide links.
3. Confirmed facts table.
4. Confirmed gameplay pillars.
5. Latest official update summary, linked to its official source rather than a local `/updates/` page.
6. “What waits for release data” trust block.
7. Sources and last-verified information.

Footer:

- Independent/unofficial disclaimer.
- Official game site and Steam destination, clearly labeled as official.
- Source policy and last-verified convention.
- Privacy, Terms, and visible `Analytics choices` control when analytics is enabled.
- No claim of affiliation with Lazy Bear Games, tinyBuild, Valve, Sony, Microsoft, or Nintendo.

### Source display and content contracts

- Use project-owned `SourceRecord`, `FactRecord`, `MediaRecord`, and `KeywordRecord` values from the starter schema.
- Every visible fact has source ID, evidence class, pre-release/released version scope, `lastVerified`, `publicAllowed`, and `editorialJudgment`.
- Render `LastVerified`, evidence badge, and source list on every search page.
- Prices render as dated regional snapshots, not evergreen facts.
- Unknowns render only where useful; they never become placeholders for missing required fields.
- Competitors and community sources may live in the research ledger but never back public game facts.

### Design and media reuse

- Reuse the neutral starter shell/components, not another game's styles, identity, assets, routes, or data.
- Independent identity direction: `Keeper 2 Field Guide`; owned text wordmark/favicon; restrained charcoal, muted violet, and warm parchment/ochre palette without copying official trade dress.
- Above the fold must visually identify the actual game with the official tinyBuild trailer embed, visible attribution, and the direct YouTube/official-site fallback links.
- Static store/press images remain blocked until rights/public-use basis is documented. Do not hotlink competitor images or use the official logo as the independent publisher mark.
- Preserve descriptive alt text, intrinsic dimensions for any approved static media, and visible source/rights attribution.

### Mobile/accessibility requirements

- No horizontal page overflow at 320–430 px widths.
- Tables use accessible headings and a contained horizontal-scroll treatment on small screens.
- Navigation is keyboard-operable, has visible focus, and exposes current page.
- Tap targets are at least 44 px; body text and contrast meet WCAG AA.
- Official video embed keeps a 16:9 responsive ratio and a visible text fallback.
- One H1 per page; semantic heading order; skip link; descriptive link text.

### SEO, canonical, sitemap, and robots

- Unique title/description/H1 for all six pages.
- Self-canonical HTTPS URLs on the chosen apex domain; `www` redirects to apex if configured.
- Initial sitemap includes exactly the six approved search pages. No hold route or demonstration route.
- `robots.txt` references the canonical sitemap and does not block required page assets.
- `/404` returns 404 and is not indexable. Legal routes follow the starter's intentional policy and are not counted as demand pages.
- Breadcrumbs on child pages; coherent internal links; no duplicate release/price/preorder or multiplayer/co-op URL variants.
- Structured data must match visible content and must not include fake offers, ratings, reviews, dates, or game facts.

### GA4 and GSC

Current state: `NOT_CREATED / NOT_AUTHORIZED`.

GA4 build/release contract:

- Keep starter `features.analytics = false` until an independent property/stream and exact production domain are approved.
- When authorized, use the existing consent component in the shared layout, default all four Consent Mode v2 keys to denied, load nothing before consent or after Reject, and load the exact measurement ID once after Allow on the exact production host only.
- Keep advertising consent denied; no Google signals/remarketing/PII.
- Optional initial event: `select_content` for real task cards with stable route IDs only. No free text.
- Production completion requires Reject/Allow/persistence checks plus Tag Assistant and GA4 Realtime evidence; a script tag is insufficient.

GSC build/release contract:

- Create/verify an independent domain property only after domain/release authorization.
- Submit the full canonical sitemap URL as a separate authorized mutation.
- Inspect representative `/` and `/system-requirements/` URLs after production is stable.
- Early empty data is `MEASUREMENT_HOLD`, not a defect.
- Post-launch page decisions use the existing GSC Query → Page Gap workflow and complete data windows.

### Deployment and proof

- GitHub-backed Cloudflare Pages only; do not use Direct Upload as the primary project.
- Build command: starter's verified `npm run verify` contract; output `dist`.
- Separate approval required for GitHub repository creation, push, Pages project, domain binding/DNS, GA4, GSC, sitemap submission, and indexing requests.
- Completion chain: local commit → remote SHA → Git-backed Pages active source SHA → preview output → custom-domain output → robots/sitemap/canonical/key routes → rendered media and consent behavior.

### Testing and acceptance

Local Sprint 002 acceptance:

1. Record starter baseline SHA.
2. Run neutral starter verification before customization.
3. Run `RESIDUE_ALLOWED_IDENTITY="Graveyard Keeper 2,Keeper 2 Field Guide" npm run verify` after customization.
4. Run build, project tests, Astro diagnostics, link/source/route validators, and `git diff --check`.
5. Inspect generated `dist`, not source only.
6. For every indexable route verify: successful output, one H1, unique metadata, self-canonical, no accidental `noindex`, valid internal links, sitemap membership, source display, and no old-game/other-site residue.
7. Verify the official game destination, independent disclaimer, media attribution/fallback, and nonzero media dimensions where static media is approved.
8. Review representative desktop and mobile layouts; confirm no overflow and accessible navigation/tables.
9. Stop at `LOCAL_VERIFIED / RELEASE_APPROVAL_REQUIRED`; do not commit/push/deploy unless separately authorized.

## RELEASE_EXPANSION_TRIGGERS

### STAGE A — PRE-LAUNCH (`2026-09-01` through `2026-09-21`)

- Build only after separate approval and domain choice.
- Refresh official sources at least weekly, then daily during the final seven days.
- Keep six-page ownership stable; strengthen existing owners when new official facts fit.
- Monitor new SERP owners and official announcements read-only.
- Do not unlock deep content from countdown pressure.

### STAGE B — RELEASE WINDOW (`2026-09-22` through first 72 hours)

- Verify store release state, release version, platform availability, requirements, prices, and launch patch notes.
- Capture first-hand gameplay with version/time/platform provenance.
- Prioritize first-hour progression, quest triggers, recipe fields, item/resource locations, automation rules, and error/conflict logs.
- Observe real search/community questions as discovery signals.
- A hold cluster moves to review only when its listed `UNLOCK CONDITION` is met; release alone is not enough.
- GSC may be delayed. Use only complete available dates and retain `MEASUREMENT_HOLD` when data is sparse.

### STAGE C — POST-LAUNCH EXPANSION

Run GSC Query → Page Gap and classify each cluster as:

- `STRENGTHEN_EXISTING`
- `CREATE_PAGE`
- `ENTITY_CLUSTER`
- `UTILITY_TOOL`
- `WATCH`
- `NO_ACTION`
- `REQUIRES_FIRST_HAND_EVIDENCE`

A new URL requires all of:

1. A validated distinct user task, not a word-order variant.
2. No existing owner that can fully satisfy it.
3. Required facts/data at 100% eligible completeness.
4. Version/provenance/maintenance owner.
5. URL Gate pass and publication approval.

Top release-window acquisition order:

1. First-hour beginner/walkthrough slice.
2. Recipe/crafting/material records.
3. Quest/NPC triggers and rewards.
4. Location/resource/map evidence.
5. Zombie automation/production-chain rules.

## RISKS

1. `US_DEMAND_UNKNOWN`: Global 28-day data cannot populate the Demand axis.
2. `SERP_COMPETITION_INCREASED`: official exact-match domain plus two dedicated guide/wiki competitors are already visible.
3. `GK1_CONTAMINATION`: old-game results and assumptions can silently pollute sequel facts and keyword mapping.
4. `PRE_RELEASE_DATA_GAP`: deep guides/utilities cannot pass evidence/completeness gates yet.
5. `MEDIA_RIGHTS_UNKNOWN`: official availability of a media kit does not by itself prove commercial independent-guide reuse rights.
6. `PRICE_AND_PLATFORM_VOLATILITY`: prices, promotions, compatibility, and store availability require timestamps and launch-day refresh.
7. `OFFICIAL_CONFUSION`: exact-title domains/branding can imply affiliation; use an independent identity and disclaimer.
8. `SEARCH_DATA_SCOPE_LIMIT`: current authenticated Similarweb and Google Trends captures are Global/Worldwide, not US-only; several exact long-tail seeds return no row or no KD and remain `UNKNOWN`.
9. `SERP_CAPTURE_LIMIT`: Google required human verification after four inner-page queries. No CAPTCHA was solved or bypassed; remaining clusters use labeled public-search and Similarweb ownership cross-checks, not a localized US top-10 export.
10. `RELEASE_CHANGE`: date or feature changes remain possible until release; official sources own truth.
11. `EARLY_GSC_LAG`: first 72-hour GSC evidence may be incomplete and cannot force expansion.

The game-site numeric Risk axis is `UNKNOWN` until the exact domain, independent brand, media/public-use basis, and maintenance owner are approved. No zero-risk legal conclusion is made.

## NEXT_ACTION

User decision required:

1. Approve or replace `keeper2fieldguide.com`.
2. If accepted, separately authorize Sprint 002 local build from the canonical starter.
3. Keep commit, push, domain purchase, deployment, DNS, GA4, GSC, sitemap submission, and indexing outside that authorization unless explicitly included.

## FINAL DECISION CARD

```yaml
STATUS: MVP_DESIGN / PASS / RELEASE_APPROVAL_NOT_REQUESTED
READY_FOR_PRELAUNCH_BUILD: YES
RECOMMENDED_DOMAIN: keeper2fieldguide.com
PRELAUNCH_PAGE_COUNT: 6
PRELAUNCH_URLS:
  - /
  - /release-date/
  - /platforms/
  - /multiplayer/
  - /gameplay/
  - /system-requirements/
TOP_RELEASE_EXPANSION_TARGETS:
  - beginner guide / first-hour walkthrough
  - recipes / crafting / materials
  - quests / NPCs
  - locations / resources / map
  - zombie automation / production-chain planning
REUSED_SKILLS:
  - building-evidence-first-game-sites
  - researching-game-site-keywords
  - game-seo-keyword-loop
  - gsc-query-page-gap-review
  - ga4-consent-integration
  - github-cloudflare-pages-publish
REUSED_FACTORY_ASSETS:
  - /Users/jazfox/Documents/aios/Project-Memory/02_PROJECTS/SITE_FACTORY.md
  - /Users/jazfox/Documents/aios/Project-Memory/09_REFERENCE/registries/GAME_SITE_FACTORY_ASSET_LOCATOR.md
  - /Users/jazfox/Documents/aios/reconcile-clean/docs/website-factory-aios-2/pilot-selection/game-site-evidence-rubric.v1.md
  - /Users/jazfox/Documents/Codex/2026-08-24/game-guide-starter@ecfd7ff71f41c6c753b5850b08002a388c9614e7
  - /Users/jazfox/Documents/Codex/2026-08-24/game-guide-starter/TEMPLATE-CHECKLIST.md
SIMILARWEB_GLOBAL_28D:
  phrase_match_raw_count: 153
  phrase_match_raw_current_volume: 69120
  exact_title_current_volume: 33200
  exact_title_average_volume: 17500
  exact_title_kd: 14
  release_date_current_volume: 7900
  release_date_average_volume: 2400
  release_date_kd: 17
GOOGLE_TRENDS_WORLDWIDE_30D:
  graveyard_keeper_2_average: 14
  gpts_average: 72
US_DEMAND: UNKNOWN
UTILITY_STATUS: HOLD
REPORT_PATH: /Users/jazfox/Documents/ChatGPT/Graveyard Keeper/reports/sprint-001/2026-09-01-graveyard-keeper-2-prelaunch-research-architecture-build-spec.md
KEYWORD_MATRIX_PATH: /Users/jazfox/Documents/ChatGPT/Graveyard Keeper/reports/sprint-001/2026-09-01-graveyard-keeper-2-keyword-page-map.csv
SERP_PAGE_PLAN_PATH: /Users/jazfox/Documents/ChatGPT/Graveyard Keeper/reports/sprint-001/2026-09-01-graveyard-keeper-2-keyword-serp-page-plan.md
CHANGES:
  repo_created: false
  workspace_state: existing unborn Git repository; no commits
  code_written: false
  report_written: true
  commit: false
  push: false
  deploy: false
  domain_purchased: false
```
