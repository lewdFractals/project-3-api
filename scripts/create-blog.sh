#!/bin/bash

curl --include --request POST http://localhost:3000/blogs \
  --header "Authorization: Token token=rgPKrLLvn/vPv+thaYJfnwtArKhkXpVTXplkeiwo9z4=--hIYGk6rc9t2NZ4JTF8ruZlX5CeMN76LmKRT1x8m5BhY=" \
  --header "Content-Type: application/json" \
  --data '{
    "blog": {
      "content": "more really useless words",
      "title": "You are nice",
      "author": "Lauren",
      "_owner": "req.currentUser._id"
    }
  }'

  curl --include --request POST http://localhost:3000/examples \
    --header "Authorization: Token token=/YkBQ1GEWDcDqFHfT8DN/ltguj8Ry+0W8jomFkKuj54=--Fd1tFRIlCM+M4a8VAYVn1RYQxGCfg3o0PrGh/4VudAc=" \
    --header "Content-Type: application/json" \
    --data '{
      "example": {
        "text": "cdflkjadfhjkadsfljkadsfhjadsfhladfslhjadslh",
        "_owner": "req.currentUser._id"
      }
    }'
