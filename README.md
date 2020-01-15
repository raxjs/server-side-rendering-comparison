# Server-side Rendering Comparison

## Benchmark info

- With `NODE_ENV=production`. `renderToString` both require from `lib` not `dist`.
- With about 600 dom nodes.

## Run

```bash
# prepare
npm install
npm run webpack

# run renderToString benchmark
npm run benchmark
```

## Result

```bash
React(16.12.0)#renderToString x 1,178 ops/sec ±1.23% (85 runs sampled)
Rax(1.1.1)#renderToString x 6,047 ops/sec ±1.73% (82 runs sampled)
Inferno(7.3.3)#renderToString x 3,335 ops/sec ±1.77% (82 runs sampled)
Preact(10.2.1)#renderToString x 1,005 ops/sec ±1.10% (86 runs sampled)
Marko(4.18.33)#renderToString x 10,291 ops/sec ±1.64% (86 runs sampled)
xtemplate(4.7.2)#render x 20,600 ops/sec ±2.89% (84 runs sampled)

The benchmark was run on:
   PLATFORM: linux 5.0.0-1027-azure
   CPU: Intel(R) Xeon(R) CPU E5-2673 v4 @ 2.30GHz
   SYSTEM MEMORY: 6.782737731933594GB
   NODE VERSION: v10.18.1
```

- Result history: https://github.com/raxjs/server-side-rendering-comparison/actions