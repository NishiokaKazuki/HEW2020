FROM  node:latest

WORKDIR /HEW2020/client
COPY . .
RUN yarn install --ignore-engines
CMD ["yarn", "start"]
EXPOSE 3000