FROM node:lts-alpine3.19

WORKDIR /app

COPY package.json .

RUN npm install --legacy-peer-deps

COPY . .

EXPOSE 3000

CMD ["npm", "start"]