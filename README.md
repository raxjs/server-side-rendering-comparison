# Server-side Rendering Comparison

## Server-side rendering benchmarks

|Engine\Various|renderToSring   | QPS [#/sec] |
|--------------|----------------|-------------|
| React@15.3.2 | 337.2ms        |  180.65     |
| Rx@0.0.7     | 64.4ms         |  307.38     |
| Vue@2.0.8    | 91.6ms         |  287.77     |

```
MacBook Air Intel Core i5 @1.4 GHz x 2 with 8 GB memory
Node.js v4.3.2
```

- renderToSring: Independent process serial execution 10 times, each process parallel rendering 100 times, without cache.
- QPS: `ab -n1000 -c50 http://127.0.0.1:3300/react|rax|vue`, without cache

## Start

install dep

```bash
npm i
```

start koa server

```bash
npm run start
```

run benchmark

```bash
npm run benchmark
```

## Build

build assets by webpack:

```bash
npm run build
```
