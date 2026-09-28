/**
 * Prefixes a public asset path (`/videos/...`, `/images/...`) with the base
 * path the site is served from.
 *
 * Next applies `basePath` only to framework-managed URLs (`next/link`,
 * `next/image`, `/_next/static`); raw media URLs — `<video>`, `<source>`,
 * `poster`, `<img>` — keep the path exactly as written. On GitHub Pages a
 * project site lives under `/<repo>/`, so `/videos/x.mp4` would resolve
 * against the domain root and 404. The Pages workflow passes its base path
 * (`/JoseReactTemplate.Landing`) through `NEXT_PUBLIC_BASE_PATH`; locally the
 * variable is unset and paths pass through untouched.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

export const assetPath = (path: string) => `${basePath}${path}`;
