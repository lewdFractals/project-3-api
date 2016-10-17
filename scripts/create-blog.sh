#!/bin/bash

curl --include --request POST http://localhost:3000/blogs \
  --header "Authorization: Token token=HkVBJoGxrnYtP8jJnBKbk6UVy4JPZJJ6tF0ApRh8xW8=--jxI07TskgnCcluz+nDO0lNYSPuLQtt+2qzvf92Mj5RE=" \
  --header "Content-Type: application/json" \
  --data '{
    "blog": {
      "name": "I am a blog",
      "post": "[title: 'this is the post title', content: 'content words stuff things']",
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
