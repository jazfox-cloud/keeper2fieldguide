import { readFile, writeFile } from 'node:fs/promises';
import sharp from 'sharp';

const source = await readFile(new URL('../public/brand/favicon.svg', import.meta.url));
const sizes = [16, 32, 48, 192, 512];
const buffers = new Map();

for (const size of sizes) {
  const buffer = await sharp(source).resize(size, size).png().toBuffer();
  buffers.set(size, buffer);
  if (size !== 48) await writeFile(new URL(`../public/brand/favicon-${size}.png`, import.meta.url), buffer);
}

const icoSizes = [16, 32, 48];
const headerSize = 6 + icoSizes.length * 16;
const header = Buffer.alloc(headerSize);
header.writeUInt16LE(0, 0);
header.writeUInt16LE(1, 2);
header.writeUInt16LE(icoSizes.length, 4);
let offset = headerSize;

icoSizes.forEach((size, index) => {
  const buffer = buffers.get(size);
  const entry = 6 + index * 16;
  header.writeUInt8(size, entry);
  header.writeUInt8(size, entry + 1);
  header.writeUInt8(0, entry + 2);
  header.writeUInt8(0, entry + 3);
  header.writeUInt16LE(1, entry + 4);
  header.writeUInt16LE(32, entry + 6);
  header.writeUInt32LE(buffer.length, entry + 8);
  header.writeUInt32LE(offset, entry + 12);
  offset += buffer.length;
});

await writeFile(new URL('../public/favicon.ico', import.meta.url), Buffer.concat([header, ...icoSizes.map((size) => buffers.get(size))]));
console.log('Generated 16/32/48 ICO entries and 16/32/192/512 PNG favicon candidates.');
