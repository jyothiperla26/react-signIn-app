FROM node:18-alpine
WORKDIR /index
COPY . .
RUN npm install && npm run build
CMD ["npm", "start"]
EXPOSE 3000