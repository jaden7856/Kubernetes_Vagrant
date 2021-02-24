FROM alpine:latest

RUN apk update && apk add --no-cache nodejs npm

WORKDIR /
ADD ./package.json /
RUN npm install
ADD ./webapl.js /

CMD node /webapl.js
