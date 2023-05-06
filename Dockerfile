FROM node:18.16.0-alpine3.17
COPY src /www/rest-puppet/src
COPY package.json /www/rest-puppet/

WORKDIR /www/rest-puppet

RUN npm install \
 && npm install -g nodemon

ENTRYPOINT  ["npm", "start"]

EXPOSE 3000