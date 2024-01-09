#!/bin/bash

echo "Beginning setup..."
if [[ $DEV_MODE == true ]]; then
  echo "Starting in development mode..."
  cd mnt || exit 1
else
  echo "Starting in production mode..."
  cd app || exit 1
fi

echo "Beginning NPM package installation..."
npm i
echo "NPM package installation complete."

if [[ $1 == "frontend" ]]; then
  if [[ $DEV_MODE == true ]]; then
    npm run dev
  else
    npm run deploy
  fi
elif [[ $1 == "backend" ]]; then
  npm start
fi
