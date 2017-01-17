# Server-side Rendering Comparison

## Benchmark info

- Platform info: MacBook Pro (Late 2013) 2.4GHz Intel Core i5 and 8GB 1600MHz DDR3
- Node.js v6.9.2 and with `NODE_ENV=production`. `RenderToString` both require from `lib` not `dist`
- with about 600 dom nodes
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

## Run

```bash
# prepare
npm i
npm run webpack

# run renderToString benchmark
NODE_ENV=production node benchmarks/renderToString.js
```
