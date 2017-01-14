# Server-side Rendering Comparison

## Server-side rendering benchmarks

|Engine\Various|renderToSring   | QPS [#/sec] |
|--------------|----------------|-------------|
| React@15.4.2 | 71.8ms         |  1189.31    |
| Rax@0.1.2    | 39.4ms         |  1266.69    |
| Vue@2.1.8    | 40.4ms         |  1572.41    |

```
MacBook Pro Mid 2014, 2.5 GHz Intel Core i7 with 16 GB memory
Node.js v7.4.0
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
