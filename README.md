# Server-side Rendering Comparison

## Benchmark info:

- Platform info: MacBook Pro (Late 2013) 2.4GHz Intel Core i5 and 8GB 1600MHz DDR3
- Node.js v6.9.2 and with `NODE_ENV=production`. `RenderToString` both require from `lib` not `dist`
- with about 600 dom nodes

## Result

### `renderToString`

```
Rax#renderToString x 154 ops/sec ±5.19% (65 runs sampled)
React#renderToString x 94.93 ops/sec ±3.32% (63 runs sampled)
Vue#renderToString x 339 ops/sec ±5.28% (64 runs sampled)
Fastest is Vue#renderToString
```

### QPS

TODO

## Run

```bash
# prepare
npm i
npm run webpack

# run renderToString benchmark
NODE_ENV=production node benchmarks/renderToString.js
```