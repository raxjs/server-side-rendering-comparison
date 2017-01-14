# Server-side Rendering Comparison

## Server-side rendering benchmarks

|Engine\Various|renderToSring   | QPS [#/sec] |
|--------------|----------------|-------------|
| React@15.4.2 | 152.73ms         |  444.10    |
| Rax@0.1.2    | 89.70ms         |  513.54 |
| Vue@2.1.8    | 100.06ms         |  599.58   |

```
MacBook Air Intel Core i5 @1.4 GHz x 2 with 8 GB memory
Node.js v6.9.4
```

- renderToSring: Independent process serial execution 10 times, each process parallel rendering 100 times, without cache.
- QPS: `ab -n1000 -c50 http://127.0.0.1:3300/react|rax|vue`, without cache

## Start

install deps

```bash
npm i
```

build assets

```bash
npm run webpack
```

start koa server

```bash
npm run start
```

run benchmark

```bash
npm run benchmark
```

## dev

```bash
npm run webpack:client -- --watch
npm run webpack:server -- --watch
```
