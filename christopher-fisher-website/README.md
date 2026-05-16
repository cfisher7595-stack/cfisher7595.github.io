# Christopher J. Fisher Website

A professional academic and innovation-focused website inspired by Stanford Biodesign, Stanford d.school, and Harvard Business Review.

## Local setup

```bash
npm install
npm run dev
```

Then open the local URL shown in your terminal.

## Build

```bash
npm run build
```

## Deploy to GitHub Pages

1. Create a new GitHub repository, for example:

```text
christopher-fisher-website
```

2. Upload all files in this folder to that repository.

3. In `package.json`, add this line near the top and replace `cfisher7595` and the repo name if needed:

```json
"homepage": "https://cfisher7595.github.io/christopher-fisher-website",
```

4. Install and deploy:

```bash
npm install
npm run deploy
```

5. In GitHub, go to:

```text
Settings → Pages
```

Set source to:

```text
Deploy from a branch
```

Select:

```text
gh-pages
```

Your site will be available at:

```text
https://cfisher7595.github.io/christopher-fisher-website
```

## Deploy to Vercel

You can also import this repository into Vercel. Vercel will automatically detect Vite and deploy it.
