#!/bin/sh
set -e

yarn install --frozen-lockfile
yarn run prebuild
yarn tsc
