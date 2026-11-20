# GHL Bangladesh — preview copy

Ridoy's working copy of the GHL Bangladesh community website (ghlbangladesh.com).

- **Standard codebase:** [mehedi-sharif/ghlbangladesh](https://github.com/mehedi-sharif/ghlbangladesh). This repository contains its full history; every change made here is also offered there as a pull request.
- **Preview:** https://ridoy-rock.github.io/ghl-bangladesh-redesign/ (GitHub Pages, built by `.github/workflows/deploy.yml` on every push to `main`; in Settings → Pages the source must be **GitHub Actions**).

## Run it

Node.js 22.12 or newer.

```bash
npm ci
npm run dev      # http://localhost:4321
npm run check
npm run build    # output in dist/
```

Where things live and why they look the way they do: [`docs/redesign.md`](docs/redesign.md).

## Only in this repository (not part of the pull requests)

| Path | Purpose |
|---|---|
| `.github/workflows/deploy.yml`, `.github/scripts/pages-base-path.mjs` | GitHub Pages preview; the script adds the `/ghl-bangladesh-redesign` folder to the site's root links after the build |
| `public/v2/index.html` | Earlier "Home v2" design, kept for reference at `/v2/` |
| `public/v1/index.html` | Old preview address `/v1/`, forwards to the homepage |
| `.claude/skills/ghl-bangladesh/` | Working notes for Claude Code on this project |
| `README.md` | This file |
