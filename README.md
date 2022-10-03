# runme fresh project

### Start the project

```
deno task start
```

### Deploy

Install the Deno deploy CLI

```
deno install --allow-read --allow-write --allow-env --allow-net --allow-run --no-check -r -f https://deno.land/x/deploy/deployctl.ts
```

Deploy to staging

```
deployctl deploy --project=admc-fresh-runme main.ts
```
