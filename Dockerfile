FROM node:18-alpine

WORKDIR /usr/src/task-management-system/app

COPY package*.json ./

COPY ./ ./

RUN npm install

ENV NODE_ENV=production

RUN npm run migrations:generate --src/db/migrations/InitDB

RUN npm run migrations:run

EXPOSE 3000

CMD ["npm", "start"]
