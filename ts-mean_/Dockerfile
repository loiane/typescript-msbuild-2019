# Client Angular App
FROM node:10.15.3-alpine as client-app
WORKDIR /app/client
COPY client/package.json /app/client
RUN npm install --silent
COPY client /app/client
RUN npm run build --prod

# Node server
FROM node:10.15.3-alpine as server-app
WORKDIR /app/server
COPY server/package.json /app/server
RUN npm install --production --silent
COPY server /app/server
RUN npm install typescript && npm run build

# Final image
FROM node:10.10.0-alpine
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY --from=server-app /app/server/dist /usr/src/app
COPY --from=server-app /app/server/node_modules /usr/src/app/node_modules
COPY --from=client-app /app/client/dist/ts-mean /usr/src/app/public
EXPOSE 3000
CMD [ "node", "index.js" ]