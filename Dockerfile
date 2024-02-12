FROM node:18 AS builder

WORKDIR /src

COPY package.json package-lock.json /src/

RUN npm install

COPY . /src

CMD ["npm", "start"]
