FROM node:10

WORKDIR ./app

ENV PATH ./node_modules/.bin:$PATH

COPY package.json ./
COPY yarn.lock ./

RUN yarn install

COPY . ./

CMD ["yarn", "start"]