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

User-supplied collection: https://www.playbook.com/s/ghlprojects/QpYamYiVaSVjLdKCfJoqWhuU (`GHL Meetup Bangladesh 2026`). Public previews and official Playbook WEBP exports were resized to 640, 1200, and 1800px WebP files. All 15 gallery filenames selected by Mehedi are imported, alongside the five existing photos; his DSC08672.JPG portrait is used separately in the chapter-leader section. The public website serves local optimized copies, not expiring Playbook URLs or 18–26MB originals.

| Local name | Source filename | Use |
| --- | --- | --- |
| meetup | DSC08684.JPG | Community group photo and hero |
| conversations | DSC08234.JPG | Candid discussion |
| speaker | DSC08669.JPG | Presentation |
| building | DSC08236.JPG | Attendee working on a laptop |
| workshop | DSC08662.JPG | Presentation with projected screen |
| dsc08436 | DSC08436.JPG | Parliament view selected by Mehedi |
| dsc08687 | DSC08687.JPG | Additional meetup group portrait selected by Mehedi |
| dsc08636 | DSC08636.JPG | Selected event gallery photo |
| dsc08567 | DSC08567.JPG | Selected event gallery photo |
| dsc08546 | DSC08546.JPG | Selected event gallery photo |
| dsc08543 | DSC08543.JPG | Selected event gallery photo |
| dsc08517 | DSC08517.JPG | Selected event gallery photo |
| dsc08501 | DSC08501.JPG | Selected event gallery photo |
| dsc08489 | DSC08489.JPG | Selected event gallery photo |
| dsc08463 | DSC08463.JPG | Selected event gallery photo |
| dsc08408 | DSC08408.JPG | Selected event gallery photo |
| dsc08339 | DSC08339.JPG | Selected event gallery photo |
| dsc08278 | DSC08278.JPG | Selected event gallery photo |
| dsc08260 | DSC08260.JPG | Selected event gallery photo |
| dsc08237 | DSC08237.JPG | Selected event gallery photo |
| dsc08672 | DSC08672.JPG | Updated chapter-leader portrait selected by Mehedi |

DSC08667.JPG was excluded because it was identified as reference-only. No upload date was used as an event date. No stock imagery, invented testimonials, or fabricated statistics are used. The Urbanist font is served locally from the prior website asset, removing build-time Google Fonts requests.

## Deployment

The existing Cloudflare Pages Git integration builds `main` using `npm run build` and publishes `dist`. Preview branches are enabled. Preserve existing DNS and domain bindings; the main domain already routes to `ghlbangladesh.pages.dev`. Validate a branch preview, then merge the reviewed release and verify production. Roll back using Cloudflare Pages deployment history if necessary.

## Reference-led revision

The user rejected the initial editorial concept and requested the full content and background video from https://ghl-bangladesh-website.pages.dev/, with an improved design. The homepage now preserves that reference’s introduction, learning/community benefits, event placeholder, resource links, chapter-leader introduction/credentials, and invitation. Mehedi’s portrait, community image, and original 25.9-second silent H.264 background video are served locally from the reference. The user-supplied `ghl-bangladesh-logo-fixed.svg` is used unchanged on dark backgrounds. The join destination remains the verified Facebook community group; the organizer’s profile is explicitly labeled as personal contact.

Typography uses locally hosted DM Sans from Google Fonts. All arrow icons in the primary interface are SVGs. Video pauses when the page is hidden and defaults to paused for reduced-motion preferences. Event dates remain unconfirmed. Production target confirmed by the user: ghlbangladesh.com; no marketer-version restoration is requested.

GitHub write access was denied through both CLI and the connector. Source commits are retained locally. Direct uploads use the existing Cloudflare Pages project and domain bindings, preserving DNS.
