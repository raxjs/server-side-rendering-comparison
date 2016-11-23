
# Rx SSR Preformance Test

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
- QPS: `ab -n1000 -c50 http://127.0.0.1:3300/react|rx|vue`, without cache

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

Webpack build js for client render.

```bash
npm run build
```

## Notes

- How stateless Component code in Rx?
- Rx don't support 100 to 100px?
- window.Rx.version is wrong!
- Rx call all lifecycle hook in ssr, but React only componentWillMount
- Rx client render can't distinguish the server render content and will repeat
- What's the better way to fetch data for ssr?