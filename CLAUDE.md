# TAITCO Glass Site — Working Memory

Read this first, every session. Dive into `docs/` only when you need the full detail.

## What This Is
Marketing/lead-gen site for TAITCO Auto Glass (Temecula, CA). Static HTML/CSS/JS, no framework. Live at **taitcoglass.com**, hosted on Netlify, deployed from `github.com/taitco/Taitco-glass-site` (branch `main`, auto-deploy on push).

## Me
Billy Tait, owner/operator. Direct, no-nonsense. Wants honest pushback, not just execution. Big-picture thinker who stays hands-on. Also runs a dealer glass program alongside retail mobile chip repair — the site has to speak to both.

## Brand (locked — don't reinterpret)
- **Colors:** ink `#141210`, cream `#F6F2E8`, gray `#8C8A85`, orange `#E15B22`, gold `#B8912F`
- **Fonts:** Archivo Black (headers/buttons), Oswald (body), Yellowtail + Caveat Brush (logo/hero script only — never body text)
- **Tone:** 1960s hot-rod / kustom kulture sign-painter aesthetic. Confident, plainspoken, not salesy.
- **Logo:** `images/taitco-logo.png` — locked, used in header/footer/favicon. Don't regenerate or reinterpret it.
- Full brand brief: `docs/PROJECT_CONTEXT.md`

## Site Structure
| File | Status |
|---|---|
| `index.html` | Homepage — live, complete |
| `dealer.html` | Dealer page — live, complete (login section is placeholder) |
| `services/*.html` | **Not built yet** — homepage links to these, currently dead |
| `css/style.css` | All styling, brand tokens |
| `js/main.js` | Form handlers |

## Active Blockers
1. **Omega EDI integration** — quote form is a placeholder waiting on their Web Quoter embed. Blocked on Monday onboarding meeting (see `docs/PROJECT_CONTEXT.md` for full question list).
2. **Dealer login** — placeholder only. Waiting to learn if Omega has its own dealer portal to redirect to, or if we build custom auth (Netlify Identity).
3. **Service detail pages** — not started.

## Infra Quick Reference
- Domain/DNS: GoDaddy → Netlify (A + CNAME records set)
- Email: Google Workspace on taitcoglass.com — `quotes@taitcoglass.com` is the lead-routing address
- Full DNS records, email accounts, deployment details: `docs/PROJECT_CONTEXT.md`

## Deep Reference
- `docs/PROJECT_CONTEXT.md` — full technical spec, DNS records, page-by-page breakdown, brand brief
- `CHANGELOG.md` — session-by-session log of what changed and why
- `omega_onboarding_questions.pdf` (in outputs, not repo) — question list + tech spec to bring Monday

## Working Preferences
- Pragmatic workarounds over extended debugging
- One question at a time when clarifying
- Direct, concrete answers, no hedging
