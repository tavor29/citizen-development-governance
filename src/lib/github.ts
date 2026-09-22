export interface RepoHealth {
	lastCommitDate: string | null;
	contributorCount: number | null;
	error: string | null;
}

/**
 * Live (Tier 1): unauthenticated GitHub REST calls against public repos,
 * run client-side, no server or credentials needed (rate-limited to 60
 * requests/hour per visitor IP, fine for a demo, see the README).
 * Contributor count is capped at the first 100 (one page), a real
 * production version would paginate fully.
 */
export async function fetchRepoHealth(owner: string, name: string): Promise<RepoHealth> {
	try {
		const [commitsRes, contributorsRes] = await Promise.all([
			fetch(`https://api.github.com/repos/${owner}/${name}/commits?per_page=1`),
			fetch(`https://api.github.com/repos/${owner}/${name}/contributors?per_page=100&anon=false`),
		]);

		if (!commitsRes.ok || !contributorsRes.ok) {
			return { lastCommitDate: null, contributorCount: null, error: 'GitHub API request failed' };
		}

		const commits = (await commitsRes.json()) as Array<{ commit: { author: { date: string } } }>;
		const contributors = (await contributorsRes.json()) as unknown[];

		return {
			lastCommitDate: commits[0]?.commit?.author?.date ?? null,
			contributorCount: Array.isArray(contributors) ? contributors.length : null,
			error: null,
		};
	} catch {
		return { lastCommitDate: null, contributorCount: null, error: 'Network error reaching GitHub' };
	}
}
