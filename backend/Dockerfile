FROM node:14
WORKDIR /usr/local/bin/backend
COPY . /usr/local/bin/backend/
RUN npm install
RUN npm install --prefix frontend
RUN npm run --prefix frontend build
CMD ["npm", "start"]