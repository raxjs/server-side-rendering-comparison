# Server-side Rendering Comparison

## Result

```
MacBook Pro (Retina, 13-inch, Late 2013) 2.4 GHz Intel Core i5 with 8 GB 1600 MHz DDR3
Node.js v6.9.4
React v15.4.2
Rax v0.1.2
Vue v2.1.8 
```

### `rendetToString`

```
Rax#renderToString x 60.00 ops/sec ±8.88% (51 runs sampled)
React#renderToString x 41.77 ops/sec ±7.57% (54 runs sampled)
Vue#renderToString x 119 ops/sec ±5.88% (63 runs sampled)
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