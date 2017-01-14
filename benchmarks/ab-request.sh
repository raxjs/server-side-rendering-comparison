#!/bin/sh

# compare req&res by ab cmd

# before: npm run start

ab -n1000 -c50 http://127.0.0.1:3300/rax
ab -n1000 -c50 http://127.0.0.1:3300/react
ab -n1000 -c50 http://127.0.0.1:3300/vue