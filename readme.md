# OACIP / Cogniva.ai

## Running locally

**Prerequisites:** Node.js 18+ and npm.

```bash
# Install dependencies (first time only)
npm --prefix website install

# Start local dev server
npm --prefix website run serve
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

The site deploys automatically to GitHub Pages on every push to `main` via the workflow in `.github/workflows/deploy.yml`.

To enable GitHub Pages for this repo: go to **Settings → Pages** and set the source to **GitHub Actions**.
