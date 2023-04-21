FROM node:alpine
WORKDIR /app
EXPOSE 2000
COPY package*.json ./ 
RUN npm install
COPY . . 
CMD [ "npm", "run", "dev" ]