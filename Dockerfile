FROM node:11

WORKDIR /naive-cms

COPY package.json yarn.lock tsconfig.json ./

RUN yarn

COPY ./server ./server

EXPOSE 4000

CMD yarn start:server
