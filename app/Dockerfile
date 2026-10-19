FROM node:14

WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm install --omit=dev

COPY --chown=node:node . . 

EXPOSE 3000

USER node

CMD ["node", "src/server.js"]
