#!/bin/sh
set -e

# shellcheck source=setup-registry.sh
. ".buildkite/scripts/helpers/setup-registry.sh"

yarn install --frozen-lockfile

yarn lerna run --parallel build

# TypeScript build for the whole repo 
yarn tsc