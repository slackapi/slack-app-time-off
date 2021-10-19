# Request Time-Off App for Slack Next Generation Platform
This repo contains a sample project and embedded lightweight SDK of a Typescript based project for the new Deno runtime.

The main file that brings it all together is the `project.ts` file.  So far only `functions` and `workflows` are supported and those should each be created in a file per, under each corresponding directory. `functions/dino.ts` has a simple sample. After you create a new function or workflow make sure you add it to the `Project` object in `project.ts`.

## Testing
You can write tests for your function, see `functions/dino_test.ts` for a sample. Test base filenames should be suffixed with `_test`. To run tests just run:
```
hermes deno test
```

## Bundling
To bundle to stdout:
```
hermes deno bundle .slack/run.ts
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
  && hermes deno bundle .slack/run.ts > ./package/bundle.js \
  && cd ./package \
  && zip -m ../dist/package.zip ./* \
  && cd .. \
  && rm -rf ../package \
  && echo "\n👋 Oh, hi there. The deployment zip is in ./dist/package.zip"
```


## Manifest and Slack.yaml
To generate a manifest:
```
hermes deno run .slack/manifest.ts > manifest.json
```

To generate a slack.yaml file (yaml encoding of manifest):
```
hermes deno run .slack/slack_yaml.ts > slack.yaml
```

To use the `manifest` hook to create a slack.yaml file in the project root:
```
.slack/hooks/manifest
```
