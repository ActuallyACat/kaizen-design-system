#!/usr/bin/env bash
set -eo pipefail

yarn install --frozen-lockfile
yarn test --ci --collect-coverage

buildkite-agent artifact upload --help

buildkite-agent artifact upload "coverage/*"

cat << EOF | buildkite-agent annotate --style "info"
  Read the <a href="artifact://coverage/index.html">uploaded coverage report</a>
EOF
