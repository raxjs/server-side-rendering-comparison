#!/bin/sh

export NODE_ENV=production
cd benchmarks/

echo '-----------compare renderToString----------'
node ./renderToString.js
echo '-----------compare qps------------'
bash ./ab-request.sh
echo '-----------compare end------------'