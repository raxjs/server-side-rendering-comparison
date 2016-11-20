#!/bin/sh

# compare req&res by ab cmd

# node ../app.js

ab -n1000 -c50 http://127.0.0.1:3300/rx
ab -n1000 -c50 http://127.0.0.1:3300/react