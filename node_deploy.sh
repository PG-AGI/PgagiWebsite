#! /bin/bash

NAME="pgagi-website"

git pull

pm2 del $NAME

rm -rf .next
npm install
npm run build

pm2 start npm --name $NAME --watch --env production -- start -- -p 5000
pm2 save 
pm2 startup

exit 0
