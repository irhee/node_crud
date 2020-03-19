FROM node:6-alpine
EXPOSE 8080
COPY server.js .
CMD node server.js