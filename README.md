# dogeshbhai.com - Domain Sale Landing Page

This project is now ready for Vercel deployment.

## Files
- `index.html`
- `styles.css`
- `script.js`
- `vercel.json` (routing + basic security headers)
- `.vercelignore`

## 1) Form endpoint (already configured)
Your form action is set to:
- `https://formspree.io/f/xeenrrnq`

## 2) Deploy to Vercel
1. Push this folder to a GitHub repository.
2. In Vercel, click **Add New Project** and import that repo.
3. Framework preset: **Other**.
4. Build command: leave empty.
5. Output directory: leave empty (root static files).
6. Click **Deploy**.

## 3) Connect your real domain in Vercel
In Vercel project settings -> Domains, add:
- `dogeshbhai.com`
- `www.dogeshbhai.com`

## 4) Update GoDaddy DNS
Replace old Website Builder target with Vercel records:
- Delete `A` record: `@ -> WebsiteBuilder Site`
- Add `A` record: `@ -> 76.76.21.21`
- Set `CNAME` record: `www -> cname.vercel-dns.com`

Keep TTL as default (for example 1 hour).

## 5) Verify after DNS propagation
1. Open `https://dogeshbhai.com`
2. Submit a test lead with name/email/offer
3. Confirm lead appears in Formspree dashboard

## 6) Optional conversion upgrades
- Add Microsoft Clarity or Plausible analytics
- Add auto-reply in Formspree
- Add minimum-offer qualification text in hero section
