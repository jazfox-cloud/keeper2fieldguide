export function validateRenderedMediaHtml(html, media, source) {
  const errors = [];
  const image = html.match(new RegExp(`<img[^>]+src="${media.assetPath.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"[^>]*>`, 'i'))?.[0] ?? '';
  if (!image) errors.push(`official media is not rendered: ${media.id}`);
  if (image && !image.includes(`width="${media.width}"`)) errors.push(`official media width is missing: ${media.id}`);
  if (image && !image.includes(`height="${media.height}"`)) errors.push(`official media height is missing: ${media.id}`);
  if (image && !image.includes(`alt="${media.alt}"`)) errors.push(`official media alt is missing: ${media.id}`);
  if (!html.includes(media.attribution)) errors.push(`visible media attribution is missing: ${media.id}`);
  if (!html.includes(`href="${source.url}"`)) errors.push(`official fallback link is missing: ${media.id}`);
  if (!/View official source/i.test(html)) errors.push(`official fallback label is missing: ${media.id}`);
  return errors;
}
