import type { MediaRecord } from '../config/schema.ts';

const mediaKitRights = 'Official promotional asset distributed through the media kit linked by the game website. Used editorially with attribution; rights remain with tinyBuild and Lazy Bear Games.';

export const media: MediaRecord[] = [
  {
    id: 'media:key-art',
    assetPath: '/media/gk2-key-art.webp',
    sourceId: 'official-media-kit',
    width: 1600,
    height: 900,
    alt: 'Graveyard Keeper 2 key art with the Keeper, zombies, a donkey, and the game logo before a purple medieval town.',
    placement: '/',
    attribution: 'tinyBuild and Lazy Bear Games — official media kit key art',
    lastVerified: '2026-09-01',
    publicAllowed: true,
    rightsNote: mediaKitRights,
  },
  {
    id: 'media:town-restoration',
    assetPath: '/media/gk2-town-restoration.webp',
    sourceId: 'official-media-kit',
    width: 1280,
    height: 720,
    alt: 'Graveyard Keeper 2 gameplay screenshot showing the Keeper carrying wood through a garden and partially restored medieval town.',
    placement: '/',
    attribution: 'tinyBuild and Lazy Bear Games — official Town restoration screenshot',
    lastVerified: '2026-09-01',
    publicAllowed: true,
    rightsNote: mediaKitRights,
  },
  {
    id: 'media:graveyard',
    assetPath: '/media/gk2-graveyard.webp',
    sourceId: 'official-media-kit',
    width: 1280,
    height: 720,
    alt: 'Graveyard Keeper 2 gameplay screenshot showing the Keeper working among graves outside a ruined stone building.',
    placement: '/',
    attribution: 'tinyBuild and Lazy Bear Games — official graveyard screenshot',
    lastVerified: '2026-09-01',
    publicAllowed: true,
    rightsNote: mediaKitRights,
  },
  {
    id: 'media:automation',
    assetPath: '/media/gk2-automation.webp',
    sourceId: 'official-media-kit',
    width: 1280,
    height: 720,
    alt: 'Graveyard Keeper 2 gameplay screenshot showing a lit Town Workshop with multiple zombie-powered production stations.',
    placement: '/gameplay/',
    attribution: 'tinyBuild and Lazy Bear Games — official automation screenshot',
    lastVerified: '2026-09-01',
    publicAllowed: true,
    rightsNote: mediaKitRights,
  },
  {
    id: 'media:town-combat',
    assetPath: '/media/gk2-town-combat.webp',
    sourceId: 'official-media-kit',
    width: 1280,
    height: 720,
    alt: 'Graveyard Keeper 2 gameplay screenshot showing the Keeper and undead troops defending a medieval town street.',
    placement: '/',
    attribution: 'tinyBuild and Lazy Bear Games — official Town combat screenshot',
    lastVerified: '2026-09-01',
    publicAllowed: true,
    rightsNote: mediaKitRights,
  },
];

export function mediaById(id: MediaRecord['id']) {
  return media.find((item) => item.id === id);
}
