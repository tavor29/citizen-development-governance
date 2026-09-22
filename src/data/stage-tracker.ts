import type { SeededTool } from './meridian-dynamics';

export type Stage = 'idea' | 'prototype' | 'mvp' | 'production';

export const stages: Stage[] = ['idea', 'prototype', 'mvp', 'production'];

export const stageLabels: Record<Stage, string> = {
	idea: 'Idea',
	prototype: 'Prototype',
	mvp: 'MVP',
	production: 'Production',
};

export interface StageAssignment {
	toolId: string;
	stage: Stage;
	/** The team accountable for this tool at its current stage. */
	maintainerTeamId: string;
	/**
	 * A real public GitHub repo standing in for this fictional tool, so the
	 * live "is this still maintained" signal (Tier 1) has something real to
	 * query. Only set for a handful of tools, not invented per-tool, a real
	 * production tracker would have one per tracked tool. Two of Tavor's own
	 * repos plus two well-known, intentionally low-drama public repos
	 * (GitHub's own .gitignore templates repo, and its "Hello-World" teaching
	 * repo, dormant since 2012) so the demo shows a real spread: active,
	 * recently active, and stale.
	 */
	repo?: { owner: string; name: string };
}

/**
 * Overlay data specific to Project 2, layered on top of the shared
 * meridian-dynamics.ts catalog by tool id rather than modifying that file
 * (see CLAUDE.md: the shared module is copied verbatim into both project
 * repos and must stay identical across them).
 */
export const stageAssignments: StageAssignment[] = [
	{ toolId: 'standupbot', stage: 'idea', maintainerTeamId: 'rd-qa-tooling' },
	{ toolId: 'facilityfix', stage: 'idea', maintainerTeamId: 'ops-facilities' },
	{ toolId: 'learnloop', stage: 'idea', maintainerTeamId: 'hr-ld' },
	{ toolId: 'alertrelay', stage: 'idea', maintainerTeamId: 'eng-infra-cloud' },

	{ toolId: 'onboardflow', stage: 'prototype', maintainerTeamId: 'hr-people-ops' },
	{ toolId: 'vendorping', stage: 'prototype', maintainerTeamId: 'fin-procurement' },
	{ toolId: 'recruitradar', stage: 'prototype', maintainerTeamId: 'hr-talent-acquisition' },
	{ toolId: 'codedigest', stage: 'prototype', maintainerTeamId: 'rd-applied-ai' },

	{ toolId: 'spendsnap', stage: 'mvp', maintainerTeamId: 'fin-fpa' },
	{ toolId: 'datastitch', stage: 'mvp', maintainerTeamId: 'rd-platform' },
	{ toolId: 'shiftboard', stage: 'mvp', maintainerTeamId: 'ops-supply-chain' },
	{ toolId: 'expenseecho', stage: 'mvp', maintainerTeamId: 'fin-accounting-ops' },
	{ toolId: 'capacitycast', stage: 'mvp', maintainerTeamId: 'eng-platform' },

	{ toolId: 'pulseboard', stage: 'production', maintainerTeamId: 'ops-global-ops' },
	{
		toolId: 'ticketrelay',
		stage: 'production',
		maintainerTeamId: 'eng-service-desk',
		repo: { owner: 'tavor29', name: 'ai-intake-governance-agent' },
	},
	{
		toolId: 'modelwatch',
		stage: 'production',
		maintainerTeamId: 'rd-applied-ai',
		repo: { owner: 'github', name: 'gitignore' },
	},
	{
		toolId: 'accessaudit',
		stage: 'production',
		maintainerTeamId: 'eng-infra-cloud',
		repo: { owner: 'octocat', name: 'Hello-World' },
	},
	{ toolId: 'invoiceindex', stage: 'production', maintainerTeamId: 'fin-procurement' },
];

export interface TrackedTool extends StageAssignment {
	tool: SeededTool;
}
