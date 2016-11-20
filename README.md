
# Rx vs React In SSR

Dep React, Rx, Koa, Babel and so on.

## Start

Start koa server

```bash
# http://127.0.0.1:3300/
npm run react

# http://127.0.0.1:3000/
npm run rx
```

## Build

Build js code

```bash
npm run build
```

## Notes

- Rx stateless
- Rx style 100px 不能用 100
- window.Rx.version 有问题
- Rx 在 renderToString 时会执行到 componentDidMount 的生命周期