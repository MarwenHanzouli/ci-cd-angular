FROM node:latest AS builder
LABEL maintaner="Marwen Hanzouli"
WORKDIR /app
COPY . /app
RUN npm i
RUN $(npm bin)/ng build --prod

FROM nginx:latest
COPY --from=builder /app/dist/ci-cd-angular /usr/share/nginx/html