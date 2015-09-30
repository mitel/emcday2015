#!/bin/bash

# executed by npm run docker-deploy - see package.json

docker stop emcday2015; 
docker rm emcday2015; 
docker build -t mitel/emcday2015 dist/docker/; 
docker run -d --name=\"emcday2015\" -p 8080:8080 mitel/emcday2015; 
docker logs -f emcday2015;