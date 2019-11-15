# Server-side Rendering Comparison

## Benchmark info

- with `NODE_ENV=production`. `renderToString` both require from `lib` not `dist`
- with about 600 dom nodes

## Run

```bash
# prepare
npm install
npm run webpack

# run renderToString benchmark
NODE_ENV=production node benchmarks/renderToString.js
```

## Result

```bash
-----------compare renderToString----------
React(16.12.0)#renderToString x 1,664 ops/sec ±1.40% (84 runs sampled)
Rax(1.0.13)#renderToString x 13,411 ops/sec ±1.05% (85 runs sampled)
Preact(10.0.5)#renderToString x 1,237 ops/sec ±2.18% (84 runs sampled)
Xtpl(3.4.2)#renderFile x 11,335 ops/sec ±8.17% (69 runs sampled)

The benchmark was run on:
   PLATFORM: darwin 17.5.0
   CPU: Intel(R) Core(TM) i7-7660U CPU @ 2.50GHz
   SYSTEM MEMORY: 16GB
   NODE VERSION: v10.11.0
```