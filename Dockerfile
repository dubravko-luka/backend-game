FROM node:14.20.0

WORKDIR /app

COPY . .

RUN yarn && yarn build

RUN yarn --production=true

EXPOSE 8083

CMD ["yarn", "start"]