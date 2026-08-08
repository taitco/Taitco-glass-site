# Changelog

Session-by-session log. Newest first. Add an entry at the end of every session before closing out — this is what future-you (or another Cowork session) reads to know what happened and why.

---

## Session 1 — Site build, DNS, email setup
**What shipped:**
- Built `index.html` — homepage with hero, services grid, dealer/retail split (signature section, no local competitor does this), mobile callout, service-area list, placeholder quote form, reviews, footer
- Built `dealer.html` — public program info + request-info form, honest placeholder for gated dealer login (not faked as functional)
- Applied real locked logo (`images/taitco-logo.png`) to header, footer, and favicon across both pages — replaced earlier text-based placeholder branding
- Set up GitHub repo (`taitco/Taitco-glass-site`), connected to Netlify, confirmed auto-deploy on push works end to end
- Registered/confirmed domain `taitcoglass.com`, configured DNS in GoDaddy (A record → Netlify IP, CNAME www → Netlify subdomain), confirmed SSL auto-provisioned and site live
- Set up Google Workspace on the domain — created `admin@`, `billy@`, `sam@`, `quotes@taitcoglass.com`; configured MX records via GoDaddy's built-in Google Workspace integration
- Generated `omega_onboarding_questions.pdf` — 8-question list + full technical spec, for Monday's Omega EDI onboarding meeting
- Set up this CLAUDE.md / docs / CHANGELOG project structure for Cowork continuity

**Decisions made:**
- Domain: `taitcoglass.com` (not `taitcoautoglass.com`, despite that being in the original written brand brief — brief is now out of date on this point)
- Phone: `951.706.4040` (confirmed current, supersedes an earlier number mentioned before brand brief was finalized)
- Dealer login: NOT building fake/custom auth yet — waiting to ask Omega if they have a dealer portal we should redirect to instead. Decision explicitly deferred, not defaulted.
- Site architecture: static HTML/CSS/JS, no framework — chosen for zero build complexity and clean third-party script embedding (Omega's quoter will need to drop in easily)

**Open items carried to next session:**
- Service detail pages not built (rock chip repair, windshield replacement, ADAS calibration) — homepage links to them but they're dead links
- Quote form is UI-only, not wired to anything
- Omega integration entirely blocked on Monday's meeting outcome
- GitHub PAT used to push this session was scoped to this repo only — should be rotated/regenerated since it was pasted into a chat session
- Billy wants to explore migrating the TAITCO field management app (separate project, hosted on Railway, project `scintillating-courtesy`) to the taitcoglass.com domain — likely as a subdomain (e.g. `app.taitcoglass.com`), needs a new DNS record in GoDaddy pointing at Railway. Planned for a MacBook session, not urgent.

---

<!-- Next session: add a new entry above this line, dated, same format -->
