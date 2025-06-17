# Deployment Workflow Update Plan

This document tracks proposed updates to ensure correct asset handling for GitHub Pages deployment.

## Tasks
1. **Update GitHub Actions workflow**
   - Add environment variable `NEXT_PUBLIC_BASE_PATH: /ankh-studio.github.io` to the build step in `.github/workflows/deploy.yaml` so exports use the proper base path.

2. **Use asset path helper**
   - Replace hardcoded asset references like `/videos/...` and `/favicon.ico` with `assetPath('videos/...')` in React components.
   - Update SCSS files to use relative paths (e.g., `url('../images/anubis.png')`).

3. **Fix styling and paths**
   - Correct `background-iamge` typo in `HomePage.scss`.
   - Verify all images and video sources are handled via relative paths or the helper.

4. **Add 404.html**
   - Create a simple `404.html` in the repository root for GitHub Pages to serve.

5. **Rebuild with env variable**
   - Build locally with `NEXT_PUBLIC_BASE_PATH=/ankh-studio.github.io npm run build`.
   - Commit the generated `out/` folder if not using the workflow to deploy automatically.

6. **Verify deployment**
   - After pushing, check GitHub Pages settings for artifact source and ensure `.nojekyll` is present.

