FROM node:8
EXPOSE 8080
EXPOSE 3001
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install --silent
COPY [".", "/usr/src/app"]
CMD npm run dev