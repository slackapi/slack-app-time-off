# Time-Off App Sample

Please follow the demo for [Slack Frontiers 2021: Supercharge your workflow with next-gen developers tools](https://slack.com/frontiers).

This sample project shows how to submit and receive time-off requests in Slack.

## Setup

Create a new project using this as repo as a template.

```bash
slack create -t slackapi/slack-app-time-off
```

## Running it locally

```bash
slack run
```

## Deploying to Slack's Hosting

```bash
slack deploy
```

## Testing

```bash
slack deno test
```

## Bundling

To bundle to stdout:

```bash
deno --unstable bundle .slack/run.ts
```

To bundle using the "hook", this required a path to a directory to package into that is expected to be used to zip for the deployment package:
(note /tmp/some-dir needs to exist!)
```
.slack/hooks/package /tmp/some-dir
```

The packaged zip file that is deployed should contain a single file named `bundle.js`. You might bundle and build that like this:
```
rm -rf ./package ./dist \
  && mkdir ./package ./dist \
  && deno --unstable bundle .slack/run.ts > ./package/bundle.js \
  && cd ./package \
  && zip -m ../dist/package.zip ./* \
  && cd .. \
  && rm -rf ../package \
  && echo "\n👋 Oh, hi there. The deployment zip is in ./dist/package.zip"
```

## Manifest and Slack.yaml

To generate a manifest:
```
deno --unstable run .slack/manifest.ts > manifest.json
```

To generate a slack.yaml file (yaml encoding of manifest):
```
deno --unstable run .slack/slack_yaml.ts > slack.yaml
```

To use the `manifest` hook to create a slack.yaml file in the project root:
```
.slack/hooks/manifest
```
