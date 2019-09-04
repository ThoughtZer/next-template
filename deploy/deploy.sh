#!/bin/bash
PM2_PROJECT=`pm2 id next-project`

RESULT="[]"

if [ "$PM2_PROJECT" = "$RESULT" ]; then
  npm run build && pm2 start npm --name 'next-project' -- run start
else
  rm -rf ./build
  npm run build && pm2 restart 'next-project'
fi
