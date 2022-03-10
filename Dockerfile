FROM node:17-alpine

WORKDIR /app
COPY . .
RUN rm -rf node_modules  || true  \
  && yarn i
##CMD ["yarn", "dev"]