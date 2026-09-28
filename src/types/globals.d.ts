/**
 * Next.js resolves stylesheets through its bundler, but ships no TypeScript
 * declaration for them. Without this, editors that check side-effect imports
 * (`noUncheckedSideEffectImports`) flag `import './globals.css'` in layout.tsx.
 */
declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}
