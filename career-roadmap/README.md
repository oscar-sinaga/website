# Career Decision Lab — Master Skill Map & Global Data/AI Roadmap

**Last research baseline:** 2026-11-01 (v3). **Website:** https://oscar-sinaga.github.io/website/career-roadmap/

A static interactive roadmap that bridges long-term career decisions and actual weekly execution. Built for someone targeting Data Scientist, Data Engineer, Data Analyst/Analytics Engineer, ML Engineer and AI/Agent Engineer jobs, with an option to focus on business domains such as credit risk.

## Application layers

1. **Master Skill Map** — 260 granular subskills across 16 knowledge groups (group → competency cluster → skill), current level D0–D4, per-skill target override, track/domain dependent depth, priority scoring, top-gap and full-map filters.
2. **3–5 year career strategy** — 5 strategic years and 20 quarterly milestones, selective optional years 4–5, track-specific emphasis, evidence checkboxes and private impact notes.
3. **12-month operational roadmap** — 12 ordered phases/52 weekly modules with explicit learning objectives, practice, deliverables, stretch topics and source links. Changing the primary career cluster changes the sequence.
4. **8–12 week rolling sprint** — 8, 10 or 12 weeks from incomplete modules with focus gap suggestions, checkpoints and recalibration history.
5. **Job-market intelligence** — links to LinkedIn, Jobstreet and SEEK, user-curated JD parser (local browser only), curated research sources and optional dated Market Pulse data feed.

## Priority model limitations

Scores are **heuristic editorial ordering**, not measured probabilities of employment, salary, sponsorship or protection from automation. They combine target depth, self-assessed gaps, broad 2026 job-demand evidence, conceptual longevity, cross-industry transferability and optional keyword mentions in hand-curated job descriptions. Text mentions in JD do not equal a representative market census, and job posts may be stale, ambiguous or private.

Target depth defaults to the selected career cluster, then is adjusted for whether a skill is marked core/adjacent/optional; non-selected business domains default to D0. Users can override any skill's target D0–D4. No one is expected to master all 260 skills. Keep breadth as awareness and train depth only where valuable.

## State and privacy

- The app uses the existing `data-ai-career-lab-2026-v2` localStorage key to preserve historical progress, notes, ratings and curated JDs.
- New states include per-skill target overrides, chosen domain track, strategy horizon (3 or 5 years), quarterly milestone status, sprint duration, reviews and recalibration decisions.
- Progress lives **only in the browser**, not GitHub. Export JSON regularly. JSON import validates key fields and loads old v2 backups.
- Never paste customer data, secret company data, passwords, keys or proprietary documents into the public repository or browser app.
- `market-updates.json` contains only public sources and editorial changes. The app attempts to load it on GitHub Pages with a bundled offline fallback.

## Weekly conditional GitHub update process

A ChatGPT scheduled radar, **Radar Karier & GitHub**, checks credible sources each Monday morning (Asia/Jakarta): public roles in Singapore, Australia, Germany, Netherlands, Canada, USA and Indonesia, and AI capability/labour-market research.

Updates are **conditional**, not an automatic blind reweighting or guaranteed weekly commit:

1. Read original sources and compare with current baseline and sample of relevant roles. Verify dates, seniority and sponsorship, and do not infer population-wide counts from search result numbers.
2. If nothing materially changes priority, do **not** commit. Report unchanged status.
3. If facts or role requirements meaningfully shift, update `market-updates.json` and `CHANGELOG.md` with sources, dates and implications. Only adjust main skill weights or content if evidence strongly supports a revision.
4. Fetch latest SHA and preserve all features, stable IDs, existing progress schema and current files. Validate JSON, JS syntax, skill uniqueness, 52 weekly IDs, and key flows. Read back committed changes.
5. For substantial or risky logic/UI changes, use a branch and PR for user approval; do not overwrite main blindly.
6. If GitHub is inaccessible or actions fail, report the limitation instead of claiming success.

## QA checklist

- 16 skill categories and 260 stable skill IDs; categories/cluster/search and custom targets working.
- Original 52 lesson IDs and legacy `levels/done/notes/jds` restored after reload or v2 JSON import.
- Career cluster changes order; selected business domain changes track target skills.
- Switching strategy horizon displays 3 years/12 checkpoints or 5 years/20 checkpoints.
- Rolling sprint selection displays exactly 8/10/12 pending weeks where available; finishing a week advances backlog.
- Market Pulse shows dated, linked findings when JSON loads; remains usable offline if unavailable.
- User-added JD keyword signals never claimed as complete market statistics.
- Mobile viewport and keyboard focus should remain usable after every major update.

## Public sources

LinkedIn (Oct 27 2026): https://news.linkedin.com/2026/linkedin-data-shows-where-opportunity-is-emerging-as-work-changes

Anthropic labour market research (Mar 2026): https://www.anthropic.com/research/labor-market-impacts

Anthropic AI agent evals (Jan 2026): https://www.anthropic.com/research/demystifying-evals-for-ai-agents

Komdigi public report: https://bpsdm.komdigi.go.id/publikasi_2355_3_358

All other learning sources are linked within the app; see `CHANGELOG.md` for changes.
