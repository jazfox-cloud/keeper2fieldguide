import type { RouteConfig } from './schema.ts';

export const routes: RouteConfig[] = [
  {
    id: 'home',
    path: '/',
    title: 'Graveyard Keeper 2 Guide: Release Date, Platforms & Confirmed Features',
    description: 'Verified Graveyard Keeper 2 release date, platforms, multiplayer status, PC requirements, and confirmed gameplay features in one independent guide.',
    published: true,
    sitemap: true,
  },
  {
    id: 'release-date',
    path: '/release-date/',
    title: 'Graveyard Keeper 2 Release Date, Price & Pre-Order Details',
    description: 'Graveyard Keeper 2 launches September 22, 2026. Check the dated Steam US price snapshot, pre-order details, and official store links.',
    published: true,
    sitemap: true,
  },
  {
    id: 'system-requirements',
    path: '/system-requirements/',
    title: 'Graveyard Keeper 2 System Requirements: Minimum & Recommended PC Specs',
    description: 'Compare the official Graveyard Keeper 2 minimum and recommended Windows PC requirements, including RAM, DirectX, and storage.',
    published: true,
    sitemap: true,
  },
  {
    id: 'platforms',
    path: '/platforms/',
    title: 'Graveyard Keeper 2 Platforms: PC, PS5, Xbox, Switch & Switch 2',
    description: 'See every currently confirmed Graveyard Keeper 2 platform and follow official Steam, PlayStation, Xbox, Switch, and Switch 2 store links.',
    published: true,
    sitemap: true,
  },
  {
    id: 'multiplayer',
    path: '/multiplayer/',
    title: 'Is Graveyard Keeper 2 Multiplayer or Co-Op? Current Official Status',
    description: 'Current official storefronts describe Graveyard Keeper 2 as single-player or one-player. Review the official co-op and multiplayer evidence.',
    published: true,
    sitemap: true,
  },
  {
    id: 'gameplay',
    path: '/gameplay/',
    title: 'Graveyard Keeper 2 Gameplay: Confirmed Features, Zombies & Automation',
    description: 'A sourced guide to confirmed Graveyard Keeper 2 gameplay, including graveyard management, zombie automation, Town restoration, and combat.',
    published: true,
    sitemap: true,
  },
];

export function getRoute(id: string) {
  return routes.find((route) => route.id === id);
}
