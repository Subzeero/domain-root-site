#!/bin/bash

echo "Beginning setup..."
if [[ $DEV_MODE == true ]]; then
  echo "Starting in development mode..."
  cd "$CONTAINER_TYPE/mnt" || exit 1
else
  echo "Starting in production mode..."
  cd "$CONTAINER_TYPE/app" || exit 1
fi

echo "Beginning NPM package installation..."
npm i
echo "NPM package installation complete."

if [[ $CONTAINER_TYPE == "frontend" ]]; then
  if [[ $DEV_MODE == true ]]; then
    npm run dev
  else
    npm run deploy
  fi
elif [[ $CONTAINER_TYPE == "backend" ]]; then
  npm start
fi
