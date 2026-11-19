FROM node:14

WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci --omit=dev \
    && rm -rf /usr/local/lib/node_modules/npm /usr/local/bin/npm /usr/local/bin/npx

COPY --chown=node:node . .

EXPOSE 3000

USER node

CMD ["node", "src/server.js"]