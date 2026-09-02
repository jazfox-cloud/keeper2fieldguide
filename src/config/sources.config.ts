import type { SourceRecord } from './schema.ts';

export const sources: SourceRecord[] = [
  {
    id: 'official-site',
    label: 'Official Graveyard Keeper 2 site',
    url: 'https://www.graveyardkeeper2.com/',
    evidenceClass: 'OFFICIAL',
    gameVersion: 'Pre-release',
    lastVerified: '2026-09-01',
    publicAllowed: true,
    editorialJudgment: false,
  },
  {
    id: 'official-media-kit',
    label: 'Graveyard Keeper 2 official media kit',
    url: 'https://drive.google.com/drive/folders/1jqDwe4764A2AwmmbedlEyzComZgMsKgL',
    evidenceClass: 'OFFICIAL',
    gameVersion: 'Pre-release promotional assets',
    lastVerified: '2026-09-01',
    publicAllowed: true,
    editorialJudgment: false,
  },
  {
    id: 'developer-page', label: 'Lazy Bear Games — Graveyard Keeper 2', url: 'https://lazybeargames.com/game/graveyard-keeper-2/',
    evidenceClass: 'OFFICIAL', gameVersion: 'Pre-release', lastVerified: '2026-09-01', publicAllowed: true, editorialJudgment: false,
  },
  {
    id: 'steam-store', label: 'Steam — Graveyard Keeper 2', url: 'https://store.steampowered.com/app/4358690/Graveyard_Keeper_2/',
    evidenceClass: 'OFFICIAL', gameVersion: 'Pre-release', lastVerified: '2026-09-01', publicAllowed: true, editorialJudgment: false,
  },
  {
    id: 'steam-news', label: 'Official Steam Community and news', url: 'https://steamcommunity.com/app/4358690',
    evidenceClass: 'OFFICIAL', gameVersion: 'Pre-release', lastVerified: '2026-09-01', publicAllowed: true, editorialJudgment: false,
  },
  {
    id: 'official-trailer', label: 'tinyBuild official trailer on YouTube', url: 'https://www.youtube.com/watch?v=KZ6VRXqGEws',
    evidenceClass: 'OFFICIAL', gameVersion: 'Pre-release trailer', lastVerified: '2026-09-01', publicAllowed: true, editorialJudgment: false,
  },
  {
    id: 'playstation-store', label: 'PlayStation Store concept page', url: 'https://store.playstation.com/concept/10018528',
    evidenceClass: 'OFFICIAL', gameVersion: 'Pre-release store listing', lastVerified: '2026-09-01', publicAllowed: true, editorialJudgment: false,
  },
  {
    id: 'xbox-store', label: 'Xbox — Graveyard Keeper 2', url: 'https://www.xbox.com/games/store/graveyard-keeper-2/9pfzq5gnm8tj',
    evidenceClass: 'OFFICIAL', gameVersion: 'Pre-release store listing', lastVerified: '2026-09-01', publicAllowed: true, editorialJudgment: false,
  },
  {
    id: 'switch-store', label: 'Nintendo Switch — Graveyard Keeper 2', url: 'https://www.nintendo.com/us/store/products/graveyard-keeper-2-switch/',
    evidenceClass: 'OFFICIAL', gameVersion: 'Pre-release store listing', lastVerified: '2026-09-01', publicAllowed: true, editorialJudgment: false,
  },
  {
    id: 'switch-2-store', label: 'Nintendo Switch 2 — Graveyard Keeper 2', url: 'https://www.nintendo.com/us/store/products/graveyard-keeper-2-switch-2/',
    evidenceClass: 'OFFICIAL', gameVersion: 'Pre-release store listing', lastVerified: '2026-09-01', publicAllowed: true, editorialJudgment: false,
  },
];
