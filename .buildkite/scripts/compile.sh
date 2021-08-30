#!/bin/sh
set -e

# shellcheck source=setup-registry.sh
. ".buildkite/scripts/helpers/setup-registry.sh"

yarn install --frozen-lockfile

# Run build within each individual package
yarn lerna run build

# TypeScript build for the whole repo 
yarn tsc