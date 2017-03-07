FROM node:6.3.1

# Create app directory
RUN mkdir -p /src/app
WORKDIR /src/app

RUN npm install -g http-server

# Install app dependencies
COPY package.json /src/app/

RUN npm install

# Bundle app source
COPY . /src/app

# Build and optimize react app
RUN npm run build

EXPOSE $PORT

# defined in package.json
CMD [ "npm", "run", "start:server" ]