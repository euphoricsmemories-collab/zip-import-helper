import { createHash } from "node:crypto";
import { readFileSync, readdirSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

const root = resolve(import.meta.dirname, "../..");
const manifest = JSON.parse(readFileSync(resolve(root, "public/images/manifest.json"), "utf8")) as {
  path: string;
  bytes: number;
  sha256: string;
}[];

describe("Portable image storage", () => {
  it("preserves all 31 audited originals as real files with matching checksums", () => {
    expect(manifest).toHaveLength(31);
    expect(new Set(manifest.map((entry) => entry.path)).size).toBe(31);
    for (const entry of manifest) {
      expect(entry.path.startsWith("/images/")).toBe(true);
      const bytes = readFileSync(resolve(root, "public", entry.path.slice(1)));
      expect(bytes.length).toBe(entry.bytes);
      expect(createHash("sha256").update(bytes).digest("hex")).toBe(entry.sha256);
    }
  });

  it("does not use development-only or remote image sources in site components or CSS", () => {
    const components = resolve(root, "src/components/petclinic");
    const paths = readdirSync(components).filter((name) => name.endsWith(".tsx")).map((name) => resolve(components, name));
    paths.push(resolve(root, "src/styles.css"));
    for (const path of paths) {
      const text = readFileSync(path, "utf8");
      expect(text).not.toMatch(/@\/assets\/|\/__l5e\/assets-v1\/|user-uploads:\/\/|\/tmp\//);
      expect(text).not.toMatch(/(?:src=\{?["']|url\(["']?)https?:\/\//);
    }
  });
});