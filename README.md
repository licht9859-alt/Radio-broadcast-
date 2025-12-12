# Radio-broadcast-
CLSU Vibe 101.5 FM is a mobile-friendly radio site. This repo now includes a simple static site you can edit and publish with GitHub Pages.

Quick start

- Edit `index.html`, `styles.css`, or `app.js` to customize the site. Replace the placeholder stream URL inside `app.js` with your station's MP3/AAC stream URL (put it in `defaultStream`).
- Preview locally with a simple static server, for example:

```bash
# Python 3 (from repo root)
python -m http.server 8000
# then open http://localhost:8000
```

Publish to GitHub Pages (automatic)

1. Commit and push your changes to the `main` branch.
2. This repo includes a GitHub Actions workflow that will publish the repository root to the `gh-pages` branch on each push to `main`.
3. In your repository's settings → Pages, set the source to the `gh-pages` branch (if not already set). The site will be available at `https://<your-username>.github.io/<repo-name>/`.

If you'd prefer manual publishing, you can put site files in the `docs/` folder and enable Pages from `main/docs`.
