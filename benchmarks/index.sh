#!/bin/sh

cd benchmarks/
node ./renderToString.js
bash ./ab-request.sh