FROM node:16-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --force
COPY front_land .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
# docker build -t my-react-app .
# docker run -p 3000:3000 --name front_land my-react-app