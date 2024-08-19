#!/bin/bash

CURRENT="dfs"
ALGO=${1:-${CURRENT}}

case $ALGO in
  "knight-tour") ALGO="backtracking/$ALGO" ;;
  "dfs") ALGO="tree/$ALGO" ;;
esac

node --loader ts-node/esm src/algo-ts/${ALGO}.ts