import type { MediaRecord } from '../config/schema.ts';

export interface PageSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface PageTable {
  caption: string;
  headers: string[];
  rows: { cells: string[]; sourceIds: string[] }[];
}

export interface PageDefinition {
  heading: string;
  answer: string;
  summary: string;
  factIds: string[];
  mediaIds?: MediaRecord['id'][];
  table?: PageTable;
  sections: PageSection[];
  faqs: { question: string; answer: string }[];
  sourceIds: string[];
  related: { label: string; href: string }[];
}

export const pageContent: Record<string, PageDefinition> = {
  'release-date': {
    heading: 'Graveyard Keeper 2 Release Date and Pre-Order Details',
    answer: 'Graveyard Keeper 2 is scheduled to release on September 22, 2026.',
    summary: 'On Steam in the United States, the checked pre-release snapshot showed a $24.99 base price and a $19.99 pre-order price (20% off) on September 1, 2026. Prices and promotions can differ by region and store.',
    factIds: ['fact:release-date', 'fact:steam-price-base', 'fact:steam-price-preorder', 'fact:platforms'],
    table: {
      caption: 'Official store status checked September 1, 2026',
      headers: ['Store', 'Current status', 'Price snapshot', 'Checked'],
      rows: [
        { cells: ['Steam (US)', 'Pre-order available', '$24.99 base / $19.99 pre-order', '2026-09-01'], sourceIds: ['steam-store'] },
        { cells: ['PlayStation Store', 'Official concept page live', 'Check official regional store', '2026-09-01'], sourceIds: ['playstation-store'] },
        { cells: ['Xbox Store', 'Official listing live', 'Check official regional store', '2026-09-01'], sourceIds: ['xbox-store'] },
        { cells: ['Nintendo Switch', 'Official listing live', 'Check official regional store', '2026-09-01'], sourceIds: ['switch-store'] },
        { cells: ['Nintendo Switch 2', 'Official listing live', 'Check official regional store', '2026-09-01'], sourceIds: ['switch-2-store'] },
      ],
    },
    sections: [
      { heading: 'What the dated price means', paragraphs: ['The Steam figures are a US-dollar snapshot, not an evergreen global price. Open the official store for your region before purchasing.'], bullets: ['Currency, taxes, and platform pricing can differ.', 'The 20% Steam promotion is time-sensitive.', 'This page will keep its URL after launch and replace pre-order language with current availability.'] },
      { heading: 'What changes on launch day', paragraphs: ['We will recheck the release state, current prices, every official destination, and any expired promotional language. A release announcement alone will not unlock unverified recipes, quests, maps, or progression guides.'] },
    ],
    faqs: [
      { question: 'When does Graveyard Keeper 2 come out?', answer: 'The current official date is September 22, 2026.' },
      { question: 'How much does Graveyard Keeper 2 cost?', answer: 'The checked Steam US snapshot was $24.99, or $19.99 during the displayed 20% pre-order promotion. Check your regional store for the current price.' },
      { question: 'Is the pre-order price permanent?', answer: 'No. It is a dated promotional snapshot and may change or expire.' },
    ],
    sourceIds: ['official-site', 'steam-store', 'steam-news', 'playstation-store', 'xbox-store', 'switch-store', 'switch-2-store'],
    related: [{ label: 'See every confirmed platform', href: '/platforms/' }, { label: 'Compare PC requirements', href: '/system-requirements/' }, { label: 'Check multiplayer status', href: '/multiplayer/' }],
  },
  'system-requirements': {
    heading: 'Graveyard Keeper 2 PC System Requirements',
    answer: 'The official Steam listing requires 64-bit Windows 10, DirectX 12, and 2 GB of available storage.',
    summary: 'Steam currently lists 4 GB RAM at minimum and 8 GB RAM as recommended. Compare every component below, then recheck Steam before launch in case the requirements change.',
    factIds: ['fact:pc-os', 'fact:pc-ram', 'fact:pc-directx', 'fact:pc-storage'],
    table: {
      caption: 'Official Windows PC requirements from Steam',
      headers: ['Component', 'Minimum', 'Recommended'],
      rows: [
        { cells: ['Operating system', 'Windows 10 x64', 'Windows 10 x64'], sourceIds: ['steam-store'] },
        { cells: ['Memory', '4 GB RAM', '8 GB RAM'], sourceIds: ['steam-store'] },
        { cells: ['DirectX', 'Version 12', 'Version 12'], sourceIds: ['steam-store'] },
        { cells: ['Storage', '2 GB available space', '2 GB available space'], sourceIds: ['steam-store'] },
      ],
    },
    sections: [
      { heading: 'How to compare your PC', paragraphs: ['Check the Windows edition and architecture, installed RAM, graphics hardware, and available storage rather than comparing only one number. Steam is the source of record for the current Windows requirements.'] },
      { heading: 'What is not confirmed here', paragraphs: ['The checked official sources do not establish a Mac or Linux release, nor do they provide enough verified detail here for a performance promise on a particular laptop or handheld. We will not replace missing official data with a third-party estimate.'] },
    ],
    faqs: [
      { question: 'How much storage does Graveyard Keeper 2 need?', answer: 'Steam currently lists 2 GB of available space.' },
      { question: 'How much RAM is required?', answer: 'Steam lists 4 GB RAM minimum and 8 GB RAM recommended.' },
      { question: 'Is a Mac or Linux version confirmed?', answer: 'Not by the official sources used for this page as of September 1, 2026.' },
    ],
    sourceIds: ['steam-store'],
    related: [{ label: 'Check release and pricing', href: '/release-date/' }, { label: 'See confirmed platforms', href: '/platforms/' }, { label: 'Review confirmed gameplay', href: '/gameplay/' }],
  },
  platforms: {
    heading: 'Graveyard Keeper 2 Platforms',
    answer: 'Official destinations currently exist for Windows PC via Steam, PlayStation 5, Xbox, Nintendo Switch, and Nintendo Switch 2.',
    summary: 'Each platform below links to its official store or platform-holder record. The presence of a store page does not support unsourced performance, cross-save, or feature-comparison claims.',
    factIds: ['fact:release-date', 'fact:platforms', 'fact:player-mode'],
    table: {
      caption: 'Currently confirmed official destinations',
      headers: ['Platform', 'Official destination', 'Player field', 'Checked'],
      rows: [
        { cells: ['Windows PC', 'Steam', 'Single-player', '2026-09-01'], sourceIds: ['steam-store'] },
        { cells: ['PlayStation 5', 'PlayStation Store', '1 player', '2026-09-01'], sourceIds: ['playstation-store'] },
        { cells: ['Xbox', 'Xbox Store', 'See current official listing', '2026-09-01'], sourceIds: ['xbox-store'] },
        { cells: ['Nintendo Switch', 'Nintendo eShop page', 'Single system (1)', '2026-09-01'], sourceIds: ['switch-store'] },
        { cells: ['Nintendo Switch 2', 'Nintendo eShop page', 'Single system (1)', '2026-09-01'], sourceIds: ['switch-2-store'] },
      ],
    },
    sections: [
      { heading: 'Choosing a store', paragraphs: ['Use the official destination for the hardware and region you intend to play on. This pre-launch guide does not claim that one platform runs better than another because no first-hand cross-platform test is available.'] },
      { heading: 'Still unknown', paragraphs: ['Mac and Linux availability, cross-save, and cross-platform performance comparisons remain unverified in the evidence used here. These are not negative claims; they are explicit evidence gaps.'] },
    ],
    faqs: [
      { question: 'Is Graveyard Keeper 2 coming to PS5?', answer: 'Yes. An official PlayStation Store concept page is live for the game.' },
      { question: 'Is it coming to Nintendo Switch 2?', answer: 'Yes. Nintendo has an official Switch 2 store listing.' },
      { question: 'Is a Mac version confirmed?', answer: 'Not by the official records used for this page as of September 1, 2026.' },
    ],
    sourceIds: ['official-site', 'steam-store', 'playstation-store', 'xbox-store', 'switch-store', 'switch-2-store'],
    related: [{ label: 'Check the release date', href: '/release-date/' }, { label: 'Compare Windows requirements', href: '/system-requirements/' }, { label: 'Read the multiplayer answer', href: '/multiplayer/' }, { label: 'Review gameplay', href: '/gameplay/' }],
  },
  multiplayer: {
    heading: 'Is Graveyard Keeper 2 Multiplayer?',
    answer: 'Current official storefronts describe Graveyard Keeper 2 as single-player or one-player; no verified co-op mode is claimed.',
    summary: 'That is the current official status, not a prediction about every future update. We will change this answer only when a developer, publisher, platform holder, or released build provides evidence.',
    factIds: ['fact:player-mode'],
    table: {
      caption: 'Official player-count evidence checked September 1, 2026',
      headers: ['Official source', 'Displayed player information', 'What it supports'],
      rows: [
        { cells: ['Steam', 'Single-player feature', 'Single-player is supported'], sourceIds: ['steam-store'] },
        { cells: ['PlayStation Store', '1 player', 'Local player count is one'], sourceIds: ['playstation-store'] },
        { cells: ['Nintendo Switch', 'Single system (1)', 'Single-system player count is one'], sourceIds: ['switch-store'] },
        { cells: ['Nintendo Switch 2', 'Single system (1)', 'Single-system player count is one'], sourceIds: ['switch-2-store'] },
      ],
    },
    sections: [
      { heading: 'Multiplayer and co-op are separate claims', paragraphs: ['A request from the community is not proof of a feature. We use the official feature and player-count fields to answer the current question and do not infer online co-op, local co-op, cross-play, or future plans from silence.'] },
      { heading: 'How this answer changes', paragraphs: ['Any official feature-field change triggers a full recheck across storefronts. On release day, the released build and all player-count fields will be checked again before this page is updated.'] },
    ],
    faqs: [
      { question: 'Does Graveyard Keeper 2 have co-op?', answer: 'No verified co-op mode is listed in the official sources checked for this page.' },
      { question: 'Can I play with a friend?', answer: 'Current official storefronts describe a single-player or one-player game, so this guide does not claim friend play.' },
      { question: 'Could multiplayer be added later?', answer: 'Future plans are not confirmed here. The page will change only when official evidence changes.' },
    ],
    sourceIds: ['steam-store', 'playstation-store', 'switch-store', 'switch-2-store', 'xbox-store'],
    related: [{ label: 'See every platform', href: '/platforms/' }, { label: 'Review confirmed gameplay', href: '/gameplay/' }, { label: 'Check release details', href: '/release-date/' }, { label: 'Return to the field guide', href: '/' }],
  },
  gameplay: {
    heading: 'Confirmed Graveyard Keeper 2 Gameplay Features',
    answer: 'Official sources confirm graveyard management, zombie-powered production, Town restoration, and fortifications with undead-army combat.',
    summary: 'The sequel expands the management loop into a 3D presentation. This page stays at the system level because exact recipes, progression routes, quest steps, and optimal strategies require the released build.',
    factIds: ['fact:graveyard-management', 'fact:zombie-automation', 'fact:town-restoration', 'fact:combat-fortifications', 'fact:three-d', 'fact:player-mode'],
    mediaIds: ['media:automation'],
    table: {
      caption: 'Confirmed systems and present evidence boundaries',
      headers: ['System', 'Officially confirmed', 'Still unverified'],
      rows: [
        { cells: ['Graveyard management', 'Yes', 'Exact progression and optimization'], sourceIds: ['developer-page', 'steam-store'] },
        { cells: ['Zombie production and automation', 'Yes', 'Exact worker rules, recipes, and layouts'], sourceIds: ['developer-page', 'steam-store', 'steam-news'] },
        { cells: ['Town restoration', 'Yes', 'Full restoration order and rewards'], sourceIds: ['developer-page', 'steam-store', 'steam-news'] },
        { cells: ['Fortifications and undead-army combat', 'Yes, at a high level', 'Exact combat systems and best strategies'], sourceIds: ['developer-page', 'steam-store'] },
        { cells: ['3D presentation', 'Yes', 'Released-build performance comparison'], sourceIds: ['steam-news', 'official-trailer'] },
      ],
    },
    sections: [
      { heading: 'Management and automation', paragraphs: ['Graveyard work remains a central system, while zombie workers support production and automation. Official descriptions establish those pillars but do not yet support a complete worker-placement or production-chain guide.'] },
      { heading: 'The Town and its defenses', paragraphs: ['Official material describes restoring the Town, building fortifications, and using an undead army in combat. We keep those as confirmed high-level systems until the released build makes the rules reproducible.'] },
      { heading: 'Why deep guides wait', paragraphs: ['A long page is not a complete guide if the underlying version, inputs, outputs, and failure cases cannot be checked. Recipes, quest walkthroughs, maps, NPC schedules, and best-build claims stay in research until release evidence passes.'] },
    ],
    faqs: [
      { question: 'Does Graveyard Keeper 2 have zombie workers?', answer: 'Yes. Official sources describe zombie-powered production and automation.' },
      { question: 'Is the sequel 3D?', answer: 'Official news and trailer material confirm a 3D presentation.' },
      { question: 'Are complete recipes and walkthroughs available here?', answer: 'Not yet. They require versioned, reproducible evidence from the released build.' },
    ],
    sourceIds: ['official-media-kit', 'developer-page', 'steam-store', 'steam-news', 'official-trailer'],
    related: [{ label: 'Read the multiplayer answer', href: '/multiplayer/' }, { label: 'See confirmed platforms', href: '/platforms/' }, { label: 'Check release details', href: '/release-date/' }],
  },
};
