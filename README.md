# Server-side Rendering Comparison

- MacBook Pro (Retina, 13-inch, Late 2013) 2.4 GHz Intel Core i5 with 8 GB 1600 MHz DDR3
- Node.js v6.9.4
- React v15.4.2
- Rax v0.1.2
- Vue v2.1.8 

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

## Install

```bash
npm i
```

## Run

### run benchmark `renderToString`

```bash
npm run webpack
NODE_ENV=production node benchmarks/renderToString.js
```

### run benchmark QPS

TODO