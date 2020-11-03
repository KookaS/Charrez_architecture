FROM node:12

WORKDIR /home/gui/app

COPY . .

RUN npm install

RUN npm run build

EXPOSE 3000

CMD [ "npm", "run", "start" ]