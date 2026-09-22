// @ts-check
import { defineConfig } from 'astro/config';

// Fully static: the GitHub API pull runs client-side against public repos,
// unauthenticated, no server needed (see CLAUDE.md's "Secrets and hosting").
export default defineConfig({
	output: 'static',
	trailingSlash: 'always',
	site: 'https://tavor29.github.io/citizen-development-governance',
	base: '/citizen-development-governance/',
	devToolbar: {
		enabled: false,
	},
});
