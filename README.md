# PetClin Penedo Brilliance

Crie um site institucional extremamente moderno, dinâmico, sofisticado e responsivo para uma clínica veterinária chamada PetClin — Clínica Veterinária, localizada em Penedo, Alagoas.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/1cea26d3-b318-4783-8ee0-a3922d26a436).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

## Portable images

All site images are real, version-controlled files under `public/images/` and use same-origin `/images/...` paths. Include the entire `public` folder in source ZIPs and repository synchronization. Vite copies public assets into its client output without transforming the originals; deploy that output with the framework's required server runtime, not just the source folder.

`public/images/manifest.json` records each original's destination, dimensions (where available), byte count, SHA-256 checksum and usages. Historical `.asset.json` files remain only for provenance; the app does not import them or request their CDN URLs. Do not delete the historical CDN objects because older published versions may still use them.

Run `bunx vitest run src/test/image-storage.test.ts` to verify files and references. After adding or replacing an image, update the manifest and the audited inventory count in that test. The audit and deployment limitations are recorded in `IMAGE_AUDIT.md`.
