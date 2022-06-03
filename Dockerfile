FROM node:14
WORKDIR /test-app
COPY package.json .
RUN npm install
COPY . .
CMD npm start