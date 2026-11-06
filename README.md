# PUJADO website

Static bilingual French/English website for GitHub Pages.

## Files
- `index.html` — complete responsive website
- `CNAME` — custom domain `pujado.be`

## Publish on GitHub Pages
1. Create a public repository, e.g. `pujado-website`.
2. Upload `index.html`, `CNAME`, and this README to the repository root.
3. In **Settings → Pages**, select **Deploy from a branch**, branch `main`, folder `/ (root)`.
4. In **Settings → Pages → Custom domain**, enter `pujado.be` if GitHub has not detected the CNAME automatically.
5. Wait for the deployment and GitHub's HTTPS certificate provisioning. Enable **Enforce HTTPS** once available.

## Cloudflare DNS
Keep all existing Microsoft 365, mail, DKIM, SPF, DMARC, vCenter and other records unchanged.

For the GitHub Pages apex domain, add these four A records:
- `@` → `185.199.108.153`
- `@` → `185.199.109.153`
- `@` → `185.199.110.153`
- `@` → `185.199.111.153`

Add a CNAME:
- `www` → `spujado.github.io`

Set these website records to **DNS only** initially (grey cloud). Do not change nameservers or existing records. Check whether an existing `www` record exists before adding it.

GitHub Pages will provision HTTPS for the custom domain. Do not change Cloudflare SSL/TLS mode or other certificate settings without checking the existing setup.

## Before public launch
- Confirm that `sebastien@pujado.be` is the preferred public contact address.
- Add the legal company name, registered address and VAT number in a legal notice/privacy page if required for the activity and jurisdiction.
- Review the exact CSP offer and support scope.
- Consider adding a privacy notice and a proper contact form only if a backend or form provider is selected. The current contact CTA uses email.
- Verify the brand/domain trademark position before investing in a final identity.

This first version intentionally contains no fabricated client logos, testimonials, prices, Microsoft partner badges or legal details.
