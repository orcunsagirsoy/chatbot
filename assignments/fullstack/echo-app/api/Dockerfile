FROM node

WORKDIR /app

COPY package.json .

RUN npm install --quiet

COPY . .

EXPOSE 8080

RUN npm run build

CMD ["node","dist/app.js"]