# Build the static Next.js website using node 10
FROM node:10-alpine AS build
WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY . /app/
RUN npm run export

# Build a nginx container
FROM nginx:alpine
COPY --from=build /app/out /usr/share/nginx/html/
COPY nginx.conf /etc/nginx/conf.d/default.conf
