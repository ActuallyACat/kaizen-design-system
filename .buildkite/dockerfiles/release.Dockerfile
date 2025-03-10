FROM node:14.18.0-alpine3.11

RUN apk update && apk add --no-cache \
  git \
  openssh \
  python \
  py-pip \ 
  gcc \ 
  alpine-sdk \ 
  python-dev

RUN pip install \
  awscli
