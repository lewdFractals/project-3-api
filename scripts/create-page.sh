curl --include --request POST http://localhost:3000/pages \
  --header "Authorization: Token token=/9M1qwloI4uxb9JknifVV+rdDaJrTRBs3i55GXGddKI=--2P+iebQBFzKF6qJshrkNYcIlBnJu++XwZQcrKSIv0Zw=" \
  --header "Content-Type: application/json" \
  --data '{
    "page": {
      "header": "This page sucks",
      "content": "wordswordwords",
      "sidebar": "more words",
      "footer": "shit",
      "_owner": "req.currentUser._id"
    }
  }'
