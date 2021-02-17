# Repo to illustrate some nextjs/fab build issues

ui-config package is included in the site and builds esm and "standard" outputs.
the package is transpiled during next build using `next-transpile-modules`
However in the fab build, the raw esm output is also included which breaks when we serve fabs.

run `yarn build` and then `yarn fab:serve` in packages/site
It wil fail with syntax error
