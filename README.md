# vBase docs

Setup, operating and troubleshooting guides for **vBase**, the ONECOMET private cloud platform.
Published at **https://vbase.docs.onecomet.co.nz**.

Built with [Starlight](https://starlight.astro.build). Pages are Markdown files in
[`src/content/docs/`](src/content/docs/); the sidebar is in [`astro.config.mjs`](astro.config.mjs).
Every push to `main` builds and publishes the site (`.github/workflows/deploy.yml`); pull requests are
built as a check.

```sh
npm ci
npm run dev     # http://localhost:4321
npm run build   # into dist/
```

Spotted a mistake? Use **Edit page** at the bottom of any page, or open an issue.

The site also publishes `/llms.txt`, so AI assistants read the same docs people do.

Licensed under [CC BY 4.0](LICENSE): reuse it with credit to ONECOMET.
