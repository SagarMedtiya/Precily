FROM node:16 as build
WORKDIR /frontend
COPY ./frontend/package*.json ./
RUN npm install
COPY ./frontend/ ./
EXPOSE 80
RUN npm run build