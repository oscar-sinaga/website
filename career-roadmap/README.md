# Career Decision Lab — Data & AI Roadmap

A self-contained, offline-capable, interactive GitHub Pages app for planning a one-year career transition across Data Science, Data Engineering, ML Engineering, Analytics, and AI/Agent Engineering.

## Website
- Pages path: `/website/career-roadmap/`
- Source: `career-roadmap/index.html`
- Project listing: root `website/index.html`
- Research snapshot: **2026-11-01**. This is NOT a live job board.

## Features

- Six role profiles: Hybrid Data + Agentic AI, AI / Agent Engineer, Applied / Decision Data Scientist, Data / Analytics Engineer, ML / MLOps Engineer, Product Data Analyst.
- Target-country preference: Singapore, Australia, Germany, Netherlands, United States, Canada, Indonesia.
- 55 specific subskills across 11 categories, each self-assessed D0–D4.
- Recommended priority score (editorial heuristic) factoring role-target depth, self-assessed gap, public 2026 market evidence, durability, transferability, and keywords in **user-curated** JDs.
- 12 learning phases / 52 weekly modules; specific weekly study, exercise, deliverable, stretch objective, and reference.
- Role-dependent phase ordering, mastery-based fast-track that compresses the timeline, week checklists, notes, and progress.
- Weekly time and English practice settings.
- Local job-description analyzer, including link to original job posts and skill-keyword mentions.
- Progress backup through JSON export/import; all data stored in `localStorage`.

## Privacy and safety

**GitHub repository and Pages content are public.** The repository contains templates, research references, and learning material only. Individual skill ratings, job descriptions, and progress remain in the visitor's browser. They are **not** synced to GitHub, a database, or a server. Users should export backups. Do not paste internal company secrets or personal customer data.

The app is intentionally static HTML/CSS/JavaScript without CDN or API-key dependencies. AI-job market scores are *not* forecasts of salary, unemployment, visa eligibility, or protection against AI automation.

## Methodology

The initial research baseline uses:
- LinkedIn Labor Market Report 2026 and AI jobs announcement (Oct 27, 2026).
- World Economic Forum Future of Jobs Report 2025.
- Indonesian Komdigi skill/vacancy review (published 2026; vacancy sample Mar–Jul 2025).
- Public illustrative role descriptions: Shopee Singapore agent evaluation, Tech Aalto Sydney data engineering, Jobstreet Indonesia AI Agent Developer, BLEN AI Engineer.
- Anthropic Economic Index and Labor Market Impacts research; METR Frontier Risk Report.
- Technical education sources linked within the app: ISLP, Causal Inference Mixtape, OpenAI Agents SDK, pytest, PostgreSQL, dbt, Airflow, OpenLineage, Google MLOps and AWS.

**Limitations:** Search rankings, advertised counts, and the public sample of role descriptions are not a representative census. Ads may close. Region/country choices order search links but do not apply unsourced country-specific demand multipliers. Text-mention counts in user-added JD are not labour-market frequencies and do not distinguish required from preferred skills.

## Updating market evidence

The user's weekly ChatGPT automation checks relevant markets and AI developments. It sends a periodic research summary; it does **not automatically overwrite this website**. If priorities change materially, update the cited sources, skill weights, phase content, and `asof` date through a reviewed GitHub commit. Public sites often limit automated scraping, so use official public sources, approved APIs, and original job postings where possible.

## Verification checklist

1. Open the site, switch role profiles; confirm learning phase order changes.
2. Assess specific subskills and check that ranking changes.
3. Enable fast-track after marking all tagged subskills as mastered; confirm eligible modules disappear and dates compress.
4. Add a public job description; confirm keyword signals and priority update.
5. Mark a weekly deliverable, add a note, reload; confirm browser persistence.
6. Export JSON; reset app; import JSON; confirm progress recovery.
7. Test mobile viewport and keyboard navigation.

## Maintenance

Version: `2026.11.01-v2`. Document any job-market research update with date, source URL, region, role and a note on evidence type. Preserve user-facing caveats about sampling and uncertainty.
