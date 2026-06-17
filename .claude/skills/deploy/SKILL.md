Run the full deploy pipeline for this project in order. Stop immediately if any step fails and report the error clearly.

## Steps

1. **Lint** — run `npm run lint`. If there are lint errors, report them and stop. Do not proceed to the build.

2. **Build** — run `npm run build`. If the build fails, report the error and stop.

3. **Push to staging** — run `git add -A` to save any uncommitted work, then push the production build to staging:
   - use `git commit -m 'Add code'`
     -use `git push`

After each step succeeds, print a short confirmation line (e.g. "✓ Lint passed", "✓ Build complete", "✓ Pushed to staging").

At the end, summarise what was deployed and to where.
