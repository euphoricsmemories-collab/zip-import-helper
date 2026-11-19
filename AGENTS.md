<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep the location section separate from the appointment CTA; use a public keyless Google Maps iframe and a directions sharing URL with the confirmed clinic point and omitted origin, avoiding billing dependencies and allowing Maps to choose the visitor's location.
- Facade overlays on the location map must ignore pointer events so dragging and zooming remain accessible.
- Keep the About photo carousel in its own browser-safe component with timing and cyclic position rules in a shared module; this isolates interaction from institutional content and makes rotation rules testable.
- Keep Differential photos paired with their existing content in the section's data array; this preserves ordering across responsive layouts.
- Keep Pet Shop photo slots in an ordered array with nullable sources and section-scoped styles; this supports pending real photos without duplication or changes to other sections.
- Keep site image binaries in public/images with same-origin /images references and update its manifest (size and SHA-256) when replacing or adding images; this makes source exports portable and verifies actual files rather than live URLs. Legacy CDN pointers are provenance only, not runtime sources.
