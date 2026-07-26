# Accredian Enterprise — Partial Clone

A partial recreation of [enterprise.accredian.com](https://enterprise.accredian.com/), built with Next.js (App Router) and Tailwind CSS, for the Full Stack Developer Intern assignment.

**Live demo:** https://accredian-enterprise-ten-pi.vercel.app
**Repo:** https://github.com/MeenakshiMeti/accredian-enterprise

## Setup instructions

```bash
git clone <your-repo-url>
cd accredian-enterprise
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

To build for production:

```bash
npm run build
npm start
```

## Approach

- Used the **App Router** (`app/`) with functional components and hooks throughout (no class components).
- Broke the page into small, reusable, single-purpose components under `components/` — `Navbar`, `Hero`, `TrustedBy`, `Programs`, `WhyUs`, `Testimonials`, `LeadForm`, `Footer` — instead of one long page file, so each section can be edited or reordered independently.
- Styled with **Tailwind CSS**, using a custom token set (navy/gold palette, `Space Grotesk` + `Inter` fonts) defined in `tailwind.config.js` rather than default Tailwind colors, to move away from a generic templated look.
- Built the **lead capture form** as a client component (`LeadForm.jsx`) that POSTs to a Next.js API route (`app/api/lead/route.js`), which validates the payload and stores it (in-memory for this demo — see Improvements below for a production data store).
- Prioritized responsiveness (mobile nav with a toggle menu, fluid grid layouts) and accessibility basics (visible focus states, `prefers-reduced-motion` support) over pixel-matching the reference site, per the assignment notes.

## AI usage explanation

I used Claude (Anthropic) during this assignment for:
- Scaffolding the overall Next.js project structure (folders, config files, component boundaries).
- Generating first-pass JSX/Tailwind for each section based on a design direction I specified (navy/gold enterprise palette, distinct from generic AI-tool defaults).
- Drafting the API route logic for the lead form.

What I modified/reviewed manually:
- Rewrote and trimmed copy across sections to match Accredian's actual tone after reviewing the live reference site.
- Adjusted spacing, breakpoints, and section ordering after testing on mobile viewport sizes.
- Verified the API route's validation logic and error handling made sense for this use case.
- - Fixed hero section padding/spacing after testing on different viewport sizes, since the CTAs were getting clipped on shorter screens.
- Added a "Refer & Share" section (native share API + copy-link fallback) after reviewing that the reference site has a referral feature — this wasn't in Claude's first draft and was added based on comparing against the live reference site.
- Tested the lead capture form end-to-end locally and verified the API route logs submissions correctly before deploying.
- Reviewed and confirmed component structure made sense for reusability rather than accepting it as-is.

## Improvements with more time

- Replace the in-memory lead store with a real database (e.g. Postgres via Prisma, or a Google Sheets/Airtable webhook) so submissions persist.
- Add a FAQ accordion section and a dedicated case-studies page.
- Add scroll-triggered reveal animations for section entrances (kept minimal for now to avoid feeling AI-generated/templated).
- Write component-level tests (React Testing Library) for the lead form's validation states.
- Add real client logos and testimonial photos once available, with proper `next/image` optimization.
- Run a Lighthouse pass and address any performance/accessibility flags.
