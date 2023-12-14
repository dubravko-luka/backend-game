FROM node:14.20.0

WORKDIR /app

COPY . .

RUN yarn && yarn build

RUN yarn --production=true

# RUN chmod 600 /app/build/ssl/key.pem

# RUN chmod 600 /app/build/ssl/cert.pem

EXPOSE 8083

CMD ["yarn", "start"]