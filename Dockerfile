FROM node:12

WORKDIR /home/gui/app

COPY . .

RUN rm -f .env

RUN echo NEXT_PUBLIC_API_URL=https://api.architecture.charrez.ch > .env.local

RUN npm install

RUN npm run build

RUN npm prune --production

EXPOSE 3000

CMD [ "npm", "run", "start" ]
