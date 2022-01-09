FROM node:14.15

RUN mkdir /usr/src/app

WORKDIR /usr/src/app

RUN npm install
RUN npm install typescript@latest
RUN npm install --save-dev @angular-devkit/build-angular
RUN npm install -g @angular/cli@latest

COPY . /usr/src/app/

CMD ng serve --host 0.0.0.0 --port 4200
