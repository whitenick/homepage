# @serapiolabs/design-system (vendored)

Local copy of the Serapio Labs design system package, vendored so the build does
not depend on the private GitLab npm registry (the registry token was revoked and
broke every CI build).

Contents mirror the published package (`dist/`, `tailwind.plugin.js`,
`package.json`). Source lives in the Serapio Labs workspace; the copy here was
taken from `serapio-labs/site/vendor/@serapiolabs/design-system`.

Referenced from the root `package.json` as:

```json
"@serapiolabs/design-system": "file:./vendor/serapiolabs-design-system"
```

To update: replace the files here from the package build and re-run `npm install`.
