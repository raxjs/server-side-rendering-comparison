#!/bin/sh

export NODE_ENV=production
cd benchmarks/

echo '-----------compare renderToString----------'
node ./renderToString.js