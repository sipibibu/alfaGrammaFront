FROM node:18-alpine
LABEL authors="zhvl0"

RUN npm install -g nodemon
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 5173
CMD ["npm", "run", "dev"]