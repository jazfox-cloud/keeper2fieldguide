---
name: Keeper 2 Field Guide
description: A night-shift restoration survey for evidence-first Graveyard Keeper 2 answers.
colors:
  ink: "hsl(42 35% 94%)"
  ink-strong: "hsl(42 48% 98%)"
  muted: "hsl(260 14% 74%)"
  muted-strong: "hsl(255 20% 84%)"
  survey-line: "hsl(262 18% 30%)"
  registration-line: "hsl(39 50% 48%)"
  docket: "hsl(258 17% 15%)"
  docket-raised: "hsl(258 18% 19%)"
  night-field: "hsl(260 20% 8%)"
  work-violet: "hsl(264 24% 35%)"
  work-violet-soft: "hsl(263 23% 24%)"
  registration-ochre: "hsl(39 68% 61%)"
  registration-ochre-soft: "hsl(40 39% 21%)"
  focus: "hsl(47 90% 70%)"
typography:
  display:
    fontFamily: "Bitter Variable, ui-serif, serif"
    fontSize: "clamp(3rem, 5.2vw, 4.8rem)"
    fontWeight: 760
    lineHeight: 1.1
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Bitter Variable, ui-serif, serif"
    fontSize: "clamp(1.65rem, 3.2vw, 2.65rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Archivo Variable, ui-sans-serif, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Archivo Variable, ui-sans-serif, sans-serif"
    fontSize: "0.72rem"
    fontWeight: 780
    letterSpacing: "0.06em"
spacing:
  xs: "0.5rem"
  sm: "0.75rem"
  md: "1rem"
  lg: "2rem"
  section: "clamp(3.7rem, 8vw, 7rem)"
components:
  button-primary:
    backgroundColor: "{colors.registration-ochre}"
    textColor: "{colors.night-field}"
    padding: "0.68rem 1rem"
    height: "46px"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ink-strong}"
    padding: "0.68rem 1rem"
    height: "46px"
  evidence-badge:
    backgroundColor: "{colors.registration-ochre-soft}"
    textColor: "{colors.registration-ochre}"
    padding: "0.1rem 0.4rem"
---

# Design System: Keeper 2 Field Guide

## Overview

**Creative North Star: "The Night Restoration Survey"**

The interface behaves like a conservation team documenting a work site after hours: dark survey boards hold the evidence, muted violet marks active work zones, and ochre registration marks identify current status and trustworthy actions. It is a reading system first, so expressive moments are concentrated in the first viewport, task ledger, and source records rather than scattered ornament.

The world deliberately avoids the familiar gothic parchment treatment and the generic neon gaming dashboard. It also avoids copying the game's official logo or trade dress.

**Key Characteristics:**

- Dark, square-edged condition-report surfaces.
- Ochre used for registration, active state, and primary action.
- Source dates and uncertainty are visible information, not footnotes.
- Unequal task-ledger spans establish rhythm without equal-card grids.
- Official external video is click-to-load and visibly attributed.

## Colors

The strategy is restrained: a charcoal-violet night field carries most of the page, paper-white type does the reading work, and ochre is reserved for registration and action.

### Primary

- **Registration Ochre** (`hsl(39 68% 61%)`): primary actions, current navigation, registry labels, and verified emphasis.
- **Night Field** (`hsl(260 20% 8%)`): page ground and the stable background behind every route.

### Secondary

- **Work Violet** (`hsl(264 24% 35%)`): active work-zone color; its softer role builds panels and table headers.

### Neutral

- **Paper Ink** (`hsl(42 35% 94%)`): default foreground.
- **Strong Paper Ink** (`hsl(42 48% 98%)`): headings and high-priority answers.
- **Docket** (`hsl(258 17% 15%)`): evidence surfaces.
- **Survey Line** (`hsl(262 18% 30%)`): rules, table divisions, and section structure.

**The Registration Rule.** Ochre marks a current state or a useful action. It is not scattered as decoration.

## Typography

**Display Font:** Bitter Variable (self-hosted package, serif fallback)
**Body Font:** Archivo Variable (self-hosted package, sans-serif fallback)

**Character:** Bitter provides weight and archival authority without imitating the official game lettering. Archivo keeps tables, source metadata, long answers, and navigation compact and legible.

### Hierarchy

- **Display** (variable 760, `clamp(3rem, 5.2vw, 4.8rem)`, 1.1): homepage and answer-page H1s; tracking never goes below `-0.035em`.
- **Headline** (variable 700, `clamp(1.65rem, 3.2vw, 2.65rem)`, 1.1): section headings and system labels.
- **Body** (400, `1rem`, 1.65): factual prose with a 72ch maximum measure.
- **Label** (780, `0.72rem`, `0.06em`, uppercase): real record states, evidence categories, and verification metadata.

**The Evidence Voice Rule.** Large type names the answer; small type names its state. Never use small uppercase type merely to decorate a heading.

## Layout

The global shell is `min(1180px, 100% - 2rem)`. The homepage opens as a two-column survey at desktop widths: answer record on the left, official trailer record on the right. At 980px it becomes one column. The task ledger uses a 12-column field with unequal 5/7 and 4-column spans, then becomes two columns and finally a single continuous ledger below 680px.

Sections use a wide `clamp(3.7rem, 8vw, 7rem)` vertical rhythm. Tables keep a 680px internal minimum inside a labeled, keyboard-focusable horizontal scroller so the page itself never overflows at 320–430px. Mobile navigation remains visible in a contained horizontal strip rather than disappearing.

## Elevation & Depth

Depth is structural and scarce. Evidence panels use tonal separation plus one ambient shadow (`0 20px 54px hsl(260 34% 3% / .36)`). Registration lines are used without stacking a border beneath that shadow. Flat ledger rows rely on neighboring tone and 1px divisions.

**The Survey Board Rule.** Lift only records that behave as a complete board; rows and small labels stay flat.

## Shapes

The system is square-edged. Buttons, tables, ledgers, video records, and source panels do not use decorative rounding. The owned monogram uses an arched outer silhouette, but that shape does not become a generic container motif. Lines remain 1px except the visible 3px keyboard focus ring.

## Components

### Buttons

- **Primary:** ochre ground, night-field text, at least 46px high, strong weight, square corners.
- **Secondary:** transparent ground with a 1px registration-colored inset rule.
- **Hover / Focus:** primary becomes lighter ochre; every interactive element uses the 3px focus color with a 4px offset.

### Evidence tables

- Table headers use soft work-violet and uppercase Archivo labels.
- Row labels use strong paper ink; values and source notes use muted-strong text.
- Tables are always wrapped by the contained scroll region on small screens.

### Navigation

- The owned monogram and publisher name lead the header.
- Current route is ochre with a 2px inset registration line.
- Under 980px the header stacks; the full navigation remains keyboard-operable and horizontally scrollable.

### Task ledger

- Unequal spans and 1px shared rules replace equal rounded cards.
- Each record carries a task label, a user question, and an evidence state.
- Hover changes the work-zone tone and adds a 2px bottom registration line.

### Official trailer record

- Starts as an authored survey surface with a real click target and attribution.
- Creates the privacy-enhanced YouTube iframe only after the user chooses to load it.
- Direct YouTube and official-site fallbacks remain visible outside the player.

## Do's and Don'ts

### Do:

- **Do** keep the page owner, current answer, verification date, and official evidence visually connected.
- **Do** use square-edged docket surfaces and shared 1px rules for dense factual regions.
- **Do** preserve click-to-load behavior for third-party video.
- **Do** keep mobile navigation and tables contained rather than hiding required information.

### Don't:

- **Don't** use the official game logo as the independent publisher mark.
- **Don't** add gothic parchment, faux paper grain, neon gaming chrome, glass cards, or equal icon-card grids.
- **Don't** invent images, prices, ratings, mechanics, or platform performance to fill space.
- **Don't** use ochre for arbitrary decoration; it carries registration, state, or action.
