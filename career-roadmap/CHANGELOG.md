# Career Decision Lab — Change Log

## 2026-11-01 — User Guide & Onboarding v3.1

- Added detailed Indonesian user manual: `PANDUAN.md`.
- Published `panduan.html` with first-use 8-step checklist, example learning focus selector, glossary, tables, role-specific walkthroughs, FAQ, and privacy explanation.
- Linked help from the main app sidebar, homepage overview and contextual help links for strategy, skill map, roadmap, sprint, job analysis, sources and settings.
- Clarified known limitations: country currently reorders job-search links; hours do not automatically shorten the 52-week syllabus; priority scores are not employment probabilities; the JD parser uses partial keyword matching; sprint uses first incomplete modules.
- Preserved app IDs, main `localStorage` key, source data, 52-week lessons and user progress schema. Guide checklist is separate from the primary app state.
- All guidance uses public/generic examples, not personal assessment data.

## 2026-11-01 — Master Skill Map & Strategic Roadmap v3

- Expanded the competency map from 55 to **260 specific subskills** in 16 knowledge domains (category → cluster → skill).
- Preserved stable skill IDs, 52 weekly lesson IDs, user progress localStorage key, user notes and JD data.
- Added role-aware targets, optional/deferred domain tracks, custom D0–D4 target levels and prioritization filters.
- Added 3–5 year strategic horizons with 20 quarterly milestones, plus impact notes and completion checks.
- Added rolling 8, 10 or 12-week sprint from uncompleted modules, skill-gap overlay, review journal and recalibration history.
- Added dated Market Pulse data file with source links and explicit evidence limitations.
- Existing 12-phase / 52-week operational plan remains intact.

Sources used for initial editorial baseline: [LinkedIn Oct 27 2026](https://news.linkedin.com/2026/linkedin-data-shows-where-opportunity-is-emerging-as-work-changes), [Anthropic labor markets 2026](https://www.anthropic.com/research/labor-market-impacts), [Komdigi talent demand](https://bpsdm.komdigi.go.id/publikasi_2355_3_358), [Anthropic agent evals 2026](https://www.anthropic.com/research/demystifying-evals-for-ai-agents).

### Weekly update protocol

1. Re-read latest published job ads in relevant target markets; distinguish actual ad details from search estimates and stale listings.
2. Compare roles, seniority, sponsorship, technical skills, AI automation evidence and transferability against the last baseline.
3. If there is **no material verified change**, do not make a commit; report no-change.
4. For safe material evidence updates, update `market-updates.json` and add a dated entry here; preserve source links, context and limitations.
5. For skill ranking or roadmap changes, read current file/blob SHA, carefully edit affected parts, validate JavaScript/data integrity and read back the GitHub commit.
6. For risky changes to logic or major content reorganization, create a branch and pull request, and ask for user review before replacing the published version.
7. Do not publish localStorage, private skills self-assessments, user JDs, company data, private progress, tokens or secrets.
8. Never assert a commit/deployment happened unless verified.

This research monitoring automation can report, and can attempt GitHub updates when its connected tools allow. Weekly execution is **not** a guarantee of changes to the published website.
