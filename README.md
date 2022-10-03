# runme fresh project

A demo project to show off how to use runme

## Start the project locally

```sh
deno task start
```

## Install the Deno deploy CLI

```sh
deno install --allow-read --allow-write --allow-env --allow-net --allow-run --no-check -r -f https://deno.land/x/deploy/deployctl.ts
```

## Set the path

```sh
export PATH="~/.deno/bin:$PATH"
```

## Set your personal access token

```sh
export DENO_DEPLOY_TOKEN=$DENO_ACCESS_TOKEN
```

## Deploy to staging

```sh
deployctl deploy --project=admc-fresh-runme main.ts --import-map=import_map.json
```
