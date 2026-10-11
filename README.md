# cormac.is

Personal site. SvelteKit, prerendered to static files.

```
npm install
npm run dev
```

`npm run build` writes the site to `build/`.

Pushes to `main` run `.github/workflows/deploy.yml`, which builds the site and syncs `build/` to `s3://www.cormac.is` (`us-east-1`). The sync deletes objects in the bucket that are not in the build.

The workflow uses these repository secrets:

- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`
