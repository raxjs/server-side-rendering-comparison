#!/bin/sh

export VUE_ENV=server
cd benchmarks/

echo '-----------compare renderToString----------'
node ./renderToString.js
echo '-----------compare qps------------'
bash ./ab-request.sh
echo '-----------compare end------------'