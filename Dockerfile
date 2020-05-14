FROM node:8 AS base
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "./"]

FROM base AS dev
EXPOSE 8080
EXPOSE 3001
RUN npm install --silent
COPY [".", "/usr/src/app"]
CMD npm run dev