FROM node:12-alpine
ENV NODE_ENV=production
WORKDIR /app
# COPY "package.json" "./"
RUN npm install -g http-server
COPY . .
# CMD ["npm", "start"]
CMD http-server -p 8383 -o