# the base image - Debian/jessie with Java8
FROM ubuntu

RUN apt-get update && apt-get upgrade -y && \
	apt-get install -y wget && \
	apt-get -y install supervisor && \
	apt-get -y install curl && \
	mkdir -p /var/log/supervisor

WORKDIR /

# download and invoke NVM installer from github
# nvm is a tool that makes node.js installation smooth
RUN curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.27.1/install.sh | bash

# set nvm dir 
ENV NVM_DIR /root/.nvm

# install stable node and use it
RUN . ~/.nvm/nvm.sh && nvm install 4.1.1

# Supervisor Configuration
ADD supervisord.conf /etc/supervisor/conf.d/supervisord.conf

ADD server.js /hapijs-server/server.js
ADD client /hapijs-server/client

# 8080 = node.js server based on HapiJs running the API proxy/wrapper
EXPOSE 8080

USER root

# Default command when starting the container
# starts OrietnDB and loads a test database
CMD ["/usr/bin/supervisord", "-c", "/etc/supervisor/conf.d/supervisord.conf"]
