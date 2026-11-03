# Sky Bridge Consultancy – Website

Official website of **Sky Bridge Consultancy**, Lahore — study abroad, tourist visa and air ticketing.
Live domain: https://skybridgeconsultancy.network

## Tech
- Next.js 15 (static export) + TypeScript + Tailwind CSS 4
- No database, no server: every page is pre-built HTML, so hosting is simple and fast.

## Run on your computer
```bash
npm install
npm run dev      # open http://localhost:3000
npm run build    # creates the static site in the "out" folder
```

## Where to change things
| What | File |
|---|---|
| Phone, WhatsApp, email, address, timings, Facebook, stats (6+, 300+) | `src/data/site.ts` |
| Team members | `src/data/site.ts` → `team` |
| Study country pages (Germany, Italy …) | `src/data/study.ts` |
| Visit visa pages (USA, UAE …) | `src/data/visa.ts` |
| Home page sections | `src/app/page.tsx` |
| FAQ page | `src/app/faq/page.tsx` |
| Terms / Privacy | `src/app/terms-and-conditions/page.tsx`, `src/app/privacy-policy/page.tsx` |
| Logo files | `public/images/` |
| CEO photo | `public/images/ceo-ibrar-ahmad.webp` |

### Add a team photo
1. Save a square photo as `public/images/team-<name>.webp` (e.g. 400×400).
2. In `src/data/site.ts`, add `photo: "/images/team-<name>.webp"` to that person.

### Exact Google Maps pin
In `src/data/site.ts`, change `mapQuery` to the exact place name or coordinates (e.g. `"31.4800,74.3200"`).

## Deploy on Vercel
1. Push this folder to a GitHub repository.
2. On vercel.com → **Add New → Project** → import the repository. Framework: **Next.js** (auto-detected). Click **Deploy**.
3. **Settings → Domains** → add `skybridgeconsultancy.network` and `www.skybridgeconsultancy.network`, then add the DNS records Vercel shows at your domain provider.
4. Every new push to GitHub updates the live site automatically.

Note: Vercel's free Hobby plan is for non-commercial use under Vercel's terms; a business site is expected to use the Pro plan.
