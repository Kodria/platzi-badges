FROM node:8
EXPOSE 8080
EXPOSE 3001
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "webpack.dll.config.js", "./"]
RUN npm install --silent
RUN npm run build:dll
COPY [".", "/usr/src/app"]
CMD npm run dev