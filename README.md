# Server-side Rendering Comparison

## Benchmark info

- Platform info: MacBook Pro (Late 2013) 2.4GHz Intel Core i5 and 8GB 1600MHz DDR3
- Node.js v6.9.2 and with `NODE_ENV=production`. `renderToString` both require from `lib` not `dist`
- with about 600 dom nodes
- React v15.4.2
- Rax v0.2.3
- Vue v2.2.2
- Preact v7.2.0
- Inferno v1.3.1

## Run

```bash
# prepare
npm install
npm run webpack

# run renderToString benchmark
NODE_ENV=production node benchmarks/renderToString.js
```
