FROM node:18-alpine

EXPOSE 3000

COPY . /opt/app

WORKDIR /opt/app

RUN npm update

RUN npm install yarn

RUN yarn install

CMD yarn start