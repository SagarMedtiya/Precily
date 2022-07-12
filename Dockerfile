FROM node:16 as build
WORKDIR /frontend
ENV PORT = $port
COPY ./frontend/package*.json ./
RUN npm install
COPY ./frontend/ ./
EXPOSE $port
RUN npm run build