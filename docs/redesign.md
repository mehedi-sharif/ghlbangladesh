# GHL Bangladesh redesign

The community website stays in the main Astro repository and deploys through the existing `ghlbangladesh` Cloudflare Pages project. Production domains: https://ghlbangladesh.com and https://www.ghlbangladesh.com. The marketer’s `tffarhad/ghl-bangladesh-website` repository is a content-structure reference, not this source repository.

## Development

Use Node 22.12 or newer. Run `npm ci`, `npm run dev`, `npm run check`, and `npm run build`. The build output is `dist/`. npm is the package manager; `.npmrc` retains compatibility with an unused template integration whose peer range predates Astro 6. The new pages do not use that integration.

## Content

- Shared community links and resource listings: `src/data/community.ts`.
- Shared layout, navigation, and metadata: `src/layouts/CommunityLayout.astro`.
- Design styles and responsive behavior: `src/styles/community.css`.
- Reusable photo, resource, join, and logo components: `src/components/community/`.
- Meetup details are intentionally undated beyond the supplied album title. Add dates, venues, registration links, organizer credentials, or official affiliation only after confirmation.
- The primary join destination is the HighLevel Bangladesh Facebook group. The personal profile appears only as a clearly labeled organizer contact.
- Obsolete charity template routes have been removed; former top-level routes redirect to relevant community pages. Unused original theme content/components remain in source but are not published as pages.

## Photography

User-supplied collection: https://www.playbook.com/s/ghlprojects/QpYamYiVaSVjLdKCfJoqWhuU (`GHL Meetup Bangladesh 2026`). Downloaded public preview versions were resized to 640, 1200, and 1800px WebP files. The public website serves local optimized copies, not expiring Playbook URLs or 18–26MB originals.

| Local name | Source filename | Use |
| --- | --- | --- |
| meetup | DSC08684.JPG | Community group photo and hero |
| conversations | DSC08234.JPG | Candid discussion |
| speaker | DSC08669.JPG | Presentation |
| building | DSC08236.JPG | Attendee working on a laptop |
| workshop | DSC08662.JPG | Presentation with projected screen |

DSC08667.JPG was excluded because it was identified as reference-only. No upload date was used as an event date. No stock imagery, invented testimonials, or fabricated statistics are used. The Urbanist font is served locally from the prior website asset, removing build-time Google Fonts requests.

## Deployment

The existing Cloudflare Pages Git integration builds `main` using `npm run build` and publishes `dist`. Preview branches are enabled. Preserve existing DNS and domain bindings; the main domain already routes to `ghlbangladesh.pages.dev`. Validate a branch preview, then merge the reviewed release and verify production. Roll back using Cloudflare Pages deployment history if necessary.
