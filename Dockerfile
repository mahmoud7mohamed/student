# syntax=docker/dockerfile:1

FROM node:18-alpine
ENV NODE_ENV=production

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --production

COPY . .

CMD ["node", "index.js"]



# FROM node:14-alpine
# WORKDIR /app
# COPY index.js package*.json ./
# RUN npm install
# COPY . .
# EXPOSE 3000
# CMD node index.js