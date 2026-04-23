FROM node:22
WORKDIR /app-front
COPY . /app-front/
RUN npm install
EXPOSE 3000
CMD [ "npm", "start", "--", "--host" ]