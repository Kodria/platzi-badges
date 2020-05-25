FROM node:8 AS base
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install --silent
ARG PORT
EXPOSE ${PORT}
EXPOSE 3001
COPY [".", "/usr/src/app"]
CMD npm run dev