#!/bin/bash

# prepare the resources needed to build the docker image
rm -rf dist/docker;
mkdir dist/docker;
cp runtime/docker/Dockerfile ./dist/docker;
cp runtime/docker/supervisord.conf dist/docker;
cp dist/server/server.js dist/docker;
cp -r dist/client dist/docker/client