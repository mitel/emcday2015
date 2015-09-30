#!/bin/bash

# prepare the resources needed to build the docker image
rm -rf dist/cf;
mkdir dist/cf;
cp runtime/cf/package.json dist/cf;
cp runtime/cf/manifest.yml dist/cf;
cp -r dist/server/server.js dist/cf;
cp -r dist/client dist/cf/client;