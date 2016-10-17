curl --include --request POST http://localhost:3000/pages \
  --header "Authorization: Token token=HkVBJoGxrnYtP8jJnBKbk6UVy4JPZJJ6tF0ApRh8xW8=--jxI07TskgnCcluz+nDO0lNYSPuLQtt+2qzvf92Mj5RE=" \
  --header "Content-Type: application/json" \
  --data '{
    "page": {
      "header": "This page still really sucks",
      "content": "words",
      "sidebar": "words",
      "footer": "stuff",
      "_owner": "req.currentUser._id"
    }
  }'
