#!/bin/bash

CURRENT="knight-tour"
ALGO=${1:-${CURRENT}}

case $ALGO in
  "knight-tour" | "knight-tour-simple")
    ALGO="backtracking/$ALGO"
  ;;
esac

node --loader ts-node/esm src/algo-ts/${ALGO}.ts