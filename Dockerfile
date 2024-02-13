FROM node:alpine

WORKDIR /usr/src/app

COPY app/package*.json ./

RUN npm install
COPY app/server.js .
COPY app/objects.json .

EXPOSE 3000

CMD [ "node", "server.js" ]
