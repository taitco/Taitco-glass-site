# TAITCO Glass Site — Project Context

Last updated: this session (website build, DNS, email setup, Omega prep)
Owner: Billy Tait (TAITCO Auto Glass, Temecula, CA)

---

## Business Context

- TAITCO Auto Glass — dealer-facing glass repair, expanding into retail-facing mobile windshield chip repair
- Service territory: Escondido to Colton, Southern California
- Phone: **951.706.4040**
- Domain: **taitcoglass.com** (live)
- Owner leads volunteer safety team at Crosspoint Church, Temecula (separate project)
- Uses Omega EDI for shop management (quoting, scheduling, invoicing, insurance billing) — onboarding meeting Monday

---

## Repository

- **GitHub:** `github.com/taitco/Taitco-glass-site` (public, branch: `main`)
- **Hosting:** Netlify, connected via GitHub, auto-deploys on push to `main`
- **Netlify project name:** `taitco-glass-site` → temp URL `taitco-glass-site.netlify.app`
- Netlify deploy config lives in `netlify.toml` (publish dir = root, 404 redirect to index.html)
- A fine-grained GitHub PAT (Contents: read/write, scoped to this repo only) was used to push directly from this chat session. **Rotate/regenerate this token if continuing on a new machine** — don't reuse a token that was pasted into a chat.

### File structure
```
taitco-glass-site/
├── index.html          Homepage
├── dealer.html          Dealer program page (public info + login placeholder)
├── netlify.toml         Netlify build/publish config
├── css/
│   └── style.css        All site styling, brand tokens
├── js/
│   └── main.js           Form handlers, footer year
└── images/
    └── taitco-logo.png   Locked brand logo (header, footer, favicon)
```

No framework — plain HTML/CSS/JS static site. Chosen deliberately for zero build-step complexity and easy third-party script embedding (Omega's quoter widget will need to drop in cleanly).

---

## Brand Brief (locked)

**Aesthetic:** 1960s hot-rod / kustom kulture hand-painted sign-maker style — vintage speed-shop and racing-plaque lettering, checkered-flag motifs, bold outlined type with drop shadows.

**Logo:** Arched "TAITCO" bold condensed caps → "Auto" brush script over crossed checkered flags → "GLASS SERVICE" spaced caps → "Temecula, Calif." hand-script line. Cream/white fill, heavy black outline, offset drop shadow, no gradients. Locked logo file is in `images/taitco-logo.png`, used in header, footer, and favicon on all pages.

**Colors:**
| Role | Hex |
|---|---|
| Ink (black/outlines) | `#141210` |
| Cream (primary fill/bg) | `#F6F2E8` |
| Gray (secondary) | `#8C8A85` |
| Orange (accent/CTA) | `#E15B22` |
| Gold (rare accent) | `#B8912F` |

**Fonts:**
- Archivo Black — headers, buttons, condensed caps
- Oswald — body copy
- Yellowtail — brush-script accents (logo/hero only, never body text)
- Caveat Brush — small hand-lettered accents (logo/hero only)
- All loaded via Google Fonts CDN

**Tone:** Direct, no-nonsense, small-shop craftsmanship. Real person/real trucks, not corporate chain. Confident and plainspoken, not salesy.

**Signature design element:** checkered-flag stripe divider (CSS gradient pattern) used sparingly at 2–3 section transitions — echoes the crossed flags in the logo without overusing it.

---

## Site Structure — Page by Page

### `index.html` — Homepage
Built to match/exceed the structure of real local competitors (Safelite, Auto Glass Now, Pass Auto Glass, Redhawk Car Wash & Auto Glass, Enterprise Auto Glass & Tint, Temecula Glass & Tint) — all converge on hero + phone CTA + service grid + mobile callout + insurance mention + service area + reviews. TAITCO's differentiator, which none of them do: **a clean dealer-vs-retail split**, addressed head-on in its own section.

Sections in order:
1. Sticky header — logo, nav, click-to-call phone
2. Hero — headline, 3 core services, quote CTA, service-area line
3. Trust bar — dealer certified / mobile service / insurance assist / lifetime warranty
4. Services grid — Rock Chip Repair / Windshield Replacement / ADAS Calibration (cards link to `services/*.html` — **not yet built**, currently dead links)
5. Dealer/Retail split (signature section) — two panels, distinct messaging and CTAs for dealership lots vs. individual drivers
6. Mobile-service callout band
7. Service-area list — Temecula, Murrieta, Escondido, Menifee, Lake Elsinore, Corona, Riverside, Colton, Wildomar, Winchester, French Valley (local SEO)
8. Quote form — **placeholder**, styled and structured (name, phone, VIN/plate, service dropdown, notes) but not wired to anything live yet. Target embed point for Omega's Web Quoter.
9. Reviews — 3 placeholder cards, need real reviews swapped in
10. Footer — logo, quick links, contact, service area

### `dealer.html` — Dealer Program Page
- **Public section:** program overview (on-lot service, fleet scheduling, direct billing), "Request Dealer Info" form (contact name, phone, dealership name, monthly volume, notes)
- **Gated section (placeholder only):** "Dealer Login" — explicitly NOT faked as functional; shows honest "not yet active, call us" message instead of a fake login box. Real build is blocked on one open question: **does Omega already have a dealer/customer login portal we should redirect to, instead of building custom auth?** If yes → one-line redirect. If no → build with Netlify Identity (free, built-in, no extra service).

---

## Infrastructure Setup (completed this session)

### Domain & DNS (GoDaddy)
| Type | Name | Value | Purpose |
|---|---|---|---|
| A | @ | `75.2.60.5` | Points root domain to Netlify |
| CNAME | www | `taitco-glass-site.netlify.app` | Points www to Netlify site |
| TXT | @ | `google-site-verification=...` | Verifies domain ownership for Google Workspace |
| MX | @ | Google Workspace (auto-configured via GoDaddy's built-in integration) | Routes email to Gmail |

- SSL: auto-provisioned by Netlify (Let's Encrypt) once DNS verified — no manual cert management
- Original A record was pointed at "WebsiteBuilder Site" (GoDaddy's own builder) — had to be edited, not left in place
- `www` CNAME originally pointed at `taitcoglass.com` itself (GoDaddy default) — had to be edited to point at Netlify instead
- Domain verified, SSL provisioning confirmed working — site loads live at `www.taitcoglass.com`

### Email — Google Workspace
Accounts created: `admin@`, `billy@`, `sam@`, `quotes@taitcoglass.com`

**`quotes@taitcoglass.com` is the designated address for lead/quote notification routing** — give this to Omega on Monday so quote notifications go straight there instead of requiring a follow-up config later.

MX setup used GoDaddy's native one-click "Add Google Workspace MX records" integration tool rather than manual entry — it auto-detected and replaced the old default records correctly.

### Deployment
- Netlify project connected to GitHub repo, deploys automatically on every push to `main`
- Confirmed working end-to-end: code push → Netlify build → live at custom domain with SSL

---

## Outstanding / Next Steps

1. **Build service detail pages** — `services/rock-chip-repair.html`, `services/windshield-replacement.html`, `services/adas-calibration.html` — currently linked from homepage service cards but don't exist (dead links)
2. **Omega EDI integration** (blocked on Monday's onboarding meeting):
   - Confirm Web Quoter is included in plan / or add-on cost
   - Confirm embed method (script/iframe vs. custom API calls)
   - Configure Pricing Profile
   - Set up webhook so web quotes land as Omega leads/work orders
   - Confirm quoter handles both repair AND replacement (not just one)
   - Get API key + confirm sandbox/test mode
   - Confirm if quoter is service-area aware or if that logic stays on the site
   - **Ask if Omega has its own dealer portal/login** — determines dealer.html login build path
3. **Dealer login build** — pending the Omega portal answer above; if Omega has none, build with Netlify Identity
4. **Reviews section** — replace 3 placeholder review cards with real customer reviews
5. **Brand consistency check** — earlier brand brief referenced `taitcoautoglass.com`; confirmed resolved to `taitcoglass.com` as the real domain. Make sure truck vinyl, business cards, and Google Business Profile all match this domain and the phone number 951.706.4040 exactly (NAP consistency for local SEO)
6. **Full onboarding question list + technical spec PDF** already generated and delivered this session — bring to Monday's meeting

---

## Reference Documents Generated This Session
- `omega_onboarding_questions.pdf` — question list for Omega EDI onboarding + full technical spec of everything built (architecture, DNS, email, file structure, brand tokens, outstanding items) — meant to be shareable directly with Omega's team

---

## How This Session Worked (for continuity)

Billy directed scope and made every real decision (domain choice, dealer/retail split concept, gated-vs-public dealer content, "use the logo," email addresses to create); Claude wrote all code, built the site structure, walked through DNS/GoDaddy/Netlify/Google Workspace setup screenshot-by-screenshot, and generated the PDF deliverable. Multiple mobile-browser hiccups (Netlify visitor-access red herring, Google Workspace signup hanging in Chrome) were troubleshot live — none were actual site or config problems, just mobile browser flakiness with Google's admin flows in particular.
