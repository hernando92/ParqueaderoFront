# satge 1
FROM node:18.9.0 AS build-env
WORKDIR /app

COPY package.json /app 
RUN npm install 
COPY . /app

RUN npm run build

#stage 2
FROM nginx:1.13.9-alpine
COPY --from=build-env /app/dist/parqueadero/ /usr/share/nginx/html
COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]