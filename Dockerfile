FROM node:24

WORKDIR /app

COPY app.js index.html ./

EXPOSE 3000

CMD ["node", "app.js"]