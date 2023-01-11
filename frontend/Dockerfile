FROM httpd:alpine

EXPOSE 80

RUN rm /usr/local/apache2/htdocs/*

COPY . /opt/app

RUN apk add nodejs-current npm

WORKDIR /opt/app 

RUN npm install -g yarn

RUN yarn install

RUN yarn build

RUN cp -rf build/* /usr/local/apache2/htdocs/