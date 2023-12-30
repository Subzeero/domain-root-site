#!/bin/bash

cd app
if [[ $1 == "front"]]; then
  npm i
  npm run build
elif [[ $1 == "back"]]; then
  npm i
  npm start
fi
