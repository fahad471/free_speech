FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install && npm rebuild

COPY . .

EXPOSE 3000

ENV NEXT_DISABLE_CACHE=1

CMD ["npm", "run", "dev"]
