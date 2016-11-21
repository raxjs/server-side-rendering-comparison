
# Rx SSR Preformance Test

## Result

```bash
-----------compare renderToString----------

rx: 59.321ms  react: 386.257ms
rx: 60.193ms  react: 304.344ms
rx: 58.265ms  react: 299.944ms
rx: 63.940ms  react: 500.532ms
rx: 70.413ms  react: 573.114ms
rx: 63.822ms  react: 419.672ms
rx: 76.518ms  react: 318.025ms
rx: 72.692ms  react: 301.349ms
rx: 107.475ms react: 281.610ms
rx: 77.521ms  react: 280.349ms

-----------compare qps------------

# React
Benchmarking 127.0.0.1 (be patient)
...
Finished 1000 requests

Server Hostname:        127.0.0.1
Server Port:            3300

Document Path:          /rx
Document Length:        3253 bytes

Concurrency Level:      50
Time taken for tests:   2.979 seconds
Complete requests:      1000
Failed requests:        0
Total transferred:      3390000 bytes
HTML transferred:       3253000 bytes
Requests per second:    335.72 [#/sec] (mean)
Time per request:       148.935 [ms] (mean)
Time per request:       2.979 [ms] (mean, across all concurrent requests)
Transfer rate:          1111.41 [Kbytes/sec] received

...

# Rx
Benchmarking 127.0.0.1 (be patient)
...
Finished 1000 requests

Server Hostname:        127.0.0.1
Server Port:            3300

Document Path:          /react
Document Length:        3961 bytes

Concurrency Level:      50
Time taken for tests:   4.173 seconds
Complete requests:      1000
Failed requests:        0
Total transferred:      4098000 bytes
HTML transferred:       3961000 bytes
Requests per second:    239.63 [#/sec] (mean)
Time per request:       208.656 [ms] (mean)
Time per request:       4.173 [ms] (mean, across all concurrent requests)
Transfer rate:          958.98 [Kbytes/sec] received

...

-----------compare end------------
```

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

Babel transfer src(es6) to dest(es5) for server render.

```bash
npm run babel
```

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