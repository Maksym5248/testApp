#!/bin/bash

# echo "$VERSION"

watchman watch-del-all
rm -rf node_modules/
rm -rf /tmp/metro-bundler-cache-*
yarn install --cache /tmp/empty-cache