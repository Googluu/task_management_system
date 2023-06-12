FROM node:18-alpine

WORKDIR /usr/src/task-management-system/app

COPY package*.json ./

COPY ./ ./

RUN npm install

RUN npm run migrations:generate

RUN npm run migrations:run

EXPOSE 3000

CMD ["npm", "start"]
