/**
 * Root-relative links must go through BASE_URL so they still resolve once the
 * site is deployed under a GitHub Pages project path (see astro.config.mjs's `base`).
 */
export const withBase = (path: string) =>
	`${import.meta.env.BASE_URL}${path}`.replace(/(?<!:)\/{2,}/g, '/');
