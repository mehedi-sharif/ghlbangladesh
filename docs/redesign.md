# GHL Bangladesh redesign

The community website stays in the main Astro repository and deploys through the existing `ghlbangladesh` Cloudflare Pages project. Production domains: https://ghlbangladesh.com and https://www.ghlbangladesh.com. The marketer’s `tffarhad/ghl-bangladesh-website` repository is a content-structure reference, not this source repository.

## Development

Use Node 22.12 or newer. Run `npm ci`, `npm run dev`, `npm run check`, and `npm run build`. The build output is `dist/`. npm is the package manager; `.npmrc` retains compatibility with an unused template integration whose peer range predates Astro 6. The new pages do not use that integration.

## Content

- Shared community links and resource listings: `src/data/community.ts`.
- Shared layout, navigation, and metadata: `src/layouts/CommunityLayout.astro`.
- Social sharing uses `public/images/community/ghl-bangladesh-og.jpg`, a 1200×630 JPEG based on the supplied Bangladesh landmark artwork with “MeetUp 2026” removed. The shared layout declares matching Open Graph and Twitter image metadata.
- Design styles and responsive behavior: `src/styles/community.css` (shared: fonts, colour tokens, buttons, header, hero, scroll reveal). Each homepage section keeps its own styles inside its component.
- Reusable photo, resource, join, logo, and button components: `src/components/community/`.
- The homepage origin story is in `src/components/community/CommunityStory.astro`, placed after the photo gallery and directly before the chapter-leader section. It is told in Mehedi’s first-person voice and credits Shariful Islam as co-organiser, linking to his supplied Facebook profile.
- The story pairs Mehedi’s seated DSC08548.JPG with Shariful’s speaking DSC08543.JPG, matching the two photos supplied by Mehedi. Portrait frames use individual crop positions; the source images remain intact. Names and Shariful’s Facebook link remain below the correct photos.
- The chapter-leader section uses the earlier meetup portrait at Mehedi’s request. The label reads “HighLevel Bangladesh chapter leader.”
- The chapter-leader profile offers Facebook (`https://www.facebook.com/mehedi.sharif.titas`) and website (`https://mehedisharif.com`) links. Shariful’s name below his story photo links to his supplied Facebook profile. The top navigation and footer link to `/volunteers`, which says opportunities will open soon and offers community updates without an application form.
- Mehedi’s supplied story confirms that GHL Bangladesh MeetUp 2026 took place on June 11, 2026, as an unofficial, community-driven meetup co-organised with Shariful Islam. This is the meetup date, not a claimed founding date for the group. Future event dates, venues, registration links, new credentials, or official affiliation still require confirmation.
- The primary join destination is the HighLevel Bangladesh Facebook group.
- Obsolete charity template routes have been removed; former top-level routes redirect to relevant community pages. Unused original theme content/components remain in source but are not published as pages.

## Photography

User-supplied collection: https://www.playbook.com/s/ghlprojects/QpYamYiVaSVjLdKCfJoqWhuU (`GHL Meetup Bangladesh 2026`). Public previews and official Playbook WEBP exports were resized to 640, 1200, and 1800px WebP files. All 15 gallery filenames selected by Mehedi are imported, alongside the five existing photos; his DSC08672.JPG portrait is used separately in the story section. The public website serves local optimized copies, not expiring Playbook URLs or 18–26MB originals.

| Local name | Source filename | Use |
| --- | --- | --- |
| meetup | DSC08684.JPG | Community group photo and hero |
| conversations | DSC08234.JPG | Candid discussion |
| speaker | DSC08669.JPG | Presentation |
| building | DSC08236.JPG | Attendee working on a laptop |
| workshop | DSC08662.JPG | Presentation with projected screen |
| dsc08253 | DSC08253.JPG | Shariful Islam portrait in Our story; identified by Mehedi |
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
| dsc08548 | DSC08548.JPG | Mehedi’s seated story photo, exported from the original 7952×5304 JPEG |
| mehedi-portrait | DSC08672.JPG | Chapter-leader photo, re-exported from the original 7952×5304 JPEG at higher quality |

DSC08667.JPG was excluded because it was identified as reference-only. No upload date was used as an event date. No stock imagery, invented testimonials, or fabricated statistics are used. The Urbanist font is served locally from the prior website asset, removing build-time Google Fonts requests.

## Deployment

The existing Cloudflare Pages Git integration builds `main` using `npm run build` and publishes `dist`. Preview branches are enabled. Preserve existing DNS and domain bindings; the main domain already routes to `ghlbangladesh.pages.dev`. Validate a branch preview, then merge the reviewed release and verify production. Roll back using Cloudflare Pages deployment history if necessary.

## Reference-led revision

The user rejected the initial editorial concept and requested the content and background video from https://ghl-bangladesh-website.pages.dev/, with an improved design. The homepage now contains the background video, introduction, community benefits, event gallery, origin story, chapter-leader profile, and invitation. Mehedi’s story and chapter-leader photos are sourced from original Playbook JPEGs. The reference’s 25.9-second silent H.264 background video is served locally. The user-supplied `ghl-bangladesh-logo-fixed.svg` is used unchanged on dark backgrounds. The join destination remains the verified Facebook community group; the chapter-leader profile offers Facebook and website links.

Typography originally used locally hosted DM Sans from Google Fonts (superseded by Plus Jakarta Sans in the Home v1 redesign below), with upright headings and body copy; italic and serif heading accents have been removed. Small subtitles and labels use natural casing while retaining brand acronyms. All arrow icons in the primary interface are SVGs. Video pauses when the page is hidden and defaults to paused for reduced-motion preferences. Future event dates remain unconfirmed. Production target confirmed by the user: ghlbangladesh.com; no marketer-version restoration is requested.

GitHub write access was denied through both CLI and the connector. Source commits are retained locally. Direct uploads use the existing Cloudflare Pages project and domain bindings, preserving DNS.

## Home v1 redesign

A homepage redesign proposed by Ridoy. All homepage text, photos, captions, links, and the background video are unchanged; only the presentation changes. The section order stays the same: hero, audience strip, community benefits, event gallery, origin story, chapter leader, invitation.

- Typography: Plus Jakarta Sans (Google Fonts, SIL Open Font License), served locally as two variable WOFF2 files in `public/images/community/` (`plus-jakarta-sans-latin.woff2`, `plus-jakarta-sans-latin-ext.woff2`), declared in `community.css`. DM Sans is no longer referenced; its files remain in place.
- Colours: navy hero and gallery panels with the three logo arrow colours (yellow `#F8D325`, blue `#20A9ED`, green `#0BCE55`) as accents and a warm paper background. The homepage follows the visitor's light or dark device setting; inner pages stay light.
- Hero: full-screen background video with a navy veil, round Bangladesh flag label, and a gradient accent on “Together in Bangladesh.” The video is scaled up slightly because its opening seconds have black side bars. Existing video behaviour is kept: muted, paused when the page is hidden, paused for reduced motion.
- Header: centred pill navigation with the green “Join the community” button. On the homepage it floats over the video, turns frosted navy after scrolling, and hides while scrolling down. Inner pages use the same header as a solid navy bar. Below 1001px a full-screen menu replaces the navigation.
- Buttons: one component (`Button.astro`), a label plus a round arrow chip in three sizes, used for the header, hero, chapter-leader links, invitation, and photo viewer.
- Community benefits: learn, connect, grow stand on three rising arrows in the logo colours, which grow in when scrolled into view. Revised at Ridoy’s request: the arrows are about 30% shorter (desktop heights up to 104, 170 and 236px) and the space between the introduction and the benefits is smaller (up to 64px instead of 120px).
- Event gallery: bento grid (two large tiles, six wide tiles) with captions on hover and a full-screen photo viewer with previous, next, keyboard arrows, and a counter.
- Origin story: large quote mark, words light up while scrolling; the existing photos, crop positions, captions, and Shariful Islam’s Facebook link are kept.
- Chapter leader and invitation: card layouts; the invitation shows the three logo arrows rising behind the heading.
- Motion respects reduced-motion preferences; content stays visible when JavaScript is off.

### Home v1 refinements (November 2026)

Requested by Ridoy after the first review:

- Community benefits: arrows about 30% shorter, smaller gap above them (see the bullet above).
- New **Events** section (`EventsOverview.astro`, anchor `#events`) between the benefits and the photo gallery, with two cards: the last event (GHL Meetup Bangladesh 2026) with its group photo, a calendar block for 11 June 2026, the organisers, a link down to the photos and to the gallery page; and the upcoming event as a navy “save the date” ticket (date to be announced, Bangladesh) with a link to the Facebook group for updates. The data lives in `lastEvent` and `nextEvent` in `src/data/community.ts`; update `nextEvent` when the next meetup is confirmed. The photo gallery section's anchor is now `#event-photos`.
- Origin story: shown as a highlighted panel with Mehedi’s name and title under it and a reading-progress bar on its left edge; the text is always fully readable (the earlier dimmed words are gone). The panel takes the wider column; on screens from 1101px the two photos grow so the left column ends level with the panel, and each photo carries a frosted name label with the person’s role (Mehedi Sharif, chapter leader; Shariful Islam, co-organiser). Narrower screens stack heading, photos and story.
- Chapter leader: shorter card, the name on one line, a Facebook button with the official Facebook logo (Simple Icons path, CC0; brand colour #0866FF from Meta’s brand resources) and a Website button with a globe icon. `Button.astro` gained the `facebook` and `globe` icons.
- New **Become a volunteer** section (`VolunteerCall.astro`, anchor `#volunteer`) before the invitation, using the volunteers page wording (opportunities opening soon) with links to the Facebook group and `/volunteers`.
- Invitation (`Join.astro`, shared by several pages): a compact band instead of the tall card with large arrows. A row of faces cropped from the meetup photos ends in an open “You” seat that lights up when the button is hovered.

