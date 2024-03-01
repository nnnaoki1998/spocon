# FROM ubuntu:18.04
# RUN apt-get -y update
# RUN apt-get install -y \
#     curl \
#     gnupg
# RUN curl -sL https://deb.nodesource.com/setup_16.x | bash -
# RUN apt-get install -y nodejs
# COPY package*.json ./
# RUN npm ci

# ENV NODE_ENV=development

FROM node:20-alpine

WORKDIR /root/react-docker

COPY package.json package-lock.json ./
RUN npm install --legacy-peer-deps

COPY . .

ENV NODE_ENV=development

