---
name: ghl-bangladesh
description: Working on the GHL Bangladesh community website (ghlbangladesh.com), Titas vai's (Mehedi Sharif's) project. Use for any change to this site or whenever the user says the work is for Titas vai. Covers which repository is the standard, the code structure to follow, the rules for content, how to verify, and where every update must go (push to ridoy-rock/ghl-bangladesh-redesign main + pull request to mehedi-sharif/ghlbangladesh).
---

# GHL Bangladesh — Titas vai's project

The user (Ridoy, GitHub `ridoy-rock`) works on this site for Titas vai (Mehedi Sharif, chapter leader of HighLevel Bangladesh, GitHub `mehedi-sharif`).

## Repositories

| Repository | Role |
|---|---|
| `mehedi-sharif/ghlbangladesh` | **Standard codebase.** Source of ghlbangladesh.com (Cloudflare Pages builds its `main`). Its structure is the rule. |
| `ridoy-rock/ghl-bangladesh-redesign` | The user's copy. Its `main` = the standard codebase (full history merged in) + the user's changes + preview-only extras. Deploys a preview to GitHub Pages: https://ridoy-rock.github.io/ghl-bangladesh-redesign/ |
| `ridoy-rock/ghlbangladesh` | The user's fork of the standard repository, used as the source branch for pull requests (the session cannot push to `mehedi-sharif/ghlbangladesh`). If it does not exist yet, ask the user to fork `mehedi-sharif/ghlbangladesh` on GitHub. |

## Every update (standing instruction from the user)

1. Start from the latest `mehedi-sharif/ghlbangladesh` `main` (`git fetch upstream main` in the user's repo; remote `upstream` points there).
2. Make the change on a branch based on `upstream/main`, following the structure below exactly.
3. Verify (see below).
4. **Push to `ridoy-rock/ghl-bangladesh-redesign` `main`** (merge the branch into `main`; keep the preview extras).
5. **Open a pull request to `mehedi-sharif/ghlbangladesh`** from the same branch pushed to the fork `ridoy-rock/ghlbangladesh`. The PR must contain only the change — never the preview extras listed below.

## Structure of the standard codebase (follow 100%)

- Astro 6, npm (`npm ci`, `npm run dev`, `npm run check`, `npm run build`), Node 22.12+. `.npmrc` has `legacy-peer-deps=true`.
- Pages: `src/pages/*.astro`, each wrapped in `src/layouts/CommunityLayout.astro` (head/meta, header, mobile menu, footer, shared scripts). Relative imports (`../components/community/...`).
- Sections: `src/components/community/*.astro`, each with its own scoped `<style>` block (plain CSS, no Tailwind classes). Reusable pieces there too: `Photo.astro` (every photo, 640/1200/1800 WebP srcset), `Button.astro`, `Logo.astro`, `Arrow.astro`, `Join.astro`, `Footer.astro`.
- Shared CSS: `src/styles/community.css` (fonts, colour tokens, buttons, header, hero, reveal motion, inner-page styles).
- Shared data: `src/data/community.ts` (group link, album link, resources, gallery photos with alt + caption).
- Images, video and fonts: `public/images/community/` (photos as `name-640/1200/1800.webp`, fonts served locally, no Google Fonts requests at runtime).
- Decisions are documented in `docs/redesign.md` — add a section for every design change.
- The old Astroplate/theme files (`src/layouts/Base.astro`, `partials`, `content/` blog etc.) are leftovers and not published; do not build on them.
- Format changed files with Prettier (`npx prettier -w <files>`), keep `npm run check` at 0 errors.

## Content rules

- Never delete any text or image from the site unless the user explicitly asks. Text may be restyled, never dropped.
- Do not invent facts (dates, venues, numbers, testimonials, credentials). The user's rule: "Nicht lügen oder irgendwas erfinden" — if unsure, ask or research.
- Keep Titas vai's deliberate choices from the repo (e.g. story photo crop positions, link targets, wording) unless the user asks to change them.

## Verification before pushing

- `npm run build` and `npm run check` pass.
- Content check: every text, alt text, aria-label, caption, link and image/video reference of each page in the current `upstream/main` build is still present after the change.
- Visual check with Playwright (Chromium is pre-installed) at phone, tablet and desktop widths, light and dark: no horizontal scroll, no script errors, no failed requests; mobile menu covers the screen; photo viewer works.
- Preview build in a sub-folder: `node .github/scripts/pages-base-path.mjs /ghl-bangladesh-redesign` after `npm run build`, then serve and click through.

## Preview-only extras in `ridoy-rock/ghl-bangladesh-redesign` (never in the PR)

- `.github/workflows/deploy.yml` and `.github/scripts/pages-base-path.mjs` (GitHub Pages; Pages source must be "GitHub Actions").
- `public/v2/index.html` (an earlier rejected design the user asked to keep) and `public/v1/index.html` (redirect from the old preview address).
- `README.md` and this skill (`.claude/skills/ghl-bangladesh/`).

## Commits

Author `ridoy-rock <ridoy-rock@users.noreply.github.com>`. End messages with the attribution lines the session asks for.

## Current design (Home v1, proposed in 2026)

Plus Jakarta Sans; navy `#061d30` panels; logo arrow colours yellow `#F8D325`, blue `#20A9ED`, green `#0BCE55`; paper `#f5f6f1`; round Bangladesh flag; one button style (label + round arrow chip, sizes 44/52/60px); homepage follows the device light/dark setting, inner pages stay light. The user dislikes generic, "AI-generated" looks, too many cards, and gradient blobs; prefers crafted details.
