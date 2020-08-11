FROM node:12.4-alpine

LABEL maintainer="kovarimarkofficial@gmail.com"

WORKDIR /usr/src/app

VOLUME [ "/usr/src/app" ]

RUN yarn

ENV NODE_ENV=development
ENV PORT=8080

EXPOSE 8080

CMD [ "yarn", "run", "start"]