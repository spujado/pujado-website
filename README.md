# APS Consult — site vitrine (pujado.be)

Site statique bilingue (FR / EN) pour GitHub Pages. Aucune dépendance, aucun build, aucun cookie, aucune ressource externe (polices Inter hébergées dans le dépôt).

## Structure
```
/index.html                 Accueil (FR)
/en/index.html              Accueil (EN)
/mentions-legales.html      Mentions légales et confidentialité (FR)
/en/legal-notice.html       Legal notice and privacy (EN)
/404.html                   Page d'erreur bilingue
/assets/style.css           Styles
/assets/main.js             Menu mobile et bouton « copier l'adresse » (le site fonctionne sans JS)
/assets/fonts/              Inter (licence SIL OFL), sous-ensemble latin en woff2
/assets/favicon.svg, apple-touch-icon.png, og-image.png
/favicon.ico, robots.txt, sitemap.xml
/CNAME                      pujado.be
```

## Publier sur GitHub Pages
1. Dans le dépôt, supprimer l'ancien `index.html` si besoin, puis envoyer **tout le contenu du dossier** en conservant l'arborescence (Add file → Upload files, ou `git add . && git commit && git push`).
2. **Settings → Pages** : *Deploy from a branch*, branche `main`, dossier `/ (root)`.
3. Custom domain : `pujado.be`, puis activer **Enforce HTTPS** quand le certificat est prêt.

## DNS Cloudflare
Conserver tous les enregistrements existants (Microsoft 365, mail, DKIM, SPF, DMARC, vCenter…).

Enregistrements A pour le domaine racine (`@`) :
- `185.199.108.153`
- `185.199.109.153`
- `185.199.110.153`
- `185.199.111.153`

Optionnel (IPv6), enregistrements AAAA pour `@` :
- `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153`

CNAME : `www` → `spujado.github.io`

Laisser ces enregistrements en **DNS only** (nuage gris) au départ, le temps que GitHub émette le certificat HTTPS. Ne pas modifier le mode SSL/TLS de Cloudflare sans vérifier l'existant.

## Avant la mise en ligne publique
- [x] Mentions légales complétées (APS Consult SRL, adresse, BCE, TVA). Relire une dernière fois les deux pages avant publication.
- [ ] Confirmer que `contact@pujado.be` est bien l'adresse publique souhaitée.
- [ ] Faire relire les mentions légales (pas de conseil juridique ici).
- [ ] Après déploiement : tester le partage sur LinkedIn (Post Inspector) et soumettre `https://pujado.be/sitemap.xml` à Google Search Console.

Ce site ne contient volontairement ni faux logos clients, ni témoignages, ni prix, ni badges partenaire Microsoft.
