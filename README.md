# Ignore Add Options

This Yarn Plugin helps you to ignore legacy flags from Yarn v1 – while you add dependencies with Yarn v3 – without braking the initial command.

This way, CIs which by default run e.g. `yarn add --non-interactive --ignore-workspace-root-check --audit` – will still work., as it becomes `yarn add`.

## Requirements

- Yarn v3 or higher.
- Node.js 14.17.6 or higher.

## How to use?

1. Run one of these commands:

`yarn add -D yarn-plugin-ignore-add-options`

or

`yarn plugin import https://raw.githubusercontent.com/rewardops/plugin-ignore-add-options/main/index.js`

2. and git commit the new generated file inside /plugins.
