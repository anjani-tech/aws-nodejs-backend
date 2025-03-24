#!/bin/sh
set -e

echo "Going to download dependencies"
echo "Current working directory is $PWD"

rm -rf node_modules

npm install
