#EMC xChange Day 2015
A presentation about cloud-native apps based on Spectacle & ReactJS

Run it local, on CloudFoundry or a Docker container

##Getting Started

Clone this repository, open a terminal and run `npm install`

Then, to start up the local server, run `npm start`

Open a browser and hit `http://localhost:3000`, and we are ready to roll.

## Build & Deploy with Docker

Check the runtime/docker folder for the Dockerfile source 

Make sure that your docker-machine env is configured for the current CLI session. Also make sure you have port 8080 forwarded to your localhost (Mac users).

Building for Docker: `npm run docker`

This will build a local docker image and start a container named `emcday2015`.

Open a browser and hit `http://localhost:8080`, and we are ready to roll.

## Build & Deploy with CloudFoundry

This was tested on the Pivotal public CF instance on `http://run.pivotal.io` 

Check the runtime/cf folder for the manifest.yml. You should modify at least the name of the app.

Building for CF: `npm run cf`

Change dir into dist/cf and push it to the cloud with `cf push`

Open a browser to the web address.

## Presenting, concepts & PDF export

This presentatin is done with a ReactJS powered framework built by FormidableLabs.

It has a nice presentation mode, PDF export and lots of goodies.

For details on how to use it, please go to `https://github.com/FormidableLabs/spectacle`
