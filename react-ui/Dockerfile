FROM node:16.12.0

# Create app directory
RUN mkdir -p /usr/src/react-ui
WORKDIR /usr/src/react-ui

# Install app dependencies
COPY package.json /usr/src/react-ui
RUN npm install

# Bundle app source
COPY . /usr/src/react-ui

EXPOSE 8100
# Build arguments
ARG NODE_VERSION=16.12.0

# Environment
ENV NODE_VERSION $NODE_VERSION
