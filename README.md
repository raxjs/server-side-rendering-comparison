# Server-side Rendering Comparison

- MacBook Pro (Retina, 13-inch, Late 2013) 2.4 GHz Intel Core i5 with 8 GB 1600 MHz DDR3
- Node.js v6.9.4
- React v15.4.2
- Rax v0.1.2
- Vue v2.1.8 
- Preact v7.1.0

## Result

### `renderToString`

```
Rax#renderToString x 197 ops/sec ±7.25% (60 runs sampled)
React#renderToString x 113 ops/sec ±7.02% (65 runs sampled)
Preact#renderToString x 700 ops/sec ±4.97% (75 runs sampled)
Vue#renderToString x 391 ops/sec ±9.81% (65 runs sampled)
Fastest is Preact#renderToString
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