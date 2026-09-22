# Citizen Development Governance Model

**Fictional demo, synthetic data.** Built for a fictional company, Meridian Dynamics, never real client data. Part of [Tavor Ben Shahar](https://github.com/tavor29)'s portfolio.

## Problem

Employees increasingly build their own AI tools and automations without engineering support. Most organizations have no answer for who maintains that app once the person who built it moves on or leaves.

## What it does

A documented framework plus a lightweight tracker: a defined path from idea to prototype to MVP to production, with an explicit maintenance owner attached at each stage, and health signals pulled from the actual repository.

## What it demonstrates

This is the less common of the two coded ideas. Almost nobody has thought through this problem carefully, so the idea itself carries most of the weight, the build just needs to be credible.

## Rejected alternative

I considered a model that required engineering sign-off before anyone could build anything internally. I rejected it because that's exactly the kind of bottleneck that pushes people toward unsanctioned tools in the first place, this model assumes citizen building will keep happening and makes it visible and owned instead of trying to stop it.

## Honest limitation

This tracks ownership and maintenance signals, but it doesn't enforce anything. An organization that wanted hard gates (blocking a tool from advancing stages without sign-off) would need to layer that on top.

## Integration map

| System | This demo | In production |
| --- | --- | --- |
| GitHub | Live (real API, real repos) | Same |
| Internal app registry | Simulated | Real CMDB |
| Ownership/HR data (who owns what after a departure) | Documented only, out of scope | Real HRIS integration |

Three of the eighteen seeded tools are mapped to real public GitHub repos so the "is this still maintained" signal is a genuine live API call, not mocked data: `tavor29/ai-intake-governance-agent` (Tavor's own, active today), `github/gitignore` (actively maintained, many contributors), and `octocat/Hello-World` (GitHub's own long-dormant teaching repo, since 2012), a deliberate spread from active to stale.

## Running it locally

```sh
npm install
npm run dev
```

Fully static, no environment variables, no server. The GitHub calls run client-side, unauthenticated, against the public REST API (rate-limited to 60 requests/hour per visitor IP, fine for a demo).

## Non-goals

Actual CI/CD gating and org-wide enforcement are documented as out of scope, not built here.

## Stack

Astro (static output), deployed to GitHub Pages via `.github/workflows/deploy.yml`. No UI framework, the stage board is server-rendered with a small client script for the live GitHub health check. Shares design tokens with the rest of the portfolio (copied, not imported across repos) and the Meridian Dynamics seed data from Project 1/the portfolio site, with an additional `src/data/stage-tracker.ts` overlay specific to this repo (stage + maintainer + optional real-repo mapping per tool).
