// Videos are served from Cloudflare R2 rather than Vercel, which throttles
// large static transfers hard on North African connections (measured 18-56 KB/s
// from Vercel vs ~2.7 MB/s from R2 for the same file).
const MEDIA_BASE_URL =
  process.env.NEXT_PUBLIC_MEDIA_BASE_URL ??
  'https://pub-8577ad2f2da04c6a8cfb54d1351bb3fd.r2.dev/media';

export function videoUrl(filename: string): string {
  return `${MEDIA_BASE_URL}/${filename}`;
}
