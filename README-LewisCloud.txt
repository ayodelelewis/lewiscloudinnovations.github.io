# LewisCloud Static Website (GitHub Pages)

This is the starter static site for **LewisCloud Innovations**.  
It includes everything needed to launch quickly on GitHub Pages with a professional, blue-themed design.

---

## 📂 Files Included

- **index.html** — main homepage (blue design, services, newsletter, contact forms)
- **LewisCloud-logo.svg** — scalable company logo (used in header/footer)
- **LewisCloud-favicon.png** — favicon (browser tab icon)
- **LewisCloud-og.png** — Open Graph image for social sharing (Twitter, LinkedIn, etc.)
- **LewisCloud-privacy.html** — privacy policy page
- **LewisCloud-terms.html** — terms of service page
- **README-LewisCloud.txt** — this file (instructions)

---

## 🚀 How to Publish on GitHub Pages

1. Go to your repository: **lewiscloudinnovations.github.io**
2. Upload all files from this package directly into the **root** of the repo (not inside a folder).
3. Add an empty file called **.nojekyll** (this prevents GitHub from processing Jekyll builds).
   - On GitHub → *Add file → Create new file* → name it `.nojekyll` → Commit.
4. Commit your changes.
5. Visit: **https://lewiscloudinnovations.github.io** (or your custom domain).

---

## 🔧 Forms

All forms (newsletter + contact) are configured to send to:

```
hello@lewiscloudinnovations.com
```

To change this, open **index.html** and replace that email with your own.

---

## 🌍 Custom Domain

If you want to use **lewiscloudinnovations.com**:

1. Add a file in the repo root named **CNAME** containing just:

```
lewiscloudinnovations.com
```

2. Update your DNS records:
   - `A` records → 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153
   - `CNAME` for `www` → lewiscloudinnovations.github.io
3. In repo → Settings → Pages → set custom domain = `lewiscloudinnovations.com` and enforce HTTPS.

---

## 🛡️ Notes

- **TailwindCSS** is loaded via CDN (no build step required).
- Fully responsive, mobile-friendly design.
- Newsletter & contact forms are powered by **FormSubmit** (no backend required).
- You can replace `LewisCloud-og.png` with a custom social preview image.

---

© 2025 LewisCloud Innovations Limited. All rights reserved.
