import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// GitHub Pages serves a project site from /<repo>/. The Pages workflow passes
// that path in through NEXT_PUBLIC_BASE_PATH and configure-pages injects the
// same value into `basePath`; mirroring it here lets a local build
// (`NEXT_PUBLIC_BASE_PATH=/<repo> next build`) reproduce the deployed URLs.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // The workspace has sibling projects with their own lockfiles; pin the tracing
  // root to this app so Next does not infer the parent folder.
  outputFileTracingRoot: __dirname,
  basePath: basePath || undefined,
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
