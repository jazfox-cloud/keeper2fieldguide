# Graveyard Keeper 2 — Keyword, SERP and Page Plan

Capture date: `2026-09-01`
Target language: English
Similarweb scope: Google, Worldwide, Total traffic, last 28 days, as of `2026-08-29`
Google Trends scope: Worldwide, Web Search, past 30 days
Status: `RESEARCH_COMPLETE_FOR_PRELAUNCH_ARCHITECTURE / US_VOLUME_UNKNOWN`

This document corrects the first Sprint 001 draft. The first draft carried only the title-level Similarweb snapshot and did not contain a cleaned long-tail inventory or query-level SERP review. The durable keyword matrix is in `2026-09-01-graveyard-keeper-2-keyword-page-map.csv`.

## 1. What was actually measured

| Dataset | Result | Interpretation |
| --- | --- | --- |
| Similarweb Phrase Match | `153` raw phrases; `69,120` total current 28-day volume | Raw total is unusable as site demand because many rows are Graveyard Keeper 1 phrases containing a number 2 |
| Similarweb Related Keywords | `128` raw phrases; `353,850` total current 28-day volume | Discovery only; dominated by first-game and broad related terms |
| Similarweb Questions | `7` raw questions | Only `what are they adding to graveyard keeper 2` is clearly sequel-specific English intent |
| Clean English sequel set | `51` mapped rows in the CSV, including exact seeds with no row | This is the planning inventory; missing values remain `UNKNOWN` |
| Exact title | current `33.2K`; average `17.5K`; KD `14`; zero-click `65%` | Real title demand, but official/store SERP is strong |
| Release date | current `7.9K`; average `2.4K`; KD `17`; zero-click `83%` | Strongest non-brand cluster and a clear prelaunch page |
| Google Trends | average `14` for Graveyard Keeper 2 vs `72` for `gpts` | Demand is smaller than the baseline but non-zero |
| Google Trends event | index rose from single digits/low teens to `50`, `67`, `35`, `30`, `27`, `25`, `21` from Aug 26–Sep 1 | Release-date/preorder announcement produced a real current spike |

The Similarweb numbers are global, not US-only. KD is a context signal, not a guarantee. `NO_ROW` means the exact seed did not appear in Similarweb's current Phrase Match result; it does not mean zero searches.

## 2. Noise removed from the raw long-tail set

The raw `153` Phrase Match rows cannot be used as a page list. Major noise classes included:

- First-game numeric terms: `graveyard keeper 26 skull corpse`, `quality fertilizer 2`, `alchemy workbench 2`, `stone cutter 2`, `tier 2`, `church level 20`, and `caught 200 fish`.
- Non-English duplicates of release/platform intent.
- Piracy/download terms.
- Typographic fragments such as `graveyard keeper 2/` and `graveyard keeper 2 st`.
- Navigational variants that belong to an existing owner, such as `Steam`, `YouTube`, and `Reddit`.

This cleaning is why the raw `69,120` current volume is not treated as attainable site traffic.

## 3. Query-level KD and demand conclusions

| Cluster | Measured keyword evidence | KD | Decision |
| --- | --- | ---: | --- |
| Brand | `33.2K` current / `17.5K` average | `14` | Build `/`, but expect official/store dominance |
| Release | `7.9K` current / `2.4K` average | `17`; variants `13–23` | Build `/release-date/` |
| Platforms | Switch `1.4K`; Switch 2 `730`; Nintendo Switch `550`; Steam `1K`; PS5 question `190` | `UNKNOWN` | Build one cross-platform owner `/platforms/` |
| Multiplayer | exact `260` / `224` average; question form `340`; coop average `50` | `UNKNOWN` | Build `/multiplayer/`; this replaces the unsupported `/updates/` page |
| Gameplay | `440` current / `107` average | `19` | Build `/gameplay/`, using official evidence and video-friendly structure |
| Requirements | exact seed returned no Similarweb row | `UNKNOWN` | Build `/system-requirements/` because the task is complete and SERP is unusually weak/thin |
| Price | exact seed returned no row; preorder variants total observable demand | `UNKNOWN` | Merge into `/release-date/`; no thin `/price/` URL |
| Review | `270` current; average `<50` | `24` | Hold until released and firsthand reviewable |
| Wiki/beginner/crafting/recipes | exact seeds returned no row | `UNKNOWN` | Hold until released data can satisfy the page |
| Updates/roadmap | exact seeds returned no row | `UNKNOWN` | Do not build prelaunch; official Steam News owns the intent |

## 4. Homepage SERP sample

Google was checked in an authenticated Chrome session in English. Four result pages were sampled because SERP features reduced the number of ordinary organic links per page. The `30` rows below are observed result slots, not a claim of 30 unique domains.

| Observed slot | Page | Owner | Result type / title summary |
| ---: | ---: | --- | --- |
| 1 | 1 | store.steampowered.com | Official Steam product |
| 2 | 1 | graveyardkeeper2.com | Official exact-match site |
| 3 | 1 | reddit.com | Preorder discussion |
| 4 | 1 | steamcommunity.com | Official community hub |
| 5 | 1 | xbox.com | Official Xbox store |
| 6 | 1 | store.steampowered.com | Official announcement news |
| 7 | 1 | nintendo.com | Official Switch 2 store |
| 8 | 1 | youtube.com | Official announcement trailer |
| 9 | 2 | nintendo.com | Official Switch 2 store |
| 10 | 2 | pcgamer.com | Major media announcement |
| 11 | 2 | gematsu.com | Release-date news |
| 12 | 2 | ign.com | Game database page |
| 13 | 3 | pushsquare.com | PS5 game database/editorial |
| 14 | 3 | xbox.com | Official Xbox store |
| 15 | 3 | game8.co | Release date answer |
| 16 | 3 | cinelinx.com | Release date news |
| 17 | 3 | 80.lv | Release date news |
| 18 | 3 | steamcommunity.com | First-game discussion pollution |
| 19 | 3 | facebook.com | Official publisher social post |
| 20 | 3 | nichegamer.com | Announcement news |
| 21 | 3 | g2a.com | Commercial/news page |
| 22 | 4 | g2a.com | Commercial/news page |
| 23 | 4 | store.playstation.com | Official PlayStation store |
| 24 | 4 | youtube.com | Gameplay trailer |
| 25 | 4 | dayone-app.com | Release/price/preorder answer |
| 26 | 4 | gamesradar.com | Major media announcement |
| 27 | 4 | gamereactor.eu | Trailer page |
| 28 | 4 | releases.com | Release-date database |
| 29 | 4 | tiktok.com | Wishlist video |
| 30 | 4 | xbox.com | Official Xbox store |

Homepage opportunity: `MEDIUM_LOW`. KD is low, but the actual SERP is authority-heavy. The independent homepage must win on fast routing, cross-store synthesis, explicit source dates, and postlaunch task depth—not on pretending to be official.

## 5. Inner-page SERP review

| Query | First-page owners observed | Competition | Opportunity | Page action |
| --- | --- | --- | --- | --- |
| `graveyard keeper 2 release date` | Steam, Reddit, ixbt.games, Gematsu, DayOne, Steam Community, X, IGN | High; 8 ordinary organic results plus direct answers/video | Medium because demand is very high, but freshness/official citations are mandatory | `/release-date/` |
| `graveyard keeper 2 price` | Steam, Xbox, Reddit, SteamDB, AllKeyShop, Steam Community, GG.deals, PC Gamer, G2A | High commercial/store density | Low as a separate URL; useful only as a dated cross-store section | merge into `/release-date/` |
| `graveyard keeper 2 system requirements` | System Requirements Lab, Steam, PCGamingWiki, requirementsforpc.com, first-game Fandom, Instant Gaming, first-game requirements site, GamerScout, Reddit | Medium; several thin exact-match pages and first-game pollution | High relative opportunity despite unmeasured KD | `/system-requirements/` |
| `graveyard keeper 2 platforms` | VGChartz, Gematsu, Xbox, DayOne, official site, IGN, IGN regional | Medium-high news/store density | Medium; cross-platform table is a complete task | `/platforms/` |
| `graveyard keeper 2 multiplayer` | Similarweb leader: Reddit; public search also surfaces PCGamingWiki single-player status and first-game community results | Medium and answer-poor | Medium-high; dedicated direct answer beats hiding it on platforms | `/multiplayer/` |
| `graveyard keeper 2 gameplay` | YouTube leads Similarweb; official trailers/devlogs and major media dominate | High video density | Medium only if page embeds official evidence and answers confirmed-vs-unknown systems | `/gameplay/` |
| `graveyard keeper 2 beginner guide` | Dedicated GK2 wiki appears, but most visible results are Graveyard Keeper 1 guides, Reddit, and YouTube | Contaminated rather than strong | Postlaunch opportunity, not eligible prelaunch | `HOLD_FOR_RELEASE` |
| `graveyard keeper 2 wiki` | graveyardkeeper2guide.wiki, The Games Wiki, first-game Fandom/Wikipedia pollution | Two dedicated competitors; content quality is uneven | Potentially large after release, but no complete entity dataset now | `HOLD_FOR_RELEASE` |
| `graveyard keeper 2 crafting recipes` | First-game Fandom/Steam guides dominate; no complete sequel dataset | Thin sequel coverage, heavy first-game pollution | High postlaunch upside only after versioned records exist | `HOLD_FOR_RELEASE` |
| `graveyard keeper 2 automation zombies` | Official Steam news, The Games Wiki automation page, then first-game YouTube/Fandom/Reddit | One dedicated sequel answer plus official overview | Medium-high postlaunch split opportunity; prelaunch overview belongs on gameplay | `/gameplay/` now; split later if data/demand pass |
| `graveyard keeper 2 roadmap updates` | Official Steam Community/news dominates; no formal roadmap found | Official owner is decisive | Low independent-page opportunity | no prelaunch URL |

Google triggered human verification after the first four inner-page queries. No CAPTCHA was solved or bypassed. Remaining clusters were cross-checked with public search and Similarweb ownership signals. They are sufficient for routing, but are not represented as a localized US top-10 export.

## 6. Final prelaunch page set

Indexable demand/task pages: `6`.

| Priority | URL | Primary cluster | Why it exists | SERP opportunity | Build state |
| ---: | --- | --- | --- | --- | --- |
| 1 | `/` | brand/overview | `33.2K` current title demand and site routing | Medium-low | `BUILD_PRELAUNCH` |
| 2 | `/release-date/` | release/price/preorder | `7.9K`, KD17, highest non-brand task | Medium | `BUILD_PRELAUNCH` |
| 3 | `/platforms/` | Switch/PS5/Xbox/PC | large Switch surge and distinct comparison task | Medium | `BUILD_PRELAUNCH` |
| 4 | `/multiplayer/` | multiplayer/co-op/single-player | `260` exact + `340` question; answer-poor SERP | Medium-high | `BUILD_PRELAUNCH` |
| 5 | `/gameplay/` | gameplay/features/automation | `440`, KD19, official evidence available | Medium | `BUILD_PRELAUNCH` |
| 6 | `/system-requirements/` | PC requirements/can I run it | complete official data and thin/contaminated SERP | High relative opportunity | `BUILD_PRELAUNCH` |

`/updates/` is removed from the initial sitemap. It had no exact Similarweb row, no formal roadmap, and an official-source-dominated SERP. Official updates are source material for `/`, `/release-date/`, and `/gameplay/` until a distinct search task appears.

## 7. Release and postlaunch page queue

| Order | Candidate URL | Current evidence | Unlock condition | Decision |
| ---: | --- | --- | --- | --- |
| 1 | `/beginner-guide/` | exact seed no row; strong first-game pollution | released build; repeatable first-hour route; distinct demand | `HOLD_FOR_RELEASE` |
| 2 | `/crafting-recipes/` | exact seeds no row; first-game results dominate | complete versioned recipe slice and provenance | `HOLD_FOR_RELEASE` |
| 3 | `/quests/` | competitor shells only | verified triggers, steps, rewards and stable identifiers | `HOLD_FOR_RELEASE` |
| 4 | `/items/` | no eligible sequel data | complete typed records with acquisition/use/version | `HOLD_FOR_RELEASE` |
| 5 | `/map/` or `/locations/` | community map interest, rights/coordinates missing | owned/licensed map basis and complete versioned location data | `HOLD_FOR_RELEASE` |
| 6 | `/automation/` | official overview and one dedicated competitor | exact unlocks, workers, stations, rates and independent demand | `HOLD_FOR_RELEASE` |
| 7 | `/review/` | `270`, KD24, zero-click 90% | released build and firsthand tested review | `HOLD_FOR_RELEASE` |
| 8 | `/updates/` | no exact row; official sources dominate | distinct recurring search cluster not served by existing pages | `WATCH` |

No `/wiki/` shell is planned. A future entity hub may use `/guides/` or an explicit database route only after enough eligible pages exist; the domain homepage must not claim to be a complete wiki before that is true.

## 8. Decision

```yaml
RESEARCH_DECISION: GO_PRELAUNCH
PRELAUNCH_PAGE_COUNT: 6
REMOVED_PAGE: /updates/
ADDED_PAGE: /multiplayer/
TITLE_KD: 14
RELEASE_DATE_KD: 17
GAMEPLAY_KD: 19
REVIEW_KD: 24
OTHER_CLUSTER_KD: UNKNOWN
US_VOLUME: UNKNOWN
SERP_OPPORTUNITY:
  system_requirements: HIGH_RELATIVE
  multiplayer: MEDIUM_HIGH
  release_date: MEDIUM
  platforms: MEDIUM
  gameplay: MEDIUM
  homepage: MEDIUM_LOW
DEEP_GUIDES: HOLD_FOR_RELEASE
```
