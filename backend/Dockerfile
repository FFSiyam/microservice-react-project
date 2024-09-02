FROM node:20-alpine
WORKDIR /app
ENV PORT=5001
ENV DB_HOST=34.16.101.190
ENV DB_USER=siyam
ENV DB_PASSWORD=123456789
ENV DB_NAME=user
COPY package*.json .
RUN npm install
COPY . .
EXPOSE 5001
CMD ["node", "src/server.js"]