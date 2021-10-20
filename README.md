# Time-Off App for Slack Next Generation Platform

This repo contains a sample project and embedded lightweight SDK of a Typescript based project for the new Deno runtime.

The main file that brings it all together is the `project.ts` file.  So far only `functions` and `workflows` are supported and those should each be created in a file per, under each corresponding directory. `functions/dino.ts` has a simple sample. After you create a new function or workflow make sure you add it to the `Project` object in `project.ts`.

## Getting Started

You can get started by creating a new app from this template:

```bash
$ hermes create -t slackapi/slack-app-time-off
```

Then deploy it to Slack:

```bash
$ hermes deploy
```

## Testing

You can write tests for your function, see `functions/time_off_save_test.ts` for a sample. Test base filenames should be suffixed with `_test`. To run tests just run:

```bash
$ slack deno test
```
