# FIRST-PROTFOLIO

Personal portfolio website for **Pawani Sharma** — built with the same design system as [tajmirul.site](https://www.tajmirul.site/).

## Custom Domain: pawan-i.tech

### 1. Deploy on Vercel
1. Go to [vercel.com](https://vercel.com) → **Add New Project**
2. Import **`pawani-2502/FIRST-PROTFOLIO`**
3. Deploy (Next.js is auto-detected)

### 2. Add domain in Vercel
1. Open your project → **Settings** → **Domains**
2. Add **`pawan-i.tech`**
3. Add **`www.pawan-i.tech`** (optional — redirects to apex)

### 3. DNS records (at your domain registrar)

| Type | Name | Value |
|------|------|-------|
| **A** | `@` | `76.76.21.21` |
| **CNAME** | `www` | `cname.vercel-dns.com` |

DNS can take 5–60 minutes to propagate. Vercel will show a green check when it's valid.

### 4. HTTPS
Vercel issues SSL automatically once DNS is verified.

---

## Live Demo

Deploy on [Vercel](https://vercel.com) by importing `pawani-2502/FIRST-PROTFOLIO`.

## Stack

- Next.js 15 + React 19
- GSAP + Framer Motion animations
- Lenis smooth scroll
- Tailwind CSS

## Run Locally

```bash
pnpm install
pnpm dev
```

## Author

**Pawani Sharma** — [pawani-2502](https://github.com/pawani-2502)

## Links

- GitHub: [pawani-2502](https://github.com/pawani-2502)
- LinkedIn: [pawani-sharma02](https://www.linkedin.com/in/pawani-sharma02/)
